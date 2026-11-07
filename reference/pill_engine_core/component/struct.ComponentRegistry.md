<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-678"></a>

# Struct `pill_engine_core::component::ComponentRegistry`

```rust
pub struct ComponentRegistry;
```

Source: `engine\pill_engine_core\src\component.rs:609`

Maps component types to bit indices in the component mask.

It registers component types and keeps the [`ComponentId`](enum.ComponentId.md#rustdoc-item-83) to bit index
mapping that mask operations need.

## Fields

<a id="rustdoc-item-2989"></a>

### `bit_indices_by_id`

```rust
bit_indices_by_id: std::collections::HashMap<ComponentId, u8>
```

Maps each registered [`ComponentId`](enum.ComponentId.md#rustdoc-item-83) to its assigned bit index.

<a id="rustdoc-item-2990"></a>

### `names_by_id`

```rust
names_by_id: std::collections::HashMap<ComponentId, String>
```

Registered name of each component type, by id. Diagnostics print it, and
so do the name-keyed lookups persistence and the C# bindings make.

<a id="rustdoc-item-2991"></a>

### `layouts_by_id`

```rust
layouts_by_id: std::collections::HashMap<ComponentId, ComponentRegistration>
```

Layout record of each registered component type, by id.

<a id="rustdoc-item-2992"></a>

### `shared_declaring_types`

```rust
shared_declaring_types: std::collections::HashMap<ComponentId, String>
```

The Rust type name that claimed each shared identity, so a second claim
by a *different* type can be told apart from the same type compiled
twice.

Owned rather than the `&'static str` that `type_name` returns: that
pointer lives in the declaring artifact's read-only data and dangles once
a module DLL is unloaded, while the registry outlives every module.

<a id="rustdoc-item-2993"></a>

### `shared_without_layout_reported`

```rust
shared_without_layout_reported: std::collections::HashSet<ComponentId>
```

Shared components already reported as registered without field
descriptors, so the warning fires once per id rather than once per
registration - a reload registers the same types again every time.

<a id="rustdoc-item-2995"></a>

### `next_bit_index`

```rust
next_bit_index: u8
```

Next bit index to assign to a newly registered component.

<a id="rustdoc-item-2997"></a>

### `free_bits`

```rust
free_bits: Vec<u8>
```

Bit indices reclaimed by [`Self::remove`](#rustdoc-item-2996), reused before `next_bit_index`
advances.

Without this pool, a descriptor manifest that retires and introduces
types across reloads would keep increasing `next_bit_index` until the
128-type limit refused further registrations, even though only a handful
of components are alive at a time.

## Associated functions and methods

<a id="rustdoc-item-2998"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty registry with no components registered.

<a id="rustdoc-item-3003"></a>

### `register`

```rust
pub fn register<T: Component>(self: &mut Self) -> Result<Registration, WorldError>;
```

Registers a component type and gives it a bit index.

Returns [`Registration::Created`](enum.Registration.md#rustdoc-item-3000) with the new bit, or
[`Registration::AlreadyPresent`](enum.Registration.md#rustdoc-item-3001) with the existing one. It is idempotent
by design: a reload re-runs `init`, which registers every type again, and
the two cases stay distinguishable for a caller that cares.
[`Self::register_bit`](#rustdoc-item-3002) throws the distinction away for callers that do
not.

#### Errors

Returns [`WorldError::ComponentTypeLimitExceeded`](../error/enum.WorldError.md#rustdoc-item-2941) when all 128 bits are
taken and [`Self::remove`](#rustdoc-item-2996) has not reclaimed
one. Component types come from user data, so reaching the limit is a
configuration outcome rather than a programming error - it is reported
instead of panicking.

<a id="rustdoc-item-3006"></a>

### `register_with_layout`

```rust
pub fn register_with_layout<T: Component>(self: &mut Self, fields: &[ComponentFieldDescriptor]) -> Result<Registration, WorldError>;
```

Registers a component type together with the field layout it declares.

The layout is recorded so a later registration of the same component - a
hot-reload generation, or a second binary that linked the same shared
type - can be checked against it.

#### Errors

In addition to [`Self::register`](#rustdoc-item-3003)'s error, returns
[`WorldError::SharedComponentLayoutMismatch`](../error/enum.WorldError.md#rustdoc-item-3005) when a component with a
declared shared identity is registered a second time with a different
memory shape. That check is what makes reaching one column from two
binaries sound, so it is an error rather than a debug assertion.

<a id="rustdoc-item-3007"></a>

### `register_with_layout_superseding`

```rust
pub fn register_with_layout_superseding<T: Component>(self: &mut Self, fields: &[ComponentFieldDescriptor], supersedes: bool) -> Result<Registration, WorldError>;
```

[`Self::register_with_layout`](#rustdoc-item-3006) for a registration that replaces the
previous generation of the same subject.

With `supersedes` set, a shared component whose layout differs from the
recorded one takes the new layout instead of being refused. The host has
announced that this registration is a reload of a subject that registered
the component before, and the reload moves the component's rows to the
new layout. Every other binary still built against the old layout is now
stale: its queries are refused by the declared schema check, and the host
suspends its systems until it is rebuilt.

#### Errors

As [`Self::register_with_layout`](#rustdoc-item-3006), except that a layout disagreement is
not an error when `supersedes` is set.

<a id="rustdoc-item-3002"></a>

### `register_bit`

```rust
pub fn register_bit<T: Component>(self: &mut Self) -> Result<u8, WorldError>;
```

Registers a component type and returns its bit, ignoring whether it was
already present.

The common case: callers that only need the bit index.

#### Errors

Returns [`WorldError::ComponentTypeLimitExceeded`](../error/enum.WorldError.md#rustdoc-item-2941) when the 128-type
limit is reached, as [`Self::register`](#rustdoc-item-3003) does.

<a id="rustdoc-item-3008"></a>

### `register_bit_with_layout`

```rust
pub fn register_bit_with_layout<T: Component>(self: &mut Self, fields: &[ComponentFieldDescriptor]) -> Result<u8, WorldError>;
```

[`Self::register_with_layout`](#rustdoc-item-3006) for callers that only need the bit.

#### Errors

Returns the same errors as [`Self::register_with_layout`](#rustdoc-item-3006).

<a id="rustdoc-item-3009"></a>

### `declaring_type_name`

```rust
pub fn declaring_type_name<T: ?Sized>() -> &'static str;
```

The Rust type's own name, without its module path.

`pill_spline::Spline` and `tests::module_copy::Spline` both give
`Spline`. The module path is dropped on purpose: it is what differs
between an in-process stand-in for the cross-binary case and the real
thing, while the type's name is what two copies of one type always
share.

<a id="rustdoc-item-3011"></a>

### `registered_name`

```rust
pub fn registered_name<T: Component>() -> String;
```

The name a component type is registered under.

Its declared shared name when it has one, otherwise its
[`stable_type_name`](../type_names/fn.stable_type_name.md#rustdoc-item-3010); the engine's
own types read `pill_engine::...`. A shared component has to be findable
by the name both binaries wrote down, not by one binary's rendering of
its own Rust path.

<a id="rustdoc-item-3012"></a>

### `register_descriptor`

```rust
pub fn register_descriptor<impl Into<String>: Into<String>>(self: &mut Self, stable_id: u128, name: impl Into<String>) -> Result<u8, WorldError>;
```

Registers a component whose concrete type is defined outside Rust.

Records only what registration itself owns: the bit index and the name.
A descriptor component's storage shape belongs to the factory that
builds its columns, and that factory is what readers consult. A second
copy here could only go stale.

#### Errors

Returns [`WorldError::ComponentTypeLimitExceeded`](../error/enum.WorldError.md#rustdoc-item-2941) when the 128-type
limit is reached and no bit has been reclaimed by [`Self::remove`](#rustdoc-item-2996).

<a id="rustdoc-item-3013"></a>

### `allocate_bit`

```rust
pub(in component) fn allocate_bit(self: &mut Self) -> Option<u8>;
```

Reserves one bit index for a newly registered type, preferring a bit
reclaimed by [`Self::remove`](#rustdoc-item-2996) over a fresh one.

Returns `None` once both the reclaimed pool and the fresh range are
exhausted - that is, at the 128-type ceiling.

<a id="rustdoc-item-2996"></a>

### `remove`

```rust
pub fn remove(self: &mut Self, component_id: &ComponentId);
```

Unregisters a component type and returns its bit to the reclaim pool.

The caller must have removed every row of the type first. An archetype's
mask is also its id, so a bit that is handed out again while an archetype
still maps it would let the next component of that bit reach the stale
archetype and read its columns.

A later registration takes a bit from the pool first, so the freed bit
is normally handed out again. The pool is what keeps a descriptor
manifest that retires and introduces types across reloads from
increasing `next_bit_index` toward the 128-type ceiling.

<a id="rustdoc-item-3014"></a>

### `available_slots`

```rust
pub fn available_slots(self: &Self) -> usize;
```

Number of component types that can still be registered before the
128-type ceiling is reached. Reclaimed bits and the unused fresh range
both count.

The host reports this so a project sees the ceiling coming before
registrations start failing.

<a id="rustdoc-item-3015"></a>

### `get_bit`

```rust
pub fn get_bit(self: &Self, component_id: &ComponentId) -> Option<u8>;
```

Returns the bit index of a registered component, or `None`.

<a id="rustdoc-item-3016"></a>

### `get_name`

```rust
pub fn get_name(self: &Self, component_id: &ComponentId) -> Option<&str>;
```

Returns the registered name of a component, or `None`.

<a id="rustdoc-item-3018"></a>

### `get_layout`

```rust
pub fn get_layout(self: &Self, component_id: &ComponentId) -> Option<ComponentRegistration>;
```

Returns the layout a Rust type declared when it registered.

This is the declaration, not the storage. The persistence migration
compares a new generation's declared shape with the one its predecessor
registered. A descriptor component declares nothing in Rust, so it has
no entry here. Storage shapes come from
[`World::component_layout`](../world/struct.World.md#rustdoc-item-3017), which asks
the factory that builds the columns.

<a id="rustdoc-item-3019"></a>

### `is_registered`

```rust
pub fn is_registered<T: Component>(self: &Self) -> bool;
```

Checks whether a component type has been registered.

Returns `true` if `T` has been registered via [`register`](#rustdoc-item-3003).

<a id="rustdoc-item-3020"></a>

### `registered_components`

```rust
pub fn registered_components(self: &Self) -> impl Iterator<Item = _>;
```

Iterates over all registered components.

Yields `(ComponentId, bit_index, type_name)` for each registered
component type, in no particular order. Used to turn an id back into its
name, to dump the registry, and to count registrations.

<a id="rustdoc-item-3021"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Number of registered component types.

<a id="rustdoc-item-3022"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns `true` if no component types are registered.

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
- `Default`
