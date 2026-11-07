<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2203"></a>

# Function `pill_development_host::hot_patch::routes::check_recorded_declaration`

```rust
pub(in hot_patch::routes) fn check_recorded_declaration(label: &str, qualified: &str, recorded_declaration: Option<&str>, expected_declaration: &str) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:642`

The check one reachable copy must pass before its prologue is overwritten.

A pure function, so the policy can be pinned by tests without a patch image:
a copy that cannot report a declaration is refused, not exempted, and a copy
whose declaration differs from the edit's is refused with both shapes named.

## Errors

Returns the refusal naming the copy, the function and, for a mismatch, both
declarations.
