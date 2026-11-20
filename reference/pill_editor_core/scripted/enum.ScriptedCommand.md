<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8908"></a>

# Enum `pill_editor_core::scripted::ScriptedCommand`

```rust
pub enum ScriptedCommand { ... }
```

Source: `editor\pill_editor_core\src\scripted.rs:48`

One parsed scripted line.

Every variant names a side effect the runner performs; the values are
owned, so a parsed command outlives the line it came from.

## Variants

<a id="rustdoc-item-8742"></a>

### `Quit`

```rust
Quit
```

`quit` - leave the editor through its own quit path.

<a id="rustdoc-item-8745"></a>

### `Palette`

```rust
Palette
```

`palette [<query>]`, `palette run`, `palette close` - open the command
palette, run its selected row, or close it.

<a id="rustdoc-item-8747"></a>

### `ConsoleFilter`

```rust
ConsoleFilter
```

`console filter <level>` - the lowest level the Console tab shows.

<a id="rustdoc-item-8749"></a>

### `ConsoleSearch`

```rust
ConsoleSearch
```

`console search <text>` - the Console tab's substring filter.

<a id="rustdoc-item-8751"></a>

### `ProblemOpen`

```rust
ProblemOpen
```

`problem open <index>` - open a Problems row, as a click would.

<a id="rustdoc-item-8752"></a>

### `SafeModeRetry`

```rust
SafeModeRetry
```

`safe_mode retry` - press the safe-mode panel's Retry button.

<a id="rustdoc-item-8754"></a>

### `PanelUnload`

```rust
PanelUnload
```

`panel unload <source>` - drop one module's liveness marker (the value
that says the module is loaded), so its panels read "module not
loaded" as they do after an unload.

<a id="rustdoc-item-8756"></a>

### `PanelRestore`

```rust
PanelRestore
```

`panel restore <source>` - bind that module's panels to a fresh
liveness marker, as a reload's re-registration does.

<a id="rustdoc-item-8759"></a>

### `PanelWindow`

```rust
PanelWindow
```

`panel window <slot> <id>` - ask the panel in that slot to open the
window it calls `id`, as clicking its own button would.

<a id="rustdoc-item-8761"></a>

### `Undock`

```rust
Undock
```

`undock <tab>` - float a dock tab into its own window.

<a id="rustdoc-item-8763"></a>

### `ActivateTab`

```rust
ActivateTab
```

`tab <tab>` - bring a dock tab to the front.

<a id="rustdoc-item-8766"></a>

### `Click`

```rust
Click
```

`click <x> <y>` - a left press and release at a point.

<a id="rustdoc-item-8769"></a>

### `RightClick`

```rust
RightClick
```

`rclick <x> <y>` - a right click, with no scene pick.

<a id="rustdoc-item-8772"></a>

### `Drag`

```rust
Drag
```

`drag <x1> <y1> <x2> <y2>` - a left-button drag. The press, the move
and the release each arrive in their own frame.

<a id="rustdoc-item-8775"></a>

### `GizmoDrag`

```rust
GizmoDrag
```

`gizmo drag <axis|plane> <dx> <dy>` - press a handle and drag it.

<a id="rustdoc-item-8777"></a>

### `GizmoPress`

```rust
GizmoPress
```

`gizmo press <axis|plane>` - press a handle without moving it.

<a id="rustdoc-item-8778"></a>

### `GizmoRelease`

```rust
GizmoRelease
```

`gizmo release` - release a synthetic gizmo drag.

<a id="rustdoc-item-8780"></a>

### `GizmoTool`

```rust
GizmoTool
```

`gizmo <translate|rotate|scale>` - switch the active tool.

<a id="rustdoc-item-8782"></a>

### `Extensions`

```rust
Extensions
```

`extensions <on|off>` - register or drop the tool extensions the
executable carries for the suites, so an area can drive the plain tool
and the extended one in one session.

<a id="rustdoc-item-8785"></a>

### `DragElement`

```rust
DragElement
```

`drag element <id> <dx> <dy> <dz>` - nudge one element of the active
tool by a world delta, as a direct drag would.

<a id="rustdoc-item-8787"></a>

### `ElementMenu`

```rust
ElementMenu
```

`element menu <item>` - run one row of the active tool's element
context menu by its id, as a click on the row does.

<a id="rustdoc-item-8789"></a>

### `Tool`

```rust
Tool
```

`tool <name>` / `tool none` - activate a registered tool, or leave every
tool with none active.

<a id="rustdoc-item-8792"></a>

### `Key`

```rust
Key
```

`key <chord>` - inject a keyboard chord.

<a id="rustdoc-item-8795"></a>

### `Dump`

```rust
Dump
```

`dump <target>` - log one piece of editor state.

<a id="rustdoc-item-8797"></a>

### `Browser`

```rust
Browser
```

`browser <folder>` - open one folder in the Assets grid.

<a id="rustdoc-item-8800"></a>

### `Camera`

```rust
Camera
```

`camera orbit|pan|dolly <delta>` - navigate the active view.

<a id="rustdoc-item-8802"></a>

### `CameraZoom`

```rust
CameraZoom
```

`camera zoom <lines>` - wheel the active view.

<a id="rustdoc-item-8806"></a>

### `Hover`

```rust
Hover
```

`hover <view> <x> <y>` - move a view's scripted pointer.

<a id="rustdoc-item-8809"></a>

### `HoverUi`

```rust
HoverUi
```

`hover ui <x> <y>` - move the shell's own pointer, as a real move would.

The hover state belongs to egui, and egui learns a position only from
an event. This line is how a suite makes a tooltip or a cursor appear
without a mouse.

<a id="rustdoc-item-8811"></a>

### `SelectAsset`

```rust
SelectAsset
```

`select asset <path>` - move the shared selection onto an asset.

<a id="rustdoc-item-8813"></a>

### `SelectEntity`

```rust
SelectEntity
```

`select entity <handle>` - move the shared selection onto an entity.

<a id="rustdoc-item-8815"></a>

### `SelectAdd`

```rust
SelectAdd
```

`select add <handle>` - extend the selection as a Ctrl-click does.

<a id="rustdoc-item-8817"></a>

### `SelectRange`

```rust
SelectRange
```

`select range <handle>` - extend the selection over the Entities list's
range from the primary, as a Shift-click does.

Reserved: the native runner answers it, the browser editor refuses it
by name, and no suite drives it - the grammar table is its only pin.

<a id="rustdoc-item-8819"></a>

### `SelectResource`

```rust
SelectResource
```

`select resource <name>` - move the shared selection onto an editable
world resource.

<a id="rustdoc-item-8822"></a>

### `SelectElement`

```rust
SelectElement
```

`select element <id>[,<id>…]` / `select element add <id>` - select
elements of the primary entity, replacing the element selection or
extending it.

The ids are the tool's own. Until the tool layer reports a kind (the
tools stage), the editor records them under the `element` kind, so the
"one kind per selection" rule has something to hold.

<a id="rustdoc-item-8826"></a>

### `PanelField`

```rust
PanelField
```

`panel field <component> <field> <value>` - queue the component-field
write a module panel's own row would queue, against the selected
entity.

<a id="rustdoc-item-8830"></a>

### `EditResource`

```rust
EditResource
```

`edit resource <field> <value>` - one recorded resource field edit.

<a id="rustdoc-item-8833"></a>

### `Toolbar`

```rust
Toolbar
```

`toolbar <create|rename|delete|meta>` - press one Assets toolbar button.

<a id="rustdoc-item-8834"></a>

### `SceneNew`

```rust
SceneNew
```

`scene new` - start an empty scene.

<a id="rustdoc-item-8836"></a>

### `SceneOpen`

```rust
SceneOpen
```

`scene open <path>` - open a `.scene` file, replacing the world.

<a id="rustdoc-item-8838"></a>

### `SceneSave`

```rust
SceneSave
```

`scene save [<path>]` - write the world to the open scene, or to
`path` when one is given.

<a id="rustdoc-item-8840"></a>

### `DialogSetName`

```rust
DialogSetName
```

`dialog set name <text>` - type into the open asset dialog's name field.

<a id="rustdoc-item-8841"></a>

### `DialogSubmit`

```rust
DialogSubmit
```

`dialog submit` - press the open asset dialog's confirm button.

<a id="rustdoc-item-8844"></a>

### `EditAsset`

```rust
EditAsset
```

`edit asset <action> ...` - queue one recorded asset-file edit.

<a id="rustdoc-item-8848"></a>

### `PickEntity`

```rust
PickEntity
```

`pick entity <entity> <component> <field>` - arm an entity reference
row, so the next scene press names its reference.

Reserved: no suite drives it, so the grammar table is its only pin.

<a id="rustdoc-item-8853"></a>

### `EditSet`

```rust
EditSet
```

`edit set <entity> <component> <field> <value>` - one recorded field edit.

<a id="rustdoc-item-8859"></a>

### `EditArray`

```rust
EditArray
```

`edit array <entity> <component> <field> <index> <value>` - one element edit.

<a id="rustdoc-item-8863"></a>

### `EditSelection`

```rust
EditSelection
```

`edit selection <component> <field> <value>` - one recorded field edit
written to every selected entity that carries the component, as the
Inspector's row queues it.

<a id="rustdoc-item-8867"></a>

### `EditAssetSettings`

```rust
EditAssetSettings
```

`edit asset-settings <path> <key> <value>` - one import-settings edit.

<a id="rustdoc-item-8870"></a>

### `EditSystem`

```rust
EditSystem
```

`edit system <index> <on|off>` - the recorded system toggle.

<a id="rustdoc-item-8873"></a>

### `EditPreference`

```rust
EditPreference
```

`edit preference <key> <value>` - one preferences row.

<a id="rustdoc-item-8877"></a>

### `EditComponent`

```rust
EditComponent
```

`edit add|remove <entity> <component>` - attach or detach a component.

<a id="rustdoc-item-8878"></a>

### `Undo`

```rust
Undo
```

`command editor.undo` - undo one step.

<a id="rustdoc-item-8879"></a>

### `Redo`

```rust
Redo
```

`command editor.redo` - redo one step.

<a id="rustdoc-item-8880"></a>

### `NewSceneView`

```rust
NewSceneView
```

`command editor.scene_new_view` - dock one more scene view.

<a id="rustdoc-item-8882"></a>

### `Reveal`

```rust
Reveal
```

`reveal <path>` - ask the file manager to show one asset's file, the way
the Assets panel's row menu does. The path is the row's key, so a
module's resource carries its `extensions/<module>/` prefix.

<a id="rustdoc-item-8886"></a>

### `PickReference`

```rust
PickReference
```

`pick reference <asset> <key> <candidate>` - choose an asset in the
picker of one settings row, by the candidate's path, and queue the same
recorded edit the row's click queues.

<a id="rustdoc-item-8889"></a>

### `Popout`

```rust
Popout
```

`popout <tab>` - move a tab into its own OS window. Add `redock` to put
the tab back in the dock instead.

<a id="rustdoc-item-8890"></a>

### `PauseToggle`

```rust
PauseToggle
```

`command editor.pause_toggle` - flip the engine's pause flag.

<a id="rustdoc-item-8891"></a>

### `Play`

```rust
Play
```

`command editor.play` - start a play session.

<a id="rustdoc-item-8892"></a>

### `Stop`

```rust
Stop
```

`command editor.stop` - stop the session and restore the edit world.

<a id="rustdoc-item-8893"></a>

### `PlayToggle`

```rust
PlayToggle
```

`command editor.play_toggle` - Play when editing, Stop when playing.

<a id="rustdoc-item-8894"></a>

### `Step`

```rust
Step
```

`command editor.step` - run one frame while paused.

<a id="rustdoc-item-8895"></a>

### `EntityCreate`

```rust
EntityCreate
```

`command editor.entity_create` - the recorded New Entity edit.

<a id="rustdoc-item-8896"></a>

### `EntityDelete`

```rust
EntityDelete
```

`command editor.entity_delete` - the recorded delete of the selection.

<a id="rustdoc-item-8897"></a>

### `SnapToggle`

```rust
SnapToggle
```

`command editor.tool_snap_toggle` - flip the gizmo's snapping.

<a id="rustdoc-item-8898"></a>

### `SpaceToggle`

```rust
SpaceToggle
```

`command editor.tool_space_toggle` - flip world/local space.

<a id="rustdoc-item-8899"></a>

### `Copy`

```rust
Copy
```

`command editor.copy` - put the selection on the OS clipboard.

<a id="rustdoc-item-8900"></a>

### `Cut`

```rust
Cut
```

`command editor.cut` - copy the selection and delete it.

<a id="rustdoc-item-8901"></a>

### `Paste`

```rust
Paste
```

`command editor.paste` - read the OS clipboard and apply it.

<a id="rustdoc-item-8903"></a>

### `Drop`

```rust
Drop
```

`drop <path>` - hand one path to the drop handler as the OS would.

<a id="rustdoc-item-8905"></a>

### `HoverFile`

```rust
HoverFile
```

`hover file <path>` - the same path as a drag preview.

<a id="rustdoc-item-8907"></a>

### `DragOut`

```rust
DragOut
```

`drag out <path>` - hand one file to the OS drag.
With no mouse button held the drag ends at once, which is what makes it
safe to smoke-test from the scripted channel.

## Associated functions and methods

<a id="rustdoc-item-8910"></a>

### `parse`

```rust
pub fn parse(line: &str) -> Result<ScriptedCommand, ParseError>;
```

Parse one line of the scripted command file.

The caller logs the line and the returned reason, so a suite sees a
refusal instead of waiting out its timeout.

#### Errors

Returns a [`ParseError`](struct.ParseError.md#rustdoc-item-8909) when the line is empty, when the verb or one
of its targets is unknown, and when an argument the verb needs is
missing or malformed. Its reason says what the verb expects.

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
