<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-440"></a>

# Enum `pill_editor::overlay::OverlayMode`

```rust
pub enum OverlayMode { ... }
```

Source: `editor\pill_editor\src\overlay.rs:69`

Where the UI's pixels go.

`Composition` is only ever constructed by the Windows posture and
`Floating` only by the Unix one, so each is unconstructed on the other
platform while the runner keeps matching on both.

## Variants

<a id="rustdoc-item-437"></a>

### `Composition`

```rust
Composition
```

The composition visual above the scene: transparent where the shell
drew nothing, so the scene shows through the UI's gaps.

<a id="rustdoc-item-438"></a>

### `Floating`

```rust
Floating
```

A window of the editor's own, drawn by the desktop above the scene's
child windows and transparent where the shell drew nothing.

This is the Unix counterpart of [`Self::Composition`](#rustdoc-item-437), which needs
DirectComposition: a Unix child window is always drawn *above* its
parent, so UI drawn on the editor's own surface can never cover a
scene viewport, while a window of its own can.

<a id="rustdoc-item-439"></a>

### `Window`

```rust
Window
```

The window's own surface, with no composition: `PILL_EDITOR_NO_OVERLAY`
asked for it, or a failed overlay fell back to it. The UI is opaque,
and a scene child window sits above its parent, so it hides whatever
the UI draws under it.

## Associated functions and methods

<a id="rustdoc-item-441"></a>

### `clears_transparent`

```rust
pub fn clears_transparent(self: Self) -> bool;
```

Whether the surface lets the scene show through where the UI drew
nothing.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
