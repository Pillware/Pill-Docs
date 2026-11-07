<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-380"></a>

# Enum `pill_core::error::host::ModuleError`

```rust
pub enum ModuleError { ... }
```

Source: `engine\pill_core\src\error\host.rs:478`

Extension loading and compatibility failures.

Distinct from [`LibraryError`](enum.LibraryError.md#rustdoc-item-333), which covers the mechanics of mapping a
library. These report a broken contract between the host and a module.

## Variants

<a id="rustdoc-item-370"></a>

### `AbiVersionMismatch`

```rust
AbiVersionMismatch
```

The module was built against a different module ABI revision.

<a id="rustdoc-item-372"></a>

### `AbiVersionMissing`

```rust
AbiVersionMissing
```

The module does not export an ABI revision at all.

<a id="rustdoc-item-375"></a>

### `InitializationFailed`

```rust
InitializationFailed
```

The module's registration entry point reported a failed generation.

<a id="rustdoc-item-379"></a>

### `RegisteredForbiddenData`

```rust
RegisteredForbiddenData
```

A module registered components or resources, although a failed load of
it clears only its systems.

When a failed load keeps the world and removes just the module's
systems, that is sound only if the module owns no data: the components
and resources it uses were registered by someone else. A module that
registers its own is refused instead of trusted.

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
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
- `From<ModuleError>`
