<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1909"></a>

# Constant `pill_development_host::hot_patch::compile::CACHE_FORMAT_VERSION`

```rust
pub(in hot_patch::compile) const CACHE_FORMAT_VERSION: &str = "pill-hotpatch-flags-v3";
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:43`

The version of the tokenizer that wrote a cached compiler line.

Increase this whenever [`tokenize`](fn.tokenize.md#rustdoc-item-1908) changes, so a cache written by an
earlier tokenizer is captured again instead of replayed. Nothing else in the
cache key can notice the change: fixing the parser leaves the manifests, the
lockfile and the build command exactly as they were.
