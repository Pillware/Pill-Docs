<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-205"></a>

# Enum `pill_engine_core::archetype::ColumnIdentity`

```rust
pub enum ColumnIdentity { ... }
```

Source: `engine\pill_engine_core\src\archetype.rs:190`

What a column requires of a `T` before it will hand out a typed reference.

The three cases are the three ways this engine knows a component type,
ordered by how much the compiler can still check.

## Variants

<a id="rustdoc-item-202"></a>

### `Native`

```rust
Native
```

An ordinary Rust component: only the exact `TypeId` may read the rows.

<a id="rustdoc-item-203"></a>

### `Shared`

```rust
Shared
```

A Rust component compiled into more than one binary. Each binary has a
different `TypeId` for the same type, so the layout is the only check
left.

The registry compares the declared field layout through a schema hash,
**when both sides declare one**. Without field descriptors there is no
such evidence, so the comparison falls back to size and alignment. That
fallback cannot tell `{f32, f32}` from `{u32, u32}`. It is deliberate,
because a hand-registered component could not be registered otherwise,
and it is warned about once per component id. It is a convention rather
than an invariant, so a shared component should always declare its
fields.

<a id="rustdoc-item-204"></a>

### `Descriptor`

```rust
Descriptor
```

No Rust type names these rows. They are reached as bytes.

Asking for a typed accessor on such a column is a bug in the calling
code, not a runtime condition: a project that uses only Rust components
never has a `T` to ask with.

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
