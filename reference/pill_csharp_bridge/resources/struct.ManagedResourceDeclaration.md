<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1506"></a>

# Struct `pill_csharp_bridge::resources::ManagedResourceDeclaration`

```rust
pub(crate) struct ManagedResourceDeclaration;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:114`

One resource entry taken from the managed manifest.

A resource's manifest entry is a component entry without the parts that only
mean something for a column. It is carried as its own small struct rather
than reusing the component entry and leaving fields unread.

## Fields

<a id="rustdoc-item-1956"></a>

### `full_name`

```rust
full_name: String
```

Full managed type name, which is also the resource's engine name.

<a id="rustdoc-item-1957"></a>

### `size`

```rust
size: usize
```

Width of the declared layout in bytes.

<a id="rustdoc-item-1958"></a>

### `align`

```rust
align: usize
```

Alignment of the declared layout in bytes.

<a id="rustdoc-item-1959"></a>

### `schema_hash`

```rust
schema_hash: u64
```

Hash of the managed field schema.

<a id="rustdoc-item-1960"></a>

### `aliases`

```rust
aliases: Vec<String>
```

The names of live registrations this resource renames onto itself. A
rename migrates the stored value instead of refusing the manifest.

<a id="rustdoc-item-1961"></a>

### `fields`

```rust
fields: Vec<ResourceFieldLayout>
```

The declared field layout, which plans a reload's byte migration.

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
