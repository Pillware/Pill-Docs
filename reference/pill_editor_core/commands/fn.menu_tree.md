<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1602"></a>

# Function `pill_editor_core::commands::menu_tree`

```rust
pub fn menu_tree(registry: &CommandRegistry) -> std::collections::BTreeMap<String, Vec<&CommandSpec>>;
```

Source: `editor\pill_editor_core\src\commands.rs:654`

Groups the registry's commands by their top-level menu, in command order.
Commands with no menu path are left out.
