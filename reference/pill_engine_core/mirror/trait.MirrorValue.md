<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-772"></a>

# Trait `pill_engine_core::mirror::MirrorValue`

```rust
pub unsafe trait MirrorValue: Sized { ... }
```

Source: `engine\pill_engine_core\src\mirror.rs:430`

A type a mirrored call takes by value, read from a slot or a slice element.

Implemented by the mirror attributes for the types they declare -
`#[pill_mirror_object]` boxes, `#[derive(PillMirror)]` value types and
enums - and here for the engine types the vocabulary names directly.

## Safety

An implementation must read exactly the encoding the C# runtime writes for
the type. The tag the code generator gives the type is what selects that
encoding.

## Required and provided items

<a id="rustdoc-item-6129"></a>

### `ELEMENT_SIZE`

```rust
const ELEMENT_SIZE: usize;
```

Stride of one element in a `slice:` of this type.

<a id="rustdoc-item-6134"></a>

### `read_slot`

```rust
unsafe fn read_slot(slot: *const u8) -> MirrorResult<Self>;
```

Read the value an argument slot carries.

#### Errors

Returns an error when the bytes do not hold a value of this type.

#### Safety

`slot` must reference a full slot written for this type.

<a id="rustdoc-item-6128"></a>

### `read_element`

```rust
unsafe fn read_element(element: *const u8) -> MirrorResult<Self>;
```

Read one element of a `slice:` of this type.

#### Errors

Returns an error when the bytes do not hold a value of this type.

#### Safety

`element` must reference [`Self::ELEMENT_SIZE`](#rustdoc-item-6129) bytes written for this
type.
