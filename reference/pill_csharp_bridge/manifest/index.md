<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1247"></a>

# Module `pill_csharp_bridge::manifest`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:1`

C# component manifest schema, field validation, and engine type mapping.
Managed component manifest schema, validation, and engine type mapping.

## Responsibilities

- Define the manifest entries a managed assembly submits: components and
  resources, with their identities, sizes and field trees.
- Validate field trees against the blittable vocabulary the byte-level
  column storage requires.
- Map managed field types onto the engine's field descriptors, and intern
  the strings a manifest-declared component has no static to borrow from.

## Design

A manifest is the managed side's only description of a component: its
identity, layout and fields, sent as JSON bytes in the pending-manifest
payload. The storage it feeds is a raw byte buffer, so the validation here
is what makes that storage's `Send`/`Sync` claim true: every field must be
a blittable value with no ownership and nothing to release.

The types stay `Deserialize`-only. The host parses a manifest and never
writes one, so there is no serializer to keep in step with.

## Module contents

### Structs
- [`BlittableLeaf`](struct.BlittableLeaf.md#rustdoc-item-1257) — What one accepted leaf type means to the host.
- [`ManagedFieldManifest`](struct.ManagedFieldManifest.md#rustdoc-item-1337) — Deserialized field entry within a managed component manifest.
- [`ManagedManifestEntry`](struct.ManagedManifestEntry.md#rustdoc-item-893) — One entry deserialized from the manifest a managed assembly submits.

### Enums
- [`DefaultLiteral`](enum.DefaultLiteral.md#rustdoc-item-1256) — How a leaf type's `default:` literal turns into native bytes.
- [`ManagedFieldDecorator`](enum.ManagedFieldDecorator.md#rustdoc-item-1414) — One presentation decorator a managed field declares.
- [`ManifestEntryKind`](enum.ManifestEntryKind.md#rustdoc-item-1334) — What one managed manifest entry declares.

### Functions
- [`blittable_leaf`](fn.blittable_leaf.md#rustdoc-item-1324) — The vocabulary row for one managed type, when it is an accepted leaf.
- [`build_field_plan`](fn.build_field_plan.md#rustdoc-item-986) — Build the byte plan from the field layout a component has now to the one a
- [`field_decorations`](fn.field_decorations.md#rustdoc-item-1495) — The editor decorators a managed field declares, in the form the layout
- [`format_field_layout_line`](fn.format_field_layout_line.md#rustdoc-item-1503) — Render a registered field layout as one stable, parseable line so
- [`handle_asset_path`](fn.handle_asset_path.md#rustdoc-item-1322) — The Rust type path of a handle field's asset type, when the field is one.
- [`handle_tag`](fn.handle_tag.md#rustdoc-item-1323) — The engine tag a handle field is recorded under, such as
- [`intern`](fn.intern.md#rustdoc-item-1502) — Return a `&'static str` equal to `text`. Only the first call for a given
- [`is_blittable`](fn.is_blittable.md#rustdoc-item-1325) — Whether a manifest may declare a field of this type. That is an accepted
- [`managed_field_layout`](fn.managed_field_layout.md#rustdoc-item-1497) — Convert the top-level fields of a managed component into engine descriptors.
- [`manifest_field_tag`](fn.manifest_field_tag.md#rustdoc-item-1498) — The engine-vocabulary tag a field takes in a migration plan.
- [`parse_and_validate_manifest`](fn.parse_and_validate_manifest.md#rustdoc-item-1504) — Parse a managed manifest and check every entry against its own identity.
- [`parse_default_bytes`](fn.parse_default_bytes.md#rustdoc-item-1499) — Parse one field default literal into native-endian bytes.
- [`plan_tag`](fn.plan_tag.md#rustdoc-item-1500) — Reduce a field's type tag to what the migration plan compares.
- [`split_manifest_kinds`](fn.split_manifest_kinds.md#rustdoc-item-1505) — Split one parsed manifest into its component and resource halves.
- [`validate_decorations`](fn.validate_decorations.md#rustdoc-item-1460) — Reject a presentation decorator that cannot mean what it says.
- [`validate_field_manifest`](fn.validate_field_manifest.md#rustdoc-item-1494) — Check that one field and all of its nested fields fit inside the struct
- [`validate_sibling_non_overlap`](fn.validate_sibling_non_overlap.md#rustdoc-item-1493) — Reject sibling fields that share any byte range.

### Constants
- [`BLITTABLE_LEAVES`](constant.BLITTABLE_LEAVES.md#rustdoc-item-1321) — The managed blittable field vocabulary: one row per accepted leaf type.
- [`HANDLE_ALIGNMENT`](constant.HANDLE_ALIGNMENT.md#rustdoc-item-1251)
- [`HANDLE_PREFIX`](constant.HANDLE_PREFIX.md#rustdoc-item-1249) — The prefix of a `Handle<T>` field's type. What follows is the Rust type
- [`HANDLE_SIZE`](constant.HANDLE_SIZE.md#rustdoc-item-1250) — A handle's size and alignment: two `u32`s, `index` then `generation`.
- [`MAX_FIELD_NESTING_DEPTH`](constant.MAX_FIELD_NESTING_DEPTH.md#rustdoc-item-1246) — Maximum nesting depth accepted in a managed component field tree.
- [`STRUCT_TYPE`](constant.STRUCT_TYPE.md#rustdoc-item-1248) — The nested-struct marker. Validation descends into a nested struct's

### Statics
- [`INTERNED_FIELD_STRINGS`](static.INTERNED_FIELD_STRINGS.md#rustdoc-item-1501) — Strings handed to the engine as `&'static str`, stored once per value.
