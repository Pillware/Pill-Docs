<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3198"></a>

# Struct `pill_development_host::native_binary::BinaryInspection`

```rust
pub(crate) struct BinaryInspection;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_binary.rs:119`

What a native image needs from, and offers to, the other images in the
process.

## Fields

<a id="rustdoc-item-3194"></a>

### `libraries`

```rust
libraries: Vec<String>
```

Every dependency library, by the name the loader looks up.

<a id="rustdoc-item-3195"></a>

### `imports`

```rust
imports: Vec<LibraryImport>
```

The dependencies whose symbols the image attributes, in table order.

<a id="rustdoc-item-3196"></a>

### `required_symbols`

```rust
required_symbols: Vec<String>
```

Every symbol the image needs from another image.

<a id="rustdoc-item-3197"></a>

### `exported_symbols`

```rust
exported_symbols: Vec<String>
```

Every symbol the image exports.

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
