<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4113"></a>

# Function `pill_development_host::runtime::report_setup_failure`

```rust
pub(in runtime) fn report_setup_failure(error: pill_core::error::HostError) -> pill_core::error::HostError;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1406`

Report a setup failure and hand the error back to the caller.

The host state built so far unwinds as soon as the error is returned, and
what it owns is loaded module images. Dropping one unmaps code the engine
may still be running, and a fault in that unmap would destroy the only copy
of this error. Reporting first is what keeps the failure legible when the
unload then crashes.
