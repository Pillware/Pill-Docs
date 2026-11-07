<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Enum `pill_renderer_api::api::FrameOutcome`

```rust
pub enum FrameOutcome { ... }
```

Source: `rendering\pill_renderer_api\src\api.rs:43`

What one [`PillRenderer::render`](trait.PillRenderer.md#rustdoc-item-2) call did with the frame it was given.

A skipped frame is not a failure. The caller keeps running and shows
nothing new this frame.

## Variants

<a id="rustdoc-item-0"></a>

### `Presented`

```rust
Presented
```

The frame was drawn and submitted to the surface.

<a id="rustdoc-item-1"></a>

### `Skipped`

```rust
Skipped
```

Nothing was drawn: every surface was minimized, could not present yet,
or had no camera this frame - or the renderer is a stub with no GPU
behind it.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
