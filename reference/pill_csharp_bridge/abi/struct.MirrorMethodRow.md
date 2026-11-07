<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-22"></a>

# Struct `pill_csharp_bridge::abi::MirrorMethodRow`

```rust
pub(in abi) struct MirrorMethodRow;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:95`

One row of the mirror-method table.

## Fields

<a id="rustdoc-item-18"></a>

### `type_name`

```rust
type_name: std::ffi::CString
```

Fully-qualified Rust type name, NUL-terminated.

<a id="rustdoc-item-20"></a>

### `method_name`

```rust
method_name: std::ffi::CString
```

Rust method name, NUL-terminated.

<a id="rustdoc-item-21"></a>

### `address`

```rust
address: usize
```

Address of the exported `#[no_mangle]` C-ABI trampoline.

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
