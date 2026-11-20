<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7331"></a>

# Module `pill_editor_core::layout::recovery`

Visibility: `{'restricted': {'parent': 7229, 'path': '::layout'}}` · Source: `editor\pill_editor_core\src\layout\recovery.rs:1`

The recovery document: editor state a run saves as it goes, so the next
run can bring it back after an abrupt exit.

## Responsibilities

- [`RecoveryDocument`](struct.RecoveryDocument.md#rustdoc-item-7286): the dock, the selection and the version stamp,
  saved as a YAML document beside the layout file.
- [`write`] / [`read`](fn.read.md#rustdoc-item-7329) / [`remove`](fn.remove.md#rustdoc-item-7330): the three operations the editor
  executable calls on that file.

## Design

The layout file is saved when the editor quits cleanly, and it holds the
arrangement the person kept. The recovery file is written while the editor
runs and is deleted on a clean exit, so finding it at startup means the
last run did not finish. The editor then restores that document, so the
person gets back the arrangement they had instead of the default one.

The selection is stored as text: entity display handles (`3v0`), the
selected asset's project-relative path and the selected resource's stable
name. No runtime handle or type id is written, because the document
outlives the process that wrote it. The clipboard payload follows the same
rule.

## Module contents

### Structs
- [`RecoveryDocument`](struct.RecoveryDocument.md#rustdoc-item-7286) — The editor state a run saves as it goes, so the next run can restore it

### Functions
- [`read`](fn.read.md#rustdoc-item-7329) — Reads the document a previous run left behind.
- [`recovery_path`](fn.recovery_path.md#rustdoc-item-7327) — The recovery document's path: the layout directory, beside the layout
- [`remove`](fn.remove.md#rustdoc-item-7330) — Removes the document. The run it described is ending cleanly, so there is
- [`write`](fn.write.md#rustdoc-item-7328) — Writes the document, replacing the previous one.

### Constants
- [`RECOVERY_FILE`](constant.RECOVERY_FILE.md#rustdoc-item-7280) — The recovery document's file name, in the same folder as the layout
- [`RECOVERY_VERSION`](constant.RECOVERY_VERSION.md#rustdoc-item-7279) — The recovery document's version. A document that carries any other version
