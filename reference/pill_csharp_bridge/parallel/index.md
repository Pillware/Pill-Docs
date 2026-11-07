<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1752"></a>

# Module `pill_csharp_bridge::parallel`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\parallel.rs:1`

Parallel dispatch of managed callbacks onto the shared Rayon pool.
Parallel dispatch for managed systems: the host's half of
`query.ForEachParallel`.

## Responsibilities

- Run a managed callback for every index in `0..count` across the shared
  [`pill_core::rayon`] pool, joining before returning.
- Refuse calls made without an active managed invocation, or made from
  inside a parallel callback.

## Design

A scheduled managed system makes this call on the frame thread. Rayon
workers run the callbacks, and the calling thread joins in, so it may run
a work item itself. Workers carry no managed scope, so an engine entry
point called from a worker refuses the call on its own. The checks here
cover only the calling thread's scope and the nesting case, and they run
before any dispatch so the status is the same whichever thread Rayon picks.

## Module contents

### Structs
- [`ManagedStatePointer`](struct.ManagedStatePointer.md#rustdoc-item-1756) — The managed caller's state pointer, wrapped so it can be sent to Rayon

### Functions
- [`ffi_parallel_for`](fn.ffi_parallel_for.md#rustdoc-item-1790) — Runs the managed trampoline for every index in `0..count`. This is the
- [`parallel_for`](fn.parallel_for.md#rustdoc-item-1787) — Runs `run(index)` for every index in `0..count` on the shared pool and
- [`with_callback_flag`](fn.with_callback_flag.md#rustdoc-item-1789) — Runs `body` with `IN_PARALLEL_CALLBACK` set on this thread, then restores

### Type aliases
- [`ParallelCallback`](type.ParallelCallback.md#rustdoc-item-1754) — The managed trampoline's signature: the `[UnmanagedCallersOnly]` static

### Constants
- [`IN_PARALLEL_CALLBACK`](constant.IN_PARALLEL_CALLBACK.md#rustdoc-item-1753) — Whether this thread is inside a parallel callback right now.
- [`PARALLEL_INTERNAL_FAILURE`](constant.PARALLEL_INTERNAL_FAILURE.md#rustdoc-item-1751) — A panic escaped the dispatch; `guard_managed_callback` returns this status.
- [`PARALLEL_NESTED`](constant.PARALLEL_NESTED.md#rustdoc-item-1750) — The call came from inside a parallel callback.
- [`PARALLEL_NO_SCOPE`](constant.PARALLEL_NO_SCOPE.md#rustdoc-item-1749) — No managed system is scheduled on the calling thread.
- [`PARALLEL_OK`](constant.PARALLEL_OK.md#rustdoc-item-1748) — Every index ran.
