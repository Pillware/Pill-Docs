<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2470"></a>

# Struct `pill_engine_core::commands::TypedComponentAdder`

```rust
pub(in commands) struct TypedComponentAdder<T: Component>;
```

Visibility: `{'restricted': {'parent': 2476, 'path': '::commands'}}` · Source: `engine\pill_engine_core\src\commands.rs:112`

Typed component adder that knows the concrete type `T`.

Wraps the concrete component value so it can be transported through the
type-erased [`DeferredCommand`](enum.DeferredCommand.md#rustdoc-item-2477) queue without losing its native type.

## Fields

<a id="rustdoc-item-2475"></a>

### `component`

```rust
component: T
```

The concrete component value to insert when the command executes.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `ComponentAdder`
