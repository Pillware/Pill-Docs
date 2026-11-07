<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-431"></a>

# Function `pill_development_host::analytics::remember_fallback`

```rust
pub(in analytics) fn remember_fallback(collector: &mut Analytics, function: Option<&str>, outcome: &'static str, code: &str, detail: &str);
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:1124`

Add one fallback reason to the tally, counting a repeat instead of adding a
second entry.

The match uses the function, the outcome and the code, not the detail text,
so a compiler message whose column number moves between saves is not a new
cause.
