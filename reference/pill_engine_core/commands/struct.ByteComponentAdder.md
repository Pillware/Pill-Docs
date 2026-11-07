<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2474"></a>

# Struct `pill_engine_core::commands::ByteComponentAdder`

```rust
pub struct ByteComponentAdder;
```

Source: `engine\pill_engine_core\src\commands.rs:144`

Type-erased component adder that writes raw bytes into a native column.

It is how a caller that holds only a component id and its bytes - the C#
backend, the editor's command batches, the scene loader - adds a component
without naming the concrete Rust type. The bytes must match the component's
layout in memory exactly; the caller that queues the command checks the
size, not this adder.

## Fields

<a id="rustdoc-item-2501"></a>

### `component_id`

```rust
component_id: crate::component::ComponentId
```

Native component identity the bytes belong to.

<a id="rustdoc-item-2502"></a>

### `component_bytes`

```rust
component_bytes: Vec<u8>
```

The component value as raw bytes, in its native layout.

## Associated functions and methods

<a id="rustdoc-item-2503"></a>

### `new`

```rust
pub fn new(component_id: ComponentId, bytes: Vec<u8>) -> Self;
```

Creates an adder that writes `bytes` as the value of the native
component `component_id`.

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
