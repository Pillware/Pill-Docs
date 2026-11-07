<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-781"></a>

# Module `pill_csharp_bridge::components`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:1`

C# component identities, native bindings, and manifest registration.
C# component identities, native bindings, and manifest registration.

## Responsibilities

- Define the stable identity a managed component is addressed by, and the
  binding that ties it to native or managed storage.
- Keep the live binding table ([`BindingStore`]) that a running managed
  project reads its columns through.
- Expose extension components to managed code by name
  ([`ModuleExposedComponent`](struct.ModuleExposedComponent.md#rustdoc-item-510)).
- Register a reflected component manifest; the schema model and its
  validation live in [`manifest`](../manifest/index.md#rustdoc-item-1247).
- Supply the component half of the shared reload pipeline, as
  [`COMPONENT_SUBJECT`]; the stages it runs through live in
  [`manifest_apply`](../manifest_apply/index.md#rustdoc-item-970).

## Design

The shared components (`TransformComponent`, `MeshRendererComponent` and
the rest) resolve to the Rust types the host links in every posture, so a
headless host binds them exactly as a windowed one does. Every managed
component is addressed by a [`StableComponentId`], a hash of its canonical
full name. [`ComponentBinding`] records whether the storage behind that
identity is a managed layout of raw bytes or a native column that an
extension registered.

A reload has no apply loop of its own. It hands the binding table and the
arriving declarations to the pipeline that every manifest kind runs
through, together with [`COMPONENT_SUBJECT`], which holds the parts a
component does differently from a resource.

## Module contents

### Structs
- [`BindingStore`](struct.BindingStore.md#rustdoc-item-496) — The live binding table, replaceable while a managed project runs.
- [`ManifestApplyReport`](struct.ManifestApplyReport.md#rustdoc-item-903) — What one applied manifest changed, for the caller's log line.
- [`ModuleExposedComponent`](struct.ModuleExposedComponent.md#rustdoc-item-510) — One native component an extension registered, exposed to managed code under
- [`StableComponentId`](struct.StableComponentId.md#rustdoc-item-219) — Stable 128-bit identity of a managed component, derived from its name.

### Enums
- [`ComponentBinding`](enum.ComponentBinding.md#rustdoc-item-687) — Tells the bridge where one managed identity's storage lives.
- [`ComponentUndo`](enum.ComponentUndo.md#rustdoc-item-946) — One applied component entry, recorded so a later refusal can be undone.

### Functions
- [`apply_component_manifest_on_reload`](fn.apply_component_manifest_on_reload.md#rustdoc-item-933) — Apply a swapped assembly's component manifest to the live world.
- [`check_binding_against_manifest`](fn.check_binding_against_manifest.md#rustdoc-item-894) — Check one manifest entry against the binding the host already holds.
- [`component_binding_name`](fn.component_binding_name.md#rustdoc-item-972) — The name a live binding's component is registered under.
- [`exposed_components_from_names`](fn.exposed_components_from_names.md#rustdoc-item-886) — Turn registered component names into the layouts that C# binds against.
- [`managed_binding`](fn.managed_binding.md#rustdoc-item-983) — The binding one arriving manifest entry describes.
- [`managed_field_signature`](fn.managed_field_signature.md#rustdoc-item-892) — Hash of the public fields a managed mirror declares, in the form
- [`module_native_bindings`](fn.module_native_bindings.md#rustdoc-item-889) — Build byte-level bindings for every extension component exposed to
- [`record_managed_asset_fields`](fn.record_managed_asset_fields.md#rustdoc-item-982) — Record which asset type each `Handle<T>` field of a managed component
- [`register_component_entry`](fn.register_component_entry.md#rustdoc-item-977) — Register one manifest entry the binding table has no entry for.
- [`register_component_manifest`](fn.register_component_manifest.md#rustdoc-item-890) — Validate and register all components discovered in the managed assembly.
- [`register_managed_storage`](fn.register_managed_storage.md#rustdoc-item-976) — The one registration sequence: startup and every reload action (add,
- [`rename_component_entry`](fn.rename_component_entry.md#rustdoc-item-979) — Register the successor of a renamed component and move the rows across.
- [`report_retyped_fields`](fn.report_retyped_fields.md#rustdoc-item-984) — Report the fields a migration reset, once per component.
- [`reshape_component_entry`](fn.reshape_component_entry.md#rustdoc-item-978) — Migrate one managed component's rows into the arriving layout.
- [`resolve_component_alias`](fn.resolve_component_alias.md#rustdoc-item-973) — Resolve one alias to the managed binding it names, if any.
- [`resolve_exposed_component_id`](fn.resolve_exposed_component_id.md#rustdoc-item-888) — Resolve one exposed component name to its engine [`ComponentId`], reporting
- [`rollback_field_plan`](fn.rollback_field_plan.md#rustdoc-item-987) — Build the plan that puts a component back to a recorded field layout.
- [`settle_component`](fn.settle_component.md#rustdoc-item-974) — Decide what an arriving entry means for the binding already registered.
- [`stable_component_id`](fn.stable_component_id.md#rustdoc-item-734) — Hash a canonical managed full name into its stable 128-bit identity.
- [`undo_component_entry`](fn.undo_component_entry.md#rustdoc-item-981) — Reverse one applied component entry, best effort.

### Type aliases
- [`ComponentBindings`](type.ComponentBindings.md#rustdoc-item-778) — Maps every stable managed identity to its native or managed binding.

### Constants
- [`COMPONENT_SUBJECT`](constant.COMPONENT_SUBJECT.md#rustdoc-item-932) — The actions the shared apply pipeline needs for managed components.
