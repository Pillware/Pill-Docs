<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# Function `pill_csharp_bridge::abi::end_unfinished_zones`

```rust
pub(crate) fn end_unfinished_zones();
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:489`

Closes every zone this invocation opened and never ended.

The managed side owns a zone's lifetime through `Profiler.Zone`, but a
system that forgets to dispose of one, or throws between begin and end, must
not leave the guard open. A Tracy zone that outlives the invocation would be
recorded against the wrong part of the frame, and the vector that holds it
would grow by one entry per frame. The invocation guard calls this while it
tears down, at the point where one system's work ends and the next begins.
