<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3089"></a>

# Module `pill_engine_core::component_field::codec`

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:1`

Scalar and container encode/decode for component field rows.

## Responsibilities

- Read a row's bytes as a [`FieldValue`](../enum.FieldValue.md#rustdoc-item-3110): a scalar, an
  asset or entity reference, a whole fixed array, a heap container read
  through its real header, or an opaque copy of bytes the engine cannot
  interpret.
- Encode a value back into row bytes for every field the generic write path
  accepts: scalars, handles, entity references and fixed arrays of scalars.
  Heap containers are read-only here and every write to one is refused.
- Own the size facts a row is validated against - handle size, entity
  reference size, the array element size - so the reads and the writes
  agree on them.

## Design

The standard library does not fix the field order of a `Vec` or a `String`
header, so the code measures the offsets once at runtime
(`std_container_offsets`) instead of assuming them. The two places that turn
those words into a memory access explain in a `// SAFETY:` comment why the
access is sound. Rows are native-endian, as the module's row byte convention
states, so the scalar paths are plain `from_ne_bytes`/`to_ne_bytes`.

## Module contents

### Enums
- [`ScalarKind`](enum.ScalarKind.md#rustdoc-item-3104) — The scalar primitives the field vocabulary names.

### Functions
- [`array_element_size`](fn.array_element_size.md#rustdoc-item-3151) — The number of bytes one fixed-array element occupies, from the descriptor.
- [`container_header`](fn.container_header.md#rustdoc-item-3155) — Read the `(pointer, length)` header of a std heap container field.
- [`decode_field`](fn.decode_field.md#rustdoc-item-3157) — Decode one field (scalar, whole array, heap container, or opaque) from a
- [`decode_scalar`](fn.decode_scalar.md#rustdoc-item-3150) — Decode one scalar from a byte buffer at `offset`.
- [`decode_tagged`](fn.decode_tagged.md#rustdoc-item-3158) — Decode one value of a tag from a row image.
- [`encode_field_write`](fn.encode_field_write.md#rustdoc-item-3162) — Encode one field value into the bytes a row write should carry.
- [`encode_scalar`](fn.encode_scalar.md#rustdoc-item-3149) — Encode one scalar value into `encoded_bytes`, returning whether the tag
- [`header_word`](fn.header_word.md#rustdoc-item-3152) — Read one machine word out of a row image.
- [`header_words_of`](fn.header_words_of.md#rustdoc-item-3154) — The three header words of a `String`, in the order the compiler laid them
- [`is_scalar_tag`](fn.is_scalar_tag.md#rustdoc-item-3148) — Whether a tag names one of the scalar primitives.
- [`native_buffer_header`](fn.native_buffer_header.md#rustdoc-item-3156) — Read the `(pointer, length)` header of an engine-owned native buffer field.
- [`scalar_size`](fn.scalar_size.md#rustdoc-item-3147) — The size in bytes of one scalar whose tag is in the closed vocabulary.
- [`std_container_offsets`](fn.std_container_offsets.md#rustdoc-item-3153) — The byte offsets of the pointer and the length inside a `Vec`/`String`

### Constants
- [`ENTITY_REFERENCE_SIZE`](constant.ENTITY_REFERENCE_SIZE.md#rustdoc-item-3090) — The byte size of an entity reference: the `u64` slot id, the `u32`
- [`HANDLE_SIZE`](constant.HANDLE_SIZE.md#rustdoc-item-3088) — The byte size of a handle: its `u32` index and `u32` generation.
