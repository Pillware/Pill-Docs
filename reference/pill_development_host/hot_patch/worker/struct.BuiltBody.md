<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2276"></a>

# Struct `pill_development_host::hot_patch::worker::BuiltBody`

```rust
pub(crate) struct BuiltBody;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\worker.rs:101`

A compiled and loaded patch image.

## Fields

<a id="rustdoc-item-2305"></a>

### `library`

```rust
library: libloading::Library
```

The loaded library. It is never unloaded, because a dispatch slot will
point inside it for the rest of the process.

<a id="rustdoc-item-2306"></a>

### `artifact_bytes`

```rust
artifact_bytes: u64
```

Size on disk, for the analytics line.

<a id="rustdoc-item-2307"></a>

### `compile_ms`

```rust
compile_ms: f64
```

Milliseconds spent in `rustc`.

<a id="rustdoc-item-2308"></a>

### `load_ms`

```rust
load_ms: f64
```

Milliseconds spent loading the image.

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
