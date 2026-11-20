<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9608"></a>

# Function `pill_editor_core::toolbox::rows`

```rust
pub fn rows(state: &ToolboxState<'_>) -> Vec<ToolboxItem>;
```

Source: `editor\pill_editor_core\src\toolbox.rs:238`

Every row the panel draws for one state, in stacking order: the three
built-in tools, one row per component tool the selection offers, then the
four toggles.

The panel's height, the drag limit and every row's rectangle are sized from
this list's length, so a row appearing or disappearing with the selection
grows and shrinks the whole panel.
