<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4303"></a>

# Module `pill_development_host::watchers`

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\mod.rs:1`

The file watchers: the project's source tree, its asset directory and a
shader source tree, each on its own worker thread.
The host's file watchers: one worker per watched tree, each reporting to
the main thread at a frame boundary.

## Responsibilities

- Hold the machinery every watcher shares: the debounced worker thread, the
  rule for which file events count as an edit, and the trigger log a reload
  is timed from.
- Watch the project's source tree for edits that start a reload.
- Watch the project's asset directory, so an edited asset is imported again
  while the host runs.
- Watch a shader source tree, so an edited `.hlsl` is cooked again while the
  host runs.

## Design

All three have the same shape: a worker thread that runs host code only, a
channel the main thread drains at the frame boundary, and no call into a
module image. A reload can therefore swap an image at any moment without
leaving a thread inside code that is going away. What they watch, and what
they queue, is the only thing that differs.

## Module contents

### Modules
- [`asset`](asset/index.md#rustdoc-item-4227) — The project's asset directory: an edit there becomes an [`AssetChange`] the
- [`shader`](shader/index.md#rustdoc-item-4305) — A shader source tree: an edit is cooked again and queued as one output per
- [`shared`](shared/index.md#rustdoc-item-4377) — The settled watcher every worker is built on, the event filter they share,
