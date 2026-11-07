<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1719"></a>

# Struct `pill_development_host::csharp::RebuiltAssembly`

```rust
pub(in csharp) struct RebuiltAssembly;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mod.rs:309`

A finished assembly rebuild: when it was ready and what produced it.

## Fields

<a id="rustdoc-item-1743"></a>

### `finished_at`

```rust
finished_at: pill_core::platform::Instant
```

Instant the rebuild returned.

<a id="rustdoc-item-1744"></a>

### `build_kind`

```rust
build_kind: &'static str
```

How the assembly was produced: `"roslyn"` in-process, `"msbuild"` the
full `dotnet build` fallback.

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
