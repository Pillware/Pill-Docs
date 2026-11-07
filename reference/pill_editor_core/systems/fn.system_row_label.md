<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8464"></a>

# Function `pill_editor_core::systems::system_row_label`

```rust
pub fn system_row_label(system: &crate::editor_state::SystemSummary) -> String;
```

Source: `editor\pill_editor_core\src\systems.rs:33`

The row label for one system: `name (owner)`, marked `[ambiguous]` when
another system shares the name.
