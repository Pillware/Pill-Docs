<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6111"></a>

# Module `pill_engine_core::mirror`

Source: `engine\pill_engine_core\src\mirror.rs:1`

The C ABI a mirrored Rust function crosses to reach C#: argument slots,
result encodings, and the channels that carry an error message or a
returned string.
The C ABI every mirrored Rust function crosses to reach C#.

## Responsibilities

- Define the one trampoline shape every `#[pill_mirror_*]` attribute emits:
  `extern "C" fn(packed_arguments: *const u8, return_buffer: *mut u8) -> u8`.
  Each argument travels in its own 16-byte slot, and the result is written
  to `return_buffer`.
- Carry what a status byte cannot: the error message of a failed call and a
  returned string. Both travel through thread-local channels that the C#
  bridge reads.
- Read argument slots and write results for every type the mirror
  vocabulary supports, through [`MirrorValue`] and [`MirrorReturn`].
- Implement the asset store operations every mirrored asset type shares
  ([`assets`]), so each generated per-type trampoline is one call.

## Design

Every mirrored function has the same trampoline signature, whatever the Rust
function looks like. That is what lets the managed side call all of them
through one C-ABI function pointer type: no delegate per signature, no
marshalling stub, and nothing for NativeAOT to generate at build time. The
cost is that the caller packs the arguments and this module unpacks them,
which takes a handful of unaligned reads per call.

Slot layout, the contract with `TracyLive.MirrorCall` in the C# runtime:

| Tag | Slot contents |
| --- | --- |
| primitive | the value at offset 0, little endian; `bool` is one byte |
| `str` | UTF-8 pointer at 0, byte length (`u32`) at 8 |
| `slice:<element>` | element pointer at 0, element count (`u32`) at 8 |
| `ref:`/`mut:` | the address of the value at 0 |
| named value type | see its [`MirrorValue`] implementation |
| `option:<inner>` | the inner encoding, presence byte at 15 |

A returned value is written to `return_buffer` in the same layout, with two
differences. An `option:` puts its presence byte at offset 0 and the value
at offset 16. A returned string travels through the return channel instead
of `return_buffer`.

The thread-local channels live in this crate, and this crate is the engine
dylib that the host and every module share: one copy per process. So a
module's trampoline and the bridge that reads a channel see the same
thread-local.

## Module contents

### Modules
- [`assets`](assets/index.md#rustdoc-item-6085) — The asset store operations every mirrored asset type shares.

### Traits
- [`MirrorObject`](trait.MirrorObject.md#rustdoc-item-6090) — A Rust value C# holds by pointer: a boxed `T` it creates, passes and drops.
- [`MirrorReturn`](trait.MirrorReturn.md#rustdoc-item-928) — A type a mirrored call returns by value.
- [`MirrorValue`](trait.MirrorValue.md#rustdoc-item-772) — A type a mirrored call takes by value, read from a slot or a slice element.

### Functions
- [`drop_object`](fn.drop_object.md#rustdoc-item-6216) — Drop the boxed object a slot addresses. This is the body of every drop
- [`error_message`](fn.error_message.md#rustdoc-item-6117) — Turn an error into the message text a mirrored failure carries.
- [`invoke`](fn.invoke.md#rustdoc-item-6103) — Run one trampoline body and turn its outcome into a status byte.
- [`object_from_raw`](fn.object_from_raw.md#rustdoc-item-6215) — Move an object out of the box a slot or element addresses.
- [`object_into_raw`](fn.object_into_raw.md#rustdoc-item-6214) — Box an object for the managed side and return its address.
- [`read`](fn.read.md#rustdoc-item-6119) — Read a plain value from the start of a slot or element.
- [`read_bool`](fn.read_bool.md#rustdoc-item-6120) — Read a `bool` (one byte, nonzero is true).
- [`read_mut`](fn.read_mut.md#rustdoc-item-6124) — Borrow the value a `mut:` slot addresses, mutably.
- [`read_option`](fn.read_option.md#rustdoc-item-6131) — Read an `option:` slot, decoding the inner value only when present.
- [`read_plain_vec`](fn.read_plain_vec.md#rustdoc-item-6126) — Read a `slice:` slot of plain elements into an owned vector.
- [`read_pointer`](fn.read_pointer.md#rustdoc-item-6121) — Read the address a slot carries.
- [`read_ref`](fn.read_ref.md#rustdoc-item-6123) — Borrow the value a `ref:` slot addresses.
- [`read_span`](fn.read_span.md#rustdoc-item-6122) — Read the `(pointer, length)` pair a `str` or `slice:` slot carries.
- [`read_str`](fn.read_str.md#rustdoc-item-6125) — Read a `str` slot as a borrowed string, checking it is UTF-8.
- [`read_string_vec`](fn.read_string_vec.md#rustdoc-item-6127) — Read a `slice:str` slot into owned strings.
- [`read_value_vec`](fn.read_value_vec.md#rustdoc-item-6130) — Read a `slice:` slot of named values into an owned vector.
- [`set_last_error`](fn.set_last_error.md#rustdoc-item-6113) — Record why the current mirrored call failed.
- [`set_return_string`](fn.set_return_string.md#rustdoc-item-6115) — Record the string the current mirrored call returns.
- [`slot`](fn.slot.md#rustdoc-item-6118) — Address of argument slot `slot_index`.
- [`take_last_error`](fn.take_last_error.md#rustdoc-item-6114) — Take the message the last failed call recorded on this thread.
- [`take_return_string`](fn.take_return_string.md#rustdoc-item-6116) — Take the string the last mirrored call on this thread returned.
- [`write`](fn.write.md#rustdoc-item-6132) — Write a plain value to the start of a return buffer.
- [`write_option`](fn.write_option.md#rustdoc-item-6133) — Write an `option:` result: the presence byte, and the value when present.

### Type aliases
- [`MirrorResult`](type.MirrorResult.md#rustdoc-item-769) — The result of a mirrored call: the value, or the message that explains the

### Constants
- [`IMPORT_ALREADY_LOADED_OFFSET`](constant.IMPORT_ALREADY_LOADED_OFFSET.md#rustdoc-item-6095) — Offset of an `assets.import` return's "already loaded" byte.
- [`IMPORT_METADATA_SOURCE_OFFSET`](constant.IMPORT_METADATA_SOURCE_OFFSET.md#rustdoc-item-6096) — Offset of an `assets.import` return's metadata-source byte.
- [`LAST_ERROR`](constant.LAST_ERROR.md#rustdoc-item-6109) — The message of the last failed mirrored call on this thread.
- [`OPTION_ARGUMENT_FLAG_OFFSET`](constant.OPTION_ARGUMENT_FLAG_OFFSET.md#rustdoc-item-6107) — Offset of an `option:` argument's presence byte inside its slot.
- [`OPTION_RETURN_VALUE_OFFSET`](constant.OPTION_RETURN_VALUE_OFFSET.md#rustdoc-item-6108) — Offset of an `option:` return's value inside the return buffer. Its
- [`RETURN_STRING`](constant.RETURN_STRING.md#rustdoc-item-6112) — The string the last mirrored call on this thread returned.
- [`SLOT_SIZE`](constant.SLOT_SIZE.md#rustdoc-item-6105) — Width of one argument slot, in bytes.
- [`STATUS_ERROR`](constant.STATUS_ERROR.md#rustdoc-item-6104) — The call failed. Its message is in the last-error channel.
- [`STATUS_OK`](constant.STATUS_OK.md#rustdoc-item-6106) — The call succeeded and wrote its result.

### Macros
- [`plain_mirror_value`](macro.plain_mirror_value.md#rustdoc-item-6217)
