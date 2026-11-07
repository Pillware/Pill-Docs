<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7129"></a>

# Module `pill_editor_core::scripted`

Source: `editor\pill_editor_core\src\scripted.rs:1`

The scripted test channel's grammar: one typed parse of a command line.
The scripted test channel's grammar: one typed parse of a command line.

## Responsibilities

- Parse one scripted line into a [`ScriptedCommand`], or explain why it
  cannot run.
- Keep the grammar - verbs, arguments and value forms - in one file, so
  it can be table-tested without launching an editor.

## Design

The vocabulary is the suites' API. `test_editor_egui.py` writes these
lines, so a verb name or an argument order cannot change without the suite
noticing. Both editors parse with this module and run only what their
posture can. A verb a posture cannot run is refused with the same
`[editor] scripted command rejected` line the Python side raises on. The
module names model types only, so the browser build can link it.

Arguments are whitespace-separated words. A trailing free-text value
(`edit set`, a path, a name) takes the rest of the line and keeps its
spaces. One surrounding pair of double quotes is removed, and a backslash
escapes the character after it. A path that is not the last argument
(`edit asset move <from> <to>`, `edit asset create <type> <folder> <name>`)
keeps its spaces only when it is quoted, because the cursor's `path`
reader stops a bare path at the first space.

`key <chord>` joins `ctrl`, `shift`, `alt` or `super` (`control`, `win`
and `cmd` work too) with `+`, then names a letter, a digit, `f1`..`f24` or
a named editing key from [`key_code_name`].

## Module contents

### Structs
- [`Cursor`](struct.Cursor.md#rustdoc-item-7169) — A position in one line, holding the text left after the words taken so
- [`KeyChord`](struct.KeyChord.md#rustdoc-item-6743) — One keyboard chord a `key` line injects.
- [`ParseError`](struct.ParseError.md#rustdoc-item-6855) — Why a scripted line could not be parsed.

### Enums
- [`AssetEdit`](enum.AssetEdit.md#rustdoc-item-6792) — One recorded asset-file edit an `edit asset` line queues.
- [`Dump`](enum.Dump.md#rustdoc-item-6746) — Which piece of editor state a `dump` logs.
- [`PaletteRequest`](enum.PaletteRequest.md#rustdoc-item-6705) — What a `palette` line asks of the command palette.
- [`ScriptedCommand`](enum.ScriptedCommand.md#rustdoc-item-6854) — One parsed scripted line.
- [`ToolbarAction`](enum.ToolbarAction.md#rustdoc-item-6781) — One Assets toolbar button a `toolbar` line presses.

### Functions
- [`asset_edit`](fn.asset_edit.md#rustdoc-item-7176) — `edit asset create|delete|move|meta`.
- [`camera`](fn.camera.md#rustdoc-item-7171) — `camera orbit|pan <dx> <dy>`, `camera dolly <dy>`, `camera zoom <lines>`.
- [`chord`](fn.chord.md#rustdoc-item-7179) — `key <chord>`, the modifiers joined to the key with `+`.
- [`command`](fn.command.md#rustdoc-item-7177) — `command <id>` - the recorded editor actions the suites drive.
- [`dialog`](fn.dialog.md#rustdoc-item-7173) — `dialog set name <text>` and `dialog submit`.
- [`digit_key`](fn.digit_key.md#rustdoc-item-7183) — The digit `0`..`9` as its number-row key.
- [`dump`](fn.dump.md#rustdoc-item-7172) — `dump <target>` and `dump field <entity> <component> <field>`.
- [`edit`](fn.edit.md#rustdoc-item-7175) — `edit <target>` and its sub-grammars.
- [`gizmo`](fn.gizmo.md#rustdoc-item-7170) — `gizmo drag|press|release|<tool>`.
- [`gizmo_mode`](fn.gizmo_mode.md#rustdoc-item-7223) — The tool a scripted name selects.
- [`key_code`](fn.key_code.md#rustdoc-item-7180) — One key name: a single letter or digit, `f1`..`f24`, or a named key.
- [`key_code_name`](fn.key_code_name.md#rustdoc-item-7181) — The name a key prints as, for [`KeyChord::label`].
- [`letter_key`](fn.letter_key.md#rustdoc-item-7182) — The letter a lowercase `a`..`z` names.
- [`number`](fn.number.md#rustdoc-item-7220) — The next word as a number.
- [`pick`](fn.pick.md#rustdoc-item-7174) — `pick entity <entity> <component> <field>`: arm an entity reference row, so
- [`point`](fn.point.md#rustdoc-item-7221) — The next two words as a point or a delta.
- [`scene_action`](fn.scene_action.md#rustdoc-item-7168) — `scene new|open <path>|save [<path>]`.
- [`tab`](fn.tab.md#rustdoc-item-7219) — The next word as a tab name.
- [`tab_by_name`](fn.tab_by_name.md#rustdoc-item-7222) — The tab a scripted name selects.
- [`toolbar_action`](fn.toolbar_action.md#rustdoc-item-7178) — `toolbar <action>`.
- [`unquote`](fn.unquote.md#rustdoc-item-7218) — One surrounding pair of double quotes removed, with a backslash escaping
