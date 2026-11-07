<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5771"></a>

# Struct `pill_editor_core::panels::PanelContext`

```rust
pub struct PanelContext<'a>;
```

Source: `editor\pill_editor_core\src\panels.rs:162`

What a panel reads and writes while it draws.

Borrowed for the call only: a panel must not keep any of it past the frame,
and none of it names a type from the panel's own crate, so nothing here can
dangle when that module unloads.

## Fields

<a id="rustdoc-item-6022"></a>

### `frames_per_second`

```rust
frames_per_second: f32
```

The editor's smoothed frame rate.

<a id="rustdoc-item-6023"></a>

### `selected_entity`

```rust
selected_entity: Option<pill_engine::Entity>
```

The selected entity, when there is one.

<a id="rustdoc-item-6024"></a>

### `entities`

```rust
entities: &'a [PanelEntityRow]
```

The world's entity rows, copied for the pass that draws the panels.

<a id="rustdoc-item-6025"></a>

### `detail`

```rust
detail: Option<&'a PanelEntityDetail>
```

The selected entity's components, when there is a selection.

<a id="rustdoc-item-6026"></a>

### `window`

```rust
window: Option<&'a str>
```

The window this draw is for: `Some` when the panel is drawing one of
its own windows, `None` when it is drawing its docked tab.

<a id="rustdoc-item-6027"></a>

### `requested_window`

```rust
requested_window: Option<&'a str>
```

A window id the editor asked this panel to open - the scripted channel's
stand-in for clicking the panel's own button.

<a id="rustdoc-item-6028"></a>

### `answer`

```rust
answer: Option<&'a PanelAnswer>
```

The answer a modal window took, for one draw: the panel acts on it and
the shell forgets it afterwards.

<a id="rustdoc-item-5792"></a>

### `commands`

```rust
commands: &'a mut Vec<PanelCommand>
```

The commands this panel asks for. They are applied after the draw,
never from inside it.

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
