<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-556"></a>

# Function `pill_development_host::build_runner::push_build_output`

```rust
pub(in build_runner) fn push_build_output(line: &str);
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:72`

Adds one stderr line to the ring buffer, dropping the oldest line once the
cap is reached.
