<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11426"></a>

# Struct `pill_editor_core::tools::ToolRegistry`

```rust
pub struct ToolRegistry;
```

Source: `editor\pill_editor_core\src\tools.rs:948`

Every registered tool, and which one is active.

One tool is active at a time; `None` is the neutral state (no tool), which
is what `tool none` and the Esc key produce. The three built-ins are
present from the registry's creation, so a fresh editor's `dump tools`
lists them without anything having opened a toolbox.

## Fields

<a id="rustdoc-item-11429"></a>

### `tools`

```rust
tools: Vec<RegisteredTool>
```

The registered tools, in registration order.

<a id="rustdoc-item-11431"></a>

### `extensions`

```rust
extensions: Vec<RegisteredExtension>
```

The registered extensions, sorted by `(order, name)`.

<a id="rustdoc-item-11432"></a>

### `active`

```rust
active: Option<String>
```

The active tool's name, or `None` when no tool is active.

## Associated functions and methods

<a id="rustdoc-item-11433"></a>

### `register`

```rust
pub fn register(self: &mut Self, tool: &dyn EditorTool);
```

Registers `tool`, replacing the record with the same name.

Replacing in place rather than appending is what a reload relies on:
the arriving image's record must take the old one's slot, so the
toolbox row and any command naming the tool keep working.

<a id="rustdoc-item-11434"></a>

### `register_plugin`

```rust
pub fn register_plugin(self: &mut Self, tool: &dyn EditorTool, hooks: ToolElementHooks);
```

Registers `tool` with its element reporting, replacing the record with
the same name.

A tool that reports elements registers through this call: the hooks are
plain function pointers of the image that declared the tool, so the
reload's re-registration is what keeps them pointing at live code.

<a id="rustdoc-item-11435"></a>

### `active_record`

```rust
pub fn active_record(self: &Self) -> Option<&RegisteredTool>;
```

The active tool's record, or `None` when no tool is active.

<a id="rustdoc-item-11436"></a>

### `register_extension`

```rust
pub fn register_extension<E: ToolExtension>(self: &mut Self);
```

Registers an extension of a tool another crate owns.

Registration replaces the record with the same name, which is what a
reload relies on, and keeps the list sorted by `(order, name)` so the
chain never depends on the order the crates happened to load in.

A chord two extensions of one base both bind is resolved by that order.
The clash is logged once, when the extension that creates it is first
registered: re-registering an extension a reload replaced does not log
it again.

<a id="rustdoc-item-11437"></a>

### `report_key_conflicts`

```rust
pub(in tools) fn report_key_conflicts(self: &Self, record: &RegisteredExtension);
```

Logs every chord `record` binds that another extension of its base binds
too, naming the extension that wins it.

<a id="rustdoc-item-11438"></a>

### `extensions`

```rust
pub fn extensions(self: &Self) -> &[RegisteredExtension];
```

Every registered extension, sorted by `(order, name)`.

<a id="rustdoc-item-11439"></a>

### `clear_extensions`

```rust
pub fn clear_extensions(self: &mut Self);
```

Drops every registered extension.

A host calls this when the images that declared them are gone - a module
unloaded for good, or a test that wants the plain tool back - so no
record is left pointing at code that is no longer mapped.

<a id="rustdoc-item-11440"></a>

### `attached_extensions`

```rust
pub fn attached_extensions<'a>(self: &'a Self, entity: Entity, world: &World) -> Vec<&'a RegisteredExtension>;
```

The extensions attached to the active tool for `entity`.

Attached means: a tool is active, its name is the extension's base, and
the entity carries the component the extension requires. Empty when the
registry holds no extension, which is the case for an editor nobody
extended.

<a id="rustdoc-item-11441"></a>

### `is_extension_attached`

```rust
pub fn is_extension_attached(self: &Self, name: &str, entity: Entity, world: &World) -> bool;
```

Its name in the log and in `dump tools`.

<a id="rustdoc-item-11442"></a>

### `active_kinds`

```rust
pub fn active_kinds(self: &Self, entity: Entity, world: &World) -> Vec<ElementKind>;
```

The kinds the active tool and its attached extensions expose, in their
own order.

The base tool's kinds come first, then each attached extension's, so an
extension's kind is an addition the base has never heard of. A kind name
the base already declares is not replaced: the first declaration wins,
which is what keeps an extension from renaming what it extends.

Empty when no tool is active or nothing reports elements.

<a id="rustdoc-item-11443"></a>

### `active_kind`

```rust
pub fn active_kind(self: &Self, name: &str) -> Option<ElementKind>;
```

One of the active tool's kinds, by name.

The base tool's own kinds only: a caller that needs a kind an extension
added asks [`Self::active_kinds`](#rustdoc-item-11442), which merges both halves.

<a id="rustdoc-item-11444"></a>

### `active_elements`

```rust
pub fn active_elements(self: &Self, entity: Entity, world: &World) -> Vec<ToolElement>;
```

The elements the active tool and its attached extensions report for
`entity`, in their own order.

Empty when no tool is active or nothing reports elements.

<a id="rustdoc-item-11445"></a>

### `active_reports_elements`

```rust
pub fn active_reports_elements(self: &Self, entity: Entity, world: &World) -> bool;
```

Whether anything drawn would come of the active tool for `entity`.

This is the gate the editor asks before it reports element handles at
all: a tool that reports no elements, with no attached extension that
does, leaves the entity with none.

<a id="rustdoc-item-11446"></a>

### `active_moves_elements`

```rust
pub fn active_moves_elements(self: &Self, entity: Entity, world: &World) -> bool;
```

Whether the active tool writes element transforms back.

The editor asks this before it offers an element drag: a tool that
reports elements but takes no moves leaves the drag on the entity. An
attached extension that can move its own elements counts, so a base
tool that only draws them still gets a drag once an extension adds the
write-back.

<a id="rustdoc-item-11447"></a>

### `active_removes_elements`

```rust
pub fn active_removes_elements(self: &Self, entity: Entity, world: &World) -> bool;
```

Whether the active tool or an attached extension removes elements.

Delete falls through to the entity rule when nothing can: the gate the
editor asks before it queues an element removal.

<a id="rustdoc-item-11448"></a>

### `active_set_transforms`

```rust
pub fn active_set_transforms(self: &Self, entity: Entity, moves: &[ElementMove], world: &mut World) -> bool;
```

Hands `moves` to the active tool's write-back and to every attached
extension's, and answers whether anything took them.

Every writer is called: a tool writes its own elements and an extension
its own, so each one ignores the ids it does not know. The editor's gizmo
drag and its undo step both write through this one call, so a tool sees
no difference between a live drag and a restored value.

<a id="rustdoc-item-11449"></a>

### `active_frames`

```rust
pub fn active_frames(self: &Self, entity: Entity, selected: &[u64], world: &World) -> Vec<CoordinateFrame>;
```

The extra spaces the active tool and its attached extensions offer for
`selected`, in their own order.

Empty when no tool is active, nothing brings frames, or they have
nothing to say about this selection.

<a id="rustdoc-item-11450"></a>

### `active_menu`

```rust
pub fn active_menu(self: &Self, entity: Entity, kind: &str, selected: &[u64], world: &World) -> Vec<ElementMenuEntry>;
```

The menu rows the active tool and its attached extensions add for
`selected`, in `(order, name)` order.

The base tool's rows come first, then each extension's, so an
extension's row always reads after what it extends. A row id the base
already uses is skipped: an extension cannot replace a base entry, only
add one beside it.

Empty when no tool is active, nothing adds rows, or they have nothing to
say about this selection.

<a id="rustdoc-item-11451"></a>

### `active_menu_run`

```rust
pub fn active_menu_run(self: &Self, entity: Entity, kind: &str, selected: &[u64], item: &str, world: &World) -> Result<Vec<EditorCommand>, String>;
```

Runs one of the active tool's menu rows, answering the commands it asks
for.

The base tool is asked first; an extension answers only when the base
refuses the row, so an extension can add rows but never take one over.

#### Errors

Returns a message when no tool is active, when nothing adds a menu, or
when nobody claims `item` - which is how a menu row nobody registered
reads instead of running nothing silently.

<a id="rustdoc-item-11452"></a>

### `active_insert`

```rust
pub fn active_insert(self: &Self, entity: Entity, kind: &str, id: Option<u64>, transform: ElementTransform, world: &mut World) -> Option<u64>;
```

Inserts one element through the active tool or an attached extension,
answering its id.

The base tool is asked first, then the extensions in order; an extension
adds an element of its own kind, which the base refuses by not knowing
it. `None` when nothing can insert, which the caller reports as a refused
edit instead of writing nothing.

<a id="rustdoc-item-11453"></a>

### `active_remove`

```rust
pub fn active_remove(self: &Self, entity: Entity, kind: &str, elements: &[u64], world: &mut World) -> Option<usize>;
```

Removes elements through the active tool and every attached extension,
answering how many went.

`None` when no tool is active or nothing can remove.

<a id="rustdoc-item-11454"></a>

### `active_press`

```rust
pub fn active_press(self: &Self, entity: Entity, element: u64, kind: &str, click: SelectionClick, selected: &[u64], world: &World) -> PressResponse;
```

What the active tool and its attached extensions make of a press on one
of `kind`'s elements.

The chain the design states: the base tool is asked first, and an
extension is asked only while the answer so far is
[`PressResponse::Default`](enum.PressResponse.md#rustdoc-item-11103). The first answer that is not `Default` wins.

<a id="rustdoc-item-11455"></a>

### `active_key`

```rust
pub fn active_key(self: &Self, entity: Entity, kind: &str, key: &str, selected: &[u64], world: &World) -> KeyResponse;
```

What the active tool and its attached extensions make of a key press over
its element selection.

Same chain as [`Self::active_press`](#rustdoc-item-11454): the base tool first, then the
extensions attached to `entity` in `(order, name)` order. An extension is
asked only for a chord it declares, which is what makes "bound twice"
meaningful: the lower `order` answers first and wins.

[`KeyResponse::Default`](enum.KeyResponse.md#rustdoc-item-11145) when nothing claims the key, so the editor's own
rule and then the keybindings still see it.

<a id="rustdoc-item-11456"></a>

### `notify_element_selection_changed`

```rust
pub fn notify_element_selection_changed(self: &Self, entity: Entity, previous: &[u64], current: &[u64], world: &World);
```

Tells the active tool that the element selection changed.

Called for every change whatever made it, so a tool that mirrors the
selection somewhere hears about an undo the same way it hears about a
click.

<a id="rustdoc-item-11457"></a>

### `tools`

```rust
pub fn tools(self: &Self) -> &[RegisteredTool];
```

The registered tools, in registration order.

<a id="rustdoc-item-11458"></a>

### `offered_component_tools`

```rust
pub fn offered_component_tools(self: &Self, entity: Entity, world: &World) -> Vec<&RegisteredTool>;
```

The component tools `entity` is offered, in registration order.

A tool is offered only when it is not global and the entity carries the
component it declares. The toolbox draws one row per entry and names it
by the tool's own name; the built-ins are global, so they never appear
here.

<a id="rustdoc-item-11459"></a>

### `active`

```rust
pub fn active(self: &Self) -> Option<&str>;
```

The active tool's name, or `None` when no tool is active.

<a id="rustdoc-item-11460"></a>

### `contains`

```rust
pub fn contains(self: &Self, name: &str) -> bool;
```

Returns whether `name` is a registered tool's name.

<a id="rustdoc-item-11461"></a>

### `set_active`

```rust
pub fn set_active(self: &mut Self, name: Option<&str>) -> Result<(), String>;
```

Makes the tool `name` active, or clears the active tool with `None`.

#### Errors

Returns a message naming the tools that exist when `name` is not one of
them, so a scripted line or a row that names a tool nobody registered
says so instead of silently doing nothing.

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
- `ToString`
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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
- `Resource`
- `Display`
