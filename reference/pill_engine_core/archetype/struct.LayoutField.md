<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-320"></a>

# Struct `pill_engine_core::archetype::LayoutField`

```rust
pub struct LayoutField<'a>;
```

Source: `engine\pill_engine_core\src\archetype.rs:370`

One top-level field of a layout, as a migration plan sees it.

Only the top level is described. A nested struct field moves as a single
block, so a plan never maps its inner members: the block is copied or
zero-filled as a whole rather than migrated field by field. A plan copies a
field only when both layouts declare its name and its type tag.

## Fields

<a id="rustdoc-item-316"></a>

### `name`

```rust
name: &'a str
```

Field name. Matching is by name, never by position.

<a id="rustdoc-item-317"></a>

### `type_tag`

```rust
type_tag: &'a str
```

Type tag from the engine's field vocabulary (`f32`, `u32`,
`struct:<path>`, ...).

Matching compares this as well as the name. A name alone cannot tell a
field that moved from one that changed meaning: an `i32` and an `f32`
are both four bytes, so copying between them reinterprets the bits as a
different number instead of preserving the value.

<a id="rustdoc-item-318"></a>

### `offset`

```rust
offset: usize
```

Byte offset of the field inside a row.

<a id="rustdoc-item-319"></a>

### `size`

```rust
size: usize
```

Byte size of the field.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
