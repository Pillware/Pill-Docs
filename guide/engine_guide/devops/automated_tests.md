# Automated tests

## Summary

`devops/tests` holds Pill's pass/fail checks: Python scripts that each check one thing and exit with a non-zero code when it is broken. Most of them are fast **static checks** that read sources and manifests. The important ones are **end-to-end suites**: they start a real development host, edit real source files, and judge the result by the host's log output. A rule-based selector runs only the checks a change needs, and the full gate (`verify.py`) runs everything CI runs.

## At a glance

| Kind                      | What it does                                                          | Typical time     | Edits your files?          |
| ------------------------- | --------------------------------------------------------------------- | ---------------- | -------------------------- |
| **Static checks**         | read Rust sources, manifests and suite code; no host, no build        | under 20 s       | no                         |
| **End-to-end suites**     | build and start a development host, edit test project files, read its log | 15 s to 3 min    | **yes, and restore them**  |
| **Editor suite**          | the same, driving the real `pill_editor` through a scripted channel   | about 5 min      | yes, and restore them      |
| **Build and smoke checks** | build a shipping, web or example executable and check that it runs  | 10 s to 2 min    | build output only          |

| Command                                      | Runs                                                        | Recorded time        |
| -------------------------------------------- | ----------------------------------------------------------- | -------------------- |
| `python devops/ci_cd/check_relevant.py`      | only the checks the current change needs                    | median 4.5 min       |
| `python devops/tests/test_<name>.py`         | one suite                                                   | seconds to minutes   |
| `python devops/tests/run_all.py`             | every suite, tier by tier                                   | tens of minutes      |
| `python devops/ci_cd/verify.py`              | the full gate: every suite CI runs, clippy, unit tests, docs | median 15 min (warm build) |

## Why are the tests built this way?

Pill's central feature, hot reload, only exists in a running process. A module is rebuilt, a DLL is swapped, data is migrated, and the project keeps running. Unit tests cannot show that this works, because the interesting failures sit between processes, builds and files: a DLL built with different features, a reload that loses data, a watcher that misses an edit. So the important suites do what a developer does: they start a host, change a file, and watch what happens.

**The host's log is the contract.** A suite never inspects engine memory. It waits for a log line such as `extension hot reload complete` and checks the output after an edit: the lines it requires are there, the lines it forbids are not, and no crash signal (`panicked at`, `STATUS_ACCESS_VIOLATION`) appeared. This keeps the suites independent of the engine's internals. The price is that a reworded log line breaks a suite without any compiler error, which is why static checks guard the log text (see [How precise are they?](#how-precise-are-they)).

**Real files, restored.** The suites edit tracked files in the working tree, such as a test project's `src/lib.rs` or `pill_spline.rs`, because that is the only way to trigger the host's real watchers. Every suite backs the files up first and restores them, including when it fails.

**Cheap checks first.** `run_all.py` runs the static tier before the slow ones. A broken matcher or a reworded log line then fails in seconds, not twenty minutes into a run.

## What are test projects?

A **test project** is a small Pill project that exists only so the suites have something to run. It has everything a real project has: a `project_settings.yaml`, a `Cargo.toml` or a `.csproj`, `src/` and `res/`. The host loads it through `PROJECT_PATH` exactly like your own project, so a suite exercises the real loading, building and reloading paths.

There are three, in `devops/tests/projects/`:

| Test project | Kind | Used for                                                                                                         |
| ------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| `native/`    | Rust | everything that edits and reloads: hot reload, hot patching, schema migration, resources and settings surviving a reload, the shipping bundle. It loads the `pill_spline` extension, so module reloads and the module-to-project cascade can be tested |
| `scene/`     | Rust | everything that mostly reads: the editor, picking, extra windows, the browser build, asset reimport, the UI theme. A camera and three models, sized so an editor click at the center of a viewport hits a mesh. It loads no extensions, so its builds stay fast |
| `managed/`   | C#   | the Rust/C# bridge, C# hot reload, the Roslyn analyzers and the managed iteration benchmark                      |

**How a suite uses one.** A suite starts the host with `PROJECT_PATH` pointing at a test project, then changes the project the way a developer would and checks how the host reacts:

> **Example:** `test_hot_reload_migration.py` runs against `native/`. For each scenario it rewrites a component struct in `native/src/lib.rs`, for example by adding a field. The host notices the save, rebuilds the project, reloads it and migrates the stored components. The suite then checks the migration log line and the entity counts and field values the project prints. Before the next scenario it puts the original source back and waits for that reload too.

Some suites go further: `test_hot_reload_migration.py` writes its own `project_settings.yaml` for `native/` so the extension list is exactly what the scenario needs, and `test_csharp_bridge.py` adds a probe file to `managed/` and deletes it afterwards. Every change is restored when the suite ends.

**Why test projects, and not the examples?**

- **The suites own them.** A suite depends on exactly what a test project contains and prints: its components, its log lines, its file layout. An example can be changed freely for a demo; a test project changes together with the suites that read it.
- **A clean checkout can run them.** The examples under `examples/local/` are a developer's own checkout. The test projects are committed, so CI and a fresh clone run the same gate.
- **They stay small.** All three together are about 2.3 MB, and `test_suite_standards.py` fails when they grow past 10 MB or when the same large file is committed into two of them. Small projects build fast, so the suites stay fast.

**Rules for test projects:**

- **No suite writes a test project's path.** The paths live in `devops/core/projects.py` (`NATIVE_PROJECT_*`, `SCENE_PROJECT_*`, `MANAGED_PROJECT_*`), and `test_suite_standards.py` fails a suite that spells one itself. Moving a test project then changes one file.
- **A test project is named after its folder** (`native`, `scene`, `managed`). The host keys the DLLs it stages by package name, so two projects with the same package name would overwrite each other's DLL.
- **A module's own demo is not a test project.** It belongs in that module's `examples/` folder, which `test_extension_examples.py` builds and runs.
- **Changing a test project can change a suite's expectations.** The suites wait for the lines a test project prints and count the entities it creates, so update the suite in the same change.

## How do I run them?

### Run only what your change needs

`check_relevant.py` is the everyday command. It compares the working tree with `HEAD`, untracked files included, matches the changed paths against a table of repository areas, and runs only those areas' checks: formatting and the coding-standards lint for Rust changes, the area's `cargo test` targets, the suites that cover the area, and the few `verify.py` steps that guard it.

```powershell
python devops/ci_cd/check_relevant.py --dry-run      # print the selection, run nothing
python devops/ci_cd/check_relevant.py                # run the selection
python devops/ci_cd/check_relevant.py --paths modules/engine/pill_core/src/telemetry.rs
python devops/ci_cd/check_relevant.py --list-rules   # the area table
```
```cmd
REM print the selection, run nothing
python devops/ci_cd/check_relevant.py --dry-run
REM run the selection
python devops/ci_cd/check_relevant.py
python devops/ci_cd/check_relevant.py --paths modules/engine/pill_core/src/telemetry.rs
REM the area table
python devops/ci_cd/check_relevant.py --list-rules
```
```bash
python devops/ci_cd/check_relevant.py --dry-run      # print the selection, run nothing
python devops/ci_cd/check_relevant.py                # run the selection
python devops/ci_cd/check_relevant.py --paths modules/engine/pill_core/src/telemetry.rs
python devops/ci_cd/check_relevant.py --list-rules   # the area table
```

A changed file that no rule recognizes falls back to `verify.py --quick`, so no change passes unchecked. When the selection includes the editor, the script puts `cargo build -p pill_editor` directly before the editor suites (see [Why must the editor build come right before its suite?](#why-must-the-editor-build-come-right-before-its-suite)).

> **Example:** you change `modules/engine/pill_core/src/telemetry.rs`. `--dry-run` prints four checks: `verify:fmt` and `verify:coding-standards` (a Rust file changed), `cargo test` for `pill_core`, and `test_editor_revision.py` (the suite the `pill-core` rule names). The editor suite, the hot-reload set and the shipping smoke test are not selected.

### Run one suite, a tier, or everything

Every suite runs on its own, from any folder. `run_all.py` runs them as a group.

```powershell
python devops/tests/test_hot_reload_suite.py                 # one suite
python devops/tests/run_all.py                               # every suite, tier by tier
python devops/tests/run_all.py --list                        # the run order
python devops/tests/run_all.py --tier static                 # static, host, editor or build
python devops/tests/run_all.py --set hot-reload              # a named set
python devops/tests/run_all.py --only test_ui_theme.py test_picking.py
python devops/tests/run_all.py --keep-going                  # do not stop at the first failure
python devops/tests/run_all.py --catalogue                   # each suite's last recorded result
```
```cmd
REM one suite
python devops/tests/test_hot_reload_suite.py
REM every suite, tier by tier
python devops/tests/run_all.py
REM the run order
python devops/tests/run_all.py --list
REM static, host, editor or build
python devops/tests/run_all.py --tier static
REM a named set
python devops/tests/run_all.py --set hot-reload
python devops/tests/run_all.py --only test_ui_theme.py test_picking.py
REM do not stop at the first failure
python devops/tests/run_all.py --keep-going
REM each suite's last recorded result
python devops/tests/run_all.py --catalogue
```
```bash
python devops/tests/test_hot_reload_suite.py                 # one suite
python devops/tests/run_all.py                               # every suite, tier by tier
python devops/tests/run_all.py --list                        # the run order
python devops/tests/run_all.py --tier static                 # static, host, editor or build
python devops/tests/run_all.py --set hot-reload              # a named set
python devops/tests/run_all.py --only test_ui_theme.py test_picking.py
python devops/tests/run_all.py --keep-going                  # do not stop at the first failure
python devops/tests/run_all.py --catalogue                   # each suite's last recorded result
```

`run_all.py` stops at the first failure by default. A failed suite may have left the tree in the middle of an edit, so the next suite's result would not be trustworthy.

The end-to-end suites share two flags:

- `--timeout-scale S` multiplies every timeout. Use it on a slow or busy machine.
- `--skip-build` reuses the built `pill_standalone` instead of building it. The suite still checks that the binary was built for the same configuration and is not older than the sources, and refuses to run otherwise.

### Run the full gate

`verify.py` is the list of checks CI runs, and a local run is the same gate.

```powershell
python devops/ci_cd/verify.py --quick      # formatting, clippy, the static lints
python devops/ci_cd/verify.py              # everything
python devops/ci_cd/verify.py --list       # every step and the command it runs
python devops/ci_cd/verify.py --only editor
```
```cmd
REM formatting, clippy, the static lints
python devops/ci_cd/verify.py --quick
REM everything
python devops/ci_cd/verify.py
REM every step and the command it runs
python devops/ci_cd/verify.py --list
python devops/ci_cd/verify.py --only editor
```
```bash
python devops/ci_cd/verify.py --quick      # formatting, clippy, the static lints
python devops/ci_cd/verify.py              # everything
python devops/ci_cd/verify.py --list       # every step and the command it runs
python devops/ci_cd/verify.py --only editor
```

Besides the suites in `devops/tests`, the gate runs `cargo fmt`, clippy in four build configurations (default, development, shipping, rendering), the Rust unit and doc tests (the default and development lanes through `cargo nextest`, plus a shipping-engine and a metrics lane through `cargo test`) and the documentation build. Use it at stage boundaries and milestones, not after every edit.

## What does each suite check?

`run_all.py` sorts every suite into a **tier**, and the tiers run in this order. The authoritative list is the catalogue in `devops/tests/README.md`, generated from each suite's own header.

**Static tier** - no host, no build:

| Suite                              | Checks                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `test_log_contract.py`             | every log text a suite waits for can still be printed by the Rust sources                   |
| `test_harness_parsing.py`          | the parsers the suites judge with, against real captured host output                        |
| `test_suite_standards.py`          | the suites follow their own rules (header, shared helpers, no unexplained sleeps)           |
| `test_coding_standards.py`         | every `.rs` file's comments and layout                                                      |
| `test_renderer_boundaries.py`      | only GPU modules link wgpu; the renderer API and data crates stay GPU-free                  |
| `test_engine_layout.py`            | the engine core never links `pill_engine` or reads a registry                               |
| `test_engine_feature_drift.py`     | every build the host starts resolves the same engine features as the host                   |
| `test_asset_metadata.py`           | no orphaned `.meta` files and no duplicate asset guids                                      |
| `test_keycode_mirror.py`           | the C# `KeyCode` mirror matches the engine's key table                                      |
| `test_example_discovery.py`        | the rule that finds extension examples                                                      |
| `test_shipping_bundle_roots.py`    | a shipping bundle packs every linked module's `res` and `shader_sources`                    |

**Host tier** - a real development host:

| Suite                                  | Checks                                                                                  |
| -------------------------------------- | --------------------------------------------------------------------------------------- |
| `test_hot_reload_suite.py`             | project and module hot reload keep data, migrate schemas, cascade, roll back, restart   |
| `test_hot_reload_migration.py`         | each kind of component schema change migrates, resets or is refused and rolled back     |
| `test_hot_patch_coverage.py`           | a body-only edit in every loaded crate is patched in place instead of reloaded          |
| `test_patch_bookkeeping.py`            | a failed reload keeps the patch records, so a rollback still works                      |
| `test_reload_edit_during_build.py`     | a save made during a build wins                                                         |
| `test_host_switches.py`                | each `PILL_*_HOT_*` switch turns off exactly one watcher                                |
| `test_shared_component_identity.py`    | a type linked by two DLLs shares one registration with `#[pill(shared)]`                |
| `test_resource_layout_fingerprint.py`  | a resource survives unrelated edits and is rebuilt when its layout file changes         |
| `test_manager_settings.py`             | settings assets are written from defaults, applied live, and refused safely             |
| `test_module_resource_assert.py`       | a missing required module resource stops the host with the module and path              |
| `test_hot_reload_assets.py`            | `.meta` edits, broken and restored images, moved files and material edits reimport live |
| `test_shader_recompile.py`             | an `.hlsl` edit is re-cooked and rebuilt on the GPU                                     |
| `test_ui_theme.py`                     | the game's `.theme` override, live re-apply, refusals and fonts                         |
| `test_render_chains.py`                | a `.pipeline` loads and its pass draws                                                  |
| `test_picking.py`                      | picking returns the entity under the cursor and outlines it                             |
| `test_multi_surface.py`                | one renderer drives two windows, also across a renderer reload                          |
| `test_editor_revision.py`              | a module reload bumps the editor's revision counter                                     |
| `test_csharp_bridge.py`                | C# hot reload: mirror layout, calls both ways, assembly swaps keeping state, migration  |

**Editor tier** - `test_editor_egui.py` drives the real editor through about a dozen step areas: startup, shell patch and reload, dock and viewports, selection and gizmo, inspector and assets, systems and preferences, theme layers, the game view, the toolbox and grid, recovery and a clean exit.

**Build tier** - `test_shipping_smoke.py` (a shipping binary runs and contains no reload machinery), `test_web_smoke.py` (a browser build draws frames with WebGPU in headless Chrome or Edge), `test_examples.py` (every example builds in the release profile), `test_extension_examples.py` (every extension example builds and runs), `test_wrapper_entry_points.py`, `test_engine_exports.py` and `test_csharp_analyzer.py`.

**Manual** - `test_pbr_native.py` needs a real screen and a binary argument, so it never runs by default.

## How long do they take?

The times below come from runs recorded under `.construction_site/runs/` on the development machine, with a warm build tree. A first build, or one after an engine feature change, adds several minutes.

| Suite or run                             | Recorded time                                   |
| ---------------------------------------- | ----------------------------------------------- |
| `test_log_contract.py`                   | about 3 s                                       |
| `test_coding_standards.py`               | about 7 s, at most 18 s                         |
| `test_harness_parsing.py`                | about 15 s                                      |
| `test_ui_theme.py`, `test_manager_settings.py`, `test_hot_patch_coverage.py`, `test_render_chains.py`, `test_picking.py`, `test_hot_reload_assets.py` | 15 to 25 s on average |
| `test_shader_recompile.py`, `test_resource_layout_fingerprint.py` | about 30 s, up to 2.5 min when they rebuild |
| `test_shared_component_identity.py`      | about 45 s                                      |
| `test_reload_edit_during_build.py`       | about 55 s                                      |
| `test_hot_reload_migration.py`, `test_host_switches.py` | about 1.5 min, up to 4 min        |
| `test_hot_reload_suite.py`, `test_csharp_bridge.py` | about 1.7 min, up to 2.7 min           |
| `test_editor_egui.py`                    | about 5 min (median of 38 runs), plus the editor build |
| `test_shipping_smoke.py`                 | about 12 s, up to 1.5 min with a build          |
| `test_web_smoke.py`                      | about 50 s                                      |
| `check_relevant.py` (one change's selection) | median 4.5 min, 90th percentile about 10 min |
| the hot-reload set (`--set hot-reload`)  | 15 to 20 min plus the first build               |
| `verify.py` (the full gate)              | median about 15 min with a warm build tree      |

`work checks` in the construction site prints the current medians for every tagged check, so this table can be refreshed from it.

## How precise are they?

A pass shows that the host printed the expected lines, printed none of the forbidden ones, and did not crash, within the time limit. It is strong evidence about behavior that logs describe, and weak evidence about anything they do not.

**What a pass proves well:**

- A reload, patch, migration or refusal happened, because the host logs each of them with its own text, and the suites check the counts and values those lines carry. `test_hot_reload_migration.py`, for example, checks the migrated entity counts and field values, not just that a migration ran.
- Nothing crashed: every window of output is checked for panic and access-violation text.
- The edit that a suite waits for is the one that caused the line. Each suite records the output line number **before** it writes the file, and only reads output after that point, so an older reload cannot satisfy a newer wait. `test_suite_standards.py` fails a suite that takes that anchor after the write.

**What keeps the log contract honest:**

- `test_log_contract.py` collects every `*_TOKEN` text the suites wait for and requires a Rust string literal that can print it, either literally or through the placeholders of a format string. A token that no Rust code can print fails in under a second, instead of a suite timing out minutes later.
- `test_harness_parsing.py` tests the parsers on real captured output. A parser that stops matching returns nothing rather than raising, so this is the only place where that failure is visible.
- `devops/core/log_layout.py` owns the line's layout (`message | field=value`), so a format change touches one module, not every pattern.

**Where a result can be wrong:**

| Risk                    | How it happens                                                                                                      | What limits it                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| false failure (timeout) | the machine is busy, a cold build takes longer than the wait                                                        | `--timeout-scale`; waits are generous             |
| false failure (moved text) | a log line was reworded or its level lowered, but the behavior is fine; the suite reports `Missing required token` | `test_log_contract.py` catches most rewordings first |
| false pass (loose match) | a token is a substring of an unrelated line                                                                        | tokens carry a tag or field, such as `| module=pill_spline` |
| report-only result      | `test_hot_patch_coverage.py` reports crates with no fast path without failing                                       | `--strict` makes it fail                          |
| known drift             | suites tagged `nightly-allowed-to-fail` are logged but do not fail the nightly run                                   | the tag is visible in the catalogue               |

The recorded history shows the suites are not perfectly stable. Across recent runs, `test_hot_reload_suite.py` passed 27 of 38 times and `test_host_switches.py` 10 of 14. Those counts include runs during development, when the code under test really was broken, so they are an upper bound on flakiness, not a measurement of it.

## What do they cover, and what not?

**Covered well:** hot reload and hot patching of Rust projects and extensions, schema migration, shared type identity across DLLs, resource survival, the hot-reload switches, asset reimport, shader recompiling, settings assets, the theme pipeline, the C# bridge and C# hot reload, the egui editor's main workflows, shipping and browser builds starting and running, and the build rules (renderer boundaries, engine layout, feature agreement, export counts).

**Covered by other checks in the gate:** the Rust unit and doc tests, which `verify.py` runs in a default, a development, a shipping-engine and a metrics lane, plus clippy in four build configurations.

**Not covered, or only partly:**

- **Rendered images.** No suite compares pixels with a reference image. Render suites check draw counts, presented frames, pick results and the absence of GPU errors. A wrong color or a misplaced object passes.
- **Performance.** No suite asserts a time budget. Measurement lives in the untracked `local/devops/` tree, which reports numbers instead of passing or failing.
- **The C# runtime's own unit tests.** `modules/csharp/pill_csharp_runtime/tests` has a test program, but no suite or gate step runs it.
- **The windowed frontend on a real screen.** `test_pbr_native.py` is manual.
- **Operating systems other than Windows.** Every suite runs on Windows, and some are Windows-only by design (`test_wrapper_entry_points.py` reads PE export tables; the host lock uses `taskkill`).
- **CI.** `ci.yml` runs `verify.py` on manual dispatch only, and the nightly schedule is disabled. Most end-to-end suites run only when a developer, or `check_relevant.py`, starts them.

## How is a suite constructed?

A suite is a `test_*.py` file with a header, built on shared helpers in `devops/core`.

**Discovery by header.** `run_all.py` finds every `test_*.py` file in `devops/tests` by itself. The suite's docstring declares what it protects and where it runs:

```python
"""End-to-end acceptance for ...

PROTECTS: what the suite guards, in one line.
TIER: host
SETS: hot-reload, nightly
RUN: manual - why it cannot run unattended (optional)
"""
```

A suite without a valid `TIER:` stops `run_all.py` with an error, so a new suite cannot silently drop out of the run. The README's catalogue is generated from these headers with `run_all.py --write-catalogue`.

**The shared helpers** (`devops/core/`):

| Module             | What it provides                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| `suite_common.py`  | the host lock, `HostPosture` (one build configuration for both the build and the launch), launching and stopping the host, `OutputMonitor`, `require`, backups and restores, the shared tokens |
| `log_layout.py`    | the log line's layout and the pattern builders                                                     |
| `projects.py`      | the test projects' paths; a suite never spells one itself                                          |
| `scenario.py`      | the shared scenario runner for the host suites                                                     |
| `editor_session.py`, `editor_log_tokens.py` | the editor's scripted session and its log tokens                          |
| `test_report.py`   | the `[OK]`, `[FAIL]` and summary output                                                            |

**One end-to-end run, step by step:**

1. Take the host lock, an exclusive lock file in the temp folder. A second suite prints one `[WAIT]` line and queues. The operating system releases the lock when the process exits, so a killed suite never blocks the next one.
2. Stop leftover hosts from earlier runs. This happens under the lock, so it can never stop a host another suite is driving.
3. Back up every file the suite may touch (`BackupRegistry.capture`).
4. Build `pill_standalone` for the suite's `HostPosture`, or verify the existing binary with `--skip-build`.
5. Start the host with `PROJECT_PATH` set to a test project.
6. Read the output on a thread (`OutputMonitor`). Every line gets a sequence number, so a scenario can ask for "everything since line N". The project's very frequent `counter tick` lines go to a separate small buffer, so they cannot push reload lines out.
7. Run the scenarios. Each one records the line count, edits a file, waits for a token with `require(...)`, and checks the output since its anchor.
8. Restore the file between scenarios (`restore_one`) and wait for the reload that the restore causes, so its output cannot leak into the next scenario.
9. In `finally`, restore every backed-up file and stop the host.

**Edits and restores.** `atomic_write` writes a temporary file and renames it over the original, so the watcher never sees half a file. Suites that must keep line endings exactly write raw bytes instead. `restore_all()` writes the original bytes back and, by default, the original timestamp too, so Cargo does not rebuild what it already built from those bytes. When the last thing the host built was the edited code, the suite keeps a fresh timestamp instead, so the next host start rebuilds the original.

**Test projects.** Every end-to-end suite runs against one of the three projects in `devops/tests/projects/`; see [What are test projects?](#what-are-test-projects).

**The editor suite** is split by area. Each `editor_steps_*.py` file declares one `AREA`, the suite finds them by convention and runs them in order, and `--steps` runs a subset when every name it needs comes from inside that subset.

**Rules the suites must follow**, checked by `test_suite_standards.py`:

1. Every suite has the header `run_all.py` reads.
2. No suite copies a shared helper instead of importing it.
3. Every `sleep` says why it waits.
4. Every output anchor is taken before the write it anchors.
5. Every project path comes from `core.projects`.
6. The test projects stay inside their size budget.
7. Every `sleep` is a poll interval or a named exception.
8. Every module-level name is defined once.

## Why must the editor build come right before its suite?

The editor's build writes the shared engine DLLs with the widest feature set in the workspace, and any narrower Cargo command in between rewrites them.

`cargo build -p pill_editor` writes `pill_core` and `pill_engine_core` into `modules/target/debug` with the editor's renderer and UI features. A later `cargo build` or `cargo test` of another package writes the same files with fewer features. Their exported symbol names then carry a different feature hash, and the editor fails at process start with `0xC0000139` (entry point not found). So: build the editor, then run its suite, with nothing in between. `check_relevant.py` and `verify.py --only editor` already order their steps that way.

## Limitations

- **The suites edit your working tree.** Do not edit a file a running suite owns: the final restore writes back the content captured at the start and silently overwrites your change. The README lists the files each suite edits.
- **A hard kill skips the restore.** `Ctrl+C` is safe, because the `finally` blocks still run. Killing the process (Task Manager, closing the terminal, a run reaching its timeout) leaves the edits on disk. Recover tracked files with `git status` and `git checkout -- <file>`. Untracked files cannot be recovered that way.
- **One host suite at a time.** The host lock queues them, so running several in parallel gains nothing.
- **Windows only.** The suites use Windows process tools and Windows-specific checks, and have not been run on another system.
- **Log text is part of the contract.** Changing a log line that a suite waits for means changing the suite's token, and `test_log_contract.py`, in the same commit.
- **Timing-sensitive waits.** A slow machine or a cold build can time out a suite that would pass; raise `--timeout-scale` before suspecting the code.

## How can programming agents use them?

An agent uses the same suites as a person, with a few extra rules, because the person cannot see a background process and the suites change shared files.

**Start every long run through the run wrapper.** Any suite, `verify.py`, `check_relevant.py` or host run that may take more than about a minute goes through `.agents/site/agent_run.py`. The wrapper records the command, its full output, its status and the agent's notes under `.construction_site/runs/<run id>/`, so the person can follow it with `list` and `tail`. The repository's `require_run_wrapper.py` hook refuses a background shell command that skips the wrapper.

```powershell
python .agents/site/agent_run.py start --label hot-reload --purpose "check the telemetry change" --timeout 900 --stall 300 --item W-0219 --check hot-reload -- python devops/tests/test_hot_reload_suite.py
python .agents/site/agent_run.py note <run> "waiting for the module reload line"
python .agents/site/agent_run.py wait <run> --until "PASSED" --max 900
python .agents/site/agent_run.py stop <run>
```
```cmd
python .agents/site/agent_run.py start --label hot-reload --purpose "check the telemetry change" --timeout 900 --stall 300 --item W-0219 --check hot-reload -- python devops/tests/test_hot_reload_suite.py
python .agents/site/agent_run.py note <run> "waiting for the module reload line"
python .agents/site/agent_run.py wait <run> --until "PASSED" --max 900
python .agents/site/agent_run.py stop <run>
```
```bash
python .agents/site/agent_run.py start --label hot-reload --purpose "check the telemetry change" --timeout 900 --stall 300 --item W-0219 --check hot-reload -- python devops/tests/test_hot_reload_suite.py
python .agents/site/agent_run.py note <run> "waiting for the module reload line"
python .agents/site/agent_run.py wait <run> --until "PASSED" --max 900
python .agents/site/agent_run.py stop <run>
```

- **Always pass `--timeout`**, so a wait on the wrong text ends instead of hanging. `--stall` warns when the output goes silent.
- **Tag runs that belong to a work item** with `--item` and `--check`. `work ingest` turns finished tagged runs into events, and `work checks` reports their medians, which is where the times in this document come from.
- **Tell the person the run id and log path** after starting a run, and add a `note` whenever the thing being waited for changes.
- **Stop a run that waits for something that will never come**, instead of waiting for its timeout. Then do the cleanup the run would have done: check `git status` and restore any file the suite left edited.

**Pick the smallest check that answers the question.**

1. While iterating: `python .agents/hooks/check_changed.py` (formatting and the coding-standards lint on the changed Rust files, in seconds). Run it before calling any task done.
2. To check a change: `check_relevant.py`, through the wrapper. Use `--dry-run` first to see the selection and its reasons.
3. At stage boundaries and milestones: `verify.py`. After a failure, fix it and re-run the scoped selection, not the whole gate.

**Read a failure before changing code.** A suite prints `[OK]` and `[FAIL]` lines, and the run's `output.log` has every host line echoed as `[std] ...`. `Missing required token` often means the log text moved, not that the behavior broke: search for the token in `modules/` and run `test_log_contract.py`. A timeout on a cold build usually needs `--timeout-scale`, not a fix.

**Respect the shared working tree.**

- Do not edit a file a running suite owns. Its restore would overwrite the edit.
- Do not run two host suites at once; they queue anyway.
- Build `pill_editor` right before the editor suite, with nothing in between.
- When a change rewords a log line, update the suite's token and `test_log_contract.py` in the same change.

**Add checks the same way the suites are built.** A new suite needs the `PROTECTS:` and `TIER:` header, the shared helpers from `devops/core`, its output anchors taken before each write, and tokens in `*_TOKEN` constants. If it guards a path that no `check_relevant.py` rule matches, add the area there, or the scoped selection will fall back to the quick gate for it.

## Where is this in the code?

- `devops/tests/` - the suites, `run_all.py`, the editor step areas, and `README.md` with the generated catalogue and the table of files each suite edits.
- `devops/tests/projects/` - the three test projects, with a `README.md` describing each.
- `devops/core/` - the shared helpers: `suite_common.py`, `log_layout.py`, `projects.py`, `scenario.py`, `editor_session.py`.
- `devops/ci_cd/check_relevant.py` - the change-based selection and its area rules.
- `devops/ci_cd/verify.py` - the full gate.
- `.github/workflows/ci.yml`, `.github/workflows/nightly.yml` - the CI workflows.
- `.agents/site/agent_run.py` - the run wrapper for agents.
