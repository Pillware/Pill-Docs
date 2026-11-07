# Build configurations

## Summary

Pill builds your project in one of two modes:
- **Development mode** is for working on the project: it rebuilds and reloads your code while the project keeps running.  
- **Shipping mode** is for handing the project over: everything is compiled into one optimized executable that never reloads.  

Three more settings, picked separately, decide:
- How optimized the code is
- Whether there is a window
- How C# code is compiled (if your project is using C#)

## At a glance

Every build picks one value on each of four settings, called the **build axes**. The values one build picked together are its **build configuration**.

| Build axis              | Values                                                                            | Picked by                   |
| ----------------------- | --------------------------------------------------------------------------------- | --------------------------- |
| Mode                    | development, shipping                                                             | the command you run         |
| Rust compiler profile   | `debug`, `development-optimized`, `release`, `release-fast`, `release-with-debug` | `--profile`                 |
| Window                  | headless, windowed                                                                | the `rendering` feature     |
| .NET configuration (C#) | `Release`, `Debug`                                                                | `PILL_CSHARP_CONFIGURATION` |

> **Example:** `cargo run --package pill_standalone --features rendering` is development mode, the `debug` profile, windowed, and `Release` for C#. That is the configuration you use most of the time.

## What is the difference between development and shipping mode?

Development mode lets you change the project while it runs. Shipping mode gives you a fast, self-contained program to hand to other people.

| Question                                | Development mode                                             | Shipping mode                                   |
| --------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| What is it for?                         | working on the project                                       | handing the project over                        |
| Hot reload and hot patch                | yes                                                          | no                                              |
| How is the code built?                  | the engine, each extension and the project are separate DLLs | everything in one executable                    |
| Where do assets come from?              | the files under `res`, read and watched live                 | an asset pack built into the executable         |
| Does it need the source and Rust tools? | yes, the host builds your code when it starts                | no                                              |
| Rust profiles                           | `debug`, `development-optimized`                             | `release`, `release-fast`, `release-with-debug` |
| How do I start it?                      | `cargo run --package pill_standalone`                        | `python devops/ci_cd/build_shipping.py`         |

The two modes run the same project code. You do not change your project to ship it.

## How do I run my project in development mode?

Point `PROJECT_PATH` at your project and run the standalone frontend from the `modules/` folder. The host then builds your project and its extensions, loads them, and watches them for changes.

```powershell
cd modules
$env:PROJECT_PATH = "../examples/my_project"
cargo run --package pill_standalone                        # headless
cargo run --package pill_standalone --features rendering   # windowed
```
```cmd
cd modules
set PROJECT_PATH=../examples/my_project
REM headless
cargo run --package pill_standalone
REM windowed
cargo run --package pill_standalone --features rendering
```
```bash
cd modules
export PROJECT_PATH="../examples/my_project"
cargo run --package pill_standalone                        # headless
cargo run --package pill_standalone --features rendering   # windowed
```

`PROJECT_PATH` names the folder that holds `project_settings.yaml`. For a C# project, it names the folder that holds the `.csproj`.

The editor (`pill_editor`) also runs in development mode. It is never part of a shipped project.

## How do I build my project for shipping?

Run the shipping build script. Do not use `cargo build --release`: it fails, because the development settings in the workspace cannot be combined with a release build.

```powershell
$env:PROJECT_PATH = "examples/my_project"
python devops/ci_cd/build_shipping.py                # Rust or C# project
python devops/ci_cd/build_shipping.py --csharp-aot   # C# project as NativeAOT
```
```cmd
set PROJECT_PATH=examples/my_project
REM Rust or C# project
python devops/ci_cd/build_shipping.py
REM C# project as NativeAOT
python devops/ci_cd/build_shipping.py --csharp-aot
```
```bash
export PROJECT_PATH="examples/my_project"
python devops/ci_cd/build_shipping.py                # Rust or C# project
python devops/ci_cd/build_shipping.py --csharp-aot   # C# project as NativeAOT
```

You can run it from any folder. Here `PROJECT_PATH` is relative to the repository root.

> **Example:** you run the script for `examples/my_project`. The script:
>
> 1. reads `project_settings.yaml` and writes a small crate that lists your project and its extensions as ordinary dependencies
> 2. packs your `res` folder, and every extension's `res`, into one asset pack
> 3. builds `pill_standalone` in shipping mode with the `release` profile
> 4. copies the result into `examples/my_project/build/<date>_<time>/` and prints a report of what it built

The finished program reads its assets from the pack inside it, so you can copy the output folder anywhere. Files under `res/editor/` are never packed, because they only serve the editor.

**C# projects** ship in one of two ways:

| Option         | What you get                                                        | What the player needs |
| -------------- | ------------------------------------------------------------------- | --------------------- |
| default        | the executable plus your compiled C# assemblies beside it           | .NET installed        |
| `--csharp-aot` | one native library with your code and a trimmed .NET runtime inside | nothing extra         |

## How do I build for the browser?

Run the web build script. It builds a Rust project for a page in a browser, using WebGPU.

```powershell
python devops/tools/build_web.py examples/my_project         # optimized
python devops/tools/build_web.py --dev examples/my_project   # faster to build, unoptimized
```
```cmd
REM optimized
python devops/tools/build_web.py examples/my_project
REM faster to build, unoptimized
python devops/tools/build_web.py --dev examples/my_project
```
```bash
python devops/tools/build_web.py examples/my_project         # optimized
python devops/tools/build_web.py --dev examples/my_project   # faster to build, unoptimized
```

The script puts the page in `examples/my_project/build/web/`. Serve that folder over HTTP and open it in the browser.

A browser build works like shipping mode: no hot reload, and the assets come from a pack. The pack sits next to the page instead of inside the program, because the browser downloads it separately. C# projects cannot run in the browser.

## Which Rust profile should I use?

Use `debug` while you work, `development-optimized` when you measure performance during development, and `release` when you ship.

| Profile                 | Mode        | Optimized?     | Use it when                                               |
| ----------------------- | ----------- | -------------- | --------------------------------------------------------- |
| `debug`                 | development | no             | you write and debug code; builds are fastest              |
| `development-optimized` | development | yes            | you profile or measure speed and still want hot reload    |
| `release`               | shipping    | yes, for size  | you ship the project (the default of the shipping script) |
| `release-fast`          | shipping    | yes, for speed | you ship and speed matters more than file size            |
| `release-with-debug`    | shipping    | yes            | you need to debug a crash in a shipped build              |

An unoptimized `debug` build can be 10 to 50 times slower than an optimized one. Its timings show which parts are slow compared to each other, but not how fast the shipped project will be.

```powershell
cargo run --package pill_standalone --profile development-optimized --features rendering
python devops/ci_cd/build_shipping.py --profile release-fast
```
```cmd
cargo run --package pill_standalone --profile development-optimized --features rendering
python devops/ci_cd/build_shipping.py --profile release-fast
```
```bash
cargo run --package pill_standalone --profile development-optimized --features rendering
python devops/ci_cd/build_shipping.py --profile release-fast
```

The first build in a new profile compiles everything again, so it takes a while.

## Should I run headless or windowed?

Run windowed (`--features rendering`) to see your project. Run headless to test logic without a window or a GPU.

A headless run still loads your project, its extensions and the renderer's data, such as its components and assets. It only leaves out the window and the GPU renderer. That makes headless runs useful for automated tests and for machines without a graphics card.

## What is the .NET configuration for?

It decides whether your C# code is compiled with optimizations. It only matters for C# projects.

By default C# code is built in `Release`. Set `PILL_CSHARP_CONFIGURATION=Debug` when you want to step through your C# code in a debugger and see its local variables. Add `PILL_WAIT_FOR_MANAGED_DEBUGGER=1` to make the project wait until the debugger is attached.

```powershell
$env:PILL_CSHARP_CONFIGURATION = "Debug"
$env:PILL_WAIT_FOR_MANAGED_DEBUGGER = "1"
```
```cmd
set PILL_CSHARP_CONFIGURATION=Debug
set PILL_WAIT_FOR_MANAGED_DEBUGGER=1
```
```bash
export PILL_CSHARP_CONFIGURATION="Debug"
export PILL_WAIT_FOR_MANAGED_DEBUGGER="1"
```

A shipping build always compiles C# in `Release`.

## What can I not combine?

Pill refuses combinations that cannot work, and tells you why when it does.

- **Development mode with a `release` profile.** Development mode needs separate DLLs, and the `release` profiles link everything into one file. Use `development-optimized` for a fast development build.
- **Both modes at once, or neither.** `pill_standalone` refuses to compile with both the `development` and `shipping` features, or with neither of them.
- **The editor in shipping mode.** The editor is a development tool and is never built for shipping.
- **C# in the browser.** The browser build supports Rust projects only.

## Where is this in the code?

- `modules/frontends/pill_standalone/Cargo.toml` - the `development`, `shipping` and `rendering` features.
- `modules/Cargo.toml` - the Rust profiles.
- `devops/ci_cd/build_shipping.py` - the shipping build.
- `devops/tools/build_web.py` - the browser build.
- [Build configurations inside the engine](../../engine_guide/other/build_configurations.md) - how the build configurations work inside the engine.
