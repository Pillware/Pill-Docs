<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1245"></a>

# Module `pill_csharp_bridge::managed_buffer`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\managed_buffer.rs:1`

The two-call protocol that carries every managed payload across the boundary.
The two-call handshake that copies a managed payload across the boundary.

## Responsibilities

- Runs the same handshake for every kind of payload: ask the length,
  allocate, ask for a copy. Manifests, system names, failure messages and
  compiler diagnostics all use it.
- Checks the length the managed side reports against a limit, and reserves
  memory in a way that can fail. Neither a buggy nor a hostile assembly can
  make the host abort.

## Design

Managed code cannot hand the host an owned buffer, so every payload crosses
in two calls: one reports how many bytes there are, the host allocates, and
the second call fills the buffer the host allocated. The protocol belongs to
the boundary, not to any one payload, so each caller supplies only the two
exported functions and the upper bound for its kind.

The length is checked against the limit **before** anything is allocated, so
a corrupt length becomes a reported error instead of a multi-gigabyte
request. The reservation is fallible too: `Vec::try_reserve_exact` returns
an error where `vec![0; n]` would abort the process. A failure is returned
instead of logged because callers treat it differently - one returns a typed
load error, one logs the failure, one substitutes plain text - and that
difference is legitimate.

## Module contents

### Enums
- [`ManagedBufferError`](enum.ManagedBufferError.md#rustdoc-item-1208) — Why one managed payload could not be fetched.

### Functions
- [`fetch_managed_buffer`](fn.fetch_managed_buffer.md#rustdoc-item-1243) — Fetches one managed payload through the two-call protocol.
- [`manifest_fetch_error`](fn.manifest_fetch_error.md#rustdoc-item-1244) — Reports a failed manifest fetch as the typed error the load fails with.
