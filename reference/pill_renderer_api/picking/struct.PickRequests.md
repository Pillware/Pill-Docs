<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1451"></a>

# Struct `pill_renderer_api::picking::PickRequests`

```rust
pub struct PickRequests;
```

Source: `rendering\pill_renderer_api\src\picking.rs:126`

The picks asked for and not yet handed to a renderer.

It is a world resource. A frontend or an editor tool adds requests, the
next frame carries them to the renderer, and the answers arrive in
[`PickResults`](struct.PickResults.md#rustdoc-item-201).

## Fields

<a id="rustdoc-item-1448"></a>

### `pending`

```rust
pending: Vec<PickRequest>
```

Requests waiting for the next frame.

<a id="rustdoc-item-1449"></a>

### `next_id`

```rust
next_id: u64
```

The id the next request gets.

## Associated functions and methods

<a id="rustdoc-item-1452"></a>

### `request`

```rust
pub fn request(self: &mut Self, surface: SurfaceId, x: u32, y: u32) -> u64;
```

Asks what is under pixel (`x`, `y`) of `surface`, and returns the id
the answer will carry.

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
- `Default`
- `Resource`
