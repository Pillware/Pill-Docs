<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-480"></a>

# Function `pill_editor::overlay::hwnd_of`

```rust
pub fn hwnd_of(window: &winit::window::Window) -> Option<windows::Win32::Foundation::HWND>;
```

Source: `editor\pill_editor\src\overlay.rs:384`

The window's `HWND`, as the composition target needs it. Returns `None`
when the window's raw handle is not a Win32 one.
