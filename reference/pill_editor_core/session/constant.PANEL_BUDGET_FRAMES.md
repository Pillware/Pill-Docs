<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7228"></a>

# Constant `pill_editor_core::session::PANEL_BUDGET_FRAMES`

```rust
pub const PANEL_BUDGET_FRAMES: u32 = 120;
```

Source: `editor\pill_editor_core\src\session.rs:81`

How many frames in a row a panel must overshoot its budget before the
editor says so - a single slow frame (a reload, a texture upload) is not a
slow panel.
