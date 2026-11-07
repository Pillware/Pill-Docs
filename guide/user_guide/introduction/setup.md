# Setup

## Summary

To work with Pill you need the Rust toolchain, a C/C++ build toolchain, the Slang shader compiler and, for C# projects, the .NET 8 SDK. You don't have to install them by hand: the repository has one setup script for Windows and one for Linux that install everything that is missing. Clone the repository, run the script for your system, then run a test project to check that it works.

## What do I need?

| Tool                          | Why Pill needs it                                                        | Windows                         | Linux                                       |
| ----------------------------- | ------------------------------------------------------------------------ | ------------------------------- | ------------------------------------------- |
| **Rust** (rustup, stable)     | builds the engine, the extensions and Rust projects                      | installed by the script         | installed by the script (into `~/.cargo`)   |
| **C/C++ build tools**         | some dependencies compile C code or link system libraries                | MSVC build tools + Windows SDK  | a C compiler (`cc`), `pkg-config` and system libraries |
| **Slang** (`slangc`)          | compiles the `.hlsl` shaders; the renderer does not build without it      | installed by the script         | installed by the script (into `~/.local`)   |
| **.NET 8 SDK**                | builds and runs C# projects                                              | optional (VS Code setup)        | installed by the script (into `~/.dotnet`)  |
| **Git**                       | clones the repository                                                    | install it yourself             | install it yourself                         |
| VS Code (optional)            | the editor the debugging profiles are set up for                         | optional                        | optional                                    |

## How do I set up my machine?

Clone the repository, then run the setup script for your system from the repository root.

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

The PowerShell and `cmd` blocks run the Windows script; the `bash` block runs the Linux one.

Before it changes anything, the script prints its plan and asks you **one question**: whether to include the optional VS Code debugging setup. After that it runs on its own. It works through six steps:

| Step | Windows (`setup_windows_environment.ps1`)                    | Linux (`setup_linux_environment.sh`)                                  |
| ---- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| 1    | Rust, through `winget` (or rustup's own installer)           | system libraries through `apt-get`: Vulkan, X11/Wayland, ALSA, udev, ICU, OpenSSL |
| 2    | MSVC build tools and the Windows SDK                         | Rust, through rustup's installer                                      |
| 3    | the Slang shader compiler                                    | the Slang shader compiler (2025.21.2), added to `PATH` in `~/.bashrc` |
| 4    | checks Smart App Control, which can block Pill's hot reload  | the .NET 8 SDK, with `DOTNET_ROOT` and `PATH` added to `~/.bashrc`    |
| 5    | optional: VS Code, the .NET 8 SDK and the extensions         | optional: VS Code, its extensions and `dotnet-trace`                  |
| 6    | downloads every Rust dependency once (`cargo fetch`)         | downloads every Rust dependency once (`cargo fetch`)                  |

Both scripts skip whatever is already installed, so you can run them again at any time - for example after fixing whatever made a step fail.

**Why the download step?** When Pill hot reloads your code, it rebuilds it with `cargo build --offline`, so a reload never waits on the internet. That only works when every dependency is already on your disk, which is what step 6 makes sure of.

## Anything special on Windows?

- **Run the script from a normal, non-administrator PowerShell window.** The installers ask for administrator rights themselves when they need them.
- **Smart App Control can block hot reload.** It stops Windows from loading the DLLs Pill builds while your project runs (`os error 4551`). The script checks it and tells you what to do.

## Anything special on Linux?

- **The system-package step needs Debian or Ubuntu** (`apt-get`) and asks for `sudo`. Every other step installs into your home folder and needs no special rights.
- **Open a new terminal afterwards**, so the `PATH` and `DOTNET_ROOT` lines the script added to `~/.bashrc` take effect.
- The script takes a few flags:

| Flag                      | What it does                                                       |
| ------------------------- | ------------------------------------------------------------------ |
| `--no-fetch`              | skips the dependency download, for example when you are offline    |
| `--vscode-debugging`      | includes the VS Code debugging setup without asking                |
| `--no-vscode-debugging`   | skips it without asking                                            |

Pill is developed and tested on Windows. Linux works, but gets less testing.

## How do I check that it works?

Run one of the repository's small test projects in a window:

```powershell
cd modules
$env:PROJECT_PATH = "../devops/tests/projects/scene"
cargo run --package pill_standalone --features rendering
```
```cmd
cd modules
set PROJECT_PATH=../devops/tests/projects/scene
cargo run --package pill_standalone --features rendering
```
```bash
cd modules
export PROJECT_PATH="../devops/tests/projects/scene"
cargo run --package pill_standalone --features rendering
```

The first build compiles the whole engine and takes several minutes. Later runs only rebuild what changed. When a window opens and shows three rotating models, everything is set up.

> **Example:** with the window still open, change a value in `devops/tests/projects/scene/src/lib.rs` and save. The log shows the project being rebuilt and reloaded, and the window keeps running - that is hot reload working.

To check a C# setup, run the C# test project the same way, with `PROJECT_PATH` set to `../devops/tests/projects/managed`.

## Where do I go next?

- [What is Pill?](what_is_pill.md) - what Pill is and what it aims for.
- [Next steps](next_steps.md) - where to go from here.
- [Build configurations](../advanced/build_configurations.md) - every way to run, build and ship a project.
