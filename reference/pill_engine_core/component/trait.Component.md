<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-494"></a>

# Trait `pill_engine_core::component::Component`

```rust
pub trait Component: Send + 'static { ... }
```

Source: `engine\pill_engine_core\src\component.rs:98`

Marker trait that every ECS component type implements.

A component is `Send` and `'static`, nothing more. `Send` is enough for a
mutable query because the scheduler never runs two systems that write the
same component at the same time, and inside one system each thread works on
its own rows. A read query is different: two readers of one component do not
conflict, so they can run at the same time. That is why
[`QueryTarget`](../query/target/trait.QueryTarget.md#rustdoc-item-2754) is implemented for `&T` only when
`T: Sync`. The bound sits on the query rather than on this trait, because a
component that is only ever written never needs to be `Sync`.

A component with interior mutability ([`Cell`](std::cell::Cell),
[`RefCell`](std::cell::RefCell), ...) is not `Sync`, so it cannot be read
through an `&T` query. Keep the mutable part in a separate component and
reach it with a `&mut T` query.

An `&T` query over such a component does not compile:

```compile_fail
# use pill_engine::*;
use std::cell::Cell;

struct Stats {
    hits: Cell<u32>,
}
impl Component for Stats {}

# let mut world = World::new();
# world.register_component::<Stats>();
let _query = Query::<&Stats>::new(&mut world);
```

## Examples

```
# use pill_engine::component::Component;
struct Position { x: f32, y: f32 }

impl Component for Position {}
```

## Required and provided items

<a id="rustdoc-item-711"></a>

### `shared_name`

```rust
fn shared_name() -> Option<&'static str> where Self: Sized;
```

The stable name this component is known by across binaries, or `None`
for the ordinary per-binary identity.

A component type linked into more than one binary in the same process -
the host, the project, a module DLL - gets a different [`TypeId`] in each
binary. `TypeId` is built from the crate name, its `-C metadata`
disambiguator and the type path, so every build produces its own value.
One type then becomes several components with several columns, and
neither binary sees the entities the other created. Declaring a name
replaces that identity with one derived from the name itself. Every
binary computes it the same way, so all of them end up with one
[`ComponentId`](enum.ComponentId.md#rustdoc-item-83), one mask bit and one column.

The name must be unique across the process (`"pill_spline::Spline"`, not
`"Spline"`) and must never change. It is written down by hand rather than
taken from [`std::any::type_name`], because that output is not guaranteed
to stay the same across compiler versions.

Set it with `#[pill(shared)]` on `#[derive(PillComponent)]` rather than
by hand. See [`ComponentId::of`](enum.ComponentId.md#rustdoc-item-2750) for what a name changes.

The method is gated on `where Self: Sized` instead of being an associated
constant: an associated constant would make `Component` unusable as a
trait object, and the storage layer does move components as
`dyn Component`.

<a id="rustdoc-item-2751"></a>

### `shared_identity`

```rust
fn shared_identity() -> Option<u128> where Self: Sized;
```

The stable identity that [`Self::shared_name`](#rustdoc-item-711) hashes to, or `None`.

The default builds it from `shared_name`, so an implementor only writes
the name and the two cannot disagree. `#[derive(PillComponent)]` replaces
the default with a compile-time constant. That matters because
`ComponentId::of` runs on every `get_component`: hashing the name there
costs measurable time, while a constant costs one load, the same as
`TypeId::of`.

Override it only with `shared_component_identity(Self::shared_name())`.
Any other value silently gives the component an identity that no other
binary derives from its name.

<a id="rustdoc-item-2753"></a>

### `declared_schema_hash`

```rust
fn declared_schema_hash() -> Option<u64> where Self: Sized;
```

The structural hash of the field layout that *this binary's* type
declares, or `None` when it declares none.

A query that targets a shared component compares this hash with the one
the registry holds (see [`crate::Query::new`](../query/query/struct.Query.md#rustdoc-item-2752)). The column itself can only
check size and alignment, and those cannot tell `{x: f32, y: f32}` from
`{y: f32, x: f32}`. Without the hash, a binary still running code built
against an older layout - a module whose data crate was reloaded under
it - would read the new rows through the old field offsets.

`#[derive(PillComponent)]` overrides it using the type's field
descriptors, the same ones registration hashes. A hand-written impl calls
`component_schema_hash(Self::FIELD_LAYOUT)`. The default declares nothing,
which leaves the size-and-alignment check as the only check.
