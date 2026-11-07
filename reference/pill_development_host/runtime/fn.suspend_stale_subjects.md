<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4207"></a>

# Function `pill_development_host::runtime::suspend_stale_subjects`

```rust
pub(in runtime) fn suspend_stale_subjects(host: &mut DevHost);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3185`

Suspend the systems of every subject built against a shared component
layout a reload has since replaced, and resume the ones rebuilt since.

A stale subject's queries are already refused by the declared schema check.
Its systems can still reach the type in other ways, such as spawning a
value, which would write rows in the old layout. Suspending the owner stops
all of it until the subject is rebuilt against the layout now registered.
