<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4418"></a>

# Function `pill_editor_core::history::estimate_bytes`

```rust
pub fn estimate_bytes(commands: &[crate::editor_state::EditorCommand]) -> usize;
```

Source: `editor\pill_editor_core\src\history.rs:463`

Estimates how many bytes a batch keeps alive.

The number only decides when the memory budget drops the oldest entries,
so it does not have to be exact: a fixed cost per command plus the bytes
its strings and arrays hold is close enough for that decision.
