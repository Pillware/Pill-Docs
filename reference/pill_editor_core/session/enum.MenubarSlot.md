<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9647"></a>

# Enum `pill_editor_core::session::MenubarSlot`

```rust
pub enum MenubarSlot { ... }
```

Source: `editor\pill_editor_core\src\session.rs:423`

The slot a menu-bar rectangle is remembered under: the strip itself, or one
title by its [`crate::menubar::Menu::ALL`](../menubar/enum.Menu.md#rustdoc-item-7362) index.

## Variants

<a id="rustdoc-item-9643"></a>

### `Bar`

```rust
Bar
```

The strip behind the titles.

<a id="rustdoc-item-9645"></a>

### `Title`

```rust
Title
```

One menu title, by its index in [`crate::menubar::Menu::ALL`](../menubar/enum.Menu.md#rustdoc-item-7362).

<a id="rustdoc-item-9646"></a>

### `Toolbar`

```rust
Toolbar
```

The play controls, centred over the strip.

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
- `Comparable<K>`
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
- `PartialOrd`
- `Ord`
