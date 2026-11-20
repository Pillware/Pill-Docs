<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-616"></a>

# Struct `pill_editor_shell::shell::inspector_fields::AssetRowInput`

```rust
pub struct AssetRowInput<'a>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:65`

What one asset reference row draws from: the field, its component and
the selection it writes to, and the project's assets the picker offers.

## Fields

<a id="rustdoc-item-606"></a>

### `entity`

```rust
entity: Entity
```

The primary entity the row describes.

<a id="rustdoc-item-607"></a>

### `component`

```rust
component: &'a ComponentView
```

The component section the row belongs to.

<a id="rustdoc-item-608"></a>

### `index`

```rust
index: usize
```

The field's position in the component's field list.

<a id="rustdoc-item-609"></a>

### `field`

```rust
field: &'a str
```

The field's registered name.

<a id="rustdoc-item-610"></a>

### `asset_type`

```rust
asset_type: Option<&'a str>
```

The registered asset type the field references, when recorded.

<a id="rustdoc-item-611"></a>

### `tooltip`

```rust
tooltip: Option<&'a str>
```

The field's `[Tooltip]`, if it declared one.

<a id="rustdoc-item-612"></a>

### `targets`

```rust
targets: &'a [Entity]
```

Every entity the edit reaches (the primary first).

<a id="rustdoc-item-613"></a>

### `details`

```rust
details: &'a [EntityDetail]
```

The selected entities' details, for the mixed-value marker.

<a id="rustdoc-item-614"></a>

### `assets`

```rust
assets: &'a [AssetListing]
```

The project's assets, as the Assets tab lists them.

<a id="rustdoc-item-615"></a>

### `engine_assets`

```rust
engine_assets: &'a [EngineAsset]
```

The store's own assets that no file backs: what the picker offers beside
the listing's rows, badged as the engine's.

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
