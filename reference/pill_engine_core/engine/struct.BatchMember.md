<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5760"></a>

# Struct `pill_engine_core::engine::BatchMember`

```rust
pub(in engine) struct BatchMember<'a>;
```

Visibility: `{'restricted': {'parent': 5715, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:221`

A batch member's data, as the parallel worker closure sees it.

One record per member keeps the index, the two ticks, the name and the run
flag together, so the worker reads them from one place instead of
matching separate lists by position.

## Fields

<a id="rustdoc-item-5754"></a>

### `system_index`

```rust
system_index: usize
```

Position in the engine's registered-system vector.

<a id="rustdoc-item-5755"></a>

### `last_run_tick`

```rust
last_run_tick: u32
```

Tick at which this system last ran, from before the batch started.

<a id="rustdoc-item-5756"></a>

### `this_run_tick`

```rust
this_run_tick: u32
```

Tick reserved for this member on the dispatching thread.

<a id="rustdoc-item-5757"></a>

### `name`

```rust
name: &'a str
```

Registration name, for the Tracy span and the failure record.

<a id="rustdoc-item-5758"></a>

### `zone_color`

```rust
zone_color: u32
```

The Tracy zone color for this system, from its owner.

<a id="rustdoc-item-5759"></a>

### `runs`

```rust
runs: bool
```

Whether this member runs in the update phase of this batch.

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
