<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2332"></a>

# Function `pill_development_host::hot_patch::worker::build_attempt`

```rust
pub(crate) fn build_attempt(attempt: PatchAttempt) -> (PatchAttempt, Vec<BodyOutcome>);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\worker.rs:123`

Compiles and loads the bodies of one attempt, in order.

Usually runs on the patch build thread; when that thread cannot start, the
caller runs it inline instead. It stops at the first failure: the bodies
before it are still installable, and the snapshot is not advanced unless
every body installs.
