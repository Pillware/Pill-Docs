# Hot Function Patching

## Summary

A hot patch replaces the code of one edited function while the project keeps running, without rebuilding and reloading the module that contains it. The host tries a hot patch first for every source edit, and any edit it cannot patch safely falls back to a normal hot reload.

A hot patch is the fast path, and a hot reload is the safe path. An edit that is refused by the patcher costs one reload. An edit that the patcher wrongly accepts could install code that reads memory in the wrong shape, so the patcher refuses whenever it is unsure.

This document covers patching single functions. Reloading a whole module is described in `hot_reloading.md`.

## At a glance

| Piece                | Where it lives                    | Its job                                                                   |
| -------------------- | --------------------------------- | ------------------------------------------------------------------------- |
| Patch session        | `hot_patch/mod.rs`                | one per loaded module: keeps the source snapshot and the patch history    |
| Edit classification  | `hot_patch/mod.rs` (`classify`)   | decides whether the edit changed only function bodies                     |
| Source scanner       | `pill_hot_scan` crate             | finds functions in source text, shared with every module's build script   |
| Compiler line        | `hot_patch/compile.rs`            | captures cargo's exact `rustc` command once, then reruns it for a patch   |
| Background build     | `hot_patch/worker.rs`             | runs `rustc` and loads the patch DLL on another thread                    |
| Install routes       | `hot_patch/routes.rs`             | points every running copy of the function at the new code                 |
| Patch history        | `hot_patch/generations.rs`        | records each patch so it can be rolled back                               |
| Driver               | `runtime.rs`                      | starts attempts, collects builds and installs them between updates        |

All `hot_patch/` paths are under `modules/hosting/pill_development_host/src/`.

```
  you save a source file
          │
          ▼
  between updates: is this a body-only edit? ── no ──► hot reload of the module
          │ yes
          ▼
  generate a tiny patch crate for each edited function
          │
          ▼
  background thread: rustc builds the patch DLL, the host loads it
          │                                (the project keeps running meanwhile)
          ▼
  between updates: point every running copy of the function at the new code
          │
     success ───────┴─────── failure
        │                       │
  new code runs from     old code keeps running,
  the next update        the edit falls back to a hot reload
```

## Why does Pill patch functions at all?

A hot reload is slow for small edits. Even a one-line change makes cargo rebuild the module and link a new DLL, and then the host swaps engine state over to it. That takes seconds.

Most edits during development are small changes inside one function body: a tweaked constant in a calculation, a new log line, a fixed condition. For those edits, compiling only the changed function is much faster. The rest of the module stays exactly as it is.

A hot patch also avoids a chain of reloads. When an extension reloads, the project usually has to reload too, because the project DLL contains its own copy of the extension's code. A hot patch updates the project's copy in the same step, so the project does not need to reload.

## Which functions can be patched?

Three kinds of functions can be patched. Each kind is redirected to the new code in a different way, which the code calls a **route**.

| Function kind                                 | How it is marked   | Route                       | Log label       |
| --------------------------------------------- | ------------------ | --------------------------- | --------------- |
| ECS system                                    | `#[pill_hot]`      | the engine's registry       | `engine-slot`   |
| Plain function or method, prepared for patching | `#[pill_hot_fn]` | a dispatch slot in each DLL | `artifact-slot` |
| Plain function or method, not marked          | nothing            | overwrite the function's first bytes | `prologue` |

The routes are explained in [How does the new code reach the running program?](#how-does-the-new-code-reach-the-running-program).

## How does the host decide that an edit can be patched?

The host patches an edit only when the inside of one or more function bodies changed, and nothing else in the file changed.

### What does the host compare the edit against?

Each loaded module gets its own **patch session** (`HotPatchSession`). When the session starts, it reads every `.rs` file of the module and keeps the contents. This copy is the **baseline snapshot**, and it always describes the code that is running right now.

The snapshot stores each file's contents together with the file's modification time from the same read. Keeping the two together means the host can never pair one version of a file with the timestamp of another.

The snapshot moves forward in two cases:

- after a successful patch, it takes the patched file's new contents;
- after a hot reload of the module, it is read again from disk, because the running code changed without a patch.

> **Example:** you change something outside a function body, so the patch is refused and the module reloads. If the snapshot were not refreshed, your next edit would be compared against code that is two edits old. The earlier change outside the body would still show up as a difference, so every later edit would be refused too. From the outside, this would look like "hot patching stopped working".

### How does the comparison work?

The host removes the bodies of all patchable functions from both the snapshot and the new file, and compares what is left.

- If the remaining text is identical, only function bodies changed. The edit can be patched.
- If anything remains different, something outside a body changed: a signature, a type, a constant, an import or another function. The edit is refused.

> **Example:** you change `speed * 2.0` to `speed * 3.0` inside an ECS system's body. After both bodies are removed, the two versions of the file are identical, so the edit is patched. If you also add a field to a component struct in the same file, the remaining text differs, and the module reloads instead.

The host and every module's build script find functions with the same scanner, the `pill_hot_scan` crate. Because both use one implementation, they always agree on where a function starts and what name it is registered under. If they disagreed, the functions they disagreed about would silently stop being patchable.

### Why would an edit be refused?

Every refusal has a short, stable code. The code appears in the log next to a sentence for the developer, and the test suites check the code rather than the sentence.

| Code                          | What happened                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------- |
| `outside-hot-body`            | something outside the function bodies changed                                 |
| `multiple-files`              | more than one source file changed in the same edit                            |
| `new-source-file`             | a file appeared that is not in the baseline snapshot                          |
| `no-hot-function`             | the changed file declares no function the host can patch                      |
| `unresolved-receiver`         | a method was edited whose `impl` block does not name a simple type            |
| `associated-without-receiver` | a function inside an `impl` block without `self` was edited                   |
| `duplicate-declaration`       | two patchable functions in one file share the same name                       |
| `edited-before-arming`        | the edit happened before the session took its snapshot                        |

A refused edit always falls through to a hot reload, so the worst case is the reload you would have had anyway.

## How is a single function compiled?

The host builds a tiny crate that contains only the edited function, and compiles it into its own DLL. This DLL is called a **patch**.

### What goes into the patch crate?

The patch crate contains:

- the edited function, copied exactly as written in the new file;
- the file's top-level `use` lines the body can name, each rooted where the
  patch crate resolves it: `crate`, `self` and `super` are rewritten to the
  patched crate's own paths, a bare module name is qualified with the module
  it belongs to, and a statement the body never names is left out. An import
  the body does not need but the patch cannot resolve would fail the whole
  compile and cost a reload;
- `use <crate>::<module>::<name>` for each public item the changed file
  declares beside the function, when the body names it and the crate root does
  not already re-export it, so a type, constant or helper of the same file is
  in scope;
- `use <crate>::*` against the module's own compiled library (its **rlib**), so
  the patch reaches the module's types, constants and other functions.

The rlib the patch links is the exact one the running module was built from. The host keeps its own copy of it, the **staged rlib**, and refreshes that copy whenever cargo has built a newer one. This is the most important rule of the whole mechanism: because the patch links the same libraries as the running module, every type has the same memory layout and the same `TypeId` on both sides.

A method is found through its own `impl` block, never by its bare name. One file can contain several functions with the same name, for example an inherent `draw` and a trait `draw`, or two types that both implement `Default::default`. Taking the first matching name could compile the wrong body.

A method's body uses `self`, but a free-standing patch crate has no `impl` block of the original type. So the patch wraps the method in a small local trait implemented for that type, and the body keeps working unchanged.

### Why does each patch register under a `pill_patch::` name?

The patch tells the host where its new function is through an exported lookup function. The registry entries inside it carry a `pill_patch::` prefix.

The prefix is required because the patch links the module's rlib, and that rlib already contains the registry entry for the original function. Without the prefix, the patch DLL would hold two entries with the same name. The lookup could return the old one, and the patch would "install" successfully while changing nothing.

### How does the host know the right `rustc` command?

The host asks cargo once and reuses the answer.

Writing a `rustc` command by hand is fragile. It must list the exact path of every dependency's library, including hashes cargo puts in the file names. Those change whenever a dependency changes, and they differ between machines.

So the host runs the module's own build command once in verbose mode and records the exact `rustc` command cargo printed (`CargoRustcLine::capture`). For each patch, the host reruns that command with two changes: the patch source as the input file, and a unique output name such as `pill_hotpatch_7` (`CargoRustcLine::replay`).

The host's own build command matters here, including its feature flags. Different features produce different crate metadata, and then every `TypeId` in the patch would disagree with the running world.

The captured command is cached on disk. The cache is thrown away when the build command changes or when one of its inputs has a newer modification time.

### Why does the build run on another thread?

Compiling the patch and loading its DLL takes hundreds of milliseconds. Doing that on the main thread would freeze the project for that long.

So the work is split into three steps:

1. **Prepare, between updates (main thread).** Classify the edit, generate each patch crate, refresh the staged rlib and get the `rustc` command. The result is a `PatchAttempt`.
2. **Build (background thread).** Run `rustc` and load the patch DLL. The result is one `BodyOutcome` per edited function.
3. **Install, between updates (main thread).** Point the running code at the new functions.

The background step never touches the engine, the world, a loaded module or the patch session. That is what makes it safe to run on another thread while the project keeps updating. The background thread also reads the new DLL file once before loading it, so the operating system's first scan of a freshly written file happens there and not on the main thread.

A save that arrives while a patch is compiling stays pending. The host records which edit the build is for, and only that edit counts as delivered once the patch is installed. The newer save gets its own attempt afterwards.

## How does the new code reach the running program?

The host installs the patch between updates, when no ECS system is running. Before writing anything, it checks that the new function's signature matches the old one. A function whose shape changed is never installed behind call sites that were compiled for the old shape.

### What does each route do?

**ECS systems (`engine-slot`).** The scheduler calls ECS systems through the engine's registry. The engine core is one shared DLL, so this registry exists once in the whole process. Replacing one entry reaches every caller.

**`#[pill_hot_fn]` functions (`artifact-slot`).** The attribute makes the function call through a **dispatch slot**: a small pointer that says which code to run. The slot is a static variable, and a static is compiled into every DLL that links the crate. The host therefore asks every DLL that holds a copy to point its own slot at the new code.

**Unmarked functions (`prologue`).** Nothing in the running DLL was prepared for these functions. Instead, the host overwrites the first bytes of each running copy of the function (its **prologue**) with a jump to the new code. Before overwriting anything, the host finds every copy and checks each one. A refusal therefore leaves the process untouched, instead of leaving some copies patched and others not.

### How does the host reach memory inside another DLL?

Every DLL is loaded into the host's own process, so the host can use an address inside any of them as an ordinary pointer. What the host does not know is *which* address belongs to which function or slot.

The host learns that by asking each DLL. Every module DLL and every patch DLL exports a few small C functions for this, generated by the `pill_hot_resolver!` macro. The host finds them by name (`GetProcAddress`, through the `libloading` crate) and calls them. The table below lists what each export answers.

| Export answers                                   | Used by           | Filled from                                       |
| ------------------------------------------------ | ----------------- | ------------------------------------------------- |
| "Point your slot for this function at this address" | `artifact-slot` | the DLL's own registry of `#[pill_hot_fn]` slots |
| "Empty your slot for this function"              | rollback to generation 0 | the same registry                          |
| "Where is this function, and what is its signature?" | `prologue`    | the function inventory the build script generated |
| "Where is the new function in this patch?"       | every route       | the patch's own registry (`pill_patch_resolve`, `pill_patch_resolve_plain`) |

### How does a dispatch slot work?

`#[pill_hot_fn]` splits the function into two parts: the original body under a hidden name, and a small dispatcher under the public name. The dispatcher checks the slot on every call. Simplified, the generated code looks like this:

```rust
// The original body, renamed.
fn __pill_hot_impl_damage(target: &mut Health, amount: f32) { /* your code */ }

// The public name becomes a dispatcher.
pub fn damage(target: &mut Health, amount: f32) {
    // An AtomicUsize inside this DLL: 0 means "no patch installed".
    static __PILL_PATCH_SLOT_DAMAGE: PlainSlot = PlainSlot::new();

    // Recorded in THIS DLL's registry, so the DLL can find the slot by name.
    submit! { PillHotSlotDescriptor {
        qualified_name: "project::combat::damage",
        slot: &__PILL_PATCH_SLOT_DAMAGE,
        signature: "fn damage(target: &mut Health, amount: f32)",
        ..
    }}

    let installed = __PILL_PATCH_SLOT_DAMAGE.installed();
    if installed != 0 {
        let implementation: fn(&mut Health, f32) = unsafe { transmute(installed) };
        return implementation(target, amount);
    }
    __pill_hot_impl_damage(target, amount)
}
```

The slot is a normal static in the DLL's data section. That memory is already writable, so installing a patch needs no change to memory protection.

> **Example:** you patch `damage()`. The host:
>
> 1. loads the patch DLL and calls its `pill_patch_resolve_plain("project::combat::damage")`. The patch answers with the address of the new body and its signature text.
> 2. calls the install export of every loaded module DLL and every earlier patch DLL, passing the name, the new address and the signature.
> 3. Inside each DLL, the install export looks the name up in that DLL's own registry. It compares the signature with the one that DLL was compiled with, and then stores the address into its slot with one atomic write.
> 4. On the next call, each dispatcher reads its slot, sees a non-zero address and calls the new body.

The host never writes into a slot itself. It only hands over the address, and each DLL writes its own slot. This matters for two reasons:

- The host cannot know where a static lives inside another DLL without that DLL's help.
- The signature check has to compare against what *that* DLL was compiled with, because that is the code that will call the new body.

A rollback to generation 0 calls the reset export instead. The DLL stores 0 into its slot, and the dispatcher goes back to the body compiled into that DLL.

ECS systems work the same way with one difference: their slot (`HotSlot`) lives in the engine's process-wide `HotPatchRegistry`, not inside each DLL. Each ECS system's boxed closure reads the slot on every call. One write is enough, because the engine core exists once in the process.

### How does a prologue patch overwrite code?

An unmarked function has no slot, so the host makes the old code jump to the new code. First it needs the function's address in every DLL.

Each crate's build script uses `pill_hot_scan` to generate a **function inventory**: a list with one entry per function, built from code like `path::to::damage as *const () as usize`, together with the function's signature text. The DLL exports a lookup over that list. The host calls the lookup in every module DLL and every patch DLL.

The write itself is done by `patch_prologue` in the engine core. It runs these steps:

1. **Check the thread.** Rewriting live code is only allowed on the thread that runs the update loop, between updates.
2. **Check the function's length.** `RtlLookupFunctionEntry` reads the DLL's exception directory, the linker's own record of where each function starts and ends. The write is refused when the address is not the start of a function, when the function is shorter than 12 bytes, or when the function has no entry at all. A function with no entry is a tiny function that Windows allows to skip one; the error suggests marking it `#[pill_hot_fn]` instead.
3. **Make the page writable.** Code pages are normally read and execute only. `VirtualProtect` switches the page to `PAGE_EXECUTE_READWRITE`.
4. **Save the original 12 bytes.** A rollback writes them back.
5. **Write the jump.** The 12 bytes `48 B8 <8-byte address> FF E0` mean `mov rax, <new address>; jmp rax`. Overwriting `rax` at the start of a function is harmless on Windows x64, because `rax` holds no argument there.
6. **Restore the page's protection and flush the instruction cache** (`FlushInstructionCache`), so no processor core keeps running the old bytes.

A 12-byte write is not atomic. A thread running inside those bytes during the write could execute half old and half new instructions. That is why the host only patches between updates, when no ECS system is running.

`prologue_patch_everywhere` does the work in two phases. Phase 1 collects the address of every copy and checks each copy's recorded signature. Phase 2 writes the jumps. If a write still fails in phase 2, the writes already done are undone in reverse order.

A rollback runs `restore_prologue`, which checks the function's length again and also checks that the bytes there still start with `48 B8`. Without that second check, a different DLL loaded at the same address since the patch would have one of its functions overwritten with unrelated bytes.

The prologue route exists only on Windows x86-64. Every other target refuses it, Linux included: the length check above uses `RtlLookupFunctionEntry`, a Windows API, and nothing reads the equivalent Linux data (the `.eh_frame` unwind tables) yet. On Linux an edit to an un-annotated function therefore falls back to a hot reload, while `#[pill_hot]` and `#[pill_hot_fn]` functions still patch through their slots.

### Why does a function have more than one running copy?

Rust copies a crate's code into every DLL that links it. A function in an extension can therefore exist in the extension's DLL and also in the project DLL that depends on that extension.

A patch DLL is no different. It contains its own copy of every function its body calls.

So every route sends the change to two kinds of DLL: the loaded modules, and all patch DLLs already loaded (`every_loaded_copy`).

> **Example:** you patch `damage()`, which calls `armor()`. The patch DLL for `damage()` has its own copy of `armor()`. Later you patch `armor()`. If the host updated only the modules, the patched `damage()` would keep calling its own old copy of `armor()`, and your second edit would seem to have no effect. Because patches are visited too, the copy inside the `damage()` patch is redirected as well.

### Why are patch DLLs never unloaded?

The host keeps every patch DLL loaded until the process exits, because nothing records who still points into a patch DLL. Unloading a DLL while something still points into it leaves that pointer aimed at freed memory, and the next use crashes somewhere unrelated.

### Does a hot reload not make the patch unused?

A hot reload makes the patch unused by the reloaded DLL, but not necessarily by anything else.

The new DLL is built from the current source, which already contains your edit. Its `#[pill_hot_fn]` slots start empty, and its ECS systems get fresh `HotSlot`s whose original code is the new code. So the reloaded DLL itself never points into an old patch.

Other things can still point into the patch after the reload:

- **DLLs that did not reload.** A patch of an extension crate redirects every copy of the function: in the extension DLL, in the project DLL, in other DLLs that link the crate, and in earlier patch DLLs. A reload replaces some of those DLLs, not necessarily all of them.
- **Retired DLLs in the graveyard.** The graveyard is where a reload keeps retired DLLs until it unloads them. Under the `Bounded` policy, up to `MAX_GRAVEYARD_GENERATIONS` retired DLLs stay loaded, and their slots and jumps still point at patches. Before the graveyard unloads a module DLL, the reload re-points the engine's known function tables (storage columns, resources, assets) at the new DLL. Patches have no such step.
- **State that survives the reload.** The world survives a hot reload, and a patched body can store an address that points into its own DLL. This is the case that cannot be tracked.

> **Example:** the patched body of `damage()` contains `info!("damage dealt")`. Every log call registers a static **callsite** in the `tracing` registry inside the shared `pill_core.dll/.so`, and that callsite lives in the patch DLL. If the host unloaded the patch, the registry would keep a pointer into freed memory. The renderer module is kept loaded forever (`GraveyardPolicy::KeepAll`) for the same reason.

Other addresses a patched body can leave behind in surviving state:

- a string literal stored in a resource or component, whose bytes live in the patch DLL's read-only data;
- a function pointer or a closure stored in a resource;
- a `Box<dyn Trait>` whose vtable lives in the patch DLL.

Rust gives no way to ask "does anything still point into this DLL?". So the host follows the same rule as `KeepAll`: keep every patch for the whole session.

### What does keeping every patch cost, and could patches be unloaded?

The cost is memory. Each patch DLL is small, but it contains its own copy of everything its function calls, so a long session with hundreds of patches adds up. Restarting the host frees it.

A patch would be safe to unload only when all of these are true:

1. every DLL whose slots or jumps pointed at it has been unloaded from the graveyard;
2. no later patch DLL has a copy that points at it;
3. its code never handed an address to surviving state, such as a log callsite, a string literal or a vtable.

The first two conditions can be tracked. The third cannot be proved in general, and the log callsite alone breaks it for most real edits. So unloading patches is not worth its risk unless measurements show patch memory to be a real problem.

## What is a patch generation, and how is a patch rolled back?

Each installed patch of a function is one **patch generation**, numbered per function. Generation 0 is the code the module was originally built with, and each patch adds one. This is not the same as a module generation in `hot_reloading.md`, which counts whole builds of a module.

The history lets you go back to an earlier version of a function without recompiling it. The host saved each generation's address, so a rollback only reinstalls it.

How a rollback works depends on how that generation was installed:

| Installed through          | Rolled back by                                |
| -------------------------- | --------------------------------------------- |
| registry or dispatch slot  | writing the earlier address back              |
| prologue                   | writing the saved original bytes back         |

The install method is stored with each generation instead of being worked out from the function's kind. A `#[pill_hot_fn]` function and an unmarked function have the same kind in the scanner, but they are rolled back differently.

### When does a rollback happen?

A rollback happens in two cases.

- **You ask for it.** Write a request into `modules/target/hot/rollback.request`: `function@3` for a generation number, `function@previous` for the one before the current one, or `list` to print the history. The host reads the file between updates, deletes it and runs the request.
- **A patched function keeps panicking.** The engine counts panics of a patched function in a row. Past a threshold, the host rolls that function back to its previous generation. Nothing retries the rejected patch: the function stays on working code until your next edit.

### What does a hot reload do to the history?

A hot reload makes every recorded prologue address invalid. Those addresses point into DLLs that the reload retires and will later unload.

The records include addresses inside the project DLL, so the host cannot tell which records are still safe. It drops all prologue records in every session at once. This prevents a later rollback from writing into a DLL that is no longer loaded.

## What can go wrong after an edit was accepted?

An accepted edit can still fail while it is being delivered. Each failure has a stable code, and in each case the old code keeps running and the edit falls back to a hot reload.

| Code       | What failed                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `generate` | the patch source for the function could not be produced                     |
| `prepare`  | the scratch directory, staged rlib or `rustc` command could not be prepared |
| `compile`  | `rustc` rejected the patch                                                  |
| `load`     | the patch DLL could not be loaded                                           |
| `resolve`  | the patch did not report the function the host asked for                    |
| `install`  | a running DLL refused the new code, usually because the signature changed   |

The log line for a failure also says which patch generation is still running, so you know what code the project is executing.

## Exceptions and limitations

- **One file per edit.** An edit that touches two files is refused, even if both changes are inside function bodies.
- **Only bodies.** Changing a signature, a type, a constant, an import or adding a function always needs a hot reload.
- **Only items another crate can name.** The patch is a separate crate, so a body that names an item which is private to the module (`struct FrameCounter` declared in the same file as the system that queries it) cannot be compiled. That edit falls back to a reload.
- **Not every function inside an `impl` block.** A method with `self` can be patched. A function inside an `impl` block without `self` (for example `fn new() -> Self`) cannot, because the patch has no `Self` to compile it against.
- **Development mode only.** Patching runs `rustc` and loads new DLLs while the project runs, which does not belong in a shipped executable. The code stops the build with a `compile_error!` if it is built with optimizations.
- **Memory grows over a long session.** Patch DLLs are never unloaded, so each patch keeps its DLL in memory until the host exits.

## Configuration

- `PILL_FUNCTION_HOT_PATCHING` - set to `0`, `false`, `no` or `off` to switch hot patching off for a run. Every edit then rebuilds and reloads the module, which keeps a debugger's breakpoints inside ECS system bodies bound. The host reads it once at startup (`switches.rs`).
- The engine's `development` feature (`pill_engine/development`, forwarded to `pill_engine_core`) - enabled by `pill_development_host`; it turns on the engine's side of patching, such as running ECS systems through the replaceable registry entries.
- `#[pill_hot]` and `#[pill_hot_fn]` - the attributes that mark ECS systems and plain functions for the slot routes.
- `modules/target/hot/rollback.request` - the rollback request file.
- `modules/hosting/pill_development_host/src/hot_patch/` - the patcher itself; `tests.rs` holds its unit tests.
- `modules/hosting/pill_hot_scan/` - the source scanner shared with build scripts; it also generates each crate's function inventory.
- `modules/engine/pill_engine_core/src/hot_patch.rs` - the engine's side: `HotSlot`, `HotPatchRegistry`, `PlainSlot`, `patch_prologue` and `restore_prologue`.
- `modules/engine/pill_engine_macros/src/lib.rs` - `#[pill_hot_fn]` (the dispatcher and its slot) and `pill_hot_resolver!` (the exports the host calls).
- `devops/tests/test_hot_patch_coverage.py` and `devops/tests/test_patch_bookkeeping.py` - the end-to-end suites.
