<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-777"></a>

# Function `pill_development_host::build_runner::is_generated_member_rlib`

```rust
pub(in build_runner) fn is_generated_member_rlib(file_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1926`

Checks whether a `deps` filename is the rlib of a host-generated member
crate.

Their crate names all carry a generated prefix. Nothing links the rlib of a
wrapper or of a generated project member, so the dependency staging skips them
instead of copying files no patch can use.
