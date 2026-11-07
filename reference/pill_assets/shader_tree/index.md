<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-87"></a>

# Module `pill_assets::shader_tree`

Source: `assets\pill_assets\src\shader_tree.rs:1`

Cooking a crate's whole shader tree: the routine a build script and the
development shader watcher share.
Cooks a crate's shader directory by convention.

## Responsibilities

- Find the directories under a shader root that hold stage sources, and the
  ones that hold headers ([`shader_tree_layout`](fn.shader_tree_layout.md#rustdoc-item-158)).
- Cook every stale source in one call ([`cook_shader_tree`](fn.cook_shader_tree.md#rustdoc-item-137)), with every
  header directory on the include path.

## Design

A crate's shaders are cooked in two places: in its build script, before the
crate compiles, and in the development host's shader watcher, while the
crate runs. Both call this module with the same root. So a cook at runtime
compiles the same files, and finds the same headers, as the build did.

## Convention

- A directory named `include` holds headers. Every one in the tree is on
  every source's include path, in sorted path order.
- Any other directory that directly holds `.hlsl` files is a source
  directory. Its sources are cooked to `.wgsl` next to them, and the stage
  comes from the file name (see [`HlslToWgsl`](../rules/hlsl_to_wgsl/struct.HlslToWgsl.md#rustdoc-item-13)).
- In any other directory, only subdirectories matter: nothing it holds is
  cooked.

## Module contents

### Structs
- [`ShaderTreeLayout`](struct.ShaderTreeLayout.md#rustdoc-item-91) — Where a shader tree keeps its sources and its headers.
- [`ShaderTreeReport`](struct.ShaderTreeReport.md#rustdoc-item-138) — What one [`cook_shader_tree`] found and did.

### Functions
- [`collect_layout`](fn.collect_layout.md#rustdoc-item-159) — Walks `directory` and every directory below it, recording the source
- [`cook_shader_tree`](fn.cook_shader_tree.md#rustdoc-item-137) — Cooks every stale stage source under `root`, a crate's `shaders/`
- [`shader_tree_layout`](fn.shader_tree_layout.md#rustdoc-item-158) — Finds the directories under `root` that hold stage sources and the ones

### Constants
- [`INCLUDE_DIRECTORY_NAME`](constant.INCLUDE_DIRECTORY_NAME.md#rustdoc-item-86) — Name of a directory holding headers rather than stage sources.
- [`SOURCE_EXTENSION`](constant.SOURCE_EXTENSION.md#rustdoc-item-88) — Extension of the stage source files this module looks for.
