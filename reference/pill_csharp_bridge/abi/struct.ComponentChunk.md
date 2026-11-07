<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-160"></a>

# Struct `pill_csharp_bridge::abi::ComponentChunk`

```rust
pub(crate) struct ComponentChunk;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:314`

Description of one contiguous ECS column returned to managed code.

## Managed-side obligations

- `data`, `entities` and `ticks` point into engine-owned storage. They stay
  valid only while the scheduled managed invocation that received them runs,
  and must never be cached or read in a later invocation.
- Managed code may write through `data` only for components the system
  declared with write access, and must stay within `len * element_size`
  bytes.
- Entity columns carry their rows in `entities`, a const pointer, and leave
  `data` null. Nothing outside the engine may write entity rows.
- `ticks` is null only for entity columns. A component column always carries
  one tick per row, whether the system declared read or write access.

## Layout limits

`len` is `u32` by ABI design, so a column holding more than about 4.29
billion entities is unsupported and must not be relied upon to wrap.

## Fields

<a id="rustdoc-item-247"></a>

### `archetype_low`

```rust
archetype_low: u64
```

Low half of the archetype identifier the column belongs to.

<a id="rustdoc-item-248"></a>

### `archetype_high`

```rust
archetype_high: u64
```

High half of the archetype identifier the column belongs to.

<a id="rustdoc-item-249"></a>

### `data`

```rust
data: *mut std::ffi::c_void
```

Pointer to the first element of the contiguous column storage.

Null for entity columns, whose rows arrive in `entities` instead.

<a id="rustdoc-item-250"></a>

### `entities`

```rust
entities: *const std::ffi::c_void
```

Pointer to the first `Entity` of the archetype's entity column.

The pointer is const and is null for component columns. Declaring it
const makes the read-only contract part of the ABI, so managed code
cannot write through an entity column by accident.

<a id="rustdoc-item-251"></a>

### `len`

```rust
len: u32
```

Number of elements stored in the column.

<a id="rustdoc-item-252"></a>

### `element_size`

```rust
element_size: u32
```

Byte size of a single column element.

<a id="rustdoc-item-253"></a>

### `ticks`

```rust
ticks: *mut pill_engine::ComponentTicks
```

Per-element change ticks; null only for entity columns.

<a id="rustdoc-item-255"></a>

### `change_tick`

```rust
change_tick: u32
```

The world's change tick when the chunk was handed out.

<a id="rustdoc-item-256"></a>

### `scope_token`

```rust
scope_token: u32
```

Token of the managed invocation this chunk was issued to.

[`ActiveSystemGuard`](super::context::ActiveSystemGuard) records the
token that was current when the chunk was handed out. A managed debug
build compares it with the live token before reading through the chunk,
so a chunk kept past its invocation fails with a named error instead of
reading memory that has since moved.

The field fits in the struct's trailing padding on a 64-bit target, so
it changes neither the size nor the alignment.

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
