<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10008"></a>

# Struct `pill_engine_core::settings::manager_settings::ManagerSettingsApplied`

```rust
pub struct ManagerSettingsApplied;
```

Source: `engine\pill_engine_core\src\settings\manager_settings.rs:70`

One manager whose settings file reached it.

## Fields

<a id="rustdoc-item-10004"></a>

### `manager`

```rust
manager: crate::resource::ResourceId
```

The manager resource the file belongs to.

<a id="rustdoc-item-10005"></a>

### `settings_name`

```rust
settings_name: String
```

The settings name the manager declared.

<a id="rustdoc-item-10006"></a>

### `path`

```rust
path: String
```

The asset path that was read.

<a id="rustdoc-item-10007"></a>

### `outcome`

```rust
outcome: crate::settings::SettingsOutcome
```

What the manager did with the document.

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
