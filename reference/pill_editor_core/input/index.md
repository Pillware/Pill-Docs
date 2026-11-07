<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4577"></a>

# Module `pill_editor_core::input`

Source: `editor\pill_editor_core\src\input.rs:1`

The bridge from the shell's own window events to egui's input.
Turns the editor's own window events into one frame of egui input.

## Responsibilities

- [`raw_input`]: builds one frame of [`RawInput`] from the events the
  frontend collected for the shell, plus the shell's geometry.
- [`map_key`], [`pointer_button`] and [`modifiers`]: the pure conversions
  it composes. Each maps one engine value (a key, a mouse button, the
  modifier state) to its egui counterpart.

## Design

The shell reads [`EguiShellInput::events`] and never the game's `Input`.
A key typed into an Inspector field belongs to the UI, and a project
system must not see it. The frontend sorts window events by window. The
editor's own windows fill this list, and the game's window fills the
engine's input. This bridge then replays the list as egui events. It
carries the pointer position and the modifier state forward as it goes,
so each event reports the state that was current at its place in the
list.

## Module contents

### Structs
- [`EventReplayState`](struct.EventReplayState.md#rustdoc-item-4580) — The state the bridge carries from one event to the next while it replays

### Functions
- [`map_key`](fn.map_key.md#rustdoc-item-4617) — Returns the egui key for an engine key, or `None` for a key egui does not name.
- [`modifiers`](fn.modifiers.md#rustdoc-item-4616) — Copies the engine's modifier state into egui's.
- [`pointer_button`](fn.pointer_button.md#rustdoc-item-4613) — Returns the egui pointer button for an engine mouse button.
- [`raw_input`](fn.raw_input.md#rustdoc-item-4611) — Builds one frame of egui input from the shell's events and geometry.
