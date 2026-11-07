<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2709"></a>

# Struct `pill_editor_core::editor_state::ComponentFieldView`

```rust
pub struct ComponentFieldView;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:98`

One field of a component's layout, as the editor's own snapshot keeps it.

The registry's [`ComponentFieldDescriptor`] borrows its name and its
decorators from the artifact that declared them. That artifact can be
unloaded between two captures, for example a project module replaced by a
reload. This type owns both, so nothing reachable from [`EditorSnapshot`](struct.EditorSnapshot.md#rustdoc-item-1162)
keeps a module image alive.

## Fields

<a id="rustdoc-item-2705"></a>

### `name`

```rust
name: String
```

The field's registered name.

<a id="rustdoc-item-2706"></a>

### `decorators`

```rust
decorators: Vec<pill_engine::component_registry::FieldDecorator>
```

The presentation decorators the field declared, in declaration order.

## Associated functions and methods

<a id="rustdoc-item-2710"></a>

### `from_descriptor`

```rust
pub(in editor_state) fn from_descriptor(descriptor: &ComponentFieldDescriptor) -> Self;
```

Builds the editor's own copy of one registry descriptor.

It copies the two things the editor reads from the descriptor, so the
snapshot does not borrow from the registry.

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
