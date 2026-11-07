<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_systems`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_systems.rs:1`

The [`tab_systems`](#rustdoc-item-204) module: the Systems tab's pause and step controls and
its recorded system toggles.
The Systems tab: the engine's pause and single-step controls, then one
row per registered system with its recorded, undoable toggle.

## Responsibilities

- Draw [`systems_tab`](fn.systems_tab.md#rustdoc-item-202): the header's Pause/Resume and Step buttons, then
  the systems' rows.

## Design

A patch of this file replays its top-level `use` lines and adds the crate's
glob, so the two imports below are the whole rule. `shell::prelude::*`
brings in the shared model's names (icons, systems, the snapshot types) and
`shell::*` the sibling modules. A body that names one of them by bare name
compiles as a patch only while both are here.

## Module contents

### Functions
- [`systems_tab`](fn.systems_tab.md#rustdoc-item-202) — Draws the Systems tab: the Pause/Resume and Step buttons and the count of
