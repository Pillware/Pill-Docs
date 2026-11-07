<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1163"></a>

# Struct `pill_engine_core::query::resource::Res`

```rust
pub struct Res<'w, T: Resource>;
```

Source: `engine\pill_engine_core\src\query\resource.rs:41`

Immutable resource access for systems.

Use `Res<T>` as a system parameter to read a resource without changing it.
The scheduler counts this as a read, so several systems can read the same
resource at the same time.

## Examples
```no_run
# use pill_engine::*;
# #[derive(Debug)] struct ProjectTime { elapsed: f32 }
# impl Resource for ProjectTime {}
fn my_system(time: Res<ProjectTime>) {
    if let Some(time) = time.get() {
        println!("Elapsed: {}", time.elapsed);
    }
}
```

## Fields

<a id="rustdoc-item-7056"></a>

### `world`

```rust
world: &'w crate::world::World
```

The world the resource is fetched from.

<a id="rustdoc-item-7058"></a>

### `_resource_type`

```rust
_resource_type: std::marker::PhantomData<T>
```

Ties the wrapper to the resource type `T`; the value stays in the world.

## Associated functions and methods

<a id="rustdoc-item-7060"></a>

### `new`

```rust
pub fn new(world: &'w World) -> Self;
```

Creates a new [`Res`](#rustdoc-item-1163) wrapper around the given [`World`](../../world/struct.World.md#rustdoc-item-2583).

The system runner builds this through
[`SystemParam::fetch`](../../system/trait.SystemParam.md#rustdoc-item-7059); calling it
directly is not the intended path.

<a id="rustdoc-item-7061"></a>

### `get`

```rust
pub fn get(self: &Self) -> Option<&T>;
```

Returns an immutable reference to the resource.

Returns `None` if the resource has not been inserted into the World.

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
- `SystemParam`
