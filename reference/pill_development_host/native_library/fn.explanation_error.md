<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3167"></a>

# Function `pill_development_host::native_library::explanation_error`

```rust
pub(in native_library) fn explanation_error(module_name: &str, explanation: LoadFailureExplanation) -> Option<pill_core::error::LibraryError>;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:264`

The error one explanation becomes, or `None` to keep the loader's own.
