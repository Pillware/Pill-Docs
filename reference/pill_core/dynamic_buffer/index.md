<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Module `pill_core::dynamic_buffer`

Source: `engine\pill_core\src\dynamic_buffer.rs:1`

A growable run of plain (`Copy`) elements in engine-owned native memory.
Engine-owned native dynamic buffer.

## Responsibilities

- Provide [`DynamicBuffer<T>`](struct.DynamicBuffer.md#rustdoc-item-9), a growable run of plain (`Copy`) elements
  whose memory comes from the engine's shared allocation service
  ([`crate::native_buffer`](../native_buffer/index.md#rustdoc-item-139)) instead of from a `Vec` heap inside whichever
  DLL created it.
- Give Rust systems and generated C# mirrors the same live view of the
  data: a `#[repr(C)]` handle of three pointer-sized words that managed
  code reads straight out of the component row.

## Design

A `Vec` cannot survive a reload: its buffer belongs to the allocator of
whichever DLL created it, and that DLL is gone after the swap. Growing a
`Vec` can also move its buffer, which ends any view managed code holds of
the old one. A `DynamicBuffer` keeps its elements in a *block* instead: one
allocation whose reference count sits in a header the handle cannot see,
with the handle pointing at the elements.

Cloning a handle retains the block instead of copying it, so a clone shares
the elements at the same address. Writing through one handle copies a
shared block first, so two handles never write through each other. Those
writes are safe, but a slice borrowed from the other handle before the copy
does not see them, exactly as with `Cow::to_mut` or `Arc::make_mut`.
Operations that only shrink the buffer (`clear`, `truncate`, a shrinking
[`resize`](struct.DynamicBuffer.md#rustdoc-item-24)) change the handle's own count and leave
the block alone.

The contract callers may rely on:

- a block's address stays the same for as long as any handle uses it;
- an archetype migration copies the handle and never the block, so a
  component's elements stay where they were across structural changes;
- a call that changes the buffer may give this handle a new block: growth
  past the capacity always allocates one, and a write to a shared block
  copies it first. A raw pointer from [`DynamicBuffer::as_ptr`](struct.DynamicBuffer.md#rustdoc-item-18) or
  [`DynamicBuffer::as_mut_ptr`](struct.DynamicBuffer.md#rustdoc-item-19) is good only until the buffer is written
  to or grows, so take it, use it, then let the buffer change;
- nothing caches an element pointer across a reload or a frame boundary.

## Module contents

### Structs
- [`DynamicBuffer`](struct.DynamicBuffer.md#rustdoc-item-9) — A growable run of plain elements living in engine-owned native memory.
