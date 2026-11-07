<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4221"></a>

# Function `pill_development_host::runtime::process_patch_faults`

```rust
pub(in runtime) fn process_patch_faults(host: &mut DevHost);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3818`

Roll back a function whose patched body kept panicking.

The engine's dispatch slot counts how often a patched function panics in a
row and queues one report when the count crosses its threshold. The
rollback happens here, at the frame boundary, where no system is running -
the same requirement a requested rollback has, since the prologue route
rewrites live code.

Rolling back to the previous generation keeps the last working code. A
function that was patched only once rolls back to generation zero, which is
the code the running artifact was built with. Nothing retries the rejected
patch: the edit counted as handled when the patch was applied, so the
function stays on the working generation until the next source edit.
