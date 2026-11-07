<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1830"></a>

# Constant `pill_editor_core::commands::KEYBINDINGS_FILE`

```rust
pub const KEYBINDINGS_FILE: &str = "keybindings.json";
```

Source: `editor\pill_editor_core\src\commands.rs:969`

The keybindings file's name, next to the layout file.

The executable watches it and applies every change through
[`CommandRegistry::apply_file`](struct.CommandRegistry.md#rustdoc-item-1519); the preset and the overrides it holds
decide what each shortcut does.
