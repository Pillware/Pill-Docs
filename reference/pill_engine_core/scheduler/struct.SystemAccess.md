<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2654"></a>

# Struct `pill_engine_core::scheduler::SystemAccess`

```rust
pub struct SystemAccess;
```

Source: `engine\pill_engine_core\src\scheduler.rs:78`

What a system reads and writes: its component and resource access.

Call [`add_read`](#rustdoc-item-8018),
[`add_write`](#rustdoc-item-8019),
[`add_resource_read`](#rustdoc-item-8020) and
[`add_resource_write`](#rustdoc-item-8021) before the system
is registered. [`conflicts_with`](#rustdoc-item-8022) then
compares the sets directly.

The sets are the only record of what a system touches, so no cached answer
can disagree with them. The engine keeps the copy it was given when the
system was registered, so an access added afterwards never reaches the
batches.

## Fields

<a id="rustdoc-item-8012"></a>

### `component_reads`

```rust
component_reads: std::collections::HashSet<crate::component::ComponentId>
```

Components read immutably (`&T`).

<a id="rustdoc-item-8014"></a>

### `component_writes`

```rust
component_writes: std::collections::HashSet<crate::component::ComponentId>
```

Components written mutably (`&mut T`).

<a id="rustdoc-item-8015"></a>

### `uses_commands`

```rust
uses_commands: bool
```

Whether the system uses `Commands`, which needs exclusive access to the
world.

<a id="rustdoc-item-8016"></a>

### `resource_reads`

```rust
resource_reads: std::collections::HashSet<crate::resource::ResourceId>
```

Resources read immutably (`Res<T>`).

<a id="rustdoc-item-8017"></a>

### `resource_writes`

```rust
resource_writes: std::collections::HashSet<crate::resource::ResourceId>
```

Resources written mutably (`ResMut<T>`).

## Associated functions and methods

<a id="rustdoc-item-8024"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty [`SystemAccess`](#rustdoc-item-2654) with no components or resources.

Equivalent to [`SystemAccess::default`]. Access patterns are built up
with [`add_read`](#rustdoc-item-8018) and
[`add_write`](#rustdoc-item-8019) before registration.

<a id="rustdoc-item-8018"></a>

### `add_read`

```rust
pub fn add_read(self: &mut Self, component_id: ComponentId);
```

Registers `component_id` as read-only (`&T`) access for this system.

<a id="rustdoc-item-8019"></a>

### `add_write`

```rust
pub fn add_write(self: &mut Self, component_id: ComponentId);
```

Registers `component_id` as mutable (`&mut T`) access for this system.

A write to a component conflicts with any other system reading or
writing the same component.

<a id="rustdoc-item-8025"></a>

### `set_uses_commands`

```rust
pub fn set_uses_commands(self: &mut Self, uses_commands: bool);
```

Marks whether this system uses [`Commands`](../commands/struct.Commands.md#rustdoc-item-2621).

A system that uses [`Commands`](../commands/struct.Commands.md#rustdoc-item-2621) requires exclusive
world access and therefore conflicts with every other system.

<a id="rustdoc-item-8020"></a>

### `add_resource_read`

```rust
pub fn add_resource_read(self: &mut Self, resource_id: ResourceId);
```

Registers `resource_id` as immutable (`Res<T>`) access for this system.

<a id="rustdoc-item-8021"></a>

### `add_resource_write`

```rust
pub fn add_resource_write(self: &mut Self, resource_id: ResourceId);
```

Registers `resource_id` as mutable (`ResMut<T>`) access for this system.

<a id="rustdoc-item-8026"></a>

### `reads_count`

```rust
pub fn reads_count(self: &Self) -> usize;
```

How many components this system reads.

Reporting only: the ids stay private, so nothing outside this type can
change the set after registration.

<a id="rustdoc-item-8027"></a>

### `writes_count`

```rust
pub fn writes_count(self: &Self) -> usize;
```

How many components this system writes.

<a id="rustdoc-item-8028"></a>

### `resource_reads_count`

```rust
pub fn resource_reads_count(self: &Self) -> usize;
```

How many resources this system reads.

<a id="rustdoc-item-8029"></a>

### `resource_writes_count`

```rust
pub fn resource_writes_count(self: &Self) -> usize;
```

How many resources this system writes.

<a id="rustdoc-item-8022"></a>

### `conflicts_with`

```rust
pub fn conflicts_with(self: &Self, other: &SystemAccess) -> bool;
```

Checks whether this system conflicts with another.

Two systems conflict when either one uses [`Commands`](../commands/struct.Commands.md#rustdoc-item-2621),
or when one writes a component or resource the other reads or writes.
The sets answer directly, so the result always matches what the systems
really touch. A cached answer could miss an access it never saw, and two
writers of one component would then run on different threads.

The sets hold only a handful of ids per system, so the comparisons are
cheap. The scheduler stores the answer in its conflict matrix when it
rebuilds, and the frame runs the batches built from that matrix.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
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
- `Clone`
- `Default`
