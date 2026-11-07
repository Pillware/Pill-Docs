<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6097"></a>

# Function `pill_engine_core::mirror::assets::import`

```rust
pub unsafe fn import<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: ImportedAsset;
```

Source: `engine\pill_engine_core\src\mirror.rs:870`

`assets.import(path, policy, settings)`: slot 1 the path below `res`,
slot 2 the policy (`0` read if present, `1` create if missing), slot 3
the initial settings as JSON (empty for the type's defaults).

Writes the handle at offset 0, an "already loaded" byte at
[`IMPORT_ALREADY_LOADED_OFFSET`](../constant.IMPORT_ALREADY_LOADED_OFFSET.md#rustdoc-item-6095) and a metadata-source byte at
[`IMPORT_METADATA_SOURCE_OFFSET`](../constant.IMPORT_METADATA_SOURCE_OFFSET.md#rustdoc-item-6096) (`0` a file, `1` written now, `2`
memory only). Returns the guid through the string channel, empty when
the asset carries none. That is the encoding [`guid_of`](fn.guid_of.md#rustdoc-item-6094) already uses.

## Safety

As [`add`](fn.add.md#rustdoc-item-6086).
