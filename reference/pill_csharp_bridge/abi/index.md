<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Module `pill_csharp_bridge::abi`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:1`

C-compatible data structures and callback table shared with the managed runtime.
C-compatible data structures and the callback table shared with the
`csharp_runtime` crate.

Field order, field widths, and calling conventions in this module are part
of the native/managed ABI and must remain synchronized with `EngineApi.cs`.

## Responsibilities

- Define the C-compatible function table copied by `csharp_runtime`.
- Publish the mirror-method table and keep the replaced ones alive.
- Track the C# profiling zones of an invocation and close them when it ends.
- Describe component blobs, chunks, and scheduler access for managed code.

## Design

[`CsEngineApi`] is the single entry point the managed runtime copies at
startup. Every slot holds one `extern "C"` callback, written here or in this
crate's query, deferred-command, context, frame-state, parallel and
mirror-call modules. [`NativeComponentBlob`] describes a component value the
managed side pins for one call, [`ComponentChunk`] describes an engine-owned
column whose validity ends with the managed invocation that received it, and
[`NativeSystemAccess`] carries one scheduler permission per queried component.

## Module contents

### Structs
- [`ComponentChunk`](struct.ComponentChunk.md#rustdoc-item-160) — Description of one contiguous ECS column returned to managed code.
- [`CsEngineApi`](struct.CsEngineApi.md#rustdoc-item-192) — Function table copied by `csharp_runtime` during managed initialization.
- [`MirrorMethodEntry`](struct.MirrorMethodEntry.md#rustdoc-item-119) — One mirrored Rust method the managed runtime can call.
- [`MirrorMethodRow`](struct.MirrorMethodRow.md#rustdoc-item-22) — One row of the mirror-method table.
- [`MirrorMethodTable`](struct.MirrorMethodTable.md#rustdoc-item-13) — Owned backing store for the mirror-method table exposed to managed code.
- [`NativeComponentBlob`](struct.NativeComponentBlob.md#rustdoc-item-167) — One pinned managed component value supplied to a deferred command.
- [`NativeSystemAccess`](struct.NativeSystemAccess.md#rustdoc-item-284) — One reflected scheduler access, where `0` is read and `1` is write.
- [`ResourceView`](struct.ResourceView.md#rustdoc-item-175) — Borrowed view of one resource's bytes, handed to managed code.

### Functions
- [`copy_managed_bytes`](fn.copy_managed_bytes.md#rustdoc-item-351) — Copies `managed_buffer_length` bytes of a managed buffer into an owned
- [`end_unfinished_zones`](fn.end_unfinished_zones.md#rustdoc-item-0) — Closes every zone this invocation opened and never ended.
- [`ffi_copy_mirror_methods`](fn.ffi_copy_mirror_methods.md#rustdoc-item-358) — Copies up to `max` mirror-method rows into `out` and returns the number
- [`ffi_csharp_log`](fn.ffi_csharp_log.md#rustdoc-item-353) — Forwards one managed log line to the engine's tracing subscriber.
- [`ffi_csharp_zone_begin`](fn.ffi_csharp_zone_begin.md#rustdoc-item-354) — Opens a dynamic managed Tracy zone and returns the token that names it.
- [`ffi_csharp_zone_end`](fn.ffi_csharp_zone_end.md#rustdoc-item-355) — Ends the dynamic managed Tracy zone that `token` names.
- [`ffi_mirror_epoch`](fn.ffi_mirror_epoch.md#rustdoc-item-357) — Report the epoch of the mirror-method table.
- [`ffi_mirror_method_count`](fn.ffi_mirror_method_count.md#rustdoc-item-356) — Report how many mirrored Rust methods are registered.
- [`publish_mirror_methods`](fn.publish_mirror_methods.md#rustdoc-item-9) — Rebuilds the mirror-method table the managed runtime copies at startup.

### Constants
- [`CSHARP_ZONES`](constant.CSHARP_ZONES.md#rustdoc-item-1) — C# profiling zones are opened and closed on the same scheduler thread.
- [`RETIRED_TABLES_KEPT`](constant.RETIRED_TABLES_KEPT.md#rustdoc-item-16) — How many retired mirror-method tables stay alive after a republish.

### Statics
- [`MIRROR_EPOCH`](static.MIRROR_EPOCH.md#rustdoc-item-14) — Epoch of the mirror-method table.
- [`MIRROR_METHOD_GRAVEYARD`](static.MIRROR_METHOD_GRAVEYARD.md#rustdoc-item-17) — Tables a republish replaced, newest last, oldest dropped past
- [`MIRROR_METHOD_TABLE`](static.MIRROR_METHOD_TABLE.md#rustdoc-item-10) — Host-side table of mirrored Rust methods handed to the managed runtime.
- [`NEXT_CSHARP_ZONE_TOKEN`](static.NEXT_CSHARP_ZONE_TOKEN.md#rustdoc-item-7)
