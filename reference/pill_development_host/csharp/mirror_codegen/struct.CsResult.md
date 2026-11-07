<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1594"></a>

# Struct `pill_development_host::csharp::mirror_codegen::CsResult`

```rust
pub(in csharp::mirror_codegen) struct CsResult;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:244`

One function result, translated to C#.

## Fields

<a id="rustdoc-item-1591"></a>

### `csharp_type`

```rust
csharp_type: String
```

The C# return type.

<a id="rustdoc-item-1592"></a>

### `buffer_size_expression`

```rust
buffer_size_expression: String
```

The number of bytes the return buffer must hold, written as a C#
expression. Empty means the default buffer.

<a id="rustdoc-item-1593"></a>

### `read_statement`

```rust
read_statement: String
```

The statement that returns the value after the call.

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
