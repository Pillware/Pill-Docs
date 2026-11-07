<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8050"></a>

# Module `pill_editor_core::state_watch`

Source: `editor\pill_editor_core\src\state_watch.rs:1`

Polling the editor's state files for changes.
Polling the editor's state files for changes.

## Responsibilities

- Notice that one of the editor's state files changed without a writer to
  hook: the editor's files are also written by hand and by other tools, so
  the file's own metadata is the signal ([`FileStamp`]).
- Read a file again only when that metadata moved or the regular re-read is
  due, and keep its text so a file that did not change costs nothing
  ([`StateFileWatch`]).

## Design

A watch re-reads its file when the file's stamp (its modification time and
length, see [`FileStamp`]) moved. It also re-reads every
[`STATE_FILE_POLL_FRAMES`] frames whatever the stamp says, which catches an
edit whose modification time is too coarse to show it. A caller whose apply
can fail calls [`StateFileWatch::poll_now`] until it has applied once, so
the watch does not need to remember whether the caller applied its last
answer.

The editor's theme watch keeps a stamp for each file it follows. It looks
the theme up again instead of caching a document's text, so
[`StateFileWatch`] is not used there.

## Module contents

### Structs
- [`FileStamp`](struct.FileStamp.md#rustdoc-item-8052) — The metadata of a state file, which the editor compares from frame to frame
- [`StateFileWatch`](struct.StateFileWatch.md#rustdoc-item-8099) — One state file the editor polls.

### Constants
- [`STATE_FILE_POLL_FRAMES`](constant.STATE_FILE_POLL_FRAMES.md#rustdoc-item-8047) — The number of frames after which a state file is re-read even when its
