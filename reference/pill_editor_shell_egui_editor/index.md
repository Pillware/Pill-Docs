<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1104"></a>

# pill_editor_shell_egui_editor API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The egui editor shell: the docked UI that reloads while the editor runs.

## Responsibilities

- Registers the shell's session state and the boundary resources, and the
  per-frame system that runs the dock ([`egui_shell_update`](fn.egui_shell_update.md#rustdoc-item-1098)).
- Re-claims every resource on every load, so a reload keeps the dock
  layout, the egui context and the shared selection.

## Design

The executable owns the window, the GPU device and the input. This crate
owns the dock and the egui pass, and the two exchange plain data
([`EguiShellInput`], [`EguiShellFrame`]) in the `pill_editor_core` dylib
both link. The shell turns that input into egui's own raw input.

This file holds the crate's hot system. To patch [`egui_shell_update`](fn.egui_shell_update.md#rustdoc-item-1098),
the hot-patch machinery copies it into a crate of its own and replays this
file's top-level `use` lines there. Everything the system calls therefore
has to be `pub` in [`shell`](shell/index.md#rustdoc-item-1094) and reachable by its package path, because a
helper declared in this file does not exist in the patch crate.

An edit in `shell.rs` is patched the same way. That patch crate replays the
file's `use` lines and adds `use pill_editor_shell_egui_editor::*;` on top,
and the glob reaches this module's items, which is why the shell's public
items are re-exported below. Without the re-export, a tab body's bare-name
call to a sibling would not resolve, and the edit would fall back to a
reload.

## Module contents

### Modules
- [`shell`](shell/index.md#rustdoc-item-1094) — The shell's UI work: the dock, the tab bodies and the frame build.

### Functions
- [`__pill_hot_descriptor_egui_shell_update`](fn.__pill_hot_descriptor_egui_shell_update.md#rustdoc-item-1102) — Resolves this function's dispatch address and signature identity for
- [`egui_shell_update`](fn.egui_shell_update.md#rustdoc-item-1098) — Runs one egui pass: the dock and its tabs, then the frame the executable
- [`init`](fn.init.md#rustdoc-item-1097) — The artifact's one-time entry point: nothing is one-time here.
- [`register`](fn.register.md#rustdoc-item-1095) — Registers the shell against the host engine. Returns zero on success.

## Re-exports

- [`pub use pill_editor_shell_egui_editor::shell;`](shell/index.md#rustdoc-item-1094)
