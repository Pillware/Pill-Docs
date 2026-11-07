<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1966"></a>

# Function `pill_development_host::hot_patch::compile::compiler_token_index`

```rust
pub(in hot_patch::compile) fn compiler_token_index(tokens: &[String]) -> usize;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:761`

Returns the index of the actual `rustc` binary in a captured invocation.

Returns 0 when none of the tokens names a rustc binary, which keeps a plain
invocation - whose first token is the compiler - unchanged.

Cargo can run rustc through a wrapper (a `RUSTC_WRAPPER` such as sccache),
which makes a captured line read `sccache C:\...\rustc.exe --crate-name
...`. The patch replays the captured program directly with rustc arguments,
and the wrapper's own CLI rejects those, so the wrapper token is dropped and
the first token that names a rustc binary becomes the program.
