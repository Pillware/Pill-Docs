<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4567"></a>

# Function `pill_editor_core::icons::glyph`

```rust
pub(in icons) fn glyph(codepoint: u32) -> char;
```

Visibility: `{'restricted': {'parent': 4424, 'path': '::icons'}}` · Source: `editor\pill_editor_core\src\icons.rs:470`

The character at `codepoint`.

## Panics

Panics if `codepoint` is not a Unicode scalar value. Every Phosphor
codepoint is one, so the calls in this file cannot panic.
