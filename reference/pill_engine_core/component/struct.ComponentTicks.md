<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-535"></a>

# Struct `pill_engine_core::component::ComponentTicks`

```rust
pub struct ComponentTicks;
```

Source: `engine\pill_engine_core\src\component.rs:237`

The change-detection ticks of one component row.

Each component column keeps a `Vec<ComponentTicks>` beside its row data, so
the ticks for row `i` sit at index `i`.

## Fields

<a id="rustdoc-item-2805"></a>

### `added`

```rust
added: Tick
```

Tick at which this component was added to its current entity.

<a id="rustdoc-item-2806"></a>

### `changed`

```rust
changed: Tick
```

Tick at which this component was most recently mutated through `Mut<T>`.

## Associated functions and methods

<a id="rustdoc-item-2807"></a>

### `new`

```rust
pub fn new(tick: Tick) -> Self;
```

Creates new ticks with both `added` and `changed` set to the given tick.

<a id="rustdoc-item-2808"></a>

### `is_added`

```rust
pub fn is_added(self: &Self, last_run: Tick, this_run: Tick) -> bool;
```

Returns `true` when this component was added between `last_run` and
`this_run`.

<a id="rustdoc-item-2809"></a>

### `is_changed`

```rust
pub fn is_changed(self: &Self, last_run: Tick, this_run: Tick) -> bool;
```

Returns `true` when this component changed, or was added, between
`last_run` and `this_run`.

<a id="rustdoc-item-2810"></a>

### `set_changed`

```rust
pub fn set_changed(self: &mut Self, tick: Tick);
```

Sets the `changed` tick directly, bypassing the normal `Mut<T>` path.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Copy`
- `Default`
