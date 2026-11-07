<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1559"></a>

# Module `pill_core::style`

Source: `engine\pill_core\src\style.rs:1`

`PillStyle` string-styling vocabulary for terminal output.
String styling helpers for terminal output.

## Responsibilities

- Own the [`PillStyle`](trait.PillStyle.md#rustdoc-item-694) trait that maps semantic output roles (module
  objects, general objects, specific objects, names, and severity
  levels) to styled strings for terminal rendering.

## Design

The trait states the vocabulary. The platform layer supplies the
implementation for the target. The `&str` implementations live in
[`crate::platform::styling`](../platform/styling/index.md#rustdoc-item-1204), beside the other target splits, so this
module holds no `cfg(target_arch)` gate and owns only the trait.

There is one implementation per target. On native it colors the text
through the `colored` crate; module objects and the severity levels also
gain bold weight. On `wasm32` it returns plain text, keeping the quotation
marks around names.

The trait is re-exported at the crate root and is what [`error`]'s
terminal renderer styles through.

[`error`]: crate::error

## Module contents

### Traits
- [`PillStyle`](trait.PillStyle.md#rustdoc-item-694) — Maps semantic output roles to styled strings for terminal rendering.
