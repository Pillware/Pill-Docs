<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1204"></a>

# Module `pill_core::platform::styling`

Source: `engine\pill_core\src\platform\styling.rs:1`

Terminal styling: colored and bold on native, plain on the web.
Terminal styling for `&str` on the native and web targets.

## Responsibilities

- Implement [`PillStyle`](../../style/trait.PillStyle.md#rustdoc-item-694) for `&str`, colored and
  bold through the `colored` crate on native targets.
- Provide the same methods on `wasm32` as plain text, with a name still put
  in quotation marks.

## Design

Only one of the two implementations is compiled, so they sit here beside
the other modules that differ per target, not next to the trait. This layer
holds the crate's only `cfg(target_arch)` gates, so a reader looking for
per-target behaviour finds all of it here.
