<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3516"></a>

# Struct `pill_editor_core::preferences::PreferencesView`

```rust
pub struct PreferencesView;
```

Source: `editor\pill_editor_core\src\preferences.rs:174`

The file's values as the tab shows them.

It holds one display string per editable key, the parsed icon size the
badges are drawn with, and the project's remembered gizmo entry.

## Fields

<a id="rustdoc-item-6326"></a>

### `values`

```rust
values: std::collections::BTreeMap<String, String>
```

One display string per editable field, keyed like the fields.

<a id="rustdoc-item-6327"></a>

### `gizmo_icon_size`

```rust
gizmo_icon_size: f32
```

The scene badges' icon size, in points. The shell draws with the number
rather than with the row's text, so the view parses it from the same
document the rows come from.

<a id="rustdoc-item-6328"></a>

### `project`

```rust
project: Option<String>
```

The project key the per-project entry is remembered under.

<a id="rustdoc-item-6329"></a>

### `project_gizmo`

```rust
project_gizmo: crate::commands::GizmoProjectPreferences
```

The project's remembered gizmo entry, as the file holds it. A file with
no entry for this project leaves it at the defaults.

<a id="rustdoc-item-6330"></a>

### `project_remembered`

```rust
project_remembered: bool
```

Whether the file carries the project's entry at all.

## Associated functions and methods

<a id="rustdoc-item-6331"></a>

### `from_document`

```rust
pub fn from_document(document: &Map<String, Value>, project: Option<&str>) -> Self;
```

Builds the view from one parsed document.

`project` names the per-project entry to read from `gizmo.projects`. A
name the file does not hold leaves `project_gizmo` at its defaults and
`project_remembered` false.

<a id="rustdoc-item-6333"></a>

### `seed_buffers`

```rust
pub fn seed_buffers(self: &Self) -> BTreeMap<String, String>;
```

Returns a copy of the rows the tab's draft buffers start from.

<a id="rustdoc-item-6334"></a>

### `text`

```rust
pub fn text(self: &Self, key: &str) -> &str;
```

Returns one row's display text, or an empty string when the table has
no such row.

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
- `Default`
