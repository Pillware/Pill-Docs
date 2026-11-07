<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2281"></a>

# Enum `pill_development_host::hot_patch::worker::BodyOutcome`

```rust
pub(crate) enum BodyOutcome { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\worker.rs:92`

What the build produced for one body.

## Variants

<a id="rustdoc-item-2277"></a>

### `Built`

```rust
Built
```

Compiled and loaded; the frame boundary installs it.

<a id="rustdoc-item-2280"></a>

### `Failed`

```rust
Failed
```

The build failed. The running implementation is untouched, and no
later body was attempted: the build stops at the first failure.

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
