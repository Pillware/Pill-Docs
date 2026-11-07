<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4023"></a>

# Function `pill_editor_core::gizmo::handle_kind`

```rust
pub fn handle_kind(handle: u32) -> Option<HandleKind>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:451`

What a handle id addresses; `None` for an id this module never issues.

Ids are stable numbers: `1..=3` translate axes, `4..=6` translation
planes, `11..=13` rotate rings, `21..=23` scale axes.
