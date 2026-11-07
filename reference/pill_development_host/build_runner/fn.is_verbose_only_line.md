<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-623"></a>

# Function `pill_development_host::build_runner::is_verbose_only_line`

```rust
pub(in build_runner) fn is_verbose_only_line(line: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:839`

Checks whether a line exists only because the build was asked for `-v`.

Such lines are filtered out of the console and out of the ring buffer, so
the reload output reads as it does without the capture.

Cargo colours its status words, so ANSI escape sequences sit around the
label whenever the host's stderr is a terminal. Matching the raw prefix
would silently stop filtering in exactly the case a person is watching, and
dump every multi-kilobyte `rustc` command line into the console.
