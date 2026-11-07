<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2"></a>

# Constant `pill_development_host::analytics::MAX_FALLBACK_DETAIL_CHARS`

```rust
pub(in analytics) const MAX_FALLBACK_DETAIL_CHARS: usize = 160;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:55`

How much of one explanation is kept. Compiler errors can run long, and this
line sits inside a reload report that has to stay readable.
