<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8296"></a>

# Struct `pill_engine_core::manager_settings::ManagerSettingsSurface`

```rust
pub struct ManagerSettingsSurface;
```

Source: `engine\pill_engine_core\src\manager_settings.rs:127`

What one manager's settings asset declares, copied out of its table.

The names live in the artifact that registered the manager, so a reader that
keeps the answer past a reload takes this copy while the image is mapped.

## Fields

<a id="rustdoc-item-8292"></a>

### `settings_name`

```rust
settings_name: String
```

The settings name the manager declared.

<a id="rustdoc-item-8293"></a>

### `file_extension`

```rust
file_extension: String
```

The settings asset type's file extension.

<a id="rustdoc-item-8294"></a>

### `asset_type_name`

```rust
asset_type_name: String
```

The name a created file carries in its `asset_type` field.

<a id="rustdoc-item-8295"></a>

### `path`

```rust
path: String
```

The conventional path, before any binding replaces it.

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
