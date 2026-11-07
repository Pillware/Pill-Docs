<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-687"></a>

# Enum `pill_csharp_bridge::components::ComponentBinding`

```rust
pub(crate) enum ComponentBinding { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:137`

Tells the bridge where one managed identity's storage lives.

Every binding is type-erased: managed storage keeps the layout facts that
raw bytes need, and a Rust component - an extension's or the renderer
data's - is served through the byte view of its native column. The bridge
names no Rust component type.

## Variants

<a id="rustdoc-item-815"></a>

### `Managed`

```rust
Managed
```

A managed layout stored as raw bytes.

<a id="rustdoc-item-820"></a>

### `ModuleNative`

```rust
ModuleNative
```

A native component registered by an extension, exposed to managed code
through the raw byte view of its column.

The host never names the concrete Rust type. Reads and writes go
through the type-erased native column accessors, exactly as they do for
managed storage; the difference is that the column is the module's own
native storage, so managed code and Rust code read and write the same
rows.

## Associated functions and methods

<a id="rustdoc-item-821"></a>

### `component_id`

```rust
pub(crate) fn component_id(self: Self) -> ComponentId;
```

Return the engine component ID regardless of whether storage is backed
by a concrete Rust type or a managed layout.

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
