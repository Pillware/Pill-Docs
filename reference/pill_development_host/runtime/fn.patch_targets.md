<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4223"></a>

# Function `pill_development_host::runtime::patch_targets`

```rust
pub(in runtime) fn patch_targets<'a>(loaded_project: &'a loaded::LoadedProject, extensions: &'a [slot::ExtensionSlot]) -> Vec<(&'a str, &'a crate::native_library::NativeLibrary)>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3905`

Every loaded artifact a plain-function patch must be offered to.

One entry per currently loaded library: the project and each extension. A
crate linked into several of them is compiled into each, so each holds an
independent redirect slot for the same function. All of them have to be
told about the replacement.

Retired generations are deliberately left out. They stay mapped only so
outstanding pointers into their code remain valid, and their systems have
already been cleared, so nothing calls their copy of the function.
