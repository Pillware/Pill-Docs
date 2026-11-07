<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-304"></a>

# Function `pill_standalone::windowed_standalone::close_second_view`

```rust
pub(in windowed_standalone) fn close_second_view(windowed_driver: &mut pill_development_host::RenderingHost, second_view: &mut Option<SecondView>, close_reason: &str);
```

Visibility: `{'restricted': {'parent': 184, 'path': '::windowed_standalone'}}` · Source: `frontends\pill_standalone\src\windowed_standalone.rs:535`

Detach surface 1 and drop its window. The main window keeps drawing.
