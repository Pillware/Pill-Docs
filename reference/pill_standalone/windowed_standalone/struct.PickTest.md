<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-225"></a>

# Struct `pill_standalone::windowed_standalone::PickTest`

```rust
pub(in windowed_standalone) struct PickTest;
```

Visibility: `{'restricted': {'parent': 184, 'path': '::windowed_standalone'}}` · Source: `frontends\pill_standalone\src\windowed_standalone.rs:102`

The picking test: after a fixed number of frames, ask what is under the
center of the main window and under the pixel just inside its top-left
corner. It logs both answers and outlines the entity the center hit.

## Fields

<a id="rustdoc-item-219"></a>

### `frame_count`

```rust
frame_count: u32
```

Frames drawn since the test started.

<a id="rustdoc-item-220"></a>

### `request_ids`

```rust
request_ids: Option<(u64, u64)>
```

The center and corner request ids, once asked.

<a id="rustdoc-item-221"></a>

### `center`

```rust
center: Option<pill_player::PickHit>
```

The answer for the center request, once it arrives.

<a id="rustdoc-item-223"></a>

### `corner`

```rust
corner: Option<pill_player::PickHit>
```

The answer for the corner request, once it arrives.

<a id="rustdoc-item-224"></a>

### `finished`

```rust
finished: bool
```

Whether the test has stopped, after logging both answers or after
giving up.

## Associated functions and methods

<a id="rustdoc-item-226"></a>

### `step`

```rust
pub(in windowed_standalone) fn step(self: &mut Self, windowed_driver: &mut pill_development_host::RenderingHost, window_width_pixels: u32, window_height_pixels: u32);
```

Advance the test by one drawn frame of a `window_width_pixels` by
`window_height_pixels` window.

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
