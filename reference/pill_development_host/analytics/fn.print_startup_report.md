<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-437"></a>

# Function `pill_development_host::analytics::print_startup_report`

```rust
pub(crate) fn print_startup_report();
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:1241`

Print the full startup analytics report.

Called once after every module (extension + project) has been built, staged,
loaded and initialized. See [`render_startup_report`](fn.render_startup_report.md#rustdoc-item-436) for the layout.
