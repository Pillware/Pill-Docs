<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1157"></a>

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

<a id="rustdoc-item-2473"></a>

### `CreateEntity`

```rust
CreateEntity
```

Create an entity with the given components.

An empty `components` list creates an entity with no components.

<a id="rustdoc-item-2475"></a>

### `DestroyEntity`

```rust
DestroyEntity
```

Destroy one entity.

<a id="rustdoc-item-2478"></a>

### `AddComponent`

```rust
AddComponent
```

Add a zero-initialised component to a live entity.

<a id="rustdoc-item-2481"></a>

### `RemoveComponent`

```rust
RemoveComponent
```

Remove a component from a live entity. Removing the entity's last
component destroys the entity.

<a id="rustdoc-item-2484"></a>

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

<a id="rustdoc-item-2488"></a>

### `RestoreComponent`

```rust
RestoreComponent
```

Re-attach one component with captured field values, the inverse of
removing it.

<a id="rustdoc-item-2493"></a>

### `SetField`

```rust
SetField
```

Write one field of a component.

<a id="rustdoc-item-2498"></a>

### `SetFieldAsset`

```rust
SetFieldAsset
```

Point an asset reference field at the asset `reference` names, or clear
the field with `None`.

`reference` is a path relative to `res`, a 32-digit guid, or the name an
asset was added to the store under. The apply resolves it at the frame
boundary and loads the asset first when it is not loaded yet. The write
then behaves like [`Self::SetField`](#rustdoc-item-2493) and records the same kind of
inverse.

<a id="rustdoc-item-2503"></a>

### `SetFieldEntity`

```rust
SetFieldEntity
```

Point an entity reference field at `reference`, or clear the field with
`None`.

The handle is checked against the world when the command is applied,
so a reference to an entity that is gone by then is refused instead of
written. A write records the [`Self::SetField`](#rustdoc-item-2493) that puts back what the
field held.

<a id="rustdoc-item-2507"></a>

### `ArmEntityPick`

```rust
ArmEntityPick
```

Wait for the next scene click to name an entity reference field.

The Inspector row's target button arms it, and the scene click answers
it. Neither step is an edit, so nothing is recorded until the click
names an entity.

<a id="rustdoc-item-2513"></a>

### `SetArrayElement`

```rust
SetArrayElement
```

Write one element of a fixed-size array field.

<a id="rustdoc-item-2516"></a>

### `SetSystemEnabled`

```rust
SetSystemEnabled
```

Enable or disable a system by registration index.

<a id="rustdoc-item-2518"></a>

### `SetPaused`

```rust
SetPaused
```

Pause or resume the engine's system phase.

<a id="rustdoc-item-2522"></a>

### `SetGizmoTool`

```rust
SetGizmoTool
```

Set the transform gizmo's tool, its space or its snapping. A field left
as `None` keeps its current value.

<a id="rustdoc-item-2524"></a>

### `SetGrid`

```rust
SetGrid
```

Turn the scene grid on or off. The grid is the infinite ground plane
that the editor's view-bound surfaces draw.

<a id="rustdoc-item-2526"></a>

### `SetGizmos`

```rust
SetGizmos
```

Turn the engine's component gizmos on or off. Every component that
declares a gizmo stops drawing while this is off, which is the toolbox
row's switch.

<a id="rustdoc-item-2528"></a>

### `SetTool`

```rust
SetTool
```

Make one registered tool the active one, or clear the active tool with
`None`.

This is how a component tool is entered from the UI: its toolbox row
queues this command. The built-in tool rows reach the registry through
`SetGizmoTool`, which also owns the gizmo's mode; a component tool has
no mode of its own, so its activation is this command alone.

<a id="rustdoc-item-2531"></a>

### `SetGizmoTypeVisible`

```rust
SetGizmoTypeVisible
```

Show or hide one component type's gizmo, which is a row in the
Preferences tab. The choice is written to the preferences file, so it
survives a reload.

<a id="rustdoc-item-2532"></a>

### `CycleGizmoSpace`

```rust
CycleGizmoSpace
```

Switch the gizmo's space to the next one available to it.

The cycle is World, Local, then each frame the active tool offers, then
World again. It lives here rather than in the row that queues it, so the
toolbox, the View menu and the space chord all walk one order - and a
tool with no frames leaves the two settings' spaces cycling into each
other.

<a id="rustdoc-item-2537"></a>

### `SetElementTransforms`

```rust
SetElementTransforms
```

Move elements through the active tool: the world transforms a gizmo
drag produced.

The tool writes its own component, so this command is the undo step:
applying it first captures the transforms the tool reports, then hands
the moves to the tool's write-back. The inverse is the same command
carrying those captured transforms, which is what makes a whole drag
one step.

<a id="rustdoc-item-2541"></a>

### `InsertElements`

```rust
InsertElements
```

Insert elements through the active tool.

Each element names the id it asks for and the transform it starts with;
the tool answers the id the element ended up under, which is what the
inverse removes. An insert a tool refuses puts back the ones this
command already added, so a refused edit changes nothing.

<a id="rustdoc-item-2545"></a>

### `RemoveElements`

```rust
RemoveElements
```

Remove elements through the active tool.

Applying it first reads the transforms the tool reports for those
elements, so the inverse is an insert that puts the same elements back
where they were, under the same ids.

<a id="rustdoc-item-2299"></a>

### `RunElementMenu`

```rust
RunElementMenu
```

Run one row of the active tool's element context menu.

The tool decides what the row does, so the command is only a request:
the frame boundary asks the tool for the commands it means and applies
those in the batch's place, which makes a menu row one undo step.

<a id="rustdoc-item-2547"></a>

### `StepOnce`

```rust
StepOnce
```

Run exactly one system phase on the next frame, then pause again.

<a id="rustdoc-item-2548"></a>

### `EnterPlay`

```rust
EnterPlay
```

Start a play session: the edit world is copied aside and the game runs.

Nothing is recorded, and Stop is the only way back. A session that cannot
start reports every type it could not copy.

<a id="rustdoc-item-2549"></a>

### `ExitPlay`

```rust
ExitPlay
```

Stop the session, restore the edit world and put the editor's own state
back.

<a id="rustdoc-item-2552"></a>

### `ImportFiles`

```rust
ImportFiles
```

Copy files from outside the project into the assets directory, which is
what a drag-and-drop import queues. Undo removes the copies. A file with
the same name is overwritten.

<a id="rustdoc-item-2556"></a>

### `RemoveFiles`

```rust
RemoveFiles
```

Delete the copies an import created. This is the import's inverse and a
redoable step of its own; it also carries the source paths, so a redo
can copy the files again.

<a id="rustdoc-item-2561"></a>

### `CreateStandaloneAsset`

```rust
CreateStandaloneAsset
```

Create a standalone asset of `type_name` called `name` in `folder`,
where `folder` is relative to the asset directory.

The file holds the type's default document. An existing file is never
replaced unless the dialog asked for that. The new file is imported at
once, and the inverse deletes it.

<a id="rustdoc-item-2563"></a>

### `DeleteAssetFile`

```rust
DeleteAssetFile
```

Delete the asset file at `path`, which is relative to the asset
directory, together with its `.meta` sidecar.

The apply reads both files' bytes before it deletes them. The inverse is
the restore that puts them back, the sidecar's guid included, so the
asset keeps its identity through an undo.

<a id="rustdoc-item-2567"></a>

### `RestoreAssetFile`

```rust
RestoreAssetFile
```

Restore the asset files that a delete captured: the file's bytes and,
when it had one, the sidecar's. The inverse is the delete, so the pair
round-trips. Like the other restore commands, it never records as an
edit of its own.

<a id="rustdoc-item-2570"></a>

### `MoveAssetFile`

```rust
MoveAssetFile
```

Move or rename the asset at `from` to `to`, both relative to the
asset directory.

The `.meta` sidecar travels with the file and the asset watcher
follows the move, so the loaded asset keeps its handle and guid; the
inverse moves it back.

<a id="rustdoc-item-2572"></a>

### `WriteAssetMeta`

```rust
WriteAssetMeta
```

Write the `.meta` sidecar that the sourced asset at `path` is missing,
with the type's defaults and a fresh guid. A sidecar that already
carries a guid is left alone, so nothing is recorded for it. A sidecar
that is empty or unreadable counts as missing and is replaced. The
inverse deletes the sidecar that was written.

<a id="rustdoc-item-2575"></a>

### `SetAssetSettings`

```rust
SetAssetSettings
```

Replace the import settings of the asset at `path` - or a standalone
asset's own document - with `settings`. The inverse
carries the previous value, which the apply reads before writing.

<a id="rustdoc-item-2581"></a>

### `SetResourceField`

```rust
SetResourceField
```

Set one field of one editor-editable resource.

The engine keeps no resource reflection, so the resources this can name
are listed by hand in [`crate::resources::EDITABLE_RESOURCES`](../../resources/constant.EDITABLE_RESOURCES.md#rustdoc-item-2579), and
their fields are read and written one at a time through [`crate::gizmo`](../../gizmo/index.md#rustdoc-item-2580).
The inverse carries the previous value.

<a id="rustdoc-item-2584"></a>

### `SetSelection`

```rust
SetSelection
```

Set the shared selection. Selection changes that arrive back to back
merge into one history step through a coalesce key. The inverse carries
the previous entities and asset, so undo goes back one selection at a
time.

<a id="rustdoc-item-2588"></a>

### `SetElementSelection`

```rust
SetElementSelection
```

Select the elements of one entity, all of one kind.

The editor's tool layer records this; the ids are the tool's own and
mean nothing to the core. The entity slot is left alone, because the
elements belong to whichever entity is selected. The inverse puts the
previous elements back.

<a id="rustdoc-item-2591"></a>

### `SelectResource`

```rust
SelectResource
```

Select one world resource for the Inspector.

This is its own command rather than a third field of
[`EditorCommand::SetSelection`](#rustdoc-item-2584), because picking a resource also clears
the entity and asset slots, and undoing the pick has to bring all three
back ([`Self::RestoreSelection`](#rustdoc-item-2590)).

<a id="rustdoc-item-2590"></a>

### `RestoreSelection`

```rust
RestoreSelection
```

Restore all four selection slots as one recorded step.

This is the inverse that undoing a resource pick applies: picking a
resource clears the entity, asset and element slots, so the undo has to
bring them back instead of leaving the Inspector pointing at nothing.

<a id="rustdoc-item-2597"></a>

### `SetPreferences`

```rust
SetPreferences
```

Write values to the preferences file: one `(key, text)` pair per edited
row. The apply reads the document, changes only those keys and writes it
back, so keys other writers own survive. A pair whose text is blank
writes nothing. The file's live reader picks the new values up (history
limits, snapping steps) the next time it looks.

<a id="rustdoc-item-2598"></a>

### `SceneNew`

```rust
SceneNew
```

Start an empty scene: every entity is removed, no file is open, and the
selection and history are cleared.

This is a document action rather than an edit, so it is not recorded.
The history it replaces named entities that the old document owned, and
those handles mean nothing in the new world.

<a id="rustdoc-item-2600"></a>

### `SceneOpen`

```rust
SceneOpen
```

Open the scene at `path`, replacing the world's entities.

<a id="rustdoc-item-2601"></a>

### `SceneSave`

```rust
SceneSave
```

Write the world to the open scene, keeping its guid.

<a id="rustdoc-item-2603"></a>

### `SceneSaveAs`

```rust
SceneSaveAs
```

Write the world to `path`, taking over that file's guid when it exists
and a fresh one otherwise.

## Associated functions and methods

<a id="rustdoc-item-2468"></a>

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

<a id="rustdoc-item-2469"></a>

### `apply_recorded`

```rust
pub fn apply_recorded(engine: &mut Engine, commands: &[EditorCommand]) -> RecordedApply;
```

Applies a batch and computes the inverse of every edit it performed.

This is the single application path: [`Self::apply`](#rustdoc-item-2468) only discards the
recording. A batch becomes one history step only when every command is
an undoable edit that succeeded and produced an inverse;
[`RecordedApply::fully_invertible`](struct.RecordedApply.md#rustdoc-item-2604) reports whether that held.

The batch runs against its own copy because a restore gives its entity
a new handle mid-batch. The commands after it, and the inverses already
collected, are moved to that handle, exactly like the history entries
are. Without that, undoing a delete would restore the entity under a
new handle while the selection restore still named the destroyed one,
so the selection would come back pointing at nothing.

<a id="rustdoc-item-2606"></a>

### `apply_recorded_observed`

```rust
pub(crate) fn apply_recorded_observed(engine: &mut Engine, commands: &[EditorCommand], observer: &mut dyn CommandObserver) -> RecordedApply;
```

[`Self::apply_recorded`](#rustdoc-item-2469), reporting each applied command to `observer`.

The drain passes the editor API's hook session, whose after-callbacks
may queue follow-up commands. A follow-up runs right after the command
that queued it, inside the same history step, and never reaches the
observer again, so a callback cannot re-enter itself.

<a id="rustdoc-item-2608"></a>

### `apply_followup`

```rust
pub(in editor_state::apply) fn apply_followup(engine: &mut Engine, command: &EditorCommand, index: usize, recorded: &mut RecordedApply);
```

Applies one command a callback queued, recording its inverse into the
same batch.

A follow-up that re-creates an entity cannot be part of one step: its
fresh handle would have to move the command that queued it. The batch
reports itself as not fully invertible instead of recording half of it.

<a id="rustdoc-item-2609"></a>

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

<a id="rustdoc-item-2610"></a>

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

<a id="rustdoc-item-2612"></a>

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

Two checks in [`Self::apply_recorded`](#rustdoc-item-2469) rely on this answer: a batch
becomes one history step only when every command records, and a command
that applied marks the document unsaved only when it records. A command
that must mark the document unsaved without being undoable needs its
own predicate, not another arm here.

<a id="rustdoc-item-2613"></a>

### `touched_identifiers`

```rust
pub fn touched_identifiers(self: &Self) -> Vec<String>;
```

The component and field identifiers this command addresses.

A field identifier is written `component.field`. The history keeps the
identifiers with each entry, so a reload can drop the entries whose
component or field is gone.

<a id="rustdoc-item-2614"></a>

### `remap_entity`

```rust
pub fn remap_entity(self: &mut Self, previous: Entity, assigned: Entity);
```

Replaces one entity handle with another wherever this command names it.

The drain calls this after a restore re-created a destroyed entity under
a fresh handle: every remaining history entry has to follow the entity
to its new handle, or a later undo would target the dead one.

<a id="rustdoc-item-2470"></a>

### `family`

```rust
pub fn family(self: &Self) -> CommandFamily;
```

The applier module that applies this command.

The applier sends each command to the module this names, so a new
variant is classified here once instead of gaining an arm in every
family. This is deliberately not the source of [`Self::recordable`](#rustdoc-item-2612) or
[`Self::touched_identifiers`](#rustdoc-item-2613): those answer per variant, and one family
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
