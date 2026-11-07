<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-578"></a>

# Struct `pill_editor_core::cadence::FrameDemand`

```rust
pub struct FrameDemand;
```

Source: `editor\pill_editor_core\src\cadence.rs:58`

What asks for the next frame.

Each flag is set by whoever knows about it: the event handler sets `input`
and `resized`, the scripted channel sets `scripted`, and the frame itself
sets `snapshot`, `animating` and `repaint_requested`. The whole demand is
cleared at the end of the frame that honoured it.

## Fields

<a id="rustdoc-item-572"></a>

### `input`

```rust
input: bool
```

Input arrived from a window - a pointer move or button, a key or text,
the wheel - or a drag out of the editor finished.

<a id="rustdoc-item-573"></a>

### `scripted`

```rust
scripted: bool
```

A scripted command arrived from the test channel.

<a id="rustdoc-item-574"></a>

### `snapshot`

```rust
snapshot: bool
```

The snapshot this frame published differs from the last one.

<a id="rustdoc-item-575"></a>

### `resized`

```rust
resized: bool
```

The window's size or its scale factor changed.

<a id="rustdoc-item-576"></a>

### `animating`

```rust
animating: bool
```

Something is moving: the engine is not paused, or a camera navigation
or scripted drag is in flight.

<a id="rustdoc-item-577"></a>

### `repaint_requested`

```rust
repaint_requested: bool
```

egui asked for a repaint at its own pace.

## Associated functions and methods

<a id="rustdoc-item-579"></a>

### `any`

```rust
pub fn any(self: &Self) -> bool;
```

Whether any reason to draw is set.

<a id="rustdoc-item-581"></a>

### `urgent`

```rust
pub fn urgent(self: &Self) -> bool;
```

Whether input, a scripted command, a changed snapshot or a resize asked
for the frame.

The other two reasons - something moving and egui's repaint request -
are checked separately by [`Cadence::decide`](struct.Cadence.md#rustdoc-item-580).

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
