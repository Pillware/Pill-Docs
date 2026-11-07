<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4202"></a>

# Function `pill_development_host::runtime::advance_managed_build`

```rust
pub(in runtime) fn advance_managed_build(host: &mut DevHost);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2632`

Collect a finished C# assembly build and complete its reload at this frame
boundary.

The build ran on its own thread with the frame free. Everything that
touches the boundary happens here: telling the managed loader the compiled
assembly is complete, polling it for the swap, and the bookkeeping a
replaced image invalidates. A worker that stopped without a report falls
back to building on the frame thread.
