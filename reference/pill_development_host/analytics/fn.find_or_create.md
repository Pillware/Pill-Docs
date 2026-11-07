<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-422"></a>

# Function `pill_development_host::analytics::find_or_create`

```rust
pub(in analytics) fn find_or_create(collector: &mut Analytics, name: &str, kind: ModuleKind) -> usize;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:892`

Find a module's entry by name, creating it on first use.

A caller that only knows a load or phase timing passes `Extension`. A build
later corrects the kind through [`record_module_artifact`](fn.record_module_artifact.md#rustdoc-item-421), which always
runs before any load, init or migrate record for that module.
