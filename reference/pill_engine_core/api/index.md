<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-74"></a>

# Module `pill_engine_core::api`

Source: `engine\pill_engine_core\src\api.rs:1`

The engine API table a loaded project or module receives at its entry
point.
The table the host hands to every loaded artifact at its entry point.

## Responsibilities

- Defines [`EngineApi`](struct.EngineApi.md#rustdoc-item-3), the `#[repr(C)]` struct every project and module
  DLL receives through its `pill_module_init` export.
- Builds one for a live engine with [`EngineApi::new`](struct.EngineApi.md#rustdoc-item-4).

## Design

**Both sides of the module ABI are Rust.** The host owns the
[`Engine`](../engine/struct.Engine.md#rustdoc-item-2) and hands each loaded artifact a pointer to it.
The artifact casts `engine_handle` back to `&mut Engine` and calls the full
typed API. A language-neutral ABI would need one function pointer per
engine operation. The engine's surface is generic Rust
(`register_component::<T>`, typed queries), and such a table cannot express
it without a second implementation of the whole API.

What crosses the DLL boundary is a `#[repr(C)]` struct, not a bare pointer.
It leaves room to add a field without changing the signature of every
entry point. Adding or removing a field still changes the struct layout
every module is compiled against, so every module and project must be
rebuilt together. Development does that automatically, because the host
builds them all from source at startup.

## Module contents

### Structs
- [`EngineApi`](struct.EngineApi.md#rustdoc-item-3) — The engine table a project or module DLL receives at its entry point.
