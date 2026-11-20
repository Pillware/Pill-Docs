<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-750"></a>

# Function `pill_editor_shell::shell::inspector_widgets::continuous_edit`

```rust
pub fn continuous_edit(response: &egui::Response, value: FieldValue) -> Option<FieldEditResponse>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:66`

Turns a continuous control's response into the edit it reports.

A drag reports `Interactive` while the pointer moves and one `Committed` on
release. A value typed into the control commits at once. A release frame
with no new value still reports the commit, carrying the value the control
shows, so a callback hears exactly one end of the interaction.
