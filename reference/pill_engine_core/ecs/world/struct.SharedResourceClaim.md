<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5069"></a>

# Struct `pill_engine_core::ecs::world::SharedResourceClaim`

```rust
pub struct SharedResourceClaim;
```

Source: `engine\pill_engine_core\src\ecs\world\mod.rs:147`

The declaration that claimed a shared resource name.

The world records one of these for each shared [`ResourceId`](../resource/enum.ResourceId.md#rustdoc-item-4447), so it can
compare a second claim with the first. The same type arriving twice is the
case shared resources exist for; a different type claiming the name is a
collision.

## Fields

<a id="rustdoc-item-5062"></a>

### `shared_name`

```rust
shared_name: String
```

The shared name the claiming type declared.

<a id="rustdoc-item-5063"></a>

### `declaring_type`

```rust
declaring_type: String
```

The name of the type that recorded the declaration.

For a Rust type this is the last segment of its path; for another
language it is the full managed name.

<a id="rustdoc-item-5065"></a>

### `foreign`

```rust
foreign: bool
```

Whether the recorded declaration came from another language.

A declaration from another language has no Rust type name, so the world
compares names only between two Rust declarations - see
[`World::claim_shared_resource`](struct.World.md#rustdoc-item-5064).

<a id="rustdoc-item-5066"></a>

### `size`

```rust
size: usize
```

Size in bytes the claiming type declared.

<a id="rustdoc-item-5067"></a>

### `align`

```rust
align: usize
```

Alignment in bytes the claiming type declared.

<a id="rustdoc-item-5068"></a>

### `schema_hash`

```rust
schema_hash: Option<u64>
```

A structural hash of the claiming type's layout, when it has one.

A declaration from another language brings the hash in its manifest. A
Rust type gets whatever [`Resource::shared_schema_hash`](../resource/trait.Resource.md#rustdoc-item-4301) returns, which
defaults to `None`. The world compares the two hashes only when both
sides have one, so the check adds evidence instead of a new
requirement.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
