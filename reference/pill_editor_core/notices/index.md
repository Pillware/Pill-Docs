<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5733"></a>

# Module `pill_editor_core::notices`

Source: `editor\pill_editor_core\src\notices.rs:1`

What the host and the editor did, as plain data: toast events and Problems
rows.
What the host and the editor did, as plain data for the egui shell: toasts
and problems.

## Responsibilities

- Define [`EditorNotices`]: the resource the executable writes before the
  shell's pass. It holds the toast events and the Problems rows the
  executable fills it with.
- Define [`Notice`], [`NoticeLevel`] and [`ProblemRow`]: owned strings only.
- Name a level the way the toast log lines do, which the suites match
  ([`level_name`]).

## Design

`pill_development_host::HostNotice` says what the host did: a module
reloaded or failed, a patch went live or failed, a function rolled back.
The executable turns each notice into a toast line, and a failure also into
a Problems row for the module or function that failed. The shell only reads
this data. The host owns the notice queue, the executable owns this
resource, and the shell draws from it. That is why the resource lives in
this shared `dylib` rather than in the reloadable shell module: its identity
survives a shell reload, and no field may point into a module image that the
reload unmaps.

## Module contents

### Structs
- [`EditorNotices`](struct.EditorNotices.md#rustdoc-item-5696) — The notices the executable publishes for the shell when the host or the
- [`Notice`](struct.Notice.md#rustdoc-item-5614) — One toast line: something the editor or the host did, shown briefly over
- [`ProblemRow`](struct.ProblemRow.md#rustdoc-item-3532) — One Problems row: the module or function whose build, load or patch

### Enums
- [`NoticeLevel`](enum.NoticeLevel.md#rustdoc-item-2068) — How serious one toast is.

### Functions
- [`level_name`](fn.level_name.md#rustdoc-item-5732) — The wire name of a level: `error`, `warning` or `info`.
