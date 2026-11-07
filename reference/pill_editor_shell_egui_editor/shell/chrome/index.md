<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-456"></a>

# Module `pill_editor_shell_egui_editor::shell::chrome`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:1`

The [`chrome`](#rustdoc-item-456) module: the chrome the tabs share: icons, selection moves,
context menus and the rectangles the frame reports as the UI's.
The chrome the shell's tabs share: tab icons, the selection moves, the
context menus and the rectangles the frame reports as the UI's.

## Responsibilities

- [`tab_icon`](fn.tab_icon.md#rustdoc-item-427): the icon a dock tab draws beside its title.
- [`paint_active_tab_underline`](fn.paint_active_tab_underline.md#rustdoc-item-430): the accent line under the active tab's
  name, which the dock does not draw itself.
- The selection moves the tabs and the scene viewports make, each logging
  the token a suite watches for.
- [`apply_tab_redock`](fn.apply_tab_redock.md#rustdoc-item-442): puts a floating surface's tabs back into the dock.
- [`empty_area`](fn.empty_area.md#rustdoc-item-443): the empty strip under a panel's rows, where its menu
  opens.
- [`claim_pointer`](fn.claim_pointer.md#rustdoc-item-447), [`mark_menu_region`](fn.mark_menu_region.md#rustdoc-item-448), [`context_menu`](fn.context_menu.md#rustdoc-item-445) and
  [`floating_popup`](fn.floating_popup.md#rustdoc-item-450): the rectangles a menu or a popup claims, so a click
  on it is never a scene pick.
- [`engine_badge`](fn.engine_badge.md#rustdoc-item-453): the mark on a picker row whose asset comes from the
  engine rather than the project.
- [`remember_moved_rect`](fn.remember_moved_rect.md#rustdoc-item-454): the once-per-placement logging the Inspector's
  sections and the scene viewports' badges use.

The globs below are absolute paths, so a patch crate resolves them too.

## Module contents

### Structs
- [`FloatingPopup`](struct.FloatingPopup.md#rustdoc-item-401) — A floating popup as its caller sees it.

### Functions
- [`apply_tab_redock`](fn.apply_tab_redock.md#rustdoc-item-442) — Brings a floating surface's tabs back into the dock: the Redock item of a
- [`claim_pointer`](fn.claim_pointer.md#rustdoc-item-447) — Claims one floating surface's rectangle for the UI.
- [`click_from_modifiers`](fn.click_from_modifiers.md#rustdoc-item-435) — Returns what a click means with these modifiers held: Shift selects a
- [`context_menu`](fn.context_menu.md#rustdoc-item-445) — Opens a panel's context menu on a secondary click.
- [`empty_area`](fn.empty_area.md#rustdoc-item-443) — Returns the size of the empty strip under a panel's rows, where the panel's
- [`engine_badge`](fn.engine_badge.md#rustdoc-item-453) — The badge a picker puts on a row whose asset is not one of the project's
- [`floating_popup`](fn.floating_popup.md#rustdoc-item-450) — Opens a floating popup under an anchor rectangle, claims its area and
- [`gizmo_mode_label`](fn.gizmo_mode_label.md#rustdoc-item-431) — Returns the lowercase name of one gizmo mode, as the Preferences tab's rows
- [`gizmo_space_label`](fn.gizmo_space_label.md#rustdoc-item-432) — Returns the lowercase name of one gizmo space, as the Preferences tab's
- [`log_context_menu`](fn.log_context_menu.md#rustdoc-item-446) — Logs a context menu opening as `[editor] context menu`, with `area` set to
- [`mark_menu_region`](fn.mark_menu_region.md#rustdoc-item-448) — Adds an open context menu's rectangle to the frame's overlay regions.
- [`paint_active_tab_underline`](fn.paint_active_tab_underline.md#rustdoc-item-430) — Paints the accent underline under the active tab's name.
- [`remember_moved_rect`](fn.remember_moved_rect.md#rustdoc-item-454) — Records one keyed rectangle and answers whether it is new or has moved, so
- [`report_selection_change`](fn.report_selection_change.md#rustdoc-item-439) — Logs the `[editor] selection changed` token for a move the click helpers
- [`select_asset`](fn.select_asset.md#rustdoc-item-440) — Moves the shared selection onto the asset at `path` and logs the
- [`select_entity`](fn.select_entity.md#rustdoc-item-437) — Moves the shared selection onto `entity` alone.
- [`select_entity_click`](fn.select_entity_click.md#rustdoc-item-438) — Applies one click on an entity row to the shared selection.
- [`tab_icon`](fn.tab_icon.md#rustdoc-item-427) — Returns the icon a dock tab draws beside its title: the view or panel the

## Re-exports

- `pub use pill_editor_core::editor_state::SelectionClick;`
