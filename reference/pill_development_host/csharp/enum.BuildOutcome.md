<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1906"></a>

# Enum `pill_development_host::csharp::BuildOutcome`

```rust
pub(crate) enum BuildOutcome { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\mod.rs:358`

What one managed assembly build produced.

## Variants

<a id="rustdoc-item-1901"></a>

### `Compiled`

```rust
Compiled
```

The in-process compiler rebuilt the assembly.

<a id="rustdoc-item-1903"></a>

### `Failed`

```rust
Failed
```

The project does not compile; the diagnostics say why.

<a id="rustdoc-item-1905"></a>

### `Full`

```rust
Full
```

The in-process compiler could not handle the reload, or was never
loaded, so the full `dotnet build` ran instead; `Err` carries that
build's error text.

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
