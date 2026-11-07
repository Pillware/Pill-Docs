<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1166"></a>

# Struct `pill_csharp_bridge::csharp_runtime::HostfxrVersion`

```rust
pub(in csharp_runtime) struct HostfxrVersion;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:364`

One installed `hostfxr` candidate with its parsed version key.

## Fields

<a id="rustdoc-item-1163"></a>

### `numeric_segments`

```rust
numeric_segments: Vec<u32>
```

The numeric version parts, which are compared first when versions are
ordered.

<a id="rustdoc-item-1164"></a>

### `stable`

```rust
stable: bool
```

Whether the version carries no prerelease suffix.

<a id="rustdoc-item-1165"></a>

### `version_directory_path`

```rust
version_directory_path: std::path::PathBuf
```

Path to this version's directory under `host/fxr`.

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
