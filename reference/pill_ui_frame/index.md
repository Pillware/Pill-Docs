<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-571"></a>

# pill_ui_frame API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The plain draw data a UI producer builds and a renderer draws.

## Responsibilities

- [`draw`](draw/index.md#rustdoc-item-274): the draw vocabulary a backend consumes. [`DrawList`](draw/struct.DrawList.md#rustdoc-item-236) holds the
  vertices, the indices and one command list of clip changes and draws,
  with the values they use ([`UiVertex`](draw/struct.UiVertex.md#rustdoc-item-194), [`DrawCommand`](draw/enum.DrawCommand.md#rustdoc-item-237), [`Color`](draw/struct.Color.md#rustdoc-item-4),
  [`Rect`](draw/struct.Rect.md#rustdoc-item-106), [`TextureId`](draw/struct.TextureId.md#rustdoc-item-148)).
- [`frame`](frame/index.md#rustdoc-item-388): a frame of UI output. [`UiFrame`](frame/struct.UiFrame.md#rustdoc-item-353) holds one [`UiDraw`](frame/struct.UiDraw.md#rustdoc-item-317) per
  surface, and the frame carries the textures those lists sample.
- [`texture`](texture/index.md#rustdoc-item-350): the versioned texture set ([`UiTextureSet`](texture/struct.UiTextureSet.md#rustdoc-item-352), [`UiTexture`](texture/struct.UiTexture.md#rustdoc-item-480),
  [`UiTextureFilter`](texture/enum.UiTextureFilter.md#rustdoc-item-435)). A backend uploads a texture again when its revision
  changes, so a rebuilt backend uploads what it lacks instead of drawing
  nothing.
- [`slot`](slot/index.md#rustdoc-item-390): the world resource ([`UiFrameSlot`](slot/struct.UiFrameSlot.md#rustdoc-item-392)) that carries a frame from
  the producer to the renderer.

## Design

These types cross DLL boundaries: one DLL builds the UI data and another
draws it (`pill_renderer_api::RenderFrame.ui`). They live in their own
shared crate so every artifact that builds or draws UI uses the same
types, and so the renderer contract can carry them without depending on
the UI library. Everything here is owned plain data.

## Module contents

### Modules
- [`draw`](draw/index.md#rustdoc-item-274) — The draw vocabulary a backend consumes.
- [`frame`](frame/index.md#rustdoc-item-388) — A frame of UI output.
- [`slot`](slot/index.md#rustdoc-item-390) — The world resource that carries a frame from the producer to the renderer.
- [`texture`](texture/index.md#rustdoc-item-350) — The versioned textures a frame carries.

## Re-exports

- [`pub use draw::Color;`](draw/struct.Color.md#rustdoc-item-4)
- [`pub use draw::DrawCommand;`](draw/enum.DrawCommand.md#rustdoc-item-237)
- [`pub use draw::DrawList;`](draw/struct.DrawList.md#rustdoc-item-236)
- [`pub use draw::Rect;`](draw/struct.Rect.md#rustdoc-item-106)
- [`pub use draw::TextureId;`](draw/struct.TextureId.md#rustdoc-item-148)
- [`pub use draw::UiVertex;`](draw/struct.UiVertex.md#rustdoc-item-194)
- [`pub use frame::UiDraw;`](frame/struct.UiDraw.md#rustdoc-item-317)
- [`pub use frame::UiFrame;`](frame/struct.UiFrame.md#rustdoc-item-353)
- [`pub use slot::UiFrameSlot;`](slot/struct.UiFrameSlot.md#rustdoc-item-392)
- [`pub use texture::UiTexture;`](texture/struct.UiTexture.md#rustdoc-item-480)
- [`pub use texture::UiTextureFilter;`](texture/enum.UiTextureFilter.md#rustdoc-item-435)
- [`pub use texture::UiTextureSet;`](texture/struct.UiTextureSet.md#rustdoc-item-352)
