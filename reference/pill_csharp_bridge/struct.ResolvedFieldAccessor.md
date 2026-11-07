<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2111"></a>

# Struct `pill_csharp_bridge::ResolvedFieldAccessor`

```rust
pub struct ResolvedFieldAccessor;
```

Source: `csharp\pill_csharp_bridge\src\lib.rs:143`

One heap-field accessor resolved to callable addresses, shared by the
host's module loader, the C# mirror codegen, and the managed runtime's
method table.

## Fields

<a id="rustdoc-item-2101"></a>

### `type_name`

```rust
type_name: String
```

Fully-qualified component type name the field belongs to.

<a id="rustdoc-item-2102"></a>

### `field_name`

```rust
field_name: String
```

Rust field name, snake_case.

<a id="rustdoc-item-2103"></a>

### `kind`

```rust
kind: String
```

Container kind: `"vec"`, `"dynbuf"`, `"string"`, or `"vecstring"`.

<a id="rustdoc-item-2104"></a>

### `element_tag`

```rust
element_tag: String
```

Element type tag of a `vec` field. It is `string` for a `vecstring`
field, and empty for a `string` field.

<a id="rustdoc-item-2105"></a>

### `view_address`

```rust
view_address: Option<usize>
```

Address of the view trampoline. `None` for a `vecstring` field, whose
elements are allocated separately and cannot be viewed as one run.

<a id="rustdoc-item-2106"></a>

### `resize_address`

```rust
resize_address: Option<usize>
```

Address of the resize trampoline for a `vec`, `dynbuf` or `vecstring`
field.

<a id="rustdoc-item-2107"></a>

### `set_address`

```rust
set_address: Option<usize>
```

Address of the replace-in-place trampoline for a `string` field.

<a id="rustdoc-item-2108"></a>

### `item_address`

```rust
item_address: Option<usize>
```

Address of the per-element view trampoline for a `vecstring` field.

<a id="rustdoc-item-2109"></a>

### `set_item_address`

```rust
set_item_address: Option<usize>
```

Address of the per-element replace trampoline for a `vecstring` field.

<a id="rustdoc-item-2110"></a>

### `push_address`

```rust
push_address: Option<usize>
```

Address of the append trampoline for a `vecstring` field.

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
