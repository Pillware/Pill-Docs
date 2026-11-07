<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-563"></a>

# pill_ui_frame API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The plain draw data a UI producer builds and a renderer draws.

## Responsibilities

- [`draw`](draw/index.md#rustdoc-item-271): the draw vocabulary a backend consumes. [`DrawList`](draw/struct.DrawList.md#rustdoc-item-233) holds the
  vertices, the indices and one command list of clip changes and draws,
  with the values they use ([`UiVertex`](draw/struct.UiVertex.md#rustdoc-item-191), [`DrawCommand`](draw/enum.DrawCommand.md#rustdoc-item-234), [`Color`](draw/struct.Color.md#rustdoc-item-4),
  [`Rect`](draw/struct.Rect.md#rustdoc-item-106), [`TextureId`](draw/struct.TextureId.md#rustdoc-item-148)).
- [`frame`](frame/index.md#rustdoc-item-385): a frame of UI output. [`UiFrame`](frame/struct.UiFrame.md#rustdoc-item-350) holds one [`UiDraw`](frame/struct.UiDraw.md#rustdoc-item-314) per
  surface, and the frame carries the textures those lists sample.
- [`texture`](texture/index.md#rustdoc-item-347): the versioned texture set ([`UiTextureSet`](texture/struct.UiTextureSet.md#rustdoc-item-349), [`UiTexture`](texture/struct.UiTexture.md#rustdoc-item-474),
  [`UiTextureFilter`](texture/enum.UiTextureFilter.md#rustdoc-item-430)). A backend uploads a texture again when its revision
  changes, so a rebuilt backend uploads what it lacks instead of drawing
  nothing.
- [`slot`](slot/index.md#rustdoc-item-387): the world resource ([`UiFrameSlot`](slot/struct.UiFrameSlot.md#rustdoc-item-389)) that carries a frame from
  the producer to the renderer.

## Design

These types cross DLL boundaries: one DLL builds the UI data and another
draws it (`pill_renderer_api::RenderFrame.ui`). They live in their own
shared crate so every artifact that builds or draws UI uses the same
types, and so the renderer contract can carry them without depending on
the UI library. Everything here is owned plain data.

## Module contents

### Modules
- [`draw`](draw/index.md#rustdoc-item-271) — The draw vocabulary a backend consumes.
- [`frame`](frame/index.md#rustdoc-item-385) — A frame of UI output.
- [`slot`](slot/index.md#rustdoc-item-387) — The world resource that carries a frame from the producer to the renderer.
- [`texture`](texture/index.md#rustdoc-item-347) — The versioned textures a frame carries.

## Re-exports

- [`pub use draw::Color;`](draw/struct.Color.md#rustdoc-item-4)
- [`pub use draw::DrawCommand;`](draw/enum.DrawCommand.md#rustdoc-item-234)
- [`pub use draw::DrawList;`](draw/struct.DrawList.md#rustdoc-item-233)
- [`pub use draw::Rect;`](draw/struct.Rect.md#rustdoc-item-106)
- [`pub use draw::TextureId;`](draw/struct.TextureId.md#rustdoc-item-148)
- [`pub use draw::UiVertex;`](draw/struct.UiVertex.md#rustdoc-item-191)
- [`pub use frame::UiDraw;`](frame/struct.UiDraw.md#rustdoc-item-314)
- [`pub use frame::UiFrame;`](frame/struct.UiFrame.md#rustdoc-item-350)
- [`pub use slot::UiFrameSlot;`](slot/struct.UiFrameSlot.md#rustdoc-item-389)
- [`pub use texture::UiTexture;`](texture/struct.UiTexture.md#rustdoc-item-474)
- [`pub use texture::UiTextureFilter;`](texture/enum.UiTextureFilter.md#rustdoc-item-430)
- [`pub use texture::UiTextureSet;`](texture/struct.UiTextureSet.md#rustdoc-item-349)
