<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-479"></a>

# Struct `pill_editor_shell_egui_editor::shell::settle::FrameRequests`

```rust
pub struct FrameRequests;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\settle.rs:61`

The requests one shell pass could not act on, because the dock and its
tabs were borrowed while it drew.

Each field holds one request: a tab that asked to pop out or come back, a
menu item that asked for one more scene view or a quit, a tile drag that
left the windows. The tabs and menus write the value where they raise the
request, through `EditorTabViewer::deferred`, and this stage reads it back
from there. So a request has one home, and nothing is copied between the
pass and the stage that applies it.

## Fields

<a id="rustdoc-item-474"></a>

### `drag_out`

```rust
drag_out: Option<String>
```

The asset path a tile drag handed over. The shell cannot start an OLE
drag itself (a drag the OS carries into another application), so the
executable does it.

<a id="rustdoc-item-475"></a>

### `tab_popout`

```rust
tab_popout: Option<EditorTab>
```

The tab a tab menu asked to move out into its own window.

<a id="rustdoc-item-476"></a>

### `tab_redock`

```rust
tab_redock: Option<SurfaceIndex>
```

The floating surface whose tabs a tab menu asked to bring back into
the dock.

<a id="rustdoc-item-477"></a>

### `new_scene_view`

```rust
new_scene_view: bool
```

Whether the Window menu asked for one more scene view.

<a id="rustdoc-item-478"></a>

### `quit_requested`

```rust
quit_requested: bool
```

Whether a menu asked the editor to quit. The executable saves the dock
layout and then ends the run.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Default`
