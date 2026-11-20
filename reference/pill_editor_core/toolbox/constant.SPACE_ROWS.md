<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10691"></a>

# Constant `pill_editor_core::toolbox::SPACE_ROWS`

```rust
pub const SPACE_ROWS: [SpaceRow; 2] = _;
```

Source: `editor\pill_editor_core\src\toolbox.rs:267`

Both spaces, in the order the viewport menu and the Preferences tab list
them. The panel's own space row walks every space the gizmo has, these two
and the active tool's frames, and its label and icon come from
[`ToolboxItem::label`](enum.ToolboxItem.md#rustdoc-item-10601) and [`ToolboxItem::icon`](enum.ToolboxItem.md#rustdoc-item-10600), which repeat the short
labels and icons below.
