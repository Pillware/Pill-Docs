<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11430"></a>

# Module `pill_editor_core::tools`

Source: `editor\pill_editor_core\src\tools.rs:1`

The tool layer: the modes a scene view can be in, the registry that holds
them and which one is active.
The editor's tool layer: the modes a scene view can be in.

## Responsibilities

- Declare [`EditorTool`], the value a tool is described by: the name a
  command and the scripted channel spell, the label the toolbox shows, its
  optional shortcut, and the component that makes it offered for an entity.
- Hold the registered tools and the active one in [`ToolRegistry`], and
  name the three built-ins the editor always offers.
- Declare [`ToolExtension`], what a crate adds to a tool another crate owns:
  kinds, elements, frames, menu rows, chords and the press answer. The
  registry merges an attached extension's additions into what the base tool
  reports, and chains the hooks so the base always answers first.
- Turn what a tool reports into what the editor draws and picks: the
  element handles of one frame ([`element_handles`]) and the selection a
  marquee produces ([`marquee_selection`]).

## Design

A tool is a **mode**, not a widget: exactly one is active at a time, and
the editor's draw, pick and drag paths read which one it is. This module is
the vocabulary; the editor core applies the modes it already knows (the
transform gizmo's translate, rotate and scale), and an extension's editor
crate registers its own through the same registry.

Everything here is plain data. A registered tool is a record of strings and
flags rather than a trait object, because the record outlives the image
that declared it: a reload replaces the record instead of dangling a
pointer into the image that is about to be unmapped.

The registry is a world resource so it survives a shell reload and rides
the play session untouched, and it is named for `SetResourceField`-style
reading by the scripted channel.

## Module contents

### Structs
- [`CoordinateFrame`](struct.CoordinateFrame.md#rustdoc-item-10965) — One space the active tool offers the gizmo's space toggle, named after
- [`ElementHandle`](struct.ElementHandle.md#rustdoc-item-11196) — One element of one frame, as the editor draws and picks it.
- [`ElementKind`](struct.ElementKind.md#rustdoc-item-10806) — What one kind of element a tool exposes looks like and allows.
- [`ElementMenuEntry`](struct.ElementMenuEntry.md#rustdoc-item-3797) — One row a tool adds to the element context menu.
- [`ElementMove`](struct.ElementMove.md#rustdoc-item-2536) — One element a drag moved, with the world transform it takes.
- [`ElementTransform`](struct.ElementTransform.md#rustdoc-item-4700) — Where one element is in the world, or where a drag moved it to.
- [`MarqueeRect`](struct.MarqueeRect.md#rustdoc-item-11280) — The rectangle a marquee drag covers, in one view's pixels.
- [`ProjectedElement`](struct.ProjectedElement.md#rustdoc-item-11240) — Where one reported element of one frame lands on a scene view's surface.
- [`RegisteredExtension`](struct.RegisteredExtension.md#rustdoc-item-11376) — One registered extension, as the registry keeps it.
- [`RegisteredTool`](struct.RegisteredTool.md#rustdoc-item-10751) — One registered tool, as the registry keeps it.
- [`SpaceChoice`](struct.SpaceChoice.md#rustdoc-item-11511) — The gizmo space one tool was last on.
- [`ToolElement`](struct.ToolElement.md#rustdoc-item-10890) — One element a tool reports for the entity it is editing.
- [`ToolElementHooks`](struct.ToolElementHooks.md#rustdoc-item-10758) — The optional element-reporting half of a tool.
- [`ToolExtensionHooks`](struct.ToolExtensionHooks.md#rustdoc-item-11331) — The optional halves an extension adds to the tool it extends.
- [`ToolRegistry`](struct.ToolRegistry.md#rustdoc-item-11426) — Every registered tool, and which one is active.
- [`ToolSpaceChoices`](struct.ToolSpaceChoices.md#rustdoc-item-4704) — The tool frame each tool was last switched to, for the session.

### Enums
- [`BuiltinTool`](enum.BuiltinTool.md#rustdoc-item-4252) — The three modes the editor offers with no extension loaded.
- [`KeyResponse`](enum.KeyResponse.md#rustdoc-item-11149) — What a key does while the tool owns an element selection.
- [`PressResponse`](enum.PressResponse.md#rustdoc-item-11109) — What a press on one element does.

### Traits
- [`EditorTool`](trait.EditorTool.md#rustdoc-item-10745) — What a tool is described by.
- [`ToolExtension`](trait.ToolExtension.md#rustdoc-item-11377) — A crate's addition to a tool another crate owns.

### Functions
- [`activate_tool`](fn.activate_tool.md#rustdoc-item-11599) — Makes `tool` the active one, and puts the gizmo back on the space that tool
- [`active_tool`](fn.active_tool.md#rustdoc-item-11600) — Returns the active tool's name, or `None` when no tool is active.
- [`element_handles`](fn.element_handles.md#rustdoc-item-11235) — What one frame's elements look like and which handle picks each.
- [`element_selection_subject`](fn.element_selection_subject.md#rustdoc-item-11598) — What a tool acts on: the entity the element selection belongs to (or the
- [`has_component_named`](fn.has_component_named.md#rustdoc-item-11428) — Whether `entity` carries a component named `required`.
- [`marquee_selection`](fn.marquee_selection.md#rustdoc-item-11320) — The selection a marquee produces from one frame's projected elements.
- [`selection_frames`](fn.selection_frames.md#rustdoc-item-11597) — The frames the active tool offers for what the gizmo draws on: the element
- [`tool_registry_mut`](fn.tool_registry_mut.md#rustdoc-item-11596) — Returns the world's tool registry, inserting the built-ins when the world

### Type aliases
- [`ToolElementReportFn`](type.ToolElementReportFn.md#rustdoc-item-11002) — Fills `out` with the elements `entity` has, as `world` describes it.
- [`ToolFrameReportFn`](type.ToolFrameReportFn.md#rustdoc-item-11004) — Fills `out` with the frames the tool offers for the selection.
- [`ToolInsertElementFn`](type.ToolInsertElementFn.md#rustdoc-item-11014) — Inserts one element of the tool's component.
- [`ToolKeyFn`](type.ToolKeyFn.md#rustdoc-item-11020) — Answers one key press while the tool owns an element selection.
- [`ToolKindReportFn`](type.ToolKindReportFn.md#rustdoc-item-11001) — Fills `out` with the kinds a tool exposes.
- [`ToolMenuReportFn`](type.ToolMenuReportFn.md#rustdoc-item-11010) — Fills `out` with the menu rows the tool adds for the selection.
- [`ToolMenuRunFn`](type.ToolMenuRunFn.md#rustdoc-item-11012) — Runs one of the tool's menu rows, answering the commands it asks for.
- [`ToolPressFn`](type.ToolPressFn.md#rustdoc-item-11018) — Answers one press on one element of the tool's own kind.
- [`ToolRemoveElementsFn`](type.ToolRemoveElementsFn.md#rustdoc-item-11016) — Removes elements of the tool's component, answering how many it removed.
- [`ToolSelectionChangedFn`](type.ToolSelectionChangedFn.md#rustdoc-item-11022) — Hears every element-selection change, whatever changed it: a click, a
- [`ToolSetTransformsFn`](type.ToolSetTransformsFn.md#rustdoc-item-11003) — Writes moved elements back into the tool's component.

### Constants
- [`ELEMENT_PICK_SLACK_PIXELS`](constant.ELEMENT_PICK_SLACK_PIXELS.md#rustdoc-item-11186) — How far past half an element's pixel size a press still picks it.
- [`RESOURCE_NAME`](constant.RESOURCE_NAME.md#rustdoc-item-11427) — The name [`ToolRegistry`] registers under.
- [`SELECTED_ELEMENT_COLOR`](constant.SELECTED_ELEMENT_COLOR.md#rustdoc-item-11185) — The colour a selected element's handle draws in: the orange the scene's
- [`SPACE_CHOICES_RESOURCE_NAME`](constant.SPACE_CHOICES_RESOURCE_NAME.md#rustdoc-item-11508) — The name [`ToolSpaceChoices`] registers under.
