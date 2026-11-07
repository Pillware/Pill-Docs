<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Struct `pill_renderer_api::api::HeadlessRenderer`

```rust
pub struct HeadlessRenderer;
```

Source: `rendering\pill_renderer_api\src\api.rs:292`

Stub renderer for frontends that run without a GPU surface.

Nothing reaches a GPU. Resize, viewport, surface readiness and asset
invalidation do nothing, [`PillRenderer::render`](trait.PillRenderer.md#rustdoc-item-2) returns
[`FrameOutcome::Skipped`](enum.FrameOutcome.md#rustdoc-item-1), and the default methods answer with no picks and
no previews. [`PillRenderer::attach_surface`](trait.PillRenderer.md#rustdoc-item-194) keeps its default, which
refuses a second surface. A headless frame loop therefore runs unchanged.

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
- `PillRenderer`
