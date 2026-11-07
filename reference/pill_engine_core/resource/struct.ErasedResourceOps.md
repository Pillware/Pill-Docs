<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7359"></a>

# Struct `pill_engine_core::resource::ErasedResourceOps`

```rust
pub struct ErasedResourceOps;
```

Source: `engine\pill_engine_core\src\resource.rs:372`

Everything an [`ErasedResource`](struct.ErasedResource.md#rustdoc-item-6438) needs to know about its value's type, as
plain data.

The table holds function pointers rather than a vtable, for the same reason
[`ColumnOps`](../archetype/struct.ColumnOps.md#rustdoc-item-168) does on the component side. A
`Box<dyn Any>` keeps its destructor in a vtable owned by the artifact that
created the value, and a resource outlives the module that inserted it -
nothing clears resources on reload - so that destructor could end up
pointing into an unmapped image. Plain data can be replaced instead, right
before the code it points at goes away.

One table answers every question about a registration: the drop, the size
and alignment a box needs for its own allocation, and, for a declaration
from another language, the schema hash its manifest carried. The drop takes
no row count, unlike a component column's `drop_range`, because a box holds
exactly one value rather than a run of rows.

## Fields

<a id="rustdoc-item-7346"></a>

### `drop_in_place`

```rust
drop_in_place: unsafe fn (_: *mut u8)
```

Drop the initialized value at `ptr`.

#### Safety

`ptr` must point at a live, correctly aligned value of the type this
table was built for.

<a id="rustdoc-item-7347"></a>

### `size`

```rust
size: usize
```

Size in bytes of the values this table describes.

<a id="rustdoc-item-7348"></a>

### `align`

```rust
align: usize
```

Alignment in bytes of the values this table describes.

<a id="rustdoc-item-7349"></a>

### `schema_hash`

```rust
schema_hash: Option<u64>
```

Schema hash the declaring manifest carried, for a foreign declaration.
`None` for a Rust type, whose layout *is* its type.

<a id="rustdoc-item-7351"></a>

### `foreign`

```rust
foreign: bool
```

Whether this table drops nothing because its values are blittable bytes
owned by another language.

[`World::rehome_resources`](../world/struct.World.md#rustdoc-item-7350) leaves such a box's table alone - there is
no newer code to point it at, and no destructor to keep valid - and the
byte accessors and the relayout path read this flag to refuse a Rust
value.

<a id="rustdoc-item-7353"></a>

### `layout_sources`

```rust
layout_sources: Option<&'static [&'static str]>
```

Files the declaring type said define its layout, or `None` when it
declared nothing.

The list lives in the artifact that declared it, so it has the same
lifetime as `drop_in_place`: valid while that image is mapped, and
refreshed by [`World::rehome_resources`](../world/struct.World.md#rustdoc-item-7350) together with the rest of the
table. Read it through [`World::kept_layout_declaration`](../world/struct.World.md#rustdoc-item-7352), which copies
it out as owned strings.

<a id="rustdoc-item-7354"></a>

### `layout_dependencies`

```rust
layout_dependencies: Option<&'static [&'static str]>
```

Crates the declaring type said can change its layout, or `None`.

Same lifetime rule as `layout_sources`.

<a id="rustdoc-item-7355"></a>

### `declaring_type_name`

```rust
declaring_type_name: Option<&'static str>
```

Full path of the type this table describes, or `None` for a foreign
declaration, which has no Rust type to name.

The same type keeps this name across a reload while its [`TypeId`]
changes, so it is what a record written by one generation is matched
against in the next.

<a id="rustdoc-item-7357"></a>

### `settings_asset`

```rust
settings_asset: Option<crate::settings::SettingsAssetOps>
```

The manager's settings-asset surface, when the type is a
[`SettingsAssetManager`](../settings/trait.SettingsAssetManager.md#rustdoc-item-7356).

The renderer and the applier point into the artifact that registered the
manager, so they have the same lifetime rule as `drop_in_place` and are
refreshed with the rest of the table by `World::rehome_resources`.

## Associated functions and methods

<a id="rustdoc-item-7360"></a>

### `of`

```rust
pub fn of<T: Resource>() -> Self;
```

Builds the table for a concrete Rust resource type.

<a id="rustdoc-item-7361"></a>

### `with_settings_asset`

```rust
pub fn with_settings_asset<T: crate::settings::SettingsAssetManager>(self: Self) -> Self;
```

Adds the settings-asset surface of a manager type.

Called by `World::insert_settings_asset_manager` and
`World::register_settings_asset_manager`, which are the paths a manager
whose tuning lives in a settings asset takes.

<a id="rustdoc-item-7362"></a>

### `foreign`

```rust
pub fn foreign(size: usize, align: usize, schema_hash: u64) -> Self;
```

Builds the table for a declaration from another language.

The drop is deliberately a no-op. A foreign resource is a run of
blittable bytes that owns nothing: the C# manifest path allows only
unmanaged value types, so there is no destructor to run and no artifact
whose code could go away.

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
- `Clone`
- `Copy`
