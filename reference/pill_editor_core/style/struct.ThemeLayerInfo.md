<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3521"></a>

# Struct `pill_editor_core::style::ThemeLayerInfo`

```rust
pub struct ThemeLayerInfo;
```

Source: `editor\pill_editor_core\src\style.rs:523`

One layer of a resolved theme: where it came from and, for a file, which
path.

## Fields

<a id="rustdoc-item-8323"></a>

### `layer`

```rust
layer: ThemeLayer
```

Which layer this is.

<a id="rustdoc-item-8324"></a>

### `path`

```rust
path: Option<String>
```

The file the layer loaded, when it loaded one.

## Associated functions and methods

<a id="rustdoc-item-8325"></a>

### `code`

```rust
pub fn code() -> Self;
```

The code default, which has no file.

<a id="rustdoc-item-8326"></a>

### `user`

```rust
pub fn user<impl Into<String>: Into<String>>(path: impl Into<String>) -> Self;
```

The user's file at `path`.

<a id="rustdoc-item-8327"></a>

### `project`

```rust
pub fn project<impl Into<String>: Into<String>>(path: impl Into<String>) -> Self;
```

The project's file at `path`.

<a id="rustdoc-item-8328"></a>

### `path_text`

```rust
pub fn path_text(self: &Self) -> &str;
```

The path this layer loaded, or `none` for the code default.

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
