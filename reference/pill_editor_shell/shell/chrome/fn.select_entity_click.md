<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-449"></a>

# Function `pill_editor_shell::shell::chrome::select_entity_click`

```rust
pub fn select_entity_click(selection: &mut EditorSelection, entity: Entity, click: SelectionClick, rows: &[Entity]) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:138`

Applies one click on an entity row to the shared selection.

`rows` is the list's own order, which only a range click reads: a range is
every row from the primary to the clicked one, so Shift-click selects what
the list shows between them. With no anchor in `rows`, a range click
behaves like a plain one. Returns whether the selection changed.
