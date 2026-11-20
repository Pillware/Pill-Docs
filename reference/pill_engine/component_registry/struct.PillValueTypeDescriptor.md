<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-86"></a>

# Struct `pill_engine::component_registry::PillValueTypeDescriptor`

```rust
pub struct PillValueTypeDescriptor;
```

Source: `engine\pill_engine\src\component_registry.rs:81`

A plain value type (not a component) declared with `#[derive(PillMirror)]`
or `pill_value_type!`.

The derive and the macro submit one into the same per-artifact inventory as
[`PillComponentDescriptor`](struct.PillComponentDescriptor.md#rustdoc-item-10), so the host can resolve `struct:<path>` field
tags to typed C# structs when it generates mirrors. It is `Copy` so the
module ABI can hand the host a copy of each descriptor. The `fields` slice
still points into the declaring artifact's static data, which stays mapped
for the artifact's lifetime. It implements `PartialEq` but not `Eq`: the
float payloads in a field's presentation decorators have no total equality.

## Fields

<a id="rustdoc-item-81"></a>

### `type_name`

```rust
type_name: &'static str
```

The type's stored name, `<crate>::<Type>`, or the name a
`pill_value_type!` declaration spells.

<a id="rustdoc-item-82"></a>

### `crate_name`

```rust
crate_name: &'static str
```

The package that declared the type, from `env!("CARGO_PKG_NAME")` at
the macro's expansion site.

The host uses it to attribute a declaration to the module that owns
it: one artifact that links another crate (an extension depending on
an extension) carries the dependency's submissions too, and only the
owning module's mirror may emit them.

<a id="rustdoc-item-83"></a>

### `size`

```rust
size: usize
```

Byte size of the value type (`size_of::<T>()`).

<a id="rustdoc-item-84"></a>

### `align`

```rust
align: usize
```

Byte alignment of the value type (`align_of::<T>()`).

<a id="rustdoc-item-85"></a>

### `fields`

```rust
fields: &'static [ComponentFieldDescriptor]
```

Field layout of the value type.

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
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Collect`
