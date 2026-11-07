<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2907"></a>

# Struct `pill_development_host::layout_record::ResourceLayoutRecord`

```rust
pub(crate) struct ResourceLayoutRecord;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:144`

One resource's declared layout, as one load saw it.

## Fields

<a id="rustdoc-item-2903"></a>

### `resource`

```rust
resource: String
```

Full path of the declaring Rust type.

<a id="rustdoc-item-2904"></a>

### `sources`

```rust
sources: Vec<SourceDigest>
```

The declared sources with their content hashes.

<a id="rustdoc-item-2905"></a>

### `dependencies`

```rust
dependencies: Vec<DependencyVersion>
```

The declared crates with their resolved versions.

<a id="rustdoc-item-2906"></a>

### `fingerprint`

```rust
fingerprint: u64
```

One hash over both lists, which is what a later load compares.

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
