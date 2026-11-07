<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-811"></a>

# Function `pill_development_host::build_runner::with_batch_validation`

```rust
pub(in build_runner) fn with_batch_validation<T, impl FnOnce(&mut Option<BatchValidation>) -> T: FnOnce(&mut Option<BatchValidation>) -> T>(callback: impl FnOnce(&mut Option<BatchValidation>) -> T) -> T;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1975`

Runs `callback` with exclusive access to the batch validation state.
