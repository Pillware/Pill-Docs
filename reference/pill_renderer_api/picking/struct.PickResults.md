<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-198"></a>

# Struct `pill_renderer_api::picking::PickResults`

```rust
pub struct PickResults;
```

Source: `rendering\pill_renderer_api\src\picking.rs:150`

The answers renderers delivered and nobody took yet.

## Fields

<a id="rustdoc-item-1403"></a>

### `results`

```rust
results: Vec<PickResult>
```

Answers in the order the renderers delivered them.

## Associated functions and methods

<a id="rustdoc-item-1404"></a>

### `take`

```rust
pub fn take(self: &mut Self) -> Vec<PickResult>;
```

Takes every answer delivered so far.

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
