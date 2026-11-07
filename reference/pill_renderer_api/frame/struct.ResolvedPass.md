<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-546"></a>

# Struct `pill_renderer_api::frame::ResolvedPass`

```rust
pub struct ResolvedPass;
```

Source: `rendering\pill_renderer_api\src\frame.rs:254`

One pass of the chain the renderer runs, with every handle resolved to a
key.

Its maps are `BTreeMap`s, never `HashMap`s. An empty `HashMap` does not
allocate: it points at a static inside the binary that created it. This
value lives in the world and outlives that binary - a project or module that
built it is reloaded, and its retired image is eventually unmapped - so
reading such a map afterwards faults. A `BTreeMap` holds no such pointer.

Equality is the renderer's rebuild test: it rebuilds a chain when a pass is
no longer equal to the pass its GPU objects were built from. A field added
here is therefore compared without anything else having to learn about it.

## Fields

<a id="rustdoc-item-716"></a>

### `name`

```rust
name: String
```

Label used in logs, profiling and error messages.

<a id="rustdoc-item-717"></a>

### `shader`

```rust
shader: Option<AssetKey>
```

Key of the shader the pass draws with.

`None` leaves a geometry pass drawing each instance through the shader
its own material names. A fullscreen or skybox pass with no shader is
not drawn.

<a id="rustdoc-item-718"></a>

### `settings`

```rust
settings: PassSettings
```

What the pass draws, where it writes, and how the draw is set up.

<a id="rustdoc-item-719"></a>

### `parameters`

```rust
parameters: std::collections::BTreeMap<String, MaterialParameter>
```

Uniform parameters, packed exactly as a material packs its own.

<a id="rustdoc-item-721"></a>

### `inputs`

```rust
inputs: std::collections::BTreeMap<String, String>
```

Offscreen targets the pass samples, by the texture slot they bind to.

<a id="rustdoc-item-722"></a>

### `textures`

```rust
textures: std::collections::BTreeMap<String, AssetKey>
```

Textures from loaded assets that the pass samples, by the texture slot
they bind to. Each is an asset key, the same kind of key `shader` is.

## Associated functions and methods

<a id="rustdoc-item-723"></a>

### `builtin`

```rust
pub fn builtin() -> Self;
```

A geometry pass that draws every instance over the swapchain.

A project that sets no pipeline runs this pass, and a project's own
single-pass pipeline has the same shape.

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
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
