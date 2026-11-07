<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3290"></a>

# Function `pill_development_host::native_library::staging_directories_to_evict`

```rust
pub(in native_library) fn staging_directories_to_evict(candidates: &[(u32, std::time::SystemTime)], now: std::time::SystemTime) -> Vec<(usize, &'static str)>;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:1712`

Chooses which of the other processes' staging directories to remove.

Two rules decide it. A directory that has been quiet for at least
[`STAGING_GRACE_PERIOD`](constant.STAGING_GRACE_PERIOD.md#rustdoc-item-3077) belonged to a process that is gone, so it goes.
Whatever is left is capped at [`MAX_RETAINED_STAGING_DIRECTORIES`](constant.MAX_RETAINED_STAGING_DIRECTORIES.md#rustdoc-item-3078), and the
least recently written go first: they are the least likely to belong to a
running host, and the ones whose disk is most worth reclaiming.

Returns each directory's index in `candidates` with the reason to log. The
function is pure and kept apart from the removal so it can be tested without
a filesystem or a second host process.
