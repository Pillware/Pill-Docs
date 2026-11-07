<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3693"></a>

# Enum `pill_editor_core::error::LayoutPersistenceError`

```rust
pub enum LayoutPersistenceError { ... }
```

Source: `editor\pill_editor_core\src\error.rs:40`

The failures of the persisted dock layout.

A save reports [`Self::Serialization`](#rustdoc-item-3689) and [`Self::Filesystem`](#rustdoc-item-3692). The other
two name the ways a saved document can be unusable: it does not parse, or
the layout model rejects it.

A failed save leaves the previous document as it was.

## Variants

<a id="rustdoc-item-3684"></a>

### `Invalid`

```rust
Invalid
```

The saved file does not parse as a document of the current layout
schema.

<a id="rustdoc-item-3687"></a>

### `Validation`

```rust
Validation
```

The loaded model failed a check in [`LayoutError`](../layout/persistence/enum.LayoutError.md#rustdoc-item-3686), such as a schema
version this build does not know.

<a id="rustdoc-item-3689"></a>

### `Serialization`

```rust
Serialization
```

The dock model could not be turned into JSON, so nothing was written.

<a id="rustdoc-item-3692"></a>

### `Filesystem`

```rust
Filesystem
```

Writing the document failed: creating its folder, writing the temporary
file, or replacing the old file. `path` names the one that failed.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
