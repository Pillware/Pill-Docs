<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1624"></a>

# Enum `pill_development_host::csharp::mirror_codegen::MemberHost`

```rust
pub(in csharp) enum MemberHost<'a> { ... }
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:255`

The place a generated member belongs to.

## Variants

<a id="rustdoc-item-1618"></a>

### `ValueStruct`

```rust
ValueStruct
```

An instance or static member of a value-type struct.

<a id="rustdoc-item-1620"></a>

### `Object`

```rust
Object
```

An instance or static member of an object class.

<a id="rustdoc-item-1622"></a>

### `Resource`

```rust
Resource
```

An extension method on `Res<T>` / `ResMut<T>` of a resource marker.

<a id="rustdoc-item-1623"></a>

### `Module`

```rust
Module
```

A static member of a module's static class.

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
