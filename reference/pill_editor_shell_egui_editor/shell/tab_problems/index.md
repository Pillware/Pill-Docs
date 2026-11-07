<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-239"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_problems`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_problems.rs:1`

The [`tab_problems`](#rustdoc-item-239) module: build errors and warnings, grouped by module.
The Problems tab: one row per problem, grouped by the module or function
that reported it.

## Responsibilities

- Draw one row per problem the executable collected from a failed build, a
  failed patch or a rollback, grouped under the module or function that
  reported it.
- Turn a click on a row that names a file into an open request for the
  executable, which knows the `code_editor_command` preference and may
  spawn a process.

## Design

The rows arrive in the frame's snapshot (`EditorSnapshot.problems`). The
executable builds both the rows and the toasts that report a failed build
from the same host notices, so a row and its toast never say different
things. The tab is read-only apart from the request it leaves in the
session.

## Module contents

### Functions
- [`problems_tab`](fn.problems_tab.md#rustdoc-item-238) — Draws the Problems tab: one section per module or function, each with its
