<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-322"></a>

# Module `pill_engine::component_registry`

Source: `engine\pill_engine\src\component_registry.rs:1`

Per-DLL component, value-type, method, accessor and export registries.
The per-DLL registries for components, value types, mirrored methods, field
accessors and named exports.

## Responsibilities

- Re-export the engine core's field layouts
  (`pill_engine_core::reflection::component_registry`) under this path.
- Declare the descriptor types the derive and attribute macros submit into
  [`inventory`] collections, and the collections themselves.
- Provide the artifact-wide registration loop, the schema fingerprint of
  the persistable components, and the readers the module/project
  entry-point macros and the host call.

## Design

There is one registry per linked artifact. Every binary and every
hot-reload generation DLL carries its own collection, holding exactly the
components its own sources declared with `#[derive(PillComponent)]`. That
is what makes the registry safe across hot reload: a new generation's
`init` sees only the components that generation declares, so a type a
newer build stops declaring is never registered again from a stale copy,
and an evicted generation DLL takes its descriptors with it.

It is per artifact because this crate is: `pill_engine` is compiled into
every DLL, while the engine core holds only what is the same for all of
them. When the core needs something only a collection knows - a value
type's layout - the calling DLL passes it in.

Registration order is unspecified (linker/initializer order), and that
does no harm: component registration is keyed by `TypeId` and is idempotent.

## Module contents

### Structs
- [`ExportAddress`](struct.ExportAddress.md#rustdoc-item-200) — The address of an exported function, as data.
- [`PillComponentDescriptor`](struct.PillComponentDescriptor.md#rustdoc-item-10) — One component type declared with `#[derive(PillComponent)]`.
- [`PillExportDescriptor`](struct.PillExportDescriptor.md#rustdoc-item-242) — A named C-ABI function an artifact offers to the host, found by name.
- [`PillFieldAccessorDescriptor`](struct.PillFieldAccessorDescriptor.md#rustdoc-item-144) — One heap-owning field accessor declared by `#[derive(PillComponent)]`,
- [`PillMethodDescriptor`](struct.PillMethodDescriptor.md#rustdoc-item-202) — One mirrored Rust function, or one mirrored type, submitted by the mirror
- [`PillValueTypeDescriptor`](struct.PillValueTypeDescriptor.md#rustdoc-item-86) — A plain value type (not a component) declared with `#[derive(PillMirror)]`
- [`PreviousLayoutResolvers`](struct.PreviousLayoutResolvers.md#rustdoc-item-321) — The layout resolvers a world held before this artifact installed its own.
- [`ValueTypeLayoutScope`](struct.ValueTypeLayoutScope.md#rustdoc-item-318) — Holds this artifact's value types installed as the world's layout resolver.

### Functions
- [`copy_descriptors`](fn.copy_descriptors.md#rustdoc-item-314) — Copy up to `max_descriptor_count` descriptors into `out_descriptors`,
- [`declared_names_are_unique`](fn.declared_names_are_unique.md#rustdoc-item-389) — Whether this artifact declares every type name once per kind, logging the
- [`field_accessor_descriptors`](fn.field_accessor_descriptors.md#rustdoc-item-313) — Every heap-field accessor this artifact declares with
- [`find_export`](fn.find_export.md#rustdoc-item-241) — The address of the export named `export_name` among those linked into the
- [`install_value_type_layouts`](fn.install_value_type_layouts.md#rustdoc-item-320) — Install this artifact's value types as the world's field-layout resolver,
- [`mirror_method_descriptors`](fn.mirror_method_descriptors.md#rustdoc-item-312) — Every mirror row this artifact declares: methods
- [`no_registration`](fn.no_registration.md#rustdoc-item-390) — The registration function of an artifact that declares none.
- [`persistable_schema_fingerprint`](fn.persistable_schema_fingerprint.md#rustdoc-item-395) — Fingerprint of the set of persistable components this artifact declares.
- [`register_all_components`](fn.register_all_components.md#rustdoc-item-316) — Register every component this artifact declares with the derive.
- [`resolve_enum_layout`](fn.resolve_enum_layout.md#rustdoc-item-393) — The declared shape of the enum a `struct:<path>` field tag names, among the
- [`resolve_value_type_layout`](fn.resolve_value_type_layout.md#rustdoc-item-392) — The layout of the value type a `struct:<path>` field tag names, among the
- [`restore_value_type_layouts`](fn.restore_value_type_layouts.md#rustdoc-item-323) — Put back the resolvers [`install_value_type_layouts`] replaced.
- [`run_artifact_entry`](fn.run_artifact_entry.md#rustdoc-item-319) — Run one artifact entry point: the transaction every posture shares.
- [`run_artifact_init`](fn.run_artifact_init.md#rustdoc-item-387) — [`run_artifact_entry`] for a module or a project that loads no startup
- [`run_artifact_registration`](fn.run_artifact_registration.md#rustdoc-item-388) — Runs one artifact's registration, and nothing else.
- [`run_project_init`](fn.run_project_init.md#rustdoc-item-391) — [`run_artifact_entry`] for a project, which also loads the startup scene the
- [`value_type_descriptors`](fn.value_type_descriptors.md#rustdoc-item-310) — Every value type this artifact declares with `#[derive(PillMirror)]` or

### Constants
- [`MIRROR_TYPE_ROW`](constant.MIRROR_TYPE_ROW.md#rustdoc-item-201) — The name of a [`PillMethodDescriptor`] row that describes a type rather
- [`OWNER_KIND_ENUM`](constant.OWNER_KIND_ENUM.md#rustdoc-item-194) — A row whose owner is a mirrored enum.
- [`OWNER_KIND_MODULE`](constant.OWNER_KIND_MODULE.md#rustdoc-item-196) — A row for a free function, whose owner is the declaring module.
- [`OWNER_KIND_OBJECT`](constant.OWNER_KIND_OBJECT.md#rustdoc-item-193) — A row whose owner is a `#[pill_mirror_object]`.
- [`OWNER_KIND_RESOURCE`](constant.OWNER_KIND_RESOURCE.md#rustdoc-item-195) — A row whose owner is a mirrored resource.
- [`OWNER_KIND_UNKNOWN`](constant.OWNER_KIND_UNKNOWN.md#rustdoc-item-197) — A row whose owner kind the attribute could not determine.

## Re-exports

- `pub use pill_engine_core::reflection::component_registry;`
