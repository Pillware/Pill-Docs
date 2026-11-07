<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4166"></a>

# Function `pill_development_host::runtime::advance_patch_attempt`

```rust
pub(in runtime) fn advance_patch_attempt(host: &mut DevHost) -> (bool, Option<pill_core::platform::Instant>);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2283`

Collect a finished patch build and install it at this frame boundary.

Activation happens here rather than on the worker, because a dispatch slot
write belongs to the thread that owns the frame boundary. The worker only
compiled and mapped the image. While the build runs, nothing marks the edit
handled, so the frame loop still owes it a reload.

Returns `true` when this frame must not start another attempt. A build that
came back without installing its patch leaves the edit for the reload path
below, and without that a patch that cannot compile is retried forever. A
collected success returns `false`, because a save that arrived while the
build ran is a fresh edit the fast path may handle immediately.

The second element is the attempt's own start, so this frame's analytics
total can span the build. It is `None` when nothing was collected.
