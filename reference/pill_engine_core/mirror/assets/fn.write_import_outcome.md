<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6101"></a>

# Function `pill_engine_core::mirror::assets::write_import_outcome`

```rust
pub(in mirror::assets) unsafe fn write_import_outcome<T: Asset>(outcome: &crate::asset_metadata::ImportOutcome<T>, return_buffer: *mut u8);
```

Visibility: `{'restricted': {'parent': 6085, 'path': '::mirror::assets'}}` · Source: `engine\pill_engine_core\src\mirror.rs:958`

Write an import result into the return buffer. The handle goes at offset
0, the two flag bytes at their named offsets, and the guid through the
string channel.

Both import trampolines answer with this shape, so the layout the
managed side reads is written once.

## Safety

`return_buffer` must address the return buffer the caller promised,
writable for the whole call.
