<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1717"></a>

# Function `pill_core::telemetry::log_block_colored`

```rust
pub fn log_block_colored<H, I, L>(heading: H, lines: I) -> String where H: fmt::Display, I: IntoIterator<Item = _>, L: fmt::Display;
```

Source: `engine\pill_core\src\telemetry.rs:1014`

Join a heading and its lines into one multi-line log message, where any
part may carry color.

This works like [`log_block`](fn.log_block.md#rustdoc-item-2017) for parts that style themselves: plain
strings, or text styled with [`Colorize`] (re-exported here) or
[`PillStyle`](../style/trait.PillStyle.md#rustdoc-item-694). The formatter strips the colors from the
file log and from piped output.

## Examples

```
use pill_core::telemetry::{log_block_colored, Colorize};

let block = log_block_colored(
    "Modules to build:".bold(),
    [
        format!("1. {}  extension", "pill_spline".cyan()),
        format!("2. {}  project", "project".cyan()),
    ],
);
assert!(block.starts_with(&"Modules to build:".bold().to_string()));
```
