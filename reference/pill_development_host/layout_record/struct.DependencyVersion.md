<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2863"></a>

# Struct `pill_development_host::layout_record::DependencyVersion`

```rust
pub(crate) struct DependencyVersion;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:135`

One declared crate and the versions the lockfile resolved for it.

## Fields

<a id="rustdoc-item-2861"></a>

### `name`

```rust
name: String
```

The crate name as the resource declared it.

<a id="rustdoc-item-2862"></a>

### `versions`

```rust
versions: Vec<String>
```

Versions in lockfile order, or empty when the lockfile lists none.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
