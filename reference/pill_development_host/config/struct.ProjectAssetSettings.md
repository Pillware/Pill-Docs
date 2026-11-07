<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-996"></a>

# Struct `pill_development_host::config::ProjectAssetSettings`

```rust
pub struct ProjectAssetSettings;
```

Source: `hosting\pill_development_host\src\config.rs:507`

The `assets:` section of `project_settings.yaml`.

Every key defaults to off, so a project without the section imports nothing
at startup.

## Fields

<a id="rustdoc-item-1044"></a>

### `scan_on_start`

```rust
scan_on_start: bool
```

Import every source under `res` whose extension a registered asset
type imports, right after the project starts, and write the metadata
file of each that has none. Development host only.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Deserialize<'de>`
