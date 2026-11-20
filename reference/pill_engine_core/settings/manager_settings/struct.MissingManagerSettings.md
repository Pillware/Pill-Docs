<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5557"></a>

# Struct `pill_engine_core::settings::manager_settings::MissingManagerSettings`

```rust
pub struct MissingManagerSettings;
```

Source: `engine\pill_engine_core\src\settings\manager_settings.rs:53`

A manager whose settings file does not exist yet, with the bytes that create
it.

## Fields

<a id="rustdoc-item-9966"></a>

### `manager`

```rust
manager: crate::resource::ResourceId
```

The manager resource the file configures.

<a id="rustdoc-item-9967"></a>

### `settings_name`

```rust
settings_name: String
```

The settings name the manager declared.

<a id="rustdoc-item-9968"></a>

### `path`

```rust
path: String
```

The asset path, relative to the mounted `res` directory.

<a id="rustdoc-item-9969"></a>

### `bytes`

```rust
bytes: Vec<u8>
```

The complete file: header, guid and the document defaults.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
