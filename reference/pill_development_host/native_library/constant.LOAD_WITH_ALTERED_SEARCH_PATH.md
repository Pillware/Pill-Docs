<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3080"></a>

# Constant `pill_development_host::native_library::LOAD_WITH_ALTERED_SEARCH_PATH`

```rust
pub(in native_library) const LOAD_WITH_ALTERED_SEARCH_PATH: u32 = 0x0000_0008;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:121`

`LOAD_WITH_ALTERED_SEARCH_PATH`: make a module's dependency resolution start
from the directory that contains the module, so it loads the engine dylibs
staged beside it rather than the host's copies from the executable
directory.
