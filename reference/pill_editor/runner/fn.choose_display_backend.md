<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1590"></a>

# Function `pill_editor::runner::choose_display_backend`

```rust
pub(in runner) fn choose_display_backend();
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:284`

Picks the display backend the editor's windows need.

Every scene and game view is a child window of the editor window, placed in
the dock's rectangle and moved with the editor: the shell reports the
rectangle, and the view window is then told where to be. Wayland allows
neither half of that - a client cannot choose a window's position, and a
window cannot be made a child of another - so the compositor puts each view
wherever it likes and no placement is ever applied. A view would float
outside the dock and stay there while the editor moves.

The editor therefore runs as an X11 client: through XWayland when the
session is Wayland, which supports both child windows and client placement.
[`WAYLAND_ENV`] keeps the native backend, for the sessions where every view
is popped out into its own window and the docked views do not matter.

Windows has its own child windows and needs none of this.
