<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2536"></a>

# Struct `pill_editor_core::tools::ElementMove`

```rust
pub struct ElementMove;
```

Source: `editor\pill_editor_core\src\tools.rs:329`

One element a drag moved, with the world transform it takes.

The editor works out where the drag puts each element and hands the whole
set to the tool in one call, so a tool never does the frame or the gizmo
maths itself.

## Fields

<a id="rustdoc-item-10926"></a>

### `element`

```rust
element: u64
```

The tool's own id for the element.

<a id="rustdoc-item-10927"></a>

### `transform`

```rust
transform: ElementTransform
```

The world transform the element ends up with.

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
