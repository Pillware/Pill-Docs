<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-498"></a>

# Struct `pill_editor::runner::PopoutWindow`

```rust
pub(in runner) struct PopoutWindow;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3393`

One popped-out tab's window: the window, its own
swapchain and its own egui renderer.

A pop-out is a plain top-level window, not a child: the point of popping a
panel out is putting it on another monitor, where a child window cannot go.

## Fields

<a id="rustdoc-item-1263"></a>

### `window`

```rust
window: std::sync::Arc<winit::window::Window>
```

The window the pass is presented into.

<a id="rustdoc-item-1264"></a>

### `surface`

```rust
surface: crate::overlay::OverlaySurface
```

The window's swapchain, in the opaque window posture.

<a id="rustdoc-item-1265"></a>

### `renderer`

```rust
renderer: egui_wgpu::Renderer
```

egui's renderer for this window. Its textures belong to this renderer,
which is why each pop-out owns one: two renderers cannot share a
texture namespace across swapchains.

<a id="rustdoc-item-1266"></a>

### `presented`

```rust
presented: bool
```

Whether a frame has reached the swapchain yet: the first success logs
the suite's `[editor] popout presented` line.

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
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
