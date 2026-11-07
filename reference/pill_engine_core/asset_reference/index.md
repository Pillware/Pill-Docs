<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2153"></a>

# Module `pill_engine_core::asset_reference`

Source: `engine\pill_engine_core\src\asset_reference.rs:1`

Saved references to assets, by guid, that point at the asset in a later
run.
A saved reference to an asset: [`AssetReference`](struct.AssetReference.md#rustdoc-item-1302).

## Responsibilities

- Store an asset by its guid in data written to disk. A set guid is
  written as `{"guid": "<32 hex digits>"}`; an unset one as `null`.
- Turn that guid back into the live [`Handle`](../asset/struct.Handle.md#rustdoc-item-869) when the data is loaded.
  A guid that no loaded asset has becomes [`Handle::INVALID`](../asset/struct.Handle.md#rustdoc-item-870), and it is
  reported once.

## Design

A [`Handle`](../asset/struct.Handle.md#rustdoc-item-869) is a slot index and a generation. That is exact and cheap
while the game runs, but it means nothing in the next run, where the same
asset may sit in a different slot. Hot-reload persistence keeps a handle
as its `(index, generation)` pair, so that in-run form has to stay as it
is. Anything written for a later run - a scene, a material file - stores
an `AssetReference` instead and turns it back into a handle once loaded.

An unresolved reference means a missing asset, not a broken program. It
resolves to [`Handle::INVALID`](../asset/struct.Handle.md#rustdoc-item-870), and the renderer's caches answer that
with the default material, shader or texture; an instance whose mesh
never uploaded is not drawn at all. Each guid is reported once, not once
per frame.

## Module contents

### Structs
- [`AssetReference`](struct.AssetReference.md#rustdoc-item-1302) — A saved reference to an asset of type `T`, stored as the asset's guid.
