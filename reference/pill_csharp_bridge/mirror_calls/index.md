<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1727"></a>

# Module `pill_csharp_bridge::mirror_calls`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:1`

The native calls the mirror ABI needs besides its trampolines: text
channels, Rust-owned resources, and the asset store.
The native calls the managed side of the mirror ABI uses in addition to the
generated trampolines.

## Responsibilities

- Take the text out of the two per-thread channels `pill_engine::mirror`
  keeps (the last error and the returned string) and give managed code a
  pointer to it.
- Give a mirrored call the address of a Rust-owned resource
  (`ResMut<AssetManager>`), under the running invocation's declared access.
- Read a file through the engine's asset store for `AssetLoader.Load()`.
- Build the mirror-method table of a binary that links its modules
  statically, from its own inventory, for the shipping posture.

## Design

Nothing here names a renderer or audio type. Each extension's C# surface is
generated from its own mirror attributes and reaches its own trampolines by
address. This file holds only engine-wide pieces: the world's resources, the
asset store, and the channels every trampoline writes to.

Text and bytes handed out here stay valid on this thread until the next
call of the same kind hands new ones out. This file keeps them in a
thread-local (one value per thread), and managed code copies them before it
does anything else.

## Module contents

### Functions
- [`ffi_asset_loader_read`](fn.ffi_asset_loader_read.md#rustdoc-item-1739) — Reads the file at `path` for `AssetLoader.Load()`.
- [`ffi_get_native_resource`](fn.ffi_get_native_resource.md#rustdoc-item-1738) — Writes the address of the Rust-owned resource registered under the shared
- [`ffi_take_mirror_text`](fn.ffi_take_mirror_text.md#rustdoc-item-1737) — Takes the last error or the returned string of the mirrored call that just
- [`is_callable_by_managed_code`](fn.is_callable_by_managed_code.md#rustdoc-item-1741) — Reports whether managed code can call a resolved row.
- [`statically_linked_mirror_methods`](fn.statically_linked_mirror_methods.md#rustdoc-item-1740) — Builds the mirror-method table of this binary from its own inventory.

### Constants
- [`HELD_ASSET_BYTES`](constant.HELD_ASSET_BYTES.md#rustdoc-item-1736) — The bytes the last `ffi_asset_loader_read` on this thread handed out.
- [`HELD_MIRROR_TEXT`](constant.HELD_MIRROR_TEXT.md#rustdoc-item-1735) — The text the last `ffi_take_mirror_text` on this thread handed out.
- [`STATUS_ACCESS_NOT_DECLARED`](constant.STATUS_ACCESS_NOT_DECLARED.md#rustdoc-item-1729) — The running system did not declare this access.
- [`STATUS_MISSING`](constant.STATUS_MISSING.md#rustdoc-item-1728) — The call asked for something that does not exist: no text in the channel,
- [`STATUS_NO_ACTIVE_SCOPE`](constant.STATUS_NO_ACTIVE_SCOPE.md#rustdoc-item-1730) — No managed invocation is running on this thread.
- [`STATUS_NULL_OUTPUT`](constant.STATUS_NULL_OUTPUT.md#rustdoc-item-1732) — One of the output locations the call writes was null.
- [`STATUS_OK`](constant.STATUS_OK.md#rustdoc-item-1726) — The call succeeded.
- [`STATUS_PANICKED`](constant.STATUS_PANICKED.md#rustdoc-item-1731) — A panic was caught inside the call.
- [`TEXT_LAST_ERROR`](constant.TEXT_LAST_ERROR.md#rustdoc-item-1733) — `ffi_take_mirror_text` kind for the last error.
- [`TEXT_RETURN_STRING`](constant.TEXT_RETURN_STRING.md#rustdoc-item-1734) — `ffi_take_mirror_text` kind for the returned string.
