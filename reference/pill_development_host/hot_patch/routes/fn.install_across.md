<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2200"></a>

# Function `pill_development_host::hot_patch::routes::install_across`

```rust
pub(in hot_patch::routes) fn install_across<C: RedirectSlot>(copies: &[(String, C)], qualified: &str, address: usize, signature: &str, previous: Option<(usize, &str)>) -> Result<usize, String>;
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:521`

Offers one replacement to every copy in `copies`, and reports how many took
it.

## Errors

Fails at the first refusal, after putting the copies already redirected back
on what they were running. If that repair fails too, its error is appended
to the refusal instead of hiding it.
