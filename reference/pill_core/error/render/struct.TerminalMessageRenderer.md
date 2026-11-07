<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-666"></a>

# Struct `pill_core::error::render::TerminalMessageRenderer`

```rust
pub struct TerminalMessageRenderer<'a, W>;
```

Source: `engine\pill_core\src\error\render.rs:175`

A renderer that styles each value according to its semantic role.

The colours come from the crate's [`PillStyle`](../../style/trait.PillStyle.md#rustdoc-item-694)
vocabulary, one method per role, so an error definition never names a
colour or an ANSI code.

## Fields

<a id="rustdoc-item-693"></a>

### `writer`

```rust
writer: &'a mut W
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-695"></a>

### `new`

```rust
pub fn new(writer: &mut W) -> TerminalMessageRenderer<'_, W>;
```

Wrap a writer that receives the styled text.

#### Examples

```
use pill_core::error::{BuildError, EngineMessage, TerminalMessageRenderer};

let mut message_text = String::new();
{
    let mut renderer = TerminalMessageRenderer::new(&mut message_text);
    BuildError::Cancelled.render_message(&mut renderer).unwrap();
}
assert!(message_text.contains("build cancelled"));
```

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `MessageRenderer`
