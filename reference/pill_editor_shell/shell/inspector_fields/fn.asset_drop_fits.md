<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-680"></a>

# Function `pill_editor_shell::shell::inspector_fields::asset_drop_fits`

```rust
pub fn asset_drop_fits(dragged: &str, row_input: &AssetRowInput<'_>) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:523`

Whether a file dragged out of the Assets tab may be dropped on an asset row.

`dragged` is the listing key the Assets tab drags. It fits when it is one
of the files the row's own picker offers, which are the listed files of the
field's asset type. Without this check a mesh dropped one row too low, on a
material slot, would be queued and only refused by the engine.
