<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1655"></a>

# Struct `pill_editor_core::commands::EditorPreferences`

```rust
pub struct EditorPreferences;
```

Source: `editor\pill_editor_core\src\commands.rs:879`

The typed view of the preferences file. It holds the keys the executable
reads as values, which are the theme layer, the gizmo entry, the snapping
steps, the code editor command and the history limits.

The Preferences tab reads and writes the same document key by key through
[`crate::preferences`](../preferences/index.md#rustdoc-item-1654); the two owners only ever change their own keys.

## Fields

<a id="rustdoc-item-1645"></a>

### `theme`

```rust
theme: Option<String>
```

The user theme layer's file, absolute or relative to the state
directory.

<a id="rustdoc-item-1646"></a>

### `snapping_steps`

```rust
snapping_steps: Option<SnappingSteps>
```

Transform snapping steps, in world units and degrees.

<a id="rustdoc-item-1648"></a>

### `gizmo`

```rust
gizmo: Option<GizmoPreferences>
```

The gizmo tool's persisted state.

<a id="rustdoc-item-1650"></a>

### `code_editor_command`

```rust
code_editor_command: Option<String>
```

The command that opens the user's code editor.

<a id="rustdoc-item-1651"></a>

### `autosave_interval_seconds`

```rust
autosave_interval_seconds: Option<f64>
```

Autosave interval for the editor state, in seconds, as the file
stores it.

<a id="rustdoc-item-1652"></a>

### `history_step_cap`

```rust
history_step_cap: Option<usize>
```

Maximum undo steps kept (absent uses the history default, 500).

<a id="rustdoc-item-1653"></a>

### `history_memory_budget_mb`

```rust
history_memory_budget_mb: Option<usize>
```

Undo memory budget in megabytes (absent uses the default, 256).

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
- `DeserializeOwned`
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
- `Default`
- `Serialize`
- `Deserialize<'de>`
