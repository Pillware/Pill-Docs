<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-551"></a>

# pill_engine_macros API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Procedural macros that remove the hand-written registration and FFI
boilerplate from extension and project crates.

## Responsibilities

- [`component`](macro.component.md#rustdoc-item-240), [`resource`](macro.resource.md#rustdoc-item-461), [`asset`](macro.asset.md#rustdoc-item-463): the declaration an author writes.
  Each expands to the matching derive plus its arguments, so the derive
  form stays the documented expansion.
- [`PillComponent`]: the `Component` impl plus the descriptor a type submits
  into this artifact's registry. A persistable component also registers for
  schema migration and feeds the project schema fingerprint.
- [`PillLayout`]: the compile-time field layout alone, for a type that
  registers itself and must not auto-register in every artifact that links
  it (engine types, host-linked extensions).
- [`pill_value_type!`](macro.pill_value_type.md#rustdoc-item-386): the layout of a foreign value type, with offsets
  taken from the compiler.
- [`script`](macro.script.md#rustdoc-item-435): the declaration a script component's implementation states -
  which lifecycle methods it defines, their orders and its edit-mode flag -
  plus the descriptor the artifact entry point registers the script from.
- [`pill_module`](macro.pill_module.md#rustdoc-item-547) / [`pill_project`](macro.pill_project.md#rustdoc-item-548): the loadable-artifact exports
  (`pill_module_init`, `pill_module_abi_version`, the descriptor copies, the
  project's schema fingerprint), behind the panic guard and engine-pointer
  reconstruction every artifact would otherwise have to write itself.
- The mirror attributes ([`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-427), [`pill_mirror_fn`](macro.pill_mirror_fn.md#rustdoc-item-430),
  [`pill_mirror_object`](macro.pill_mirror_object.md#rustdoc-item-431), [`pill_mirror_resource`](macro.pill_mirror_resource.md#rustdoc-item-432), [`PillMirror`]): Rust
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
- [`AccessorEmission`](struct.AccessorEmission.md#rustdoc-item-361) — One trampoline an accessor kind offers, and what the descriptor says about
- [`DeclarationAttribute`](struct.DeclarationAttribute.md#rustdoc-item-494) — One declaration attribute: the derive it stands for and the arguments it
- [`FieldEnumVariant`](struct.FieldEnumVariant.md#rustdoc-item-285) — One variant of a component's generated field enum: the variant, the field
- [`FieldTag`](struct.FieldTag.md#rustdoc-item-340) — A field's wire tag, together with the accessor set the tag implies.
- [`LifecycleMethodOrders`](struct.LifecycleMethodOrders.md#rustdoc-item-441) — The lifecycle methods one `#[script]` block declares, each with its order
- [`PatchArguments`](struct.PatchArguments.md#rustdoc-item-523) — Arguments `#[pill_hot_fn]` accepts when it generates a patch body.
- [`ValueTypeDeclaration`](struct.ValueTypeDeclaration.md#rustdoc-item-410) — The `Type { field: type, ... }` form [`pill_value_type!`] accepts.
- [`ValueTypeField`](struct.ValueTypeField.md#rustdoc-item-389) — One `field: type` entry of a [`pill_value_type!`] declaration.

### Enums
- [`DeclarationExtras`](enum.DeclarationExtras.md#rustdoc-item-470) — What one declaration attribute adds beyond the derive it expands to.
- [`HeapFieldKind`](enum.HeapFieldKind.md#rustdoc-item-323) — What the managed side needs to know about one heap-owning field.
- [`LayoutSubject`](enum.LayoutSubject.md#rustdoc-item-252) — Which derive is asking for field descriptors, and so what the emission may

### Functions
- [`add_field_decorator`](fn.add_field_decorator.md#rustdoc-item-310) — Append one parsed field decorator to `decorators`, or refuse the key with
- [`arguments_of_two`](fn.arguments_of_two.md#rustdoc-item-314) — The two arguments of a two-argument decorator, or a usage error.
- [`asset_impl`](fn.asset_impl.md#rustdoc-item-520) — Expands `#[asset(...)]`, for the tests that drive the expansion.
- [`component_field_descriptors`](fn.component_field_descriptors.md#rustdoc-item-281) — Emit a `static` carrying one [`ComponentFieldDescriptor`] per named field,
- [`component_impl`](fn.component_impl.md#rustdoc-item-518) — Expands `#[component(...)]`, for the tests that drive the expansion.
- [`container_element_type`](fn.container_element_type.md#rustdoc-item-383) — Extract the element type of a `Vec<E>` or `DynamicBuffer<E>` field.
- [`crate_qualified_type_name`](fn.crate_qualified_type_name.md#rustdoc-item-377) — The stored name of the type `ident` declares: `<crate>::<Type>`.
- [`decorator_arguments`](fn.decorator_arguments.md#rustdoc-item-312) — Read a decorator's parenthesised argument list, insisting the parentheses
- [`derive_type_names`](fn.derive_type_names.md#rustdoc-item-514) — The last path segment of every type one `#[derive(...)]` attribute lists.
- [`emit_heap_field_accessor`](fn.emit_heap_field_accessor.md#rustdoc-item-360) — Emits the accessor trampolines and the descriptor submission for one
- [`emit_resize_trampoline`](fn.emit_resize_trampoline.md#rustdoc-item-376) — Emits the resize trampoline that every container kind shares.
- [`empty_field_layout`](fn.empty_field_layout.md#rustdoc-item-247) — The layout emission for a type with no named fields (unit struct, tuple
- [`field_decorator_list`](fn.field_decorator_list.md#rustdoc-item-307) — The decorator vocabulary as one sentence list, for a refusal message.
- [`field_enum_emission`](fn.field_enum_emission.md#rustdoc-item-301) — The `<Type>Field` enum and the `ComponentFields` link that names it from
- [`field_type_tag`](fn.field_type_tag.md#rustdoc-item-381) — Maps a Rust field type to the closed C#-mirror type-tag vocabulary.
- [`field_variant_ident`](fn.field_variant_ident.md#rustdoc-item-300) — The variant name for one field: the field's name in PascalCase.
- [`flattened_path`](fn.flattened_path.md#rustdoc-item-379) — Joins a path's segments into one string, with `separator` between them.
- [`handle_field_records`](fn.handle_field_records.md#rustdoc-item-242) — The registration statements that record each top-level `Handle<T>` field's
- [`handle_type_argument`](fn.handle_type_argument.md#rustdoc-item-243) — The `T` of a `Handle<T>` type, written with any path prefix.
- [`heap_owned_rejection`](fn.heap_owned_rejection.md#rustdoc-item-382) — The rejection for a heap-owning type outside the container vocabulary.
- [`hot_patch_resolver_export`](fn.hot_patch_resolver_export.md#rustdoc-item-543) — The exported resolver every loadable artifact provides.
- [`is_primitive_tag`](fn.is_primitive_tag.md#rustdoc-item-384) — Whether a tag names one of the scalar primitives.
- [`layout_emission`](fn.layout_emission.md#rustdoc-item-246) — The inherent `FIELD_LAYOUT` const and `ComponentLayout` impl every
- [`layout_field_impl`](fn.layout_field_impl.md#rustdoc-item-465) — The `Resource` method that reports a declared list, or nothing when the
- [`literal_as_f32`](fn.literal_as_f32.md#rustdoc-item-315) — Read a numeric decorator argument, accepting an integer literal for a
- [`literal_as_usize`](fn.literal_as_usize.md#rustdoc-item-316) — Read a line-count decorator argument, insisting it is a plain integer.
- [`module_abi_version_export`](fn.module_abi_version_export.md#rustdoc-item-546) — Emit the ABI revision export the host reads before it calls anything else.
- [`module_init_export_with`](fn.module_init_export_with.md#rustdoc-item-544) — Emits the `pill_module_init` entry point every loadable artifact exports.
- [`module_register_export`](fn.module_register_export.md#rustdoc-item-545) — Emit the registration-only entry point of an artifact that declares one.
- [`parse_field_decorators`](fn.parse_field_decorators.md#rustdoc-item-308) — Parse the `#[pill(...)]` decorators a field declares into the expression
- [`parse_patch_arguments`](fn.parse_patch_arguments.md#rustdoc-item-540) — Parse `name = "...", self_type = Path` from an attribute argument list.
- [`parse_string_list`](fn.parse_string_list.md#rustdoc-item-466) — Parse a `["a", "b"]` list from one attribute argument.
- [`resource_impl`](fn.resource_impl.md#rustdoc-item-519) — Expands `#[resource(...)]`, for the tests that drive the expansion.
- [`self_type_ident`](fn.self_type_ident.md#rustdoc-item-460) — The identifier a block's self type registers under, or `None` for a type
- [`serde_derive_attributes`](fn.serde_derive_attributes.md#rustdoc-item-513) — The serde derives, and the crate path they resolve through, that a
- [`single_argument`](fn.single_argument.md#rustdoc-item-313) — The one argument of a single-argument decorator, or a usage error.
- [`validated_shared_name`](fn.validated_shared_name.md#rustdoc-item-378) — Checks a pinned shared name and returns it: `<prefix>::<Type>`, two

### Type aliases
- [`DecoratorArguments`](type.DecoratorArguments.md#rustdoc-item-302) — The argument list of a decorator written with parentheses, e.g.

### Constants
- [`ASSET_DECLARATION`](constant.ASSET_DECLARATION.md#rustdoc-item-517) — The `#[asset(...)]` declaration.
- [`COMPONENT_DECLARATION`](constant.COMPONENT_DECLARATION.md#rustdoc-item-515) — The `#[component(...)]` declaration.
- [`FIELD_DECORATOR_USAGE`](constant.FIELD_DECORATOR_USAGE.md#rustdoc-item-306) — Every field decorator a field may declare, with the usage text a refusal
- [`RESOURCE_DECLARATION`](constant.RESOURCE_DECLARATION.md#rustdoc-item-516) — The `#[resource(...)]` declaration.

### Procedural macros
- [`asset`](macro.asset.md#rustdoc-item-463) — Declares an asset type, so the artifact declares it without a call.
- [`component`](macro.component.md#rustdoc-item-240) — Declares an ECS component, so the artifact registers its type without a call.
- [`pill_hot`](macro.pill_hot.md#rustdoc-item-433) — Marks a system function as hot-patchable, so the host can replace its
- [`pill_hot_fn`](macro.pill_hot_fn.md#rustdoc-item-429) — Makes an ordinary function hot-patchable.
- [`pill_hot_resolver`](macro.pill_hot_resolver.md#rustdoc-item-542) — Emits the hot-patch resolver export on its own.
- [`pill_mirror_fn`](macro.pill_mirror_fn.md#rustdoc-item-430) — Mirrors a free function to C#, as a static method on a static class.
- [`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-427) — Mirrors selected functions of an inherent `impl` block to C#.
- [`pill_mirror_method`](macro.pill_mirror_method.md#rustdoc-item-428) — Marker attribute for functions inside a `#[pill_mirror_impl]` block.
- [`pill_mirror_object`](macro.pill_mirror_object.md#rustdoc-item-431) — Mirrors a Rust type that C# holds by reference: a class wrapping a box the
- [`pill_mirror_resource`](macro.pill_mirror_resource.md#rustdoc-item-432) — Mirrors a world resource to C# under a shared name.
- [`pill_module`](macro.pill_module.md#rustdoc-item-547) — Wraps an extension's `init` function and generates the `pill_module_*`
- [`pill_project`](macro.pill_project.md#rustdoc-item-548) — Wraps a project's `init` function and generates the loadable-artifact exports
- [`pill_value_type`](macro.pill_value_type.md#rustdoc-item-386) — Declares the layout of a foreign value type for the managed mirror.
- [`PillAsset`](macro.PillAsset.md#rustdoc-item-464) — Declares an asset type, so the artifact declares it without a call.
- [`PillComponent`](macro.PillComponent.md#rustdoc-item-241) — Turns a component type into its engine registration.
- [`PillLayout`](macro.PillLayout.md#rustdoc-item-245) — Emits a type's compile-time field layout without the component
- [`PillMirror`](macro.PillMirror.md#rustdoc-item-385) — Turns a plain (non-component) value type, or a fieldless enum, into a typed
- [`PillResource`](macro.PillResource.md#rustdoc-item-462) — Declares an ECS resource, so the artifact declares its type without a call.
- [`resource`](macro.resource.md#rustdoc-item-461) — Declares an ECS resource, so the artifact declares its type without a call.
- [`script`](macro.script.md#rustdoc-item-435) — Declares a script component, so the engine registers its lifecycle methods
- [`system`](macro.system.md#rustdoc-item-434) — Declares an ECS system, so the artifact registers it without a call.
