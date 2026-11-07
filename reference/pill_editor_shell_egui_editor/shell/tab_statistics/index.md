<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-241"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_statistics`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_statistics.rs:1`

The [`tab_statistics`](#rustdoc-item-241) module: frame, pass and per-tab timings.
The Statistics tab: what one frame costs, and what each tab costs.

## Responsibilities

- Draw the frame's numbers: frame rate, frame time, the shell pass's time
  and pass count, and the counts of entities, systems, console lines and
  problems.
- Draw one row per tab drawn since the session began, with that tab's
  smoothed body time and its pass count.

## Design

The times are measured before the tab draws: `run_frame` times the whole
pass, and `TabViewer::ui` times each tab body. The frame rate comes from
the editor through the shell input, and the counts come from the frame's
snapshot. This tab only formats these numbers; it records nothing.

## Module contents

### Functions
- [`statistics_tab`](fn.statistics_tab.md#rustdoc-item-240) — The Statistics tab: the frame's timings and the editor's counts, then one
