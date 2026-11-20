<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-246"></a>

# Function `pill_editor_shell::shell::tab_problems::problems_tab`

```rust
pub fn problems_tab(ui: &mut egui::Ui, snapshot: &EditorSnapshot, request: &mut Option<usize>);
```

Source: `editor\pill_editor_shell\src\shell\tab_problems.rs:36`

Draws the Problems tab: one section per module or function, each with its
rows.

`request` is set to the index of the row the user clicked in
`snapshot.problems`, when that row names a file. It is left as it was
otherwise. The executable turns the index into the location it opens in
the code editor.
