<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4108"></a>

# Function `pill_development_host::runtime::assert_unique_owners`

```rust
pub(in runtime) fn assert_unique_owners(subjects: &[(&str, pill_engine::SystemOwner)]);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1280`

Debug assertion: every entry of `subjects` names a distinct owner.

The subjects are the things a reload, a pause or a stale-suspension resume
can retire or reach: the extensions, the pending modules, the renderer and
the project. One owner shared by two of them means one of them can clear or
resume the other's systems.
