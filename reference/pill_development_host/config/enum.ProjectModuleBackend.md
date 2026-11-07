<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-864"></a>

# Enum `pill_development_host::config::ProjectModuleBackend`

```rust
pub enum ProjectModuleBackend { ... }
```

Source: `hosting\pill_development_host\src\config.rs:268`

Backend-specific output information for a hot-reloadable project module.

The variant determines how the host locates and loads the built output:
a native shared library or a managed assembly hosted by `csharp_runtime`.

## Variants

<a id="rustdoc-item-860"></a>

### `NativeLibrary`

```rust
NativeLibrary
```

A native shared library exporting `pill_module_init`.

<a id="rustdoc-item-863"></a>

### `CSharp`

```rust
CSharp
```

A managed project assembly loaded through the stable `csharp_runtime` host.

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
- `Debug`
- `Clone`
