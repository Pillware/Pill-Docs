<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-470"></a>

# Module `pill_editor_shell::shell::menus`

Source: `editor\pill_editor_shell\src\shell\menus.rs:1`

The [`menus`](#rustdoc-item-470) module: the context menus the tabs open.
The context menus the tabs open.

## Responsibilities

- The scene viewport's menu: the gizmo tools, snapping, the two spaces
  and the scene grid.
- The Inspector's component menu: remove one component, or add any addable
  one the entity does not carry.

Both imports below use absolute paths, so a patch crate can resolve them
too.

## Module contents

### Functions
- [`component_menu_items`](fn.component_menu_items.md#rustdoc-item-468) — Draws the component menu. When `current` names the heading's component, a
- [`scene_context_menu`](fn.scene_context_menu.md#rustdoc-item-469) — Draws the scene viewport's context menu: the three transform tools,
