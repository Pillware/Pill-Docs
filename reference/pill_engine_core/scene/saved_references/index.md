<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7628"></a>

# Module `pill_engine_core::scene::saved_references`

Source: `engine\pill_engine_core\src\scene\saved_references.rs:1`

The saved form of asset and entity references: a guid and a stable id, plus
what a later run needs to find the target again.
The saved form of references: the shape a document written for a later run
stores instead of a [`crate::asset::Handle`](../../assets/storage/struct.Handle.md#rustdoc-item-147) or an [`crate::entity::Entity`](../../ecs/entity/struct.Entity.md#rustdoc-item-2687).

## Responsibilities

- [`SavedAssetReference`]: the guid that authorizes a reference, a
  non-authoritative path hint beside it, and the sub-asset key it may
  carry.
- [`saved_reference`]: one field value as the form a saved document holds -
  an asset's guid or an entity's stable id.
- [`restore_asset_reference`]: the guid back to a field value, loading the
  asset on demand and falling back to the path hint when the guid is
  unknown.
- [`SavedEntityLinks`]: entity references collected while a document is
  read, resolved once every entity of it exists.

## Design

A [`crate::asset::Handle`](../../assets/storage/struct.Handle.md#rustdoc-item-147) is a slot index plus a generation. That pair is
exact while one run lasts, and means nothing in the next run, where the
same asset may sit in a different slot. Hot-reload persistence depends on
that in-run form, so it saves a handle with the handle's own serde and
never passes through this module. Data meant for a later run - a scene, a
material, a render pass - stores the saved form instead, and turns it back
into a handle when the data is read.

Resolving a saved reference is a pair of functions over [`FieldValue`], not
a serde context. A serialization context cannot do the job: it has no
[`AssetManager`] to look a guid up in, and a `Handle` cannot hold a guid
waiting to be resolved, because it is `#[repr(C)]` and `Copy`. So an asset
reference is resolved on first use, and an entity reference once the whole
document has been read.

An unresolvable reference means a missing asset, not a broken program. It
is reported once per guid and resolves to
[`crate::asset::Handle::INVALID`](../../assets/storage/struct.Handle.md#rustdoc-item-1304), which the renderer's caches answer with
their defaults.

## Module contents

### Structs
- [`SavedAssetReference`](struct.SavedAssetReference.md#rustdoc-item-7584) — A saved reference to one asset.
- [`SavedAssetReferenceFields`](struct.SavedAssetReferenceFields.md#rustdoc-item-7631) — The fields of the object form, as they are written and read.
- [`SavedEntityLink`](struct.SavedEntityLink.md#rustdoc-item-7713) — One entity reference a document names, waiting for its entity to exist.
- [`SavedEntityLinks`](struct.SavedEntityLinks.md#rustdoc-item-7749) — The entity references a document holds, resolved in one pass.

### Enums
- [`SavedReference`](enum.SavedReference.md#rustdoc-item-7665) — The saved value of one reference field.

### Functions
- [`asset_field_value_from_outcome`](fn.asset_field_value_from_outcome.md#rustdoc-item-7707) — The asset field value that a loaded asset's outcome describes.
- [`first_report_of`](fn.first_report_of.md#rustdoc-item-7708) — Returns whether this is the first report of `guid` in this process, and
- [`restore_asset_reference`](fn.restore_asset_reference.md#rustdoc-item-7706) — Returns the field value that an asset reference field holds for `saved`,
- [`saved_reference`](fn.saved_reference.md#rustdoc-item-7705) — Returns the saved form of one field value, or `None` when the value
