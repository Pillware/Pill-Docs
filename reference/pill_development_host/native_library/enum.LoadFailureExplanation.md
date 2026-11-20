<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3389"></a>

# Enum `pill_development_host::native_library::LoadFailureExplanation`

```rust
pub(in native_library) enum LoadFailureExplanation { ... }
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:288`

What the gathered evidence says about a failed load.

## Variants

<a id="rustdoc-item-3385"></a>

### `MissingImport`

```rust
MissingImport
```

A named import no candidate copy of its library exports; the concrete
answer, naming the library and the symbol.

<a id="rustdoc-item-3329"></a>

### `EngineDylibMismatch`

```rust
EngineDylibMismatch
```

An engine dylib the module was linked against differs from the host's
copy, and the unresolved import belongs to it (or nothing else
explains the failure).

<a id="rustdoc-item-3388"></a>

### `Unknown`

```rust
Unknown
```

Nothing read from the tables explains it; keep the loader's own words.

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
- `Equivalent<K>`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
