<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Module `pill_editor::clipboard`

Visibility: `crate` · Source: `editor\pill_editor\src\clipboard.rs:1`

Reads and writes the OS clipboard for the runner's copy, cut and paste.
Writes the editor's payload to the OS clipboard and reads text back from it.

## Responsibilities

- [`write`]: put text on the clipboard twice, once in the editor's own
  clipboard format and once as plain text, so another editor instance or a
  text editor can read it.
- [`read`]: return the text the clipboard carries, preferring the editor's
  own format and falling back to plain text.

## Design

The Win32 code lives here because only this executable names the `windows`
crate. A shared dylib must never carry that crate's large `raw-dylib` import
set. The shell does not touch the OS clipboard. It queues a
`ClipboardRequest` on its `EditorClipboard` resource, and the runner carries
the request out here at the frame boundary. That way no OS clipboard handle
crosses the reload boundary.

The write path and the read path both close the clipboard on every path,
because a clipboard left open blocks every other process.

A read is bounded by the size the clipboard reports for the block
(`GlobalSize`), never by the terminator the producer was supposed to write.
Any process can set the registered format. A block with no NUL inside its own
size is therefore refused and logged, instead of being read past its end into
this process's heap.

## Module contents

### Functions
- [`payload_format_id`](fn.payload_format_id.md#rustdoc-item-5) — Returns the clipboard format id the editor registers its copied text under.
- [`process_id`](fn.process_id.md#rustdoc-item-14) — Returns the id of this process, which the clipboard log lines carry.
- [`read`](fn.read.md#rustdoc-item-12) — Returns the text the clipboard carries, preferring the editor's own format.
- [`read_open`](fn.read_open.md#rustdoc-item-13) — The read path with the clipboard already open.
- [`set_one`](fn.set_one.md#rustdoc-item-10) — Puts one UTF-16 copy of `text` on the clipboard under `format`.
- [`write`](fn.write.md#rustdoc-item-7) — Puts `text` on the clipboard, in the editor's own format and as plain text.
- [`write_open`](fn.write_open.md#rustdoc-item-11) — The write path with the clipboard already open.

### Constants
- [`CF_UNICODETEXT`](constant.CF_UNICODETEXT.md#rustdoc-item-0) — `CF_UNICODETEXT`: the plain-text clipboard format that any application can
- [`READ_ATTEMPTS`](constant.READ_ATTEMPTS.md#rustdoc-item-2) — How many attempts a read makes to open a busy clipboard before it reports
- [`READ_RETRY_DELAY`](constant.READ_RETRY_DELAY.md#rustdoc-item-3) — The pause between clipboard read attempts.
