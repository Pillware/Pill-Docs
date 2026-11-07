<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1339"></a>

# Struct `pill_core::profiling::enabled::NonContinuousFrame`

```rust
pub struct NonContinuousFrame;
```

Source: `engine\pill_core\src\profiling.rs:508`

RAII guard for a non-continuous frame. The frame ends on drop.

## Fields

<a id="rustdoc-item-1337"></a>

### `tracy_frame`

```rust
tracy_frame: Option<tracy_client::Frame>
```

_No documentation provided._

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
