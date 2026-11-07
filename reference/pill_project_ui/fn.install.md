<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-423"></a>

# Function `pill_project_ui::install`

```rust
pub fn install(engine: &mut pill_engine_core::Engine);
```

Source: `ui\pill_project_ui\src\lib.rs:458`

Put a [`GameUi`](struct.GameUi.md#rustdoc-item-305) into `engine`'s world with the fallback theme, the frame
slot a renderer drains, and the theme re-apply system.

A project that wants its own look calls [`install_with_theme`](fn.install_with_theme.md#rustdoc-item-422) instead.
An existing UI is kept, so a project reload does not reset the context, its
fonts, or the state the player typed into it. The slot is what tells a
renderer that this world's UI is the game's.
