<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1067"></a>

# Module `pill_editor::runner::frame`

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\frame.rs:1`

Runs one editor frame as a series of named phases.

## Responsibilities

- Run one editor frame in order: the frame rate sample, input, queued
  requests, published resources, the world frame, its answers and the
  presentation. Each phase is a method of its own.
- Decide when the loop draws next, from the reasons this frame recorded,
  and the wake it leaves for the event loop to wait on.

## Design

Every phase runs on the same borrow of the window, so splitting them into
methods organizes the frame but decouples nothing: each method name says
which step it performs, and `frame` is the list of steps in order. The
publish-before-run and consume-after-run rule the engine relies on is
stated once, in `frame`'s doc.
