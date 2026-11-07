<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8137"></a>

# Module `pill_editor_core::style`

Source: `editor\pill_editor_core\src\style.rs:1`

The editor's egui theme.
The editor's egui look: one `Theme` built in code, and the palette the
shell reads.

## Responsibilities

- [`default_theme`]: the editor's look as theme tokens, built in code.
- [`ThemeLayer`] and [`UserThemeSelection`]: where a theme layer comes
  from - the code default, the user's file, the project's - and the merge
  that applies them in order.
- [`apply_theme`] and [`apply`]: the one entry point that installs a theme,
  and the re-install a pop-out window or the no-shell fallback needs.
- [`palette`] and the role accessors ([`text`], [`panel`], [`accent`], ...):
  the colours the shell needs beyond egui's own visuals.
- [`dock_style`]: the `egui_dock` styling (flat tabs merged with their
  bodies, thin separators) built from the same tokens.

## Design

Styling is egui `Style`/`Visuals` data, never CSS: the shell asks for a role
and holds no colour value of its own. Once the record is seeded,
[`apply_theme`] is the only code that writes it. The record lives in this
crate - a shared dylib that never reloads - so a shell reload leaves it
untouched, and the reloaded shell reads the same roles. Everything the
record holds is an owned copy - tokens, layer paths, font bytes - so nothing
a module image owns outlives it.

## Module contents

### Structs
- [`Palette`](struct.Palette.md#rustdoc-item-8164) — The editor's colour roles as egui colours, copied from the last installed
- [`ResolvedTheme`](struct.ResolvedTheme.md#rustdoc-item-8210) — The theme the editor last resolved, with the palette it records.
- [`ThemeLayerInfo`](struct.ThemeLayerInfo.md#rustdoc-item-3521) — One layer of a resolved theme: where it came from and, for a file, which
- [`ThemeMerge`](struct.ThemeMerge.md#rustdoc-item-8418) — The result of merging the layers over the code default.

### Enums
- [`ThemeLayer`](enum.ThemeLayer.md#rustdoc-item-8274) — Where one layer of the editor's theme came from.
- [`UserThemeSelection`](enum.UserThemeSelection.md#rustdoc-item-8373) — What the user's `theme` preference selected.

### Functions
- [`accent`](fn.accent.md#rustdoc-item-8254) — The accent colour: the active tab's underline and other highlights.
- [`accent_hot`](fn.accent_hot.md#rustdoc-item-8255) — A brighter accent, used for links and for the face of an accented control
- [`append_fonts`](fn.append_fonts.md#rustdoc-item-8458) — Appends the editor's own families to `fonts`: Inter for the UI, JetBrains
- [`apply`](fn.apply.md#rustdoc-item-8457) — Installs the theme the editor last resolved on `context`.
- [`apply_theme`](fn.apply_theme.md#rustdoc-item-4574) — Installs `theme` on `context` and records it as the editor's look.
- [`control`](fn.control.md#rustdoc-item-8248) — A flat control's fill on a panel.
- [`current_layers`](fn.current_layers.md#rustdoc-item-8244) — The layers the installed theme was merged from.
- [`current_theme`](fn.current_theme.md#rustdoc-item-8242) — The theme the editor last installed.
- [`danger`](fn.danger.md#rustdoc-item-8258) — Errors and destructive actions.
- [`default_theme`](fn.default_theme.md#rustdoc-item-8270) — The editor's look as a complete theme: one flat, compact dark style.
- [`dock_style`](fn.dock_style.md#rustdoc-item-8459) — The `egui_dock` styling for the shell's `DockArea`.
- [`frame`](fn.frame.md#rustdoc-item-8245) — The window frame and tab-strip background.
- [`generation`](fn.generation.md#rustdoc-item-8243) — The generation of the theme the editor last installed. A shell compares it
- [`layers_text`](fn.layers_text.md#rustdoc-item-8367) — The layer names joined as the logs and `dump theme` print them
- [`line`](fn.line.md#rustdoc-item-8250) — Borders and separators.
- [`log_debug`](fn.log_debug.md#rustdoc-item-8265) — A log line at `debug`.
- [`log_error`](fn.log_error.md#rustdoc-item-8267) — A log line at `error`.
- [`log_info`](fn.log_info.md#rustdoc-item-8264) — A log line at `info`.
- [`log_warn`](fn.log_warn.md#rustdoc-item-8266) — A log line at `warn`.
- [`merge_layers`](fn.merge_layers.md#rustdoc-item-8451) — Merges `user` and then `project` over `code` and refuses a bad layer on its
- [`overlay`](fn.overlay.md#rustdoc-item-8261) — A floating panel's fill over the scene.
- [`overlay_border`](fn.overlay_border.md#rustdoc-item-8262) — A floating panel's border.
- [`palette`](fn.palette.md#rustdoc-item-8241) — The palette the last installed theme recorded.
- [`panel`](fn.panel.md#rustdoc-item-8246) — A panel's and tab body's background.
- [`panel_raised`](fn.panel_raised.md#rustdoc-item-8247) — A raised surface: menus, hovered rows, tooltips.
- [`read_resolved_theme`](fn.read_resolved_theme.md#rustdoc-item-8240) — Reads the record and recovers the data even if another thread panicked
- [`resolved_theme`](fn.resolved_theme.md#rustdoc-item-8239) — The record, seeded with the code default so a read before the first install
- [`selected_row`](fn.selected_row.md#rustdoc-item-8269) — Paints the selected row's tinted background and its left accent bar over
- [`selected_row_bar`](fn.selected_row_bar.md#rustdoc-item-8268) — Paints only the selected row's left accent bar.
- [`selection`](fn.selection.md#rustdoc-item-8259) — A selected row's tint.
- [`selection_bar`](fn.selection_bar.md#rustdoc-item-8260) — A selected row's left bar.
- [`shadow`](fn.shadow.md#rustdoc-item-8263) — The colour a drop shadow is drawn in: the theme's window-shadow colour. A
- [`success`](fn.success.md#rustdoc-item-8256) — Success and running states.
- [`tab_face`](fn.tab_face.md#rustdoc-item-8462) — One `egui_dock` tab face: square corners and no outline, so the fill
- [`text`](fn.text.md#rustdoc-item-8251) — Normal text.
- [`text_muted`](fn.text_muted.md#rustdoc-item-8253) — Muted text.
- [`text_strong`](fn.text_strong.md#rustdoc-item-8252) — Emphasized text.
- [`to_egui_color`](fn.to_egui_color.md#rustdoc-item-8456) — Converts a theme colour to an egui colour, keeping its straight (not
- [`warning`](fn.warning.md#rustdoc-item-8257) — Warnings.
- [`well`](fn.well.md#rustdoc-item-8249) — Inputs and wells.
- [`widget_style`](fn.widget_style.md#rustdoc-item-8453) — One widget state's look: fills, an optional outline and a text colour.

### Constants
- [`BODY_FONT_BYTES`](constant.BODY_FONT_BYTES.md#rustdoc-item-8136) — The UI font's bytes: Inter, vendored under `assets/` with its OFL text.
- [`BODY_FONT_KEY`](constant.BODY_FONT_KEY.md#rustdoc-item-8139) — The names the two fonts are registered under in egui.
- [`MONOSPACE_FONT_BYTES`](constant.MONOSPACE_FONT_BYTES.md#rustdoc-item-8138) — The code font's bytes: JetBrains Mono, vendored under `assets/` with its
- [`MONOSPACE_FONT_KEY`](constant.MONOSPACE_FONT_KEY.md#rustdoc-item-8140)

### Statics
- [`RESOLVED_THEME`](static.RESOLVED_THEME.md#rustdoc-item-8236) — The one record every accessor reads.
