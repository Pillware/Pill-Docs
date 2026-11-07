<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7307"></a>

# Struct `pill_engine_core::resource::ResHandle`

```rust
pub struct ResHandle<T: Resource>;
```

Source: `engine\pill_engine_core\src\resource.rs:285`

A cheap, typed handle to a resource in the [`World`](../world/struct.World.md#rustdoc-item-2583).

The handle stores only the resource's type and nothing else, so it is
zero-sized. It is `Copy`, `Clone`, `Send` and `Sync`, which means it can be
stored or passed to another phase and resolved later without borrowing the
[`World`](../world/struct.World.md#rustdoc-item-2583).

## Examples
```no_run
# use pill_engine::*;
#[derive(Debug)]
struct Score(u32);
impl Resource for Score {}

// Create a handle
let handle = ResHandle::<Score>::new();

// Insert the resource
# let mut world = World::new();
world.insert_resource(Score(0));

// Use the handle to access the resource
let score = handle.get(&world).unwrap();
assert_eq!(score.0, 0);

// Mutably access via handle
let score = handle.get_mut(&mut world).unwrap();
score.0 += 10;
```

## Fields

<a id="rustdoc-item-7306"></a>

### `_phantom`

```rust
_phantom: std::marker::PhantomData<T>
```

Type-level marker carrying no data; the handle is zero-sized at runtime.

## Associated functions and methods

<a id="rustdoc-item-7308"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates a new handle for a resource type.

<a id="rustdoc-item-7309"></a>

### `id`

```rust
pub fn id(self: &Self) -> ResourceId;
```

Returns the [`ResourceId`](enum.ResourceId.md#rustdoc-item-4505) of this handle's resource type.

<a id="rustdoc-item-7310"></a>

### `get`

```rust
pub fn get<'w>(self: &Self, world: &'w World) -> Option<&'w T>;
```

Returns a shared reference to the resource from the [`World`](../world/struct.World.md#rustdoc-item-2583).

Returns `None` if the resource has not been inserted.

<a id="rustdoc-item-7311"></a>

### `get_mut`

```rust
pub fn get_mut<'w>(self: &Self, world: &'w mut World) -> Option<&'w mut T>;
```

Returns a mutable reference to the resource from the [`World`](../world/struct.World.md#rustdoc-item-2583).

Returns `None` if the resource has not been inserted.

<a id="rustdoc-item-7312"></a>

### `exists`

```rust
pub fn exists(self: &Self, world: &World) -> bool;
```

Checks whether the resource exists in the [`World`](../world/struct.World.md#rustdoc-item-2583).

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
- `Default`
- `Clone`
- `Copy`
- `Send`
- `Sync`
- `Debug`
