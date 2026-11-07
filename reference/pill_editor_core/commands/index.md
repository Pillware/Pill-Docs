<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1399"></a>

# Module `pill_editor_core::commands`

Source: `editor\pill_editor_core\src\commands.rs:1`

The command registry: named actions, menus and rebindable shortcuts.
The editor's command registry: named actions, their menus and their
rebindable shortcuts.

## Responsibilities

- Model a command ([`CommandSpec`]) and the registry that owns every
  registration ([`CommandRegistry`]), grouped by the registering module.
- Resolve effective shortcuts from the active keymap preset plus the
  keybindings file's overrides, and report every chord that two commands
  answer to.
- Parse and format a chord as the `ctrl+shift+p` text the keybindings file
  uses ([`Chord`], [`KeyName`]).
- Model the keybindings and preferences files ([`KeybindingsFile`],
  [`EditorPreferences`]) and read and write the gizmo settings a project
  starts with ([`read_gizmo_settings`], [`write_gizmo_preferences`]).

## Design

The registry lives in a world resource as plain data, because the
executable, the reloadable shell and any editor crate all read or write it.
The executable resolves a chord and applies the batches the shell queued;
the shell paints the menus and queues commands; an editor crate adds its
own commands with [`CommandRegistry::register`]. A module that re-registers
its owner replaces that owner's previous set, so a reload never leaves
duplicate commands behind. Chords are this crate's own serde types rather
than the engine's input types, so the files stay stable when the engine's
key vocabulary changes. The conversions to and from
[`pill_engine::KeyCode`] live in [`KeyName`].

## Module contents

### Structs
- [`Chord`](struct.Chord.md#rustdoc-item-1297) — One shortcut: a key plus the modifiers that must be held with it.
- [`ChordParseError`](struct.ChordParseError.md#rustdoc-item-1289) — The reason a chord or key name could not be parsed.
- [`CommandInbox`](struct.CommandInbox.md#rustdoc-item-1835) — The world resource that carries a frame's executed command ids to the
- [`CommandRegistry`](struct.CommandRegistry.md#rustdoc-item-1509) — Every command every owner registered, plus the preset and the file
- [`CommandSpec`](struct.CommandSpec.md#rustdoc-item-1463) — One registered command.
- [`CommandView`](struct.CommandView.md#rustdoc-item-1524) — One registered command as the UI sees it.
- [`EditorPreferences`](struct.EditorPreferences.md#rustdoc-item-1655) — The typed view of the preferences file. It holds the keys the executable
- [`GizmoPreferences`](struct.GizmoPreferences.md#rustdoc-item-1649) — The gizmo tool's persisted state.
- [`GizmoProjectPreferences`](struct.GizmoProjectPreferences.md#rustdoc-item-1743) — One project's gizmo choices.
- [`KeybindingsFile`](struct.KeybindingsFile.md#rustdoc-item-1520) — The keybindings file: the active preset and the per-command chord
- [`PendingCommandBatch`](struct.PendingCommandBatch.md#rustdoc-item-1872) — One queued batch and what the executable does with it at the frame
- [`PendingEditorCommands`](struct.PendingEditorCommands.md#rustdoc-item-167) — The world resource holding the engine mutations queued by command
- [`SnappingSteps`](struct.SnappingSteps.md#rustdoc-item-1647) — Snapping steps the gizmo's drags use.

### Enums
- [`KeymapPreset`](enum.KeymapPreset.md#rustdoc-item-905) — The keymap presets the editor ships.
- [`KeyName`](enum.KeyName.md#rustdoc-item-1220) — The key vocabulary command bindings use.

### Functions
- [`builtin_commands`](fn.builtin_commands.md#rustdoc-item-1603) — The built-in commands every editor has (owner `editor`).
- [`default_scale_step`](fn.default_scale_step.md#rustdoc-item-1736) — The scale step a preferences file without one uses.
- [`ensure_command_resources`](fn.ensure_command_resources.md#rustdoc-item-1957) — Inserts every command resource the editor relies on, keeping the values a
- [`menu_tree`](fn.menu_tree.md#rustdoc-item-1602) — Groups the registry's commands by their top-level menu, in command order.
- [`read_gizmo_settings`](fn.read_gizmo_settings.md#rustdoc-item-1831) — Reads the gizmo settings a project starts a session with.
- [`write_gizmo_preferences`](fn.write_gizmo_preferences.md#rustdoc-item-1833) — Writes one project's gizmo choices into the preferences file.

### Constants
- [`KEYBINDINGS_FILE`](constant.KEYBINDINGS_FILE.md#rustdoc-item-1830) — The keybindings file's name, next to the layout file.
- [`LETTERS`](constant.LETTERS.md#rustdoc-item-1398) — The letter keys in alphabetical order. A single letter parses by its index
- [`PREFERENCES_FILE`](constant.PREFERENCES_FILE.md#rustdoc-item-1829) — The preferences file's name, next to the layout file.
