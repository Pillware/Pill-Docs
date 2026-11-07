<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1272"></a>

# Function `pill_development_host::config::read_editor_settings`

```rust
pub fn read_editor_settings(project_directory: &std::path::Path) -> Result<EditorSettings, String>;
```

Source: `hosting\pill_development_host\src\config.rs:1746`

Reads the editor's settings file from the project root.

A project usually has no such file; the settings are then empty. Unknown
keys are refused instead of ignored, so a misspelled `editor_themes:` is
reported and does not quietly fall back to the default theme.

## Errors

Returns a message naming the file when it exists but cannot be read, is
not valid YAML, or names an unknown key.
