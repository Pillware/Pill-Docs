<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11648"></a>

# Module `pill_editor_core::viewport`

Source: `editor\pill_editor_core\src\viewport.rs:1`

The viewport state a callback reads.
The viewport state a hook reads.

## Responsibilities

- Define [`EditorViewportState`]: the active scene view, the pointer in it,
  that view's rectangle and how many views exist.
- Give both frontends one place to publish it, so a callback reads the same
  value whichever executable runs it.

## Design

The active view and the pointer never leave the executable today: the shell
draws and the runner tracks. A callback runs inside `pill_editor_core`,
which owns neither, so the executable publishes this plain value each frame
before it services the editor's requests. The browser has no scene viewport
at all and publishes the empty posture - `active_view: None`, no pointer,
no rectangle, `view_count: 0` - rather than leaving the resource absent, so
a callback can read it unconditionally.

The resource is `Keep`: it describes the editor's windows, not the game, so
Play and Stop leave it alone.

## Module contents

### Structs
- [`EditorViewportState`](struct.EditorViewportState.md#rustdoc-item-5083) — The editor's viewports, as one callback-readable value.
