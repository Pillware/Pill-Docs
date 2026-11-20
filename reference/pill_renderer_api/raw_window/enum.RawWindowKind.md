<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-976"></a>

# Enum `pill_renderer_api::raw_window::RawWindowKind`

```rust
pub enum RawWindowKind { ... }
```

Source: `rendering\pill_renderer_api\src\raw_window.rs:44`

The platform whose handles a [`RawWindowData`](struct.RawWindowData.md#rustdoc-item-198) carries.

## Variants

<a id="rustdoc-item-970"></a>

### `Win32`

```rust
Win32
```

Windows: `window` holds the `HWND`, and `window_aux` the `HINSTANCE`,
or 0 when there is none.

<a id="rustdoc-item-971"></a>

### `Xlib`

```rust
Xlib
```

X11 through Xlib: `window` holds the window id and `window_aux` the
visual id, or 0 when there is none. `display` holds the `Display*`, or
0, and `screen` the screen number.

<a id="rustdoc-item-972"></a>

### `Xcb`

```rust
Xcb
```

X11 through XCB: `window` holds the window id and `window_aux` the
visual id, or 0 when there is none. `display` holds the connection, or
0, and `screen` the screen number.

<a id="rustdoc-item-973"></a>

### `Wayland`

```rust
Wayland
```

Wayland: `window` holds the `wl_surface*` and `display` the
`wl_display*`.

<a id="rustdoc-item-974"></a>

### `AppKit`

```rust
AppKit
```

macOS: `window` is the `NSView*`.

<a id="rustdoc-item-975"></a>

### `WebCanvas`

```rust
WebCanvas
```

The web: `window` points at the `JsValue` of the page's
`HtmlCanvasElement`, as winit hands it out. It is only meaningful
inside the wasm module that owns that value.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
