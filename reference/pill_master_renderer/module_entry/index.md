<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3090"></a>

# Module `pill_master_renderer::module_entry`

Source: `extensions\pill_master_renderer\pill_master_renderer\src\module_entry.rs:1`

The C ABI a host drives this renderer through when it loads it as a module.

Public so the wrapper crate's expansion of `__pill_renderer_entry_points!`
can call into it; the exported symbols come from that macro.
The C ABI a host uses to drive this renderer after loading it as a module.

## Responsibilities

- Export `pill_renderer_attach`, which builds a renderer on a window that
  the host describes as [`RawWindowData`], and `pill_renderer_detach`,
  which drops that renderer inside this image.
- Keep panics and failures from crossing the C boundary: both exports catch
  unwinds, and an attach that fails is logged here and returns null.

## Design

Each operation is its own named export instead of one export that takes an
operation number. A host that finds an export missing therefore fails while
loading, and the error names the export it wanted.

The renderer crosses the boundary as a `Box<Box<dyn PillRenderer>>` turned
into a raw pointer. The host calls the trait's methods through that pointer
and gives it back to `pill_renderer_detach` to be dropped. This image
allocated the renderer, so this image frees it, and the drop code runs
while this image is still mapped.

Calling a trait object across the boundary only works when the host and the
module compiled the same `pill_renderer_api`. The workspace requires the
same for `pill_core.dll`: one dependency graph per process.

The functions here are plain library code. The `#[no_mangle]` symbols come
from `__pill_renderer_entry_points!`, which the renderer's wrapper crate
expands. They cannot be declared here: this library is also linked into the
host's own dependency graph, and two renderers there would define the same
two symbols.

## Module contents

### Functions
- [`attach_to_window`](fn.attach_to_window.md#rustdoc-item-3088) — Builds a renderer on the window `window` describes.
- [`detach_backend`](fn.detach_backend.md#rustdoc-item-3087) — Drops a renderer returned by [`attach_to_window`], inside this image.
