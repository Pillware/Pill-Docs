<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8274"></a>

# Enum `pill_editor_core::style::ThemeLayer`

```rust
pub enum ThemeLayer { ... }
```

Source: `editor\pill_editor_core\src\style.rs:494`

Where one layer of the editor's theme came from.

The executable merges the layers in this order and the shell installs the
result. The generation number goes up whenever the merged theme changes,
so a shell that was reloaded can tell whether it still paints the theme the
executable resolved.

## Variants

<a id="rustdoc-item-8271"></a>

### `Code`

```rust
Code
```

The editor's own default, built in code.

<a id="rustdoc-item-8272"></a>

### `User`

```rust
User
```

The user's file, named by the `theme` preference.

<a id="rustdoc-item-8273"></a>

### `Project`

```rust
Project
```

The project's `res/editor/` theme, named by `editor_settings.yaml`.

## Associated functions and methods

<a id="rustdoc-item-8275"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The layer's name, as the logs and `dump theme` spell it.

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
- `ToString`
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
- `Display`
