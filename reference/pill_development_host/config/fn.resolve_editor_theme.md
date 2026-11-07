<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1273"></a>

# Function `pill_development_host::config::resolve_editor_theme`

```rust
pub fn resolve_editor_theme(project_directory: &std::path::Path, editor_settings: &EditorSettings) -> Option<String>;
```

Source: `hosting\pill_development_host\src\config.rs:1769`

Returns the theme path the project layer adds: the `editor_theme:` value
when the file names one, `editor/editor.theme` when the project ships that
file, and nothing otherwise.

The path is relative to the project's `res`. It is checked against the
editor theme scope when it loads, not here, so a file naming
`ui/x.theme` is refused at load rather than resolved.
