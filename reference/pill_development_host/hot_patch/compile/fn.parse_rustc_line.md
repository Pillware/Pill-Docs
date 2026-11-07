<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1963"></a>

# Function `pill_development_host::hot_patch::compile::parse_rustc_line`

```rust
pub(crate) fn parse_rustc_line(cargo_output_line: &str, crate_name: &str) -> Option<CargoRustcLine>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:559`

Returns the invocation for `crate_name` from one line of cargo's `-v`
output.

Returns `None` for every line that is not a `Running \`rustc ...\`` naming
that crate, so a caller can pass cargo's whole stderr stream one line at a
time. Any rustc wrapper cargo ran (sccache) is unwrapped, exactly as the
on-demand capture does. The patch replays the compiler directly, and the
wrapper's own CLI would reject rustc's arguments.
