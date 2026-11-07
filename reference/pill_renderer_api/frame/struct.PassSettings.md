<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-548"></a>

# Struct `pill_renderer_api::frame::PassSettings`

```rust
pub struct PassSettings;
```

Source: `rendering\pill_renderer_api\src\frame.rs:114`

How one pass draws: what it renders, where it writes, and how the draw is
set up.

All three places that write a pass down use this one block: the `RenderPass`
asset a game builds, the document its `.render_pass` file holds, and the
[`ResolvedPass`](struct.ResolvedPass.md#rustdoc-item-546) the frame carries. A new setting is therefore one field
here plus one line in [`Self::default`], instead of a field with its own
default in each of those types.

The block is serializable and flattened into the pass document, so a
`.render_pass` file carries these fields at its top level, beside the shader
and parameter maps.

## Fields

<a id="rustdoc-item-538"></a>

### `kind`

```rust
kind: PassKind
```

What the pass draws.

<a id="rustdoc-item-539"></a>

### `target`

```rust
target: PassTarget
```

Where the pass reads and writes.

<a id="rustdoc-item-540"></a>

### `extra_targets`

```rust
extra_targets: Vec<PassTarget>
```

Further targets the pass writes in the same draw, in the order the
shader's `SV_TARGET1`, `SV_TARGET2` and so on name them.

This is how a geometry pass leaves a normal buffer behind for a later
pass to read: one draw writes several pictures.

<a id="rustdoc-item-541"></a>

### `target_scale`

```rust
target_scale: u32
```

Divisor for the size of the targets this pass writes: 2 makes them half
the surface, and 1 (the default) keeps them at full size.

A target belongs to the chain rather than to one pass, so the first pass
that names it decides its size. Drawing at half size is how the
expensive, blurry steps - ambient occlusion, depth of field, a bloom
level - cost a quarter of the pixels.

Only a fullscreen pass can be scaled. A pass's attachments must all have
one size, and a geometry or skybox pass pairs its colour target with the
surface's depth buffer, so the renderer refuses a scaled pass of either
kind rather than draw it at the wrong size.

<a id="rustdoc-item-542"></a>

### `blend`

```rust
blend: bool
```

Whether the pass blends its output over what the target already holds,
instead of replacing it.

<a id="rustdoc-item-543"></a>

### `depth_write`

```rust
depth_write: bool
```

Whether the pass writes depth. A translucent pass reads depth without
writing it, so it does not hide what is drawn after it.

<a id="rustdoc-item-544"></a>

### `cull`

```rust
cull: CullMode
```

Which faces the pass drops.

<a id="rustdoc-item-545"></a>

### `order`

```rust
order: u8
```

Ordering key: a lower value runs first. Passes with equal orders keep
the order the pipeline lists them in.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
- `Default`
