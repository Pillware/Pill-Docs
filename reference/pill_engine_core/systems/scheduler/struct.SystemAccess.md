<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2919"></a>

# Struct `pill_engine_core::systems::scheduler::SystemAccess`

```rust
pub struct SystemAccess;
```

Source: `engine\pill_engine_core\src\systems\scheduler.rs:78`

What a system reads and writes: its component and resource access.

Call [`add_read`](#rustdoc-item-10361),
[`add_write`](#rustdoc-item-10362),
[`add_resource_read`](#rustdoc-item-10363) and
[`add_resource_write`](#rustdoc-item-10364) before the system
is registered. [`conflicts_with`](#rustdoc-item-10365) then
compares the sets directly.

The sets are the only record of what a system touches, so no cached answer
can disagree with them. The engine keeps the copy it was given when the
system was registered, so an access added afterwards never reaches the
batches.

## Fields

<a id="rustdoc-item-10355"></a>

### `component_reads`

```rust
component_reads: std::collections::HashSet<crate::component::ComponentId>
```

Components read immutably (`&T`).

<a id="rustdoc-item-10357"></a>

### `component_writes`

```rust
component_writes: std::collections::HashSet<crate::component::ComponentId>
```

Components written mutably (`&mut T`).

<a id="rustdoc-item-10358"></a>

### `uses_commands`

```rust
uses_commands: bool
```

Whether the system uses `Commands`, which needs exclusive access to the
world.

<a id="rustdoc-item-10359"></a>

### `resource_reads`

```rust
resource_reads: std::collections::HashSet<crate::resource::ResourceId>
```

Resources read immutably (`Res<T>`).

<a id="rustdoc-item-10360"></a>

### `resource_writes`

```rust
resource_writes: std::collections::HashSet<crate::resource::ResourceId>
```

Resources written mutably (`ResMut<T>`).

## Associated functions and methods

<a id="rustdoc-item-10367"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty [`SystemAccess`](#rustdoc-item-2919) with no components or resources.

Equivalent to [`SystemAccess::default`]. Access patterns are built up
with [`add_read`](#rustdoc-item-10361) and
[`add_write`](#rustdoc-item-10362) before registration.

<a id="rustdoc-item-10361"></a>

### `add_read`

```rust
pub fn add_read(self: &mut Self, component_id: ComponentId);
```

Registers `component_id` as read-only (`&T`) access for this system.

<a id="rustdoc-item-10362"></a>

### `add_write`

```rust
pub fn add_write(self: &mut Self, component_id: ComponentId);
```

Registers `component_id` as mutable (`&mut T`) access for this system.

A write to a component conflicts with any other system reading or
writing the same component.

<a id="rustdoc-item-10368"></a>

### `set_uses_commands`

```rust
pub fn set_uses_commands(self: &mut Self, uses_commands: bool);
```

Marks whether this system uses [`Commands`](../../ecs/commands/struct.Commands.md#rustdoc-item-2886).

A system that uses [`Commands`](../../ecs/commands/struct.Commands.md#rustdoc-item-2886) requires exclusive
world access and therefore conflicts with every other system.

<a id="rustdoc-item-10363"></a>

### `add_resource_read`

```rust
pub fn add_resource_read(self: &mut Self, resource_id: ResourceId);
```

Registers `resource_id` as immutable (`Res<T>`) access for this system.

<a id="rustdoc-item-10364"></a>

### `add_resource_write`

```rust
pub fn add_resource_write(self: &mut Self, resource_id: ResourceId);
```

Registers `resource_id` as mutable (`ResMut<T>`) access for this system.

<a id="rustdoc-item-10369"></a>

### `merge`

```rust
pub fn merge(self: &mut Self, other: &SystemAccess);
```

Folds another access pattern into this one.

The engine uses it once per registration to add a `run_if` condition's
reads to the access its system declares, so the batches also respect
what the conditions read. After it returns, the two patterns are
indistinguishable: only the merged sets are kept.

<a id="rustdoc-item-10370"></a>

### `reads_count`

```rust
pub fn reads_count(self: &Self) -> usize;
```

How many components this system reads.

Reporting only: the ids stay private, so nothing outside this type can
change the set after registration.

<a id="rustdoc-item-10371"></a>

### `writes_count`

```rust
pub fn writes_count(self: &Self) -> usize;
```

How many components this system writes.

<a id="rustdoc-item-10372"></a>

### `resource_reads_count`

```rust
pub fn resource_reads_count(self: &Self) -> usize;
```

How many resources this system reads.

<a id="rustdoc-item-10373"></a>

### `resource_writes_count`

```rust
pub fn resource_writes_count(self: &Self) -> usize;
```

How many resources this system writes.

<a id="rustdoc-item-10365"></a>

### `conflicts_with`

```rust
pub fn conflicts_with(self: &Self, other: &SystemAccess) -> bool;
```

Checks whether this system conflicts with another.

Two systems conflict when either one uses [`Commands`](../../ecs/commands/struct.Commands.md#rustdoc-item-2886),
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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `Default`
