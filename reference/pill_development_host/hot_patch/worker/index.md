<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2334"></a>

# Module `pill_development_host::hot_patch::worker`

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\worker.rs:1`

Patch builds: compiling and loading a patch away from the frame thread.
The background half of the fast patch: it compiles a body and loads the
library that comes out of it.

## Responsibilities

- Hold everything one patch build needs, so it can move to another thread
  and come back without borrowing the frame, the engine or the session.
- Run the replayed `rustc` invocation and load the library it produces. The
  artifact is read once here first, so the platform's scan of a newly
  written file is paid on this thread instead of at the frame boundary.

## Design

Patching one body (a `rustc` run plus a `LoadLibrary`) takes hundreds of
milliseconds, so it runs off the frame thread. The frame thread prepares a
[`PatchAttempt`](struct.PatchAttempt.md#rustdoc-item-2217), a worker turns it into [`BodyOutcome`](enum.BodyOutcome.md#rustdoc-item-2281)s, and the frame
boundary installs them.

Nothing in this file touches the engine, a loaded module artifact or the
session. That is what makes the middle step safe on any thread: no dispatch
slot is written, no registry changes, and nothing that belongs to the
thread owning the boundary is used.

## Module contents

### Structs
- [`BuiltBody`](struct.BuiltBody.md#rustdoc-item-2276) — A compiled and loaded patch image.
- [`PatchAttempt`](struct.PatchAttempt.md#rustdoc-item-2217) — One pending patch attempt: what the frame thread prepared, and what a
- [`PreparedBody`](struct.PreparedBody.md#rustdoc-item-2213) — A changed body, ready to compile.

### Enums
- [`BodyOutcome`](enum.BodyOutcome.md#rustdoc-item-2281) — What the build produced for one body.

### Functions
- [`build_attempt`](fn.build_attempt.md#rustdoc-item-2332) — Compiles and loads the bodies of one attempt, in order.
- [`build_body`](fn.build_body.md#rustdoc-item-2333) — Runs the replayed compiler over one body and loads what it produces.
