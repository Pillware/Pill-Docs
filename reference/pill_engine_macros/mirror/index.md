<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Module `pill_engine_macros::mirror`

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:1`

Converts the mirror attributes' Rust signatures and types into the C ABI
form.
The mirror attributes: Rust functions and types made callable from C#.

## Responsibilities

- Lower a Rust signature to the one trampoline shape `pill_engine::mirror`
  defines, `(args, ret) -> status`. Each argument is read from its 16-byte
  slot, and the result is written to `ret`.
- Tag every argument and the result for the C# codegen, using the fixed
  vocabulary `lower_parameter` and `lower_return` accept.
- Emit what a mirrored type needs: the drop trampoline and asset store
  operations of an object, the encodings of an enum or a value type, and
  the pinned identity of an asset or a resource.

## Design

The lowering is syntactic, as every proc macro's must be: a parameter is
classified by how it is written. Shapes that always mean the same thing -
`&str`, `impl Into<String>`, `Vec<T>`, `Handle<T>`, a tuple of primitives -
are read here directly. A named type taken by value is read through
`MirrorValue`, which the attribute that declared the type implemented, so a
type nobody mirrored is a compile error here instead of a wrong read at run
time. A named type taken by reference crosses as the address of the value
(an object's box, a component row, a resource), which is why the codegen,
not this macro, decides what the C# parameter looks like.

## Module contents

### Structs
- [`LoweredParameter`](struct.LoweredParameter.md#rustdoc-item-74) — One parameter, lowered.
- [`LoweredReturn`](struct.LoweredReturn.md#rustdoc-item-105) — A lowered result: its tag, and the statements that write `__value`.
- [`MirroredFunction`](struct.MirroredFunction.md#rustdoc-item-163) — Everything one trampoline and its descriptor need.
- [`ObjectFlags`](struct.ObjectFlags.md#rustdoc-item-212) — The flags `#[pill_mirror_object(...)]` accepts.
- [`Owner`](struct.Owner.md#rustdoc-item-6) — The type a mirrored method or associated function belongs to, as the
- [`TypeRow`](struct.TypeRow.md#rustdoc-item-191) — One `__type` (or other `__`-named) row describing a type rather than a

### Enums
- [`Receiver`](enum.Receiver.md#rustdoc-item-127) — How a mirrored function takes its owner.

### Functions
- [`array_shape`](fn.array_shape.md#rustdoc-item-98) — The element type and length of a `[T; N]` of primitives.
- [`concrete_type`](fn.concrete_type.md#rustdoc-item-65) — `ty` with `Self` replaced by the owner, so it can be named outside the
- [`discriminant_value`](fn.discriminant_value.md#rustdoc-item-238) — The value of a literal (possibly negated) enum discriminant.
- [`emit_function`](fn.emit_function.md#rustdoc-item-178) — Build the trampoline and descriptor submission for one function.
- [`generic_argument`](fn.generic_argument.md#rustdoc-item-62) — The `index`-th generic type argument of a path segment.
- [`into_iterator_item`](fn.into_iterator_item.md#rustdoc-item-94) — The element of an `impl IntoIterator<Item = T>` bound.
- [`is_named`](fn.is_named.md#rustdoc-item-69) — Whether a type's last path segment is `name`.
- [`is_str`](fn.is_str.md#rustdoc-item-70) — Whether a type is `str`.
- [`last_segment`](fn.last_segment.md#rustdoc-item-59) — The last segment of a path type, looking through `Group` and `Paren`; `None`
- [`lower_element`](fn.lower_element.md#rustdoc-item-93) — Lower one slice element type.
- [`lower_parameter`](fn.lower_parameter.md#rustdoc-item-100) — Lower one parameter read from `slot` into the binding `binding`.
- [`lower_plain_return`](fn.lower_plain_return.md#rustdoc-item-120) — Lower the plain (not `Result`) part of a result type.
- [`lower_return`](fn.lower_return.md#rustdoc-item-121) — Lower a function's result.
- [`mirror_enum`](fn.mirror_enum.md#rustdoc-item-235) — Expand `#[derive(PillMirror)]` on a fieldless enum with an integer `repr`.
- [`mirror_fn`](fn.mirror_fn.md#rustdoc-item-182) — Expand `#[pill_mirror_fn]` on a free function.
- [`mirror_impl`](fn.mirror_impl.md#rustdoc-item-180) — Expand `#[pill_mirror_impl]` on an inherent `impl` block.
- [`mirror_object`](fn.mirror_object.md#rustdoc-item-231) — Expand `#[pill_mirror_object]` on a struct or enum.
- [`mirror_resource`](fn.mirror_resource.md#rustdoc-item-233) — Expand `#[pill_mirror_resource("shared::Name")]` on a struct.
- [`object_flags`](fn.object_flags.md#rustdoc-item-230) — Parse the attribute's comma-separated flags and `shared = "..."` option.
- [`primitive_name`](fn.primitive_name.md#rustdoc-item-68) — The primitive name of a type, when it is one.
- [`primitive_width`](fn.primitive_width.md#rustdoc-item-2) — The width of a primitive type name, or `None` when it is not one.
- [`qualified_name`](fn.qualified_name.md#rustdoc-item-179) — The qualified name a type declared at the expansion site is known by.
- [`tuple_layout`](fn.tuple_layout.md#rustdoc-item-96) — The field offsets of a tuple of primitives packed with natural alignment,
- [`type_name`](fn.type_name.md#rustdoc-item-63) — The name the codegen uses for a named type: its last path segment, with
- [`type_row`](fn.type_row.md#rustdoc-item-206) — Submit one type row.
- [`unsupported`](fn.unsupported.md#rustdoc-item-90) — The error for a type outside the vocabulary.
- [`value_tag`](fn.value_tag.md#rustdoc-item-89) — The tag of a named type taken by value.
- [`value_type_encodings`](fn.value_type_encodings.md#rustdoc-item-234) — The `MirrorValue` and `MirrorReturn` implementations of a value type.

### Constants
- [`PRIMITIVE_WIDTHS`](constant.PRIMITIVE_WIDTHS.md#rustdoc-item-0) — The primitive type names the vocabulary passes by value, each with its
