<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-462"></a>

# Enum `pill_master_renderer::chain::PassPlan`

```rust
pub(crate) enum PassPlan<'a> { ... }
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:103`

One pass the renderer will record.

## Variants

<a id="rustdoc-item-455"></a>

### `Geometry`

```rust
Geometry
```

Draws instances, batched by material, into the pass's targets.

The pass draws the queue items in `ranges`. A position there is a
position in the frame's sorted queue, which is also the instance's
position in the instance buffer, so nothing is copied. A pass that takes
the whole queue - the built-in chain's shape - has one range; a pass
filtered by shader has one range per run of that shader.

The first pass that names a shader and writes only the surface also
takes the runs no pass in the chain claimed, so an assigned material is
never left off the screen.

<a id="rustdoc-item-461"></a>

### `Fullscreen`

```rust
Fullscreen
```

Three vertices and no vertex buffers, reading what earlier passes wrote.

## Associated functions and methods

<a id="rustdoc-item-463"></a>

### `label`

```rust
pub(crate) fn label(self: &Self) -> &str;
```

Pass name, used as the wgpu render-pass label and in the chain log.

<a id="rustdoc-item-464"></a>

### `outputs`

```rust
pub(crate) fn outputs(self: &Self) -> &[PassOutput<'_>];
```

Where this pass writes, its own target first.

<a id="rustdoc-item-465"></a>

### `clears`

```rust
pub(crate) fn clears(self: &Self) -> bool;
```

Whether this pass opens the targets it writes.

<a id="rustdoc-item-466"></a>

### `draws`

```rust
pub(crate) fn draws(self: &Self) -> usize;
```

How many instances this pass draws. A fullscreen pass reports one, for
its triangle.

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
