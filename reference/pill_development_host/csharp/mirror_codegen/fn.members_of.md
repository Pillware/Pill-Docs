<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1657"></a>

# Function `pill_development_host::csharp::mirror_codegen::members_of`

```rust
pub(in csharp) fn members_of<'a>(methods: &'a [pill_csharp_bridge::ResolvedMirrorMethod], type_name: &'a str) -> impl Iterator<Item = _>;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:883`

The functions mirrored onto one owner, skipping the `__`-named rows: the
`__type` type row and the runtime's own `__asset_*` operations.
