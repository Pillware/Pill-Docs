<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-100"></a>

# Function `pill_engine_macros::mirror::lower_parameter`

```rust
pub(crate) fn lower_parameter(ty: &syn::Type, slot: proc_macro2::TokenStream, binding: &syn::Ident, display_name: &str, owner: Option<&Owner>) -> syn::Result<LoweredParameter>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:351`

Lower one parameter read from `slot` into the binding `binding`.

## Errors

Returns an error for a type outside the vocabulary. That covers a
`&mut [T]`, a primitive taken by reference, a slice of references, a `Vec`
or slice whose element is outside the vocabulary, an `impl Trait` that is
neither textual nor an `IntoIterator`, a tuple or array that holds a
non-primitive or does not fit in 16 bytes, an array of `bool`, an array
without a literal length, and a generic type name.

The vocabulary, as tags:

| Rust | Tag |
| --- | --- |
| primitive | its name (`u32`, `bool`, ...) |
| `&str`, `String`, `&String`, `&Path`, `PathBuf`, `impl Into<String>`, `impl Into<PathBuf>`, `impl AsRef<str>`, `impl AsRef<Path>` | `str` |
| `&[T]`, `Vec<T>`, `impl IntoIterator<Item = T>` | `slice:<element>` |
| `Handle<T>`, `&Handle<T>` | `handle:<T>` |
| `AssetLoader`, `&AssetLoader` | `loader` |
| `Option<T>` | `option:<tag of T>` |
| `(A, B, ...)` of primitives | `tuple:A,B,...` |
| `[T; N]` of primitives | `array:T:N` |
| `&Name`, `&mut Name` | `ref:Name`, `mut:Name` |
| `Name` by value | `val:Name` |
