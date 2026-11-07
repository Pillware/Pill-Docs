<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Function `pill_hot_scan::code_mask`

```rust
pub fn code_mask(source: &str) -> Vec<bool>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:59`

Marks which bytes of `source` are real code.

The result is `false` inside string literals and comments, so a brace in a
string or a `//` inside one can never confuse brace matching. Character
literals are not recognized at all: every byte of one stays code, including
a brace written inside it.
