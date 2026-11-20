<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6308"></a>

# Module `pill_editor_core::hooks::watch`

Source: `editor\pill_editor_core\src\hooks\watch.rs:1`

The last reported selection and tool state, for the diff-driven events.
The last reported selection and tool state, for the diff-driven events.

## Responsibilities

- Hold the selection, active tool and element slot as they were when the
  last drain reported them ([`HookWatch`](struct.HookWatch.md#rustdoc-item-6311)).
- Compare the world against them and answer the changes
  ([`HookWatch::apply`](struct.HookWatch.md#rustdoc-item-6312)).
- Build the snapshots from the editor's own state ([`snapshot`],
  [`element_watch`], [`active_tool`]).

## Design

Selection and tool changes happen in many places - the shell's rows and
tiles, the scene picks, the scripted channel, an undo - so they cannot be
reported from one command. The drain compares the live state with this
record at the frame boundary instead: every source is caught, and a click
stays a click rather than becoming a history step. The record is a `Keep`
resource, so a play session leaves it alone.

## Module contents

### Structs
- [`ElementWatch`](struct.ElementWatch.md#rustdoc-item-6234) — The element slot as the last drain reported it.
- [`HookWatch`](struct.HookWatch.md#rustdoc-item-6311) — The selection and tool state the last drain reported.
- [`WatchChanges`](struct.WatchChanges.md#rustdoc-item-6277) — The changes one comparison found.

### Functions
- [`active_tool`](fn.active_tool.md#rustdoc-item-6349) — The active tool's name, when a registry and an active tool exist.
- [`element_watch`](fn.element_watch.md#rustdoc-item-6348) — The element slot as one comparable value.
- [`snapshot`](fn.snapshot.md#rustdoc-item-6347) — The selection's four slots as one comparable value.
