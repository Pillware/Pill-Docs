<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5311"></a>

# Function `pill_editor_core::layout::persistence::append_beside`

```rust
pub(in layout::persistence) fn append_beside(dock: &mut super::EditorDock, anchor: super::EditorTab, tab: super::EditorTab);
```

Visibility: `{'restricted': {'parent': 5269, 'path': '::layout::persistence'}}` · Source: `editor\pill_editor_core\src\layout\persistence.rs:160`

Append `tab` to the leaf that holds `anchor` (the tab group it is docked
in), or to the focused leaf when the anchor is not docked, so an unusual
layout keeps the rest of its tabs.
