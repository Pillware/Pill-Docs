<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-560"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_entities::entity_rows`

```rust
pub fn entity_rows(snapshot: &EditorSnapshot) -> Vec<(Entity, String)>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_entities.rs:63`

Returns one row per live entity, for the Entities tab.

Each row pairs the entity handle with its label: the display name and the
number of components attached.
