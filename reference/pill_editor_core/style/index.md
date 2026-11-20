<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10199"></a>

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
- [`Palette`](struct.Palette.md#rustdoc-item-10226) — The editor's colour roles as egui colours, copied from the last installed
- [`ResolvedTheme`](struct.ResolvedTheme.md#rustdoc-item-10272) — The theme the editor last resolved, with the palette it records.
- [`ThemeLayerInfo`](struct.ThemeLayerInfo.md#rustdoc-item-3810) — One layer of a resolved theme: where it came from and, for a file, which
- [`ThemeMerge`](struct.ThemeMerge.md#rustdoc-item-10480) — The result of merging the layers over the code default.

### Enums
- [`ThemeLayer`](enum.ThemeLayer.md#rustdoc-item-10336) — Where one layer of the editor's theme came from.
- [`UserThemeSelection`](enum.UserThemeSelection.md#rustdoc-item-10435) — What the user's `theme` preference selected.

### Functions
- [`accent`](fn.accent.md#rustdoc-item-10316) — The accent colour: the active tab's underline and other highlights.
- [`accent_hot`](fn.accent_hot.md#rustdoc-item-10317) — A brighter accent, used for links and for the face of an accented control
- [`append_fonts`](fn.append_fonts.md#rustdoc-item-10520) — Appends the editor's own families to `fonts`: Inter for the UI, JetBrains
- [`apply`](fn.apply.md#rustdoc-item-10519) — Installs the theme the editor last resolved on `context`.
- [`apply_theme`](fn.apply_theme.md#rustdoc-item-6535) — Installs `theme` on `context` and records it as the editor's look.
- [`control`](fn.control.md#rustdoc-item-10310) — A flat control's fill on a panel.
- [`current_layers`](fn.current_layers.md#rustdoc-item-10306) — The layers the installed theme was merged from.
- [`current_theme`](fn.current_theme.md#rustdoc-item-10304) — The theme the editor last installed.
- [`danger`](fn.danger.md#rustdoc-item-10320) — Errors and destructive actions.
- [`default_theme`](fn.default_theme.md#rustdoc-item-10332) — The editor's look as a complete theme: one flat, compact dark style.
- [`dock_style`](fn.dock_style.md#rustdoc-item-10522) — The `egui_dock` styling for the shell's `DockArea`.
- [`frame`](fn.frame.md#rustdoc-item-10307) — The window frame and tab-strip background.
- [`generation`](fn.generation.md#rustdoc-item-10305) — The generation of the theme the editor last installed. A shell compares it
- [`layers_text`](fn.layers_text.md#rustdoc-item-10429) — The layer names joined as the logs and `dump theme` print them
- [`line`](fn.line.md#rustdoc-item-10312) — Borders and separators.
- [`log_debug`](fn.log_debug.md#rustdoc-item-10327) — A log line at `debug`.
- [`log_error`](fn.log_error.md#rustdoc-item-10329) — A log line at `error`.
- [`log_info`](fn.log_info.md#rustdoc-item-10326) — A log line at `info`.
- [`log_warn`](fn.log_warn.md#rustdoc-item-10328) — A log line at `warn`.
- [`merge_layers`](fn.merge_layers.md#rustdoc-item-10513) — Merges `user` and then `project` over `code` and refuses a bad layer on its
- [`overlay`](fn.overlay.md#rustdoc-item-10323) — A floating panel's fill over the scene.
- [`overlay_border`](fn.overlay_border.md#rustdoc-item-10324) — A floating panel's border.
- [`palette`](fn.palette.md#rustdoc-item-10303) — The palette the last installed theme recorded.
- [`panel`](fn.panel.md#rustdoc-item-10308) — A panel's and tab body's background.
- [`panel_raised`](fn.panel_raised.md#rustdoc-item-10309) — A raised surface: menus, hovered rows, tooltips.
- [`play_tint`](fn.play_tint.md#rustdoc-item-10521) — The tint the menu bar and the dock's frame take while a game runs.
- [`read_resolved_theme`](fn.read_resolved_theme.md#rustdoc-item-10302) — Reads the record and recovers the data even if another thread panicked
- [`resolved_theme`](fn.resolved_theme.md#rustdoc-item-10301) — The record, seeded with the code default so a read before the first install
- [`selected_row`](fn.selected_row.md#rustdoc-item-10331) — Paints the selected row's tinted background and its left accent bar over
- [`selected_row_bar`](fn.selected_row_bar.md#rustdoc-item-10330) — Paints only the selected row's left accent bar.
- [`selection`](fn.selection.md#rustdoc-item-10321) — A selected row's tint.
- [`selection_bar`](fn.selection_bar.md#rustdoc-item-10322) — A selected row's left bar.
- [`shadow`](fn.shadow.md#rustdoc-item-10325) — The colour a drop shadow is drawn in: the theme's window-shadow colour. A
- [`success`](fn.success.md#rustdoc-item-10318) — Success and running states.
- [`tab_face`](fn.tab_face.md#rustdoc-item-10525) — One `egui_dock` tab face: square corners and no outline, so the fill
- [`text`](fn.text.md#rustdoc-item-10313) — Normal text.
- [`text_muted`](fn.text_muted.md#rustdoc-item-10315) — Muted text.
- [`text_strong`](fn.text_strong.md#rustdoc-item-10314) — Emphasized text.
- [`to_egui_color`](fn.to_egui_color.md#rustdoc-item-10518) — Converts a theme colour to an egui colour, keeping its straight (not
- [`warning`](fn.warning.md#rustdoc-item-10319) — Warnings.
- [`well`](fn.well.md#rustdoc-item-10311) — Inputs and wells.
- [`widget_style`](fn.widget_style.md#rustdoc-item-10515) — One widget state's look: fills, an optional outline and a text colour.

### Constants
- [`BODY_FONT_BYTES`](constant.BODY_FONT_BYTES.md#rustdoc-item-10198) — The UI font's bytes: Inter, vendored under `assets/` with its OFL text.
- [`BODY_FONT_KEY`](constant.BODY_FONT_KEY.md#rustdoc-item-10201) — The names the two fonts are registered under in egui.
- [`MONOSPACE_FONT_BYTES`](constant.MONOSPACE_FONT_BYTES.md#rustdoc-item-10200) — The code font's bytes: JetBrains Mono, vendored under `assets/` with its
- [`MONOSPACE_FONT_KEY`](constant.MONOSPACE_FONT_KEY.md#rustdoc-item-10202)

### Statics
- [`RESOLVED_THEME`](static.RESOLVED_THEME.md#rustdoc-item-10298) — The one record every accessor reads.
