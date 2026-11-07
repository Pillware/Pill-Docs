<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5000"></a>

# Module `pill_engine_core::hot_patch`

Source: `engine\pill_engine_core\src\hot_patch.rs:1`

Per-function hot patching: stable dispatch slots for registered systems.
Per-function hot patching: stable dispatch slots for registered systems.

## Responsibilities

- Defines [`HotSlot`](struct.HotSlot.md#rustdoc-item-5096), the stable indirection a registered system dispatches
  through, so its implementation can be replaced without re-registering it.
- Defines [`HotPatchRegistry`](struct.HotPatchRegistry.md#rustdoc-item-4285), the engine-owned map from system name to slot.
- Defines [`PlainSlot`](struct.PlainSlot.md#rustdoc-item-5172), the dispatch slot that lets `#[pill_hot_fn]` patch an
  ordinary function.
- Computes [`signature_hash`], the identity of a system's signature, which
  [`HotSlot::install`](struct.HotSlot.md#rustdoc-item-5100) compares before it accepts a patch.
- Counts a patched system's panics and queues a [`FaultReport`] for the host,
  which rolls the system back to its earlier code.
- Rewrites a function's first bytes on Windows x86-64 ([`patch_prologue`] and
  [`restore_prologue`]), and refuses to do so on every other target.
- Provides [`verify_abi`], the self-check for the one platform assumption
  the design rests on.

## Design

A system's boxed closure calls the user's function through an address held in
a slot. Replacing the implementation is a single atomic store, so the
`Box<dyn System>`, its vtable, the scheduler graph, the system's access
metadata and its change-detection ticks all stay exactly where they are. The
`World` is never touched.

The address is type-erased because `F` differs per system and a registry
cannot be typed over all of them. The transmute back happens inside the
monomorphized closure in [`crate::system`], where `F` and `Input` are both
known.

### The zero-sized stand-in

A slot holds the address of a `fn(&mut F, Input) -> F::Output`, where `F` is
the zero-sized fn-item type of the user's system. A separately compiled patch
cannot name that type, so it declares the parameter as `&mut ()` instead.
That substitution is sound because a reference to any zero-sized type is a
single non-null pointer-sized value, and the callee never reads it.

It is an ABI assumption rather than a guarantee Rust makes, so
[`verify_abi`] lets a host check it once at startup: a toolchain or target
that breaks it fails loudly at initialization instead of silently corrupting
a system's arguments at runtime.

### Feature gating

The dispatch behavior is gated behind the `development` feature, but
[`HotPatchRegistry`](struct.HotPatchRegistry.md#rustdoc-item-4285) is a field on [`Engine`](../engine/struct.Engine.md#rustdoc-item-2)
**unconditionally**: gating it would change `Engine`'s layout between
feature configurations, and a module built with the other configuration
reconstructs `&mut Engine` from a raw pointer, making a layout difference
memory corruption rather than a compile error. The same reasoning is why
`rendering` is mirrored into every module build.

## Module contents

### Structs
- [`FaultReport`](struct.FaultReport.md#rustdoc-item-5008) — One function whose patched body panicked repeatedly, waiting for its host
- [`HotPatchRegistry`](struct.HotPatchRegistry.md#rustdoc-item-4285) — Engine-owned map from registered system name to its dispatch slot.
- [`HotSlot`](struct.HotSlot.md#rustdoc-item-5096) — The stable indirection through which one registered system dispatches.
- [`PlainSlot`](struct.PlainSlot.md#rustdoc-item-5172) — A dispatch slot for an ordinary function marked `#[pill_hot_fn]`.
- [`RuntimeFunction`](struct.RuntimeFunction.md#rustdoc-item-5004) — One entry in the x86-64 exception directory: a function's exact extent.

### Enums
- [`HotPatchError`](enum.HotPatchError.md#rustdoc-item-4315) — Why a hot patch was refused.

### Functions
- [`check_patching_thread`](fn.check_patching_thread.md#rustdoc-item-5212) — Refuses a patch attempted from anywhere but the declared thread.
- [`current_thread_token`](fn.current_thread_token.md#rustdoc-item-5210) — A numeric identity for the current thread.
- [`declare_patching_thread`](fn.declare_patching_thread.md#rustdoc-item-5211) — Declares the calling thread the only one permitted to rewrite live code.
- [`FlushInstructionCache`](fn.FlushInstructionCache.md#rustdoc-item-5002)
- [`function_extent`](fn.function_extent.md#rustdoc-item-5239) — Returns where the function containing `address` begins and how long it is.
- [`function_path`](fn.function_path.md#rustdoc-item-5169) — The fully qualified path of a system function, as `#[pill_hot]` names it.
- [`GetCurrentProcess`](fn.GetCurrentProcess.md#rustdoc-item-5001)
- [`local_implementation_address`](fn.local_implementation_address.md#rustdoc-item-5170) — Address of the entry point for a locally compiled system function.
- [`panic_into_failure`](fn.panic_into_failure.md#rustdoc-item-5045) — Turns a caught panic payload into the system failure the engine records.
- [`patch_prologue`](fn.patch_prologue.md#rustdoc-item-5240) — Overwrites a function's first bytes with an absolute jump to `replacement`.
- [`record_panic`](fn.record_panic.md#rustdoc-item-5044) — Counts one panicking invocation of `function`.
- [`record_success`](fn.record_success.md#rustdoc-item-5038) — Clears a function's panic count after an invocation that did not panic.
- [`restore_prologue`](fn.restore_prologue.md#rustdoc-item-5241) — Writes saved prologue bytes back, undoing a patch.
- [`RtlLookupFunctionEntry`](fn.RtlLookupFunctionEntry.md#rustdoc-item-5003)
- [`signature_hash`](fn.signature_hash.md#rustdoc-item-4314) — Stable identity of a system's call signature.
- [`signature_hash_of`](fn.signature_hash_of.md#rustdoc-item-5168) — Signature identity of a system, inferred from the function itself.
- [`take_fault_reports`](fn.take_fault_reports.md#rustdoc-item-5046) — Takes the fault reports queued since the last call, oldest first.
- [`verify_abi`](fn.verify_abi.md#rustdoc-item-5242) — Verifies that a `&mut ZST` parameter can be received as `&mut ()`.
- [`VirtualProtect`](fn.VirtualProtect.md#rustdoc-item-4999)

### Constants
- [`ABSOLUTE_JUMP_LENGTH`](constant.ABSOLUTE_JUMP_LENGTH.md#rustdoc-item-5207) — Bytes an absolute jump occupies: `mov rax, imm64` followed by `jmp rax`.
- [`PAGE_EXECUTE_READWRITE`](constant.PAGE_EXECUTE_READWRITE.md#rustdoc-item-5208) — Read/write/execute page protection.
- [`PANIC_ROLLBACK_FRAMES`](constant.PANIC_ROLLBACK_FRAMES.md#rustdoc-item-5005) — Consecutive panicking invocations after which a patched function's host

### Statics
- [`FAULT_REPORTS`](static.FAULT_REPORTS.md#rustdoc-item-5043) — Reports waiting for the host's next frame boundary.
- [`FLAKY_FUNCTION_COUNT`](static.FLAKY_FUNCTION_COUNT.md#rustdoc-item-5041) — How many functions currently have a panic count above zero.
- [`PANIC_STREAKS`](static.PANIC_STREAKS.md#rustdoc-item-5039) — Consecutive panic count per function, with the last message seen.
- [`PATCHING_THREAD_TOKEN`](static.PATCHING_THREAD_TOKEN.md#rustdoc-item-5209) — The thread allowed to rewrite live code, declared by the host each frame.
