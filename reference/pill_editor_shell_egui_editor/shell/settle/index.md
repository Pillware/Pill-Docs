<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-511"></a>

# Module `pill_editor_shell_egui_editor::shell::settle`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\settle.rs:1`

The [`settle`](#rustdoc-item-511) module: the stage after a shell pass - the requests the
pass deferred and the frame it produced.
The stage that runs after a shell pass.

## Responsibilities

- [`FrameRequests`](struct.FrameRequests.md#rustdoc-item-479): the one value a pass's tabs and menus write where they
  raise a deferred request - a dock edit they cannot make while the dock
  is borrowed, a drag that left the windows, a quit.
- [`settle_pass`](fn.settle_pass.md#rustdoc-item-441): applies those requests in the order the pass requires,
  and returns the frame the pass produced.

## Design

The order of the steps is the contract, which is why this stage is one
function instead of blocks scattered through `run_frame`:

1. a tab that left the popout set loses its context first. A context that
   nothing draws into would otherwise be cleared on the first frame of
   every generation and kept for the session's life.
2. each remaining popped-out tab runs its own pass with the same viewer,
   because its window has its own widget state and input record.
3. a tab menu's pop-out runs after those passes, so a tab that asked to
   leave is drawn in the dock for the rest of this pass.
4. a re-dock runs after the pop-out, because both edit the dock tree.
5. a new scene view is docked after both, and the executable activates it
   through its own path, so the new tab is at the front of its group the
   moment it appears.
6. a panel window's answer is cleared only after a pass that read it.
7. the scripted window request is cleared only when the panel it named
   drew.
8. a panel that went over its frame budget gets its toast after every pass
   that timed a panel, because the budget is only complete then.
9. the asks the pass raised for the executable - a Problems row, undo/redo
   and a dock tab - move onto the frame in one take, beside the drag path
   and the menu's quit.

Only step 2 draws, and it draws inside a popped-out tab's own window.
Every other step edits state that the next frame reads, which is what
makes the stage safe to run at the boundary.

## Module contents

### Structs
- [`FrameRequests`](struct.FrameRequests.md#rustdoc-item-479) — The requests one shell pass could not act on, because the dock and its

### Functions
- [`settle_pass`](fn.settle_pass.md#rustdoc-item-441) — Finishes one shell pass: applies the requests it deferred and returns the
