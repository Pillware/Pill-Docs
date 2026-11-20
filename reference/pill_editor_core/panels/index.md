<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7703"></a>

# Module `pill_editor_core::panels`

Source: `editor\pill_editor_core\src\panels.rs:1`

The editor panels a module registers: their ids, draw functions, a marker
that says whether their module is still loaded, and the dock tab slot they
fill.
Editor panels registered by a module.

## Responsibilities

- Hold the panels editor crates register: an id, a title, the crate that
  registered it, the function that draws it and a liveness marker.
- Tell a live panel from one whose module has been unloaded, so the shell
  can never call into an unloaded image.
- Give each panel a stable slot, which is what a dock tab stores, and keep
  the slot across the registering module's reload.
- Carry [`PanelContext`], the plain data a panel reads and the commands it
  leaves behind.

## Design

[`PanelRegistry`] is a world resource the executable inserts and the shell
reads each frame. A panel's draw function is a plain `fn` pointer into the
registering module's image. The registry hands that pointer out only while
the source's marker is alive: the marker's strong count says whether the
image is still mapped.

Registering is per id, not per crate. A module that reloads registers the
same id again, and that replaces the entry in place (a new function, marker
and epoch) while the slot stays. A module that unloads and never returns
leaves its entry with a dead marker, and the tab says so instead of
vanishing.

## Module contents

### Structs
- [`ModuleLiveness`](struct.ModuleLiveness.md#rustdoc-item-6001) — The liveness marker of one registration source.
- [`PanelAnswer`](struct.PanelAnswer.md#rustdoc-item-7994) — The answer a modal window took, as the panel that asked reads it.
- [`PanelCommands`](struct.PanelCommands.md#rustdoc-item-8220) — The commands this frame's panels asked for, applied by the executable at
- [`PanelComponentValues`](struct.PanelComponentValues.md#rustdoc-item-7876) — One component of the selected entity, as a panel sees it.
- [`PanelContext`](struct.PanelContext.md#rustdoc-item-7736) — What a panel reads and writes while it draws.
- [`PanelEntityDetail`](struct.PanelEntityDetail.md#rustdoc-item-7951) — The selected entity's components, as a panel sees them.
- [`PanelEntityRow`](struct.PanelEntityRow.md#rustdoc-item-7837) — One row of the world's entities, as a panel sees it.
- [`PanelFieldValue`](struct.PanelFieldValue.md#rustdoc-item-7875) — One field value, rendered for a panel.
- [`PanelRegistration`](struct.PanelRegistration.md#rustdoc-item-8065) — One registered panel.
- [`PanelRegistrations`](struct.PanelRegistrations.md#rustdoc-item-8139) — The panel requests queued since the executable last looked.
- [`PanelRegistry`](struct.PanelRegistry.md#rustdoc-item-8176) — Every panel a module registered, live or not.
- [`PanelRequest`](struct.PanelRequest.md#rustdoc-item-8104) — One panel a module asks the editor to register.
- [`PanelWindowRequest`](struct.PanelWindowRequest.md#rustdoc-item-7751) — One window a panel asks the shell for.

### Enums
- [`PanelCommand`](enum.PanelCommand.md#rustdoc-item-7758) — What a panel may ask the editor to do.

### Type aliases
- [`PanelDrawFn`](type.PanelDrawFn.md#rustdoc-item-7735) — The draw function a panel registers.
