<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2865"></a>

# Module `pill_master_renderer::stream_buffer`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\stream_buffer.rs:1`

A GPU buffer rewritten every surface, shared by the overlay and the UI
painter.
A GPU buffer rewritten for each surface, kept between frames.

## Responsibilities

- [`StreamBuffer`]: uploads one surface's bytes into one GPU buffer, and
  replaces that buffer with a larger one when the bytes do not fit.

## Design

The overlay's geometry and the UI painter's lists are rebuilt on the
processor for every surface, so neither can be uploaded once and reused as
it is. A [`StreamBuffer`] keeps one GPU buffer and rewrites it for each
surface, so a frame allocates only when a surface's bytes outgrow it.

A queue write is applied at the next submission, and each surface submits
its own frame. Writing the buffer once per surface is therefore enough for
every surface of a frame. A caller must never write the same buffer twice
before one submission, because the second write replaces the first.

## Module contents

### Structs
- [`StreamBuffer`](struct.StreamBuffer.md#rustdoc-item-1363) — A buffer that is rewritten for each surface and replaced by a larger one
