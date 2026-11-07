<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-660"></a>

# Struct `pill_core::error::render::PlainMessageRenderer`

```rust
pub struct PlainMessageRenderer<'a, W>;
```

Source: `engine\pill_core\src\error\render.rs:125`

A renderer that turns every role back into plain text.

Each value is written exactly as it is given, with no styling. A message
therefore reads the same in a log file, in a test assertion, or in a
terminal without colour. [`EngineMessage::to_plain_message`](trait.EngineMessage.md#rustdoc-item-668) is the usual
way to reach it.

## Fields

<a id="rustdoc-item-669"></a>

### `writer`

```rust
writer: &'a mut W
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-671"></a>

### `new`

```rust
pub fn new(writer: &mut W) -> PlainMessageRenderer<'_, W>;
```

Wrap a writer that receives the plain text.

#### Examples

```
use pill_core::error::{BuildError, EngineMessage, PlainMessageRenderer};

let mut message_text = String::new();
{
    let mut renderer = PlainMessageRenderer::new(&mut message_text);
    BuildError::Cancelled.render_message(&mut renderer).unwrap();
}
assert_eq!(
    message_text,
    "build cancelled: sources changed again during compilation"
);
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
