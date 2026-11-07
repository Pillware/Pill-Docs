<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1337"></a>

# Struct `pill_csharp_bridge::manifest::ManagedFieldManifest`

```rust
pub(crate) struct ManagedFieldManifest;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:303`

Deserialized field entry within a managed component manifest.

## Fields

<a id="rustdoc-item-1408"></a>

### `name`

```rust
name: String
```

Field name as it appears in the managed schema.

<a id="rustdoc-item-1409"></a>

### `offset`

```rust
offset: usize
```

Byte offset of the field within its containing struct.

<a id="rustdoc-item-1410"></a>

### `size`

```rust
size: usize
```

Byte size of the field.

<a id="rustdoc-item-1411"></a>

### `primitive_type`

```rust
primitive_type: String
```

Managed type name of the field: a leaf type name as the manifest writes
it, `struct` for a nested value type, or `handle:` plus the asset
type's Rust path.

<a id="rustdoc-item-1412"></a>

### `default`

```rust
default: Option<String>
```

Literal a newly added or reset field starts from, instead of zero.

<a id="rustdoc-item-1413"></a>

### `decorations`

```rust
decorations: Vec<ManagedFieldDecorator>
```

Presentation decorators the field declares, in declaration order.

Defaulted so a payload that omits them parses as an undecorated field.

<a id="rustdoc-item-1415"></a>

### `fields`

```rust
fields: Vec<ManagedFieldManifest>
```

Nested field descriptions when this field is a struct.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Deserialize<'de>`
