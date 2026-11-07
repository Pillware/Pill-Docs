<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-536"></a>

# Module `pill_engine::hot_patch`

Source: `engine\pill_engine\src\hot_patch.rs:1`

The per-DLL hot-patch registries, built on the core's hot-patch machinery.
The registries for hot-patching, one copy per DLL: `#[pill_hot]`
functions, `#[pill_hot_fn]` slots, and the address inventory a crate's
build script writes.

## Responsibilities

- Re-export the engine core's hot-patch machinery
  (`pill_engine_core::hot_patch`) under this path, so one import gives a
  caller the core's slots and the registries declared here.
- Declare the registries the macros and the build-script inventory submit
  into ([`PillHotSlotDescriptor`](struct.PillHotSlotDescriptor.md#rustdoc-item-497), [`PillFunctionAddress`],
  [`PillHotFunctionDescriptor`](struct.PillHotFunctionDescriptor.md#rustdoc-item-576)) and the functions that read them.
- Hold the two helpers the generated resolver exports share:
  [`with_qualified_name`], which decodes the export's C-string argument,
  and [`write_signature_out`], which writes a signature through the
  export's out-parameters.

## Design

These registries answer questions about one DLL, such as where a function's
address is in this artifact. That is why they live here, in the crate every
DLL compiles in, and not in the engine core, of which there is one copy per
process. Each DLL's copy of the functions here reads only the lists that
DLL submitted.

## Module contents

### Structs
- [`PillFunctionAddress`](struct.PillFunctionAddress.md#rustdoc-item-540) — One function this artifact can report the address of, contributed by a
- [`PillHotFunctionDescriptor`](struct.PillHotFunctionDescriptor.md#rustdoc-item-576) — Describes one function declared with `#[pill_hot]`.
- [`PillHotSlotDescriptor`](struct.PillHotSlotDescriptor.md#rustdoc-item-497) — Describes one `#[pill_hot_fn]` this artifact declares.

### Functions
- [`function_addresses`](fn.function_addresses.md#rustdoc-item-570) — Lists every function this artifact can report the address of, for
- [`functions_with_known_extent`](fn.functions_with_known_extent.md#rustdoc-item-571) — Returns how many of this artifact's registered functions have a known
- [`hot_function_names`](fn.hot_function_names.md#rustdoc-item-530) — Returns the name of every `#[pill_hot]` system this artifact declares, for
- [`install_plain_function`](fn.install_plain_function.md#rustdoc-item-528) — Redirects every call to one `#[pill_hot_fn]` this artifact declares.
- [`plain_function_entry`](fn.plain_function_entry.md#rustdoc-item-534) — Returns the address and signature of a `#[pill_hot_fn]` this artifact
- [`plain_function_names`](fn.plain_function_names.md#rustdoc-item-531) — Returns the name of every `#[pill_hot_fn]` this artifact declares.
- [`plain_function_signature`](fn.plain_function_signature.md#rustdoc-item-533) — Returns the signature text this artifact recorded for a `#[pill_hot_fn]`.
- [`reset_plain_function`](fn.reset_plain_function.md#rustdoc-item-524) — Returns one `#[pill_hot_fn]` to the body compiled into this artifact.
- [`resolve_hot_function`](fn.resolve_hot_function.md#rustdoc-item-567) — Returns the dispatch address and signature hash of one `#[pill_hot]`
- [`scanned_function_address`](fn.scanned_function_address.md#rustdoc-item-568) — Returns the address of one build-script-scanned function in this artifact.
- [`scanned_function_signature`](fn.scanned_function_signature.md#rustdoc-item-569) — Returns the declaration the build-script scan recorded for one function.
- [`text_hash`](fn.text_hash.md#rustdoc-item-535) — Hash of a signature string, used only to report a mismatch.
- [`with_qualified_name`](fn.with_qualified_name.md#rustdoc-item-603) — Calls `run_with_name` with the qualified name a host passed across the C
- [`write_signature_out`](fn.write_signature_out.md#rustdoc-item-605) — Writes a signature's address and length through the two out-parameters the

## Re-exports

- `pub use pill_engine_core::hot_patch;`
