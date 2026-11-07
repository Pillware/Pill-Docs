<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6390"></a>

# Module `pill_editor_core::previews`

Source: `editor\pill_editor_core\src\previews.rs:1`

Asset previews: the preference that turns them on and the tiles worth
drawing one for.
Asset previews on the editor's side: the preference that turns them on, and
the preview each listing row asks for.

## Responsibilities

- [`RENDER_PREVIEWS_KEY`] and [`render_previews`]: the preference a person
  turns on or off in the Preferences tab.
- [`preview_asset`]: which renderer preview a listing row asks for, from its
  asset type, its file and its guid.
- [`preview_asset_for`]: the same choice for the key the panel names a row
  by.

## Design

Nothing here renders. The renderer draws the preview and the executable
turns the returned pixels into an editor texture, so this module only
decides *what* to ask for.

## Module contents

### Functions
- [`preview_asset`](fn.preview_asset.md#rustdoc-item-6387) — The preview a listing row asks for, when its type is a texture, a material
- [`preview_asset_for`](fn.preview_asset_for.md#rustdoc-item-6391) — The preview of the listing row that `listing_key` names.
- [`preview_file_path`](fn.preview_file_path.md#rustdoc-item-6389) — The file a listing row's preview uses: its path below the project's asset
- [`render_previews`](fn.render_previews.md#rustdoc-item-6386) — Whether the preferences document asks for rendered asset previews.

### Constants
- [`RENDER_PREVIEWS_KEY`](constant.RENDER_PREVIEWS_KEY.md#rustdoc-item-6385) — The preferences key that holds whether rendered asset previews are on.
