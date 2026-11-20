<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-644"></a>

# Function `pill_engine::declarations::first_repeated_name`

```rust
pub(in declarations) fn first_repeated_name<impl IntoIterator<Item = &'static str>: IntoIterator<Item = _>>(kind: &'static str, names: impl IntoIterator<Item = _>) -> Option<DuplicateDeclaredName>;
```

Visibility: `{'restricted': {'parent': 449, 'path': '::declarations'}}` · Source: `engine\pill_engine\src\declarations.rs:506`

Returns the first name in `names` that one kind of declaration carries
twice.
