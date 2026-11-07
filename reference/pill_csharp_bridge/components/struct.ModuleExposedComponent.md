<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-510"></a>

# Struct `pill_csharp_bridge::components::ModuleExposedComponent`

```rust
pub struct ModuleExposedComponent;
```

Source: `csharp\pill_csharp_bridge\src\components.rs:222`

One native component an extension registered, exposed to managed code under
a derived C#-facing name.

The host collects these after the extensions load and hands them to the C#
backend, which creates a byte-level [`ComponentBinding::ModuleNative`](enum.ComponentBinding.md#rustdoc-item-820) for
each one so `project_cs` can query and write the module's real storage.

## Fields

<a id="rustdoc-item-851"></a>

### `csharp_name`

```rust
csharp_name: String
```

C#-facing name derived from the registered Rust type name
(`pill_spline::Spline` -> `pill_spline.Spline`). Managed code declares
its mirror struct under exactly this full name so the stable 128-bit
identity matches.

<a id="rustdoc-item-852"></a>

### `component_id`

```rust
component_id: pill_engine::ComponentId
```

Engine ID of the module-registered native component.

<a id="rustdoc-item-853"></a>

### `size`

```rust
size: usize
```

Size in bytes of the native layout.

<a id="rustdoc-item-854"></a>

### `align`

```rust
align: usize
```

Alignment in bytes of the native layout.

<a id="rustdoc-item-855"></a>

### `fields`

```rust
fields: Vec<pill_engine::component_registry::ComponentFieldDescriptor>
```

Compile-time field layout registered with the component, when the
component was declared with `#[derive(PillComponent)]`. Empty for a
component registered without the derive, and for managed components;
both keep the mirror that treats the component as one opaque block of
bytes.

These are the fields *as declared*: a mirror is a struct declaration,
so a nested `struct:` field stays one field and the code generator
resolves its C# type. The editor's flattened leaf rows (`points[0].y`)
describe an inspector, not a type, and would name fields that C# cannot
declare.

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
