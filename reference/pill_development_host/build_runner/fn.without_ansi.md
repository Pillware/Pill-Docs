<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-624"></a>

# Function `pill_development_host::build_runner::without_ansi`

```rust
pub(in build_runner) fn without_ansi(line: &str) -> String;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:852`

Returns the line with every ANSI escape sequence removed.

Cargo colours the status word alone, so escapes sit both before and
immediately after the word being matched. Dropping only the leading ones
still leaves `Running<ESC>[0m `, which matches nothing.
