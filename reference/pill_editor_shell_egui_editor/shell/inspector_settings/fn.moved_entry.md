<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-802"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::moved_entry`

```rust
pub fn moved_entry(entries: &[JsonValue], from: usize, to: usize) -> Vec<JsonValue>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:586`

Returns the entries with the one at `from` moved to the insertion point
`to`, which is an index in `0..=len`.

A drop says where the entry goes *between* rows, so a move downwards takes
the entry out first and ends one slot earlier than the raw index. An index
that does not move the entry leaves the list as it was.
