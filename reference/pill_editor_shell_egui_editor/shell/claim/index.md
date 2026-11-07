<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-195"></a>

# Module `pill_editor_shell_egui_editor::shell::claim`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\claim.rs:1`

The [`claim`](#rustdoc-item-195) module: the generation's claim on the shared egui context.
The shell's claim on egui's shared contexts.

## Responsibilities

- [`claim_shell_context`](fn.claim_shell_context.md#rustdoc-item-196): the per-generation wrapper `run_frame` calls
  before its pass. It applies the once-per-generation rule kept in this
  file, and gets the actual clearing from the session that owns the
  contexts.
- [`claim_context_once`](fn.claim_context_once.md#rustdoc-item-199): the same rule for a single context, with the
  flag passed in instead of read from this file's static.

## Design

The egui `Context` lives in the session, a world resource whose type the
shared model crate defines, and the frontend that keeps the world never
unloads. So the context survives a shell reload. egui's `Memory::data` map
can still hold values the previous generation created: a scroll position,
a text editor's cursor, the dock's own saved state. Such a value also
carries drop code and a vtable from the generation that created it. After
a reload those point into an image that is no longer loaded, so touching
the value is a use-after-unmap.

The first frame of every generation therefore clears every context the
session owns, main and popped-out alike
([`EguiShellState::claim_generation`](pill_editor_core::session::EguiShellState::claim_generation)).
Widget-local state that egui keeps in that map goes with it. That loss is
acceptable, because keeping such state is not worth the risk of reading a
pointer into an unloaded image. Long-lived UI state lives in the session
itself, a world resource the shared model crate defines, which is what
makes it safe across generations.

The "already claimed" flag is a `static` of this crate, and a static lives
in the module's own image. Every generation therefore starts unclaimed,
and later frames of the same generation do nothing. That is also why the
flag cannot move to the model with the clearing: the model outlives the
generation whose claim it would be.

## Module contents

### Functions
- [`claim_context_once`](fn.claim_context_once.md#rustdoc-item-199) — Applies the once-per-generation rule to one context.
- [`claim_shell_context`](fn.claim_shell_context.md#rustdoc-item-196) — Claims every egui context the session owns for this shell generation.

### Statics
- [`CONTEXT_CLAIMED`](static.CONTEXT_CLAIMED.md#rustdoc-item-193) — Whether this shell generation has cleared egui's temporary data yet.
