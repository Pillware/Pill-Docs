<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-120"></a>

# Struct `pill_ui_kit::style::FontSignature`

```rust
pub struct FontSignature;
```

Source: `ui\pill_ui_kit\src\style.rs:88`

The font set last installed, recorded by the caller.

[`install`](fn.install.md#rustdoc-item-119) calls `set_fonts` when the signature is new - also when it is
fresh, as it is for a new context - and skips the call when the signature
has not changed. Skipping matters because every `set_fonts` call compares
the whole font data, which is expensive.

## Fields

<a id="rustdoc-item-117"></a>

### `0`

```rust
0: Option<u64>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-121"></a>

### `of`

```rust
pub fn of(fonts: &ThemeFonts) -> Self;
```

Computes the signature of `fonts` from the bytes of all three families.

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
- `ToString`
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Display`
