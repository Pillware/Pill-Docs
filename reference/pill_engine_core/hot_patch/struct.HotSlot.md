<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5096"></a>

# Struct `pill_engine_core::hot_patch::HotSlot`

```rust
pub struct HotSlot;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:251`

The stable indirection through which one registered system dispatches.

The slot is created when the system is registered and shared by the
system's closure and the engine's [`HotPatchRegistry`](struct.HotPatchRegistry.md#rustdoc-item-4285). A patch installed
through the registry is therefore seen by the closure on its next call.

## Fields

<a id="rustdoc-item-5092"></a>

### `current`

```rust
current: std::sync::atomic::AtomicUsize
```

Address of the function this slot currently calls, a
`fn(&mut F, Input) -> F::Output`.

<a id="rustdoc-item-5093"></a>

### `signature_hash`

```rust
signature_hash: std::sync::atomic::AtomicU64
```

Signature identity of the system this slot was created for.

<a id="rustdoc-item-5095"></a>

### `original`

```rust
original: std::sync::atomic::AtomicUsize
```

The implementation recorded at registration, kept so a rollback can
return to the code the registering artifact was built with.

This is a separate field because `current` is overwritten by every
install; without it, the first patch would make the original address
unreachable.

## Associated functions and methods

<a id="rustdoc-item-5098"></a>

### `new`

```rust
pub fn new() -> Self;
```

An empty slot, filled by [`Self::initialize`](#rustdoc-item-5097) during registration.

<a id="rustdoc-item-5097"></a>

### `initialize`

```rust
pub fn initialize(self: &Self, address: usize, signature_hash: u64);
```

Records the baseline implementation and the signature to compare
against.

Called once, from the boxing code in [`crate::system`], where the
concrete `F` and `Input` are known.

<a id="rustdoc-item-5099"></a>

### `original`

```rust
pub fn original(self: &Self) -> usize;
```

The implementation recorded at registration.

This is what a rollback to generation zero installs. The address belongs
to the artifact that registered the system, and a reload builds a fresh
slot for its replacement rather than carrying this address over.

<a id="rustdoc-item-5101"></a>

### `current`

```rust
pub fn current(self: &Self) -> usize;
```

The implementation to call now.

`Acquire` pairs with the `Release` in [`Self::install`](#rustdoc-item-5100), so whichever
thread runs the system next sees the code of a freshly loaded patch
library. On x86-64 a relaxed load would be enough, but the ordering
keeps the guarantee on any target the engine grows to, instead of tying
it to this one.

<a id="rustdoc-item-5102"></a>

### `signature_hash`

```rust
pub fn signature_hash(self: &Self) -> u64;
```

Signature identity this slot was registered with.

<a id="rustdoc-item-5100"></a>

### `install`

```rust
pub fn install(self: &Self, name: &str, address: usize, signature_hash: u64) -> Result<(), HotPatchError>;
```

Replaces the implementation, refusing a replacement whose signature
differs.

#### Errors

Returns [`HotPatchError::NullAddress`](enum.HotPatchError.md#rustdoc-item-5054) for a null replacement and
[`HotPatchError::SignatureMismatch`](enum.HotPatchError.md#rustdoc-item-5052) when `signature_hash` differs from
the one recorded at registration. On either, the running implementation
is left in place.

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
- `Debug`
- `Default`
