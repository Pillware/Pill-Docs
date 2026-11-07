<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2240"></a>

# Function `pill_editor_core::drain::follow_selection`

```rust
pub(in drain) fn follow_selection(engine: &mut pill_engine::Engine, commands: &[crate::editor_state::EditorCommand], failed_command_indices: &std::collections::HashSet<usize>);
```

Visibility: `{'restricted': {'parent': 2242, 'path': '::drain'}}` · Source: `editor\pill_editor_core\src\drain.rs:196`

Moves the shared selection with the file a batch moved or deleted.

The selection follows the disk instead of being recorded as a step, so an
undo never has to replay a selection change to keep the two in agreement.
A command that failed is skipped: a move refused because its destination
exists must not leave the selection on a file that is not there.
