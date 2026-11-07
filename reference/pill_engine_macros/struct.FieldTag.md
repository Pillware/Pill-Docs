<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-318"></a>

# Struct `pill_engine_macros::FieldTag`

```rust
pub(crate) struct FieldTag;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:853`

A field's wire tag, together with the accessor set the tag implies.

The code that builds the tag already decides whether the field is a
container and what its element is. Carrying that decision out with the text
means no second function has to strip the prefixes off again. A mistake
there would emit a `vec:f32` row with no accessor trampolines.

## Fields

<a id="rustdoc-item-316"></a>

### `tag_text`

```rust
tag_text: String
```

The tag the descriptor carries (`f32`, `vec:f32`, `struct:<path>`, ...).

<a id="rustdoc-item-317"></a>

### `heap_field_kind`

```rust
heap_field_kind: Option<HeapFieldKind>
```

The accessor set the tag implies, when the field owns heap memory.

## Associated functions and methods

<a id="rustdoc-item-319"></a>

### `plain`

```rust
pub(crate) fn plain(tag_text: String) -> Self;
```

A tag with no accessor trampolines behind it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
