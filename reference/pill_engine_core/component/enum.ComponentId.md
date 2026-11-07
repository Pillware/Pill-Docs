<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-83"></a>

# Enum `pill_engine_core::component::ComponentId`

```rust
pub enum ComponentId { ... }
```

Source: `engine\pill_engine_core\src\component.rs:295`

Identifier for a registered component type, with the Rust type erased.

A native component keeps its Rust [`TypeId`]. A runtime-defined component
uses the stable 128-bit identity its external manifest supplies. A native
component that declares [`Component::shared_name`](trait.Component.md#rustdoc-item-711) uses a stable identity
derived from that name instead of its `TypeId`, so every binary that links
the type reaches the same id.

## Variants

<a id="rustdoc-item-2845"></a>

### `Native`

```rust
Native
```

Component backed by a concrete Rust type, identified per binary.

<a id="rustdoc-item-2847"></a>

### `Descriptor`

```rust
Descriptor
```

Component described at runtime by an external language manifest.

<a id="rustdoc-item-2850"></a>

### `Shared`

```rust
Shared
```

Component backed by a concrete Rust type that may be linked into more
than one binary, identified by the stable name it declares.

Storage is native, exactly as for [`Self::Native`](#rustdoc-item-2845) - only the identity
differs - so [`Self::is_native_storage`](#rustdoc-item-2849) holds for both.

## Associated functions and methods

<a id="rustdoc-item-2750"></a>

### `of`

```rust
pub fn of<T: Component>() -> Self;
```

Returns the [`ComponentId`](#rustdoc-item-83) for the concrete Rust type `T`.

For an ordinary component this is its [`TypeId`], which differs between
binaries. For one that declares [`Component::shared_name`](trait.Component.md#rustdoc-item-711) it is the
stable identity derived from that name, which does not differ. Every
binary that links the type therefore produces the same id here, and the
engine gives them one bit and one column between them.

The bound is [`Component`](trait.Component.md#rustdoc-item-494) rather than `'static` so that this
distinction cannot be bypassed: there is no second entry point that
could forget to consult the declaration.

Either path costs the same as `TypeId::of`. For a derived component,
`shared_identity` is a compile-time constant, so the shared branch is a
load too and neither branch hashes the name. A type that writes
`shared_name` by hand without overriding `shared_identity` hashes its
name here on every call.

<a id="rustdoc-item-2851"></a>

### `descriptor`

```rust
pub const fn descriptor(stable_id: u128) -> Self;
```

Builds a descriptor component ID from the stable 128-bit identity
supplied by an external runtime manifest.

<a id="rustdoc-item-2852"></a>

### `native`

```rust
pub const fn native(type_id: TypeId) -> Self;
```

Wraps an existing Rust [`TypeId`] in a native component ID.

<a id="rustdoc-item-2853"></a>

### `native_type_id`

```rust
pub const fn native_type_id(self: Self) -> Option<TypeId>;
```

Returns the wrapped [`TypeId`] when this component is identified by one.

The answer is `None` for a descriptor component, which has no Rust type
at all. It is also `None` for a shared component: that one has a Rust
type in every binary that links it, but no single `TypeId` names it. A
caller asking "are these rows native storage?" wants
[`Self::is_native_storage`](#rustdoc-item-2849) instead.

<a id="rustdoc-item-2849"></a>

### `is_native_storage`

```rust
pub const fn is_native_storage(self: Self) -> bool;
```

Whether this component's rows live in a native column rather than in a
byte-oriented descriptor one.

True for [`Self::Native`](#rustdoc-item-2845) and [`Self::Shared`](#rustdoc-item-2850) alike: shared identity
changes how a component is *named*, never how it is stored.

<a id="rustdoc-item-2854"></a>

### `shared_identity`

```rust
pub const fn shared_identity(self: Self) -> Option<u128>;
```

The stable identity behind a shared component id, if this is one.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
- `Hash`
