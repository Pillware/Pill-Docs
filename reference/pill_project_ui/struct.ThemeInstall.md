<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-355"></a>

# Struct `pill_project_ui::ThemeInstall`

```rust
pub struct ThemeInstall;
```

Source: `ui\pill_project_ui\src\lib.rs:409`

A project's UI theme: its code default and an optional override file.

The project builds the base in its own code (a [`Theme`] value, or
[`Theme::brutalist`]) and names a `.theme` file below `res`. The file
states only the items it changes.

## Fields

<a id="rustdoc-item-352"></a>

### `base`

```rust
base: Theme
```

The project's code default.

<a id="rustdoc-item-353"></a>

### `override_path`

```rust
override_path: Option<String>
```

A `.theme` override below `res`, when the project names one.

## Associated functions and methods

<a id="rustdoc-item-356"></a>

### `new`

```rust
pub fn new(base: Theme) -> Self;
```

A theme install with no override file.

<a id="rustdoc-item-357"></a>

### `with_override`

```rust
pub fn with_override<impl Into<String>: Into<String>>(self: Self, path: impl Into<String>) -> Self;
```

Name the `.theme` file merged over the base.

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
- `Debug`
