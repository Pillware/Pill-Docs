<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-625"></a>

# Constant `pill_development_host::build_runner::TREE_DRAIN_TIMEOUT`

```rust
pub(in build_runner) const TREE_DRAIN_TIMEOUT: std::time::Duration = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:884`

How long a stopped build's process tree gets to disappear.

Termination is asynchronous, and the next build starts against the same
`CARGO_TARGET_DIR` right afterwards. This wait keeps a dying compiler from
holding cargo's package lock through that handover.
