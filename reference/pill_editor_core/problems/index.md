<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6394"></a>

# Module `pill_editor_core::problems`

Source: `editor\pill_editor_core\src\problems.rs:1`

Build diagnostics: the problems the Problems panel shows.
Build diagnostics: the problem rows the editor's Problems tab shows.

## Responsibilities

- Turn a build's output text into structured problems: the severity, the
  message and the first `file:line:column` the compiler printed for it.
- Stay dependency-free and total: malformed or unfamiliar output gives
  fewer problems, never an error.

## Contract

The input is rustc's human-readable output, one diagnostic per block. Both
one-line (`error: message`) and code-carrying (`error[E0425]: message`)
headers are recognised, at any indentation.

The location is the first `-->` span line within the next
[`SPAN_LOOKAHEAD`] lines, and a blank line ends the search. A coloured
header matches nothing, so coloured output gives no problems. Lines like
`error: could not compile \`crate\`` summarise the problems above them, so
they are dropped.

## Module contents

### Structs
- [`Problem`](struct.Problem.md#rustdoc-item-5654) — One problem parsed from a build's output.

### Enums
- [`Severity`](enum.Severity.md#rustdoc-item-6398) — How serious one problem is.

### Functions
- [`parse_build_output`](fn.parse_build_output.md#rustdoc-item-6486) — Parses `output` into problems, in the order the compiler reported them.
- [`parse_header`](fn.parse_header.md#rustdoc-item-6487) — Returns the severity and the message of a rustc header line, or `None`
- [`parse_span`](fn.parse_span.md#rustdoc-item-6488) — Returns the `file`, `line` and `column` of a rustc span line

### Constants
- [`SPAN_LOOKAHEAD`](constant.SPAN_LOOKAHEAD.md#rustdoc-item-6393) — How many lines after a header the parser looks for the span line that
