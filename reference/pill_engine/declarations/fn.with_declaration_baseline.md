<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-404"></a>

# Function `pill_engine::declarations::with_declaration_baseline`

```rust
pub fn with_declaration_baseline<R, impl FnOnce() -> R: FnOnce() -> R>(baseline: DeclarationBaseline, register: impl FnOnce() -> R) -> R;
```

Source: `engine\pill_engine\src\declarations.rs:96`

Runs `register` with `baseline` as the number of declarations the process
already held.

The host wraps one artifact entry point in this call with the baseline it
took before mapping that artifact's image, so the walk keeps only the
declarations that image added. Everything else - a static build's entry
point, a test, a module the host links - runs without one and registers
every declaration the process holds.
