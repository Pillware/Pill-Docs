<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1248"></a>

# Function `pill_development_host::config::host_profile_name`

```rust
pub(crate) fn host_profile_name() -> &'static str;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1322`

Cargo profile *name* matching [`HOST_PROFILE_DIRECTORY`](constant.HOST_PROFILE_DIRECTORY.md#rustdoc-item-842).

Cargo names the default profile `dev` but writes it into `target/debug`;
every other profile's directory is its own name. This is the only place
the two vocabularies are reconciled.

Module builds must use the host's profile. A host and a module compiled
with different profiles resolve different crate-metadata hashes, so the
module's exports do not match what the host looks up, and `LoadLibrary`
fails with "The specified procedure could not be found" without naming
anything useful.
