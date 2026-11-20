<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-450"></a>

# Function `pill_editor_shell::shell::chrome::report_selection_change`

```rust
pub fn report_selection_change(selection: &EditorSelection, before: &[Entity], entity: Entity) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:152`

Logs the `[editor] selection changed` token for a move the click helpers
made, and returns whether the entity set changed.
