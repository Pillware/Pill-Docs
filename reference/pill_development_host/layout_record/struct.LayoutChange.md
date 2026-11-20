<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3070"></a>

# Struct `pill_development_host::layout_record::LayoutChange`

```rust
pub(crate) struct LayoutChange;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:184`

One declared resource whose layout differs from what the record holds.

## Fields

<a id="rustdoc-item-3066"></a>

### `resource`

```rust
resource: String
```

Full path of the declaring type, for the warning.

<a id="rustdoc-item-3067"></a>

### `id`

```rust
id: pill_engine::ResourceId
```

The resource's world id, so the caller can release and drop it.

<a id="rustdoc-item-3068"></a>

### `changed_sources`

```rust
changed_sources: Vec<String>
```

Declared sources whose content differs, or that appeared or vanished.

<a id="rustdoc-item-3069"></a>

### `changed_dependencies`

```rust
changed_dependencies: Vec<String>
```

Declared crates whose resolved version differs.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
