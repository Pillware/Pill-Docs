<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-249"></a>

# Function `pill_editor::drag_out::run_modal_drag`

```rust
pub(in drag_out) fn run_modal_drag(data_object: windows::Win32::System::Com::IDataObject) -> DragOutOutcome;
```

Visibility: `{'restricted': {'parent': 18, 'path': '::drag_out'}}` · Source: `editor\pill_editor\src\drag_out.rs:191`

Runs the modal drag over one prepared data object.

Blocks in OLE's loop until the drop source ends the drag. The effect OLE
reports is the drop target's answer, and zero means no target took the file.
