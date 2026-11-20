<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-563"></a>

# Struct `pill_editor::runner::CameraDrag`

```rust
pub(in runner) struct CameraDrag;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4206`

A camera navigation drag in flight.

## Fields

<a id="rustdoc-item-1831"></a>

### `view`

```rust
view: usize
```

The view whose camera the drag moves.

<a id="rustdoc-item-1832"></a>

### `navigation`

```rust
navigation: pill_editor_core::camera::CameraNavigation
```

The gesture the press matched.

<a id="rustdoc-item-1833"></a>

### `last_point`

```rust
last_point: (f32, f32)
```

The last pointer position, in the view's physical pixels: every move
applies its delta since this one.

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
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
