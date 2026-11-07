<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3110"></a>

# Enum `pill_engine_core::component_field::FieldValue`

```rust
pub enum FieldValue { ... }
```

Source: `engine\pill_engine_core\src\component_field\mod.rs:89`

One read or edited value in the engine's reflected vocabulary.

Covers the `type_tag` vocabulary of the derive:

- the scalar primitives the engine can describe;
- whole fixed-size arrays;
- heap-backed containers: `List` reports a sequence's element count
  instead of copying it, and `Text` decodes a string;
- handle and entity references;
- `Opaque`, for a field the engine can find but not interpret (a `struct:`
  tag whose type is not resolvable, or any tag outside the vocabulary).

`Opaque` carries the field's raw bytes so a UI can show them. The UI never
builds one; it only hands back bytes it captured earlier. Those write back
verbatim when their tag and size match the field's own descriptor, which is
how a restore re-creates a destroyed row. `List` and `Text` are read-only
through this path; writes go through the container field's generated
accessors, which reach the live buffer instead of rebuilding the row.

## Variants

<a id="rustdoc-item-3260"></a>

### `F32`

```rust
F32
```

A 32-bit IEEE-754 floating point value.

<a id="rustdoc-item-3262"></a>

### `F64`

```rust
F64
```

A 64-bit IEEE-754 floating point value.

<a id="rustdoc-item-3264"></a>

### `I8`

```rust
I8
```

A signed 8-bit integer.

<a id="rustdoc-item-3266"></a>

### `I16`

```rust
I16
```

A signed 16-bit integer.

<a id="rustdoc-item-3268"></a>

### `I32`

```rust
I32
```

A signed 32-bit integer.

<a id="rustdoc-item-3270"></a>

### `I64`

```rust
I64
```

A signed 64-bit integer.

<a id="rustdoc-item-3272"></a>

### `U8`

```rust
U8
```

An unsigned 8-bit integer.

<a id="rustdoc-item-3274"></a>

### `U16`

```rust
U16
```

An unsigned 16-bit integer.

<a id="rustdoc-item-3276"></a>

### `U32`

```rust
U32
```

An unsigned 32-bit integer.

<a id="rustdoc-item-3278"></a>

### `U64`

```rust
U64
```

An unsigned 64-bit integer.

<a id="rustdoc-item-3280"></a>

### `Bool`

```rust
Bool
```

A boolean, stored as a single Rust byte in the component image.

<a id="rustdoc-item-3282"></a>

### `Usize`

```rust
Usize
```

A pointer-width unsigned integer.

<a id="rustdoc-item-3284"></a>

### `Isize`

```rust
Isize
```

A pointer-width signed integer.

<a id="rustdoc-item-3286"></a>

### `Array`

```rust
Array
```

A whole fixed-size array field, one entry per element in layout order.

<a id="rustdoc-item-3289"></a>

### `List`

```rust
List
```

A heap-backed sequence field (`vec:<element_tag>` or
`dynbuf:<element_tag>`), reported as its element count instead of being
copied: a component `Vec` may hold millions of elements, and the length
is what an inspector needs. Read-only here; use the field's accessors to
edit elements.

<a id="rustdoc-item-3291"></a>

### `Text`

```rust
Text
```

A heap-backed UTF-8 string field (`string`), decoded for display.
Read-only here; use the field's accessors to replace its contents.

<a id="rustdoc-item-3295"></a>

### `Asset`

```rust
Asset
```

A reference to an asset: a `Handle<T>` field's slot index and
generation, with the asset type the field was registered with.

Writable like a scalar, but a write that names another asset type than
the field's is refused. `asset_type` is the type's registered name, the
one `.meta` files and the import registry use; it is `None` when the
field carries no record of it. A cleared reference holds
[`Handle::INVALID`](../asset/struct.Handle.md#rustdoc-item-870)'s pair, `u32::MAX` twice.

<a id="rustdoc-item-3299"></a>

### `Entity`

```rust
Entity
```

A reference to another entity: an `Entity` field's slot id and
generation.

Writable like a scalar. The pair is the *handle*, so it resolves only
in the world that issued it. A reference saved for a later run stores
the entity's [`EntityId`](../entity/struct.EntityId.md#rustdoc-item-3298) instead: the writer looks
the id up, and the loader turns it back into a handle.

<a id="rustdoc-item-3302"></a>

### `Opaque`

```rust
Opaque
```

A field the engine can locate but not interpret.

It is never edited by value. The only write it accepts is its own
captured bytes, when their tag and size still match the field's
descriptor.

## Associated functions and methods

<a id="rustdoc-item-3303"></a>

### `unset_asset`

```rust
pub fn unset_asset() -> Self;
```

The cleared-reference value: [`Handle::INVALID`](../asset/struct.Handle.md#rustdoc-item-870)'s
pair, with no recorded asset type.

The field layer's one spelling of "this reference points at nothing",
so a saver, a restorer and a clearer agree without re-deriving it.

<a id="rustdoc-item-3304"></a>

### `references_nothing`

```rust
pub fn references_nothing(self: &Self) -> bool;
```

Whether this value is a reference that points at nothing.

True for a cleared asset reference ([`Self::unset_asset`](#rustdoc-item-3303)) whatever
wrote it, and for the null entity handle.

<a id="rustdoc-item-3305"></a>

### `variant_tag`

```rust
pub(crate) fn variant_tag(self: &Self) -> &'static str;
```

The closed-vocabulary tag a value's variant corresponds to.

Mirrors the `type_tag` strings the derive emits, so a mismatch can name
both sides. `Array` and `Opaque` are not derive tags; they use the
labels below for diagnostics.

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
- `StructuralPartialEq`
- `PartialEq`
