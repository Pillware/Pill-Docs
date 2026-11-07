<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-139"></a>

# Module `pill_core::native_buffer`

Source: `engine\pill_core\src\native_buffer.rs:1`

Engine-owned native buffer allocation, shared by every loaded DLL.
Engine-owned native buffer allocation.

## Responsibilities

- Allocate, retain and release the element blocks behind
  [`DynamicBuffer`](../dynamic_buffer/struct.DynamicBuffer.md#rustdoc-item-9) handles.
- Keep the number of live blocks observable, so a test can fail on a leak
  and a debug build fails on a double free.

## Design

One block is one allocation: a reference-count header first, then the
element area. The pointer handed out points at the elements, not at the
header. A handle can therefore store that pointer, and mirror it to C# as
plain `(ptr, len, cap)` words, while the reference count sits where no
handle can reach it.

The service lives in `pill_core`, the dylib every artifact links. It is not
in `pill_engine`, which is an rlib compiled into each DLL. So a block's
lifetime never depends on which DLL allocated it, and a release run by a
reloaded generation reaches the same instance the allocation did.

## Address-stability contract

- A block's element pointer never moves while the block is alive. Growth
  allocates a new block instead of relocating the existing one.
- `retain` and `release` only change a count, so a block's address survives
  the handle being cloned. An archetype move copies the handle; it cannot
  move or copy the block.
- The block is freed when the last reference is released. A borrow seen
  through one handle stays valid for as long as any handle to the block
  exists.

## Module contents

### Functions
- [`allocate`](fn.allocate.md#rustdoc-item-1114) — Allocates one block of `byte_capacity` element bytes with the given element
- [`header_size`](fn.header_size.md#rustdoc-item-1115) — Returns the distance in bytes between a block's elements and its
- [`live_blocks`](fn.live_blocks.md#rustdoc-item-1113) — Returns the number of live blocks in the process.
- [`live_bytes`](fn.live_bytes.md#rustdoc-item-1112) — Returns the total number of element bytes held by live blocks.
- [`reference_count`](fn.reference_count.md#rustdoc-item-1118) — Returns how many references the block behind `element_pointer` holds.
- [`release`](fn.release.md#rustdoc-item-1116) — Drops one reference to a block's elements, and frees the block when the
- [`retain`](fn.retain.md#rustdoc-item-1117) — Takes one more reference to a block's elements.

### Statics
- [`LIVE_BLOCKS`](static.LIVE_BLOCKS.md#rustdoc-item-1111) — Number of live blocks, counted across the whole process.
- [`LIVE_BYTES`](static.LIVE_BYTES.md#rustdoc-item-1109) — Element bytes held by the live blocks, counted across the whole process.
