<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8578"></a>

# Struct `pill_editor_core::toolbox::SpaceRow`

```rust
pub struct SpaceRow;
```

Source: `editor\pill_editor_core\src\toolbox.rs:200`

One gizmo space as the viewport menu and the Preferences tab draw it: the
value it selects, the long label the menu shows, the short one the
Preferences row shows, and the icon both use.

## Fields

<a id="rustdoc-item-8574"></a>

### `space`

```rust
space: crate::gizmo::GizmoSpace
```

The space this row selects.

<a id="rustdoc-item-8575"></a>

### `menu`

```rust
menu: &'static str
```

The long label the viewport menu shows.

<a id="rustdoc-item-8576"></a>

### `short`

```rust
short: &'static str
```

The short label the Preferences tab shows.

<a id="rustdoc-item-8577"></a>

### `icon`

```rust
icon: crate::icons::Icon
```

The row's icon.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
