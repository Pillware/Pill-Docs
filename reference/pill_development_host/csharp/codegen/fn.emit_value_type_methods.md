<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1332"></a>

# Function `pill_development_host::csharp::codegen::emit_value_type_methods`

```rust
pub(in csharp::codegen) fn emit_value_type_methods(qualified: &str, methods: &[pill_csharp_bridge::ResolvedMirrorMethod], scope: &mirror_codegen::MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:890`

Writes the C# members that mirror a value type's (or a component row's)
`#[pill_mirror_impl]` functions.

A `&self` or `&mut self` method becomes an instance member and hands the
trampoline the receiver's live address - a component row's column slot, or
the local the call was made on - so a `&mut self` method writes through to
it. A function with no receiver becomes a static member. Every member calls
its trampoline through `TracyLive.MirrorCall`, which does the pointer work,
so the generated body compiles without `AllowUnsafeBlocks`.

Returns an empty string when the type has no mirrored functions.

## Errors

Returns a message when one of the type's members cannot be lowered to C#.
