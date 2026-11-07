<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7358"></a>

# Struct `pill_engine_core::settings::SettingsAssetOps`

```rust
pub struct SettingsAssetOps;
```

Source: `engine\pill_engine_core\src\settings.rs:129`

A settings-asset manager's surface as plain data, stored in its per-type
table.

The appliers belong to the artifact that registered the manager, so they
follow the same lifetime rule as the drop function beside them: valid while
that image is mapped, and replaced together with the rest of the table when
the world re-homes a resource.

## Fields

<a id="rustdoc-item-8441"></a>

### `settings_name`

```rust
settings_name: &'static str
```

The file stem, from [`SettingsAssetManager::settings_name`](trait.SettingsAssetManager.md#rustdoc-item-8435).

<a id="rustdoc-item-8442"></a>

### `file_extension`

```rust
file_extension: &'static str
```

The settings asset type's file extension.

<a id="rustdoc-item-8443"></a>

### `asset_type_name`

```rust
asset_type_name: &'static str
```

The name a created file carries in its `asset_type` field.

<a id="rustdoc-item-8444"></a>

### `render_default`

```rust
render_default: fn (_: crate::asset::AssetGuid) -> Result<Vec<u8>, String>
```

Renders a complete file holding the document defaults under `guid`.

<a id="rustdoc-item-8445"></a>

### `apply_bytes`

```rust
apply_bytes: unsafe fn (_: *mut u8, _: &std::path::Path, _: &[u8]) -> Result<SettingsOutcome, String>
```

Reads a settings file's bytes and applies them to the value at the first
argument.

#### Safety

The pointer must point at a live, correctly aligned value of the type
this table was built for. The path is used for error messages only.

## Associated functions and methods

<a id="rustdoc-item-8446"></a>

### `of`

```rust
pub fn of<T: SettingsAssetManager>() -> Self;
```

Builds the settings-asset surface of a manager type.

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
- `Clone`
- `Copy`
