<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-582"></a>

# Constant `pill_development_host::build_runner::MEMBER_SEARCH_DEPTH`

```rust
pub(in build_runner) const MEMBER_SEARCH_DEPTH: usize = 5;
```

Visibility: `{'restricted': {'parent': 546, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:442`

How many directory levels below the workspace root a member manifest can
sit. Five is the depth of
`extensions/pill_master_renderer/modules/runtime/data`, the deepest member
layout this search has to reach.
