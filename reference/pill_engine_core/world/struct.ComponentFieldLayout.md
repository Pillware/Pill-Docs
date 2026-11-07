<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8804"></a>

# Struct `pill_engine_core::world::ComponentFieldLayout`

```rust
pub(crate) struct ComponentFieldLayout;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\world\mod.rs:200`

One component's list of fields, held in the two forms the world needs.

A native component hands over a `&'static` slice from the static data of the
artifact that declares it. A component defined by another language describes
its fields in a manifest at runtime, so the world owns that list. The two
differ only in where the list is stored, so both use a `Cow`.

The list is kept twice because two readers want different things. The
**declared** fields are what a generated mirror such as the C# struct has to
describe. The **editor** view flattens `struct:` fields into one dotted row
per leaf field (`position.x`), so a nested colour can be edited field by
field; that view describes no declaration a mirror could emit. When nothing
needed flattening, the two views are the same slice.

## Fields

<a id="rustdoc-item-8802"></a>

### `declared`

```rust
declared: std::borrow::Cow<'static, [crate::component_registry::ComponentFieldDescriptor]>
```

The fields exactly as the declaring artifact registered them.

<a id="rustdoc-item-8803"></a>

### `editor`

```rust
editor: std::borrow::Cow<'static, [crate::component_registry::ComponentFieldDescriptor]>
```

The editor's view: `struct:` fields flattened into dotted leaf rows.

## Associated functions and methods

<a id="rustdoc-item-8805"></a>

### `from_static`

```rust
pub(crate) fn from_static(fields: &'static [crate::component_registry::ComponentFieldDescriptor]) -> Self;
```

Wraps a layout that lives in the declaring artifact's static data and
needs no flattening.

<a id="rustdoc-item-8806"></a>

### `from_expanded`

```rust
pub(crate) fn from_expanded(declared: &'static [crate::component_registry::ComponentFieldDescriptor], editor: Vec<crate::component_registry::ComponentFieldDescriptor>) -> Self;
```

Wraps a layout whose editor view was flattened into extra rows.

<a id="rustdoc-item-8807"></a>

### `from_owned`

```rust
pub(crate) fn from_owned(fields: Vec<crate::component_registry::ComponentFieldDescriptor>) -> Self;
```

Wraps a layout that another language described at runtime and the world
owns.

Nothing is flattened here. A manifest lists its fields the way it wants
them seen, so both views hold the same list.

<a id="rustdoc-item-8808"></a>

### `fields`

```rust
pub(crate) fn fields(self: &Self) -> &[crate::component_registry::ComponentFieldDescriptor];
```

The editor's view: nested `struct:` fields flattened into leaf rows.

<a id="rustdoc-item-8809"></a>

### `declared`

```rust
pub(crate) fn declared(self: &Self) -> &[crate::component_registry::ComponentFieldDescriptor];
```

The fields as declared, which a generated mirror has to describe.

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
