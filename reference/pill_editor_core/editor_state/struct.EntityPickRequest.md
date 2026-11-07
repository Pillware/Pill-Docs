<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2997"></a>

# Struct `pill_editor_core::editor_state::EntityPickRequest`

```rust
pub struct EntityPickRequest;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:278`

The world resource that carries an armed entity pick.

The Inspector row arms it through [`EditorCommand::ArmEntityPick`](command/enum.EditorCommand.md#rustdoc-item-2440), and the
executable that answers scene picks reads it. The shell draws the rows and
has no world, while the picking code lives in the executable, so a world
resource is the one place both can reach.

## Fields

<a id="rustdoc-item-2996"></a>

### `target`

```rust
target: Option<EntityPickTarget>
```

The field the next scene click should name, if a row is waiting.

## Associated functions and methods

<a id="rustdoc-item-2998"></a>

### `take`

```rust
pub fn take(self: &mut Self) -> Option<EntityPickTarget>;
```

Takes the armed target and leaves the request clear.

The click that answers the request is the only caller that consumes it.

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
- `Equivalent<K>`
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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Resource`
