<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-450"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::floating_popup`

```rust
pub fn floating_popup(ui: &egui::Ui, id: egui::Id, anchor: egui::Rect, width: f32, regions: &mut Vec<ShellRect>, contents: &mut dyn FnMut(&mut egui::Ui)) -> FloatingPopup;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:278`

Opens a floating popup under an anchor rectangle, claims its area and
answers whether a press landed outside it.

A picker draws in a foreground `Area` under the field it belongs to, so it
floats over the rows below instead of pushing them down. The popup's
rectangle joins the frame's overlay regions, so a click inside it never
becomes a scene pick. `width` is the popup's minimum width in points, and
`contents` draws the popup's body.

The rule that closes the popup lives here too, because only this code knows
the popup's rectangle: any press outside the popup and its anchor closes
it, whatever button it was. A list that only closes when an item is picked
fights the person who changed their mind. The press that opened a picker
landed on its anchor, so it never closes the popup it just opened.
