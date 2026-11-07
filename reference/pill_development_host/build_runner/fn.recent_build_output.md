<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-557"></a>

# Function `pill_development_host::build_runner::recent_build_output`

```rust
pub(crate) fn recent_build_output() -> String;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:87`

Returns everything in the ring buffer, oldest line first: what the last
build printed.

A failed build's notice carries this text, and the editor turns it into the
rows of the Problems panel.
