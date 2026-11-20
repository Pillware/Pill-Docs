<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1578"></a>

# Struct `pill_development_host::csharp::mirror_codegen::DeclaredType`

```rust
pub(in csharp) struct DeclaredType;
```

Visibility: `{'restricted': {'parent': 1405, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:72`

One object type, enum or resource a module declares through a type row.

## Fields

<a id="rustdoc-item-1573"></a>

### `type_name`

```rust
type_name: String
```

The Rust qualified name that its functions are stored under.

<a id="rustdoc-item-1574"></a>

### `csharp_name`

```rust
csharp_name: String
```

The C# simple name.

<a id="rustdoc-item-1575"></a>

### `namespace`

```rust
namespace: String
```

The C# namespace.

<a id="rustdoc-item-1576"></a>

### `kind`

```rust
kind: MirrorKind
```

The kind of declaration the type row asked for.

<a id="rustdoc-item-1577"></a>

### `row`

```rust
row: pill_csharp_bridge::ResolvedMirrorMethod
```

The type row it came from: its flags, variants, representation or
shared name.

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
- `Clone`
- `Debug`
