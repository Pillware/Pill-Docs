<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5349"></a>

# Struct `pill_editor_core::hooks::events::FieldEdit`

```rust
pub struct FieldEdit<'a, T: ComponentFields>;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:124`

One field edit, typed by the component and its generated field enum.

A callback registered with [`FieldEditHookRequest::new`](../requests/struct.FieldEditHookRequest.md#rustdoc-item-5348)
receives this view only for the component type it named; an edit of another
component, or of a field the type does not have, never reaches it.

## Fields

<a id="rustdoc-item-5338"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the edit targets.

<a id="rustdoc-item-5339"></a>

### `field`

```rust
field: <T as >::Field
```

The field, as the component's generated enum names it.

<a id="rustdoc-item-5341"></a>

### `field_name`

```rust
field_name: &'a str
```

The field's text name, for log lines.

<a id="rustdoc-item-5342"></a>

### `index`

```rust
index: Option<usize>
```

The array element the edit targets, when it targets one.

<a id="rustdoc-item-5343"></a>

### `previous`

```rust
previous: pill_engine::component_field::FieldValue
```

The value before the edit.

<a id="rustdoc-item-5344"></a>

### `current`

```rust
current: pill_engine::component_field::FieldValue
```

The value the edit proposes for a before-callback, or the applied value
for an after-callback.

<a id="rustdoc-item-5345"></a>

### `cause`

```rust
cause: FieldEditCause
```

What made the edit happen.

<a id="rustdoc-item-5346"></a>

### `phase`

```rust
phase: FieldEditPhase
```

The interaction phase the edit belongs to.

<a id="rustdoc-item-5347"></a>

### `is_primary`

```rust
is_primary: bool
```

Whether the entity is the selection's primary.

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
