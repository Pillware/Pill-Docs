<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4204"></a>

# Function `pill_development_host::runtime::note_managed_swap`

```rust
pub(in runtime) fn note_managed_swap(host: &mut DevHost);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2742`

Everything a replaced managed assembly invalidates, whichever site saw the
swap. The recorded prologue addresses point into the retired image, the
patch classifier's baseline is stale, and the editor needs its toast and a
new revision to drop its caches.

Both sites call this: the build completion, which shortens the loader's
debounce and polls, and the frame-boundary poll that catches a swap whose
wait outlived Step 5.
