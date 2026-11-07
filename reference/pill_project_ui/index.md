<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-433"></a>

# pill_project_ui API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The game UI: an egui context a project draws through, painted by the
renderer.

## Responsibilities

- [`GameUi`](struct.GameUi.md#rustdoc-item-305): the egui context, the published pointer and keyboard claims,
  and the texture mirror.
- [`GameUi::run`](struct.GameUi.md#rustdoc-item-277): one pass that takes the engine's input, builds the
  frame's draw list and textures, and publishes them into the world's
  [`UiFrameSlot`].
- [`install`](fn.install.md#rustdoc-item-423) and [`install_with_theme`](fn.install_with_theme.md#rustdoc-item-422): put the resource into a project's
  world with its theme, plus the system that re-applies the theme when the
  override file is reimported.
- [`mod@convert`](convert/index.md#rustdoc-item-1), [`input`](input/index.md#rustdoc-item-129), [`textures`](textures/index.md#rustdoc-item-10): the three pieces it composes.

## Design

This crate is a shared `dylib`, so the egui context and what it holds -
fonts, widget state, textures - outlive a project reload. [`GameUi`](struct.GameUi.md#rustdoc-item-305) lives
here too, so every reload sees the same type. The rule that
`pill_editor_core` states applies here as well: nothing a module defines
may be stored in the context.

This pass is the only producer for the world's [`UiFrameSlot`], and it
publishes a frame built from `pill_ui_frame` types. The renderer therefore
never sees egui, and no renderer links this crate. A game gates its own
input on [`GameUi::wants_pointer`](struct.GameUi.md#rustdoc-item-319) / [`GameUi::wants_keyboard`](struct.GameUi.md#rustdoc-item-320).

## Module contents

### Modules
- [`convert`](convert/index.md#rustdoc-item-1) — The tessellated output to `pill_ui_frame`.
- [`input`](input/index.md#rustdoc-item-129) — The engine's input snapshot and the bridge to egui's input.
- [`textures`](textures/index.md#rustdoc-item-10) — The texture mirror a rebuilt painter can upload from.

### Structs
- [`GameUi`](struct.GameUi.md#rustdoc-item-305) — The game's UI: one egui context, the theme it paints with, and the result
- [`ResolvedFonts`](struct.ResolvedFonts.md#rustdoc-item-394) — The fonts a theme's paths resolved to.
- [`ThemeInstall`](struct.ThemeInstall.md#rustdoc-item-355) — A project's UI theme: its code default and an optional override file.

### Functions
- [`install`](fn.install.md#rustdoc-item-423) — Put a [`GameUi`] into `engine`'s world with the fallback theme, the frame
- [`install_with_theme`](fn.install_with_theme.md#rustdoc-item-422) — Install a project's theme: the code default merged with an optional
- [`register_reload_system`](fn.register_reload_system.md#rustdoc-item-428) — Register the re-apply system once per project generation.
- [`resolve_fonts`](fn.resolve_fonts.md#rustdoc-item-425) — Resolve a theme's font paths through the project's asset store.
- [`set_font_family`](fn.set_font_family.md#rustdoc-item-427) — Put one family's bytes where [`kit::style::ThemeFonts`] holds them.
- [`theme_reload_system`](fn.theme_reload_system.md#rustdoc-item-429) — Re-merge and re-apply the theme when the override or a font changed.

### Constants
- [`FONT_FAMILIES`](constant.FONT_FAMILIES.md#rustdoc-item-280) — How many families a theme may name, in [`kit::style::ThemeFonts`] order.
- [`PRIMARY_SURFACE`](constant.PRIMARY_SURFACE.md#rustdoc-item-278) — The surface id of the window a game draws into.
- [`THEME_SYSTEM_NAME`](constant.THEME_SYSTEM_NAME.md#rustdoc-item-281) — The name the theme re-apply system is registered under.

## Re-exports

- `pub use egui;`
- `pub use pill_ui_frame::UiFrameSlot;`
- `pub use pill_ui_kit;`
- `pub use pill_ui_theme::Theme;`
- `pub use pill_ui_theme::ThemeOverrides;`
- `pub use pill_ui_theme::ThemePathScope;`
- [`pub use convert::convert;`](convert/fn.convert.md#rustdoc-item-2)
- [`pub use convert::external_id;`](convert/fn.external_id.md#rustdoc-item-5)
- [`pub use convert::straight_color;`](convert/fn.straight_color.md#rustdoc-item-7)
- [`pub use input::raw_input;`](input/fn.raw_input.md#rustdoc-item-166)
- [`pub use input::InputFrame;`](input/struct.InputFrame.md#rustdoc-item-29)
- [`pub use input::InputMemory;`](input/struct.InputMemory.md#rustdoc-item-132)
