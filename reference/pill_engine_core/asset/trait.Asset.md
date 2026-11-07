<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-716"></a>

# Trait `pill_engine_core::asset::Asset`

```rust
pub trait Asset: Send + Sync + 'static { ... }
```

Source: `engine\pill_engine_core\src\asset.rs:75`

Marks data that is stored many-per-type in the [`AssetManager`](struct.AssetManager.md#rustdoc-item-714).

Implement this for meshes, textures, materials, shaders and the like: any
type a world holds several of, where the type alone does not identify one
value. Use [`Resource`](../resource/trait.Resource.md#rustdoc-item-715) instead for genuine
singletons such as a clock or an input snapshot.

The `Send + Sync` bound has the same reason resources have it: systems run
on several threads, and any of them may reach the store.

## Examples

```
use pill_engine::asset::Asset;
use trait_type_map::impl_trait_accessible;

struct Mesh {
    vertices: Vec<[f32; 3]>,
}

impl Asset for Mesh {}
impl_trait_accessible!(dyn Asset; Mesh);
```

## Required and provided items

<a id="rustdoc-item-712"></a>

### `shared_name`

```rust
fn shared_name() -> Option<&'static str> where Self: Sized;
```

A stable name that identifies this asset type across binaries, or
`None` to be identified by its `TypeId` alone.

This is the asset version of
[`Component::shared_name`](../component/trait.Component.md#rustdoc-item-711).

Every binary that compiles its own copy of the crate defining the type
(a module and the crates that link it, for example) gets its own
`TypeId` for that type. A shared name gives those copies one column
instead of one each; registration also checks that the copies agree on
the type's size and alignment.

Write a fixed string rather than building one from the module path, so
moving the type does not change its identity.

<a id="rustdoc-item-713"></a>

### `shared_identity`

```rust
fn shared_identity() -> Option<u128> where Self: Sized;
```

The stable identity that [`Self::shared_name`](#rustdoc-item-712) hashes to, or `None`.

This is the same hash a shared component uses. Override it only when
you also override `Self::shared_name()`, and keep the two based on the
same string.
