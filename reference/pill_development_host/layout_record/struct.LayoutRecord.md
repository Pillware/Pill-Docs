<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2949"></a>

# Struct `pill_development_host::layout_record::LayoutRecord`

```rust
pub(crate) struct LayoutRecord;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:157`

Every declared resource one subject claimed when it loaded.

## Fields

<a id="rustdoc-item-2947"></a>

### `version`

```rust
version: u32
```

Format version the record was written with.

<a id="rustdoc-item-2948"></a>

### `resources`

```rust
resources: Vec<ResourceLayoutRecord>
```

One entry per resource that declared a layout, sorted by resource.

## Associated functions and methods

<a id="rustdoc-item-2950"></a>

### `empty`

```rust
pub(in layout_record) fn empty() -> Self;
```

An empty record, which compares equal to nothing but reads as "no
declared resource" rather than as a failure.

<a id="rustdoc-item-2951"></a>

### `layout_of`

```rust
pub(in layout_record) fn layout_of(self: &Self, resource: &str) -> Option<&ResourceLayoutRecord>;
```

The entry recorded for one declaring type.

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
