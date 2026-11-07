<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-442"></a>

# Struct `pill_ui_theme::overrides::ShadowOverride`

```rust
pub struct ShadowOverride;
```

Source: `ui\pill_ui_theme\src\overrides.rs:242`

One shadow's overridable fields.

Each number is stored wider than egui's own field, so the merge can refuse
an out-of-range value and name the item it came from. serde alone would
reject it without that path.

## Fields

<a id="rustdoc-item-531"></a>

### `offset`

```rust
offset: Option<[i32; 2]>
```

The offset in points. It must fit egui 0.36's `[i8; 2]`.

<a id="rustdoc-item-532"></a>

### `blur`

```rust
blur: Option<i32>
```

The blur radius in points. It must fit egui 0.36's `u8`.

<a id="rustdoc-item-533"></a>

### `spread`

```rust
spread: Option<i32>
```

The spread in points. It must fit egui 0.36's `u8`.

<a id="rustdoc-item-534"></a>

### `color`

```rust
color: Option<String>
```

The colour, written as `#rrggbb` or `#rrggbbaa`.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `Default`
- `Deserialize<'de>`
- `StructuralPartialEq`
- `PartialEq`
- `Serialize`
