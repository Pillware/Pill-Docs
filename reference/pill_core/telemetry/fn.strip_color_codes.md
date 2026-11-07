<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2019"></a>

# Function `pill_core::telemetry::strip_color_codes`

```rust
pub fn strip_color_codes(text: &str) -> String;
```

Source: `engine\pill_core\src\telemetry.rs:1036`

`text` without its ANSI escape sequences (`ESC [ ... letter`). A layer that
does not show colors therefore receives plain text.

## Examples

```
use pill_core::telemetry::strip_color_codes;

assert_eq!(strip_color_codes("\u{1b}[36mpill_spline\u{1b}[0m"), "pill_spline");
```
