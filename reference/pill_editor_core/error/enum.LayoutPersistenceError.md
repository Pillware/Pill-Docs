<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4070"></a>

# Enum `pill_editor_core::error::LayoutPersistenceError`

```rust
pub enum LayoutPersistenceError { ... }
```

Source: `editor\pill_editor_core\src\error.rs:40`

The failures of the persisted dock layout.

A save reports [`Self::Serialization`](#rustdoc-item-4066) and [`Self::Filesystem`](#rustdoc-item-4069). The other
two name the ways a saved document can be unusable: it does not parse, or
the layout model rejects it.

A failed save leaves the previous document as it was.

## Variants

<a id="rustdoc-item-4061"></a>

### `Invalid`

```rust
Invalid
```

The saved file does not parse as a document of the current layout
schema.

<a id="rustdoc-item-4064"></a>

### `Validation`

```rust
Validation
```

The loaded model failed a check in [`LayoutError`](../layout/persistence/enum.LayoutError.md#rustdoc-item-4063), such as a schema
version this build does not know.

<a id="rustdoc-item-4066"></a>

### `Serialization`

```rust
Serialization
```

The dock model could not be turned into YAML, so nothing was written.

<a id="rustdoc-item-4069"></a>

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
