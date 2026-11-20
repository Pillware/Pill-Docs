<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1201"></a>

# Module `pill_editor_shell::shell`

Source: `editor\pill_editor_shell\src\shell.rs:1`

The shell's UI work: the dock, the tab bodies and the frame build.
The shell's UI work: the dock, the tabs and the frame build.

## Responsibilities

- [`run_frame`](fn.run_frame.md#rustdoc-item-222): one egui pass, from the boundary input to the boundary
  frame the executable draws, including the scene and game rectangles the
  frontend places their child windows at.
- The tab bodies ([`entities_tab`](tab_entities/fn.entities_tab.md#rustdoc-item-581), [`systems_tab`](tab_systems/fn.systems_tab.md#rustdoc-item-204), [`inspector_tab`](tab_inspector/fn.inspector_tab.md#rustdoc-item-594),
  [`assets_tab`](tab_assets/fn.assets_tab.md#rustdoc-item-906), [`preferences_tab`](tab_preferences/fn.preferences_tab.md#rustdoc-item-583), all `#[pill_hot_fn]` so a body edit
  patches live). The scene and game tabs draw nothing: their bodies stay
  holes so the child windows under the overlay show through.
- The module's declarations: one `pub mod` per file under `shell/`, and the
  re-exports a patch crate reaches those items through.

## Design

The dock is the session's `egui_dock` state, so a layout edit changes a
resource that survives into the next generation. Nothing here stores
anything in egui's `Context` (the reload-safety contract `pill_editor_core`
documents); the tabs read the snapshot and write the shared selection.

## Patchability

A patch crate holds one function body and reaches this module only through
the crate root's re-export. Every item an edited body can name is therefore
`pub` here, and every module is too, because the build script's function
inventory names each addressable function by its module path. A body that
names a private item fails to compile as a patch, and the host reloads
instead.

That rule has a shape too: the scanner refuses an `impl` header containing
`<` or `where`, so a method in `impl TabViewer for EditorTabViewer<'_>` is
never addressable and no body inside it can be patched. Such a method
forwards to a `#[pill_hot_fn] pub fn` beside the impl, and the body lives
there.

## Module contents

### Modules
- [`assets_tiles`](assets_tiles/index.md#rustdoc-item-965) — The [`assets_tiles`] module: the assets tab's tiles, their menu and the asset dialog.
- [`bar`](bar/index.md#rustdoc-item-234) — The [`bar`] module: the menu bar's rows and the actions they run.
- [`chrome`](chrome/index.md#rustdoc-item-467) — The [`chrome`] module: the chrome the tabs share: icons, selection moves,
- [`claim`](claim/index.md#rustdoc-item-197) — The [`claim`] module: the generation's claim on the shared egui context.
- [`inspector_fields`](inspector_fields/index.md#rustdoc-item-705) — The [`inspector_fields`] module: the inspector's field rows: the decorators
- [`inspector_settings`](inspector_settings/index.md#rustdoc-item-898) — The [`inspector_settings`] module: the inspector's asset import settings.
- [`inspector_widgets`](inspector_widgets/index.md#rustdoc-item-798) — The [`inspector_widgets`] module: the inspector's field controls.
- [`menus`](menus/index.md#rustdoc-item-470) — The [`menus`] module: the context menus the tabs open.
- [`palette`](palette/index.md#rustdoc-item-241) — The [`palette`] module: the searchable command popup.
- [`panel_windows`](panel_windows/index.md#rustdoc-item-338) — The [`panel_windows`] module: the windows and modals module panels ask the
- [`prelude`](prelude/index.md#rustdoc-item-194) — The shared names every shell module globs.
- [`resource_section`](resource_section/index.md#rustdoc-item-386) — The [`resource_section`] module: the Inspector's rows for one editable
- [`rows`](rows/index.md#rustdoc-item-490) — The [`rows`] module: the one label/control row every tab draws its fields
- [`settle`](settle/index.md#rustdoc-item-528) — The [`settle`] module: the stage after a shell pass - the requests the
- [`spline_tool`](spline_tool/index.md#rustdoc-item-383) — The [`spline_tool`] module: the Spline Tool panel and its re-seed modal.
- [`tab_assets`](tab_assets/index.md#rustdoc-item-913) — The [`tab_assets`] module: the assets tab: the folder tree and the open folder's grid.
- [`tab_console`](tab_console/index.md#rustdoc-item-245) — The [`tab_console`] module: the Console tab's filters and rows.
- [`tab_demo`](tab_demo/index.md#rustdoc-item-252) — The [`tab_demo`] module: the shell module's own editor panel, the reference
- [`tab_entities`](tab_entities/index.md#rustdoc-item-582) — The [`tab_entities`] module: the entities tab: the entity rows and their menu.
- [`tab_inspector`](tab_inspector/index.md#rustdoc-item-601) — The [`tab_inspector`] module: the inspector tab: the selection's components and their rows.
- [`tab_preferences`](tab_preferences/index.md#rustdoc-item-585) — The [`tab_preferences`] module: the preferences tab: the editor-wide rows and the project's gizmo state.
- [`tab_problems`](tab_problems/index.md#rustdoc-item-247) — The [`tab_problems`] module: build errors and warnings, grouped by module.
- [`tab_statistics`](tab_statistics/index.md#rustdoc-item-249) — The [`tab_statistics`] module: frame, pass and per-tab timings.
- [`tab_systems`](tab_systems/index.md#rustdoc-item-206) — The [`tab_systems`] module: the Systems tab's pause and step controls and
- [`toasts`](toasts/index.md#rustdoc-item-208) — The [`toasts`] module: the host's notices drawn as a short-lived stack.
- [`toolbox_panel`](toolbox_panel/index.md#rustdoc-item-472) — The [`toolbox_panel`] module: the floating toolbox over a scene viewport.
- [`views`](views/index.md#rustdoc-item-407) — The [`views`] module: the scene and game viewports, their geometry and

### Structs
- [`EditorTabViewer`](struct.EditorTabViewer.md#rustdoc-item-225) — Draws the dock's tabs; the tab bodies come from the tab functions.

### Functions
- [`draw_module_panel`](fn.draw_module_panel.md#rustdoc-item-1199) — Runs one module panel's pass: check that its module is alive, draw the
- [`panel_feed`](fn.panel_feed.md#rustdoc-item-1198) — What module panels read this pass.
- [`run_frame`](fn.run_frame.md#rustdoc-item-222) — Runs one shell frame: the boundary input becomes egui input, the dock and
- [`run_popout_passes`](fn.run_popout_passes.md#rustdoc-item-1196) — Runs one egui pass for each popped-out tab.
- [`tab_body`](fn.tab_body.md#rustdoc-item-1189) — Draws one active tab's body and records how long it took.
- [`tab_button`](fn.tab_button.md#rustdoc-item-439) — The tab button hook: the active tab's accent underline, and the tab menu's
- [`tab_context_menu`](fn.tab_context_menu.md#rustdoc-item-1200) — The dock tab's menu rows: Pop Out wherever a tab is, Redock on a floating
- [`tab_title`](fn.tab_title.md#rustdoc-item-1186) — Returns one tab's dock title.

## Re-exports

- [`pub use claim::claim_context_once;`](claim/fn.claim_context_once.md#rustdoc-item-201)
- [`pub use claim::claim_shell_context;`](claim/fn.claim_shell_context.md#rustdoc-item-198)
- [`pub use tab_systems::systems_tab;`](tab_systems/fn.systems_tab.md#rustdoc-item-204)
- [`pub use toasts::draw_toasts;`](toasts/fn.draw_toasts.md#rustdoc-item-214)
- [`pub use toasts::push_notices;`](toasts/fn.push_notices.md#rustdoc-item-213)
- [`pub use bar::about_window;`](bar/fn.about_window.md#rustdoc-item-233)
- [`pub use bar::menu_bar;`](bar/fn.menu_bar.md#rustdoc-item-223)
- [`pub use bar::menu_body;`](bar/fn.menu_body.md#rustdoc-item-229)
- [`pub use bar::play_button;`](bar/fn.play_button.md#rustdoc-item-227)
- [`pub use bar::play_toolbar;`](bar/fn.play_toolbar.md#rustdoc-item-226)
- [`pub use bar::run_menu_action;`](bar/fn.run_menu_action.md#rustdoc-item-231)
- [`pub use bar::run_play_control;`](bar/fn.run_play_control.md#rustdoc-item-228)
- [`pub use bar::MENU_TITLE_GAP;`](bar/constant.MENU_TITLE_GAP.md#rustdoc-item-218)
- [`pub use bar::PLAY_BUTTON_GAP;`](bar/constant.PLAY_BUTTON_GAP.md#rustdoc-item-219)
- [`pub use bar::PLAY_TOOLBAR_TOP;`](bar/constant.PLAY_TOOLBAR_TOP.md#rustdoc-item-221)
- [`pub use palette::palette_window;`](palette/fn.palette_window.md#rustdoc-item-239)
- [`pub use tab_console::console_tab;`](tab_console/fn.console_tab.md#rustdoc-item-243)
- [`pub use tab_problems::problems_tab;`](tab_problems/fn.problems_tab.md#rustdoc-item-246)
- [`pub use tab_statistics::statistics_tab;`](tab_statistics/fn.statistics_tab.md#rustdoc-item-248)
- [`pub use tab_demo::demo_panel;`](tab_demo/fn.demo_panel.md#rustdoc-item-254)
- [`pub use panel_windows::panel_windows;`](panel_windows/fn.panel_windows.md#rustdoc-item-337)
- [`pub use panel_windows::PanelFeed;`](panel_windows/struct.PanelFeed.md#rustdoc-item-261)
- [`pub use spline_tool::reseed_command;`](spline_tool/fn.reseed_command.md#rustdoc-item-382)
- [`pub use spline_tool::reseed_window;`](spline_tool/fn.reseed_window.md#rustdoc-item-381)
- [`pub use spline_tool::spline_tool_panel;`](spline_tool/fn.spline_tool_panel.md#rustdoc-item-375)
- [`pub use spline_tool::Reseed;`](spline_tool/struct.Reseed.md#rustdoc-item-347)
- [`pub use spline_tool::RESEED_POINTS;`](spline_tool/constant.RESEED_POINTS.md#rustdoc-item-342)
- [`pub use spline_tool::RESEED_WINDOW;`](spline_tool/constant.RESEED_WINDOW.md#rustdoc-item-341)
- [`pub use spline_tool::SPLINE_COMPONENT;`](spline_tool/constant.SPLINE_COMPONENT.md#rustdoc-item-340)
- [`pub use spline_tool::SPLINE_PANEL_ID;`](spline_tool/constant.SPLINE_PANEL_ID.md#rustdoc-item-339)
- [`pub use resource_section::queue_edit;`](resource_section/fn.queue_edit.md#rustdoc-item-385)
- [`pub use resource_section::resource_section;`](resource_section/fn.resource_section.md#rustdoc-item-384)
- [`pub use views::frame_counter_rect;`](views/fn.frame_counter_rect.md#rustdoc-item-403)
- [`pub use views::scene_badges;`](views/fn.scene_badges.md#rustdoc-item-406)
- [`pub use views::scene_body_rect;`](views/fn.scene_body_rect.md#rustdoc-item-401)
- [`pub use views::scene_marquee;`](views/fn.scene_marquee.md#rustdoc-item-400)
- [`pub use views::scene_overlay;`](views/fn.scene_overlay.md#rustdoc-item-402)
- [`pub use views::shell_rect;`](views/fn.shell_rect.md#rustdoc-item-398)
- [`pub use views::SCENE_COUNTER_HEIGHT;`](views/constant.SCENE_COUNTER_HEIGHT.md#rustdoc-item-389)
- [`pub use views::SCENE_COUNTER_MARGIN;`](views/constant.SCENE_COUNTER_MARGIN.md#rustdoc-item-390)
- [`pub use views::SCENE_COUNTER_WIDTH;`](views/constant.SCENE_COUNTER_WIDTH.md#rustdoc-item-388)
- [`pub use views::SLOW_UPDATE_MICROS;`](views/constant.SLOW_UPDATE_MICROS.md#rustdoc-item-387)
- [`pub use chrome::apply_tab_redock;`](chrome/fn.apply_tab_redock.md#rustdoc-item-453)
- [`pub use chrome::claim_pointer;`](chrome/fn.claim_pointer.md#rustdoc-item-458)
- [`pub use chrome::click_from_modifiers;`](chrome/fn.click_from_modifiers.md#rustdoc-item-446)
- [`pub use chrome::context_menu;`](chrome/fn.context_menu.md#rustdoc-item-456)
- [`pub use chrome::empty_area;`](chrome/fn.empty_area.md#rustdoc-item-454)
- [`pub use chrome::engine_badge;`](chrome/fn.engine_badge.md#rustdoc-item-464)
- [`pub use chrome::floating_popup;`](chrome/fn.floating_popup.md#rustdoc-item-461)
- [`pub use chrome::gizmo_mode_label;`](chrome/fn.gizmo_mode_label.md#rustdoc-item-441)
- [`pub use chrome::gizmo_space_label;`](chrome/fn.gizmo_space_label.md#rustdoc-item-442)
- [`pub use chrome::log_context_menu;`](chrome/fn.log_context_menu.md#rustdoc-item-457)
- [`pub use chrome::mark_menu_region;`](chrome/fn.mark_menu_region.md#rustdoc-item-459)
- [`pub use chrome::paint_active_tab_underline;`](chrome/fn.paint_active_tab_underline.md#rustdoc-item-440)
- [`pub use chrome::remember_moved_rect;`](chrome/fn.remember_moved_rect.md#rustdoc-item-465)
- [`pub use chrome::select_asset;`](chrome/fn.select_asset.md#rustdoc-item-451)
- [`pub use chrome::select_entity;`](chrome/fn.select_entity.md#rustdoc-item-448)
- [`pub use chrome::select_entity_click;`](chrome/fn.select_entity_click.md#rustdoc-item-449)
- [`pub use chrome::tab_icon;`](chrome/fn.tab_icon.md#rustdoc-item-437)
- `pub use chrome::SelectionClick;`
- [`pub use menus::component_menu_items;`](menus/fn.component_menu_items.md#rustdoc-item-468)
- [`pub use menus::scene_context_menu;`](menus/fn.scene_context_menu.md#rustdoc-item-469)
- [`pub use toolbox_panel::toolbox_overlay;`](toolbox_panel/fn.toolbox_overlay.md#rustdoc-item-471)
- [`pub use rows::control_column;`](rows/fn.control_column.md#rustdoc-item-487)
- [`pub use rows::label_cell;`](rows/fn.label_cell.md#rustdoc-item-482)
- [`pub use rows::label_cell_in;`](rows/fn.label_cell_in.md#rustdoc-item-483)
- [`pub use rows::label_column_width;`](rows/fn.label_column_width.md#rustdoc-item-481)
- [`pub use rows::label_gap;`](rows/fn.label_gap.md#rustdoc-item-484)
- [`pub use rows::row;`](rows/fn.row.md#rustdoc-item-485)
- [`pub use rows::row_in;`](rows/fn.row_in.md#rustdoc-item-486)
- [`pub use rows::value_row;`](rows/fn.value_row.md#rustdoc-item-488)
- [`pub use rows::value_row_in;`](rows/fn.value_row_in.md#rustdoc-item-489)
- [`pub use rows::CONTROL_MIN_WIDTH;`](rows/constant.CONTROL_MIN_WIDTH.md#rustdoc-item-475)
- [`pub use rows::LABEL_COLUMN_FRACTION;`](rows/constant.LABEL_COLUMN_FRACTION.md#rustdoc-item-476)
- [`pub use rows::LABEL_COLUMN_MAX_WIDTH;`](rows/constant.LABEL_COLUMN_MAX_WIDTH.md#rustdoc-item-477)
- [`pub use rows::LABEL_COLUMN_MIN_WIDTH;`](rows/constant.LABEL_COLUMN_MIN_WIDTH.md#rustdoc-item-474)
- [`pub use rows::ROW_HEIGHT;`](rows/constant.ROW_HEIGHT.md#rustdoc-item-479)
- [`pub use rows::ROW_LABEL_GAP;`](rows/constant.ROW_LABEL_GAP.md#rustdoc-item-480)
- [`pub use rows::ROW_LABEL_WIDTH;`](rows/constant.ROW_LABEL_WIDTH.md#rustdoc-item-473)
- [`pub use rows::WIDE_ROW_LABEL_WIDTH;`](rows/constant.WIDE_ROW_LABEL_WIDTH.md#rustdoc-item-478)
- [`pub use settle::settle_pass;`](settle/fn.settle_pass.md#rustdoc-item-452)
- [`pub use settle::FrameRequests;`](settle/struct.FrameRequests.md#rustdoc-item-496)
- [`pub use tab_entities::entities_tab;`](tab_entities/fn.entities_tab.md#rustdoc-item-581)
- [`pub use tab_entities::entity_menu_items;`](tab_entities/fn.entity_menu_items.md#rustdoc-item-580)
- [`pub use tab_entities::entity_rows;`](tab_entities/fn.entity_rows.md#rustdoc-item-577)
- [`pub use tab_entities::remember_hierarchy_row_rect;`](tab_entities/fn.remember_hierarchy_row_rect.md#rustdoc-item-576)
- [`pub use tab_entities::DraggedEntity;`](tab_entities/struct.DraggedEntity.md#rustdoc-item-530)
- [`pub use tab_preferences::preferences_tab;`](tab_preferences/fn.preferences_tab.md#rustdoc-item-583)
- [`pub use tab_inspector::addable_components;`](tab_inspector/fn.addable_components.md#rustdoc-item-597)
- [`pub use tab_inspector::entity_inspector;`](tab_inspector/fn.entity_inspector.md#rustdoc-item-598)
- [`pub use tab_inspector::inspector_add_popup;`](tab_inspector/fn.inspector_add_popup.md#rustdoc-item-596)
- [`pub use tab_inspector::inspector_header;`](tab_inspector/fn.inspector_header.md#rustdoc-item-595)
- [`pub use tab_inspector::inspector_section_header;`](tab_inspector/fn.inspector_section_header.md#rustdoc-item-600)
- [`pub use tab_inspector::inspector_tab;`](tab_inspector/fn.inspector_tab.md#rustdoc-item-594)
- [`pub use tab_inspector::INSPECTOR_VECTOR_FIELD_HEIGHT;`](tab_inspector/constant.INSPECTOR_VECTOR_FIELD_HEIGHT.md#rustdoc-item-593)
- [`pub use tab_inspector::INSPECTOR_VECTOR_FIELD_WIDTH;`](tab_inspector/constant.INSPECTOR_VECTOR_FIELD_WIDTH.md#rustdoc-item-587)
- [`pub use tab_inspector::INSPECTOR_VECTOR_LABEL_WIDTH;`](tab_inspector/constant.INSPECTOR_VECTOR_LABEL_WIDTH.md#rustdoc-item-588)
- [`pub use tab_inspector::SECTION_LINE_GAP;`](tab_inspector/constant.SECTION_LINE_GAP.md#rustdoc-item-592)
- [`pub use tab_inspector::VECTOR_OWN_LINE_INDENT;`](tab_inspector/constant.VECTOR_OWN_LINE_INDENT.md#rustdoc-item-590)
- [`pub use tab_inspector::VECTOR_SLOT_GAP;`](tab_inspector/constant.VECTOR_SLOT_GAP.md#rustdoc-item-591)
- [`pub use tab_inspector::VECTOR_SLOT_MIN_WIDTH;`](tab_inspector/constant.VECTOR_SLOT_MIN_WIDTH.md#rustdoc-item-589)
- [`pub use inspector_fields::field_widget_name;`](inspector_fields/fn.field_widget_name.md#rustdoc-item-697)
- [`pub use inspector_fields::has_field_editor;`](inspector_fields/fn.has_field_editor.md#rustdoc-item-700)
- [`pub use inspector_fields::inspector_entity_row;`](inspector_fields/fn.inspector_entity_row.md#rustdoc-item-682)
- [`pub use inspector_fields::inspector_field_row;`](inspector_fields/fn.inspector_field_row.md#rustdoc-item-677)
- [`pub use inspector_fields::inspector_row;`](inspector_fields/fn.inspector_row.md#rustdoc-item-699)
- [`pub use inspector_fields::is_scalar_field;`](inspector_fields/fn.is_scalar_field.md#rustdoc-item-704)
- [`pub use inspector_fields::reference_button_width;`](inspector_fields/fn.reference_button_width.md#rustdoc-item-604)
- [`pub use inspector_fields::remember_entity_row_rect;`](inspector_fields/fn.remember_entity_row_rect.md#rustdoc-item-684)
- [`pub use inspector_fields::remember_entity_row_text;`](inspector_fields/fn.remember_entity_row_text.md#rustdoc-item-683)
- [`pub use inspector_fields::side_button_size;`](inspector_fields/fn.side_button_size.md#rustdoc-item-603)
- [`pub use inspector_fields::slot_width_within;`](inspector_fields/fn.slot_width_within.md#rustdoc-item-703)
- [`pub use inspector_fields::vector_row;`](inspector_fields/fn.vector_row.md#rustdoc-item-701)
- [`pub use inspector_fields::vector_slot_width;`](inspector_fields/fn.vector_slot_width.md#rustdoc-item-586)
- [`pub use inspector_fields::vector_slots;`](inspector_fields/fn.vector_slots.md#rustdoc-item-702)
- [`pub use inspector_fields::EntityRowInput;`](inspector_fields/struct.EntityRowInput.md#rustdoc-item-650)
- [`pub use inspector_widgets::ascending;`](inspector_widgets/fn.ascending.md#rustdoc-item-791)
- [`pub use inspector_widgets::axis_slot;`](inspector_widgets/fn.axis_slot.md#rustdoc-item-786)
- [`pub use inspector_widgets::component_rows;`](inspector_widgets/fn.component_rows.md#rustdoc-item-797)
- [`pub use inspector_widgets::enum_edit;`](inspector_widgets/fn.enum_edit.md#rustdoc-item-794)
- [`pub use inspector_widgets::fill_slider_width;`](inspector_widgets/fn.fill_slider_width.md#rustdoc-item-790)
- [`pub use inspector_widgets::fixed_width_field;`](inspector_widgets/fn.fixed_width_field.md#rustdoc-item-787)
- [`pub use inspector_widgets::format_field_value;`](inspector_widgets/fn.format_field_value.md#rustdoc-item-796)
- [`pub use inspector_widgets::integer_edit;`](inspector_widgets/fn.integer_edit.md#rustdoc-item-792)
- [`pub use inspector_widgets::read_only_row;`](inspector_widgets/fn.read_only_row.md#rustdoc-item-795)
- [`pub use inspector_widgets::scalar_edit;`](inspector_widgets/fn.scalar_edit.md#rustdoc-item-793)
- [`pub use inspector_widgets::scalar_edit_decorated;`](inspector_widgets/fn.scalar_edit_decorated.md#rustdoc-item-785)
- [`pub use inspector_widgets::stretched_drag_value;`](inspector_widgets/fn.stretched_drag_value.md#rustdoc-item-788)
- [`pub use inspector_widgets::FieldEditResponse;`](inspector_widgets/struct.FieldEditResponse.md#rustdoc-item-710)
- [`pub use inspector_widgets::Number;`](inspector_widgets/struct.Number.md#rustdoc-item-756)
- [`pub use inspector_settings::asset_settings_row;`](inspector_settings/fn.asset_settings_row.md#rustdoc-item-885)
- [`pub use inspector_settings::asset_settings_rows;`](inspector_settings/fn.asset_settings_rows.md#rustdoc-item-874)
- [`pub use inspector_settings::settings_commit;`](inspector_settings/fn.settings_commit.md#rustdoc-item-897)
- [`pub use inspector_settings::SettingsWalk;`](inspector_settings/struct.SettingsWalk.md#rustdoc-item-808)
- [`pub use tab_assets::assets_grid;`](tab_assets/fn.assets_grid.md#rustdoc-item-912)
- [`pub use tab_assets::assets_path_bar;`](tab_assets/fn.assets_path_bar.md#rustdoc-item-910)
- [`pub use tab_assets::assets_tab;`](tab_assets/fn.assets_tab.md#rustdoc-item-906)
- [`pub use tab_assets::assets_tree;`](tab_assets/fn.assets_tree.md#rustdoc-item-908)
- [`pub use tab_assets::assets_zoom_bar;`](tab_assets/fn.assets_zoom_bar.md#rustdoc-item-911)
- [`pub use tab_assets::folder_tree_rows;`](tab_assets/fn.folder_tree_rows.md#rustdoc-item-909)
- [`pub use tab_assets::ASSETS_TREE_CARET_SIZE;`](tab_assets/constant.ASSETS_TREE_CARET_SIZE.md#rustdoc-item-905)
- [`pub use tab_assets::ASSETS_TREE_CARET_WIDTH;`](tab_assets/constant.ASSETS_TREE_CARET_WIDTH.md#rustdoc-item-904)
- [`pub use tab_assets::ASSETS_TREE_INDENT;`](tab_assets/constant.ASSETS_TREE_INDENT.md#rustdoc-item-903)
- [`pub use tab_assets::ASSETS_TREE_WIDTH;`](tab_assets/constant.ASSETS_TREE_WIDTH.md#rustdoc-item-900)
- [`pub use tab_assets::ASSETS_TREE_WIDTH_RANGE;`](tab_assets/constant.ASSETS_TREE_WIDTH_RANGE.md#rustdoc-item-901)
- [`pub use assets_tiles::asset_container_menu;`](assets_tiles/fn.asset_container_menu.md#rustdoc-item-962)
- [`pub use assets_tiles::asset_dialog_window;`](assets_tiles/fn.asset_dialog_window.md#rustdoc-item-964)
- [`pub use assets_tiles::asset_icon;`](assets_tiles/fn.asset_icon.md#rustdoc-item-957)
- [`pub use assets_tiles::asset_menu_items;`](assets_tiles/fn.asset_menu_items.md#rustdoc-item-963)
- [`pub use assets_tiles::asset_tile;`](assets_tiles/fn.asset_tile.md#rustdoc-item-928)
- [`pub use assets_tiles::asset_type_icon;`](assets_tiles/fn.asset_type_icon.md#rustdoc-item-958)
- [`pub use assets_tiles::remember_pane_rect;`](assets_tiles/fn.remember_pane_rect.md#rustdoc-item-956)
- [`pub use assets_tiles::remember_tree_row_rect;`](assets_tiles/fn.remember_tree_row_rect.md#rustdoc-item-955)
- [`pub use assets_tiles::tile_name_job;`](assets_tiles/fn.tile_name_job.md#rustdoc-item-959)
- [`pub use assets_tiles::AssetTileWrites;`](assets_tiles/struct.AssetTileWrites.md#rustdoc-item-907)
- [`pub use assets_tiles::ASSETS_TILE_CORNER_RADIUS;`](assets_tiles/constant.ASSETS_TILE_CORNER_RADIUS.md#rustdoc-item-918)
- [`pub use assets_tiles::ASSETS_TILE_GAP;`](assets_tiles/constant.ASSETS_TILE_GAP.md#rustdoc-item-914)
- [`pub use assets_tiles::ASSETS_TILE_ICON_INSET;`](assets_tiles/constant.ASSETS_TILE_ICON_INSET.md#rustdoc-item-917)
- [`pub use assets_tiles::ASSETS_TILE_LABEL_GAP;`](assets_tiles/constant.ASSETS_TILE_LABEL_GAP.md#rustdoc-item-916)
- [`pub use assets_tiles::ASSETS_TILE_LABEL_HEIGHT;`](assets_tiles/constant.ASSETS_TILE_LABEL_HEIGHT.md#rustdoc-item-915)
- [`pub use assets_tiles::ASSETS_TILE_LABEL_ROWS;`](assets_tiles/constant.ASSETS_TILE_LABEL_ROWS.md#rustdoc-item-919)
