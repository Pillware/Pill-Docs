<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-458"></a>

# Enum `pill_csharp_bridge::backend::ManagedRuntimeContext`

```rust
pub(crate) enum ManagedRuntimeContext { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:216`

Owns one hosted managed runtime: CoreCLR through hostfxr, or a loaded
NativeAOT library. Keeping this value alive keeps every function pointer
resolved from that runtime valid.

A NativeAOT project is the shipping posture, where nothing reloads, so a
reloading build never constructs the `Aot` variant and it is allowed to be
unused there.

## Variants

<a id="rustdoc-item-455"></a>

### `Dotnet`

```rust
Dotnet
```

CoreCLR booted through hostfxr (framework-dependent posture).

<a id="rustdoc-item-457"></a>

### `Aot`

```rust
Aot
```

A NativeAOT library loaded directly (self-contained posture).

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
