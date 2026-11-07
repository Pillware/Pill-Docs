<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6451"></a>

# Struct `pill_engine_core::query::change_detection::Mut`

```rust
pub struct Mut<'a, T: ?Sized>;
```

Source: `engine\pill_engine_core\src\query\change_detection.rs:53`

Mutable, change-tracking access to one component (or resource) row.

The handle holds a borrow of the component's value, a borrow of its
[`ComponentTicks`](../../component/struct.ComponentTicks.md#rustdoc-item-535), and the tick of the current run (`this_run`). Writing
through `DerefMut` sets `ticks.changed` to that tick, so the next
[`Changed`](../filter/struct.Changed.md#rustdoc-item-6450) check sees the write. The store needs no
synchronization because the scheduler never lets two threads write the same
row.

## Examples

```no_run
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Transform { x: f32, y: f32 }
# impl Component for Transform {}
# #[derive(Debug, Clone)] struct Velocity { x: f32, y: f32 }
# impl Component for Velocity {}
fn movement(mut q: Query<(&mut Transform, &Velocity)>) {
    for (mut transform, velocity) in q.iter_mut() {
        transform.x += velocity.x; // DerefMut marks the row as changed
    }
}
```

## Fields

<a id="rustdoc-item-6447"></a>

### `value`

```rust
value: &'a mut T
```

The component value this handle gives access to.

<a id="rustdoc-item-6448"></a>

### `ticks`

```rust
ticks: &'a mut crate::component::ComponentTicks
```

The change-detection ticks of this row.

<a id="rustdoc-item-6449"></a>

### `this_run`

```rust
this_run: crate::component::Tick
```

The tick a write through this handle records as the change.

## Associated functions and methods

<a id="rustdoc-item-6452"></a>

### `new`

```rust
pub fn new(value: &'a mut T, ticks: &'a mut ComponentTicks, this_run: Tick) -> Self;
```

Builds a [`Mut`](#rustdoc-item-6451) from the component value, its row's ticks and the
run's tick.

<a id="rustdoc-item-6453"></a>

### `ticks`

```rust
pub fn ticks(self: &Self) -> &ComponentTicks;
```

Returns the change-detection ticks of this row.

<a id="rustdoc-item-6454"></a>

### `last_added`

```rust
pub fn last_added(self: &Self) -> Tick;
```

Returns the tick at which this component was added to its entity.

<a id="rustdoc-item-6455"></a>

### `last_changed`

```rust
pub fn last_changed(self: &Self) -> Tick;
```

Returns the tick at which this component was last marked as changed.

<a id="rustdoc-item-6456"></a>

### `this_run`

```rust
pub fn this_run(self: &Self) -> Tick;
```

Returns the tick that a write through this handle records as the
change.

<a id="rustdoc-item-6457"></a>

### `bypass_change_detection`

```rust
pub fn bypass_change_detection(self: &mut Self) -> &mut T;
```

Returns mutable access to the component without recording a change.

Use it for bookkeeping writes that should not count as a change: the
next [`Changed`](../filter/struct.Changed.md#rustdoc-item-6450) run would otherwise see the row.

<a id="rustdoc-item-6458"></a>

### `set_changed`

```rust
pub fn set_changed(self: &mut Self);
```

Records this row as changed at the handle's run tick, even if nothing
is written through it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Receiver`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Formattable`
- `Parsable`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Deref`
- `DerefMut`
- `Debug`
