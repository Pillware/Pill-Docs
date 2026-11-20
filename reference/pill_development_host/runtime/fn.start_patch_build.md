<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4449"></a>

# Function `pill_development_host::runtime::start_patch_build`

```rust
pub(in runtime) fn start_patch_build(attempt: worker::PatchAttempt, subject: PatchSubject, pending_generation: u64) -> InFlightPatch;
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2322`

Start a patch build on its own thread.

The attempt travels through its own channel rather than the closure's
capture. A thread that cannot start therefore leaves it here to build
inline, instead of losing it with the closure.
