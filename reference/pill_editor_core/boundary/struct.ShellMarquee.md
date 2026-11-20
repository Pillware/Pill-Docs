<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Struct `pill_editor_core::boundary::ShellMarquee`

```rust
pub struct ShellMarquee;
```

Source: `editor\pill_editor_core\src\boundary.rs:135`

The rectangle a marquee drag covers, in one scene view.

The rectangle is in the main window's logical points, like a badge, because
that is the space the shell lays its overlay out in. The executable converts
the view's own pixels into it.

## Fields

<a id="rustdoc-item-287"></a>

### `view`

```rust
view: usize
```

The scene view the drag belongs to, as a view index.

<a id="rustdoc-item-288"></a>

### `rect`

```rust
rect: ShellRect
```

The drag's rectangle, in the main window's logical points.

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
- `StructuralPartialEq`
- `PartialEq`
