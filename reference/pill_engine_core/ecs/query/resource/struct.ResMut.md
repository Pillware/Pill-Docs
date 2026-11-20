<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4124"></a>

# Struct `pill_engine_core::ecs::query::resource::ResMut`

```rust
pub struct ResMut<'w, T: Resource>;
```

Source: `engine\pill_engine_core\src\ecs\query\resource.rs:94`

Mutable resource access for systems, with change tracking.

Use `ResMut<T>` as a system parameter to read and write a resource. The
scheduler counts this as a write, so no other system that touches the same
resource runs at the same time.

`get_mut()` returns a [`Mut<'_, T>`](../change_detection/struct.Mut.md#rustdoc-item-3480). A write through it sets the
resource's `changed` tick to the current world tick, which is how other
systems see that the value changed.

## Examples
```no_run
# use pill_engine::*;
# #[derive(Debug)] struct ProjectTime { elapsed: f32, delta: f32 }
# impl Resource for ProjectTime {}
fn my_system(mut time: ResMut<ProjectTime>) {
    if let Some(mut time) = time.get_mut() {
        time.elapsed += time.delta; // this write marks the resource as changed
    }
}
```

## Fields

<a id="rustdoc-item-4122"></a>

### `world`

```rust
world: &'w mut crate::world::World
```

The world the resource is fetched from.

<a id="rustdoc-item-4123"></a>

### `_resource_type`

```rust
_resource_type: std::marker::PhantomData<T>
```

Ties the wrapper to the resource type `T`; the value stays in the world.

## Associated functions and methods

<a id="rustdoc-item-4125"></a>

### `new`

```rust
pub fn new(world: &'w mut World) -> Self;
```

Creates a new [`ResMut`](#rustdoc-item-4124) wrapper around the given [`World`](../../world/struct.World.md#rustdoc-item-2848).

The system runner builds this through
[`SystemParam::fetch`](../../../systems/system/trait.SystemParam.md#rustdoc-item-4091); calling it
directly is not the intended path.

#### Panics

Panics in debug builds if another `ResMut` for the same resource is
still alive, because one resource may only be borrowed mutably once.

<a id="rustdoc-item-4126"></a>

### `get`

```rust
pub fn get(self: &Self) -> Option<&T>;
```

Returns an immutable reference to the resource.

Returns `None` if the resource has not been inserted into the World.

<a id="rustdoc-item-4127"></a>

### `get_mut`

```rust
pub fn get_mut(self: &mut Self) -> Option<Mut<'_, T>>;
```

Returns mutable, change-tracking access to the resource.

The returned [`Mut<'_, T>`](../change_detection/struct.Mut.md#rustdoc-item-3480) holds both the value and its
change-detection ticks. Writing through it (`DerefMut`) sets
`ticks.changed` to the current world tick.

Returns `None` if the resource has not been inserted into the World.

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
- `Drop`
- `SystemParam`
