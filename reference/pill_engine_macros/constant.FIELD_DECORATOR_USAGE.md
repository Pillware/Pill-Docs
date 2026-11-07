<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-284"></a>

# Constant `pill_engine_macros::FIELD_DECORATOR_USAGE`

```rust
pub(crate) const FIELD_DECORATOR_USAGE: &[(&str, &str)] = _;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:552`

Every field decorator a field may declare, with the usage text a refusal
shows.

The parser and both refusal messages read this one list, so they cannot
drift apart. A listed decorator the parser does not accept fails the test at
the bottom of the file, and so does one the refusal text stops naming. A
decorator with two forms (with or without parentheses) appears once per
form.
