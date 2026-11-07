<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-89"></a>

# Function `pill_engine_macros::mirror::value_tag`

```rust
pub(in mirror) fn value_tag(ty: &syn::Type, owner: Option<&Owner>) -> syn::Result<String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:172`

The tag of a named type taken by value.

`Handle<T>` and `AssetLoader` have tags of their own. Any other type is
tagged `val:<name>` and read through `MirrorValue`, which the attribute that
mirrored the type implemented.

## Errors

Returns an error for a `Handle` with no asset type, for a generic type, and
for a type outside the vocabulary - including the standard containers
(`String`, `Vec`, `Option`, `Result`, `Box`, `Arc`, `Rc`, `HashMap` and
`BTreeMap`), which are refused by name.
