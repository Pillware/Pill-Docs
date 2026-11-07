<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6575"></a>

# Module `pill_editor_core::requests`

Source: `editor\pill_editor_core\src\requests.rs:1`

The requests one shell pass raises for the editor executable.
The requests one shell pass raises for the editor executable.

## Responsibilities

- [`ShellRequests`]: the one-shot requests a pass raises for the
  executable - a Problems row to open, an undo or redo, a dock tab to
  show - taken in one call at the frame boundary.
- [`HistoryRequest`]: which history walk, undo or redo, a request asks for.

## Design

The shell module and the executable are separate DLLs, so the requests
cross as plain data: a row index, a [`HistoryRequest`] and a tab, all
defined here in the shared `dylib`. The pass writes them while it draws.
`settle_pass` then moves the whole value onto
[`crate::boundary::EguiShellFrame`](../boundary/struct.EguiShellFrame.md#rustdoc-item-389), and the executable takes it from
there. The frame already carries the shell's quit request and a
dragged-out asset, so these requests travel the same way.

The caller takes the whole value in one call, and that is the contract:
[`ShellRequests::drain`] hands back every request and leaves the resource
empty, so a caller cannot answer one and silently leave another behind.

A request that must outlive the pass that raised it does not belong here.
The scripted channel's `panel window` request stays in the shell session
until the panel it names draws. A dock edit the pass cannot make while the
dock is borrowed goes into the shell module's `FrameRequests`, which
`settle_pass` applies after the pass.

## Module contents

### Structs
- [`ShellRequests`](struct.ShellRequests.md#rustdoc-item-383) — The one-shot requests one shell pass raises for the editor executable.

### Enums
- [`HistoryRequest`](enum.HistoryRequest.md#rustdoc-item-6491) — One undo or redo the menu bar asked for, applied by the executable.
