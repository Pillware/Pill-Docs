<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-283"></a>

# Enum `pill_engine_core::error::WorldError`

```rust
pub enum WorldError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:56`

Failures the archetype world reports about its own state.

The world raises these when a call would break one of its rules: entity
storage and migration, the component and resource registries, and the
checks that keep two binaries sharing one identity in agreement. A call
fails this way for an unregistered ID, a byte layout that does not match, a
full component table, or a name that another type already claimed.

## Variants

<a id="rustdoc-item-4478"></a>

### `DescriptorStableIdZero`

```rust
DescriptorStableIdZero
```

The stable ID of a descriptor component cannot be zero.

<a id="rustdoc-item-279"></a>

### `DescriptorSizeZero`

```rust
DescriptorSizeZero
```

The size of a descriptor component cannot be zero.

<a id="rustdoc-item-280"></a>

### `DescriptorAlignmentInvalid`

```rust
DescriptorAlignmentInvalid
```

The alignment of a descriptor component must be a non-zero power of two.

<a id="rustdoc-item-281"></a>

### `DescriptorLayoutInvalid`

```rust
DescriptorLayoutInvalid
```

The size and alignment pair does not form a valid memory layout.

<a id="rustdoc-item-4479"></a>

### `DescriptorAlreadyRegistered`

```rust
DescriptorAlreadyRegistered
```

The stable ID is already registered with a different layout or name.

<a id="rustdoc-item-4480"></a>

### `DescriptorRemapSelf`

```rust
DescriptorRemapSelf
```

A descriptor component cannot be remapped onto itself.

<a id="rustdoc-item-2941"></a>

### `ComponentTypeLimitExceeded`

```rust
ComponentTypeLimitExceeded
```

The world's component type limit has been reached.

A world holds at most 128 component types, and the engine's own types
take only a few of those slots. The rest are declared by the project and
by the descriptor manifests the managed runtime sends, so running out is
a configuration outcome, not a programming error. The error carries the
offending type name and the number registered so far, so the host can
report it like any other engine error instead of panicking.

<a id="rustdoc-item-4483"></a>

### `DescriptorEntityEmpty`

```rust
DescriptorEntityEmpty
```

A descriptor entity must carry at least one component.

<a id="rustdoc-item-4484"></a>

### `DescriptorDuplicateComponent`

```rust
DescriptorDuplicateComponent
```

A descriptor entity cannot contain the same component twice.

<a id="rustdoc-item-4486"></a>

### `DescriptorComponentNotRegistered`

```rust
DescriptorComponentNotRegistered
```

The component ID was never registered with this world.

<a id="rustdoc-item-4488"></a>

### `DescriptorByteLengthMismatch`

```rust
DescriptorByteLengthMismatch
```

The supplied bytes are not the size the registered layout declares.

<a id="rustdoc-item-4489"></a>

### `EntityNotFound`

```rust
EntityNotFound
```

The entity does not exist in the world.

<a id="rustdoc-item-4490"></a>

### `DescriptorComponentAlreadyPresent`

```rust
DescriptorComponentAlreadyPresent
```

The entity already carries the component being added.

<a id="rustdoc-item-4491"></a>

### `DescriptorComponentMissing`

```rust
DescriptorComponentMissing
```

The entity does not carry the component being removed or set.

<a id="rustdoc-item-444"></a>

### `DescriptorRowInvalid`

```rust
DescriptorRowInvalid
```

A row index or byte range does not fit the component's column.

<a id="rustdoc-item-553"></a>

### `DescriptorSizeMismatch`

```rust
DescriptorSizeMismatch
```

A byte copy length does not match the registered element size.

<a id="rustdoc-item-550"></a>

### `ColumnRowsAreNotPlainData`

```rust
ColumnRowsAreNotPlainData
```

A raw-byte write was attempted on a column whose rows own resources.

The byte mutators copy and overwrite rows without running the element's
destructor, which is safe only for plain data. On a column whose type
has a real destructor, the same calls would leak the value they
overwrite, or leave two columns owning one allocation.

<a id="rustdoc-item-4494"></a>

### `DescriptorStorageMissing`

```rust
DescriptorStorageMissing
```

An archetype lists a registered descriptor component but has no storage
column for it.

The manifest and the archetype's columns disagree here, which a partly
applied relayout or reload can leave behind. The component is listed,
but its storage was never created.

<a id="rustdoc-item-4499"></a>

### `ComponentColumnLayoutMismatch`

```rust
ComponentColumnLayoutMismatch
```

A descriptor column's element size disagrees with the registered layout
the migration plan was validated against.

A column and the storage factory that describe it have drifted apart,
which is what a partly applied relayout leaves behind.

<a id="rustdoc-item-4500"></a>

### `ForeignResourceNameEmpty`

```rust
ForeignResourceNameEmpty
```

A foreign resource declaration carries no name to be identified by.

<a id="rustdoc-item-4503"></a>

### `ForeignResourceLayoutInvalid`

```rust
ForeignResourceLayoutInvalid
```

The declared layout of a foreign resource cannot describe an allocation.

<a id="rustdoc-item-4506"></a>

### `ForeignResourceNotRegistered`

```rust
ForeignResourceNotRegistered
```

The id does not name a registered foreign resource.

<a id="rustdoc-item-4507"></a>

### `ForeignResourceRemapSelf`

```rust
ForeignResourceRemapSelf
```

A foreign resource cannot be remapped onto itself.

<a id="rustdoc-item-4509"></a>

### `SharedResourceNotRegistered`

```rust
SharedResourceNotRegistered
```

The id does not name a registered shared resource.

<a id="rustdoc-item-4511"></a>

### `ForeignResourceFactoryIsNative`

```rust
ForeignResourceFactoryIsNative
```

The id was registered by a Rust type, so foreign bytes cannot be stored
under it.

<a id="rustdoc-item-4513"></a>

### `ForeignResourceHoldsRustValue`

```rust
ForeignResourceHoldsRustValue
```

A Rust value is stored under the id, and its type fixes its shape.

<a id="rustdoc-item-4517"></a>

### `ForeignResourceBytesMismatch`

```rust
ForeignResourceBytesMismatch
```

The payload length does not match the foreign resource's declared size.

<a id="rustdoc-item-4519"></a>

### `ForeignResourcePlanOutOfBounds`

```rust
ForeignResourcePlanOutOfBounds
```

A migration plan for a foreign resource falls outside its rows.

<a id="rustdoc-item-4522"></a>

### `SharedResourceHoldsAnotherType`

```rust
SharedResourceHoldsAnotherType
```

A shared id holds a value of another shape, so removing it as `T` is
refused instead of destroying what is there.

A shared id is derived from a written-down name, which lets a Rust type
that never registered reach another language's slot. The stored box
refuses to hand out a value of a different type. The value, its ticks,
its factory and its claim stay in place, so the caller learns why
instead of losing the resource on the way to `None`.

<a id="rustdoc-item-4525"></a>

### `SharedResourceIdentityCollision`

```rust
SharedResourceIdentityCollision
```

Two different shared resource names hash to one identity.

The id of a shared resource is a 128-bit hash of its name, and a hash
collision would make one slot answer to two names - each declaration
silently joining the other's resource. The id cannot carry the evidence,
so each claim also stores its name and compares it with the recorded
one.

<a id="rustdoc-item-4529"></a>

### `SharedResourceSchemaMismatch`

```rust
SharedResourceSchemaMismatch
```

One shared resource name, two different field shapes.

Size and alignment cannot tell `{u32, u32}` from `{f32, f32}`; when both
declarations carry a schema hash, the shapes can be compared and a
reinterpretation becomes a refusal instead of a silent misread.

<a id="rustdoc-item-4534"></a>

### `ComponentNameCollision`

```rust
ComponentNameCollision
```

Two live registrations claim the same component type name under
different [`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83)s.

The persistable-registration path replaces a same-name entry in its
persist maps when the host has announced that generation as superseded.
Without that announcement, an older column that still holds entities is
a concurrent peer - a second binary that linked the type and got its own
`TypeId` - and replacing it would drop its rows at the next reload.

Give the type a shared identity with `#[pill(shared)]` so both binaries
resolve to one column instead of two.

<a id="rustdoc-item-4540"></a>

### `ComponentLayoutChanged`

```rust
ComponentLayoutChanged
```

A persistable component was re-registered by a superseding generation
with a layout the previous generation's column cannot host.

The migration reads the rows the incoming generation spawned into the
old column through the incoming type. Those rows sit in slots spaced for
the old layout, so a wider alignment - or an old row size that is not a
multiple of the new alignment - makes the reads misaligned. That is
undefined behaviour, so the registration is refused and the host rolls
the reload back.

A size change that keeps the alignment is accepted, because the
add-a-field reloads need that shape to migrate.

<a id="rustdoc-item-4544"></a>

### `SharedResourceNameConflict`

```rust
SharedResourceNameConflict
```

Two different Rust types claim the same shared resource name.

A shared name is a process-wide identity, so two types holding it are
one resource: one slot, with whichever artifact inserts last replacing
the other's value. When their layouts also agree, reads through either
type succeed and quietly return the other resource's data.

The case this must not reject is one type compiled into two artifacts,
which is what a shared name is for. Those copies agree on the type's own
name; two different types do not.

<a id="rustdoc-item-4550"></a>

### `SharedResourceLayoutMismatch`

```rust
SharedResourceLayoutMismatch
```

One shared resource name, two different memory layouts.

Every artifact reaches the resource through one slot, and this check is
the only thing that proves they agree about its shape. Accepting the
second registration would leave the two artifacts reading one slot with
different layouts, so it is refused instead.

<a id="rustdoc-item-4554"></a>

### `SharedComponentNameConflict`

```rust
SharedComponentNameConflict
```

Two different Rust types claim the same shared component name.

A shared name is a process-wide identity, so two types holding it are
one component: one bit, one column, and every write through either type
reaches the other's rows. When their layouts also match, the reads
succeed and silently return another component's data.

One type compiled into two binaries must not be rejected, because that
is what shared identity is for. A name tells the two cases apart: the
same type compiled twice reports the same short name even when its
module paths differ. Only `#[pill(shared = "...")]` can produce the
refused case, because a plain `#[pill(shared)]` derives the name from
the module path and the type name.

<a id="rustdoc-item-3005"></a>

### `SharedComponentLayoutMismatch`

```rust
SharedComponentLayoutMismatch
```

Two binaries registered the same shared component with different
memory layouts.

Every binary that links the component reaches it through one column, and
this check is the only thing that proves they agree about what a row
contains. Accepting the second registration would leave the two binaries
reading and writing one column at different field offsets, so it is
refused instead.

Identity is resolved when the DLL loads, not by the compiler, so a field
reorder or type change compiles cleanly in both binaries and shows up
here. Rebuild both against the same definition.

<a id="rustdoc-item-4563"></a>

### `ComponentNameAmbiguous`

```rust
ComponentNameAmbiguous
```

A component type name resolved to more than one registered
[`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83).

A name is only useful when it identifies one column. More than one
surviving candidate means [`WorldError::ComponentNameCollision`](#rustdoc-item-4534) was not
enforced somewhere upstream, so this is reported instead of resolved by
an arbitrary tiebreak that could pick the wrong column.

<a id="rustdoc-item-4567"></a>

### `ImportExtensionClaimedTwice`

```rust
ImportExtensionClaimedTwice
```

Two imported asset types claim the same source file extension.

A file's asset type is chosen by its extension, so a second claim would
make the choice depend on which module registered first. Both
[`World::register_imported_asset`](../world/struct.World.md#rustdoc-item-1702)
and [`World::register_standalone_asset`](../world/struct.World.md#rustdoc-item-2208)
raise it.

<a id="rustdoc-item-4570"></a>

### `ArchetypeMissing`

```rust
ArchetypeMissing
```

The archetype recorded for an entity is absent from the world.

An entity location outlived the archetype it points at, which a partly
applied hot-reload rehome can produce.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `StructuralPartialEq`
- `PartialEq`
- `EngineMessage`
- `From<WorldError>`
