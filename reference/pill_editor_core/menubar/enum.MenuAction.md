<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7440"></a>

# Enum `pill_editor_core::menubar::MenuAction`

```rust
pub enum MenuAction { ... }
```

Source: `editor\pill_editor_core\src\menubar.rs:154`

What a menu item asks the editor to do, as plain data.

The shell turns an action into the same calls the tabs, the toolbox and
the scripted channel make. Nothing here touches the world.

## Variants

<a id="rustdoc-item-7470"></a>

### `Inert`

```rust
Inert
```

Nothing. The row is disabled, so its action does not apply.

<a id="rustdoc-item-7473"></a>

### `Queue`

```rust
Queue
```

Queue a recorded step: the label it records under and the commands it
carries.

<a id="rustdoc-item-7474"></a>

### `CreateAsset`

```rust
CreateAsset
```

Open the create-asset dialog.

<a id="rustdoc-item-7475"></a>

### `CreateScene`

```rust
CreateScene
```

Open the same dialog to create a scene, with the scene type chosen.

<a id="rustdoc-item-7476"></a>

### `SaveSceneAs`

```rust
SaveSceneAs
```

Open the same dialog to write the current world as a scene.

<a id="rustdoc-item-7477"></a>

### `WriteAssetMeta`

```rust
WriteAssetMeta
```

Write the selected asset's missing `.meta` sidecar.

<a id="rustdoc-item-7478"></a>

### `Undo`

```rust
Undo
```

Undo the newest recorded step.

<a id="rustdoc-item-7479"></a>

### `Redo`

```rust
Redo
```

Redo the newest undone step.

<a id="rustdoc-item-7481"></a>

### `ActivateTab`

```rust
ActivateTab
```

Bring a dock tab to the front.

<a id="rustdoc-item-7482"></a>

### `NewSceneView`

```rust
NewSceneView
```

Dock one more scene view, with its own camera and toolbox.

<a id="rustdoc-item-7483"></a>

### `TogglePlay`

```rust
TogglePlay
```

Start a play session, or stop the one that is running. The toolbar's
first button and the View menu's Play row both carry it.

<a id="rustdoc-item-7484"></a>

### `About`

```rust
About
```

Open the About window.

<a id="rustdoc-item-7485"></a>

### `Quit`

```rust
Quit
```

Quit the editor.

<a id="rustdoc-item-7487"></a>

### `Clipboard`

```rust
Clipboard
```

Copy, cut or paste. The shell queues the request, and the executable's
OS clipboard bridge carries it out.

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
