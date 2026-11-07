<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1681"></a>

# Struct `pill_development_host::csharp::BuildReport`

```rust
pub(crate) struct BuildReport;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\mod.rs:392`

A finished assembly build: what it produced, and when it finished, so the
reload log can cover the build itself instead of the frame that collected
it.

## Fields

<a id="rustdoc-item-1856"></a>

### `outcome`

```rust
outcome: BuildOutcome
```

What the build produced.

<a id="rustdoc-item-1857"></a>

### `finished_at`

```rust
finished_at: pill_core::platform::Instant
```

When the build finished, on the same monotonic clock as the frame
thread.

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
