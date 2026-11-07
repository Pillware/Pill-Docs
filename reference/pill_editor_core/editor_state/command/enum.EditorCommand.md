<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1112"></a>

# Enum `pill_editor_core::editor_state::command::EditorCommand`

```rust
pub enum EditorCommand { ... }
```

Source: `editor\pill_editor_core\src\editor_state\command.rs:37`

One mutation the editor can queue, applied at the frame boundary.

The values are plain data: the shell queues them into a world resource and
the executable applies them. The methods below answer what the recording
layer and the applier ask of a command.

## Variants

<a id="rustdoc-item-2406"></a>

### `CreateEntity`

```rust
CreateEntity
```

Create an entity with the given components.

An empty `components` list creates an entity with no components.

<a id="rustdoc-item-2408"></a>

### `DestroyEntity`

```rust
DestroyEntity
```

Destroy one entity.

<a id="rustdoc-item-2411"></a>

### `AddComponent`

```rust
AddComponent
```

Add a zero-initialised component to a live entity.

<a id="rustdoc-item-2414"></a>

### `RemoveComponent`

```rust
RemoveComponent
```

Remove a component from a live entity. Removing the entity's last
component destroys the entity.

<a id="rustdoc-item-2417"></a>

### `RestoreEntity`

```rust
RestoreEntity
```

Re-create a destroyed entity from the component values captured when
it was destroyed.

The world assigns a fresh handle. The recording layer reports the
`(previous, assigned)` pair so the history can move its older entries
to the new handle. A component without a field layout cannot be
rebuilt, so it is left out and the entity comes back without it.

<a id="rustdoc-item-2421"></a>

### `RestoreComponent`

```rust
RestoreComponent
```

Re-attach one component with captured field values, the inverse of
removing it.

<a id="rustdoc-item-2426"></a>

### `SetField`

```rust
SetField
```

Write one field of a component.

<a id="rustdoc-item-2431"></a>

### `SetFieldAsset`

```rust
SetFieldAsset
```

Point an asset reference field at the asset `reference` names, or clear
the field with `None`.

`reference` is a path relative to `res`, a 32-digit guid, or the name an
asset was added to the store under. The apply resolves it at the frame
boundary and loads the asset first when it is not loaded yet. The write
then behaves like [`Self::SetField`](#rustdoc-item-2426) and records the same kind of
inverse.

<a id="rustdoc-item-2436"></a>

### `SetFieldEntity`

```rust
SetFieldEntity
```

Point an entity reference field at `reference`, or clear the field with
`None`.

The handle is checked against the world when the command is applied,
so a reference to an entity that is gone by then is refused instead of
written. A write records the [`Self::SetField`](#rustdoc-item-2426) that puts back what the
field held.

<a id="rustdoc-item-2440"></a>

### `ArmEntityPick`

```rust
ArmEntityPick
```

Wait for the next scene click to name an entity reference field.

The Inspector row's target button arms it, and the scene click answers
it. Neither step is an edit, so nothing is recorded until the click
names an entity.

<a id="rustdoc-item-2446"></a>

### `SetArrayElement`

```rust
SetArrayElement
```

Write one element of a fixed-size array field.

<a id="rustdoc-item-2449"></a>

### `SetSystemEnabled`

```rust
SetSystemEnabled
```

Enable or disable a system by registration index.

<a id="rustdoc-item-2451"></a>

### `SetPaused`

```rust
SetPaused
```

Pause or resume the engine's system phase.

<a id="rustdoc-item-2455"></a>

### `SetGizmoTool`

```rust
SetGizmoTool
```

Set the transform gizmo's tool, its space or its snapping. A field left
as `None` keeps its current value.

<a id="rustdoc-item-2457"></a>

### `SetGrid`

```rust
SetGrid
```

Turn the scene grid on or off. The grid is the infinite ground plane
that the editor's view-bound surfaces draw.

<a id="rustdoc-item-2458"></a>

### `StepOnce`

```rust
StepOnce
```

Run exactly one system phase on the next frame, then pause again.

<a id="rustdoc-item-2461"></a>

### `ImportFiles`

```rust
ImportFiles
```

Copy files from outside the project into the assets directory, which is
what a drag-and-drop import queues. Undo removes the copies. A file with
the same name is overwritten.

<a id="rustdoc-item-2465"></a>

### `RemoveFiles`

```rust
RemoveFiles
```

Delete the copies an import created. This is the import's inverse and a
redoable step of its own; it also carries the source paths, so a redo
can copy the files again.

<a id="rustdoc-item-2470"></a>

### `CreateStandaloneAsset`

```rust
CreateStandaloneAsset
```

Create a standalone asset of `type_name` called `name` in `folder`,
where `folder` is relative to the asset directory.

The file holds the type's default document. An existing file is never
replaced unless the dialog asked for that. The new file is imported at
once, and the inverse deletes it.

<a id="rustdoc-item-2472"></a>

### `DeleteAssetFile`

```rust
DeleteAssetFile
```

Delete the asset file at `path`, which is relative to the asset
directory, together with its `.meta` sidecar.

The apply reads both files' bytes before it deletes them. The inverse is
the restore that puts them back, the sidecar's guid included, so the
asset keeps its identity through an undo.

<a id="rustdoc-item-2476"></a>

### `RestoreAssetFile`

```rust
RestoreAssetFile
```

Restore the asset files that a delete captured: the file's bytes and,
when it had one, the sidecar's. The inverse is the delete, so the pair
round-trips. Like the other restore commands, it never records as an
edit of its own.

<a id="rustdoc-item-2479"></a>

### `MoveAssetFile`

```rust
MoveAssetFile
```

Move or rename the asset at `from` to `to`, both relative to the
asset directory.

The `.meta` sidecar travels with the file and the asset watcher
follows the move, so the loaded asset keeps its handle and guid; the
inverse moves it back.

<a id="rustdoc-item-2481"></a>

### `WriteAssetMeta`

```rust
WriteAssetMeta
```

Write the `.meta` sidecar that the sourced asset at `path` is missing,
with the type's defaults and a fresh guid. A sidecar that already
carries a guid is left alone, so nothing is recorded for it. A sidecar
that is empty or unreadable counts as missing and is replaced. The
inverse deletes the sidecar that was written.

<a id="rustdoc-item-2484"></a>

### `SetAssetSettings`

```rust
SetAssetSettings
```

Replace the import settings of the asset at `path` - or a standalone
asset's own document - with `settings`. The inverse
carries the previous value, which the apply reads before writing.

<a id="rustdoc-item-2490"></a>

### `SetResourceField`

```rust
SetResourceField
```

Set one field of one editor-editable resource.

The engine keeps no resource reflection, so the resources this can name
are listed by hand in [`crate::resources::EDITABLE_RESOURCES`](../../resources/constant.EDITABLE_RESOURCES.md#rustdoc-item-2488), and
their fields are read and written one at a time through [`crate::gizmo`](../../gizmo/index.md#rustdoc-item-2489).
The inverse carries the previous value.

<a id="rustdoc-item-2493"></a>

### `SetSelection`

```rust
SetSelection
```

Set the shared selection. Selection changes that arrive back to back
merge into one history step through a coalesce key. The inverse carries
the previous entities and asset, so undo goes back one selection at a
time.

<a id="rustdoc-item-2496"></a>

### `SelectResource`

```rust
SelectResource
```

Select one world resource for the Inspector.

This is its own command rather than a third field of
[`EditorCommand::SetSelection`](#rustdoc-item-2493), because picking a resource also clears
the entity and asset slots, and undoing the pick has to bring all three
back ([`Self::RestoreSelection`](#rustdoc-item-2495)).

<a id="rustdoc-item-2495"></a>

### `RestoreSelection`

```rust
RestoreSelection
```

Restore all three selection slots as one recorded step.

This is the inverse that undoing a resource pick applies: picking a
resource clears the entity and asset slots, so the undo has to bring
them back instead of leaving the Inspector pointing at nothing.

<a id="rustdoc-item-2501"></a>

### `SetPreferences`

```rust
SetPreferences
```

Write values to the preferences file: one `(key, text)` pair per edited
row. The apply reads the document, changes only those keys and writes it
back, so keys other writers own survive. A pair whose text is blank
writes nothing. The file's live reader picks the new values up (history
limits, snapping steps) the next time it looks.

<a id="rustdoc-item-2502"></a>

### `SceneNew`

```rust
SceneNew
```

Start an empty scene: every entity is removed, no file is open, and the
selection and history are cleared.

This is a document action rather than an edit, so it is not recorded.
The history it replaces named entities that the old document owned, and
those handles mean nothing in the new world.

<a id="rustdoc-item-2504"></a>

### `SceneOpen`

```rust
SceneOpen
```

Open the scene at `path`, replacing the world's entities.

<a id="rustdoc-item-2505"></a>

### `SceneSave`

```rust
SceneSave
```

Write the world to the open scene, keeping its guid.

<a id="rustdoc-item-2507"></a>

### `SceneSaveAs`

```rust
SceneSaveAs
```

Write the world to `path`, taking over that file's guid when it exists
and a fresh one otherwise.

## Associated functions and methods

<a id="rustdoc-item-2401"></a>

### `apply`

```rust
pub fn apply(engine: &mut Engine, commands: &[EditorCommand]) -> Vec<(usize, String)>;
```

Applies a batch at the frame boundary.

Returns one `(index, message)` per failed command, in batch order. The
drain logs each failure for the Console panel. A failure never stops
the rest of the batch. Engine state is all-or-nothing per command, and
the commands that change structure check their input before they
commit. The asset-file commands are the exception: a rollback that
cannot finish lists the files it left behind in the message.

<a id="rustdoc-item-2402"></a>

### `apply_recorded`

```rust
pub fn apply_recorded(engine: &mut Engine, commands: &[EditorCommand]) -> RecordedApply;
```

Applies a batch and computes the inverse of every edit it performed.

This is the single application path: [`Self::apply`](#rustdoc-item-2401) only discards the
recording. A batch becomes one history step only when every command is
an undoable edit that succeeded and produced an inverse;
[`RecordedApply::fully_invertible`](struct.RecordedApply.md#rustdoc-item-2508) reports whether that held.

The batch runs against its own copy because a restore gives its entity
a new handle mid-batch. The commands after it, and the inverses already
collected, are moved to that handle, exactly like the history entries
are. Without that, undoing a delete would restore the entity under a
new handle while the selection restore still named the destroyed one,
so the selection would come back pointing at nothing.

<a id="rustdoc-item-2510"></a>

### `capture_seeds`

```rust
pub(in editor_state::apply) fn capture_seeds(engine: &Engine, entity: Entity) -> Result<Vec<ComponentSeed>, String>;
```

Captures a live entity's component values as seeds for a later restore.

Only components with a field layout can be rebuilt; a component without
one is skipped. Restoring an entity that carried one therefore brings
back every component the editor can read and describe.

#### Errors

Returns a message naming the entity when it no longer exists.

<a id="rustdoc-item-2511"></a>

### `apply_one`

```rust
pub(in editor_state::apply) fn apply_one(engine: &mut Engine, command: &EditorCommand) -> Result<CommandOutcome, String>;
```

Applies one command and returns the outcome the recording layer keeps.

The outcome holds the inverse that undoes the command, if there is one,
and the `(previous, assigned)` handle pair when the command re-created
an entity. Each family's arms live in the module that owns it.

#### Errors

Returns the command's own failure message. For an asset-file command
whose rollback could not finish, the message also names the paths still
on disk.

<a id="rustdoc-item-2513"></a>

### `recordable`

```rust
pub fn recordable(self: &Self) -> bool;
```

Whether this command is an undoable edit.

Most engine controls are not edits: pause, a single step, the gizmo tool
and the grid never enter the history, while a system toggle does.
Arming an entity pick is not an edit either - it waits for the next
scene click, and the click queues the recorded field write. Restoring
an entity, a component or an asset file replays an earlier step instead
of being one, so it does not record; the selection restore does, and is
a step of its own.

Two checks in [`Self::apply_recorded`](#rustdoc-item-2402) rely on this answer: a batch
becomes one history step only when every command records, and a command
that applied marks the document unsaved only when it records. A command
that must mark the document unsaved without being undoable needs its
own predicate, not another arm here.

<a id="rustdoc-item-2514"></a>

### `touched_identifiers`

```rust
pub fn touched_identifiers(self: &Self) -> Vec<String>;
```

The component and field identifiers this command addresses.

A field identifier is written `component.field`. The history keeps the
identifiers with each entry, so a reload can drop the entries whose
component or field is gone.

<a id="rustdoc-item-2515"></a>

### `remap_entity`

```rust
pub fn remap_entity(self: &mut Self, previous: Entity, assigned: Entity);
```

Replaces one entity handle with another wherever this command names it.

The drain calls this after a restore re-created a destroyed entity under
a fresh handle: every remaining history entry has to follow the entity
to its new handle, or a later undo would target the dead one.

<a id="rustdoc-item-2403"></a>

### `family`

```rust
pub fn family(self: &Self) -> CommandFamily;
```

The applier module that applies this command.

The applier sends each command to the module this names, so a new
variant is classified here once instead of gaining an arm in every
family. This is deliberately not the source of [`Self::recordable`](#rustdoc-item-2513) or
[`Self::touched_identifiers`](#rustdoc-item-2514): those answer per variant, and one family
can disagree with itself - a system toggle records while pause and step
do not.

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
