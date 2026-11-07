<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2004"></a>

# Enum `pill_csharp_bridge::resources::ResourceUndo`

```rust
pub(crate) enum ResourceUndo { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:331`

One applied resource entry, recorded so a later refusal can undo it.

Only a rename appears here. An addition needs no undo: the engine keeps the
registration and the table describes it. A reshape cannot be undone: it
moves bytes into a possibly narrower shape, and a reverse move would have to
invent the bytes it dropped. Neither has a variant for that reason.

## Variants

<a id="rustdoc-item-2003"></a>

### `Renamed`

```rust
Renamed
```

The entry renamed a resource from an earlier declaration.

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
