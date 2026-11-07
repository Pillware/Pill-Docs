<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3078"></a>

# Constant `pill_development_host::native_library::MAX_RETAINED_STAGING_DIRECTORIES`

```rust
pub(in native_library) const MAX_RETAINED_STAGING_DIRECTORIES: usize = 8;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:110`

Maximum number of other processes' staging directories kept.

This is the backstop for the grace period above. Without it, a developer who
starts many hosts in one hour keeps one directory per host until the hour is
up. The oldest directories are removed first. That order is also what makes
the limit safe to apply inside the grace period: a live host's directory is
the most recently written of them all, so it is the last one this limit
would reach.
