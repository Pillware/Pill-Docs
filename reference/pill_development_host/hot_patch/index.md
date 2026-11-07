<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1968"></a>

# Module `pill_development_host::hot_patch`

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:1`

Per-function hot patching: decides which edits can be patched, then
generates, compiles and activates the patch.
Per-function hot patching: the fast path beside the whole-module reload.

## Responsibilities

- Decide whether a source change is a body-only edit of a function the host
  can address, and refuse loudly when it is anything else.
- Generate, compile and load a small patch library for that one function.
- Install the replacement at a frame boundary: the engine's registry, an
  artifact's dispatch slot, or the function's prologue.

## Design

This never replaces the whole-module reload. It tries first, and every
change it refuses goes to [`LoadedProject::reload`](../project_module/index.md#rustdoc-item-2656).

The check is deliberately careful. It removes the bodies of the functions
the host can reach from both the old and the new source, then compares the
rest. A body-only edit of those functions leaves the two versions equal; a
changed signature, type, constant, import or other function keeps them
different. Refusing a patch only costs one reload. Accepting one by mistake
would install code built for a memory layout the running world no longer
has, so the check prefers to refuse.

Patch libraries are never unloaded: a dispatch slot may point into one for
the rest of the process.

## Module contents

### Modules
- [`compile`](compile/index.md#rustdoc-item-1910) — Patch compilation: the rustc invocation and its artifacts.
- [`failure_code`](failure_code/index.md#rustdoc-item-2350) — The change was in scope, but the attempt to deliver it did not complete.
- [`generations`](generations/index.md#rustdoc-item-1982) — Patch generations: each function's patch history, which a rollback reads.
- [`imports`](imports/index.md#rustdoc-item-2048) — The changed file's imports, rooted where a generated patch resolves them.
- [`refusal_code`](refusal_code/index.md#rustdoc-item-2343) — The change touched something a patch cannot express.
- [`routes`](routes/index.md#rustdoc-item-2087) — Patch routes: where a body is installed and how calls reach it.
- [`source`](source/index.md#rustdoc-item-2208) — The source scanner, shared with every crate's build script.
- [`worker`](worker/index.md#rustdoc-item-2334) — Patch builds: compiling and loading a patch away from the frame thread.

### Structs
- [`ApplyResult`](struct.ApplyResult.md#rustdoc-item-2513) — What one successfully installed body produced.
- [`ClassifiedEdit`](struct.ClassifiedEdit.md#rustdoc-item-2570) — One file's in-scope edit, with every field the later steps need.
- [`HotPatchSession`](struct.HotPatchSession.md#rustdoc-item-2608) — Drives the fast path for one loaded module: the project or one extension.
- [`PatchRefusal`](struct.PatchRefusal.md#rustdoc-item-2279) — Why a change could not be satisfied by a patch, or why an attempt failed.
- [`PatchStages`](struct.PatchStages.md#rustdoc-item-2215) — Where one patch spent its time, in milliseconds.
- [`Snapshot`](struct.Snapshot.md#rustdoc-item-2539) — One watched source file as this session last read it.

### Enums
- [`BeginOutcome`](enum.BeginOutcome.md#rustdoc-item-2439) — What starting a patch attempt found, and whether a build is owed.
- [`PatchOutcome`](enum.PatchOutcome.md#rustdoc-item-2403) — What one attempt at a fast patch did.

### Functions
- [`file_label`](fn.file_label.md#rustdoc-item-2655) — A path shortened to its file name, for console messages.
- [`rust_sources`](fn.rust_sources.md#rustdoc-item-2654) — Every `.rs` file under `root`, in stable order.

### Constants
- [`PATCH_NAME_PREFIX`](constant.PATCH_NAME_PREFIX.md#rustdoc-item-2354) — Prefix that separates a patch's registry entry from the crate's own.
- [`PATCH_PLAIN_EXPORT`](constant.PATCH_PLAIN_EXPORT.md#rustdoc-item-2353) — Export that reports where a patched plain function lives.
- [`PATCH_RESOLVER_EXPORT`](constant.PATCH_RESOLVER_EXPORT.md#rustdoc-item-2352) — Export a generated patch carries so the host can find its new function.

## Re-exports

- [`pub use generations::PatchGeneration;`](generations/struct.PatchGeneration.md#rustdoc-item-2011)
