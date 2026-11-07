<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7218"></a>

# Function `pill_editor_core::scripted::unquote`

```rust
pub(in scripted) fn unquote(text: &str) -> String;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1636`

One surrounding pair of double quotes removed, with a backslash escaping
the character after it.
