<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-696"></a>

# Enum `pill_csharp_bridge::commands::DecodedCommandComponent`

```rust
pub(in commands) enum DecodedCommandComponent { ... }
```

Visibility: `{'restricted': {'parent': 697, 'path': '::commands'}}` · Source: `csharp\pill_csharp_bridge\src\commands.rs:54`

One component blob, decoded into a form the command queue accepts.

The native variant holds a boxed [`ComponentAdder`] built from the blob,
which writes the bytes into a native component column. The descriptor
variant holds the engine component id plus the raw bytes, which the queue
writes into the component's storage when the command runs.

## Variants

<a id="rustdoc-item-691"></a>

### `Native`

```rust
Native
```

A native Rust component, added through the byte adder its column
accepts.

<a id="rustdoc-item-695"></a>

### `Descriptor`

```rust
Descriptor
```

Raw bytes for a component the managed side registered.

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
