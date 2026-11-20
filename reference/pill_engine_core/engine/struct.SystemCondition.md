<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5729"></a>

# Struct `pill_engine_core::engine::SystemCondition`

```rust
pub(in engine) struct SystemCondition;
```

Visibility: `{'restricted': {'parent': 5715, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:374`

One `run_if` condition of a registered system.

## Fields

<a id="rustdoc-item-5941"></a>

### `access`

```rust
access: crate::scheduler::SystemAccess
```

What the condition reads, merged into the system's own access when the
two are registered together.

<a id="rustdoc-item-5942"></a>

### `run`

```rust
run: Box<dyn FnMut(&mut crate::world::World, &mut crate::commands::CommandQueue) -> bool + Send>
```

Evaluates the condition against the world; `true` lets the system run.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
