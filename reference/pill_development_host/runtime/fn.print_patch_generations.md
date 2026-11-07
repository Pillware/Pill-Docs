<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4222"></a>

# Function `pill_development_host::runtime::print_patch_generations`

```rust
pub(in runtime) fn print_patch_generations(host: &DevHost);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3860`

Print every generation this session has installed.

Rollback is unusable without it. The request needs a number, and nothing
else in the host ever reports which numbers exist.
