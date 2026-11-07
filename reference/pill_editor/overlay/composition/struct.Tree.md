<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-350"></a>

# Struct `pill_editor::overlay::composition::Tree`

```rust
pub struct Tree;
```

Source: `editor\pill_editor\src\overlay.rs:418`

One window's composition tree: the composition device, a `topmost`
target on the window, and the visual whose content becomes the
overlay's swapchain.

## Fields

<a id="rustdoc-item-343"></a>

### `device`

```rust
device: windows::Win32::Graphics::DirectComposition::IDCompositionDevice
```

The composition device; every tree change is committed through it.

<a id="rustdoc-item-346"></a>

### `_target`

```rust
_target: windows::Win32::Graphics::DirectComposition::IDCompositionTarget
```

The target on the window: the root the visual is set on. Held for
as long as the tree, so the root stays alive.

<a id="rustdoc-item-348"></a>

### `visual`

```rust
visual: windows::Win32::Graphics::DirectComposition::IDCompositionVisual
```

The visual whose content becomes the overlay's swapchain.

## Associated functions and methods

<a id="rustdoc-item-351"></a>

### `new`

```rust
pub fn new(window: &Window) -> Result<Tree, String>;
```

Create the tree over `window`, with the visual on top of the
window's child surfaces.

#### Errors

Returns a message when the window has no Win32 handle, when the
composition device, the target or the visual cannot be created,
when the visual cannot be set as the target's root, or when the
first commit fails.

<a id="rustdoc-item-353"></a>

### `visual_pointer`

```rust
pub fn visual_pointer(self: &Self) -> *mut c_void;
```

The visual's COM interface pointer, which `wgpu`'s DX12 backend
borrows to build the overlay surface.

<a id="rustdoc-item-355"></a>

### `commit`

```rust
pub fn commit(self: &Self) -> Result<(), String>;
```

Publish the tree: the composition device only shows a change once
it is committed.

#### Errors

Returns a message when the composition device refuses the commit.

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
