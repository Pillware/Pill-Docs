<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Constant `pill_assets::rules::hlsl_to_wgsl::SLANGC_TIMEOUT`

```rust
pub(in rules::hlsl_to_wgsl) const SLANGC_TIMEOUT: std::time::Duration = _;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::rules::hlsl_to_wgsl'}}` · Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:42`

How long one `slangc` run may take before the cook kills it.

A crate cooks its shader tree from its build script, so a compiler that
never exits would stall the whole build, not just one file.
