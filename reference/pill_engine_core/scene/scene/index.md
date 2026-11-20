<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7827"></a>

# Module `pill_engine_core::scene::scene`

Source: `engine\pill_engine_core\src\scene\scene.rs:1`

A scene: a world's entities, components and references as one standalone
asset that loads back into a world.
A scene: the entities of a world, the components that can be saved and
their references, written as one standalone asset in `res`.

## Responsibilities

- [`SceneDocument`](struct.SceneDocument.md#rustdoc-item-978): what a `.scene` file holds - one entry per entity, its
  stable [`EntityId`], and its components by registered type name, each a
  map of field name to the value the field layer reads.
- [`save_scene`](fn.save_scene.md#rustdoc-item-7913): a world's entities as that document, with references in
  their saved form.
- [`load_scene`](fn.load_scene.md#rustdoc-item-7962): the document back into a world - entities created under
  the ids it carries, components re-attached by name, asset references
  loaded on demand and entity references resolved once every entity exists.
- [`Scene`](struct.Scene.md#rustdoc-item-1366): the asset type itself, so a scene can be named by a handle and
  loaded by its `.scene` extension.

## Design

The field layer - the engine code that reads and writes a component's
fields by name - writes the document, not each component's own serde. A
handle field is saved as its guid and an entity field as its stable id. A
component that serializes a handle as a slot index and a generation would
write numbers that mean nothing in a later run, so the field layer, which
knows what a reference is, is the writer.

A field the field layer can describe but not read out (a `vec:` or
`dynbuf:` container, or a `string`) is not written, and
[`SceneSave::skipped_fields`](struct.SceneSave.md#rustdoc-item-7910) names it, so a save that loses data says so
instead of looking complete. A field it can find but not interpret (a
`struct:` with no known layout) is saved as its raw bytes and written back
unchanged. A whole component it cannot reach - one it cannot resolve, one
with no layout, or a row it cannot read - is left out and named in
[`SceneSave::skipped_components`](struct.SceneSave.md#rustdoc-item-7911), which the caller has to report.

Loading runs four passes in this order: create every entity, attach every
component, write every field, then resolve the entity references. A
component and its fields must exist before a reference is written into
them. An entity reference may also name an entity that comes later in the
file, so the last pass waits until every entity exists.

## Module contents

### Structs
- [`Scene`](struct.Scene.md#rustdoc-item-1366) — A scene asset. It holds the document it was loaded from, and components
- [`SceneDocument`](struct.SceneDocument.md#rustdoc-item-978) — The body of a `.scene` file.
- [`SceneEntity`](struct.SceneEntity.md#rustdoc-item-7788) — One entity in a scene document.
- [`SceneLoad`](struct.SceneLoad.md#rustdoc-item-981) — What [`load_scene`] made of a document.
- [`SceneSave`](struct.SceneSave.md#rustdoc-item-7914) — What [`save_scene`] wrote, and what it could not.

### Enums
- [`AttachError`](enum.AttachError.md#rustdoc-item-8003) — Why a scene document's component could not be attached.
- [`DecodedField`](enum.DecodedField.md#rustdoc-item-8041) — What one document value means for the field it is written into.

### Functions
- [`attach_component`](fn.attach_component.md#rustdoc-item-8032) — Attaches `component_name` to `entity` with a zero-filled image, and reports
- [`bytes_of`](fn.bytes_of.md#rustdoc-item-7954) — Returns the bytes `text` spells as hex, or `None` when it is not hex.
- [`cleared_reference_value`](fn.cleared_reference_value.md#rustdoc-item-8072) — The value that restores a reference field the document wrote as `null`.
- [`decode_opaque_field`](fn.decode_opaque_field.md#rustdoc-item-8069) — Returns the raw bytes an opaque field was written from, tagged with the
- [`decoded_enum_field`](fn.decoded_enum_field.md#rustdoc-item-8070) — Decodes an enum field's document value: a variant name, a discriminant, or
- [`decoded_field`](fn.decoded_field.md#rustdoc-item-8065) — Decodes one document value for the field tagged `tag`.
- [`deserialize_component_map`](fn.deserialize_component_map.md#rustdoc-item-7828) — Reads an entity's component map with every component name in its current
- [`encode_field_value`](fn.encode_field_value.md#rustdoc-item-7951) — Returns one field value the way a scene document stores it, or `None` when
- [`hex_of`](fn.hex_of.md#rustdoc-item-7953) — Returns `bytes` as lowercase hex, the form an opaque payload is written in.
- [`is_set_reference`](fn.is_set_reference.md#rustdoc-item-7952) — Returns whether `field_value` names an asset or an entity. Only the two
- [`join_command_errors`](fn.join_command_errors.md#rustdoc-item-8033) — Renders a failed command batch as one reason string.
- [`legacy_opaque_discriminant`](fn.legacy_opaque_discriminant.md#rustdoc-item-8071) — The discriminant an opaque `{ "opaque": <hex>, "tag": ... }` payload holds
- [`load_scene`](fn.load_scene.md#rustdoc-item-7962) — Instantiates a scene document into a world.
- [`load_scene_in_current_origin`](fn.load_scene_in_current_origin.md#rustdoc-item-7999) — [`load_scene`], with the caller's change origin already in place.
- [`narrow_to_f32`](fn.narrow_to_f32.md#rustdoc-item-8068) — A number narrowed to an `f32`, refusing the one cast that changes its kind:
- [`narrow_to_signed`](fn.narrow_to_signed.md#rustdoc-item-8066) — A whole number narrowed to a signed field's own type.
- [`narrow_to_unsigned`](fn.narrow_to_unsigned.md#rustdoc-item-8067) — A whole number narrowed to an unsigned field's own type, refusing a
- [`save_scene`](fn.save_scene.md#rustdoc-item-7913) — Writes a world's entities into a scene document.

### Type aliases
- [`ComponentMap`](type.ComponentMap.md#rustdoc-item-7826) — One entity's components as a scene document stores them: field values by

### Constants
- [`SCENE_SHARED_NAME`](constant.SCENE_SHARED_NAME.md#rustdoc-item-7909) — The shared name of [`Scene`], written as a literal: the key the import
