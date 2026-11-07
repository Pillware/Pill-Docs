<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4315"></a>

# Enum `pill_engine_core::hot_patch::HotPatchError`

```rust
pub enum HotPatchError { ... }
```

Source: `engine\pill_engine_core\src\hot_patch.rs:193`

Why a hot patch was refused.

Every variant is a refusal, never a partial application: the running system
is untouched whenever one of these is returned.

## Variants

<a id="rustdoc-item-5048"></a>

### `UnknownSystem`

```rust
UnknownSystem
```

No system was registered under this name, or its slot has been cleared.

<a id="rustdoc-item-5052"></a>

### `SignatureMismatch`

```rust
SignatureMismatch
```

The replacement's signature no longer matches the running system's.

This is the gate that keeps a changed parameter list or return type from
being installed behind a call site compiled for the old one.

<a id="rustdoc-item-5054"></a>

### `NullAddress`

```rust
NullAddress
```

The replacement address was null.

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
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Display`
- `Error`
