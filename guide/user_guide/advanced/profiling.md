# Profiling

## Summary

Profiling shows where each update spends its time: which ECS systems are slow, how long the engine's own work takes, and how long the GPU spends on each render pass. Pill sends this information to the Tracy profiler. You turn it on with a Cargo feature, start your project, and connect Tracy while the project runs.

## At a glance

| Question                                | Answer                                                                            |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| Which tool shows the data?              | The Tracy profiler, version **0.13.x**                                            |
| How do I turn it on?                    | Build the frontend with the `profiling` feature: `--features rendering,profiling` |
| Does it slow down a normal build?       | No. Without the feature, every profiling call is compiled away                    |
| Does it cost time when Tracy is closed? | Almost none. Nothing is recorded until Tracy connects                             |
| Can I time my own code?                 | Yes, with `pill_engine::profile_scope!`                                           |
| Can I see GPU time?                     | Yes, also set `PILL_GPU_PROFILE=1`                                                |
| Does it work in the editor?             | No. `pill_editor` has no `profiling` feature; profile with `pill_standalone`      |

## What do I need?

You need the Tracy profiler: a separate program that receives the profiling data from your running project and displays it. Its version must match the Tracy code that Pill links.

Download **Tracy 0.13.1** from its release page: <https://github.com/wolfpld/tracy/releases/tag/v0.13.1>. The page has a ready-made Windows build. On Linux, build the profiler from that release's source, or install a package of the same version. See [Which Tracy version do I need?](#which-tracy-version-do-i-need) for why it has to be this version.

Pill does not start Tracy for you. You run `tracy-profiler` program (`.exe` on Windows) yourself.

## How do I profile my project?

Build and start the project with the `profiling` feature, then connect Tracy to it.

1. Start the project from `modules/`:

   ```powershell
   cd modules
   $env:PROJECT_PATH = "../examples/my_project"
   cargo run --package pill_standalone --features rendering,profiling
   ```
   ```cmd
   cd modules
   set PROJECT_PATH=../examples/my_project
   cargo run --package pill_standalone --features rendering,profiling
   ```
   ```bash
   cd modules
   export PROJECT_PATH="../examples/my_project"
   cargo run --package pill_standalone --features rendering,profiling
   ```

2. Start `tracy-profiler` (`.exe` on Windows).
3. In Tracy's connection window, pick `pill_standalone` from the list of running programs. If it does not appear, connect to `127.0.0.1`.

Tracy starts showing data at once. You can connect, disconnect and connect again while the project keeps running.

> **Example:** your project drops to 20 updates per second after you add a new ECS system. You start it with `profiling`, connect Tracy, and open the timeline. One zone named `system: wave_contribution` takes 40 ms in every update, while the others take under 1 ms. That ECS system is the one to look at.

Hot reload and hot patch keep working while you profile. The host passes its own engine features to every module it builds, so a reloaded module reports to the same Tracy connection.

## What will I see in Tracy?

Tracy shows each update as one **frame**: Tracy's name for one pass of the main loop. Inside each frame it shows nested time blocks called **zones**.

| What                                       | Where in Tracy                                                 | What it tells you                                            |
| ------------------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------ |
| One frame per update                       | the frame graph at the top                                     | how long every update took, and which ones were slow         |
| `frame`                                    | a zone on the main thread                                      | the whole update, with the entity count in its details       |
| `system: <name>`                           | a zone per ECS system, **blue** for your project's ECS systems | how long each ECS system ran                                 |
| `scripts`, `commands`                      | extra frame sets                                               | the script step and the deferred-command step of each update |
| `entity_count`, `frame_time_us` and others | plots                                                          | numbers over time: entities, archetypes, frame time          |
| `parallel_utilization_pct`                 | a plot                                                         | how much of the thread pool the ECS systems kept busy        |
| `GPU`                                      | a GPU timeline (with `PILL_GPU_PROFILE=1`)                     | how long each render pass took on the GPU                    |

Click a zone to see its details. Some zones carry extra text, such as the time an ECS system last ran.

## How do I time my own code?

Open a zone with `profile_scope!`. The zone starts where you write it and ends when the variable goes out of scope.

```rust
use pill_engine::profile_scope;

fn rebuild_navigation_grid(level: &Level) -> NavigationGrid {
    // Measures the whole function: the zone ends when `_zone` is dropped at
    // the end of the function.
    let _zone = profile_scope!("rebuild navigation grid");

    let mut grid = NavigationGrid::new(level.size());
    {
        // Measures only this block: the zone ends at the closing brace.
        let _zone = profile_scope!("mark blocked cells");
        for obstacle in level.obstacles() {
            grid.block(obstacle.bounds());
        }
    }
    grid
}
```

Tracy shows `mark blocked cells` nested inside `rebuild navigation grid`, so you see how much of the function that loop takes. The same works in any function: an ECS system, a helper it calls, or code that runs at start-up.

Bind the zone to a named variable such as `_zone`. If you write `let _ = profile_scope!(...)`, Rust drops the zone at once and Tracy shows a zone of almost zero length.

A zone name can include values:

```rust
let _zone = profile_scope!("spawn wave {}", wave_number);
```

Pill only builds that text while Tracy is connected, so the formatting costs nothing when nobody is watching.

You can also send numbers to Tracy as a graph:

```rust
pill_engine::profile_plot!(enemies_alive, enemy_count as f64);
```

Without the `profiling` feature, all of these lines are compiled away, so you can leave them in your code.

## How do I see GPU time?

Set `PILL_GPU_PROFILE=1` before starting a `profiling` build:

```powershell
$env:PILL_GPU_PROFILE = "1"
cargo run --package pill_standalone --features rendering,profiling
```
```cmd
set PILL_GPU_PROFILE=1
cargo run --package pill_standalone --features rendering,profiling
```
```bash
export PILL_GPU_PROFILE="1"
cargo run --package pill_standalone --features rendering,profiling
```

The renderer then measures each render pass on the GPU. When Tracy connects, it shows these measurements on a separate `GPU` timeline. The renderer also writes the pass times to the log every 120 updates, so you see them even without Tracy.

GPU profiling is off by default because the measurements cost GPU time in every update. It needs a graphics device that supports timestamp queries; if yours does not, the log says so and Tracy shows no GPU timeline.

## Why do my timings look slow?

A normal development build runs unoptimized code, which can be 10 to 50 times slower than an optimized build. The profile still shows which parts are slow compared to each other, but the absolute numbers are too high.

For realistic numbers, use the `development-optimized` profile. It keeps hot reload working:

```powershell
cargo run --package pill_standalone --profile development-optimized --features rendering,profiling
```
```cmd
cargo run --package pill_standalone --profile development-optimized --features rendering,profiling
```
```bash
cargo run --package pill_standalone --profile development-optimized --features rendering,profiling
```

The first build in this profile compiles everything again, so it takes a while.

## Which profiling features are there?

`profiling` is the one you normally want. The others change how much is recorded.

| Feature          | What it records                                                                         | When to use it                      |
| ---------------- | --------------------------------------------------------------------------------------- | ----------------------------------- |
| `profiling`      | zones, frames, plots, messages, thread names, CPU sampling                              | normal profiling                    |
| `profiling-fine` | everything in `profiling`, plus the engine's fine-grained zones (`profile_scope_fine!`) | finding a problem inside the engine |
| `metrics`        | adds `engine.fps` and `engine.frame_time_ms` graphs, combined with `profiling`          | watching the frame rate as a graph  |

`profiling-fine` adds many small zones. They change the timing they measure, so turn it on only while you investigate a specific part of the engine.

> **Example:** to see the frame rate as a graph while you profile:
>
> ```powershell
> cargo run --package pill_standalone --features rendering,profiling,metrics
> ```
> ```cmd
> cargo run --package pill_standalone --features rendering,profiling,metrics
> ```
> ```bash
> cargo run --package pill_standalone --features rendering,profiling,metrics
> ```

## What does not work?

- **The browser.** The web build does not turn on profiling, and Tracy cannot connect to a page in a browser.
- **A different Tracy version.** Only Tracy 0.13.x can connect.
- **Context switches and system-wide sampling.** Pill enables them, but Windows only allows Tracy to record them when the project runs as administrator. Start your terminal as administrator if you need them. On Linux, run the project as root, or allow it with `sudo sysctl kernel.perf_event_paranoid=-1`.

## Where is this in the code?

- `modules/engine/pill_core/src/profiling.rs` - the `profile_scope!`, `profile_plot!` and other profiling macros.
- `modules/frontends/pill_standalone/Cargo.toml` - the `profiling`, `profiling-fine` and `metrics` features.
- `modules/extensions/pill_master_renderer/pill_master_renderer/src/profiler.rs` - GPU measurements and the `GPU` timeline.
- [Profiling inside the engine](../../engine_guides/other/profiling.md) - how profiling works inside the engine.

## Which Tracy version do I need?

> **Note:** Pill links `tracy-client` 0.18.4, which contains the Tracy **0.13.1** client (through `tracy-client-sys` 0.28.0). The Tracy viewer must be version **0.13.x**. A viewer of a different version refuses to connect and reports a protocol mismatch. When Pill updates `tracy-client`, the required viewer version changes too: check the `tracy-client-sys` version in `modules/Cargo.lock` and the matching Tracy release.
