<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-626"></a>

# Struct `pill_editor_shell_egui_editor::shell::inspector_fields::EntityRowInput`

```rust
pub struct EntityRowInput<'a>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:75`

What one entity reference row draws from: the field, its component and the
selection it writes to, and the scene's entities the picker offers.

## Fields

<a id="rustdoc-item-618"></a>

### `entity`

```rust
entity: Entity
```

The primary entity the row describes.

<a id="rustdoc-item-619"></a>

### `component`

```rust
component: &'a ComponentView
```

The component section the row belongs to.

<a id="rustdoc-item-620"></a>

### `index`

```rust
index: usize
```

The field's position in the component's field list.

<a id="rustdoc-item-621"></a>

### `field`

```rust
field: &'a str
```

The field's registered name.

<a id="rustdoc-item-622"></a>

### `tooltip`

```rust
tooltip: Option<&'a str>
```

The field's `[Tooltip]`, if it declared one.

<a id="rustdoc-item-623"></a>

### `targets`

```rust
targets: &'a [Entity]
```

Every entity the edit reaches (the primary first).

<a id="rustdoc-item-624"></a>

### `details`

```rust
details: &'a [EntityDetail]
```

The selected entities' details, for the mixed-value marker.

<a id="rustdoc-item-625"></a>

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
