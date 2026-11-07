<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-581"></a>

# Constant `pill_development_host::build_runner::MEMBER_SEARCH_DEPTH`

```rust
pub(in build_runner) const MEMBER_SEARCH_DEPTH: usize = 3;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:441`

How many directory levels below the workspace root a member manifest can
sit. Three is the depth of `extensions/<extension>/<crate>`, the deepest
member layout this search has to reach.
