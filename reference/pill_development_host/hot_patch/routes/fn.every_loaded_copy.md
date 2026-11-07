<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2097"></a>

# Function `pill_development_host::hot_patch::routes::every_loaded_copy`

```rust
pub(in hot_patch::routes) fn every_loaded_copy<'a>(targets: &'a [(&'a str, &'a crate::native_library::NativeLibrary)], patches: &'a [LoadedPatch]) -> impl Iterator<Item = _> + 'a;
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:442`

Returns every image that could carry a copy of a function, each with a label
for diagnostics.

Artifacts come first, then patches. A route that visited only one kind would
leave the other running the body it was compiled with, so the two kinds are
deliberately kept in one iterator.
