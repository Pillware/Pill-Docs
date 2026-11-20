<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-240"></a>

# Function `pill_editor_shell::shell::palette::run_selected`

```rust
pub fn run_selected(palette: &mut PaletteState, session: &mut MenubarSession, viewer: &mut EditorTabViewer<'_>, rows: &[CommandView]);
```

Source: `editor\pill_editor_shell\src\shell\palette.rs:173`

Run the row at the palette's selection and close the popup.

Nothing else happens when no row is selected, which is the case while the
query matches no command that has an action.
