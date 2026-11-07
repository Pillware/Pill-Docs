<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-62"></a>

# Function `pill_engine_macros::mirror::generic_argument`

```rust
pub(in mirror) fn generic_argument(segment: &syn::PathSegment, index: usize) -> Option<&syn::Type>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:81`

The `index`-th generic type argument of a path segment.
