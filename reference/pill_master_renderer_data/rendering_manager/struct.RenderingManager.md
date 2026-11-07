<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1633"></a>

# Struct `pill_master_renderer_data::rendering_manager::RenderingManager`

```rust
pub struct RenderingManager;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\rendering_manager.rs:35`

The renderer's pipeline selection, carried as one optional handle.

## Fields

<a id="rustdoc-item-1634"></a>

### `pipeline`

```rust
pipeline: Option<pill_engine::Handle<crate::RenderingPipeline>>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1636"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates a manager with no pipeline, which leaves the renderer on its
built-in chain.

<a id="rustdoc-item-1637"></a>

### `set_pipeline`

```rust
pub fn set_pipeline(self: &mut Self, pipeline: Handle<RenderingPipeline>);
```

Hands the renderer a pipeline to run.

This call is what makes the renderer build a new chain. On its next
frame the renderer resolves the passes, checks that every offscreen
target a pass reads was declared by an earlier pass, and creates the GPU
pipelines it does not have yet. Until then it keeps drawing the chain it
already has.

<a id="rustdoc-item-1638"></a>

### `pipeline`

```rust
pub fn pipeline(self: &Self) -> Option<Handle<RenderingPipeline>>;
```

Returns the pipeline the renderer should run, or `None` when none is set.

<a id="rustdoc-item-1639"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Drops the pipeline, which puts the renderer back on its built-in chain.

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
- `Resource`
- `Clone`
- `Debug`
- `Default`
