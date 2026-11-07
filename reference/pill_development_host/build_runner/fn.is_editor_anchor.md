<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-585"></a>

# Function `pill_development_host::build_runner::is_editor_anchor`

```rust
pub(in build_runner) fn is_editor_anchor(package_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:574`

Checks whether an executable's package is an editor anchor: the Dioxus
frontend (`editor`) or the egui editor (`pill_editor`).

Their dependency graphs carry the renderer and UI unions a reload build must
reproduce; a plain game host needs only the explicit engine features.
