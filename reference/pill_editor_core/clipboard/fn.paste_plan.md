<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1167"></a>

# Function `pill_editor_core::clipboard::paste_plan`

```rust
pub fn paste_plan(payload: &Payload, selection: &crate::editor_state::EditorSelection, snapshot: &crate::editor_state::EditorSnapshot) -> Result<PastePlan, String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:413`

Builds the recorded step a paste applies.

An entity payload becomes one `CreateEntity`. A component payload becomes
an `AddComponent` (only when the entity does not carry the component yet)
plus one `SetField` per field. A field payload becomes one `SetField`. An
asset payload queues no command, because it only moves the selection.

In an entity payload, a component this build does not register is skipped
and named in [`PastePlan::skipped`](struct.PastePlan.md#rustdoc-item-1114). A field whose token does not parse is
skipped the same way in every payload kind that carries fields, so a paste
never writes a value it could not read; the field keeps its current value,
or the component's default when the component is new.

## Errors

Returns a message when a component payload names a component this build
does not register or cannot add, when a component or field payload has no
selected entity, or when a field payload's value is not a token this build
parses.
