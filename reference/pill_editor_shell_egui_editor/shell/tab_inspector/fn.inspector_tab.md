<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-572"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_inspector::inspector_tab`

```rust
pub fn inspector_tab(argument_0: &mut egui::Ui, argument_1: &EditorSnapshot, argument_2: &EditorSelection, argument_3: &mut PendingEditorCommands, argument_4: &mut Vec<ShellRect>, argument_5: &mut InspectorSession);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_inspector.rs:51`

Draws the Inspector tab: the selected entity's components as collapsible
sections (a caret, the component's duotone icon and its label), the Add
Component button in the tab's top-right, and the selected asset's import
settings as editable rows below.

Every edit the tab queues is recorded as a `SetField`, `SetArrayElement` or
`SetAssetSettings` command. Each widget's edits share one coalesce key, so
one drag or one typing run becomes a single undo step.
