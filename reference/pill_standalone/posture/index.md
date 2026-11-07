<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-180"></a>

# Module `pill_standalone::posture`

Visibility: `crate` · Source: `frontends\pill_standalone\src\posture.rs:1`

What this binary runs: the development host, or a shipped project.
What this binary runs: the development host, or a shipped project.

## Responsibilities

- Name the project type, the headless and windowed drivers, and the setup
  and renderer-attach steps for the posture this binary was built with.

## Design

The build mode picks what this binary runs: `development` compiles the
development host, `shipping` compiles the linked project, and the other
mode's code is not in the binary at all. "Posture" is the crate's word for
what a mode compiles to.

The loops in `headless_standalone` and `windowed_standalone` are written
once, against [`pill_player::FrameDriver`]. Only setting a driver up
differs, and that difference lives here: the file defines the same private
module twice, one definition per mode, and the `development` and `shipping`
features pick which one compiles. `main.rs` refuses a build that has
neither mode or both. A shipping build does not compile
`pill_development_host` at all, and each posture's windowed half exists
only under the `rendering` feature.

## Module contents

### Modules
- [`compiled_posture`](compiled_posture/index.md#rustdoc-item-179) — The development posture: `pill_development_host` builds, loads and reloads

## Re-exports

- [`pub use compiled_posture;`](compiled_posture/index.md#rustdoc-item-179)
