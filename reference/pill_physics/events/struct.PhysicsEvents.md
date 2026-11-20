<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-643"></a>

# Struct `pill_physics::events::PhysicsEvents`

```rust
pub struct PhysicsEvents;
```

Source: `extensions\pill_physics\modules\runtime\src\events.rs:74`

One frame's collisions.

The manager empties this at the start of each frame and fills it while the
simulation steps, so a system that reads it always sees the frame that just
ran. Game code that needs an event to outlive the frame copies it out.

## Fields

<a id="rustdoc-item-639"></a>

### `started`

```rust
started: Vec<CollisionStarted>
```

Contacts that began this frame.

<a id="rustdoc-item-641"></a>

### `stopped`

```rust
stopped: Vec<CollisionStopped>
```

Contacts that ended this frame.

<a id="rustdoc-item-642"></a>

### `contact_forces`

```rust
contact_forces: Vec<ContactForce>
```

The force of every contact that reported one this frame.

## Associated functions and methods

<a id="rustdoc-item-644"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether nothing collided this frame.

<a id="rustdoc-item-645"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Drops every event, which the drain does before filling the collection
again.

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
- `MaybeSync`
- `SupersetOf<SS>`
- `Scalar`
- `Same`
- `Downcast`
- `DowncastSend`
- `DowncastSync`
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Resource`
