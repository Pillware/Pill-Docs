<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-408"></a>

# Procedural macro `pill_engine_macros::pill_mirror_resource`

```rust
proc_macro pill_mirror_resource
```

Source: `engine\pill_engine_macros\src\lib.rs:1908`

Mirrors a world resource to C# under a shared name.

`#[pill_mirror_resource("my_crate::MyResource")]` implements `Resource`
with that shared name and declares the type, so C# names it as a marker
type:
- systems take `Res<T>` or `ResMut<T>`, and the scheduler orders them
  against every Rust user of the resource;
- its `#[pill_mirror_impl]` methods become extension methods on those
  parameters;
- mirrored functions can take it as `&T` or `&mut T`.

The resource's bytes are never exposed to C#.
