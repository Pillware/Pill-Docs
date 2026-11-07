<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2084"></a>

# Function `pill_development_host::hot_patch::imports::names_identifier`

```rust
pub(in hot_patch::imports) fn names_identifier(body: &str, name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 2048, 'path': '::hot_patch::imports'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:377`

Whether `body` names `name` as a whole identifier of its code.

Comments and string literals are not code, so a name written only in one is
not a use. The shell mentions its own `tests` module in a comment, and
reading that as a use made the patch import a module that is declared in
test builds only, which does not compile.
