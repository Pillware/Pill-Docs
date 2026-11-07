# Editor inside the engine

## Summary

The editor is a development-mode frontend, `pill_editor`. It runs the development host like `pill_standalone` does, loads the egui editor shell as a hot-reloadable extension, and draws the scene through child windows. This page covers how to build and run it as an engine developer; the editor's architecture is not documented yet.

## How do I run the editor?

Build `pill_editor` on its own, then start it with `PROJECT_PATH` set. Run the commands from `modules/`.

```powershell
cd modules
cargo build --package pill_editor
$env:PROJECT_PATH = "../examples/local/project_rs"
./target/debug/pill_editor
```
```cmd
cd modules
cargo build --package pill_editor
set PROJECT_PATH=../examples/local/project_rs
target\debug\pill_editor.exe
```
```bash
cd modules
cargo build --package pill_editor
export PROJECT_PATH="../examples/local/project_rs"
./target/debug/pill_editor
```

The editor selects its shell module through the `editor_frontend = "egui"` tag in that module's `[package.metadata.pill]`. It loads the project's extensions like the development host does, and then loads each extension's `*_editor` crate, if it has one.

## Why must the editor be built right before it runs?

The editor shares the engine core with every other executable in the workspace, and a narrower build in between replaces those shared DLLs with ones the editor was not linked against.

The editor's dependency graph is the widest in the workspace: it unions the renderer and UI features onto the engine core. `cargo build --package pill_editor` writes `pill_core` and `pill_engine_core` into `target/debug` with those features. A later, narrower build, such as `cargo build --package pill_standalone` or `cargo test` for one crate, writes the same DLLs again with fewer features. Their exported symbol names then carry a different feature hash, and the editor executable can no longer find the functions it imports.

> **Example:** you build `pill_editor`, then run `cargo test --package pill_player`, then start the editor. The test build has rewritten `pill_engine_core.dll/.so` without the editor's features. On Windows the editor stops at process start with `0xC0000139` (entry point not found). Building `pill_editor` again restores the matching DLLs.

The same rule holds for the editor's test suite: build the editor and run the suite immediately after, with no other Cargo command in between. `devops/ci_cd/check_relevant.py` and `verify.py --only editor` already run their steps in that order.

## Which switches does a development or test run use?

The editor reads a few development-only environment variables at startup:

| Variable                                                       | What it does                                                                                            |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `PILL_EDITOR_TEST_COMMANDS=<file>`                             | the scripted test channel: the editor reads lines appended to the file and runs them as editor commands |
| `PILL_EDITOR_TEST_SECONDS=<s>`                                 | quits cleanly after that many seconds                                                                   |
| `PILL_EDITOR_CONTINUOUS_REDRAW=1`                              | draws every frame, instead of only when something changed                                               |
| `PILL_EDITOR_NO_OVERLAY=1`                                     | forces the mode without the composition overlay                                                         |
| `PILL_EDITOR_DETACHED_SCENE=1`                                 | forces scene views into separate windows instead of child windows                                       |
| `LOCALAPPDATA=<dir>` (Windows), `XDG_STATE_HOME=<dir>` (Linux) | moves the editor's saved state (layout, preferences, keybindings, recovery) into another folder         |

The hot reload switches of the development host (`PILL_HOT_RELOADING`, `PILL_FUNCTION_HOT_PATCHING`, `PILL_ASSETS_HOT_RELOADING`) apply to the editor too.

> **Example:** an automated run sandboxes the saved state, drives the editor from a file, and stops on its own:
>
> ```powershell
> $env:LOCALAPPDATA = "D:/temp/editor_sandbox"
> $env:PILL_EDITOR_TEST_COMMANDS = "D:/temp/editor_commands.txt"
> $env:PILL_EDITOR_TEST_SECONDS = "60"
> ./target/debug/pill_editor
> ```
> ```cmd
> set LOCALAPPDATA=D:/temp/editor_sandbox
> set PILL_EDITOR_TEST_COMMANDS=D:/temp/editor_commands.txt
> set PILL_EDITOR_TEST_SECONDS=60
> target\debug\pill_editor.exe
> ```
> ```bash
> export XDG_STATE_HOME="/tmp/editor_sandbox"
> export PILL_EDITOR_TEST_COMMANDS="/tmp/editor_commands.txt"
> export PILL_EDITOR_TEST_SECONDS="60"
> ./target/debug/pill_editor
> ```

## How do I run the editor's end-to-end suite?

Run it through the gate's `editor` step. The suite, `devops/tests/test_editor_egui.py`, starts the `pill_editor` executable against a fixture project, so that executable must have been built right before it, with nothing else built in between.

```powershell
python devops/ci_cd/verify.py --only editor
```
```cmd
python devops/ci_cd/verify.py --only editor
```
```bash
python devops/ci_cd/verify.py --only editor
```

`verify.py --only editor` first runs the host-tier revision suite, then builds `pill_editor` and runs `test_editor_egui.py` straight after, which keeps the build order above.

## How do I run the editor in the browser?

Build the browser editor with `build_web.py --editor` and serve the output folder.

```powershell
python devops/tools/build_web.py --dev --editor examples/local/project_rs
python -m http.server 8000 -d examples/local/project_rs/build/web
```
```cmd
python devops/tools/build_web.py --dev --editor examples/local/project_rs
python -m http.server 8000 -d examples/local/project_rs/build/web
```
```bash
python devops/tools/build_web.py --dev --editor examples/local/project_rs
python -m http.server 8000 -d examples/local/project_rs/build/web
```

The browser frontend is `pill_web_editor`. It compiles the egui shell into the wasm module and draws it on a transparent canvas over the scene's canvas. The page's `window.pillEditor.command("<line>")` is its scripted channel, with the same command grammar as the native `PILL_EDITOR_TEST_COMMANDS` file.

## Where is this in the code?

- `modules/editor/pill_editor/` - the native editor executable.
- `modules/editor/pill_editor_core/` - the editor's shared core, used by every editor frontend and the shell module.
- `modules/extensions/pill_editor_shell_egui/pill_editor_shell_egui_editor/` - the egui shell module.
- `modules/editor/pill_web_editor/` - the browser editor frontend.
- `devops/tests/test_editor_egui.py` - the end-to-end suite.

---

<p style="color: #f5c518; font-size: 2.5em; font-weight: bold; text-align: center;">🚧 UNDER CONSTRUCTION 🚧</p>

The editor's design is still changing, so this guide does not document its architecture yet: the shell module and its reload contract, the shared editor core, the snapshot and command flow, the viewports and the scripted channel.

Until it does, the most current description is in the repository's `AGENTS.md` (the `editor/pill_editor_core`, `pill_editor_shell_egui_editor` and `editor/pill_editor` entries) and in the module headers of those crates.

The editor is developed and tested on Windows. Its child-window viewports have not been tested on other systems.