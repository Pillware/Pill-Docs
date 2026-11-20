<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-32"></a>

# Function `pill_test_editor::register`

```rust
pub fn register(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_test\modules\editor\src\pill_test_editor.rs:304`

Queues one request per event the editor API has.

This is the half a reload repeats: the executable drains the queue and
re-binds every callback to the arriving image's liveness marker, so the
registry never holds two of any event for one source.

## Errors

Returns 1 when the world has no request queue, which only happens when the
editor never created its command resources. The host reads any non-zero
status as a failed generation.
