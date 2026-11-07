<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6941"></a>

# Module `pill_engine_core::query::ptr`

Visibility: `crate` · Source: `engine\pill_engine_core\src\query\ptr.rs:1`

Thread-safe raw-pointer wrappers shared by query targets and filters.
Thread-safe raw-pointer wrappers used by the query targets, the row
filters and the parallel system dispatcher.

## Responsibilities

- Provides [`SendPtr<T>`] and [`SendPtrMut<T>`] - raw-pointer wrappers
  that implement [`Send`] and [`Sync`] for cross-thread sharing.
- Lets a worker thread reach component storage through an address that was
  resolved once, with no second `HashMap` lookup.

## Design

A query resolves component storage once per archetype, then reads or
writes rows on worker threads through these wrappers. A wrapper holds an
address and nothing else: it owns no data, so moving it around is safe by
itself. What needs care is the dereference, and the caller is the one that
has to keep it sound.

The query holds the exclusive `World` borrow, so the storage stays alive
and never reallocates while the pointers are in use. No two threads touch
the same row, because `ParQueryIter` gives each thread its own row range
and the scheduler only batches systems whose access
`SystemAccess::conflicts_with` reports as disjoint.

## Module contents

### Structs
- [`SendPtr`](struct.SendPtr.md#rustdoc-item-4417) — Thread-safe wrapper around a `*const T` that lets worker threads read
- [`SendPtrMut`](struct.SendPtrMut.md#rustdoc-item-6974) — Thread-safe wrapper around a `*mut T` that lets worker threads write
