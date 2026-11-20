<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-448"></a>

# Function `pill_editor_shell::shell::chrome::select_entity`

```rust
pub fn select_entity(selection: &mut EditorSelection, entity: Entity) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:128`

Moves the shared selection onto `entity` alone.

It logs the same `[editor] selection changed` token a scene pick logs, so a
suite can watch either path. Returns whether the selection moved.
