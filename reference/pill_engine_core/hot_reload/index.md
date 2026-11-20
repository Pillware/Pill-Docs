<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7005"></a>

# Module `pill_engine_core::hot_reload`

Source: `engine\pill_engine_core\src\hot_reload\mod.rs:1`

The hot-reload group: the dispatch slots a patch redirects, and the
component persistence that keeps data readable across a swap. Its modules
keep their old crate-root paths through the re-exports below.
The hot-reload machinery: what survives a swapped DLL and what carries a
patch into it.

## Responsibilities

- Give a registered system a stable dispatch slot a patch can redirect
  ([`hot_patch`](hot_patch/index.md#rustdoc-item-6553)).
- Keep component data readable across a reload: the persistence registry,
  the schema hashes and the migration that moves a row from an older layout
  ([`persistence`](persistence/index.md#rustdoc-item-5453)).

## Design

Each module keeps its old crate-root path: the crate re-exports both
(`pub use hot_reload::{hot_patch, persistence}` in `lib.rs`), so moving a
file into this group changes no caller.

The two belong together because they answer one question from two sides: a
patched function keeps running while the data it reads was built by an older
image, and the persisted type names are what a later generation registers
against. Neither may hold a pointer into an image that a reload can unmap,
so both store owned text and plain numbers.

## Module contents

### Modules
- [`hot_patch`](hot_patch/index.md#rustdoc-item-6553) — Per-function hot patching: stable dispatch slots for registered systems.
- [`persistence`](persistence/index.md#rustdoc-item-5453) — Component persistence and schema migration for hot-reload.
