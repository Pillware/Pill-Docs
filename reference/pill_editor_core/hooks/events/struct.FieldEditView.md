<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5171"></a>

# Struct `pill_editor_core::hooks::events::FieldEditView`

```rust
pub struct FieldEditView<'a>;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:97`

One field edit, as the type-erased registry hands it to a callback.

`component` and `field_name` borrow the queued command for the call only;
the values are owned copies.

## Fields

<a id="rustdoc-item-5297"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the edit targets.

<a id="rustdoc-item-5298"></a>

### `component`

```rust
component: &'a str
```

The component's registered type name.

<a id="rustdoc-item-5299"></a>

### `field_name`

```rust
field_name: &'a str
```

The field's name, as the field layer spells it.

<a id="rustdoc-item-5300"></a>

### `index`

```rust
index: Option<usize>
```

The array element the edit targets, when it targets one.

<a id="rustdoc-item-5301"></a>

### `previous`

```rust
previous: pill_engine::component_field::FieldValue
```

The value before the edit.

<a id="rustdoc-item-5302"></a>

### `current`

```rust
current: pill_engine::component_field::FieldValue
```

The value the edit proposes for a before-callback, or the applied value
for an after-callback.

<a id="rustdoc-item-5303"></a>

### `cause`

```rust
cause: FieldEditCause
```

What made the edit happen.

<a id="rustdoc-item-5304"></a>

### `phase`

```rust
phase: FieldEditPhase
```

The interaction phase the edit belongs to.

<a id="rustdoc-item-5305"></a>

### `is_primary`

```rust
is_primary: bool
```

Whether the entity is the selection's primary.

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
