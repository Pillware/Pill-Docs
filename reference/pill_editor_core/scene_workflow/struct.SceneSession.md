<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6657"></a>

# Struct `pill_editor_core::scene_workflow::SceneSession`

```rust
pub struct SceneSession;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:53`

The editor's document state: the scene file that is open and the unsaved
marker.

## Fields

<a id="rustdoc-item-6655"></a>

### `open`

```rust
open: Option<OpenScene>
```

The scene file the world came from, or `None` when no file backs it
(a new scene).

<a id="rustdoc-item-6656"></a>

### `dirty`

```rust
dirty: bool
```

Whether an undoable command has run since the scene was last saved or
opened.

## Associated functions and methods

<a id="rustdoc-item-6658"></a>

### `ensure`

```rust
pub fn ensure(world: &mut World);
```

Register the resource, and keep the value already in the world, so a
reload does not reset the open scene.

<a id="rustdoc-item-6659"></a>

### `title`

```rust
pub fn title(self: &Self) -> String;
```

The open scene's display name: the scene's file name, or `untitled`,
with ` *` appended while the scene is marked dirty.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Default`
- `Resource`
