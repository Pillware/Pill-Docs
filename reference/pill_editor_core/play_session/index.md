<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8287"></a>

# Module `pill_editor_core::play_session`

Source: `editor\pill_editor_core\src\play_session.rs:1`

The editor state a play session keeps aside and puts back at Stop.
The editor's half of a play session: the state a game must not touch.

## Responsibilities

- Define [`EditorPlaySession`]: the resource that keeps the undo history, the
  selection and the scene's unsaved marker aside while a game runs, and puts
  them back when it stops.
- Define [`HeldEditorState`]: the three values a session keeps.

## Design

The engine copies the world's entities and its game-state resources at Play,
and the editor's own state is `PlayState::Keep`, which means the engine leaves
it alone. That is the right choice for the shell and the dock - a session must
not blank the panels - and the wrong one for three values that describe the
*document*: a step the game recorded, a selection it changed and the unsaved
marker it set all describe a world that Stop throws away.

So the editor keeps them itself. The history is *taken*, not copied: a
`CommandHistory` is the undo stack with its limits, and an empty stack in its
place means a play-time edit records somewhere harmless. The selection and the
marker are small plain values, so they are copied.

The resource is `Keep` too, and that is deliberate: it belongs to the editor,
and the values it holds outlive the session by definition.

## Module contents

### Structs
- [`EditorPlaySession`](struct.EditorPlaySession.md#rustdoc-item-8288) — The editor state a play session holds, if one is running.
- [`HeldEditorState`](struct.HeldEditorState.md#rustdoc-item-8258) — What a play session keeps aside and puts back at Stop.
