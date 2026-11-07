<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1066"></a>

# Module `pill_editor::runner::editor_window`

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:1`

The editor window's state and the code that opens it.

## Responsibilities

- Hold the state one editor frame reads and writes: the main window and
  the editor's GPU device, the host (which owns the project, the world and
  the shell session), the scene views and popout windows, the cameras, the
  gizmo drag in flight, and the caches the frame keeps.
- Create all of it in [`EditorWindow::open`](struct.EditorWindow.md#rustdoc-item-642): the device, the overlay, the
  game window, the host with its modules, and the scene views.

## Design

The state is one struct because the frame's phases all work on one borrow
of it. The methods that use it live in the sibling modules, one per
concern. The fields are `pub(super)` so those modules can read them; a
getter for each field would only wrap plain data.

## Module contents

### Structs
- [`EditorWindow`](struct.EditorWindow.md#rustdoc-item-625) — The editor's window, its host, and everything the frame loop owns.
- [`ScriptedDrag`](struct.ScriptedDrag.md#rustdoc-item-604) — A scripted left-button drag in flight: where the press lands, where the
- [`ThemeWatch`](struct.ThemeWatch.md#rustdoc-item-583) — What the last theme resolution read.

### Enums
- [`FontSource`](enum.FontSource.md#rustdoc-item-853) — Where one font family's bytes come from.
- [`ScriptedDragStage`](enum.ScriptedDragStage.md#rustdoc-item-993) — The stage a [`ScriptedDrag`] is waiting to inject, one per frame.
