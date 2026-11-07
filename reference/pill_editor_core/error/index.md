<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3735"></a>

# Module `pill_editor_core::error`

Source: `editor\pill_editor_core\src\error.rs:1`

Layout persistence failures.
Failures of the persisted dock layout.

## Responsibilities

- Declare [`LayoutPersistenceError`] as a `#[engine_error]` enum, one
  variant per way the dock layout can fail.

## Design

Every variant carries one `#[message(...)]` definition, and
`#[engine_error]` turns it into the message text and the diagnostic code.

A failed save leaves the previous document as it was, so
[`crate::layout::save`](../layout/persistence/fn.save.md#rustdoc-item-3733) logs the plain message and the editor keeps
running. Reading never reports here: [`crate::layout::load_or_default`](../layout/persistence/fn.load_or_default.md#rustdoc-item-3734)
falls back to the default layout for a document this build cannot use, and
logs one line.

## Module contents

### Enums
- [`LayoutPersistenceError`](enum.LayoutPersistenceError.md#rustdoc-item-3693) — The failures of the persisted dock layout.
