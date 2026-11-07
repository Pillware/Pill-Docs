<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8218"></a>

# Struct `pill_engine_core::manager_settings::ManagerSettingsFailure`

```rust
pub struct ManagerSettingsFailure;
```

Source: `engine\pill_engine_core\src\manager_settings.rs:87`

A settings file that could not be applied.

## Fields

<a id="rustdoc-item-8214"></a>

### `manager`

```rust
manager: crate::resource::ResourceId
```

The manager resource the file belongs to.

<a id="rustdoc-item-8215"></a>

### `settings_name`

```rust
settings_name: String
```

The settings name the manager declared.

<a id="rustdoc-item-8216"></a>

### `path`

```rust
path: String
```

The asset path that was read.

<a id="rustdoc-item-8217"></a>

### `reason`

```rust
reason: String
```

Why the file was refused, or why it does not fit the manager's document.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
