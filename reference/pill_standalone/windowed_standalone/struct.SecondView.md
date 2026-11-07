<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-195"></a>

# Struct `pill_standalone::windowed_standalone::SecondView`

```rust
pub(in windowed_standalone) struct SecondView;
```

Visibility: `{'restricted': {'parent': 184, 'path': '::windowed_standalone'}}` · Source: `frontends\pill_standalone\src\windowed_standalone.rs:86`

The second renderer surface: the same scene drawn through a second camera
in a separate window.

Its camera is a `CameraBinding::View`, which is plain data the driver
holds, not an entity in the world, so the view needs nothing added to the
project.

## Fields

<a id="rustdoc-item-190"></a>

### `window`

```rust
window: std::sync::Arc<winit::window::Window>
```

The second window, kept alive while surface 1 draws on it.

<a id="rustdoc-item-193"></a>

### `close_at`

```rust
close_at: Option<pill_core::platform::Instant>
```

When to close the window, if `PILL_SECOND_VIEW_SECONDS` set one.

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
