<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3105"></a>

# Module `pill_engine_core::component_field`

Source: `engine\pill_engine_core\src\component_field\mod.rs:1`

Generic type-erased component field access for editor-style tools.
Generic, type-erased component field access for editor-style tools.

## Responsibilities

- Own the field vocabulary an inspector speaks: [`FieldValue`](enum.FieldValue.md#rustdoc-item-3110), the
  [`ComponentFieldError`](enum.ComponentFieldError.md#rustdoc-item-3164) returned by every refused edit, and the helpers
  that name a field's kind (`is_handle_tag`, `is_entity_tag`,
  `is_container_tag`).
- Keep the module's public paths stable. [`FieldValue`](enum.FieldValue.md#rustdoc-item-3110) and
  [`ComponentFieldError`](enum.ComponentFieldError.md#rustdoc-item-3164) are the names the rest of the engine uses, and
  [`MAX_EXPANDED_ELEMENTS`] and [`format_component_debug`] are re-exported
  from the files that own them.

## Design

Components live in erased columns, and nothing downcasts through `dyn Any`.
So the field layout that `#[derive(PillComponent)]` and
`#[derive(PillMirror)]` register (`name`, `type_tag`, `offset`, `size`,
`align`, `element_count`) is the only generic way to reach a component's
value. This module is the safe wrapper over that layout, split by concern:

- `mod.rs` (here): the vocabulary, the errors and the tag helpers.
- `row.rs`: finds a component's field in a live row, then reads or writes
  it. Every entry point that resolves a live row looks the component up
  through **the entity's own archetype**. That archetype is the one place
  that records which generation created the data; a lookup by name across
  the whole registry can find several registrations under one name. No
  pointer into the row is handed to the caller.
- `codec.rs`: turns a row's bytes into a [`FieldValue`](enum.FieldValue.md#rustdoc-item-3110) and back.
- `expand.rs`: flattens a nested `struct:` field into leaf rows while a
  component registers.

[`FieldValue`](enum.FieldValue.md#rustdoc-item-3110) covers the closed `type_tag` vocabulary of the derive. A
`struct:` field, or any other tag the engine cannot interpret, is read as
[`FieldValue::Opaque`](enum.FieldValue.md#rustdoc-item-3302) and is never edited by value, so an inspector can
show such a field instead of hiding it. A restore writes the captured
bytes back exactly as they were read. A nested `struct:` field whose type
has a known layout never appears as `Opaque`: the world flattens it into
dotted leaf rows at registration
([`World::register_component_with_layout`](../world/struct.World.md#rustdoc-item-3407)), so `Opaque` appears only when
no layout could be found.

A tag is the derive's name for a field's type, not a type itself. `f32`,
`u64` and `bool` are scalars, `struct:Handle<Mesh>` is an asset reference,
`entity` is an entity reference, `array:<tag>` is a fixed array, and
`struct:<path>` is anything the engine cannot interpret. Reading a tag is
always a string comparison against this closed set, never a type lookup.

## Row byte convention

A row's bytes are native-endian. That includes an asset handle's two `u32`s
(index first, then generation) and an entity reference's slot and
generation. The C# mirror reads the same row in the same process, so no
byte order crosses a machine boundary. A field that ever does would need its
own convention stated here.

## Module contents

### Modules
- [`codec`](codec/index.md#rustdoc-item-3089) — Scalar and container encode/decode for component field rows.
- [`expand`](expand/index.md#rustdoc-item-3168) — Expansion of nested component field layouts at registration time.
- [`row`](row/index.md#rustdoc-item-3172) — Finds, reads and writes single fields of a component row.

### Enums
- [`ComponentFieldError`](enum.ComponentFieldError.md#rustdoc-item-3164) — Why a generic field read or write was refused.
- [`FieldValue`](enum.FieldValue.md#rustdoc-item-3110) — One read or edited value in the engine's reflected vocabulary.

### Functions
- [`is_container_tag`](fn.is_container_tag.md#rustdoc-item-3404) — Whether a field's type tag names a heap-backed container.
- [`is_entity_tag`](fn.is_entity_tag.md#rustdoc-item-3406) — Whether a type tag is an `Entity` field's.
- [`is_handle_tag`](fn.is_handle_tag.md#rustdoc-item-3405) — Whether a type tag is a `Handle<T>` field's (`struct:Handle<Mesh>`, or

## Re-exports

- [`pub use expand::MAX_EXPANDED_ELEMENTS;`](expand/constant.MAX_EXPANDED_ELEMENTS.md#rustdoc-item-3165)
- [`pub use row::format_component_debug;`](row/fn.format_component_debug.md#rustdoc-item-3255)
