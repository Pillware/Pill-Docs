<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-278"></a>

# Constant `pill_project_ui::PRIMARY_SURFACE`

```rust
pub const PRIMARY_SURFACE: u32 = 0;
```

Source: `ui\pill_project_ui\src\lib.rs:76`

The surface id of the window a game draws into.

A pass names the surface whose frame it belongs in. A game passes this
constant to [`GameUi::run`](struct.GameUi.md#rustdoc-item-277), so the UI is drawn with the rest of the
primary window's frame.
