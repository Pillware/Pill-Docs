<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6186"></a>

# Enum `pill_engine_core::error::EngineError`

```rust
pub enum EngineError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:1033`

Transparent composition of the engine errors that cross a subsystem
boundary, plus the shared host errors from `pill_core`.

Subsystem functions return their narrowest meaningful error, which is what
most callers want. This type is the one boundary where `?` can carry any of
them, for host code that prefers a single error type.

## Variants

<a id="rustdoc-item-6497"></a>

### `World`

```rust
World
```

A world storage or migration operation failed.

<a id="rustdoc-item-6499"></a>

### `Commands`

```rust
Commands
```

A deferred command could not be applied.

<a id="rustdoc-item-6501"></a>

### `Persistence`

```rust
Persistence
```

A persisted component migration failed.

<a id="rustdoc-item-6504"></a>

### `Host`

```rust
Host
```

A subsystem of the shared host crate failed.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `From<WorldError>`
- `From<CommandError>`
- `From<PersistenceError>`
- `From<HostError>`
- `EngineMessage`
