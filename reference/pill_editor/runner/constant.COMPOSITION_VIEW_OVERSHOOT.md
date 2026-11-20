<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-898"></a>

# Constant `pill_editor::runner::COMPOSITION_VIEW_OVERSHOOT`

```rust
pub(in runner) const COMPOSITION_VIEW_OVERSHOOT: f64 = 16.0;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:192`

How far, in logical points, a view's window extends past its tab body while
the composition overlay draws the UI above it.

The overlay paints every panel pixel over the child window, so the window is
grown to run under the tab body's padding and outline: without that, whatever
is behind the viewport shows around its edge. Only that posture may grow it.
The window-surface posture has no overlay - the child window is drawn above
the UI - so there the extra margin covers the tab bar and the panels beside
the view, which is what a view that is "too large" looks like.
