<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3780"></a>

# Struct `pill_editor_core::gizmo::ResourceField`

```rust
pub struct ResourceField;
```

Source: `editor\pill_editor_core\src\gizmo.rs:70`

One editable field of the gizmo settings.

It carries the name a command addresses the field by, the label the
Inspector's row shows, and the functions that read and write it.

## Fields

<a id="rustdoc-item-3776"></a>

### `name`

```rust
name: &'static str
```

The field's name in a `SetResourceField` command.

<a id="rustdoc-item-3777"></a>

### `label`

```rust
label: &'static str
```

The label the Inspector's row shows.

<a id="rustdoc-item-3778"></a>

### `read`

```rust
read: fn (_: &GizmoSettings) -> pill_engine::FieldValue
```

Read the field out of the settings.

<a id="rustdoc-item-3779"></a>

### `write`

```rust
write: fn (_: &mut GizmoSettings, _: &pill_engine::FieldValue) -> Result<pill_engine::FieldValue, String>
```

Write the field and return its previous value, which the command's
inverse restores.

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
- `Copy`
- `Debug`
