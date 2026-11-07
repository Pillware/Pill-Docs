<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3714"></a>

# Function `pill_development_host::switches::switch_value`

```rust
pub(crate) fn switch_value(variable: &str) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\switches.rs:99`

One switch's answer, read from the environment.

Absent means on, which is what makes every switch default to the behaviour
the host had before the variables existed.
