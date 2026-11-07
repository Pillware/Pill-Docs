<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-141"></a>

# Struct `pill_renderer_api::api::RenderMetrics`

```rust
pub struct RenderMetrics;
```

Source: `rendering\pill_renderer_api\src\api.rs:98`

Frame statistics from the most recent [`PillRenderer::render`](trait.PillRenderer.md#rustdoc-item-2) call that
drew a frame.

The windowed renderer fills these in as it works. The host reads them to
log the first presented frame and to notice when a pass stops drawing. A
renderer that has not drawn leaves every field at zero.

## Fields

<a id="rustdoc-item-136"></a>

### `prepare_micros`

```rust
prepare_micros: u64
```

CPU time spent preparing the frame: syncing the assets, building the
draw queue, and building and uploading the instance buffer.

<a id="rustdoc-item-137"></a>

### `submit_micros`

```rust
submit_micros: u64
```

CPU time spent planning each extra surface's chain and submitting every
drawn surface to the GPU.

<a id="rustdoc-item-138"></a>

### `passes_with_draws`

```rust
passes_with_draws: u32
```

Passes of the frame's chain that had at least one draw.

This counts passes, not GPU draw commands. One pass draws all the
instance runs it was planned with, using as many commands as those runs
need. Compare it with `passes` to see how much of the chain drew; it
says nothing about batching.

<a id="rustdoc-item-139"></a>

### `passes`

```rust
passes: u32
```

Passes of the frame's chain, whether or not they drew anything.

<a id="rustdoc-item-140"></a>

### `instance_bytes`

```rust
instance_bytes: u64
```

Bytes of instance data the frame's draw queue carried.

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
- `Default`
