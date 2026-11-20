<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6961"></a>

# Struct `pill_editor_core::inspector::RecordedEdit`

```rust
pub struct RecordedEdit;
```

Source: `editor\pill_editor_core\src\inspector.rs:1321`

What one value edit queues: the step's commands, the label it records
under, and the key that collapses consecutive writes from one drag.

## Fields

<a id="rustdoc-item-6958"></a>

### `commands`

```rust
commands: Vec<crate::editor_state::EditorCommand>
```

The commands, in the order the batch applies them.

<a id="rustdoc-item-6959"></a>

### `label`

```rust
label: String
```

The history label the step records under.

<a id="rustdoc-item-6960"></a>

### `coalesce`

```rust
coalesce: String
```

Consecutive writes sharing this key merge into one undo step.

## Associated functions and methods

<a id="rustdoc-item-6962"></a>

### `from_entity_edit`

```rust
pub(in inspector) fn from_entity_edit(edit: (EditorCommand, String), coalesce_key: String) -> Self;
```

One entity's edit, with the key its field coalesces on.

<a id="rustdoc-item-6963"></a>

### `from_selection_batch`

```rust
pub(in inspector) fn from_selection_batch(edit: (Vec<EditorCommand>, String, String)) -> Self;
```

A selection's batch, which carries its own label and key.

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
