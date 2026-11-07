<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-347"></a>

# Module `pill_ui_frame::texture`

Source: `rendering\pill_ui_frame\src\texture.rs:1`

The versioned textures a frame carries.
The versioned texture set a UI frame carries, so a backend rebuilt mid-run
can upload what it lacks instead of drawing nothing.

## Responsibilities

- [`UiTextureSet`](struct.UiTextureSet.md#rustdoc-item-349): the textures whose content changed since the producer
  last carried them, each with a revision number that only goes up, plus
  the textures to free.
- [`UiTexture`](struct.UiTexture.md#rustdoc-item-474): one texture's size, sampling and whole image at this
  revision, as owned plain data.

## Design

The revision decides what gets uploaded. A painter remembers the revision
it applied for each texture, and uploads the image again whenever the
carried revision is a different number. The producer therefore carries a
texture only when its revision changed, not every texture every frame
([`UiFrame`](../frame/struct.UiFrame.md#rustdoc-item-350)).

A carried set is applied once per frame, before any surface decides whether
it draws. The textures belong to the frame update, not to a surface, so a
frame that draws nothing - a minimized window, a surface that may not
present yet - still hands them over, and the next drawn frame has them.
Because the painter remembers the revisions it applied, applying the same
set twice in one frame uploads nothing the second time; that is an
optimisation, not the rule.

A painter that starts with no textures at all needs more than that set,
because nothing has changed by then. A renderer module that was just
rebuilt asks the producer to send every texture again through
[`UiFrameSlot::request_texture_resend`](../slot/struct.UiFrameSlot.md#rustdoc-item-395),
and the producer carries its whole set again when the request number
changes. An entry always carries the whole image rather than a patch, so a
re-carried texture needs no history to apply.

Every buffer is an [`Arc`] allocated by the code that produced it and
handed over as plain data. A project reload may drop the producer while a
renderer still holds the frame, so the bytes must be owned by the data, not
borrowed from the producer.

## Module contents

### Structs
- [`UiTexture`](struct.UiTexture.md#rustdoc-item-474) — One texture sampled by a frame's draw lists, at one revision.
- [`UiTextureSet`](struct.UiTextureSet.md#rustdoc-item-349) — The textures a frame carries to the backend, and the ones it frees.

### Enums
- [`UiTextureFilter`](enum.UiTextureFilter.md#rustdoc-item-430) — How a backend samples a UI texture.
