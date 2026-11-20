<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-650"></a>

# Struct `pill_editor_shell::shell::inspector_fields::EntityRowInput`

```rust
pub struct EntityRowInput<'a>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:91`

What one entity reference row draws from: the field, its component and the
selection it writes to, and the scene's entities the picker offers.

## Fields

<a id="rustdoc-item-642"></a>

### `entity`

```rust
entity: Entity
```

The primary entity the row describes.

<a id="rustdoc-item-643"></a>

### `component`

```rust
component: &'a ComponentView
```

The component section the row belongs to.

<a id="rustdoc-item-644"></a>

### `index`

```rust
index: usize
```

The field's position in the component's field list.

<a id="rustdoc-item-645"></a>

### `field`

```rust
field: &'a str
```

The field's registered name.

<a id="rustdoc-item-646"></a>

### `tooltip`

```rust
tooltip: Option<&'a str>
```

The field's `[Tooltip]`, if it declared one.

<a id="rustdoc-item-647"></a>

### `targets`

```rust
targets: &'a [Entity]
```

Every entity the edit reaches (the primary first).

<a id="rustdoc-item-648"></a>

### `details`

```rust
details: &'a [EntityDetail]
```

The selected entities' details, for the mixed-value marker.

<a id="rustdoc-item-649"></a>

### `scene`

```rust
scene: &'a [EntityListEntry]
```

The scene's entities, as the Entities tab lists them.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
