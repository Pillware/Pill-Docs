<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4194"></a>

# Function `pill_development_host::runtime::fast_patching_allowed`

```rust
pub(in runtime) fn fast_patching_allowed(host: &mut DevHost) -> bool;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2377`

Whether the patch fast path may run for this edit.

`PILL_FUNCTION_HOT_PATCHING=0` turns it off for the whole run: every watched
edit is left to the rebuild-and-reload path, which is what makes a
breakpoint in a system body keep binding. The answer is the same on every
frame, so it is said once, when the first edit asks.
