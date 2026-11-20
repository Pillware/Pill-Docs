<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4704"></a>

# Struct `pill_editor_core::tools::ToolSpaceChoices`

```rust
pub struct ToolSpaceChoices;
```

Source: `editor\pill_editor_core\src\tools.rs:1652`

The tool frame each tool was last switched to, for the session.

The gizmo's space is a setting the preferences file keeps, so it can only
name World or Local. A tool frame is session state: this resource remembers
which frame a tool was on, so choosing another tool and coming back returns
to it, while a tool that was never on a frame comes back on the setting.

## Fields

<a id="rustdoc-item-11550"></a>

### `by_tool`

```rust
by_tool: std::collections::BTreeMap<String, SpaceChoice>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-11551"></a>

### `choice`

```rust
pub fn choice(self: &Self, tool: &str) -> Option<SpaceChoice>;
```

What `tool` was last on, or `None` when it was never switched.

<a id="rustdoc-item-11552"></a>

### `remember`

```rust
pub fn remember(self: &mut Self, tool: &str, space: GizmoSpace, frame: Option<u8>);
```

Records that `tool` is now on `space`, in `frame` when that is one of
the tool's frames.

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
- `Equivalent<K>`
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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Resource`
