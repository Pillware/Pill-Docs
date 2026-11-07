<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-195"></a>

# Struct `pill_renderer_api::raw_window::RawWindowData`

```rust
pub struct RawWindowData;
```

Source: `rendering\pill_renderer_api\src\raw_window.rs:77`

A window's platform handles, as plain data.

Only the fields [`RawWindowKind`](enum.RawWindowKind.md#rustdoc-item-904) names for `kind` are meaningful; every
other field is zero.

## Fields

<a id="rustdoc-item-939"></a>

### `kind`

```rust
kind: RawWindowKind
```

Which platform the handles belong to.

<a id="rustdoc-item-940"></a>

### `window`

```rust
window: u64
```

The window, as a handle, an id or a pointer, depending on `kind`.

<a id="rustdoc-item-941"></a>

### `window_aux`

```rust
window_aux: u64
```

A second window-side value, which only some platforms use.

<a id="rustdoc-item-942"></a>

### `display`

```rust
display: u64
```

The display connection, on the platforms that have one.

<a id="rustdoc-item-943"></a>

### `screen`

```rust
screen: i32
```

The X11 screen number. Zero on every other platform.

## Associated functions and methods

<a id="rustdoc-item-944"></a>

### `from_window`

```rust
pub fn from_window<impl HasWindowHandle + HasDisplayHandle + ?Sized: HasWindowHandle + HasDisplayHandle + ?Sized>(window: &impl HasWindowHandle + HasDisplayHandle + ?Sized) -> Result<Self, RendererError>;
```

Reads the platform handles out of `window`.

#### Errors

Returns [`RendererError::SurfaceCreation`](../error/enum.RendererError.md#rustdoc-item-349) when the window cannot give
its handles right now, when its platform is not one this type carries,
or when its window and display handles come from different platforms.

<a id="rustdoc-item-947"></a>

### `from_raw`

```rust
pub fn from_raw(window: RawWindowHandle, display: RawDisplayHandle) -> Result<Self, RendererError>;
```

Builds the plain data from handles that were already taken out of a
window.

#### Errors

Returns [`RendererError::SurfaceCreation`](../error/enum.RendererError.md#rustdoc-item-349) when the platform is not one
this type carries, or when the window and display handles come from
different platforms.

<a id="rustdoc-item-950"></a>

### `to_raw`

```rust
pub fn to_raw(self: &Self) -> Result<(RawWindowHandle, RawDisplayHandle), RendererError>;
```

Returns the `raw-window-handle` values a GPU surface is created from.

#### Errors

Returns [`RendererError::SurfaceCreation`](../error/enum.RendererError.md#rustdoc-item-349) when a handle the platform
needs is missing: the Win32 window handle, the XCB window id, the
Wayland surface or display, the AppKit view, or the web canvas. An Xlib
window id is not checked.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
