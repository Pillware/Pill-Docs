<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2"></a>

# Function `pill_test::module_test_processor`

```rust
pub(crate) fn module_test_processor(query: Query<'_, &mut ModuleTest>) -> Result<(), SystemError>;
```

Visibility: `crate` · Source: `extensions\pill_test\pill_test\src\pill_test.rs:84`

Advances every `ModuleTest` component by one frame.

Registered under the name `module_test_processor`. The scheduler derives
the system's access pattern from the query signature, so it places the
system among the project's systems automatically.
