<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2085"></a>

# Function `pill_development_host::hot_patch::imports::is_identifier_character`

```rust
pub(in hot_patch::imports) fn is_identifier_character(character: char) -> bool;
```

Visibility: `{'restricted': {'parent': 2048, 'path': '::hot_patch::imports'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:407`

Whether `character` can be part of an identifier, so a match next to it is
part of a longer name.
