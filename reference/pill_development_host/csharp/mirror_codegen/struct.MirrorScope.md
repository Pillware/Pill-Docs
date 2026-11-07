<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1327"></a>

# Struct `pill_development_host::csharp::mirror_codegen::MirrorScope`

```rust
pub(in csharp) struct MirrorScope;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:87`

Every type a module's signatures can name.

## Fields

<a id="rustdoc-item-1533"></a>

### `types_by_name`

```rust
types_by_name: std::collections::BTreeMap<String, MirrorType>
```

Keyed by the simple Rust name a tag carries.

<a id="rustdoc-item-1534"></a>

### `declared`

```rust
declared: Vec<DeclaredType>
```

The object types, enums and resources the module declares, in a
deterministic order.

## Associated functions and methods

<a id="rustdoc-item-1535"></a>

### `new`

```rust
pub(in csharp) fn new(methods: &[ResolvedMirrorMethod], value_types: &[PillValueTypeDescriptor], value_namespace: &dyn Fn(&str) -> Option<String>) -> Result<Self, String>;
```

Builds the lookup table from a module's mirrored methods and value
types.

`value_namespace` gives the namespace to put a value type in, or
`None` to write its simple name with no namespace.

#### Errors

Returns an error when a type row names an owner kind this file does not
know, or when two declared types would get the same C# simple name.

<a id="rustdoc-item-1537"></a>

### `resolve`

```rust
pub(in csharp) fn resolve(self: &Self, type_name: &str) -> Result<&MirrorType, String>;
```

The type a tag's name refers to.

#### Errors

Returns an error that names the tag when this module does not mirror
that name.

<a id="rustdoc-item-1538"></a>

### `declared_kind`

```rust
pub(in csharp) fn declared_kind(self: &Self, type_name: &str) -> Option<&MirrorKind>;
```

The kind of a declared type, looked up by its Rust qualified name.

<a id="rustdoc-item-1539"></a>

### `typed_handle`

```rust
pub(in csharp) fn typed_handle(self: &Self, asset_type_name: &str) -> Option<String>;
```

The C# type to give a component field tagged `struct:Handle<Name>`,
when `Name` is an object this module mirrors.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
