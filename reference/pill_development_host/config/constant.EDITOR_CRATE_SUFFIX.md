<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-842"></a>

# Constant `pill_development_host::config::EDITOR_CRATE_SUFFIX`

```rust
pub(crate) const EDITOR_CRATE_SUFFIX: &str = "_editor";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:153`

Suffix every editor crate's package name carries. The host pairs an
extension's editor part by location (`modules/editor`) and refuses a crate
there whose name lacks the suffix, so the two markers cannot disagree. The
suffix also keeps `modules:` and a shipping bundle from linking an editor
crate by accident.
