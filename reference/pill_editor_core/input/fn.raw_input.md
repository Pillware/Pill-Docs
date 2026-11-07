<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4611"></a>

# Function `pill_editor_core::input::raw_input`

```rust
pub fn raw_input(shell_input: &crate::boundary::EguiShellInput) -> egui::RawInput;
```

Source: `editor\pill_editor_core\src\input.rs:177`

Builds one frame of egui input from the shell's events and geometry.

The engine reports the cursor position and pixel scroll deltas in physical
pixels, so they are divided by `shell_input.scale_factor`. The screen size
is already in logical points and is used as it is.

A scale factor that is zero or negative falls back to one, so the divisions
stay finite.
