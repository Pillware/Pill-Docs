<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2300"></a>

# Function `pill_editor_core::drain::expand_element_menu`

```rust
pub(in drain) fn expand_element_menu(engine: &mut pill_engine::Engine, batch: &mut crate::commands::PendingCommandBatch);
```

Visibility: `{'restricted': {'parent': 2297, 'path': '::drain'}}` · Source: `editor\pill_editor_core\src\drain.rs:274`

Replaces every [`EditorCommand::RunElementMenu`](../editor_state/command/enum.EditorCommand.md#rustdoc-item-2299) in `batch` with the
commands the active tool's menu row asks for.

A menu row is the tool's to define, so the drain asks it at the frame
boundary and runs its answer in the row's place: the batch the shell queued
then holds exactly the edit the row means, and the history records it as
one step. A row the tool refuses keeps its command, whose apply reports the
refusal like any other failed command.
