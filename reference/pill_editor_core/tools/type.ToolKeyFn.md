<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11020"></a>

# Type alias `pill_editor_core::tools::ToolKeyFn`

```rust
pub type ToolKeyFn = fn (entity: pill_engine::Entity, key: &str, selected: &[u64], world: &pill_engine::World) -> KeyResponse;
```

Source: `editor\pill_editor_core\src\tools.rs:534`

Answers one key press while the tool owns an element selection.

`key` is the key's wire name, lower case: `delete`, `k`. The hook is asked
only while an element selection exists and a tool is active, so a key the
editor binds keeps working everywhere else.
