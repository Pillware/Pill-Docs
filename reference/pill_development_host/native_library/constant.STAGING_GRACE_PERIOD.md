<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3077"></a>

# Constant `pill_development_host::native_library::STAGING_GRACE_PERIOD`

```rust
pub(in native_library) const STAGING_GRACE_PERIOD: std::time::Duration = _;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:100`

How long another process's staging directory is left alone after its last
write.

This is the liveness check. A running host stages a fresh copy of every DLL
it loads or reloads, so its directory's modification time keeps moving. One
that has not been written to for this long belonged to a process that is
gone. [`process_is_alive`](fn.process_is_alive.md#rustdoc-item-3076) answers exactly on Linux, where the probe needs
no process-table walk; everywhere else it reports "not alive", and the
clock decides.

The window is generous on purpose. Waiting costs a few megabytes of disk.
Guessing wrong deletes the staging of a host that is still running, and on
Windows that deletion only half-succeeds: it takes the files that are not
mapped and leaves the ones that are.
