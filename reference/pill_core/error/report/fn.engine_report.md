<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-761"></a>

# Function `pill_core::error::report::engine_report`

```rust
pub fn engine_report<E>(error: E) -> miette::Report where E: EngineMessage + miette::Diagnostic + Send + Sync + 'static;
```

Source: `engine\pill_core\src\error\report.rs:174`

Turns one engine error into a miette report whose message is printed with
terminal styling.

The message is the one the error defines, rendered for a terminal. miette
still carries the error's code, help, labels and source.
