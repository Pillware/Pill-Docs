<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-697"></a>

# Function `pill_csharp_bridge::backend::run_phase_from_export`

```rust
pub(crate) fn run_phase_from_export(phase: u8) -> Option<pill_engine::RunPhase>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1518`

Maps a managed system's exported phase number to the engine's phase.

The managed side sends the enum's value: `0` pre-project, `1` project and
`2` post-project. `None` is an unknown value, which the caller refuses by
number rather than guessing, because running a system in a phase its
declaration never named is a schedule nobody asked for.
