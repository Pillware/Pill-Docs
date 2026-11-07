<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Function `pill_test::register`

```rust
pub fn register(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_test\pill_test\src\pill_test.rs:110`

Fills the world up to the module's entity count.

This is the half a reload repeats: the resources and entities whose code
moved with the arriving image. It must be idempotent, because a first load
reaches it too, immediately before [`init`](fn.init.md#rustdoc-item-121), and a failed generation rolls
back by calling it again on the older image.

The system needs no registration of its own: [`module_test_processor`](fn.module_test_processor.md#rustdoc-item-2)
declares itself, so the engine registers it before this function runs.

## Errors

Returns 1 when an entity cannot be created. The host reads any non-zero
status as a failed generation and rolls back to the previous library.
