<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5266"></a>

# Module `pill_editor_core::layout`

Source: `editor\pill_editor_core\src\layout\mod.rs:1`

The `egui_dock` layout: tab set, default layout and persistence.
The egui editor's dock layout: an `egui_dock` state over [`EditorTab`]s.

## Responsibilities

- Re-export the layout pieces the shell and the executable share: the tab
  set ([`dock`]), the saved layout document ([`persistence`]) and the
  recovery document ([`recovery`]).

## Design

`egui_dock` owns the splits, tab geometry and drag behavior, so this
module only defines the editor's tabs, the default layout and where the
documents live. The dock value itself is a field of the shell's session
resource, [`crate::session::EguiShellState`](../session/struct.EguiShellState.md#rustdoc-item-5386), so nothing here is drawn or
kept alive between frames.

## Module contents

### Modules
- [`dock`](dock/index.md#rustdoc-item-5200) — The editor's tabs and the default dock layout.
- [`persistence`](persistence/index.md#rustdoc-item-5269) — Loading and saving the dock layout, with a schema version.
- [`recovery`](recovery/index.md#rustdoc-item-5368) — The recovery document: editor state a run saves as it goes, so the next

## Re-exports

- [`pub use dock::activate_tab;`](dock/fn.activate_tab.md#rustdoc-item-5265)
- [`pub use dock::EditorDock;`](dock/struct.EditorDock.md#rustdoc-item-5205)
- [`pub use dock::EditorTab;`](dock/enum.EditorTab.md#rustdoc-item-5139)
- [`pub use dock::BOTTOM_ROW_FRACTION;`](dock/constant.BOTTOM_ROW_FRACTION.md#rustdoc-item-5124)
- [`pub use dock::SIDE_COLUMN_FRACTION;`](dock/constant.SIDE_COLUMN_FRACTION.md#rustdoc-item-5123)
- [`pub use persistence::layout_directory;`](persistence/fn.layout_directory.md#rustdoc-item-5314)
- [`pub use persistence::load_or_default;`](persistence/fn.load_or_default.md#rustdoc-item-3734)
- [`pub use persistence::save;`](persistence/fn.save.md#rustdoc-item-3733)
- [`pub use persistence::LayoutError;`](persistence/enum.LayoutError.md#rustdoc-item-3686)
- [`pub use persistence::LAYOUT_SCHEMA_VERSION;`](persistence/constant.LAYOUT_SCHEMA_VERSION.md#rustdoc-item-5267)
- [`pub use recovery::read;`](recovery/fn.read.md#rustdoc-item-5366)
- [`pub use recovery::recovery_path;`](recovery/fn.recovery_path.md#rustdoc-item-5364)
- [`pub use recovery::remove;`](recovery/fn.remove.md#rustdoc-item-5367)
- [`pub use recovery::write;`](recovery/fn.write.md#rustdoc-item-5365)
- [`pub use recovery::RecoveryDocument;`](recovery/struct.RecoveryDocument.md#rustdoc-item-5323)
- [`pub use recovery::RECOVERY_FILE;`](recovery/constant.RECOVERY_FILE.md#rustdoc-item-5317)
- [`pub use recovery::RECOVERY_VERSION;`](recovery/constant.RECOVERY_VERSION.md#rustdoc-item-5316)
