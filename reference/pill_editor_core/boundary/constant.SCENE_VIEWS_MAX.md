<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-188"></a>

# Constant `pill_editor_core::boundary::SCENE_VIEWS_MAX`

```rust
pub const SCENE_VIEWS_MAX: usize = 8;
```

Source: `editor\pill_editor_core\src\boundary.rs:52`

The most scene views one editor opens. Each view needs a child window and a
renderer surface, so the frontend opens at most this many windows even when
the dock holds more scene tabs.
