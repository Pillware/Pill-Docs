<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1346"></a>

# Constant `pill_development_host::csharp::fast_compile::MAX_DIAGNOSTICS_BYTES`

```rust
pub(in csharp::fast_compile) const MAX_DIAGNOSTICS_BYTES: u32 = _;
```

Visibility: `{'restricted': {'parent': 1342, 'path': '::csharp::fast_compile'}}` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:72`

Upper bound for one compile's diagnostics text.

A failing build reports a few kilobytes, so no real diagnostic set reaches
this cap. The cap limits how much memory a corrupt length can make the host
reserve: the helper that fetches the text rejects a length above it before
allocating anything.
