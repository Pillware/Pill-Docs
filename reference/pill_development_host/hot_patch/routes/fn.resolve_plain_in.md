<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2197"></a>

# Function `pill_development_host::hot_patch::routes::resolve_plain_in`

```rust
pub(in hot_patch) fn resolve_plain_in(library: &libloading::Library, lookup_name: &str) -> Result<(usize, String), String>;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:386`

Asks a loaded patch where its replacement for a plain function lives.

Returns the address to jump to and the signature text the patch compiled it
with, which every receiving artifact checks against its own before accepting
the replacement.

## Errors

Fails when the patch exports no plain-function resolver, when `lookup_name`
contains an interior NUL byte, when the patch defines no such function or
reports no signature for it, and when that signature is not UTF-8.
