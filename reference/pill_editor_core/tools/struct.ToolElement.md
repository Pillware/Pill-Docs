<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10890"></a>

# Struct `pill_editor_core::tools::ToolElement`

```rust
pub struct ToolElement;
```

Source: `editor\pill_editor_core\src\tools.rs:313`

One element a tool reports for the entity it is editing.

## Fields

<a id="rustdoc-item-10887"></a>

### `id`

```rust
id: u64
```

The tool's own id for the element, stable while its component is.

<a id="rustdoc-item-10888"></a>

### `kind`

```rust
kind: String
```

The kind's name. The editor keeps one kind per selection, so a set that
mixes kinds is refused by name.

<a id="rustdoc-item-10889"></a>

### `transform`

```rust
transform: ElementTransform
```

Where it sits, in world space.

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
- `SerializableAny`
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
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
