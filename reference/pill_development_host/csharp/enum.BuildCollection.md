<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1685"></a>

# Enum `pill_development_host::csharp::BuildCollection`

```rust
pub(crate) enum BuildCollection { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\mod.rs:401`

What one collection attempt found.

## Variants

<a id="rustdoc-item-1881"></a>

### `Pending`

```rust
Pending
```

No report was available: a build is still running, or none was started.

<a id="rustdoc-item-1683"></a>

### `Died`

```rust
Died
```

The worker stopped without a report; the caller falls back to building
on the frame thread.

<a id="rustdoc-item-1883"></a>

### `Finished`

```rust
Finished
```

The build finished; the report carries what it produced.

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
