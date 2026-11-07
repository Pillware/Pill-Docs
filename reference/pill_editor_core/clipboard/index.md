<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1154"></a>

# Module `pill_editor_core::clipboard`

Source: `editor\pill_editor_core\src\clipboard.rs:1`

The clipboard documents that the copy and paste commands share.
The editor clipboard's structured payloads: the JSON documents a copy
writes and a paste reads.

## Responsibilities

- One versioned document that names a component by its registered type
  name and a field by its field name, and carries each value as a token
  string ([`format_value`] / [`parse_value`]). No pointer, registry id or
  `ComponentId` is written, so a payload still means the same thing after
  a reload and in another process.
- Encoding a payload from the snapshot's detail tier, and decoding it back
  into the shapes a paste needs: `CreateEntity`'s component seeds, or
  `SetField`s (plus an `AddComponent` when the component is missing).

The clipboard also carries this text as plain text, which is how another
editor instance, or a text editor, reads it. That is why the document is
JSON and not a binary blob.

## Module contents

### Structs
- [`EditorClipboard`](struct.EditorClipboard.md#rustdoc-item-1080) — The shell's side of the clipboard: the request it queued and the text the
- [`PastePlan`](struct.PastePlan.md#rustdoc-item-1116) — The recorded step one paste produces, and what the paste could not carry.
- [`SeededComponent`](struct.SeededComponent.md#rustdoc-item-911) — One component in a payload: its type name and the fields it carried.

### Enums
- [`ClipboardAction`](enum.ClipboardAction.md#rustdoc-item-1000) — The three clipboard commands the Edit menu and the shortcuts run.
- [`ClipboardRequest`](enum.ClipboardRequest.md#rustdoc-item-1042) — What the executable should do with the OS clipboard.
- [`Payload`](enum.Payload.md#rustdoc-item-922) — One decoded payload document.

### Functions
- [`can_copy`](fn.can_copy.md#rustdoc-item-1163) — Reports whether the selection holds something a copy would write.
- [`component_document`](fn.component_document.md#rustdoc-item-1173) — Builds the JSON object for one component: its type name and its carried
- [`component_field_pairs`](fn.component_field_pairs.md#rustdoc-item-1171) — Pairs each field of one component view with its current value.
- [`cut_commands`](fn.cut_commands.md#rustdoc-item-1166) — Builds the recorded step a cut queues: the same delete the Entities tab's
- [`decode`](fn.decode.md#rustdoc-item-1170) — Decodes a payload document.
- [`decode_component`](fn.decode_component.md#rustdoc-item-1175) — Decodes one component object into its seed.
- [`encode_asset`](fn.encode_asset.md#rustdoc-item-1160) — Builds the payload document for one asset reference.
- [`encode_component`](fn.encode_component.md#rustdoc-item-1158) — Builds the payload document for one component's current values.
- [`encode_entity`](fn.encode_entity.md#rustdoc-item-1156) — Builds the payload document for one entity's detail: every editable
- [`encode_field`](fn.encode_field.md#rustdoc-item-1159) — Builds the payload document for one field value, or returns `None` when the
- [`format_value`](fn.format_value.md#rustdoc-item-917) — Returns the token that stands for a field value, or `None` for a value the
- [`parse_value`](fn.parse_value.md#rustdoc-item-1155) — Returns the value a token stands for, or `None` when this build cannot read
- [`paste_plan`](fn.paste_plan.md#rustdoc-item-1167) — Builds the recorded step a paste applies.
- [`queue_action`](fn.queue_action.md#rustdoc-item-1164) — Queues one clipboard command from the shell.
- [`queue_request`](fn.queue_request.md#rustdoc-item-1165) — Queues the request alone: the write a copy or a cut needs, or the read a
- [`seeded_component`](fn.seeded_component.md#rustdoc-item-1168) — Turns one payload component into the seed a create rebuilds.
- [`selection_payload`](fn.selection_payload.md#rustdoc-item-1161) — Builds the payload text a copy takes from the current selection.
- [`string_field`](fn.string_field.md#rustdoc-item-1176) — Reads one required string member of a document.
- [`summarize`](fn.summarize.md#rustdoc-item-1177) — Builds a one-line summary of a payload, for a log line.

### Type aliases
- [`SuffixDigitsParser`](type.SuffixDigitsParser.md#rustdoc-item-1152) — A function that reads the digits in front of a type suffix and turns them

### Constants
- [`FORMAT_NAME`](constant.FORMAT_NAME.md#rustdoc-item-908) — The name of the clipboard format the structured payload is registered
- [`VERSION`](constant.VERSION.md#rustdoc-item-909) — The version of the payload document. A reader refuses any other version.
