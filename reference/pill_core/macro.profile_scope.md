<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2117"></a>

# Macro `pill_core::profile_scope`

```rust
macro_rules! profile_scope {
    (color = $color:expr, $fmt:literal $(, $fmt_arg:expr)* ; [ $( $detail:tt ),* $(,)? ]) => { ... };
    (color = $color:expr, $fmt:literal $(, $arg:expr)* $(,)?) => { ... };
    ($name:literal) => { ... };
    ($name:literal, [ $( $detail:tt ),* $(,)? ]) => { ... };
    ($fmt:literal $(, $fmt_arg:expr)* ; [ $( $detail:tt ),* $(,)? ]) => { ... };
    ($fmt:literal $(, $arg:expr)* $(,)?) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:942`

Creates a scoped CPU profiling zone on the `profile::coarse` lane.

Active under both `profiling` and `profiling-minimal`. Zone details (the
`[...]` form) are recorded only under `profiling`.

The zone opens through the Tracy client directly, on the lane the telemetry
builder enables for `profile::coarse`. A dynamic name is formatted only when
the profiler is connected and wants the zone.

```ignore
let _zone = profile_scope!("movement");                        // static name
let _zone = profile_scope!("movement", [("entities: {}", n)]); // with details
let _zone = profile_scope!("system: {}", name);                // dynamic name
let _zone = profile_scope!(color = 0x2F6FDF, "system: {}", name; [("tick: {}", t)]);
```

The `color = ...` form draws the zone in that color (`0xRRGGBB`) instead of
the viewer's default, which colors zones by thread. `DEFAULT_ZONE_COLOR`
keeps the viewer's choice. The color form always takes a dynamic name, so
the name is still formatted only when the zone is recorded.
