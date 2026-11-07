<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3076"></a>

# Function `pill_development_host::native_library::process_is_alive`

```rust
pub(in native_library) fn process_is_alive(pid: u32) -> bool;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:1632`

Whether a process with the given id is still running.

The answer is exact only where an exact one is cheap: Linux checks `/proc`
directly, and every other platform answers "not alive" rather than walking
the process table on a call that happens once at startup.

That is safe because this is not the only check. A negative answer does not
allow a removal; it gives the decision to [`STAGING_GRACE_PERIOD`](constant.STAGING_GRACE_PERIOD.md#rustdoc-item-3077), which
looks at when the directory was last written to instead of at who owns it.
A live host stages on every load, so the clock recognises it on every
platform. This function only lets Linux skip the wait.
