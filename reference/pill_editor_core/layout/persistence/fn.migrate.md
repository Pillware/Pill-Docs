<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5309"></a>

# Function `pill_editor_core::layout::persistence::migrate`

```rust
pub(in layout::persistence) fn migrate(dock: &mut super::EditorDock) -> Option<u32>;
```

Visibility: `{'restricted': {'parent': 5269, 'path': '::layout::persistence'}}` · Source: `editor\pill_editor_core\src\layout\persistence.rs:138`

Upgrade an older document in place, returning the version it came from;
`None` when this build has no rule for that version.

Each entry in `TAB_ADDITIONS` names the newest schema that still lacks a
tab, the tab the new one is placed beside, and the tab itself. A document
several versions old gets every missing tab in one pass, in tab-strip
order, and no tab the user arranged moves.
