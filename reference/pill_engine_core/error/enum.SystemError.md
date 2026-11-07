<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4320"></a>

# Enum `pill_engine_core::error::SystemError`

```rust
pub enum SystemError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:956`

Failure reported by one scheduler system during a frame.

Systems return `Result<(), SystemError>`. The engine records every `Err`
with the failing system's name, and the reporting boundary reads the batch
through [`Engine::drain_system_failures`](../engine/struct.Engine.md#rustdoc-item-4324).
A failed system never aborts the remaining batch or the frame.

## Variants

<a id="rustdoc-item-4871"></a>

### `MissingResource`

```rust
MissingResource
```

A resource the system requested is missing from the world.

<a id="rustdoc-item-4873"></a>

### `Managed`

```rust
Managed
```

A managed-language system reported failure through the interop bridge.

<a id="rustdoc-item-4875"></a>

### `Failure`

```rust
Failure
```

A system failed with a message it chose itself.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
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
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
