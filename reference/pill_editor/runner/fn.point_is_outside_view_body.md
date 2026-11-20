<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1780"></a>

# Function `pill_editor::runner::point_is_outside_view_body`

```rust
pub(in runner) fn point_is_outside_view_body(point: (f32, f32), origin: (f32, f32), scale_factor: f32, body: pill_editor_core::boundary::ShellRect) -> bool;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4104`

Whether one scene view's child-local pixel lies outside the viewport body
the shell reported, once the child window's origin and the display scale
have been applied.

The composition overlay grows each view's window past the viewport body so
no seam shows under the UI, and the shell's chrome - the tab bar above the
viewport, the splitters beside it - is drawn over that margin. A press in
the margin belongs to the UI, not the scene.
