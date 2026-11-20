<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1569"></a>

# Struct `pill_editor_core::commands::CommandView`

```rust
pub struct CommandView;
```

Source: `editor\pill_editor_core\src\commands.rs:640`

One registered command as the UI sees it.

It is a copy, not a borrow. The frame's snapshot keeps these rows after the
world borrow ends, and a row's label and presence must come from the
registry that produced it.

## Fields

<a id="rustdoc-item-1607"></a>

### `id`

```rust
id: String
```

Stable identifier (`editor.pause_toggle`).

<a id="rustdoc-item-1608"></a>

### `title`

```rust
title: String
```

The title a menu row shows.

<a id="rustdoc-item-1609"></a>

### `menu_path`

```rust
menu_path: Vec<String>
```

The menu path; an empty path means no menu row.

<a id="rustdoc-item-1610"></a>

### `separator_before`

```rust
separator_before: bool
```

Whether a rule is drawn above the row.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
