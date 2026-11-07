<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6085"></a>

# Module `pill_engine_core::mirror::assets`

Source: `engine\pill_engine_core\src\mirror.rs:655`

The asset store operations every mirrored asset type shares.

`#[pill_mirror_object(asset)]` emits one trampoline per operation per type,
each a single call into here. The C# runtime's `AssetManagerExtensions`
methods reach them by name (`__asset_add`, ...). Slot 0 always holds the
address of the world's `AssetManager`, which the managed side fetched under
the running system's declared access.

Every operation runs through [`invoke`](../fn.invoke.md#rustdoc-item-6103), so a failure
returns [`STATUS_ERROR`](../constant.STATUS_ERROR.md#rustdoc-item-6104) and leaves its message
in the last-error channel.

## Module contents

### Functions
- [`add`](fn.add.md#rustdoc-item-6086) — `assets.add(value)`: slot 1 the value. Returns its handle.
- [`add_named`](fn.add_named.md#rustdoc-item-6087) — `assets.add_named(name, value)`: slot 1 the name, slot 2 the value.
- [`add_named_with_guid`](fn.add_named_with_guid.md#rustdoc-item-6088) — `assets.add_named_with_guid(name, guid, value)`: slot 1 the name, slot 2
- [`asset_manager_from_slot`](fn.asset_manager_from_slot.md#rustdoc-item-6084) — The `AssetManager` a slot addresses.
- [`contains`](fn.contains.md#rustdoc-item-6091) — `assets.contains(handle)`: slot 1 the handle. Returns a `bool`.
- [`guid_of`](fn.guid_of.md#rustdoc-item-6094) — `assets.guid_of(handle)`: slot 1 the handle. Returns the guid as a
- [`guid_text`](fn.guid_text.md#rustdoc-item-6100) — A guid as the string channel carries it: 32 hexadecimal digits, or the
- [`handle_by_guid`](fn.handle_by_guid.md#rustdoc-item-6093) — `assets.handle_by_guid(guid)`: slot 1 the guid as hexadecimal. Returns
- [`handle_by_name`](fn.handle_by_name.md#rustdoc-item-6092) — `assets.handle_by_name(name)`: slot 1 the name. Returns an
- [`import`](fn.import.md#rustdoc-item-6097) — `assets.import(path, policy, settings)`: slot 1 the path below `res`,
- [`import_standalone`](fn.import_standalone.md#rustdoc-item-6098) — `assets.import_standalone(path)`: slot 1 the path below `res`. Writes
- [`metadata_source_code`](fn.metadata_source_code.md#rustdoc-item-6102) — The byte the return buffer carries for a metadata source.
- [`parse_guid`](fn.parse_guid.md#rustdoc-item-6099) — Parse a guid the managed side wrote as 32 hexadecimal digits.
- [`remove`](fn.remove.md#rustdoc-item-6089) — `assets.remove(handle)`: slot 1 the handle. Returns the removed value's
- [`write_import_outcome`](fn.write_import_outcome.md#rustdoc-item-6101) — Write an import result into the return buffer. The handle goes at offset
