<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-388"></a>

# Enum `pill_editor::overlay::OverlayMode`

```rust
pub enum OverlayMode { ... }
```

Source: `editor\pill_editor\src\overlay.rs:62`

Where the UI's pixels go.

## Variants

<a id="rustdoc-item-386"></a>

### `Composition`

```rust
Composition
```

The composition visual above the scene: transparent where the shell
drew nothing, so the scene shows through the UI's gaps.

<a id="rustdoc-item-387"></a>

### `Window`

```rust
Window
```

The window's own surface, with no composition: `PILL_EDITOR_NO_OVERLAY`
asked for it, or a failed overlay fell back to it. The UI is opaque,
and a scene child window sits above its parent, so it hides whatever
the UI draws under it.

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
