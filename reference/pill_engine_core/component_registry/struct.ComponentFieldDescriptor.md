<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2695"></a>

# Struct `pill_engine_core::component_registry::ComponentFieldDescriptor`

```rust
pub struct ComponentFieldDescriptor;
```

Source: `engine\pill_engine_core\src\component_registry.rs:97`

One named field of a component or a value type: its name, its type tag and
where it sits in the row.

The derive macros build these at compile time and the C# back end builds
them at runtime from a managed declaration. The host reads them to emit a
typed C# mirror instead of an opaque ABI blob, and the world keeps them so
the editor can show and edit the field.

Every value can be written in a `const` (`offset_of!`, `size_of!`,
`align_of!`), so a descriptor list can live in a `static` inside the
declaring artifact.

## Fields

<a id="rustdoc-item-3459"></a>

### `name`

```rust
name: &'static str
```

Rust field name (snake_case); the C# codegen maps it to PascalCase.

<a id="rustdoc-item-3460"></a>

### `type_tag`

```rust
type_tag: &'static str
```

The field's type tag, from a closed set: `f32`, `u32`, `bool`, ...,
`array:<inner>`, `struct:<path>`, `vec:<element>`, `dynbuf:<element>`,
`string`. The C# codegen maps each tag to a C# type; see
`modules/hosting/pill_development_host/src/csharp/codegen.rs`.

A `vec:<element>` or `string` field is a heap value that Rust owns, so
it has no C# field of its own. Managed code reaches it through the
accessor members the codegen emits, whose trampolines are declared with
`pill_engine::component_registry::PillFieldAccessorDescriptor`.

A `dynbuf:<element>` field is a native buffer the engine owns. Its
`(ptr, len, cap)` handle is mirrorable as plain words, so managed code
reads the buffer in place and only resizing goes through an accessor.

<a id="rustdoc-item-3461"></a>

### `offset`

```rust
offset: usize
```

Byte offset of the field within the type (`core::mem::offset_of!`).

<a id="rustdoc-item-3462"></a>

### `size`

```rust
size: usize
```

Byte size of the field's type.

<a id="rustdoc-item-3463"></a>

### `align`

```rust
align: usize
```

Byte alignment of the field's type.

<a id="rustdoc-item-3464"></a>

### `element_count`

```rust
element_count: usize
```

Number of elements for an `array:` field; zero for a field that is not
an array. The derive computes it from the length expression, so a
literal length and a `const` both work.

<a id="rustdoc-item-3465"></a>

### `decorators`

```rust
decorators: std::borrow::Cow<'static, [FieldDecorator]>
```

The presentation decorators the field declared, in declaration order.
Empty when it declares none.

A Rust type's own list is borrowed from the declaring artifact's static
data. A list the world builds is owned instead: the leaves of a
flattened struct that inherit a colour or vector grouping, and a layout
a managed declaration describes at runtime.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
