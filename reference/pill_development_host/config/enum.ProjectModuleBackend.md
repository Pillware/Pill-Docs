<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-871"></a>

# Enum `pill_development_host::config::ProjectModuleBackend`

```rust
pub enum ProjectModuleBackend { ... }
```

Source: `hosting\pill_development_host\src\config.rs:298`

Backend-specific output information for a hot-reloadable project module.

The variant determines how the host locates and loads the built output:
a native shared library or a managed assembly hosted by `csharp_runtime`.

## Variants

<a id="rustdoc-item-867"></a>

### `NativeLibrary`

```rust
NativeLibrary
```

A native shared library exporting `pill_module_init`.

<a id="rustdoc-item-870"></a>

### `CSharp`

```rust
CSharp
```

A managed project assembly loaded through the stable `csharp_runtime` host.

## Associated functions and methods

<a id="rustdoc-item-872"></a>

### `kind_name`

```rust
pub(crate) fn kind_name(self: &Self) -> &'static str;
```

The backend's kind as the startup lines spell it: `native` or `csharp`.

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
