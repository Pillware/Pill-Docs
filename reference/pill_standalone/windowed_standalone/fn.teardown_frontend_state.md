<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-305"></a>

# Function `pill_standalone::windowed_standalone::teardown_frontend_state`

```rust
pub(in windowed_standalone) fn teardown_frontend_state<T>(frontend_state: T);
```

Visibility: `{'restricted': {'parent': 184, 'path': '::windowed_standalone'}}` · Source: `frontends\pill_standalone\src\windowed_standalone.rs:560`

Drop the frontend's state and log a line before and after it.

The drop unmaps every module copy (in development) and drops the engine.
This is the one step where the process can die without saying anything
itself: a call into an already-unmapped image crashes natively. The two log
lines bracket that step, so a crash inside the drop shows the first line
and never the second.
