<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-715"></a>

# Trait `pill_engine_core::resource::Resource`

```rust
pub trait Resource: Send + Sync + 'static { ... }
```

Source: `engine\pill_engine_core\src\resource.rs:79`

Marks a type as a resource: one value of it lives in the [`World`](../world/struct.World.md#rustdoc-item-2583).

Unlike components, resources are not attached to entities. They hold
global state such as time, input or configuration, and must be
`Send + Sync` so systems can reach them in parallel.

## Examples

```
use pill_engine::Resource;

struct ProjectTime {
    delta_seconds: f32,
    elapsed_seconds: f32,
}

impl Resource for ProjectTime {}
```

## Required and provided items

<a id="rustdoc-item-7250"></a>

### `shared_name`

```rust
fn shared_name() -> Option<&'static str> where Self: Sized;
```

A stable name for this resource, or `None` to be identified by its
[`TypeId`] inside this binary only.

This is the resource counterpart of
[`Component::shared_name`](../component/trait.Component.md#rustdoc-item-711),
and it exists for the same reason: when two artifacts compile the type
with different inputs, each gets its own [`TypeId`], and the same type
would become two resources that cannot see each other. A shared name
gives both artifacts one identity.

The name must be unique across the whole process, so namespace it -
`"pill_spline::SplineSettings"`, not `"Settings"`.

Most resources do not need this: a type every artifact compiles
identically already has the same `TypeId` everywhere, which is why
`Time` and `AssetManager` cross the boundary untouched.

<a id="rustdoc-item-7251"></a>

### `shared_identity`

```rust
fn shared_identity() -> Option<u128> where Self: Sized;
```

The stable identity that [`Self::shared_name`](#rustdoc-item-7250) turns into, or `None`.

The default derives it from `shared_name`, so an implementor writes
only the name and the two cannot disagree. Override it only with
`shared_component_identity(Self::shared_name())`: any other value would
give this resource an identity different from the one every other
artifact derives from the same name.

<a id="rustdoc-item-6433"></a>

### `shared_schema_hash`

```rust
fn shared_schema_hash() -> Option<u64> where Self: Sized;
```

A hash of this resource's field layout, or `None`.

This is the resource counterpart of a component's schema hash. Size and
alignment cannot tell `{u32, u32}` from `{f32, f32}`, so a shared
resource whose declaring types have different field types is caught
here instead of being read through the wrong `T`.

The default is `None`, and a claim compares the hash only when both
sides carry one, so a type that does not need the check does not have
to make one up. When the type has a field vocabulary, derive the value
with [`component_schema_hash`](../component/fn.component_schema_hash.md#rustdoc-item-2939).

<a id="rustdoc-item-7252"></a>

### `layout_sources`

```rust
fn layout_sources() -> Option<&'static [&'static str]> where Self: Sized;
```

The files whose contents define this type's layout, or `None`.

A resource outlives the module that inserted it, so a reload keeps the
live value and re-points its function table at the new image. That is
safe only while the two images agree on the type's layout: a field
added, removed or retyped keeps the same bytes but changes what they
mean, and the value is then read through a type it was not built for.

Declaring the sources lets the development host fingerprint the layout
instead of assuming it. When the fingerprint is unchanged the value is
kept; when it changed the value is dropped through the retiring image's
own drop function and the module rebuilds it, with a warning naming the
resource and what changed. Paths are relative to the root of the crate
that declares the resource - the directory the host watches, builds and
reads the fingerprint from.

The default is `None`, which keeps the behaviour that predates this
declaration: the value is kept whenever the next generation registers
the type again. Declaring a list is therefore opt-in and only costs a
rebuild of this one resource after an edit to these files.

List every file that can change the layout, including ones the type
embeds by value; a file that is missed is a file whose edit keeps a
stale value.

<a id="rustdoc-item-7253"></a>

### `layout_dependencies`

```rust
fn layout_dependencies() -> Option<&'static [&'static str]> where Self: Sized;
```

The crates whose resolved version can change this type's layout, or
`None`.

The companion of [`Self::layout_sources`](#rustdoc-item-7252) for the part of a layout that
comes from another crate: a type that embeds a dependency's type changes
shape when that dependency is upgraded, without any file of this crate
changing. The host looks each name up in the workspace's `Cargo.lock`
and folds the versions into the same fingerprint. A crate that is absent
from the lockfile is hashed as absent, so adding it later also reads as
a change.

The default is `None`, and both lists being `None` means the type has
declared nothing and is handled as before. Names are package names as
`Cargo.lock` writes them (`serde`, not `serde-1.0.0`).
