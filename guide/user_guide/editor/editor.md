# Editor

## Summary

The editor shows your project while it runs: the scene in one or more viewports, the entities and their components, the assets, and the ECS systems. It runs in development mode, so code and asset changes reload while it is open. You start it like the standalone frontend: point `PROJECT_PATH` at your project and run `pill_editor`.

## How do I run the editor?

Build the editor, then start it with `PROJECT_PATH` pointing at your project. Run both commands from the `modules/` folder.

```powershell
cd modules
cargo build --package pill_editor
$env:PROJECT_PATH = "../examples/my_project"
./target/debug/pill_editor
```
```cmd
cd modules
cargo build --package pill_editor
set PROJECT_PATH=../examples/my_project
target\debug\pill_editor.exe
```
```bash
cd modules
cargo build --package pill_editor
export PROJECT_PATH="../examples/my_project"
./target/debug/pill_editor
```

`PROJECT_PATH` names the folder that holds `project_settings.yaml`, or the `.csproj` for a C# project. The editor then builds your project and its extensions, loads them, and opens its window.

**Build the editor right before you start it.** The editor shares the engine's DLLs with the other programs in `modules/`. If you build something else in between, such as `pill_standalone` or a test, the DLLs may no longer match the editor, and it fails to start. Running `cargo build --package pill_editor` again fixes that.

## How do I run the editor in the browser?

Build the browser version with the web build script, then serve the output folder over HTTP.

```powershell
python devops/tools/build_web.py --dev --editor examples/my_project
python -m http.server 8000 -d examples/my_project/build/web
```
```cmd
python devops/tools/build_web.py --dev --editor examples/my_project
python -m http.server 8000 -d examples/my_project/build/web
```
```bash
python devops/tools/build_web.py --dev --editor examples/my_project
python -m http.server 8000 -d examples/my_project/build/web
```

Open `http://localhost:8000` in a browser that supports WebGPU. The browser version supports Rust projects only, and it has no hot reload.

## Where does the editor keep its settings?

The editor saves its layout, preferences and keybindings in a `RustHybridEcs` folder:

| System           | Folder                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| Windows          | `%LOCALAPPDATA%\RustHybridEcs`                                                                      |
| Linux and others | `$XDG_STATE_HOME/RustHybridEcs`, or `~/.local/state/RustHybridEcs` when `XDG_STATE_HOME` is not set |

Delete that folder to return the editor to its default layout.

---

<p style="color: #f5c518; font-size: 2.5em; font-weight: bold; text-align: center;">🚧 UNDER CONSTRUCTION 🚧</p>

The editor is still being built, so this guide does not describe its panels, tools and workflows yet. They change too often for a description to stay correct.

What you can rely on today:

- The commands above start the editor.
- The editor only runs in development mode. It is never part of a shipped project.
- Pill is developed and tested on Windows. The editor has not been tested on other systems.

This guide will cover the editor's features once they settle.
