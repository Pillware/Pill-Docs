<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4195"></a>

# Function `pill_development_host::runtime::try_module_fast_path`

```rust
pub(in runtime) fn try_module_fast_path(host: &mut DevHost, may_start: bool);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2404`

Try to deliver every pending extension edit by patching, not rebuilding.

A module's plain functions are compiled into every artifact that links the
crate, so one patch is offered to all of them at once. That is what makes the
cascading project reload a module swap normally queues unnecessary: the
project's embedded copy is redirected too.

Anything patching refuses falls straight through to the full rebuild the
frame loop performs next, so the worst case is that rebuild.

A no-op without the `development` feature, so the frame loop reads the same in
both configurations rather than carrying a `cfg` of its own.
