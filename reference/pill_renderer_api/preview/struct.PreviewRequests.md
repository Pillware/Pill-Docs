<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1521"></a>

# Struct `pill_renderer_api::preview::PreviewRequests`

```rust
pub struct PreviewRequests;
```

Source: `rendering\pill_renderer_api\src\preview.rs:73`

The previews waiting for the renderer.

## Fields

<a id="rustdoc-item-1517"></a>

### `pending`

```rust
pending: Vec<PreviewRequest>
```

Every request asked for since the last frame.

<a id="rustdoc-item-1519"></a>

### `next_request_id`

```rust
next_request_id: u64
```

The next id [`Self::request`](#rustdoc-item-1518) hands out.

## Associated functions and methods

<a id="rustdoc-item-1518"></a>

### `request`

```rust
pub fn request(self: &mut Self, asset: PreviewAsset) -> u64;
```

Queues one preview of `asset` and returns the id its answer carries.

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
- `Default`
- `Resource`
