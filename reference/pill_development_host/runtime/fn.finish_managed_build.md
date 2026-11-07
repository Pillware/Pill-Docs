<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4203"></a>

# Function `pill_development_host::runtime::finish_managed_build`

```rust
pub(in runtime) fn finish_managed_build(host: &mut DevHost, report: crate::csharp::BuildReport);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2659`

Finish a managed reload whose assembly build reported.

Reports the compile, shortens the loader's debounce (its wait for the
assembly to stop changing), polls for the swap, and runs the bookkeeping a
replaced image invalidates. A failed compile keeps the running assembly,
abandons the armed timing, and still refreshes the editor revision.
