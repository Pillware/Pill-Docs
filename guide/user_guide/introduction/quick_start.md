# Quick start

Run the spinning cube example in two steps.

## 1. Download and set up the engine

Clone the repository and run the setup script for your system. It installs Rust, the shader compiler and everything else that is missing.

```powershell
git clone https://github.com/MattSzymonski/Rust-Hybrid-ECS.git
cd Rust-Hybrid-ECS
powershell -ExecutionPolicy Bypass -File devops/setup/setup_windows_environment.ps1
```
```cmd
git clone https://github.com/MattSzymonski/Rust-Hybrid-ECS.git
cd Rust-Hybrid-ECS
powershell -ExecutionPolicy Bypass -File devops\setup\setup_windows_environment.ps1
```
```bash
git clone https://github.com/MattSzymonski/Rust-Hybrid-ECS.git
cd Rust-Hybrid-ECS
bash devops/setup/setup_linux_environment.sh
```

The script asks one question at the start (whether you want the VS Code debugging setup), then runs on its own. On Linux, open a new terminal when it finishes. [Setup](setup.md) explains every step.

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

The first build compiles the whole engine, so give it a few minutes. Then a window opens with a spinning cube.

**Try hot reload:** while the window is open, change `SPIN_RATES_RADIANS_PER_SECOND` in `examples/cube/cube_rust/src/lib.rs` and save. The cube changes speed without the window closing.

## 3. Learn how cube project works

dwdwad

## Next

- Prefer C#? Use `PROJECT_PATH` = `../examples/cube/cube_csharp` instead.
- [What is Pill?](what_is_pill.md) and the [Introduction](introduction.md) explain what you just ran.
