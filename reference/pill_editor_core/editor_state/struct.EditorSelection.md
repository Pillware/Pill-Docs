<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-158"></a>

# Struct `pill_editor_core::editor_state::EditorSelection`

```rust
pub struct EditorSelection;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:646`

The editor's shared selection, read by every data panel and by the scene.

It holds one entity set, one asset slot and one resource slot. The
Hierarchy and the viewports select entities, the Assets panel selects
files, and the Inspector follows whichever slot holds a selection. A
resource selection excludes the other two.

The entity slot is a **set**. The last entity in it is the primary: the
one the gizmo acts on, the one the scene outlines most brightly and the one
the Inspector edits first. Ctrl extends the set, Shift extends it over the
Entities list's range, and a plain click replaces it.

The element slot is the sub-entity counterpart a tool fills, and it stands
apart from the other three on purpose: it names one entity's elements of
one kind (see [`ElementSelection`](struct.ElementSelection.md#rustdoc-item-2462)), and an entity or resource pick clears
it because a new entity means a new set of elements.

## Fields

<a id="rustdoc-item-3638"></a>

### `entities`

```rust
entities: Vec<pill_engine::Entity>
```

The selected entities, in the order they were selected. The last one is
the primary.

<a id="rustdoc-item-3639"></a>

### `asset`

```rust
asset: Option<String>
```

The selected asset's project-relative path, when one is selected.

<a id="rustdoc-item-3640"></a>

### `resource`

```rust
resource: Option<String>
```

The selected world resource's stable name, when one is selected. A
resource selection excludes the other two, because the Inspector shows
one thing at a time.

<a id="rustdoc-item-3641"></a>

### `elements`

```rust
elements: ElementSelection
```

The selected elements of one entity, when a tool has them selected.

## Associated functions and methods

<a id="rustdoc-item-3642"></a>

### `clicked`

```rust
pub fn clicked(self: &Self, click: SelectionClick, entity: Entity, rows: &[Entity]) -> Vec<Entity>;
```

Returns the entity set a click produces, given the list's own row
order.

The function is pure, so the shell (which reads the modifiers) and the
scripted channel (which names the mode) share one rule for what a click
means. A range click needs the primary as its anchor and both rows
present in `rows`. Without them it behaves like a plain click.

<a id="rustdoc-item-3643"></a>

### `primary`

```rust
pub fn primary(self: &Self) -> Option<Entity>;
```

Returns the entity the gizmo acts on and the Inspector edits first,
which is the one selected last.

<a id="rustdoc-item-3644"></a>

### `clicked_elements`

```rust
pub fn clicked_elements(self: &Self, click: SelectionClick, target: ElementRef, kind: &str, reported: &[ElementRef]) -> Result<ElementSelection, ElementClickRefusal>;
```

Returns the element set a click produces, given the tool's report
order.

The rule is the entity click's rule with the kind restriction added: a
plain click replaces the selection whatever kind it held, while an
extend or a range click only works inside the selection's kind - that
refusal is how "control points and tangents never select together" is
enforced. A range needs the last selected element and the clicked one
in `reported`, and falls back to a plain click without them, exactly as
[`Self::clicked`](#rustdoc-item-3642) does for rows.

#### Errors

Returns [`ElementClickRefusal::KindMismatch`](enum.ElementClickRefusal.md#rustdoc-item-3551) when an extend or range
click names a kind the selection does not hold, and
[`ElementClickRefusal::OtherEntity`](enum.ElementClickRefusal.md#rustdoc-item-3552) when it would mix two entities.

<a id="rustdoc-item-3645"></a>

### `entities`

```rust
pub fn entities(self: &Self) -> &[Entity];
```

Returns every selected entity, in selection order.

<a id="rustdoc-item-3646"></a>

### `contains`

```rust
pub fn contains(self: &Self, entity: Entity) -> bool;
```

Returns whether `entity` is selected.

<a id="rustdoc-item-3647"></a>

### `set_entities`

```rust
pub fn set_entities(self: &mut Self, entities: Vec<Entity>);
```

Replaces the whole entity selection.

<a id="rustdoc-item-3648"></a>

### `select_only`

```rust
pub fn select_only(self: &mut Self, entity: Entity);
```

Selects exactly one entity.

<a id="rustdoc-item-3649"></a>

### `add_entity`

```rust
pub fn add_entity(self: &mut Self, entity: Entity);
```

Adds one entity to the selection and makes it the primary.

Adding an entity that is already selected only makes it primary, so a
Ctrl-click on a selected row does not lose the rest of the set.

<a id="rustdoc-item-3650"></a>

### `remove_entity`

```rust
pub fn remove_entity(self: &mut Self, entity: Entity);
```

Deselects one entity without disturbing the others.

<a id="rustdoc-item-3651"></a>

### `clear_entities`

```rust
pub fn clear_entities(self: &mut Self);
```

Drops the entity selection.

<a id="rustdoc-item-3652"></a>

### `elements`

```rust
pub fn elements(self: &Self) -> &ElementSelection;
```

The selected elements of one entity, when a tool has them selected.

<a id="rustdoc-item-3653"></a>

### `set_elements`

```rust
pub fn set_elements(self: &mut Self, kind: String, elements: Vec<ElementRef>) -> bool;
```

Replaces the element slot, refusing a set that names more than one
entity.

Returns `false` and leaves the slot alone on a refusal, which the caller
reports: a tool that reports elements of two entities at once is a tool
bug, not a selection the editor can store.

<a id="rustdoc-item-3654"></a>

### `clear_elements`

```rust
pub fn clear_elements(self: &mut Self);
```

Drops the element selection. The entity slot is left alone: the elements
belong to an entity that is usually still selected.

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
- `Default`
- `Resource`
