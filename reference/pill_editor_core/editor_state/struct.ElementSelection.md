<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2462"></a>

# Struct `pill_editor_core::editor_state::ElementSelection`

```rust
pub struct ElementSelection;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:681`

The editor's element slot: the selected elements of one entity, all of one
kind.

The kind lives beside the elements rather than inside each one, so "one kind
per selection" is a property of the value: a caller that tries to mix two
kinds is refused by [`EditorSelection::set_elements`](struct.EditorSelection.md#rustdoc-item-3653), which is the only way
to fill the slot.

## Fields

<a id="rustdoc-item-3731"></a>

### `kind`

```rust
kind: String
```

The kind every element in [`Self::elements`](#rustdoc-item-3730) belongs to. Empty when
nothing is selected.

<a id="rustdoc-item-3732"></a>

### `elements`

```rust
elements: Vec<ElementRef>
```

The selected elements, in the order they were selected.

## Associated functions and methods

<a id="rustdoc-item-3733"></a>

### `kind`

```rust
pub fn kind(self: &Self) -> &str;
```

The kind the selection is limited to, or `""` when nothing is selected.

<a id="rustdoc-item-3730"></a>

### `elements`

```rust
pub fn elements(self: &Self) -> &[ElementRef];
```

The selected elements, in the order they were selected.

<a id="rustdoc-item-3734"></a>

### `elements_mut`

```rust
pub fn elements_mut(self: &mut Self) -> &mut [ElementRef];
```

The selected elements, so a restore can follow them to a fresh entity
handle.

<a id="rustdoc-item-3735"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether no element is selected.

<a id="rustdoc-item-3736"></a>

### `owner`

```rust
pub fn owner(self: &Self) -> Option<Entity>;
```

The entity every selected element belongs to, when anything is selected.

<a id="rustdoc-item-3737"></a>

### `contains`

```rust
pub fn contains(self: &Self, entity: Entity, id: u64) -> bool;
```

Whether `id` on `entity` is selected.

<a id="rustdoc-item-3738"></a>

### `set`

```rust
pub fn set(self: &mut Self, kind: String, elements: Vec<ElementRef>) -> bool;
```

Replaces the slot with `elements` of one kind.

Returns `false` and changes nothing when the elements name more than one
entity: element ids are only unique within one entity, so a mixed set
could not be read back. The caller reports the refusal.

<a id="rustdoc-item-3739"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Drops every selected element and the kind with them.

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
