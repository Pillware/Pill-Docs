<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-566"></a>

# Function `pill_editor_core::browser::tile_columns`

```rust
pub fn tile_columns(available_width: f32, cell_width: f32) -> usize;
```

Source: `editor\pill_editor_core\src\browser.rs:323`

Returns how many tiles fit across `available_width` points when each cell
takes `cell_width` points. The count is never zero, so a narrow pane still
draws its rows.
