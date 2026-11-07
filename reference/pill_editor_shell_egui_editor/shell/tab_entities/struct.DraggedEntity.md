<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-513"></a>

# Struct `pill_editor_shell_egui_editor::shell::tab_entities::DraggedEntity`

```rust
pub struct DraggedEntity;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_entities.rs:32`

The payload an Entities row drags onto an Inspector entity-reference
field.

A newtype, not the bare entity handle. egui matches a drop by the payload
type, so an entity and the path string an asset tile drags must not share
one.

## Fields

<a id="rustdoc-item-512"></a>

### `0`

```rust
0: Entity
```

_No documentation provided._

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Copy`
- `Debug`
