<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2193"></a>

# Function `pill_editor_core::console::level_from_name`

```rust
pub fn level_from_name(requested_name: &str) -> Option<u8>;
```

Source: `editor\pill_editor_core\src\console.rs:285`

The capture level a name stands for, or `None` when the name is not one of
them. The scripted `console filter` verb goes through this.
