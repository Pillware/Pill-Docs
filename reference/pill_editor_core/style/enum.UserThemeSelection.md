<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8373"></a>

# Enum `pill_editor_core::style::UserThemeSelection`

```rust
pub enum UserThemeSelection { ... }
```

Source: `editor\pill_editor_core\src\style.rs:573`

What the user's `theme` preference selected.

## Variants

<a id="rustdoc-item-8368"></a>

### `None`

```rust
None
```

The preference is absent or blank: no user layer.

<a id="rustdoc-item-8370"></a>

### `Legacy`

```rust
Legacy
```

A bare theme name such as `dark` or `light`, left over from a preference
that named a theme instead of a file. The executable warns about it and
adds no layer.

<a id="rustdoc-item-8372"></a>

### `File`

```rust
File
```

A theme file, absolute or relative to the editor's state directory.

## Associated functions and methods

<a id="rustdoc-item-8374"></a>

### `from_preference`

```rust
pub fn from_preference(preference_text: Option<&str>, state_directory: &std::path::Path) -> Self;
```

Reads the value of the `theme` preference.

A value ending in `.json` or `.theme` names a file. Anything else is a
bare theme name, which adds no layer. A relative path is joined to
`state_directory`, the folder that holds the preferences file. A
missing or blank value selects [`UserThemeSelection::None`](#rustdoc-item-8368).

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
