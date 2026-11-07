<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2819"></a>

# Struct `pill_development_host::layout_record::SourceDigest`

```rust
pub(crate) struct SourceDigest;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:125`

One declared source file and the hash of its contents.

## Fields

<a id="rustdoc-item-2816"></a>

### `path`

```rust
path: String
```

The path as the resource declared it.

<a id="rustdoc-item-2818"></a>

### `hash`

```rust
hash: u64
```

FNV-1a of the file's contents, or [`MISSING_SOURCE_HASH`](constant.MISSING_SOURCE_HASH.md#rustdoc-item-2817) when the file
could not be read.

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
