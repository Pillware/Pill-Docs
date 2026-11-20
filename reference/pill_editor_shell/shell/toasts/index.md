<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-208"></a>

# Module `pill_editor_shell::shell::toasts`

Source: `editor\pill_editor_shell\src\shell\toasts.rs:1`

The [`toasts`](#rustdoc-item-208) module: the host's notices drawn as a short-lived stack.
The toast stack: what the host or the editor did, drawn over the editor
for a few seconds.

## Responsibilities

- [`push_notices`](fn.push_notices.md#rustdoc-item-213): queue each notice the stack has not shown yet as a
  toast, keeping the newest [`TOASTS_MAX`] of them.
- [`draw_toasts`](fn.draw_toasts.md#rustdoc-item-214): drop expired toasts, then draw the rest in the window's
  top-left corner and log each one once. It also publishes every row's
  rectangle, so a click on a toast is never a scene pick.

## Design

Each frame, the executable folds the host's
`pill_development_host::HostNotice`s into the [`EditorNotices`] resource.
This module reads that resource and draws the events as toasts. A toast
is identified by its notice sequence number, so a frame that draws the
same events again queues no line twice and logs no line twice.
[`ToastSession`] lives in the session, which survives a shell reload, so a
reload keeps the stack on screen.

## Module contents

### Functions
- [`draw_toasts`](fn.draw_toasts.md#rustdoc-item-214) — Draws the live toasts and publishes their rectangles.
- [`level_colour`](fn.level_colour.md#rustdoc-item-216) — Returns the colour that stands for one notice level.
- [`push_notices`](fn.push_notices.md#rustdoc-item-213) — Queues every notice the stack has not shown yet as a toast.

### Constants
- [`TOAST_GAP`](constant.TOAST_GAP.md#rustdoc-item-212) — The gap between two rows, in logical points.
- [`TOAST_HEIGHT`](constant.TOAST_HEIGHT.md#rustdoc-item-211) — One row's height, in logical points.
- [`TOAST_LEFT`](constant.TOAST_LEFT.md#rustdoc-item-209) — The stack's inset from the window's left edge.
- [`TOAST_TOP`](constant.TOAST_TOP.md#rustdoc-item-207) — Where the stack's first row sits, just below the menu bar.
- [`TOAST_WIDTH`](constant.TOAST_WIDTH.md#rustdoc-item-210) — One row's width, in logical points.
