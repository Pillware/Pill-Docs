<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3225"></a>

# Struct `pill_development_host::native_binary::ElfImage`

```rust
pub(in native_binary) struct ElfImage;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:131`

The parts of an ELF image this reader keeps.

## Fields

<a id="rustdoc-item-3222"></a>

### `libraries`

```rust
libraries: Vec<String>
```

`DT_NEEDED` names, in table order.

<a id="rustdoc-item-3223"></a>

### `required_symbols`

```rust
required_symbols: Vec<String>
```

Undefined dynamic symbols, which another image has to provide.

<a id="rustdoc-item-3224"></a>

### `exported_symbols`

```rust
exported_symbols: Vec<String>
```

Defined dynamic symbols another image can resolve against.

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
