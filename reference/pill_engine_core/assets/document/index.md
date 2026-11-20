<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-410"></a>

# Module `pill_engine_core::assets::document`

Source: `engine\pill_engine_core\src\assets\document.rs:1`

The YAML document format every asset file shares.
The YAML document format every saved document shares.

## Responsibilities

- [`parse`]: one document's bytes - a `.meta` sidecar, a standalone asset
  file, or one of the editor's own state files - as the untyped value tree
  every reader works in.
- [`render`]: one document as the YAML text the engine writes, with a
  trailing newline and no document marker.

## Design

A `.meta` sidecar and a standalone asset file are both YAML documents with
the same header - `format_version`, `asset_type` and `guid` - followed by
the type's body under `settings` or `asset`. The editor's state files (dock
layout, preferences, keybindings, recovery snapshot) are plain YAML
mappings without that header, and read and write through the same two
functions. Keeping one parser and one writer here means the engine, the
development host and the editors cannot drift apart on the file format.

A document is read into [`serde_json::Value`], not into a typed structure:
the readers above this module know the body's field names but not the
type's Rust shape, and each asset type converts the body through its own
serde implementation. YAML and this value model agree on every value an
asset file uses: mappings, sequences, strings, integers, floats, booleans
and null.

## Module contents

### Functions
- [`parse`](fn.parse.md#rustdoc-item-406) — Parses one asset document from `bytes`.
- [`render`](fn.render.md#rustdoc-item-408) — Renders `document` as the YAML text an asset file holds.
