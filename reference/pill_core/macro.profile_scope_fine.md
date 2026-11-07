<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2118"></a>

# Macro `pill_core::profile_scope_fine`

```rust
macro_rules! profile_scope_fine {
    ($name:literal) => { ... };
    ($name:literal, [ $( $detail:tt ),* $(,)? ]) => { ... };
    ($fmt:literal $(, $arg:expr)* $(,)?) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:1049`

Creates a fine-grained investigative CPU zone on the `profile::fine` lane.

Only active under `profiling-fine` (which implies `profiling`). Fine zones
perturb the timing they measure and are meant for temporary deep
investigation. They compile away completely when `profiling-fine` is
disabled.

A `profiling-fine` build records nothing here unless the telemetry builder
also turned the fine lane on (`with_fine_profiling`), because the zone asks
that filter first.
