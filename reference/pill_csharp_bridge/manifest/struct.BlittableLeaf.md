<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1257"></a>

# Struct `pill_csharp_bridge::manifest::BlittableLeaf`

```rust
pub(in manifest) struct BlittableLeaf;
```

Visibility: `{'restricted': {'parent': 1247, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:69`

What one accepted leaf type means to the host.

Four checks read this table: blittability, natural alignment, the engine
type tag and default-literal parsing. A type is accepted exactly when it has
a row here, so the checks cannot disagree about what a type means.

## Fields

<a id="rustdoc-item-1252"></a>

### `type_name`

```rust
type_name: &'static str
```

Canonical managed type name as the manifest writes it.

<a id="rustdoc-item-1253"></a>

### `alignment`

```rust
alignment: usize
```

Alignment the managed side gives the field in its own layout.

<a id="rustdoc-item-1254"></a>

### `type_tag`

```rust
type_tag: Option<&'static str>
```

Engine type tag, or `None` for a type the engine cannot decode. Such a
field keeps its bytes in storage but is left out of the registered
editor layout.

<a id="rustdoc-item-1255"></a>

### `default_literal`

```rust
default_literal: DefaultLiteral
```

How a `default:` literal for this type parses.

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
