<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-18"></a>

# Module `pill_editor::drag_out`

Visibility: `crate` · Source: `editor\pill_editor\src\drag_out.rs:1`

Hands one project asset to the OS as a file drag.
Dragging a project asset out to the OS.

## Responsibilities

- [`start`]: hands one project asset to OLE as a file drag, so it can be
  dropped into Explorer, another editor, or any `CF_HDROP` target.
- [`EditorDropSource`]: the drop source that ends the drag when the mouse
  button comes up and cancels it on Escape.

## Design

The shell cannot start the drag itself. `DoDragDrop`, OLE's drag-and-drop
call, runs a modal loop on the thread that calls it, and only this
executable depends on the `windows` crate. Instead, the shell reports the
asset's path in the frame it hands back, and this module starts the drag
from the frame boundary.

The path becomes the shell's item list first (a PIDL, a pointer to an item
identifier list). `SHCreateDataObject` then wraps that list in a data object
which offers the file under `CF_HDROP`, the format a file drop target reads.

The drop source always ends the drag instead of keeping it running. It drops
the file as soon as the left button is not held, and cancels on Escape.
Answering "continue" on a button it could not read would spin the modal loop
while the editor's frame stays frozen.

The same rule applies before the loop. `DoDragDrop` only asks its drop
source whether to continue when input arrives, so a drag started with no
button held would leave the editor frozen until more input arrived.
[`start`] reads the button first and starts no drag. A drag no pointer
started - a scripted one - never runs the loop at all, for the same reason.

## Platforms

An OLE drag source is what makes a file draggable out of the editor, and it
exists on Windows alone. Everywhere else [`start`] answers
[`DragOutOutcome::Unsupported`] without starting anything, and the runner
logs that once per request; nothing else in the editor is affected. winit
offers no drag source on Unix, so a real implementation would have to speak
XDND or the Wayland data-device protocol itself, which is why the platform
split is here and not in a dependency.

## Module contents

### Structs
- [`EditorDropSource`](struct.EditorDropSource.md#rustdoc-item-23) — The drop source OLE calls while the drag runs.
- [`EditorDropSource_Impl`](struct.EditorDropSource_Impl.md#rustdoc-item-26)

### Enums
- [`DragOutOutcome`](enum.DragOutOutcome.md#rustdoc-item-191) — How a drag out ended, for the caller's log line.
- [`DropEffect`](enum.DropEffect.md#rustdoc-item-184) — The effect a drop target reported, without naming the platform's own type.

### Functions
- [`initialize_ole`](fn.initialize_ole.md#rustdoc-item-302) — Initialises OLE on the calling thread, once.
- [`left_button_held`](fn.left_button_held.md#rustdoc-item-299) — Whether the left button is held right now.
- [`run_modal_drag`](fn.run_modal_drag.md#rustdoc-item-300) — Runs the modal drag over one prepared data object.
- [`start`](fn.start.md#rustdoc-item-188) — Hands `absolute_path` to OLE as a file drag and blocks until the drag ends.
