<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-106"></a>

# Struct `pill_development_host::analytics::PeImport`

```rust
pub(crate) struct PeImport;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:120`

One imported DLL and the function names the image needs from it.

## Fields

<a id="rustdoc-item-103"></a>

### `dll`

```rust
dll: String
```

The DLL as the import table names it (a file name, `.dll` included).

<a id="rustdoc-item-104"></a>

### `symbols`

```rust
symbols: Vec<String>
```

Named imports; ordinal-only entries are skipped - nothing to name.

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
