<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-596"></a>

# Struct `pill_csharp_bridge::backend::PreparedManagedSystem`

```rust
pub(in backend) struct PreparedManagedSystem;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:336`

One managed system that has been resolved and checked, but not yet given to
the engine.

The type exists to separate the two halves of registration. Resolving a
system can fail, for example when an access names a component nobody
registered. Handing a resolved system to the scheduler cannot fail. Because
every system is resolved before any is registered, a reload can refuse a bad
assembly while the previous generation's systems are still installed,
instead of clearing them first and finding out that the new set cannot run.

## Fields

<a id="rustdoc-item-589"></a>

### `name`

```rust
name: String
```

Name the system registers under, after the synthetic fallback.

<a id="rustdoc-item-590"></a>

### `access`

```rust
access: pill_engine::SystemAccess
```

Scheduler access list, already resolved against the binding table.

<a id="rustdoc-item-592"></a>

### `managed_access`

```rust
managed_access: Box<[super::abi::NativeSystemAccess]>
```

Reflected managed accesses the run closure installs its scope from.

<a id="rustdoc-item-593"></a>

### `uses_commands`

```rust
uses_commands: bool
```

Whether the managed system declared a `Commands` parameter.

<a id="rustdoc-item-594"></a>

### `system_index`

```rust
system_index: u32
```

Managed discovery index this system is dispatched by.

<a id="rustdoc-item-595"></a>

### `snapshot`

```rust
snapshot: ManagedSystemSnapshot
```

Metadata a later reload compares to tell a behaviour swap from a
signature change.

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
