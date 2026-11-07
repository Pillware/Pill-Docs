<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-201"></a>

# Struct `pill_renderer_api::preview::PreviewResults`

```rust
pub struct PreviewResults;
```

Source: `rendering\pill_renderer_api\src\preview.rs:143`

The previews the renderer finished.

## Fields

<a id="rustdoc-item-1591"></a>

### `results`

```rust
results: Vec<PreviewImage>
```

Every answer handed over since the last [`Self::take`](#rustdoc-item-1590).

## Associated functions and methods

<a id="rustdoc-item-1590"></a>

### `take`

```rust
pub fn take(self: &mut Self) -> Vec<PreviewImage>;
```

Takes every answer waiting and leaves the list empty.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Default`
- `Resource`
