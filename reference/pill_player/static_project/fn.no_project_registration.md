<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-739"></a>

# Function `pill_player::static_project::no_project_registration`

```rust
pub fn no_project_registration(_engine: &mut pill_engine::Engine) -> u32;
```

Source: `hosting\pill_player\src\static_project.rs:410`

A project registration half that does nothing.

A generated shipping bundle points a project without a `register` half at
this, so the static backend's shape stays the same for every project. A
project that seeds everything from its `init` needs nothing else.
