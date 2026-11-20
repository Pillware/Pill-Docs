<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5083"></a>

# Struct `pill_editor_core::viewport::EditorViewportState`

```rust
pub struct EditorViewportState;
```

Source: `editor\pill_editor_core\src\viewport.rs:31`

The editor's viewports, as one callback-readable value.

## Fields

<a id="rustdoc-item-11601"></a>

### `active_view`

```rust
active_view: Option<usize>
```

The active scene view's index, when a viewport is active.

<a id="rustdoc-item-11602"></a>

### `pointer_in_view`

```rust
pointer_in_view: Option<(f32, f32)>
```

The pointer inside the active view, in logical points relative to that
view's rectangle.

<a id="rustdoc-item-11603"></a>

### `view_rect`

```rust
view_rect: Option<crate::boundary::ShellRect>
```

The active view's rectangle, in logical points relative to the editor's
client area.

<a id="rustdoc-item-11604"></a>

### `view_count`

```rust
view_count: usize
```

How many scene views exist.

## Associated functions and methods

<a id="rustdoc-item-11605"></a>

### `ensure`

```rust
pub fn ensure(world: &mut World);
```

Registers the resource, inserting the empty posture only when the world
has none.

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
- `Resource`
