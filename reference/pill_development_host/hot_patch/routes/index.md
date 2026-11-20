<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2161"></a>

# Module `pill_development_host::hot_patch::routes`

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:1`

Patch routes: where a body is installed and how calls reach it.
How a compiled replacement reaches every running copy of a function.

## Responsibilities

- Find a function's address and signature inside a loaded patch image.
- Visit every image that may hold a copy: the loaded artifacts first, then
  the patches already in the process.
- Install, reset or prologue-patch that function in each of them.

## Design

A crate linked into several artifacts is compiled into each of them, and a
generated patch links its own copy of everything its body calls. A
replacement that reached only the crate's own DLL would leave every other
copy running the old code. That is why all three routes send the change to
both kinds of image, through one shared traversal ([`every_loaded_copy`])
instead of each one visiting the images itself.

If that traversal skipped the patches, a chain of hot functions would stop
updating: a patched caller would keep calling the callee as it was when the
caller was compiled.

## Module contents

### Structs
- [`LoadedPatch`](struct.LoadedPatch.md#rustdoc-item-2169) — A patch loaded earlier, which a later patch also has to reach.
- [`PrologueRestore`](struct.PrologueRestore.md#rustdoc-item-2051) — One artifact's copy of a prologue-patched function, with the bytes it held

### Enums
- [`PatchCopy`](enum.PatchCopy.md#rustdoc-item-2172) — One loaded image that may carry a copy of the function being patched.

### Traits
- [`RedirectSlot`](trait.RedirectSlot.md#rustdoc-item-2204) — The two operations applied to one copy of the function: install and reset.

### Functions
- [`check_recorded_declaration`](fn.check_recorded_declaration.md#rustdoc-item-2277) — The check one reachable copy must pass before its prologue is overwritten.
- [`every_loaded_copy`](fn.every_loaded_copy.md#rustdoc-item-2171) — Returns every image that could carry a copy of a function, each with a label
- [`install_across`](fn.install_across.md#rustdoc-item-2274) — Offers one replacement to every copy in `copies`, and reports how many took
- [`install_everywhere`](fn.install_everywhere.md#rustdoc-item-2273) — Offers one replacement to every loaded image, and reports how many took it.
- [`prologue_patch_everywhere`](fn.prologue_patch_everywhere.md#rustdoc-item-2278) — Redirects every loaded copy of one function by overwriting its prologue.
- [`report_reached_copies`](fn.report_reached_copies.md#rustdoc-item-2272) — Reports which copies took the change, or explains that none was reached.
- [`reset_everywhere`](fn.reset_everywhere.md#rustdoc-item-2279) — Returns one function to its own body in every image that declares it.
- [`resolve_in`](fn.resolve_in.md#rustdoc-item-2270) — Asks a loaded patch for one function's address and signature hash.
- [`resolve_patch_address`](fn.resolve_patch_address.md#rustdoc-item-2276) — Asks a loaded prologue patch where its replacement body lives.
- [`resolve_plain_in`](fn.resolve_plain_in.md#rustdoc-item-2271) — Asks a loaded patch where its replacement for a plain function lives.
- [`restore_previous_install`](fn.restore_previous_install.md#rustdoc-item-2275) — Puts the copies a refused install already redirected back on what they were

### Constants
- [`PATCH_ADDRESS_EXPORT`](constant.PATCH_ADDRESS_EXPORT.md#rustdoc-item-2160) — Export a generated prologue patch carries, through which the host finds the
- [`PATCH_ADDRESS_RESOLVER`](constant.PATCH_ADDRESS_RESOLVER.md#rustdoc-item-2162) — Export a generated patch uses to report the address and signature of the
- [`PATCH_INSTALL_RESOLVER`](constant.PATCH_INSTALL_RESOLVER.md#rustdoc-item-2163) — Export through which a generated patch redirects its own copy of a function.
- [`PATCH_RESET_RESOLVER`](constant.PATCH_RESET_RESOLVER.md#rustdoc-item-2164) — Export through which a generated patch returns its own copy of a function to
