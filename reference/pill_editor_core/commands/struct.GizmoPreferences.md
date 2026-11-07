<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1649"></a>

# Struct `pill_editor_core::commands::GizmoPreferences`

```rust
pub struct GizmoPreferences;
```

Source: `editor\pill_editor_core\src\commands.rs:928`

The gizmo tool's persisted state.

The top-level fields hold the last-used values; `projects` remembers a
choice per project, keyed by the project directory's name, so moving
between projects brings each one's tool back.

## Fields

<a id="rustdoc-item-1737"></a>

### `mode`

```rust
mode: Option<crate::gizmo::GizmoMode>
```

The last active mode, when one was chosen.

<a id="rustdoc-item-1739"></a>

### `space`

```rust
space: Option<crate::gizmo::GizmoSpace>
```

The last active space, when one was chosen.

<a id="rustdoc-item-1741"></a>

### `snap`

```rust
snap: Option<bool>
```

Whether dragging snapped, when the toggle was used.

<a id="rustdoc-item-1742"></a>

### `projects`

```rust
projects: std::collections::BTreeMap<String, GizmoProjectPreferences>
```

Per-project overrides, by project directory name.

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
