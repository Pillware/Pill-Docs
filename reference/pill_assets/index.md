<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-300"></a>

# pill_assets API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Rule-based asset cooking, driven from build scripts.

## Responsibilities

- Find each rule's inputs by glob under a pipeline's root, rebuild the
  stale outputs, and report what was found, rebuilt and skipped.
- Stamp an output that a rule left unchanged with its newest input's time,
  so the next run treats it as fresh.
- Write a project's `res` and the roots its modules ship as one asset pack
  ([`write_asset_pack_with_roots`](fn.write_asset_pack_with_roots.md#rustdoc-item-293)), which a shipping build embeds and the
  engine's asset store reads.
- Move a source asset together with its `.meta` file ([`move_asset`](asset_move/fn.move_asset.md#rustdoc-item-172)).

## Design

The crate has no dependencies beyond `pill_asset_format`'s constants, like
`pill_hot_scan`, because it runs from build scripts, where a dependency is
paid on every clean build. Globbing and timestamps come from `std::fs`.

Shader cooking is not optional: [`default_rules`](rules/fn.default_rules.md#rustdoc-item-82) always carries
[`HlslToWgsl`](rules/hlsl_to_wgsl/struct.HlslToWgsl.md#rustdoc-item-13), because a shader that was never cooked does not exist.
Cooking meshes and textures is opt-in through [`Pipeline::with_manifest`](struct.Pipeline.md#rustdoc-item-85),
so a project that decodes those at runtime pays neither the cook time nor
the decoder's dependencies.

## Module contents

### Modules
- [`asset_move`](asset_move/index.md#rustdoc-item-161) — Moving a source asset and its metadata file as one operation.
- [`rules`](rules/index.md#rustdoc-item-80) — The rules this crate ships: the shader rule, and the [`default_rules`] set
- [`shader_tree`](shader_tree/index.md#rustdoc-item-87) — Cooking a crate's whole shader tree: the routine a build script and the

### Structs
- [`Pipeline`](struct.Pipeline.md#rustdoc-item-84) — A set of rules applied under one root directory.
- [`PipelineStats`](struct.PipelineStats.md#rustdoc-item-252) — The files one pass of [`Pipeline::run`] or [`Pipeline::plan`] found, and

### Enums
- [`CookError`](enum.CookError.md#rustdoc-item-64) — Failure to discover inputs, cook an output, read a manifest or write an

### Traits
- [`Rule`](trait.Rule.md#rustdoc-item-67) — One transformation applied to every file its glob matches.

### Functions
- [`expand`](fn.expand.md#rustdoc-item-296) — Return the files that match one `directory/*.extension` pattern below
- [`is_stale`](fn.is_stale.md#rustdoc-item-299) — Whether `output` is missing or older than `input`.
- [`pack_key`](fn.pack_key.md#rustdoc-item-295) — The `/`-separated key that `file` packs under below `root`, or `None` when
- [`stamp_output`](fn.stamp_output.md#rustdoc-item-297) — Mark `output` as cooked against `inputs`, whether or not the rule rewrote
- [`walk_files`](fn.walk_files.md#rustdoc-item-292) — Return every file below `directory`, recursively, sorted by path.
- [`write_asset_pack`](fn.write_asset_pack.md#rustdoc-item-294) — Write every file below `source` into one asset pack at `pack_path`, and
- [`write_asset_pack_with_roots`](fn.write_asset_pack_with_roots.md#rustdoc-item-293) — Write every file below `source` and below each of `module_roots` into one

## Re-exports

- [`pub use rules::default_rules;`](rules/fn.default_rules.md#rustdoc-item-82)
- [`pub use rules::HlslToWgsl;`](rules/hlsl_to_wgsl/struct.HlslToWgsl.md#rustdoc-item-13)
- [`pub use asset_move::metadata_path_of;`](asset_move/fn.metadata_path_of.md#rustdoc-item-199)
- [`pub use asset_move::move_asset;`](asset_move/fn.move_asset.md#rustdoc-item-172)
- [`pub use asset_move::MoveAssetError;`](asset_move/enum.MoveAssetError.md#rustdoc-item-173)
- [`pub use shader_tree::cook_shader_tree;`](shader_tree/fn.cook_shader_tree.md#rustdoc-item-137)
- [`pub use shader_tree::shader_tree_layout;`](shader_tree/fn.shader_tree_layout.md#rustdoc-item-158)
- [`pub use shader_tree::ShaderTreeLayout;`](shader_tree/struct.ShaderTreeLayout.md#rustdoc-item-91)
- [`pub use shader_tree::ShaderTreeReport;`](shader_tree/struct.ShaderTreeReport.md#rustdoc-item-138)
