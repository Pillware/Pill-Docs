<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-882"></a>

# Function `pill_editor_shell::shell::inspector_settings::moved_entry`

```rust
pub fn moved_entry(entries: &[JsonValue], from: usize, to: usize) -> Vec<JsonValue>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:586`

Returns the entries with the one at `from` moved to the insertion point
`to`, which is an index in `0..=len`.

A drop says where the entry goes *between* rows, so a move downwards takes
the entry out first and ends one slot earlier than the raw index. An index
that does not move the entry leaves the list as it was.
