<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-161"></a>

# Module `pill_ui_theme::font`

Source: `ui\pill_ui_theme\src\font.rs:1`

The `.ttf`/`.otf` font a theme names, loaded as an asset.
The `.ttf`/`.otf` font a theme layer names.

## Responsibilities

- [`FontAsset`](struct.FontAsset.md#rustdoc-item-5): the font file's bytes as an asset, so a font a theme names
  is imported, versioned and re-imported when the file changes, like every
  other asset.
- [`FontAsset::bytes`](struct.FontAsset.md#rustdoc-item-7): the bytes a UI hands to egui's `set_fonts`.
- [`FONT_SHARED_NAME`](constant.FONT_SHARED_NAME.md#rustdoc-item-6): the name that identifies the asset type across
  binaries.

## Design

A font file needs no import settings, so the asset is only the bytes,
copied out of the file. Going through the asset store is what lets a
changed font reach a running UI: when the file is imported again, the store
moves the font's content version, and both the game UI and the editor
install the fonts again without a restart. A project that read the file
itself would never notice the change.

The bytes are an owned copy, never a borrow from the file or pack they came
from, so the asset stays valid after the module that loaded it is unloaded.

## Module contents

### Structs
- [`FontAsset`](struct.FontAsset.md#rustdoc-item-5) — A font file a theme layer named, as its bytes.
- [`FontImportSettings`](struct.FontImportSettings.md#rustdoc-item-108) — The import settings a font's `.meta` file holds.

### Constants
- [`FONT_SHARED_NAME`](constant.FONT_SHARED_NAME.md#rustdoc-item-6) — The name [`FontAsset`] is registered under, the same in every binary.
