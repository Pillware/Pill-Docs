<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5575"></a>

# Struct `pill_editor_core::hooks::events::SelectionSnapshot`

```rust
pub struct SelectionSnapshot;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:307`

The selection's four slots at one moment.

## Fields

<a id="rustdoc-item-5569"></a>

### `entities`

```rust
entities: Vec<pill_engine::Entity>
```

The selected entities, the primary last.

<a id="rustdoc-item-5570"></a>

### `asset`

```rust
asset: Option<String>
```

The selected asset's key.

<a id="rustdoc-item-5571"></a>

### `resource`

```rust
resource: Option<String>
```

The selected resource's stable name.

<a id="rustdoc-item-5572"></a>

### `element_kind`

```rust
element_kind: String
```

The element slot's kind, empty when nothing is selected.

<a id="rustdoc-item-5573"></a>

### `element_owner`

```rust
element_owner: Option<pill_engine::Entity>
```

The entity the selected elements belong to.

<a id="rustdoc-item-5574"></a>

### `elements`

```rust
elements: Vec<u64>
```

The selected element ids.

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
