<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-429"></a>

# Struct `pill_csharp_bridge::backend::ManagedSystemSnapshot`

```rust
pub(in backend) struct ManagedSystemSnapshot;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:195`

Reflected metadata of one managed system, captured at startup.

The snapshot is compared against a re-reflection after every successful
reload, so a managed-side bug that silently changes system metadata cannot
run stale index bindings unnoticed.

## Fields

<a id="rustdoc-item-425"></a>

### `accesses`

```rust
accesses: Box<[super::abi::NativeSystemAccess]>
```

Reflected native access list resolved at startup.

<a id="rustdoc-item-427"></a>

### `uses_commands`

```rust
uses_commands: bool
```

Whether the managed system declared a Commands parameter.

<a id="rustdoc-item-428"></a>

### `name`

```rust
name: Box<str>
```

The name the system was registered under, after the synthetic fallback.

Recorded because a rename changes nothing else a reload can see: not
the accesses, not the Commands flag. The name is still the identity the
scheduler, the profiler and every log line report.

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
