<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2608"></a>

# Struct `pill_development_host::hot_patch::HotPatchSession`

```rust
pub(crate) struct HotPatchSession;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:408`

Drives the fast path for one loaded module: the project or one extension.

A session owns that module's snapshots, compiler line and generation
history, keyed to the package, build command and staged rlib it patches.

## Fields

<a id="rustdoc-item-2596"></a>

### `workspace_root`

```rust
workspace_root: std::path::PathBuf
```

_No documentation provided._

<a id="rustdoc-item-2597"></a>

### `package`

```rust
package: String
```

_No documentation provided._

<a id="rustdoc-item-2598"></a>

### `crate_root`

```rust
crate_root: std::path::PathBuf
```

_No documentation provided._

<a id="rustdoc-item-2599"></a>

### `source_root`

```rust
source_root: std::path::PathBuf
```

_No documentation provided._

<a id="rustdoc-item-2600"></a>

### `package_rlib`

```rust
package_rlib: std::path::PathBuf
```

The patched crate's own rlib - the staged copy the host built, so
generated sources can `use <crate>::*` and get the identical types the
running module holds.

<a id="rustdoc-item-2601"></a>

### `build_command`

```rust
build_command: Vec<String>
```

The host's own build command for this crate, feature flags included.

Captured flags must come from THIS command: features live here and
nowhere else, and a different feature set means different crate
metadata - so a patch built from a bare `cargo build -p <pkg>` line
disagrees with the running world about every `TypeId`.

<a id="rustdoc-item-2602"></a>

### `snapshots`

```rust
snapshots: std::collections::HashMap<std::path::PathBuf, Snapshot>
```

Last seen contents of every watched source file, with the modification
time each was read at.

<a id="rustdoc-item-2603"></a>

### `snapshot_taken_at`

```rust
snapshot_taken_at: std::time::SystemTime
```

When those contents were read.

Used to tell two very different "nothing changed" cases apart: a reload
this session did not cause, and an edit that happened before the session
armed and was therefore captured as the baseline. The second one looks
exactly like a broken watcher from outside.

<a id="rustdoc-item-2604"></a>

### `rustc_line`

```rust
rustc_line: Option<compile::CargoRustcLine>
```

Compiler flags, captured from cargo once and reused.

<a id="rustdoc-item-2605"></a>

### `generations`

```rust
generations: Vec<generations::Generation>
```

Loaded patches, never unloaded.

<a id="rustdoc-item-2606"></a>

### `active_generations`

```rust
active_generations: std::collections::HashMap<String, u32>
```

Which generation each patched function is currently running, so a
failure can report what the process is still executing and a rollback
knows where it started. Absent means generation zero, the original.

<a id="rustdoc-item-2607"></a>

### `counter`

```rust
counter: u64
```

Makes each patch's crate name and artifact unique within the process.

## Associated functions and methods

<a id="rustdoc-item-2609"></a>

### `active_generation`

```rust
pub(in hot_patch) fn active_generation(self: &Self, qualified: &str) -> u32;
```

The number of the generation that is running for one function.

Zero means the code the artifact was built with, which is also what a
function that was never patched reports.

<a id="rustdoc-item-2610"></a>

### `previous_install`

```rust
pub(in hot_patch) fn previous_install(self: &Self, qualified: &str) -> Option<(usize, &str)>;
```

The address and signature a refused fan-out puts its already-redirected
copies back on.

`None` means the function runs generation zero, so each copy goes back to
its own body. A generation delivered by prologue patching also answers
`None`: its address is the body the patch compiled, written over the
function's first bytes, so it cannot be installed into a redirect slot.

<a id="rustdoc-item-2611"></a>

### `generations`

```rust
pub(crate) fn generations(self: &Self) -> Vec<PatchGeneration>;
```

Every generation recorded for every function this session has patched.

<a id="rustdoc-item-2612"></a>

### `forget_prologue_patches`

```rust
pub(crate) fn forget_prologue_patches(self: &mut Self);
```

Forget the patch history a reload has invalidated.

A reload replaces an artifact's image, so a prologue address recorded
before the reload no longer names its function, and the freshly loaded
copy carries no patch anyway. Writing the saved bytes back to a stale
address would corrupt whatever now occupies it, so the record is dropped
instead of kept.

Slot-delivered generations keep their records but lose their active
entry. The rebuilt artifact re-creates its slot from the new sources, so
the baseline is whatever the artifact now ships, and a rollback must not
install a body from a previous revision into it. Patching the function
again makes the history reachable from that new baseline.

<a id="rustdoc-item-2613"></a>

### `knows_function`

```rust
pub(crate) fn knows_function(self: &Self, qualified: &str) -> bool;
```

Whether this function has an active generation recorded. A rollback
needs that entry before it can reach the history.

<a id="rustdoc-item-2614"></a>

### `rollback`

```rust
pub(crate) fn rollback(self: &mut Self, engine: &mut Engine, targets: &[(&str, &NativeLibrary)], patches: &[LoadedPatch], qualified: &str, generation_number: u32) -> Result<(), String>;
```

Reinstall an earlier generation of one function.

Generation zero is the code the running artifact was built with; one and
up are patches, in the order they were applied. A slot generation is one
pointer write per artifact - no rebuild, no reload, nothing unloaded -
which is the payoff of dispatching through a slot rather than
overwriting a function's first bytes.

#### Errors

Returns a message when the function was never patched in this session,
when the generation does not exist, when a reload has invalidated the
generation's prologue addresses, when no baseline code is recorded to
restore, or when an artifact refuses an address. The active-generation
entry is updated only on success, and a prologue path that fails partway
leaves the copies it already rewrote in the state it put them.

<a id="rustdoc-item-2615"></a>

### `restore_prologue_baseline`

```rust
pub(in hot_patch::generations) fn restore_prologue_baseline(self: &Self, qualified: &str) -> Result<(), String>;
```

Put a prologue-patched function back to the code its artifact was built
with.

The bytes to write come from the first generation. Every later generation
saved the jump its predecessor wrote, so restoring from the newest would
put a patch back rather than remove one.

<a id="rustdoc-item-2616"></a>

### `restore_baseline`

```rust
pub(in hot_patch::generations) fn restore_baseline(self: &Self, engine: &mut Engine, targets: &[(&str, &NativeLibrary)], patches: &[LoadedPatch], qualified: &str) -> Result<(), String>;
```

Return one function to the code its artifact was built with.

A system has one baseline address, recorded in the engine's registry. A
plain function has one per artifact, so each artifact is asked to empty
its own slot instead of being handed an address that belongs to another.

<a id="rustdoc-item-2618"></a>

### `new`

```rust
pub(crate) fn new(workspace_root: &Path, package: &str, watch_directory: &str, staging_subdirectory: &str, build_command: &[String]) -> Option<Self>;
```

Prepare a session for one module and take the baseline snapshot of its
sources.

Returns `None` when the module has no function the host could address,
so a module without one pays nothing, and when the crate's own rlib was
not built - a patch could not link it.

<a id="rustdoc-item-2620"></a>

### `refresh_snapshots`

```rust
pub(crate) fn refresh_snapshots(self: &mut Self);
```

Re-read every `.rs` file under the source root into the snapshot map.

The snapshot is the baseline that [`classify`](#rustdoc-item-2619) compares
against, so it must always describe **what is currently running**. Two
things keep it honest: a successful patch records the new contents
itself, and a full reload refreshes it through this method. Without the
second, one edit that could not be patched would leave the baseline
stale forever. Every later edit would then be compared against old
contents, reported as a change outside a function body, and refused,
even though the reload had already applied it.

<a id="rustdoc-item-2621"></a>

### `begin_attempt`

```rust
pub(crate) fn begin_attempt(self: &mut Self) -> BeginOutcome;
```

Prepare a build for a pending source change, without compiling it.

Everything here runs on the calling thread and touches only this session
and the filesystem: classifying the edit, generating the patch source,
staging the rlib and obtaining the compiler line to replay. Nothing here
touches the engine or a loaded artifact, so the caller can hand the
result to another thread and install it at a later frame boundary.

The expensive half, `rustc` and `LoadLibrary`, belongs to
[`worker::build_attempt`](worker/fn.build_attempt.md#rustdoc-item-2332). The finished patch is installed by
[`Self::activate_attempt`](#rustdoc-item-2438).

<a id="rustdoc-item-2619"></a>

### `classify`

```rust
pub(in hot_patch) fn classify(self: &mut Self) -> Result<Option<ClassifiedEdit>, PatchRefusal>;
```

Identify body-only edits in exactly one source file.

`Ok(None)` means nothing changed. `Ok(Some(..))` carries the file's
contents and the modification time read together, so the snapshot the
caller writes describes one observation rather than two.

#### Errors

Returns the reason the change is out of scope, phrased for the console:
a new source file, a file declaring no function the host can address, a
change outside the hot bodies, a second changed file, an unresolvable
receiver type, a receiver-less associated function, a duplicate bare
name, or an edit that happened before the baseline was taken.

<a id="rustdoc-item-2622"></a>

### `prepare_body`

```rust
pub(in hot_patch) fn prepare_body(self: &mut Self, path: &Path, new_contents: &str, declaration: &source::HotFunction, qualified_name: &str, slot_name: &str, save_stages: &mut PatchStages) -> Result<worker::PreparedBody, PatchRefusal>;
```

Generate one body's patch source and collect everything its build needs,
up to but not including running `rustc`.

`path` is the changed file: its module path decides where the patch
roots the imports it carries. `slot_name` is carried, not read here:
activation files the slot route under it. `save_stages` receives this
body's timings once preparation succeeds, so a failed body's partial
cost stays out of the report.

#### Errors

Returns the refusal code and message for the first step that cannot
complete: generating the patch source, creating or writing in the
scratch directory, refreshing the staged rlib, or capturing the
compiler flags.

<a id="rustdoc-item-2438"></a>

### `activate_attempt`

```rust
pub(crate) fn activate_attempt(self: &mut Self, engine: &mut Engine, targets: &[(&str, &NativeLibrary)], patches: &mut Vec<LoadedPatch>, attempt: worker::PatchAttempt, outcomes: Vec<worker::BodyOutcome>) -> PatchOutcome;
```

Install a finished build at the frame boundary.

The compile and the load happened before this call, usually on a worker
thread. `outcomes` is the build's report, one entry per body it
attempted, in order; the list stops at the first failure. Everything
that touches the engine, a loaded artifact or a dispatch slot happens
here, on the thread that owns the frame boundary: the prologue route
rewrites live code, so this is a requirement rather than a preference.

<a id="rustdoc-item-2623"></a>

### `install_body`

```rust
pub(in hot_patch) fn install_body(self: &mut Self, engine: &mut Engine, targets: &[(&str, &NativeLibrary)], patches: &mut Vec<LoadedPatch>, body: &worker::PreparedBody, built_body: worker::BuiltBody, save_stages: &mut PatchStages) -> Result<ApplyResult, PatchRefusal>;
```

Install one built patch: keep its image loaded, resolve the replacement
and write it into the running copies.

The compile, the load and the artifact file read happened before this
call, usually on a worker thread; what runs here is exactly the part
that must happen at the frame boundary.

#### Errors

Returns `resolve` when the patch does not report the replacement this
route asked for, and `install` when a running copy refuses it, usually
because the function's signature no longer matches.

<a id="rustdoc-item-2624"></a>

### `generate`

```rust
pub(in hot_patch) fn generate(self: &Self, path: &Path, new_contents: &str, declaration: &source::HotFunction, qualified: &str) -> Result<String, String>;
```

Produces the patch source for one edited function.

The function is copied as written, and everything it names comes from
the same artifacts the running module linked. That is what keeps type
layout and `TypeId` identical across the boundary. The imports it
carries are the changed file's own module and the file's top-level
`use` lines the body can name, each rooted where the patch crate
resolves it.

#### Errors

Returns the reason the source cannot be produced: the function is not in
the changed source, a body with a receiver has no known receiver type,
or its signature text cannot be read.

<a id="rustdoc-item-2625"></a>

### `module_segments`

```rust
pub(in hot_patch) fn module_segments(self: &Self, path: &Path) -> Vec<String>;
```

Returns the module path of a source file, with the package name first.

The first segment is the package name, which takes the place of `crate`
in `module_path!()`. A function in the crate root therefore sits at
`<package>`, and one in `src/color.rs` at `<package>::color`.

The crate root contributes no extra segment whatever it is named: a
manifest may point `[lib] path` at a file other than `lib.rs`, and
treating that file as a module would name every function in the crate
one segment too deep.

<a id="rustdoc-item-2626"></a>

### `qualified_name`

```rust
pub(in hot_patch) fn qualified_name(self: &Self, path: &Path, declaration: &source::HotFunction) -> String;
```

The full name of a declaration: module path, type, function.

This is what a build script registers, because it can see the enclosing
`impl` block. It is the name the prologue route looks up and the one
used for display and generation bookkeeping.

<a id="rustdoc-item-2627"></a>

### `slot_lookup_name`

```rust
pub(in hot_patch) fn slot_lookup_name(self: &Self, path: &Path, declaration: &source::HotFunction) -> String;
```

The path a dispatch slot is registered under, which leaves out the type.

It is deliberately different from [`Self::qualified_name`](#rustdoc-item-2626), and the
difference is forced rather than chosen. A slot's descriptor is an item,
and an item inside a method body cannot name `Self` (`error[E0401]`). A
`#[pill_hot_fn]` on a method can therefore only register
`module_path!() + "::" + name`, while a build script that read the
`impl` block directly has no such limit.

Two hot methods that share a name in one module collide on the slot
route. The scanner sees both and refuses the edit instead of installing
into whichever registered first.

<a id="rustdoc-item-2628"></a>

### `refresh_staged_rlib`

```rust
pub(in hot_patch) fn refresh_staged_rlib(self: &Self) -> Result<(), String>;
```

Brings the staged rlib back in step with cargo's own output.

A patch links two kinds of rlib: the crate's own comes from the staged
copy, while its dependencies' `--extern` entries come from the replayed
cargo line and point into the module build tree. If the two drift apart,
the compile fails with `error[E0463]: can't find crate for <this
crate>`, which names the wrong crate. The build worker adds a hint that
the staged rlib no longer matches its dependencies.

The source is the private module build tree under the host's profile
directory ([`crate::config::module_build_artifact_directory`](../config/fn.module_build_artifact_directory.md#rustdoc-item-1256)); a bare
`target/debug` holds nothing the host built. The host loads the module
DLL, not this rlib, so a wrong-featured copy here can make this one
patch fail; the next real build replaces it.

#### Errors

Returns the error text when a freshly built rlib exists but cannot be
copied over the staged copy.

<a id="rustdoc-item-2629"></a>

### `rustc_line`

```rust
pub(in hot_patch) fn rustc_line(self: &mut Self) -> Result<&CargoRustcLine, String>;
```

Captures the compiler flags, asking cargo on first use.

#### Errors

Returns the error text when the line has to be captured and cargo cannot
run, the build fails, the crate root cannot be touched, or cargo prints
no invocation for this package.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
