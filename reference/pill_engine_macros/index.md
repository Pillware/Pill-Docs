<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-445"></a>

# pill_engine_macros API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Procedural macros that remove the hand-written registration and FFI
boilerplate from extension and project crates.

## Responsibilities

- [`PillComponent`]: the `Component` impl plus the descriptor a type submits
  into this artifact's registry. A persistable component also registers for
  schema migration and feeds the project schema fingerprint.
- [`PillLayout`]: the compile-time field layout alone, for a type that
  registers itself and must not auto-register in every artifact that links
  it (engine types, host-linked extensions).
- [`pill_value_type!`](macro.pill_value_type.md#rustdoc-item-362): the layout of a foreign value type, with offsets
  taken from the compiler.
- [`pill_module`](macro.pill_module.md#rustdoc-item-441) / [`pill_project`](macro.pill_project.md#rustdoc-item-442): the loadable-artifact exports
  (`pill_module_init`, `pill_module_abi_version`, the descriptor copies, the
  project's schema fingerprint), behind the panic guard and engine-pointer
  reconstruction every artifact would otherwise have to write itself.
- The mirror attributes ([`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-403), [`pill_mirror_fn`](macro.pill_mirror_fn.md#rustdoc-item-406),
  [`pill_mirror_object`](macro.pill_mirror_object.md#rustdoc-item-407), [`pill_mirror_resource`](macro.pill_mirror_resource.md#rustdoc-item-408), [`PillMirror`]): Rust
  functions and types callable from C# through one C-ABI trampoline shape.

## Design

Generated code names the engine through fully-qualified `::pill_engine::`
paths, so no macro needs to know which crate uses it. Components are
collected with the `inventory` crate, which builds one registry per linked
artifact: each hot-reload generation DLL holds exactly the components its own
sources declared, so a stale generation cannot re-register its types. The
mirror lowering lives in `mirror`.

## Module contents

### Modules
- [`mirror`](mirror/index.md#rustdoc-item-1) — Converts the mirror attributes' Rust signatures and types into the C ABI

### Structs
- [`AccessorEmission`](struct.AccessorEmission.md#rustdoc-item-339) — One trampoline an accessor kind offers, and what the descriptor says about
- [`FieldTag`](struct.FieldTag.md#rustdoc-item-318) — A field's wire tag, together with the accessor set the tag implies.
- [`PatchArguments`](struct.PatchArguments.md#rustdoc-item-417) — Arguments `#[pill_hot_fn]` accepts when it generates a patch body.
- [`ValueTypeDeclaration`](struct.ValueTypeDeclaration.md#rustdoc-item-386) — The `Type { field: type, ... }` form [`pill_value_type!`] accepts.
- [`ValueTypeField`](struct.ValueTypeField.md#rustdoc-item-365) — One `field: type` entry of a [`pill_value_type!`] declaration.

### Enums
- [`HeapFieldKind`](enum.HeapFieldKind.md#rustdoc-item-301) — What the managed side needs to know about one heap-owning field.
- [`LayoutSubject`](enum.LayoutSubject.md#rustdoc-item-251) — Which derive is asking for field descriptors, and so what the emission may

### Functions
- [`add_field_decorator`](fn.add_field_decorator.md#rustdoc-item-288) — Append one parsed field decorator to `decorators`, or refuse the key with
- [`arguments_of_two`](fn.arguments_of_two.md#rustdoc-item-292) — The two arguments of a two-argument decorator, or a usage error.
- [`component_field_descriptors`](fn.component_field_descriptors.md#rustdoc-item-279) — Emit a `static` carrying one [`ComponentFieldDescriptor`] per named field,
- [`container_element_type`](fn.container_element_type.md#rustdoc-item-359) — Extract the element type of a `Vec<E>` or `DynamicBuffer<E>` field.
- [`decorator_arguments`](fn.decorator_arguments.md#rustdoc-item-290) — Read a decorator's parenthesised argument list, insisting the parentheses
- [`emit_heap_field_accessor`](fn.emit_heap_field_accessor.md#rustdoc-item-338) — Emits the accessor trampolines and the descriptor submission for one
- [`emit_resize_trampoline`](fn.emit_resize_trampoline.md#rustdoc-item-354) — Emits the resize trampoline that every container kind shares.
- [`empty_field_layout`](fn.empty_field_layout.md#rustdoc-item-246) — The layout emission for a type with no named fields (unit struct, tuple
- [`field_decorator_list`](fn.field_decorator_list.md#rustdoc-item-285) — The decorator vocabulary as one sentence list, for a refusal message.
- [`field_type_tag`](fn.field_type_tag.md#rustdoc-item-357) — Maps a Rust field type to the closed C#-mirror type-tag vocabulary.
- [`flattened_path`](fn.flattened_path.md#rustdoc-item-355) — Joins a path's segments into one string, with `separator` between them.
- [`handle_field_records`](fn.handle_field_records.md#rustdoc-item-241) — The registration statements that record each top-level `Handle<T>` field's
- [`handle_type_argument`](fn.handle_type_argument.md#rustdoc-item-242) — The `T` of a `Handle<T>` type, written with any path prefix.
- [`heap_owned_rejection`](fn.heap_owned_rejection.md#rustdoc-item-358) — The rejection for a heap-owning type outside the container vocabulary.
- [`hot_patch_resolver_export`](fn.hot_patch_resolver_export.md#rustdoc-item-437) — The exported resolver every loadable artifact provides.
- [`is_primitive_tag`](fn.is_primitive_tag.md#rustdoc-item-360) — Whether a tag names one of the scalar primitives.
- [`layout_emission`](fn.layout_emission.md#rustdoc-item-245) — The inherent `FIELD_LAYOUT` const and `ComponentLayout` impl every
- [`layout_field_impl`](fn.layout_field_impl.md#rustdoc-item-413) — The `Resource` method that reports a declared list, or nothing when the
- [`literal_as_f32`](fn.literal_as_f32.md#rustdoc-item-293) — Read a numeric decorator argument, accepting an integer literal for a
- [`literal_as_usize`](fn.literal_as_usize.md#rustdoc-item-294) — Read a line-count decorator argument, insisting it is a plain integer.
- [`module_abi_version_export`](fn.module_abi_version_export.md#rustdoc-item-440) — Emit the ABI revision export the host reads before it calls anything else.
- [`module_init_export_with`](fn.module_init_export_with.md#rustdoc-item-438) — Emits the `pill_module_init` entry point every loadable artifact exports.
- [`module_register_export`](fn.module_register_export.md#rustdoc-item-439) — Emit the registration-only entry point of an artifact that declares one.
- [`parse_field_decorators`](fn.parse_field_decorators.md#rustdoc-item-286) — Parse the `#[pill(...)]` decorators a field declares into the expression
- [`parse_patch_arguments`](fn.parse_patch_arguments.md#rustdoc-item-434) — Parse `name = "...", self_type = Path` from an attribute argument list.
- [`parse_string_list`](fn.parse_string_list.md#rustdoc-item-414) — Parse a `["a", "b"]` list from one attribute argument.
- [`single_argument`](fn.single_argument.md#rustdoc-item-291) — The one argument of a single-argument decorator, or a usage error.

### Type aliases
- [`DecoratorArguments`](type.DecoratorArguments.md#rustdoc-item-280) — The argument list of a decorator written with parentheses, e.g.

### Constants
- [`FIELD_DECORATOR_USAGE`](constant.FIELD_DECORATOR_USAGE.md#rustdoc-item-284) — Every field decorator a field may declare, with the usage text a refusal

### Procedural macros
- [`pill_hot`](macro.pill_hot.md#rustdoc-item-409) — Marks a system function as hot-patchable, so the host can replace its
- [`pill_hot_fn`](macro.pill_hot_fn.md#rustdoc-item-405) — Makes an ordinary function hot-patchable.
- [`pill_hot_resolver`](macro.pill_hot_resolver.md#rustdoc-item-436) — Emits the hot-patch resolver export on its own.
- [`pill_mirror_fn`](macro.pill_mirror_fn.md#rustdoc-item-406) — Mirrors a free function to C#, as a static method on a static class.
- [`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-403) — Mirrors selected functions of an inherent `impl` block to C#.
- [`pill_mirror_method`](macro.pill_mirror_method.md#rustdoc-item-404) — Marker attribute for functions inside a `#[pill_mirror_impl]` block.
- [`pill_mirror_object`](macro.pill_mirror_object.md#rustdoc-item-407) — Mirrors a Rust type that C# holds by reference: a class wrapping a box the
- [`pill_mirror_resource`](macro.pill_mirror_resource.md#rustdoc-item-408) — Mirrors a world resource to C# under a shared name.
- [`pill_module`](macro.pill_module.md#rustdoc-item-441) — Wraps an extension's `init` function and generates the `pill_module_*`
- [`pill_project`](macro.pill_project.md#rustdoc-item-442) — Wraps a project's `init` function and generates the loadable-artifact exports
- [`pill_value_type`](macro.pill_value_type.md#rustdoc-item-362) — Declares the layout of a foreign value type for the managed mirror.
- [`PillAsset`](macro.PillAsset.md#rustdoc-item-412) — Declares an asset type, so the artifact declares it without a call.
- [`PillComponent`](macro.PillComponent.md#rustdoc-item-240) — Turns a component type into its engine registration.
- [`PillLayout`](macro.PillLayout.md#rustdoc-item-244) — Emits a type's compile-time field layout without the component
- [`PillMirror`](macro.PillMirror.md#rustdoc-item-361) — Turns a plain (non-component) value type, or a fieldless enum, into a typed
- [`PillResource`](macro.PillResource.md#rustdoc-item-411) — Declares an ECS resource, so the artifact declares its type without a call.
- [`system`](macro.system.md#rustdoc-item-410) — Declares an ECS system, so the artifact registers it without a call.
