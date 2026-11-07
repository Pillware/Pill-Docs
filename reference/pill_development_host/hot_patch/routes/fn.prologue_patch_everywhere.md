<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2204"></a>

# Function `pill_development_host::hot_patch::routes::prologue_patch_everywhere`

```rust
pub(in hot_patch) fn prologue_patch_everywhere(targets: &[(&str, &crate::native_library::NativeLibrary)], patches: &[LoadedPatch], qualified: &str, replacement: usize, expected_signature: &str) -> Result<Vec<PrologueRestore>, String>;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:681`

Redirects every loaded copy of one function by overwriting its prologue.

This is the macro-free route. Nothing in the running artifact was prepared
for the patch: the host asks each artifact for the function's address
through its build-script inventory, then writes a jump over the function's
first bytes.

The thread contract is the caller's: run this at a frame boundary, on the
thread that runs the frame loop, with no system executing. That is where the
fast path is invoked from.

## Errors

Fails when a reachable copy's declaration is missing or differs from the
edit's, and when writing a prologue fails. Either way nothing is left
patched: the first pass writes nothing, and the second undoes what it wrote.
