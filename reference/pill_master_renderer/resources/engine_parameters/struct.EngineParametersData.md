<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2146"></a>

# Struct `pill_master_renderer::resources::engine_parameters::EngineParametersData`

```rust
pub struct EngineParametersData;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\engine_parameters.rs:38`

The engine-wide uniform block a pass may read, in its GPU layout.

Fog, the frame size and the frame time describe the frame, not one pass.
Every pass reads the same buffer, so no two passes can hold copies that
disagree.

The first 16 bytes must match the HLSL `EngineParams` in
`pill_master_renderer_data/shader_sources/common_shaders/include/common.hlsl`,
which declares the fog pair and nothing after it. The rest is the engine's
own addition, and no shipped shader declares it: `frame_size` at offset 16
(xy = pixels, zw = their reciprocal) and `time` at offset 32 (x = seconds,
y = delta, z = frame). The struct is 48 bytes in total.

## Fields

<a id="rustdoc-item-2142"></a>

### `fog_color`

```rust
fog_color: [f32; 3]
```

Colour the lit shaders blend toward with distance.

<a id="rustdoc-item-2143"></a>

### `fog_density`

```rust
fog_density: f32
```

Fog thickness: how quickly the colour builds up with distance.

<a id="rustdoc-item-2144"></a>

### `frame_size`

```rust
frame_size: [f32; 4]
```

The surface size in pixels, followed by the reciprocal of each
dimension.

It exists for a pass that samples the frame at a texel offset; no
shipped shader reads it. The value comes from the buffer rather than a
pass parameter, so a resize cannot leave it stale.

<a id="rustdoc-item-2145"></a>

### `time`

```rust
time: [f32; 4]
```

x = seconds since the frame loop started, y = this frame's duration,
z = the frame's sequence number. w is unused.

## Associated functions and methods

<a id="rustdoc-item-2147"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an all-zero set of parameters.

The uniform buffer is created from these values, so every shader reads
zeros until the first frame's `update_data` call replaces them.

<a id="rustdoc-item-2148"></a>

### `update_data`

```rust
pub fn update_data(self: &mut Self, fog_density: f32, fog_color: [f32; 3], frame_size: [u32; 2], time: [f32; 4]);
```

Writes one frame's values into the buffer data, converting the surface
size on the way in.

The size comes in as pixel dimensions and is stored as pixels plus
their reciprocal. That is the form the layout declares and the form a
shader sampling at a texel offset wants. Each dimension is clamped to
at least one pixel before the division, so a minimized or
not-yet-sized surface cannot put an infinity into the buffer.

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
- `AnyBitPattern`
- `CheckedBitPattern`
- `NoUninit`
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
- `Debug`
- `Copy`
- `Clone`
- `Pod`
- `Zeroable`
- `Default`
