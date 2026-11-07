<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-244"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_demo`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_demo.rs:1`

The [`tab_demo`](#rustdoc-item-244) module: the shell module's own editor panel, the reference
a module's panel is written against.
The shell module's own editor panel: the example a module's panel is
written against, and the body the panel budget is tested with.

## Responsibilities

- [`demo_panel`](fn.demo_panel.md#rustdoc-item-246): draws the docked tab and, when the shell asks for it, the
  confirmation window. It reads only [`PanelContext`] and draws with egui,
  so it keeps nothing of this crate past the frame that drew it.
- The slow body: when `PILL_TEST_PANEL_SLOW` is set, the panel spends
  several times [`PANEL_BUDGET_MICROS`] spinning on purpose. The egui suite
  uses that to check the tab's badge and the budget toast.

## Design

This crate's `register` queues the panel through [`PanelRegistrations`]. The
executable then ties the request to a marker it owns, so the panel goes dead
when this module's image unloads. The panel keeps no state of its own: a
value that must survive a reload goes in a world resource, and never into
egui's context (see the reload-safety contract in `pill_editor_core`).

## Module contents

### Functions
- [`burn_micros`](fn.burn_micros.md#rustdoc-item-249) — Spins on the wall clock for `micros` microseconds without doing any work,
- [`demo_confirm_window`](fn.demo_confirm_window.md#rustdoc-item-247) — Returns the confirmation window the demo panel asks for: a modal window.
- [`demo_panel`](fn.demo_panel.md#rustdoc-item-246) — The demo panel: the docked tab and the confirmation window it opens.
- [`slow_requested`](fn.slow_requested.md#rustdoc-item-248) — Returns whether `PILL_TEST_PANEL_SLOW` asks for the over-budget body. Any

### Constants
- [`DEMO_CONFIRM_WINDOW`](constant.DEMO_CONFIRM_WINDOW.md#rustdoc-item-245) — The demo panel's confirmation window id.
- [`PANEL_SLOW_ENV`](constant.PANEL_SLOW_ENV.md#rustdoc-item-242) — The environment variable that switches the panel to its deliberately slow
- [`SLOW_MULTIPLE`](constant.SLOW_MULTIPLE.md#rustdoc-item-243) — The multiple of [`PANEL_BUDGET_MICROS`] the slow body spends spinning.
