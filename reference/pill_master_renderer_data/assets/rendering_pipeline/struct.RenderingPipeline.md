<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-435"></a>

# Struct `pill_master_renderer_data::assets::rendering_pipeline::RenderingPipeline`

```rust
pub struct RenderingPipeline;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\rendering_pipeline.rs:77`

The passes a frame runs, in the order they were added.

## Fields

<a id="rustdoc-item-596"></a>

### `passes`

```rust
passes: Vec<PipelinePass>
```

The passes, in the order they run. The renderer sorts the chain by each
pass's own `order` value; the order here breaks ties.

## Associated functions and methods

<a id="rustdoc-item-597"></a>

### `new`

```rust
pub fn new() -> Self;
```

An empty pipeline.

<a id="rustdoc-item-598"></a>

### `add`

```rust
pub fn add(self: &mut Self, pass: Handle<RenderPass>);
```

Appends one pass to the chain, switched on.

<a id="rustdoc-item-599"></a>

### `with_pass`

```rust
pub fn with_pass(self: Self, pass: Handle<RenderPass>) -> Self;
```

Appends one pass and returns the chain, so calls can be chained.

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
- `MirrorObject`
- `Asset`
- `MirrorValue`
- `MirrorReturn`
- `Clone`
- `Debug`
- `Default`
- `StandaloneAsset`
- `TraitAccessible<dyn Asset>`
