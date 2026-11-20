<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3170"></a>

# Struct `pill_development_host::native_binary::LibraryImport`

```rust
pub(crate) struct LibraryImport;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_binary.rs:108`

One dependency library and the symbols the image attributes to it.

## Fields

<a id="rustdoc-item-3168"></a>

### `library`

```rust
library: String
```

The file name the loader looks the dependency up by.

<a id="rustdoc-item-3169"></a>

### `symbols`

```rust
symbols: Vec<String>
```

Named imports attributed to this library. A format that resolves
symbols by search order instead of recording their owner leaves this
empty.

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
