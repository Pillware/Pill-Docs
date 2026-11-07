<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4114"></a>

# Function `pill_development_host::runtime::fail_setup`

```rust
pub(in runtime) fn fail_setup(runtime: pill_player::Runtime, error: pill_core::error::HostError) -> pill_core::error::HostError;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1428`

Report a setup failure, then tear the half-built host down world-first.

Locals drop in reverse declaration order, so the loaded module images would
unmap while the world is still alive. A resource a module inserted keeps its
drop function in that module's image, so the world's teardown would call
into unmapped code. That is an access violation, and it can crash a failed
startup after it has already printed the reason.

Dropping the world first runs those drops while the images are still
mapped; the slots then unmap with nothing pointing into them. The error is
reported before either drop, so it survives whatever the teardown does.
