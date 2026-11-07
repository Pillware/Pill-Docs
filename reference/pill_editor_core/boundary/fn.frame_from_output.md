<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-449"></a>

# Function `pill_editor_core::boundary::frame_from_output`

```rust
pub fn frame_from_output(context: &egui::Context, egui_output: egui::FullOutput) -> EguiShellFrame;
```

Source: `editor\pill_editor_core\src\boundary.rs:299`

Builds the frame the frontend drains, from egui's output for one pass.

egui describes its output as a list of primitives. A callback primitive
carries arbitrary user data, which cannot cross the DLL boundary, so every
primitive except a mesh is dropped here.
