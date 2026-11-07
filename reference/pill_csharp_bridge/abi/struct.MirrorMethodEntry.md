<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-119"></a>

# Struct `pill_csharp_bridge::abi::MirrorMethodEntry`

```rust
pub(crate) struct MirrorMethodEntry;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:116`

One mirrored Rust method the managed runtime can call.

Field order and widths are part of the native/managed ABI and must stay
synchronized with `EngineApi.cs`.

## Fields

<a id="rustdoc-item-115"></a>

### `type_name`

```rust
type_name: *const std::ffi::c_char
```

Fully-qualified Rust type name (`pill_spline::OmoMO`), NUL-terminated.

<a id="rustdoc-item-117"></a>

### `method`

```rust
method: *const std::ffi::c_char
```

Rust method name (`get_sum`), NUL-terminated.

<a id="rustdoc-item-118"></a>

### `address`

```rust
address: usize
```

Address of the exported `#[no_mangle]` C-ABI trampoline.

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
- `Copy`
