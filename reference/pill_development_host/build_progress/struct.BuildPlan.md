<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-476"></a>

# Struct `pill_development_host::build_progress::BuildPlan`

```rust
pub(in build_progress) struct BuildPlan;
```

Visibility: `{'restricted': {'parent': 477, 'path': '::build_progress'}}` · Source: `hosting\pill_development_host\src\build_progress.rs:50`

The builds a start announced and that have not started yet, plus the
counts [`announce_build`](fn.announce_build.md#rustdoc-item-518) uses for its message.

## Fields

<a id="rustdoc-item-515"></a>

### `total_build_count`

```rust
total_build_count: usize
```

_No documentation provided._

<a id="rustdoc-item-516"></a>

### `started_build_count`

```rust
started_build_count: usize
```

_No documentation provided._

<a id="rustdoc-item-517"></a>

### `pending_builds`

```rust
pending_builds: Vec<PlannedBuild>
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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
