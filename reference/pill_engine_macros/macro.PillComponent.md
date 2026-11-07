<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-240"></a>

# Procedural macro `pill_engine_macros::PillComponent`

```rust
proc_macro PillComponent
```

Source: `engine\pill_engine_macros\src\lib.rs:90`

Turns a component type into its engine registration.

Generates `impl Component for T`, a descriptor submitted into this
artifact's compile-time registry, and the field layout read by the schema
hash and the C# mirror codegen.

Type-level helpers (`#[pill(...)]` on the type):
- `persistable` - the component survives a reload through schema migration.
  The type must implement `Serialize + DeserializeOwned + Default`, the same
  bounds [`World::register_persistable_component_with_layout`] requires.
- `shared`, `shared = "crate::Name"` - gives the type one identity in every
  binary that links it. Without it, each binary has its own `TypeId` and its
  own column, and neither binary sees the other's entities. The identity is
  `module_path!()::TypeName` unless pinned, and it must be unique across the
  whole process.

Field decorators (`#[pill(...)]` on a field, Unity's vocabulary). A field
may take several, comma-separated or as one attribute each. They change
presentation only: storage, persistence, the schema fingerprint and the
generated C# mirror stay the same.
- `hide_in_inspector` (not drawn, still stored), `header("Text")` (a
  separator line with text) and `space(10.0)` (a vertical gap);
- `tooltip("Text")` (hover text) and `min(0.0)` (a drag value with that
  floor);
- `range(0.0, 100.0)` (a slider, in whole steps for an integer field);
- `text_area`, `text_area(3, 10)`, `multiline(5)` (multi-line text boxes);
- `color` (an array of three or four numbers, or a struct whose `r`, `g`,
  `b`[, `a`] leaves are numbers; drawn as one colour row with a picker);
  `vector` (consecutive scalar leaves sharing a dotted prefix, drawn as one
  X/Y/Z/W row).

Field types: a primitive, a fixed-size array or a `#[derive(PillMirror)]`
struct becomes a typed C# field. `String`, `Vec<E>` and `Vec<String>` are
Rust-owned containers, mirrored as accessor members that call
derive-generated C-ABI trampolines, so managed code reads and writes the
live container in place. A `Vec` resizes through `E: Default + Clone`. The
elements of a `Vec<String>` are allocated individually, so each one gets its
own accessor. `DynamicBuffer<E>` lives in engine-owned native memory: the
mirror reads its `(ptr, len, cap)` handle straight out of the row and calls
native code only to resize. `E` must be `Copy`, because the buffer runs no
element drop glue.

[`World::register_persistable_component_with_layout`]: ::pill_engine::World::register_persistable_component_with_layout
