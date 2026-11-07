<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-80"></a>

# Module `pill_assets::rules`

Source: `assets\pill_assets\src\rules\mod.rs:1`

The rules this crate ships: the shader rule, and the [`default_rules`](fn.default_rules.md#rustdoc-item-82) set
that every pipeline runs.
The cooking rules this crate ships.

## Responsibilities

- Re-export the rules that need no external crate.
- Assemble [`default_rules`](fn.default_rules.md#rustdoc-item-82), the set a new pipeline starts with.

## Design

Only rules that need no external crate live here. A rule that has to decode
a file format - mesh, texture - belongs to the crate that already has that
decoder. It is added to a [`crate::Pipeline`](../struct.Pipeline.md#rustdoc-item-84) through
[`crate::Pipeline::with_manifest`](../struct.Pipeline.md#rustdoc-item-85).

## Module contents

### Modules
- [`hlsl_to_wgsl`](hlsl_to_wgsl/index.md#rustdoc-item-1) — HLSL/Slang source in, WGSL out, through the `slangc` CLI.

### Functions
- [`default_rules`](fn.default_rules.md#rustdoc-item-82) — Returns the rules a new pipeline starts with.

## Re-exports

- [`pub use hlsl_to_wgsl::HlslToWgsl;`](hlsl_to_wgsl/struct.HlslToWgsl.md#rustdoc-item-13)
