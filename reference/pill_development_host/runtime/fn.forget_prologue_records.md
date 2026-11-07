<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4128"></a>

# Function `pill_development_host::runtime::forget_prologue_records`

```rust
pub(in runtime) fn forget_prologue_records(host: &mut DevHost);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2159`

Forget the patch records a replaced image invalidated: the saved prologue
bytes and every active generation.

A prologue patch overwrote bytes inside a loaded artifact. Once that
artifact is replaced, the recorded addresses point into an image the
graveyard will unmap. Writing saved bytes back to one is then a write into
freed, possibly reused memory, not a rollback.

Every session is cleared, not only the one whose artifact reloaded. Patches
fan out across every loaded artifact, so a module's records include
addresses inside the project image and cannot be cleared one at a time. A
partial restore would leave two copies of one function disagreeing.

The active generation of every function goes too. The rebuilt artifact
ships its own body, and an entry left behind would name a generation that
is not running. Calling it twice is safe.
