<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6557"></a>

# Struct `pill_engine_core::hot_reload::hot_patch::RuntimeFunction`

```rust
pub(in hot_reload::hot_patch) struct RuntimeFunction;
```

Visibility: `{'restricted': {'parent': 6553, 'path': '::hot_reload::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_reload\hot_patch.rs:653`

One entry in the x86-64 exception directory: a function's exact extent.

Windows requires every function that touches the stack to publish one of
these so the unwinder can walk it, which makes the table an authoritative
map of where each function begins and ends - no disassembler needed.

## Fields

<a id="rustdoc-item-6766"></a>

### `begin_address`

```rust
begin_address: u32
```

Offset of the function's first byte from the image base.

<a id="rustdoc-item-6767"></a>

### `end_address`

```rust
end_address: u32
```

Offset one past the function's last byte.

<a id="rustdoc-item-6768"></a>

### `_unwind_data`

```rust
_unwind_data: u32
```

Offset of the unwind data; unused here.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
