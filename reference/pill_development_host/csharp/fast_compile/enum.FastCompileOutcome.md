<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1358"></a>

# Enum `pill_development_host::csharp::fast_compile::FastCompileOutcome`

```rust
pub(crate) enum FastCompileOutcome { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:98`

What one in-process compile attempt produced.

## Variants

<a id="rustdoc-item-1353"></a>

### `Compiled`

```rust
Compiled
```

The project assembly was recompiled and written.

<a id="rustdoc-item-1355"></a>

### `Failed`

```rust
Failed
```

The project does not compile; the diagnostics say why.

<a id="rustdoc-item-1357"></a>

### `Unavailable`

```rust
Unavailable
```

The fast path cannot answer this reload; the caller must build normally.

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
