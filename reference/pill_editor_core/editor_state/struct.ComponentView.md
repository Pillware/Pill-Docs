<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1172"></a>

# Struct `pill_editor_core::editor_state::ComponentView`

```rust
pub struct ComponentView;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:120`

One attached component of the selected entity, with its current values.

## Fields

<a id="rustdoc-item-2747"></a>

### `type_name`

```rust
type_name: String
```

Registered component type name (the stable cross-reload key).

<a id="rustdoc-item-2748"></a>

### `persistable`

```rust
persistable: bool
```

Whether the component is persistable (schema-migrated across reloads).

<a id="rustdoc-item-2749"></a>

### `editable`

```rust
editable: bool
```

Whether the component has a non-empty field layout and is editable.

<a id="rustdoc-item-2750"></a>

### `fields`

```rust
fields: Vec<ComponentFieldView>
```

The field layout, owned by this view. The image that declared it may
be unloaded before the next capture.

<a id="rustdoc-item-2751"></a>

### `values`

```rust
values: Vec<pill_engine::FieldValue>
```

One current value per field, parallel to `fields`.

<a id="rustdoc-item-2752"></a>

### `asset_labels`

```rust
asset_labels: Vec<Option<AssetReferenceLabel>>
```

What each asset reference field names, parallel to `values`.

It holds `None` for a field that is not an asset reference. The labels
are resolved when the view is captured, because the shell cannot read
the asset store.

<a id="rustdoc-item-2754"></a>

### `entity_labels`

```rust
entity_labels: Vec<Option<EntityReferenceLabel>>
```

What each entity reference field names, parallel to `values`.

It holds `None` for a field that is not an entity reference. The labels
are resolved when the view is captured, for the same reason.

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
