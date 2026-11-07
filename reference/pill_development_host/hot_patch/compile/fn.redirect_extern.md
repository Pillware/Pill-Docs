<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1924"></a>

# Function `pill_development_host::hot_patch::compile::redirect_extern`

```rust
pub(in hot_patch::compile) fn redirect_extern(extern_entry: &str, staged_dependencies: &std::path::Path) -> String;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:625`

Points one `--extern name=path` entry at the artifact a patch can use.

First, a metadata-only entry (`.rmeta`) is pointed at the `.rlib` beside it:
a patch is linked, and rustc refuses to link against metadata alone. If the
sibling does not exist, the entry stays as it was.

Second, a shared per-crate slot is pointed at its staged copy, when that copy
exists. Only a `.rlib` whose filename has no `-<16 hex digits>` metadata
suffix counts as shared. Everything else is returned unchanged, including
entries this cannot parse: an entry it cannot read is linked from its
original path, which loses the redirect instead of breaking the command
line.
