<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3429"></a>

# Constant `pill_development_host::reload::PROJECT_RELOAD_COMPLETE`

```rust
pub(in reload) const PROJECT_RELOAD_COMPLETE: &str = "hot reload complete";
```

Visibility: `{'restricted': {'parent': 3428, 'path': '::reload'}}` · Source: `hosting\pill_development_host\src\reload.rs:78`

Final line of a project reload.

This constant and its three neighbours below are read by tests, not prose.
`devops/core/suite_common.py` and the suites in `devops/tests` wait for
these phrases in the host output, and `devops/tests/test_log_contract.py`
fails if either member of a pair stops appearing verbatim in the Rust
source. The project and module texts stay separate for that reason: one
shared message with an inserted noun would print the same text for both
subjects, and no suite could tell them apart.
