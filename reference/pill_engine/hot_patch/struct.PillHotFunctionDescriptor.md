<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-576"></a>

# Struct `pill_engine::hot_patch::PillHotFunctionDescriptor`

```rust
pub struct PillHotFunctionDescriptor;
```

Source: `engine\pill_engine\src\hot_patch.rs:295`

Describes one function declared with `#[pill_hot]`.

The attribute macro submits one into this artifact's registry. Every field
can be written in a `const`, so the descriptor can live in a `static`, the
same way [`PillComponentDescriptor`](../component_registry/struct.PillComponentDescriptor.md#rustdoc-item-6)
can.

The registry is **per linked artifact**: the host executable, each
extension DLL and the project DLL each carry exactly the descriptors their
own sources declared. That is what keeps it correct across a reload: a
generation that stops declaring a function stops submitting its descriptor,
and an unloaded DLL takes its descriptors with it.

## Fields

<a id="rustdoc-item-572"></a>

### `qualified_name`

```rust
qualified_name: &'static str
```

Fully-qualified path, as `module_path!() + "::" + fn name`.

<a id="rustdoc-item-575"></a>

### `resolve`

```rust
resolve: fn () -> (usize, u64)
```

Resolves this function's dispatch address and the hash that identifies
its signature.

A function rather than two constants because both values come from the
generic machinery in [`local_implementation_address`] and
[`signature_hash_of`], which cannot run in a `const`.

## Associated functions and methods

<a id="rustdoc-item-577"></a>

### `find`

```rust
pub fn find(qualified_name: &str) -> Option<&'static Self>;
```

The descriptor of the `#[pill_hot]` system this artifact declares under
`qualified_name`.

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
- `Collect`
