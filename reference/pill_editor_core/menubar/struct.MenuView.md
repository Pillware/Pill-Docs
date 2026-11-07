<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5448"></a>

# Struct `pill_editor_core::menubar::MenuView`

```rust
pub struct MenuView<'a>;
```

Source: `editor\pill_editor_core\src\menubar.rs:118`

The values the menus are built from: the frame's snapshot, the selection
and the registry's command rows.

The menu model reads nothing else, and never the world, so the shell and
the tests build the same rows from the same values.

## Fields

<a id="rustdoc-item-5445"></a>

### `snapshot`

```rust
snapshot: &'a crate::editor_state::EditorSnapshot
```

The engine's captured state: the gizmo settings, the grid, the asset
rows and the history's depths.

<a id="rustdoc-item-5446"></a>

### `selection`

```rust
selection: &'a crate::editor_state::EditorSelection
```

The shared selection the enablement rules read.

<a id="rustdoc-item-5447"></a>

### `commands`

```rust
commands: &'a [crate::commands::CommandView]
```

The registered commands in registration order. A row exists when one
of these names this menu and the model has an action for it.

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
