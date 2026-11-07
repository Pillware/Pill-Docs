<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-158"></a>

# Struct `pill_editor_core::editor_state::EditorSelection`

```rust
pub struct EditorSelection;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:543`

The editor's shared selection, read by every data panel and by the scene.

It holds one entity set, one asset slot and one resource slot. The
Hierarchy and the viewports select entities, the Assets panel selects
files, and the Inspector follows whichever slot holds a selection. A
resource selection excludes the other two.

The entity slot is a **set**. The last entity in it is the primary: the
one the gizmo acts on, the one the scene outlines most brightly and the one
the Inspector edits first. Ctrl extends the set, Shift extends it over the
Entities list's range, and a plain click replaces it.

## Fields

<a id="rustdoc-item-3456"></a>

### `entities`

```rust
entities: Vec<pill_engine::Entity>
```

The selected entities, in the order they were selected. The last one is
the primary.

<a id="rustdoc-item-3457"></a>

### `asset`

```rust
asset: Option<String>
```

The selected asset's project-relative path, when one is selected.

<a id="rustdoc-item-3458"></a>

### `resource`

```rust
resource: Option<String>
```

The selected world resource's stable name, when one is selected. A
resource selection excludes the other two, because the Inspector shows
one thing at a time.

## Associated functions and methods

<a id="rustdoc-item-3459"></a>

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

<a id="rustdoc-item-3460"></a>

### `primary`

```rust
pub fn primary(self: &Self) -> Option<Entity>;
```

Returns the entity the gizmo acts on and the Inspector edits first,
which is the one selected last.

<a id="rustdoc-item-3461"></a>

### `entities`

```rust
pub fn entities(self: &Self) -> &[Entity];
```

Returns every selected entity, in selection order.

<a id="rustdoc-item-3462"></a>

### `contains`

```rust
pub fn contains(self: &Self, entity: Entity) -> bool;
```

Returns whether `entity` is selected.

<a id="rustdoc-item-3463"></a>

### `set_entities`

```rust
pub fn set_entities(self: &mut Self, entities: Vec<Entity>);
```

Replaces the whole entity selection.

<a id="rustdoc-item-3464"></a>

### `select_only`

```rust
pub fn select_only(self: &mut Self, entity: Entity);
```

Selects exactly one entity.

<a id="rustdoc-item-3465"></a>

### `add_entity`

```rust
pub fn add_entity(self: &mut Self, entity: Entity);
```

Adds one entity to the selection and makes it the primary.

Adding an entity that is already selected only makes it primary, so a
Ctrl-click on a selected row does not lose the rest of the set.

<a id="rustdoc-item-3466"></a>

### `remove_entity`

```rust
pub fn remove_entity(self: &mut Self, entity: Entity);
```

Deselects one entity without disturbing the others.

<a id="rustdoc-item-3467"></a>

### `clear_entities`

```rust
pub fn clear_entities(self: &mut Self);
```

Drops the entity selection.

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
