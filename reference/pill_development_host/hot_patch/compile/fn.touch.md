<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1964"></a>

# Function `pill_development_host::hot_patch::compile::touch`

```rust
pub(in hot_patch::compile) fn touch(path: &std::path::Path) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:661`

Updates a file's modification time without changing its contents.

Writing the same bytes again would also make cargo's mtime-based freshness
check see a newer source, but it means writing back bytes read a moment
earlier. A save that completes between the read and the write is then
silently undone, and the next build compiles source the person has already
replaced. Changing only the timestamp leaves the contents to whoever owns
them.
