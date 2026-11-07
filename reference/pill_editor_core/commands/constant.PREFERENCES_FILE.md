<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1829"></a>

# Constant `pill_editor_core::commands::PREFERENCES_FILE`

```rust
pub const PREFERENCES_FILE: &str = "preferences.json";
```

Source: `editor\pill_editor_core\src\commands.rs:962`

The preferences file's name, next to the layout file.

Declared here rather than in an editor frontend: the executable reads the
file and applies the shell's save commands to it, and both sides link this
crate.
