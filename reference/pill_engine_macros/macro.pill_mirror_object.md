<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-407"></a>

# Procedural macro `pill_engine_macros::pill_mirror_object`

```rust
proc_macro pill_mirror_object
```

Source: `engine\pill_engine_macros\src\lib.rs:1888`

Mirrors a Rust type that C# holds by reference: a class wrapping a box the
managed side owns.

Use it for a type that is not plain data: a mesh, a builder, or a slot
description with a `String` in it.
- A function that returns the type hands C# a new object.
- A function that takes it by value moves it out of the C# object, which is
  unusable afterwards.
- A `&self` or `&mut self` method borrows it.

Disposing the C# object, or letting the garbage collector finalize it, drops
the Rust value, so the type must be `Send`.

Flags:
- `asset` - the type is an `Asset`: C# can add it to the world's
  `AssetManager`, remove it and look it up (`assets.AddNamed(name, mesh)`).
- `import` - the type is also an `ImportedAsset`:
  `assets.Import<Mesh>(path, ...)`.
- `standalone` - the type is also a `StandaloneAsset`, and this flag sets
  `asset` too: `assets.ImportStandalone<Material>(path)`.
