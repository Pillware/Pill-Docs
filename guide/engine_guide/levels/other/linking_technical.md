# Linking and multi-DLL programs

A general explanation, not specific to Pill. The examples use Rust. Where Windows and Linux behave differently, both are described; most of the ideas apply to any language and operating system.

## What is linking?

Building a program happens in two steps:

1. **Compiling** turns each source unit (a Rust crate, a C file) into an *object file*: machine code plus a list of *symbols*. A symbol is a named function or global variable. Each object file lists the symbols it **defines** and the ones it **needs** from somewhere else.
2. **Linking** joins the object files into one runnable file and connects every "needs" to a matching "defines". If a needed symbol is never defined, linking fails with an "unresolved symbol" error.

There are two ways to link a library.

### What is static linking?

- The library's code is **copied into** the final executable.
- The result is one self-contained file with nothing extra to ship.
- The linker sees the whole program, so it can optimise across library boundaries (this is what LTO, link-time optimisation, does).
- If two programs use the same library, each one has its own copy.

### What is dynamic linking?

- The library stays a **separate file**: a `.dll` on Windows, `.so` on Linux, `.dylib` on macOS.
- The executable records only "I need symbol X from `foo.dll/.so`" in its **import table**.
- When the program starts, the operating system's **loader** finds `foo.dll/.so`, maps it into memory and fills in the real addresses.
- A program can also load a DLL **later, while it is running** (`LoadLibrary` + `GetProcAddress` on Windows, `dlopen` + `dlsym` on Linux). It can unload it again (`FreeLibrary`), and then load a newer version. Extensions loaded at run time, and hot reload, are built on this.

### Which kinds of library can Rust build?

A Rust crate's `crate-type` decides what kind of file it becomes and who can use it:

| `crate-type` | What it produces                                | Who can use it                                                                                                             |
| ------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `rlib`       | a Rust static library (the default for a library) | other Rust crates, which copy its code into themselves when they are linked                                              |
| `dylib`      | a DLL that exports **Rust** symbols             | other Rust code built by the **same compiler with the same dependencies**, because Rust's ABI is not stable (see below)    |
| `cdylib`     | a DLL that exports only **C** symbols           | anything that can call C: other languages, or a Rust program that loads it at run time and looks up its functions by name |
| `staticlib`  | a static library in the C format (`.lib`, `.a`) | C and C++ programs, and other languages' build systems                                                                     |

By default, every executable and `cdylib` contains its own copy of Rust's standard library, `std`. The compiler flag **`-C prefer-dynamic`** changes that: when a `dylib` version of a dependency exists, including `std` itself, the crate links to that DLL instead of copying it in. With that flag, every DLL in a program can share one copy of `std` and of any other library built as a `dylib`.

## How does a program made of several DLLs work?

### Do DLLs share memory?

Yes. The executable and every DLL it loads live in the **same process**, so they share **one address space**.

- A pointer created in one DLL is a valid address in every other DLL. Memory is not copied between them; they all see the same bytes.
- Calling a function in another DLL is just a normal function call through an address the loader filled in.

A pointer stays valid only while the memory it points to still exists. That matters when a DLL is unloaded; see [What becomes invalid when a DLL is unloaded?](#what-becomes-invalid-when-a-dll-is-unloaded)

### Does each DLL have its own globals?

Yes. The executable and every DLL each carry **their own copy of everything statically linked into it**.

- If a library with a global variable (a counter, a cache, a logger, a thread pool) is statically linked into three DLLs, the process ends up with **three independent copies** of that global, which don't know about each other.
- The same holds for **thread-local** values (`thread_local!` in Rust): each copy of the library has its own.
- To get a *single* shared instance, put the library in **its own DLL** and have the executable and every DLL link to it dynamically. Then there is exactly one copy in the process.

> **Example:** a logging library keeps the current log level in a global. It is statically linked into `app` (`.exe` on Windows) and into `plugin.dll/.so`. The application sets the level to `debug`, but `plugin.dll/.so` still logs at the default level, because it reads its own copy of the global.

### Who frees memory?

Memory from an allocator has to be freed by **the same allocator**.

- If two DLLs use different allocators (for example, two different C runtimes), freeing in one what the other allocated corrupts the heap.
- The safe rules: everyone uses one shared allocator, or the DLL that allocated something is also the one that frees it.

**In Rust**, the allocator is part of `std`. On Windows, `std`'s default allocator takes memory from the **process heap**, which belongs to the process, not to any one DLL. On Linux, `std`'s default allocator is the C library's `malloc`, which is also shared by the whole process. Two cases break the "one allocator" rule:

- a crate that sets its own allocator with `#[global_allocator]`: every DLL that contains that crate allocates from it, and every other DLL does not;
- a DLL that brings its own copy of `std` in a setup that relies on sharing it: it may then use a different allocator from the rest.

With every DLL linked to one shared `std` (`-C prefer-dynamic`) and no custom allocator, a value allocated by one DLL can be freed by any other.

### What does a function's symbol name contain?

More than the function's name. A compiler **mangles** each symbol name: it encodes the function's module path, and for Rust also a hash of the crate's build inputs, into one unique string. Two crates with a function called `update` therefore never clash.

For Rust, that hash covers the inputs Cargo passes as `-C metadata`: the crate's name and version, its enabled features, the build profile, and the inputs of its dependencies. So when any of those differ, the same function gets a **different symbol name**.

This explains two different load errors. Windows and Linux report them with different messages:

| Error on Windows                             | Code | Error on Linux (`dlerror`)                         | What it means                                                                                                                                                   |
| -------------------------------------------- | ---- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "The specified module could not be found"    | 126  | `cannot open shared object file: No such file or directory` | a DLL **file** this DLL depends on is missing, or is not in any folder the loader searches                                                              |
| "The specified procedure could not be found" | 127  | `undefined symbol: <mangled name>`                 | the file was found, but a **symbol** this DLL imports is not in it, typically because the two were built with different inputs and their mangled names differ |

> **Example:** `game.dll/.so` was built against `engine.dll/.so` with the feature `profiling` switched on. `engine.dll/.so` is then rebuilt without that feature. Every mangled engine symbol now has a different hash, so loading `game.dll/.so` fails (error 127 on Windows, `undefined symbol` on Linux), even though no function was renamed.

`#[no_mangle]` turns mangling off for one function, so its symbol is exactly its name. Exports meant to be found by name at run time (`GetProcAddress`, `dlsym`) use it.

### What happens when two libraries export the same symbol?

The linker refuses it. A symbol can be defined only once in each executable or DLL.

This catches a common setup mistake. A `#[no_mangle]` function in a library crate becomes an exported symbol of **every** DLL that links the library. If a DLL also defines that symbol itself, or links two libraries that both export it, linking fails. On Windows the error is `LNK2005: … already defined in …`. On Linux the linker reports `multiple definition of …`.

> **Example:** a library crate `core_lib` exports `#[no_mangle] fn plugin_init()`, and is built as a `cdylib` so it can be loaded on its own. A second crate `plugin_b` depends on `core_lib` and defines its own `plugin_init()`. Building `plugin_b` fails (`LNK2005` on Windows, `multiple definition` on Linux), because the linker finds `plugin_init` both in `plugin_b` and in the copy of `core_lib` it links.

The usual fix is a **thin wrapper crate**: the library defines no exports itself, and each loadable DLL is a small crate that depends on the library and declares the exports once.

## Why are Rust types hard to share between DLLs?

### What is an ABI?

An **ABI** (application binary interface) is the low-level agreement on how functions are called and how data is laid out in memory.

- **C's ABI is stable.** Any compiler can call a C-ABI function in any DLL, which is why interfaces between separately built DLLs are usually plain C functions and `#[repr(C)]` structs.
- **Rust's ABI is not stable.** Two Rust DLLs can safely pass Rust types (`String`, `Vec`, trait objects) to each other only if both were built by the **same compiler, with the same dependencies and the same settings**. Anything else can lay the same type out differently.

### When do two DLLs see the same type?

Only when both copies of the type were built from the same definition **with identical build inputs**. Nothing checks or guarantees that.

When a crate is compiled into two DLLs, each DLL contains its own copy of the crate's types. Rust identifies a type at run time by its `TypeId`, and the two copies get the same `TypeId` only if everything that goes into it matches.

### What is a `TypeId` made of?

Rust computes a `TypeId` from the type's own definition plus the build inputs of the crate it is in:

- the type's path and its definition (its fields and their types),
- the crate's name and version,
- the crate's enabled features and the build profile,
- the compiler version and the target.

It does **not** depend on the rest of the crate's code, on which crate triggered the build, or on where the output is written. Rebuilding the same crate on separate test builds (rustc 1.95) gave this:

| What changed between two builds                    | `TypeId` of the type        |
| -------------------------------------------------- | --------------------------- |
| a function body somewhere in the crate             | the same                    |
| a new, unrelated function or type                  | the same                    |
| the build of a **different** crate that depends on it | the same                 |
| a new output folder (built from scratch elsewhere) | the same                    |
| a feature of the crate switched on                 | **different**               |
| a field added to the type                          | **different**               |
| that field removed again                           | the **original** value again |

The last row shows that a `TypeId` is a function of its inputs, not a counter or a timestamp.

Rust does not promise any of this. The way `TypeId` is computed may change in a later compiler version, so code that must recognise a type across builds should not rely on it.

### What breaks when two copies of a type differ?

Everything keyed by type identity:

- a `dyn Any` downcast to the type fails, because the value's `TypeId` is the other copy's;
- a map keyed by `TypeId` holds two separate entries for "the same" type;
- a registry that looks types up by `TypeId` never finds values the other DLL stored.

Nothing reports an error. Each DLL just behaves as if the other's values do not exist.

> **Example:** `app` (`.exe` on Windows) and `plugin.dll/.so` both compile the crate `shapes`, but the plugin's build switches on the feature `serde`. Both now contain a `Circle` with a different `TypeId`. The application stores a `Circle` in a `HashMap<TypeId, Box<dyn Any>>`, and the plugin's lookup for its own `Circle` returns nothing.

The usual fix is to identify such types by a **stable name** chosen by hand (for example `"shapes::Circle"`), and to check at run time that both sides agree on the type's size and fields, since the compiler no longer does.

## Why does dynamic linking not isolate a library's code completely?

Because generic code and inlined code end up **inside the DLL that uses them**, even when the library itself is a separate DLL.

A generic function such as `fn largest<T: Ord>(items: &[T]) -> &T` has no machine code of its own. The compiler generates a version for each `T` at the place where it is used (this is called **monomorphization**). Small functions marked `#[inline]` are also copied into the caller. So a DLL that uses a library contains part of that library's code, compiled when the DLL was compiled.

> **Example:** `plugin.dll/.so` calls `geometry::area::<Circle>()` from `geometry.dll/.so`. The generic `area` is compiled into `plugin.dll/.so`. You fix a bug in `area` and rebuild only `geometry.dll/.so`. `plugin.dll/.so` keeps running the old, buggy `area`, because its copy was compiled into it. Only rebuilding `plugin.dll/.so` picks up the fix.

So when a library changes, every DLL that uses it has to be rebuilt to be sure it runs the new code, not only the library's own DLL.

## Why must a DLL be reloaded when a DLL it imports from is reloaded?

Because the loader fills in imported addresses **once, when the DLL loads**, and never updates them.

When `b.dll/.so` imports functions from `a.dll/.so`, the loader writes the addresses of those functions into `b.dll/.so`'s import table as `b.dll/.so` loads. If you later load a newer `a.dll/.so`, `b.dll/.so` still holds the addresses from the old one. The old `a.dll/.so` also stays loaded, because `b.dll/.so` still depends on it.

The same applies to addresses a program looked up itself with `GetProcAddress` or `dlsym` and stored: they keep pointing into the DLL they came from.

> **Example:** `renderer.dll/.so` imports `draw_mesh` from `math.dll/.so`. You rebuild and load a new `math.dll/.so`. `renderer.dll/.so` keeps calling the old `draw_mesh`, and the old `math.dll/.so` stays in memory alongside the new one. To use the new code, `renderer.dll/.so` has to be reloaded too, after `math.dll/.so`.

## How does the loader decide which DLL file to load?

It searches a fixed list of folders and takes the first file with the right name. On Windows the standard order starts with the folder of the **executable**, then the system folders, then the folders in `PATH`.

On Linux the loader (`ld.so`) searches the folders recorded in the file itself (its `RPATH`), then the folders in `LD_LIBRARY_PATH`, then the file's `RUNPATH`, and finally the system cache (`/etc/ld.so.cache`) and default folders such as `/usr/lib`. It does **not** search the executable's folder, unless the file's rpath names it with `$ORIGIN`.

That default can surprise a program that loads DLLs from other folders. A DLL loaded from `plugins/` that depends on `helper.dll/.so` gets the `helper.dll/.so` from the executable's folder, not the one beside it in `plugins/`. Two flags change that:

- `LoadLibraryEx` with **`LOAD_WITH_ALTERED_SEARCH_PATH`** makes the search for that DLL's dependencies start in the DLL's **own** folder.
- `SetDllDirectory` and `AddDllDirectory` add folders to the search.

On Linux the same control comes from the rpath recorded at link time (`-Wl,-rpath,'$ORIGIN'` makes a library's dependencies resolve from its own folder) and from `LD_LIBRARY_PATH`.

When a DLL imports another one by name and a DLL with that name is already loaded, the loader usually reuses the loaded one instead of reading the file again. On Linux, `dlopen` likewise returns the library that is already loaded when it is asked for the same file again. So a second, newer version of a DLL is only loaded reliably under a different file name.

## Why can a loaded DLL not be replaced on Windows?

Because Windows **locks the file** of every loaded DLL. It can't be overwritten or deleted while any process has it loaded.

Linux does not lock the file, but the problem is similar. A build that writes a new file and renames it over the old path is safe: the running process keeps the old file's contents. A build that writes into the loaded file in place changes code that is mapped and running, which usually crashes the process. And as described above, `dlopen` may hand back the already loaded library for the same path.

This affects every build-and-reload workflow:

- a build that writes its output over a loaded DLL fails;
- unloading first and then building leaves nothing running in the meantime.

On both systems, the usual solution is to **load a copy**: build to the normal path, copy the result to a new, unique file name, and load the copy. The build output stays unlocked for the next build, and the running copy is never touched.

## What happens when a panic reaches a C function?

A Rust panic unwinds the stack, running destructors on the way up. That unwinding must not continue into code that does not expect it, such as an `extern "C"` function called from another language or another DLL.

- In older Rust versions, a panic unwinding out of an `extern "C"` function was **undefined behaviour**.
- Current Rust versions **abort the whole process** instead when that happens. (A function can opt into passing the unwind on by being declared `extern "C-unwind"`, which only makes sense when the caller can handle it.)

Neither is what a plugin host wants. The usual pattern is to catch the panic at every exported function with `std::panic::catch_unwind`, and turn it into an error code the caller can handle:

```rust
#[no_mangle]
pub extern "C" fn plugin_update() -> u32 {
    // A panic inside becomes error code 1 instead of crossing the C boundary.
    match std::panic::catch_unwind(|| run_update()) {
        Ok(()) => 0,
        Err(_) => 1,
    }
}
```

## What becomes invalid when a DLL is unloaded?

When a DLL is unloaded, its **image** disappears from memory: the part of the process that was loaded from the DLL file. That is its code, its constant data and its globals. Anything that still points into the image becomes a **dangling pointer**.

**The heap is not part of the image.** Memory a DLL allocated (a `String`, a `Vec`, a `Box`) stays valid after the DLL is unloaded, as long as the allocator it came from is still there; see [Who frees memory?](#who-frees-memory)

| A value holding...                              | Points into              | After the DLL that created it is unloaded                                               |
| ----------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------- |
| `String`, `Vec<T>`, `Box<T>` of plain data      | the heap                 | **still valid**                                                                         |
| `Box<dyn Trait>`                                | the heap **and** the image | **dangling**: the data survives, but its vtable (the table of its methods) was in the image |
| a function pointer, a callback, a closure as `dyn Fn` | the image (code)   | **dangling**                                                                            |
| `&'static str` or another reference to constant data | the image (constant data) | **dangling**                                                                      |
| a reference to a global (`static`)              | the image (globals)      | **dangling**                                                                            |
| a number: an id, an index, a handle into a table | nothing                 | **still valid**                                                                         |

> **Example:** `plugin.dll/.so` gives the host a `Box<dyn Tool>` and a `&'static str` name `"brush"`. The host unloads `plugin.dll/.so`. The `Box`'s data is still on the heap, but calling any of its methods jumps through a vtable that no longer exists. Reading the name reads memory that was part of the DLL. Both are likely to crash.

"Static" in `&'static` only means "lives as long as the DLL", and a DLL that gets unloaded does not live forever.

Code that runs later can dangle too:

- **threads** still running the DLL's code;
- **thread-local values** whose destructor is in the DLL: the destructor runs when the thread exits, which can be after the DLL is gone;
- **callbacks registered with someone else**, for example a logger, a timer, an `atexit` handler or an operating system hook.

### How can a program unload a DLL safely?

Every reference into the DLL has to be dropped, copied out, or redirected *before* the DLL goes away. In practice:

- **Copy out** any data the program keeps: store a `String`, not a `&'static str`.
- **Redirect** stored function pointers and vtables to the new version of the code, if one is being loaded.
- **Join** every thread the DLL started, and unregister every callback it registered.
- **Delay the unload.** Keeping the old DLL loaded for a while after a newer version replaces it gives remaining references time to be redirected. It costs the memory of the old DLL, and it only reduces the risk: a reference that is never redirected still dangles once the DLL is finally unloaded.

## Quick reference

| | Static | Dynamic |
|---|---|---|
| Library code lives | inside the executable | in a separate DLL |
| Copies of a library's globals | one per executable or DLL that embeds it | one per process |
| Files to ship | one | the executable plus its DLLs |
| Can be swapped while running | no | yes (unload, then load the new one) |
| Optimisation across boundaries | yes (LTO) | no |
| Generic and inlined library code | in the executable | still copied into each DLL that uses it |
| Type identity across DLLs | — | only if every copy was built with identical inputs |
