<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6438"></a>

# Struct `pill_engine_core::resource::ErasedResource`

```rust
pub struct ErasedResource;
```

Source: `engine\pill_engine_core\src\resource.rs:554`

One resource value, stored without a trait object.

A `Box<dyn Any + Send + Sync>` cannot serve, for two reasons:

1. `Any::downcast_ref` compares [`TypeId`], which differs between artifacts
   that compiled the same type with different inputs.
2. A `Box<dyn Any>`'s vtable - including its destructor - lives in the image
   of the artifact that created the value. Resources are never cleared on
   reload, so retiring a module that owned one leaves a destructor pointing
   into an unmapped image. The table here is plain data and can be re-homed.

The allocation is owned by this value and released on drop.

## Fields

<a id="rustdoc-item-7435"></a>

### `value_allocation`

```rust
value_allocation: std::ptr::NonNull<u8>
```

Heap allocation holding the value, or dangling for a zero-sized type.

<a id="rustdoc-item-7436"></a>

### `type_id`

```rust
type_id: Option<std::any::TypeId>
```

Runtime type identity of the stored value, as the creating artifact
sees it, or `None` when the value has no Rust type at all.

<a id="rustdoc-item-7437"></a>

### `size`

```rust
size: usize
```

Size in bytes of the stored value.

<a id="rustdoc-item-7438"></a>

### `align`

```rust
align: usize
```

Alignment in bytes of the stored value.

<a id="rustdoc-item-7439"></a>

### `has_shared_identity`

```rust
has_shared_identity: bool
```

Whether the stored value is identified by its layout rather than by
`type_id`; set when the resource declares a shared name.

<a id="rustdoc-item-7442"></a>

### `function_table`

```rust
function_table: Box<ErasedResourceOps>
```

Per-type function table; replaceable via [`Self::refresh_ops`](#rustdoc-item-7440).

Boxed rather than stored inline: the table carries the type's layout
declaration, and the box travels by value out of
[`Self::take`](#rustdoc-item-7441)'s refusal, so an inline copy would make every refusal -
and every box - larger than an error value should be.

## Associated functions and methods

<a id="rustdoc-item-7443"></a>

### `new`

```rust
pub fn new<T: Resource>(resource_value: T) -> Self;
```

Move `resource_value` into a fresh erased box.

<a id="rustdoc-item-7444"></a>

### `new_foreign`

```rust
pub fn new_foreign(bytes: &[u8], align: usize, schema_hash: u64) -> Self;
```

Move another language's blittable bytes into a fresh erased box.

The value has no Rust type: its identity is the shared name its
declaration carried, so the box is identified by layout and `holds`
compares layout - which is all a foreign declaration can offer. The box
owns a copy of `bytes` and releases nothing on drop, because blittable
bytes own nothing and there is no artifact whose code could go away.

#### Panics

Panics when `size` and `align` cannot describe an allocation. Aborts
when the allocation itself fails.

<a id="rustdoc-item-7445"></a>

### `allocate`

```rust
pub(in resource) fn allocate<impl FnOnce(*mut u8): FnOnce(*mut u8)>(size: usize, align: usize, fill: impl FnOnce(*mut u8)) -> NonNull<u8>;
```

Allocate a value slot of `size` bytes at `align` and fill it.

A zero-sized value needs no allocation: `drop_in_place` on a
dangling-but-aligned pointer is well defined for one.

#### Panics

Panics when `size` and `align` cannot describe an allocation. Aborts
when the allocation itself fails.

<a id="rustdoc-item-7446"></a>

### `type_id`

```rust
pub fn type_id(self: &Self) -> Option<TypeId>;
```

Runtime type identity of the stored value, or `None` for a foreign one.

A foreign resource is a run of bytes with no Rust type anywhere in the
process; its identity is the shared name it declared, reached through
[`ResourceId`](enum.ResourceId.md#rustdoc-item-4505) instead.

<a id="rustdoc-item-7447"></a>

### `size`

```rust
pub fn size(self: &Self) -> usize;
```

Size in bytes of the stored value.

<a id="rustdoc-item-7448"></a>

### `align`

```rust
pub fn align(self: &Self) -> usize;
```

Alignment in bytes of the stored value.

<a id="rustdoc-item-7449"></a>

### `is_foreign`

```rust
pub fn is_foreign(self: &Self) -> bool;
```

Whether this box holds another language's blittable bytes.

The answer comes from the box's own creation: a Rust value was stored
with a `TypeId`, a foreign payload without one. It never comes from the
function table, which a re-home can replace, so a table cannot turn a
Rust value into a foreign one.

<a id="rustdoc-item-7450"></a>

### `bytes`

```rust
pub fn bytes(self: &Self) -> &[u8];
```

The stored value as raw bytes.

These are the bytes another language reads and writes, and what a
migration plan moves. They only mean something to a caller that knows
the registered layout: for a Rust value they are its fields at their
offsets, and reading them does not make the value any less the type it
is.

<a id="rustdoc-item-7451"></a>

### `bytes_mut`

```rust
pub fn bytes_mut(self: &mut Self) -> &mut [u8];
```

The stored value as raw bytes, mutably.

A caller writing here is responsible for writing a value the stored type
accepts - the same trust the managed mirror path places in its generated
writers, which write component rows in place.

<a id="rustdoc-item-7452"></a>

### `migrate_bytes`

```rust
pub(crate) fn migrate_bytes(self: &mut Self, size: usize, align: usize, plan: &FieldPlan) -> Result<(), WorldError>;
```

Rewrites the stored payload into a new shape, following `plan`.

Only a foreign payload may change size, because a Rust value's size is
its type; `World::relayout_foreign_resource` refuses that before this
runs. The old bytes are copied aside first, the same way a descriptor
column migration works, so a plan that moves a field onto bytes it still
occupies reads the original value instead of what it just wrote.

#### Errors

Returns [`WorldError::DescriptorRowInvalid`](../error/enum.WorldError.md#rustdoc-item-444) when an instruction falls
outside the old or the new payload. Nothing is modified in that case.

#### Panics

Panics when `size` and `align` cannot describe an allocation.

<a id="rustdoc-item-7440"></a>

### `refresh_ops`

```rust
pub fn refresh_ops(self: &mut Self, function_table: ErasedResourceOps);
```

Replaces the per-type function table.

The owner uses this to point the stored drop at code that is still
mapped, after the artifact that supplied it was reloaded or retired. A
foreign box is never refreshed this way: see [`Self::is_foreign`](#rustdoc-item-7449) and
`World::rehome_resources`.

The new table must agree with how the box was created. Installing a
foreign table over a Rust value, or the reverse, would give the value a
drop it never had, so the swap is refused and logged instead.

<a id="rustdoc-item-7453"></a>

### `has_shared_identity`

```rust
pub fn has_shared_identity(self: &Self) -> bool;
```

Whether this box is identified by layout rather than by `TypeId`.

<a id="rustdoc-item-7454"></a>

### `holds`

```rust
pub fn holds<T: Resource>(self: &Self) -> bool;
```

Whether the stored value can be read as a `T`.

An ordinary resource demands the exact `TypeId` it was stored under. A
shared one cannot: another artifact's `TypeId` for the same type differs,
so it compares layout instead, which still rejects an outright wrong `T`.

Layout alone is weaker than `TypeId` - `{f32, f32}` and `{u32, u32}`
agree on size and alignment - which is why a shared resource's name and
shape are guarded at registration (see `World::register_resource`).

<a id="rustdoc-item-7455"></a>

### `get`

```rust
pub fn get<T: Resource>(self: &Self) -> Option<&T>;
```

Borrow the stored value as a `T`, or `None` when it is another type.

<a id="rustdoc-item-7456"></a>

### `get_mut`

```rust
pub fn get_mut<T: Resource>(self: &mut Self) -> Option<&mut T>;
```

Borrow the stored value mutably, or `None` when it is another type.

<a id="rustdoc-item-7457"></a>

### `value_pointer_mut`

```rust
pub(crate) fn value_pointer_mut(self: &mut Self) -> *mut u8;
```

The stored value's address, for a caller that holds code knowing the
type: the world's manager-settings applier, which calls the function
pointer the type registered.

`pub(crate)` on purpose. A raw pointer into the world is the handle the
safe API exists to hide, and this one is only sound while the caller's
type table came from the registration that created this box.

<a id="rustdoc-item-7441"></a>

### `take`

```rust
pub fn take<T: Resource>(self: Self) -> Result<T, Self>;
```

Move the stored value out, consuming the box.

This is the only path where ownership leaves the box, and the only one
that must **not** run the drop: the value goes to the caller, who
becomes responsible for it.

#### Errors

Returns the box unchanged, as `Err`, when it holds another type, so a
refused take does not destroy the value.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Send`
- `Sync`
- `Debug`
- `Drop`
