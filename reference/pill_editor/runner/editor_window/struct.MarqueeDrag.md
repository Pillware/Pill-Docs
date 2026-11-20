<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-603"></a>

# Struct `pill_editor::runner::editor_window::MarqueeDrag`

```rust
pub(in runner) struct MarqueeDrag;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:441`

A marquee drag in flight: where the press in empty space landed, where the
pointer is now, and whether it has travelled far enough to be a drag.

A candidate that never becomes live is a click on empty space, so the
release still asks the scene what is under the pixel.

## Fields

<a id="rustdoc-item-1194"></a>

### `view`

```rust
view: usize
```

The scene view the drag belongs to.

<a id="rustdoc-item-1195"></a>

### `from`

```rust
from: (f32, f32)
```

The press position, in that view's own pixels.

<a id="rustdoc-item-1196"></a>

### `to`

```rust
to: (f32, f32)
```

The pointer's latest position, in the same pixels.

<a id="rustdoc-item-1197"></a>

### `live`

```rust
live: bool
```

Whether the pointer has passed the drag threshold.

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
