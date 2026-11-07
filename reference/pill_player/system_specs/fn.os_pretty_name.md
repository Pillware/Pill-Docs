<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-743"></a>

# Function `pill_player::system_specs::os_pretty_name`

```rust
pub(in system_specs) fn os_pretty_name() -> String;
```

Visibility: `{'restricted': {'parent': 737, 'path': '::system_specs'}}` · Source: `hosting\pill_player\src\system_specs.rs:185`

Returns the OS name and version with the build architecture.

A platform that reports no name gives `unknown`; one that reports no
version just leaves it out.
