# Environment variables

## Summary

Pill reads a few environment variables to find the project, switch hot reload watchers off, tune rendering, and drive the editor and the tests. Only `PROJECT_PATH` is required. Every other variable is optional, and Pill behaves sensibly without it. Most are read once when the program starts, so changing one means restarting the program.

## At a glance

| Group                         | Variables                                                                                           | Who needs them                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Running a project             | `PROJECT_PATH`, `ECS_LOG_DIR`                                                                       | everyone                           |
| Hot reload                    | `PILL_HOT_RELOADING`, `PILL_FUNCTION_HOT_PATCHING`, `PILL_ASSETS_HOT_RELOADING`, `PILL_WATCH_DEBOUNCE_MS`, `PILL_CARGO_TIMINGS` | development mode                   |
| Rendering                     | `PILL_PRESENT_MODE`, `PILL_GPU_PROFILE`, `PILL_SLANGC`                                              | windowed runs, shader work         |
| Editor                        | `PILL_EDITOR_*`, `LOCALAPPDATA`, `XDG_STATE_HOME`                                                    | editor work and editor tests       |
| C# projects                   | `PILL_CSHARP_CONFIGURATION`, `PILL_WAIT_FOR_MANAGED_DEBUGGER`, `DOTNET_ROOT`, `ECS_DOTNET_HOSTFXR`   | C# projects                        |
| Engine tuning and debugging   | `ECS_SLICE_SIZE`, `ENGINE_ERROR_MACRO_DEBUG`, `ENGINE_ERROR_MACRO_DEBUG_DIR`                        | engine developers                  |
| Test and diagnostic switches  | `PILL_SECOND_VIEW`, `PILL_PICK_TEST`, `PILL_TEST_PANEL_SLOW`, `PILL_BENCH_ENTITIES`, `PILL_WEB_BROWSER`, … | the test suites                    |
| Set internally                | `ECS_CSHARP_PROJECT_*`, `PILL_HOST_*`, Cargo's own variables                                         | nobody; Pill sets them             |

Log levels are not environment variables. They come from the `logging:` key in `project_settings.yaml`.

## How do I set an environment variable?

Set it in the terminal before you start the program. The value then applies to every program you start from that terminal, until you close it or remove the variable.

```powershell
$env:PROJECT_PATH = "../examples/my_project"     # set
$env:PILL_FUNCTION_HOT_PATCHING = "0"            # set a switch off
Remove-Item Env:PILL_FUNCTION_HOT_PATCHING       # remove it again
```
```cmd
REM set
set PROJECT_PATH=../examples/my_project
REM set a switch off
set PILL_FUNCTION_HOT_PATCHING=0
REM remove it again
set PILL_FUNCTION_HOT_PATCHING=
```
```bash
export PROJECT_PATH="../examples/my_project"     # set
export PILL_FUNCTION_HOT_PATCHING="0"            # set a switch off
unset PILL_FUNCTION_HOT_PATCHING                 # remove it again
```

Pill reads most variables once, at startup. A host that is already running does not notice a change, so restart it after you set one.

## How are switch values read?

On/off switches do not all accept the same values. Each table below says which rule its switch follows:

| Rule                     | Means on                                         | Means off                                     |
| ------------------------ | ------------------------------------------------ | --------------------------------------------- |
| **on unless turned off** | unset, or any other value                        | `0`, `false`, `no` or `off` (any case, spaces trimmed) |
| **not zero**             | any non-empty value except `0`                   | unset, empty, or `0`                          |
| **exactly `1`**          | only the value `1`                               | anything else                                 |
| **set at all**           | the variable exists, whatever its value          | the variable does not exist                   |

> **Example:** `PILL_HOT_RELOADING=off` turns the source watcher off, because the hot reload switches follow "on unless turned off". `PILL_SECOND_VIEW=yes` does nothing, because that switch follows "exactly `1`".

## Which variables does every run use?

| Variable       | Accepted values | What it does                                                                                       |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| `PROJECT_PATH` | a folder path   | **Required.** The project to run: the folder with `project_settings.yaml`, or, for a C# project, the folder with the `.csproj`. Relative paths are relative to the folder you start the program from |
| `ECS_LOG_DIR`  | a folder path   | Also writes the log to a file in this folder. Without it, the log only goes to the console          |

## Which variables control hot reload?

These apply to development mode: `pill_standalone` with the default `development` feature, and the editor. The host prints all three switches in one `the hot reload switches` line at startup, so the log shows which ones were on.

| Variable                     | Accepted values                  | What it does                                                                                       |
| ---------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| `PILL_HOT_RELOADING`         | on unless turned off             | The source watcher. Off: a code edit is not noticed until the host restarts                        |
| `PILL_FUNCTION_HOT_PATCHING` | on unless turned off             | Hot patching. Off: an edit to a function body rebuilds and reloads the module instead of patching the function, so a debugger breakpoint in that function stays bound |
| `PILL_ASSETS_HOT_RELOADING`  | on unless turned off             | The asset and `.hlsl` shader watchers. Off: an asset or shader edit is not reimported; the shader cook at startup still runs |
| `PILL_WATCH_DEBOUNCE_MS`     | milliseconds; default `60`       | How long the file watcher waits after a change before it acts, so one save that writes several files triggers one rebuild. Raise it if your editor saves in several steps |
| `PILL_CARGO_TIMINGS`         | set at all                       | Adds `--timings` to the host's builds, so `Reload analytics` lists the crates Cargo rebuilt and their times. Makes every build slower |

## Which variables affect rendering?

| Variable            | Accepted values                          | What it does                                                                                      |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `PILL_PRESENT_MODE` | `fifo` (default), `immediate`, `mailbox` | How frames are presented. `fifo` waits for vsync. `immediate` and `mailbox` uncap the frame rate, for measuring frame times. A mode the driver does not offer, or an unknown value, falls back to `fifo` with a warning |
| `PILL_GPU_PROFILE`  | not zero                                 | Measures each render pass on the GPU and logs the times every 120 updates. With a `profiling` build and Tracy connected, the times also appear on a `GPU` timeline in Tracy. Costs GPU time in every update |
| `PILL_SLANGC`       | a path to `slangc`                       | The shader compiler to use. Without it, Pill uses the first `slangc` on `PATH`. A compiler inside the project's working folder is refused, so a project cannot ship its own compiler for the cook to run |

## Which variables does the editor read?

These only affect `pill_editor`. Most exist for the editor's test suite.

| Variable                         | Accepted values          | What it does                                                                                      |
| -------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------- |
| `PILL_EDITOR_TEST_COMMANDS`      | a file path              | The scripted test channel: the editor watches the file and runs each line appended to it as an editor command (`tab game`, `key ctrl+z`, `dump …`, `quit`, …) |
| `PILL_EDITOR_TEST_SECONDS`       | a number of seconds      | Quits the editor cleanly after that long, so a test run that gets stuck still ends                |
| `PILL_EDITOR_CONTINUOUS_REDRAW`  | not zero                 | Draws every frame, instead of only when something changed                                         |
| `PILL_EDITOR_NO_OVERLAY`         | not zero                 | Forces the mode without the composition overlay                                                   |
| `PILL_EDITOR_DETACHED_SCENE`     | set at all               | Puts the scene views in separate windows instead of child windows                                 |
| `LOCALAPPDATA` (Windows)         | a folder path            | Where the editor keeps its state (layout, preferences, keybindings, recovery), in a `RustHybridEcs` subfolder. Point it at a temporary folder to start the editor with clean state |
| `XDG_STATE_HOME`, `HOME` (Linux, macOS) | folder paths      | The same: `$XDG_STATE_HOME/RustHybridEcs`, or `~/.local/state/RustHybridEcs` when `XDG_STATE_HOME` is not set |

> **Example:** the editor suite starts every editor with `LOCALAPPDATA` pointing at a temporary folder. The test never reads or overwrites your own layout and preferences.

## Which variables do C# projects use?

| Variable                          | Accepted values                  | What it does                                                                                     |
| --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| `PILL_CSHARP_CONFIGURATION`       | `Release` (default), `Debug`     | The configuration the host builds the C# project and the C# runtime in. `Debug` keeps local variables visible to a debugger. Any other value is refused. A shipping build always uses `Release` |
| `PILL_WAIT_FOR_MANAGED_DEBUGGER`  | any non-empty value              | Pauses the C# runtime at startup until a managed debugger attaches, for at most two minutes       |
| `DOTNET_ROOT`                     | a folder path                    | A .NET installation to search for the hosting library (`hostfxr`)                                 |
| `ECS_DOTNET_HOSTFXR`              | a file path                      | One exact `hostfxr` library to use. It wins over every other search, which helps when several .NET SDKs are installed |

## Which variables are for tuning and debugging the engine?

| Variable                        | Accepted values      | What it does                                                                                        |
| ------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------- |
| `ECS_SLICE_SIZE`                | a positive number    | How many entities one parallel slice holds when a query runs in parallel. Without it, the engine sizes slices from the component data, starting from 4,096 entities of 8 bytes |
| `ENGINE_ERROR_MACRO_DEBUG`      | set at all           | Makes the `#[engine_error]` macro write the code it generates to a file and print the path. Read **at compile time**, so it affects the next build, not a running program |
| `ENGINE_ERROR_MACRO_DEBUG_DIR`  | a folder path        | Where that code is written. Default: the system's temporary folder                                   |

## Which variables are for tests and diagnostics?

These exist for the test suites, and you normally do not set them by hand. `PILL_SECOND_VIEW` and `PILL_PICK_TEST` are only compiled into a development build of the windowed `pill_standalone`.

| Variable                    | Accepted values       | What it does                                                                                      |
| --------------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| `PILL_SECOND_VIEW`          | exactly `1`           | The windowed `pill_standalone` opens a second window, drawn as renderer surface 1 with its own camera |
| `PILL_SECOND_VIEW_SECONDS`  | a number of seconds   | Closes that second window after this long                                                         |
| `PILL_PICK_TEST`            | exactly `1`           | The windowed `pill_standalone` runs the scene picking test                                        |
| `PILL_TEST_PANEL_SLOW`      | not zero              | Makes the editor shell's demo panel deliberately slow, to test the editor's slow-panel handling  |
| `PILL_BENCH_ENTITIES`       | an entity count       | How many entities the `managed` test project's benchmark systems create. Without it, they create none |
| `PILL_WEB_BROWSER`          | a path to Chrome or Edge | The browser `test_web_smoke.py` opens. Without it, the suite tries known install locations     |

## Which variables does Pill set itself?

Do not set these yourself. Pill sets them for its own use:

| Variable                                           | Set by                                    | Purpose                                                                 |
| -------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| `ECS_CSHARP_PROJECT_DIR`, `ECS_CSHARP_PROJECT_ASSEMBLY` | the C# bridge, before .NET starts    | tell the C# runtime which project assembly to load                      |
| `PILL_HOST_PROFILE_DIRECTORY`, `PILL_HOST_TARGET_TRIPLE` | the development host's build script, at compile time | record the host's Cargo profile and target, so the modules it builds match it |
| `PILL_UNSET_SWITCH_FOR_TESTS`                      | nobody                                    | a name the unit tests read to check what an unset switch means          |
| `CARGO_MANIFEST_DIR`, `OUT_DIR`, `PROFILE`, `RUSTC`, … | Cargo                                  | read by build scripts                                                   |

One more variable matters without being Pill's own: a shipping build must not inherit `-C prefer-dynamic` through `RUSTFLAGS`. `devops/ci_cd/build_shipping.py` clears `RUSTFLAGS` for you, which is one reason shipping builds go through that script.

## Where is this in the code?

- `modules/hosting/pill_development_host/src/config.rs` - the hot reload switches, `PILL_CARGO_TIMINGS` and `PILL_CSHARP_CONFIGURATION`.
- `modules/hosting/pill_development_host/src/watchers/shared.rs` - `PILL_WATCH_DEBOUNCE_MS`.
- `modules/extensions/pill_master_renderer/pill_master_renderer/src/surface.rs` and `profiler.rs` - `PILL_PRESENT_MODE` and `PILL_GPU_PROFILE`.
- `modules/editor/pill_editor/src/` and `modules/editor/pill_editor_core/src/` - the `PILL_EDITOR_*` switches and the state folder.
- `modules/csharp/pill_csharp_bridge/src/csharp_runtime.rs` and `modules/csharp/pill_csharp_runtime/src/LoaderInterop.cs` - the .NET variables.
- `modules/engine/pill_engine_core/src/config.rs` - `ECS_SLICE_SIZE`.
- `modules/frontends/pill_standalone/src/windowed_standalone.rs` - `PILL_SECOND_VIEW` and `PILL_PICK_TEST`.
