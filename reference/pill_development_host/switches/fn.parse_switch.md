<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3715"></a>

# Function `pill_development_host::switches::parse_switch`

```rust
pub(crate) fn parse_switch(value: Option<&str>) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\switches.rs:108`

The rule behind every switch: absent, empty or any unrecognized text means
on; `0`, `false`, `no` and `off` mean off, in any case.

A value nobody recognizes stays on deliberately. Off is the answer that
stops something from happening, so it is the one that has to be asked for.
