<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-192"></a>

# Module `pill_editor_shell_egui_editor::shell::prelude`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\prelude.rs:1`

The shared names every shell module globs.
The names every shell module shares, re-exported in one place.

## Responsibilities

- Re-export the engine, editor-core, UI and JSON types the shell's modules
  name, so each module opens with two globs instead of a long import list.

## Design

A shell module writes
`use pill_editor_shell_egui_editor::shell::prelude::*;` and
`use pill_editor_shell_egui_editor::shell::*;`. Both spell the whole path
from the crate root. A generated patch copies the edited file's top-level
`use` lines into a small crate of its own, where a `super::`-relative
glob would have nothing to point at.

## Re-exports

- `pub use pill_core::telemetry::telemetry_target;`
- `pub use pill_editor_core::assets;`
- `pub use pill_editor_core::assets::AssetDialog;`
- `pub use pill_editor_core::boundary::frame_from_output;`
- `pub use pill_editor_core::boundary::EguiShellFrame;`
- `pub use pill_editor_core::boundary::EguiShellInput;`
- `pub use pill_editor_core::boundary::ShellBadge;`
- `pub use pill_editor_core::boundary::ShellRect;`
- `pub use pill_editor_core::boundary::BADGES_PER_VIEW_MAX;`
- `pub use pill_editor_core::boundary::DEFAULT_SCENE_VIEWS;`
- `pub use pill_editor_core::boundary::SCENE_VIEWS_MAX;`
- `pub use pill_editor_core::browser;`
- `pub use pill_editor_core::browser::ProjectBrowser;`
- `pub use pill_editor_core::commands::CommandView;`
- `pub use pill_editor_core::commands::PendingEditorCommands;`
- `pub use pill_editor_core::console;`
- `pub use pill_editor_core::console::ConsoleChannel;`
- `pub use pill_editor_core::console::ConsoleFilterSettings;`
- `pub use pill_editor_core::console::ConsoleLine;`
- `pub use pill_editor_core::console::ConsoleView;`
- `pub use pill_editor_core::editor_state::AssetFieldDecorator;`
- `pub use pill_editor_core::editor_state::AssetKind;`
- `pub use pill_editor_core::editor_state::AssetListing;`
- `pub use pill_editor_core::editor_state::AssetReferenceField;`
- `pub use pill_editor_core::editor_state::AssetReferenceLabel;`
- `pub use pill_editor_core::editor_state::ComponentView;`
- `pub use pill_editor_core::editor_state::EditorCommand;`
- `pub use pill_editor_core::editor_state::EditorSelection;`
- `pub use pill_editor_core::editor_state::EditorSnapshot;`
- `pub use pill_editor_core::editor_state::EngineAsset;`
- `pub use pill_editor_core::editor_state::EntityDetail;`
- `pub use pill_editor_core::editor_state::EntityListEntry;`
- `pub use pill_editor_core::editor_state::EntityReferenceLabel;`
- `pub use pill_editor_core::editor_state::ResourceFieldView;`
- `pub use pill_editor_core::editor_state::ResourceView;`
- `pub use pill_editor_core::egui;`
- `pub use pill_editor_core::egui_dock::DockArea;`
- `pub use pill_editor_core::egui_dock::DockState;`
- `pub use pill_editor_core::egui_dock::NodeIndex;`
- `pub use pill_editor_core::egui_dock::NodePath;`
- `pub use pill_editor_core::egui_dock::SurfaceIndex;`
- `pub use pill_editor_core::egui_dock::TabViewer;`
- `pub use pill_editor_core::entities;`
- `pub use pill_editor_core::gizmo::GizmoMode;`
- `pub use pill_editor_core::gizmo::GizmoSpace;`
- `pub use pill_editor_core::icons;`
- `pub use pill_editor_core::inspector;`
- `pub use pill_editor_core::kit;`
- `pub use pill_editor_core::layout::EditorTab;`
- `pub use pill_editor_core::menubar;`
- `pub use pill_editor_core::notices::EditorNotices;`
- `pub use pill_editor_core::notices::Notice;`
- `pub use pill_editor_core::notices::NoticeLevel;`
- `pub use pill_editor_core::notices::ProblemRow;`
- `pub use pill_editor_core::panels::PanelCommand;`
- `pub use pill_editor_core::panels::PanelComponentValues;`
- `pub use pill_editor_core::panels::PanelContext;`
- `pub use pill_editor_core::panels::PanelDrawFn;`
- `pub use pill_editor_core::panels::PanelEntityDetail;`
- `pub use pill_editor_core::panels::PanelEntityRow;`
- `pub use pill_editor_core::panels::PanelFieldValue;`
- `pub use pill_editor_core::panels::PanelRegistry;`
- `pub use pill_editor_core::panels::PanelWindowRequest;`
- `pub use pill_editor_core::preferences;`
- `pub use pill_editor_core::requests::HistoryRequest;`
- `pub use pill_editor_core::requests::ShellRequests;`
- `pub use pill_editor_core::session::EguiShellState;`
- `pub use pill_editor_core::session::InspectorSession;`
- `pub use pill_editor_core::session::LoggedRects;`
- `pub use pill_editor_core::session::LoggedTexts;`
- `pub use pill_editor_core::session::MenubarSession;`
- `pub use pill_editor_core::session::MenubarSlot;`
- `pub use pill_editor_core::session::PaletteState;`
- `pub use pill_editor_core::session::PanelBudget;`
- `pub use pill_editor_core::session::PanelTiming;`
- `pub use pill_editor_core::session::PanelWindowAnswer;`
- `pub use pill_editor_core::session::PanelWindowSession;`
- `pub use pill_editor_core::session::PanelWindowState;`
- `pub use pill_editor_core::session::StatisticsSession;`
- `pub use pill_editor_core::session::Toast;`
- `pub use pill_editor_core::session::ToastSession;`
- `pub use pill_editor_core::session::ToolboxSession;`
- `pub use pill_editor_core::session::PANEL_BUDGET_FRAMES;`
- `pub use pill_editor_core::session::PANEL_BUDGET_MICROS;`
- `pub use pill_editor_core::session::PANEL_WINDOWS_MAX;`
- `pub use pill_editor_core::session::TOASTS_MAX;`
- `pub use pill_editor_core::session::TOAST_FRAMES;`
- `pub use pill_editor_core::style;`
- `pub use pill_editor_core::systems;`
- `pub use pill_editor_core::toolbox;`
- `pub use pill_engine::FieldDecorator;`
- `pub use pill_engine::pill_hot_fn;`
- `pub use pill_engine::Entity;`
- `pub use pill_engine::FieldValue;`
- `pub use pill_engine::Input;`
- `pub use serde_json::Value;`
