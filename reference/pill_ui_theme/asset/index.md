<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Module `pill_ui_theme::asset`

Source: `ui\pill_ui_theme\src\asset.rs:1`

The `.theme` asset type, which carries its own header and guid, so it needs
no `.meta` file.
The `.theme` standalone asset.

## Responsibilities

- [`THEME_SHARED_NAME`](constant.THEME_SHARED_NAME.md#rustdoc-item-1): the pinned asset identity across binaries.
- The [`Asset`](pill_engine_core::Asset) and
  [`StandaloneAsset`](pill_engine_core::StandaloneAsset) implementations for
  [`ThemeOverrides`](../overrides/struct.ThemeOverrides.md#rustdoc-item-0), so a `.theme` file loads by extension through the
  world's import registry like a `.material` or `.scene`.

## Design

A `.theme` file is a standalone asset. Its own header carries
`format_version`, `asset_type` and `guid`, and the override document sits
under `asset`, so the file needs no `.meta` sidecar. The type holds no
asset references, so `from_document` returns the document unchanged.

The pinned shared name gives the type one asset identity in every binary
that carries it: the project, `pill_project_ui`, the editor shell and
`pill_editor_core`. That holds even if more than one of them ends up with
its own compiled copy of this crate.

## Module contents

### Constants
- [`THEME_SHARED_NAME`](constant.THEME_SHARED_NAME.md#rustdoc-item-1) — The pinned shared name of [`ThemeOverrides`], used by its `Asset`
