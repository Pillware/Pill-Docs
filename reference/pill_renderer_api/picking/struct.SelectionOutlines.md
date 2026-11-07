<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-804"></a>

# Struct `pill_renderer_api::picking::SelectionOutlines`

```rust
pub struct SelectionOutlines;
```

Source: `rendering\pill_renderer_api\src\picking.rs:42`

The entities a renderer outlines, in one colour.

## Fields

<a id="rustdoc-item-1215"></a>

### `entities`

```rust
entities: Vec<pill_engine::Entity>
```

The entities to outline. An entity that draws nothing shows no outline.

<a id="rustdoc-item-1216"></a>

### `color`

```rust
color: [f32; 4]
```

The outline colour, linear RGBA.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Default`
- `Resource`
