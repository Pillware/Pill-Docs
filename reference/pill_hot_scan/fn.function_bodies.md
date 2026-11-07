<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-203"></a>

# Function `pill_hot_scan::function_bodies`

```rust
pub fn function_bodies(source: &str, function_names: &std::collections::HashSet<String>) -> std::collections::HashMap<String, String>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:947`

The body text of each named function that this source declares.

Classification compares one revision's bodies against another's to decide
which function actually changed, and answers every name in one pass rather
than scanning the file once per name.

A name the source does not declare is simply absent from the map, which is
the same answer [`find_function`](fn.find_function.md#rustdoc-item-76) gives by returning `None`. Like
[`find_function`](fn.find_function.md#rustdoc-item-76), the FIRST declaration of a name wins, so a nested
function shadows a later top-level one.
