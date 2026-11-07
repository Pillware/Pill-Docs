<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-543"></a>

# Struct `pill_master_renderer::chain::GpuChain`

```rust
pub(crate) struct GpuChain;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:230`

The GPU side of a chain: one pass object per pass, and the plan a frame is
recorded from.

The pass objects are rebuilt only when the chain, the resource epoch or the
surface size changes, or when [`invalidate`](#rustdoc-item-542) is called. A
plan is asked for on every frame, and it borrows the frame it was made from,
so it never outlives that frame.

## Fields

<a id="rustdoc-item-535"></a>

### `passes`

```rust
passes: Vec<PassSlot>
```

One entry per pass of the current chain, in the chain's order.

<a id="rustdoc-item-536"></a>

### `built_from`

```rust
built_from: Option<(Vec<crate::frame::ResolvedPass>, u64)>
```

The chain those passes were built from, with the resource epoch they
were built at.

Held only for comparison: [`ResolvedPass`] derives equality, so a field
added to it is compared here without any change in this file, which a
hand-built string could not promise.

<a id="rustdoc-item-537"></a>

### `frame_inputs`

```rust
frame_inputs: Option<(u64, u64, u32, u32)>
```

What `built_from` was last checked against: the frame's chain generation,
the resource epoch and the surface size. One tuple comparison per frame,
with no chain cloned or compared, until one of those three changes.

<a id="rustdoc-item-538"></a>

### `offscreen_key`

```rust
offscreen_key: Option<(Vec<(String, u32)>, u32, u32)>
```

The offscreen layout the current targets were built for: each offscreen
target a pass names, with that pass's scale, and the surface size.

<a id="rustdoc-item-539"></a>

### `skipped_passes`

```rust
skipped_passes: std::collections::HashSet<String>
```

Passes this chain cannot record yet, remembered so each one is named
once in the log instead of once per frame.

<a id="rustdoc-item-541"></a>

### `chain_log`

```rust
chain_log: Option<String>
```

The chain last written to the log, so a chain that does not change does
not write a line per frame.

## Associated functions and methods

<a id="rustdoc-item-544"></a>

### `new`

```rust
pub(crate) fn new() -> Self;
```

A chain with nothing built and nothing planned.

<a id="rustdoc-item-545"></a>

### `passes`

```rust
pub(crate) fn passes(self: &Self) -> &[PassSlot];
```

The built pass objects, in chain order, for the frame recorder to index.

<a id="rustdoc-item-546"></a>

### `ensure`

```rust
pub(crate) fn ensure(self: &mut Self, chain: &[ResolvedPass], assets: &AssetManager, chain_generation: u64, context: ChainContext<'_>);
```

Build the GPU objects the chain needs, when something they depend on
changed.

Two comparisons decide. The offscreen layout - every target and scale
the chain declares, at the surface size - decides the render target
textures. Everything else decides the pass pipelines and their bind
groups: the chain itself, compared field by field, and the resource
epoch.

An unchanged frame costs one tuple comparison. The chain is cloned and
compared only after the chain generation, the resource epoch or the
surface size has changed.

This never fails. A pass that would not build is stored as
[`PassSlot::Unsupported`](enum.PassSlot.md#rustdoc-item-376) and named in the log, so one bad shader does
not cost the frame the passes that would have drawn.

<a id="rustdoc-item-547"></a>

### `plan`

```rust
pub(crate) fn plan<'a>(self: &mut Self, chain: &'a [ResolvedPass], render_queue: &'a [RenderQueueItem], shader_handles: &GpuColumn<RendererShaderHandle>) -> Vec<PassPlan<'a>>;
```

Hand each pass the draws it was given.

A geometry pass that names a shader draws the instances shaded by that
shader and leaves the rest to the other passes. One that names no shader
draws every instance, each with the pipeline its own material names,
which is what the built-in chain does. The first pass that names a shader
and writes only the surface also takes the instances no pass claimed.
A fullscreen pass draws nothing but its triangle, and reads what earlier
passes left in the targets it names.

<a id="rustdoc-item-542"></a>

### `invalidate`

```rust
pub(crate) fn invalidate(self: &mut Self);
```

Forget the pass objects and what they were built from, so the next frame
rebuilds them.

The offscreen targets are kept on purpose: they depend on the chain's
layout and the surface size, and an asset edit - which is what calls
this - changes neither. Use [`invalidate_targets`](#rustdoc-item-548)
when the surface size changed.

<a id="rustdoc-item-549"></a>

### `forget_passes`

```rust
pub(in chain) fn forget_passes(self: &mut Self);
```

Drop the built passes, the keys they were built from, and what was said
about them.

The skip set keeps the log quiet: a pass that stays broken is named once,
not once per frame. It therefore has to be cleared together with the
slots it describes, or a pass that breaks, is fixed and breaks again
would stay silent. Every path that replaces the slots goes through here.

<a id="rustdoc-item-548"></a>

### `invalidate_targets`

```rust
pub(crate) fn invalidate_targets(self: &mut Self);
```

Forget the offscreen layout as well, so the targets are rebuilt too.

Use this when the surface size changed: every target is built at the
surface size, so a new size makes all of them wrong.

<a id="rustdoc-item-550"></a>

### `log`

```rust
pub(crate) fn log(self: &mut Self, plan: &[PassPlan<'_>]);
```

Write the chain to the log, once per change.

Each pass is named with the number of draws it was handed. That number
is what shows whether the chain runs the passes the game asked for, or
quietly falls back to the built-in pass. A line per frame would bury
everything else, and an unchanged chain is the normal case.

<a id="rustdoc-item-551"></a>

### `report_skip`

```rust
pub(in chain) fn report_skip(self: &mut Self, pass_name: &str, reason: &str);
```

Name a pass the renderer cannot record, once rather than once per frame.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
