<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-280"></a>

# Struct `pill_player::static_project::StaticRenderer`

```rust
pub struct StaticRenderer;
```

Source: `hosting\pill_player\src\static_project.rs:117`

The renderer a windowed shipping build links, as the two functions this
crate needs from it.

Function pointers rather than a dependency, because this crate names no
renderer type. The shipping bundle, the one crate that depends on the
renderer, fills this in.

## Fields

<a id="rustdoc-item-620"></a>

### `init`

```rust
init: fn (_: &mut pill_engine::Engine) -> u32
```

The renderer's registration (`pill_master_renderer::register`), which
adds the `rendering` system.

<a id="rustdoc-item-621"></a>

### `attach`

```rust
attach: StaticRendererAttachFn
```

Builds a backend on a window (`pill_master_renderer::attach`), as a
future: a native frontend blocks on it once, a web frontend awaits it.

#### Safety

The window must outlive the backend built on it. That is the renderer
module's own contract. This crate meets it by keeping the backend in a
field declared before the window it was built on.

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
- `Copy`
