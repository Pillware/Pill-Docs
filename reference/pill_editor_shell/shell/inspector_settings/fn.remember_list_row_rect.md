<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-884"></a>

# Function `pill_editor_shell::shell::inspector_settings::remember_list_row_rect`

```rust
pub fn remember_list_row_rect(session: &mut InspectorSession, asset_path: &str, family: &str, index: usize, rect: egui::Rect);
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:616`

Remembers a list row's rectangle and logs it once per placement, keyed
`asset:family[index]`, so a suite can aim a drag at it.

The placement is recorded even when logging is off, because the shell's own
tests read it. The log line belongs to a scripted run, like every other row
rectangle's.
