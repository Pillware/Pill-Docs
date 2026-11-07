<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3427"></a>

# Constant `pill_development_host::reload::MAX_DEFERRED_EVICTIONS`

```rust
pub(in reload) const MAX_DEFERRED_EVICTIONS: u32 = 3;
```

Visibility: `{'restricted': {'parent': 3428, 'path': '::reload'}}` · Source: `hosting\pill_development_host\src\reload.rs:67`

Number of deferred evictions in a row allowed before the warning becomes an
error.

Waiting is correct while a column still points into a retired image. But if
the wait never ends, every reload leaks one loaded image and only a warning
says so. Raising the level shows a real stuck state while there is still
time to fix it, and keeps a single ordinary deferral quiet.
