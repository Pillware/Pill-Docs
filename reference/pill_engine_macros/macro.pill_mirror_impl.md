<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-403"></a>

# Procedural macro `pill_engine_macros::pill_mirror_impl`

```rust
proc_macro pill_mirror_impl
```

Source: `engine\pill_engine_macros\src\lib.rs:1812`

Mirrors selected functions of an inherent `impl` block to C#.

Every function inside the block that carries `#[pill_mirror_method]` becomes
a member of the type's C# mirror:
- a `&self` or `&mut self` method becomes an instance member that reaches the
  live value through its address: a component row, a `#[derive(PillMirror)]`
  value, the box of a `#[pill_mirror_object]`, or, on a
  `#[pill_mirror_resource]`, an extension method on `Res<T>` / `ResMut<T>`;
- a `self` method consumes an object (a builder's `with_*` and `build`);
- a function with no receiver becomes a static member (`Shader::new`).

The marker's path may be written fully qualified: only its last segment is
matched. The `impl` block must live in the module that declares the type,
because the qualified name the methods are filed under is built there.

```ignore
#[pill_mirror_object(asset)]
pub struct Mesh { /* ... */ }

#[pill_mirror_impl]
impl Mesh {
    #[pill_mirror_method]
    pub fn from_obj_bytes(name: impl Into<String>, bytes: &[u8]) -> Result<Self, AssetLoadError> {
        /* ... */
    }
}
```

For every marked function the macro also emits, next to the `impl` block, a
C-ABI trampoline of the one shape `pill_engine::mirror` defines, and a
[`PillMethodDescriptor`] carrying the trampoline's address and the tags of
its arguments and result. That is everything the host's C# codegen reads.

Arguments and results may be primitives, strings, slices and `Vec`s,
`impl Into<String>` and `impl IntoIterator`, `Handle<T>`, `AssetLoader`,
`Option<T>`, tuples, arrays of primitives, and mirrored types by value or by
reference. A `Result<T, E>` with `E: Display` fails the managed call with
`E`'s message; any other type is a compile error that names the parameter.

[`PillMethodDescriptor`]: ::pill_engine::component_registry::PillMethodDescriptor
