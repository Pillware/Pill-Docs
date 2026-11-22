# Quick start

## Summary

Build and run the spinning cube in two steps: set up the engine, then run the example. The setup script installs what is missing, and the first build compiles the whole engine, so that build is the only slow part.

## 1. Download and set up the engine

Clone the repository, switch to the `golden` branch, and run the setup script for your system. It installs Rust, the C/C++ build tools, the Slang shader compiler and the rest of what Pill needs.

```powershell
git clone https://github.com/Pillware/Pill.git
cd Pill
git checkout golden
powershell -ExecutionPolicy Bypass -File devops/setup/setup_windows_environment.ps1
```
```cmd
git clone https://github.com/Pillware/Pill.git
cd Pill
git checkout golden
powershell -ExecutionPolicy Bypass -File devops\setup\setup_windows_environment.ps1
```
```bash
git clone https://github.com/Pillware/Pill.git
cd Pill
git checkout golden
bash devops/setup/setup_linux_environment.sh
```

The script prints its plan and asks one question - whether to include the VS Code debugging setup - then runs on its own. On Linux, open a new terminal when it finishes, so the lines it added to `~/.bashrc` take effect. [Setup](setup.md) explains each step and what to do when one fails.

## 2. Build and run the cube

From the repository root, point `PROJECT_PATH` at the cube example and run it in a window:

```powershell
cd modules
$env:PROJECT_PATH = "../examples/cube/cube_rust"
cargo run --package pill_standalone --features rendering
```
```cmd
cd modules
set PROJECT_PATH=../examples/cube/cube_rust
cargo run --package pill_standalone --features rendering
```
```bash
cd modules
export PROJECT_PATH="../examples/cube/cube_rust"
cargo run --package pill_standalone --features rendering
```

The first build compiles the whole engine, so it takes a few minutes. Later runs only rebuild what changed. When it finishes, a window opens with a spinning cube.

## Try a hot reload

With the window still open, change `SPIN_RATES_RADIANS_PER_SECOND` in `examples/cube/cube_rust/src/lib.rs` and save. Pill rebuilds your code and swaps it in while the project keeps running, so the cube changes speed and the window never closes. Your entities and their components stay where they were.

## Where do I go next?

- Prefer C#? Point `PROJECT_PATH` at `../examples/cube/cube_csharp` and run the same command. The scene is the same, compiled by the .NET SDK.
- [Overview](overview.md) takes the cube apart and shows every part of Pill that the example uses.
- [Next steps](next_steps.md) leads to the concept pages, the editor and shipping builds.
- [Help](../help/help.md) lists the problems people hit first.
