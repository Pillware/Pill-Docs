<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1818"></a>

# Enum `pill_csharp_bridge::project_backend::Posture`

```rust
pub(in project_backend) enum Posture { ... }
```

Visibility: `{'restricted': {'parent': 1819, 'path': '::project_backend'}}` · Source: `csharp\pill_csharp_bridge\src\project_backend.rs:35`

How the managed project is hosted.

## Variants

<a id="rustdoc-item-1816"></a>

### `CoreClr`

```rust
CoreClr
```

CoreCLR started through hostfxr, which loads the runtime and project
assemblies. The .NET runtime must be installed on the machine.

<a id="rustdoc-item-1817"></a>

### `NativeAot`

```rust
NativeAot
```

A NativeAOT library with a trimmed runtime inside it. It needs no .NET
install and runs no JIT.

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
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
