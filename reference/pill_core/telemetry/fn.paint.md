<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2026"></a>

# Function `pill_core::telemetry::paint`

```rust
pub(in telemetry) fn paint<impl FnOnce(&str) -> colored::ColoredString: FnOnce(&str) -> colored::ColoredString>(accepts_ansi: bool, text: &str, style: impl FnOnce(&str) -> colored::ColoredString) -> String;
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:1096`

Applies `style` to `text` when the writer accepts ANSI escapes, and returns
the text unchanged otherwise.
