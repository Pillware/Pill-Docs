<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4483"></a>

# Function `pill_development_host::runtime::print_welcome`

```rust
pub(in runtime) fn print_welcome(project_name: &str, project_directory: Option<&std::path::Path>, project_module_config: &crate::ProjectModuleConfig);
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:4231`

Announce the project this start runs, before any build output starts
streaming.

The display name alone can repeat between projects, so the line also
carries the directory the configuration resolved it from. A configuration
built from a module alone has no directory, and the line then omits that
field rather than printing an empty one.
