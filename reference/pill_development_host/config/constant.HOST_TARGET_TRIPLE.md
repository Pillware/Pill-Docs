<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-843"></a>

# Constant `pill_development_host::config::HOST_TARGET_TRIPLE`

```rust
pub(in config) const HOST_TARGET_TRIPLE: &str = "";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:177`

Target triple the host was compiled for, recorded by `build.rs`.

Empty when the host was built natively (an ordinary `cargo build` or
`cargo run` without `--target`), which is every host except one launched by
the dioxus CLI (`dx serve`). dx always passes `--target <host-triple>` to
cargo, and cargo folds the target into each crate's metadata hash. A module
built natively against a `--target` host would then get different symbol
names than the engine dylibs the host loaded export, and every module load
would fail with "The specified procedure could not be found" (os error
127). Host-spawned module builds pass the same triple so both sides agree.
