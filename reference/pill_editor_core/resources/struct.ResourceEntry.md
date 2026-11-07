<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6579"></a>

# Struct `pill_editor_core::resources::ResourceEntry`

```rust
pub struct ResourceEntry;
```

Source: `editor\pill_editor_core\src\resources.rs:24`

One editable world resource.

## Fields

<a id="rustdoc-item-6576"></a>

### `name`

```rust
name: &'static str
```

The stable name a command addresses the resource by - its type path.

<a id="rustdoc-item-6577"></a>

### `label`

```rust
label: &'static str
```

The label the Inspector's section shows.

<a id="rustdoc-item-6578"></a>

### `fields`

```rust
fields: &'static [gizmo::ResourceField]
```

The editable fields, in row order. This is the resource's own table,
the same one its write path goes through.

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
