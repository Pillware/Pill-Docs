<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5242"></a>

# Function `pill_engine_core::hot_patch::verify_abi`

```rust
pub fn verify_abi() -> bool;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:1016`

Verifies that a `&mut ZST` parameter can be received as `&mut ()`.

This is the one platform assumption the dispatch slot rests on. Both are
references to zero-sized types, so both are a single non-null pointer-sized
argument, and every ABI the engine targets passes them identically - but
that is an observation, not a guarantee Rust makes.

Returns `true` when the arguments arrive intact. A host can call it once at
startup, in debug builds, where a broken assumption must fail straight away
instead of waiting for the first patch: a silent argument shift becomes an
initialization failure.
