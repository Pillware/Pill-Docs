<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1291"></a>

# Struct `pill_development_host::csharp::codegen::EmittedStruct`

```rust
pub(in csharp::codegen) struct EmittedStruct;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:142`

One nested C# struct to write out, keyed by the Rust path it came from.

## Fields

<a id="rustdoc-item-1289"></a>

### `qualified`

```rust
qualified: String
```

Rust path (written with `::`) the definition was generated from.

<a id="rustdoc-item-1290"></a>

### `definition`

```rust
definition: String
```

Full C# struct text, without the namespace wrapper.

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
