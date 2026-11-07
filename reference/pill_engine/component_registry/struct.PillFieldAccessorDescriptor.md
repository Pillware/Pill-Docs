<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-140"></a>

# Struct `pill_engine::component_registry::PillFieldAccessorDescriptor`

```rust
pub struct PillFieldAccessorDescriptor;
```

Source: `engine\pill_engine\src\component_registry.rs:107`

One heap-owning field accessor declared by `#[derive(PillComponent)]`,
submitted into the same per-artifact inventory as the other descriptors.

[`ComponentFieldDescriptor`] says where a field sits in the row. An accessor
instead says how the field's buffer is reached: the derive emits one
`#[no_mangle]` trampoline per supported operation and records its symbol
here. The host resolves those symbols at load time and hands their
addresses to the C# runtime under the operation names `<field>_view`,
`<field>_resize`, `<field>_set`, `<field>_item`, `<field>_set_item` and
`<field>_push`. Each trampoline takes the address of the live component
value and works in place: it does not serialize, copy the buffer, or
allocate on the read path.

## Fields

<a id="rustdoc-item-130"></a>

### `type_name`

```rust
type_name: &'static str
```

Fully-qualified component type name the field belongs to.

<a id="rustdoc-item-131"></a>

### `field_name`

```rust
field_name: &'static str
```

Rust field name (snake_case); the C# codegen derives member names from
it.

<a id="rustdoc-item-132"></a>

### `kind`

```rust
kind: &'static str
```

Container kind: `"vec"`, `"dynbuf"`, `"string"`, or `"vecstring"`.

`"vecstring"` describes a `Vec<String>`: its elements are separately
allocated strings, so no span exists over them and managed code reaches
each element through its own accessor instead.

<a id="rustdoc-item-133"></a>

### `element_tag`

```rust
element_tag: &'static str
```

Element type tag of a `vec` or `dynbuf` field (`f32`,
`struct:<path>`, ...); `string` for a `vecstring` field; empty for a
`string` field.

<a id="rustdoc-item-134"></a>

### `view_symbol`

```rust
view_symbol: &'static str
```

Exported symbol of the view trampoline
(`pill_accessor_{Type}_{field}_view`). For a `vecstring` field the view
reports a null data pointer and the element count, because its elements
are separate allocations.

<a id="rustdoc-item-135"></a>

### `resize_symbol`

```rust
resize_symbol: &'static str
```

Exported symbol of the resize trampoline for a `vec`, `dynbuf` or
`vecstring` field; empty for a `string` field.

<a id="rustdoc-item-136"></a>

### `set_symbol`

```rust
set_symbol: &'static str
```

Exported symbol of the mutate-in-place trampoline for a `string` field;
empty for every other kind.

<a id="rustdoc-item-137"></a>

### `item_symbol`

```rust
item_symbol: &'static str
```

Exported symbol of the per-element view trampoline for a `vecstring`
field (`pill_accessor_{Type}_{field}_item`); empty for every other
kind.

<a id="rustdoc-item-138"></a>

### `set_item_symbol`

```rust
set_item_symbol: &'static str
```

Exported symbol of the per-element replace trampoline for a `vecstring`
field; empty for every other kind.

<a id="rustdoc-item-139"></a>

### `push_symbol`

```rust
push_symbol: &'static str
```

Exported symbol of the append trampoline for a `vecstring` field; empty
for every other kind.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Collect`
