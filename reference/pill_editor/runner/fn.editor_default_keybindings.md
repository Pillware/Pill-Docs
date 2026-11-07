<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-857"></a>

# Function `pill_editor::runner::editor_default_keybindings`

```rust
pub(in runner) fn editor_default_keybindings() -> pill_editor_core::commands::KeybindingsFile;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3893`

The bindings the editor starts with when there is no keybindings file.

Unity's table, whose W/E/R the tool shortcuts use; the file's own `preset`
replaces it as soon as one names a preset.
