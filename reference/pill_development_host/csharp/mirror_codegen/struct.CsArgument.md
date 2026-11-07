<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1567"></a>

# Struct `pill_development_host::csharp::mirror_codegen::CsArgument`

```rust
pub(in csharp::mirror_codegen) struct CsArgument;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:233`

One function argument, translated to C#.

## Fields

<a id="rustdoc-item-1564"></a>

### `declaration`

```rust
declaration: String
```

The parameter declaration (`ReadOnlySpan<byte> bytes`).

<a id="rustdoc-item-1565"></a>

### `push_statements`

```rust
push_statements: String
```

The statements that push it onto the call.

<a id="rustdoc-item-1566"></a>

### `forward_expression`

```rust
forward_expression: String
```

The expression that forwards the parameter to another member
(`in value`).

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
