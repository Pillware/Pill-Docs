<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1468"></a>

# Struct `pill_development_host::csharp::mirror_codegen::MirrorType`

```rust
pub(in csharp) struct MirrorType;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:62`

One type a module's signatures can name, with the C# declaration it maps
to.

## Fields

<a id="rustdoc-item-1466"></a>

### `kind`

```rust
kind: MirrorKind
```

Which C# declaration it becomes.

<a id="rustdoc-item-1467"></a>

### `csharp_name`

```rust
csharp_name: String
```

The C# name to write: `global::ns.Name`, or the simple name alone when
the value type has no namespace.

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
