<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-470"></a>

# Function `pill_development_host::analytics::linked_libraries`

```rust
pub(in analytics) fn linked_libraries(import_dlls: &[String]) -> (Vec<String>, usize);
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:1550`

Split a module's imports into the names worth showing and a count of the
rest.

The names kept are the `pill_*` dylibs and Rust's `std`, with the `.dll`
suffix and the `std` hash removed. The rest are Windows system and runtime
libraries, which are only counted.
