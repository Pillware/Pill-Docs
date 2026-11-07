# Build configurations inside the engine

## Summary

A build configuration is four independent choices: the mode, the Rust compiler profile, the window and the .NET configuration. The mode is the one that changes how Pill is put together. Development mode links the engine core dynamically and lets the development host build and load every module as a separate DLL, so hot reload works. Shipping mode generates a crate that names the project and its extensions as ordinary dependencies and links everything statically into one executable. The other three choices change how the same pieces are compiled, not which pieces exist.

## At a glance

| Build axis            | Where it is decided                                   | What it changes                                                                 |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| Mode                  | `pill_standalone` features `development` / `shipping` | whether the development host or the generated shipping bundle provides the project |
| Rust compiler profile | `cargo --profile`                                     | optimization; the `release` lineage also means static linking and fat LTO       |
| Window                | `pill_standalone` feature `rendering`                 | whether `winit` and the GPU renderer module are part of the run                |
| .NET configuration    | `PILL_CSHARP_CONFIGURATION` (development only)        | whether the C# project and runtime are built optimized                          |

```text
 development mode                                   shipping mode
 ────────────────                                   ─────────────
 pill_standalone (.exe on Windows)                  pill_standalone (.exe on Windows)
   └─ pill_development_host                           └─ pill_player
        │ spawns cargo / dotnet builds                     └─ pill_shipping_bundle (generated)
        ▼                                                       ├─ the project      ┐
   project DLL, extension DLLs ──┐                              ├─ its extensions   ├─ one image
                                 ▼                              └─ engine core      ┘
   pill_core.dll/.so + pill_engine_core.dll/.so      asset pack embedded in the executable
   (one shared copy)
```

## Why are there two modes?

Hot reload and a fast, self-contained shipped program need opposite linking, so Pill builds them in two different ways.

Hot reload replaces a module while the project keeps running. The world, the asset store, the logger and the Rayon pool must survive that replacement, so they cannot live inside the module that is replaced. Development mode keeps them in the engine core, `pill_core` and `pill_engine_core`, which are built as shared Rust `dylib`s. Every module links the same copy, and the host can unload and load modules around it.

A shipped program has the opposite needs. It should be fast, small and need no build tools. That means compiling everything together and letting the optimizer work across crate boundaries (`lto = "fat"`), which only works when everything is linked into one image.

The two cannot be mixed in one build. `modules/.cargo/config.toml` adds `-C prefer-dynamic` to every build in the workspace so modules link the shared engine core, and on Windows `rustc` refuses `-C prefer-dynamic` together with the `release` profile's `lto = "fat"`. That is why a plain `cargo build --release` fails, and why shipping has its own script.

## How does development mode build a project?

The development host builds the project and its extensions itself, with the same settings it was built with, and loads the results as DLLs.

The frontend comes first. `cargo run --package pill_standalone` uses the default feature `development`, which links `pill_development_host`. The `-C prefer-dynamic` flag makes the executable import the engine core as shared libraries.

At startup the host writes a small wrapper crate for each module it has to build. The project gets `projects_generated/host_project_<name>`, and each extension crate gets `extensions/<extension>/generated/host_module_<crate>`. Each wrapper is a `cdylib` that contains the module and exports its entry points. The wrappers are members of the engine workspace, so they share its `Cargo.lock`.

The host then runs one `cargo build` for them (`host_cargo_command`). Every argument in that command keeps the module compatible with the running host:

| Argument or variable                 | Why it is there                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `--profile <host's profile>`         | the host's profile is recorded at compile time (`PILL_HOST_PROFILE_DIRECTORY`); a module built in another profile has different symbol names |
| `--features pill_engine/development` | turns on the engine's development-only code, such as the hot patch slots                          |
| the host's engine features           | passed by `apply_cargo_host_overrides`, so `profiling` and the rest match the host                |
| `CARGO_TARGET_DIR=target/hot/build`  | builds into a private folder, so cargo never deletes a DLL the host has loaded                    |
| `--offline`                          | avoids waiting on the package cache lock that rust-analyzer can hold                              |

The features matter because of how Rust names symbols. Every exported function name in `pill_core` and `pill_engine_core` contains a hash of the crate's build inputs, including its features and profile. A module built with different features asks for names the loaded engine core does not export, and the load fails: "procedure could not be found" on Windows, `undefined symbol: …` on Linux.

> **Example:** you start the host with `--features rendering,profiling`. The engine core it loads was built with `profiling`. When the host builds your project, it passes the same engine features, so your project's DLL asks for the same symbol names. Built by hand without `profiling`, the same project would fail to load.

After the build, the host copies each DLL into a private hot-load folder under a unique name and loads the copy. The build output stays free for the next build, which matters on Windows, where a loaded DLL is locked.

A development executable also needs the Rust standard library as a shared library, `std-<hash>`, at load time. On Windows, the standalone's build script copies `std-*.dll` beside the executable, because the Windows loader searches the executable's folder. The script does nothing on other systems; on Linux the loader has to find `libstd-*.so` another way, for example through `LD_LIBRARY_PATH`.

## How does shipping mode build a project?

The shipping script turns the project's settings into a crate, then builds one statically linked executable from it.

`devops/ci_cd/build_shipping.py` runs these steps:

1. **Clear `RUSTFLAGS`.** This removes `-C prefer-dynamic`. Cargo has no way to make `build.rustflags` depend on the profile, and `--config build.rustflags=[]` does not help, because Cargo merges config arrays instead of replacing them. An empty `RUSTFLAGS` in the environment is the only switch that works, which is why this is a script and not a Cargo alias.
2. **Generate the shipping bundle.** `devops/tools/generate_shipping_bundle.py` reads `project_settings.yaml` and writes `build/pill_shipping_bundle/`. That crate lists the project and every extension under `modules:` as normal dependencies and exposes them through the static registration contract (`StaticProject`, `StaticModule`). Cargo resolves dependencies before any build script runs, so a `build.rs` could not add dependencies from a YAML file; the generator has to run before Cargo.
3. **Pack the assets.** The bundle's `build.rs` packs the project's `res`, plus every linked module's `res` and cooked `shader_sources`, with `pill_assets::write_asset_pack_with_roots`. The project's file wins when two have the same name. `res/editor/` is skipped, so editor-only files never ship. The bundle embeds the pack as `StaticProject::asset_pack`, and the player mounts it in the asset store.
4. **Build.** `cargo build --package pill_standalone --no-default-features --features shipping` in the `release` profile, or the profile given with `--profile`. The `shipping` feature links `pill_shipping_bundle` and leaves `pill_development_host` out entirely.
5. **Copy the output.** Cargo's target folder is redirected to `<project>/build/build_meta/pill_build_data`, and the finished files are copied to `<project>/build/<timestamp>/` with a report of sizes and checksums.

The project's `logging:` settings are baked into the bundle as well, because a shipped program has no host that reads `project_settings.yaml`.

**C# projects** take extra steps. The generator writes a bundle whose `project_backend()` returns the C# bridge's backend instead of a Rust dependency, and the script builds the managed code before Cargo runs:

| Option         | Managed build                          | Backend                        | Shipped files                                   |
| -------------- | -------------------------------------- | ------------------------------ | ----------------------------------------------- |
| default        | `dotnet build -c Release`              | `CSharpBackend::coreclr`       | the executable plus the project and runtime assemblies; needs an installed .NET |
| `--csharp-aot` | `dotnet publish -p:PublishAot=true`    | `CSharpBackend::native_aot`    | the executable plus one self-contained native library; no .NET install, no JIT |

The generated bundle is one project's build output, not part of the repository. The committed `build/pill_shipping_bundle` is a stub that refuses to compile. `generate_shipping_bundle.py --restore-stub` writes the stub back, and `devops/tests/test_shipping_smoke.py` fails when a generated bundle is committed.

## How does the browser build differ?

The browser build is shipping mode for `wasm32-unknown-unknown`, built outside the engine workspace.

`devops/tools/build_web.py` runs the bundle generator with `--web`. That also writes `build/pill_web_app`, a `cdylib` whose start function runs the bundle's project through `pill_web` on the page's canvas, or through `pill_web_editor` for an `--editor` build.

The web app crate has a `[workspace]` of its own and is built from its own folder. The engine workspace's `.cargo/config.toml`, with its `-C prefer-dynamic`, therefore does not apply. The script copies the engine's `Cargo.lock` in first, so the browser build resolves the same dependency versions as the native one.

The asset pack cannot be embedded, because the browser downloads the module as one file. `--web` writes the pack beside the crate instead, the bundle names it in `StaticProject::asset_pack_url`, and `pill_web` fetches and mounts it before the project initializes.

| Build      | Optimized           | `wasm-opt`        |
| ---------- | ------------------- | ----------------- |
| default    | yes                 | yes, unless `--no-wasm-opt` |
| `--dev`    | no, with debug info | no                |

## How are impossible combinations refused?

Each impossible combination is refused at the earliest point that can see it, so it fails at build time instead of at load time.

| Combination                                       | Refused by                                    | How                                                     |
| ------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------- |
| neither `development` nor `shipping`              | `pill_standalone/src/main.rs`                 | `compile_error!`                                        |
| both `development` and `shipping`                 | `pill_standalone/src/main.rs`                 | `compile_error!`                                        |
| `development` in a `release`-lineage profile      | `pill_standalone/build.rs`                    | `panic!` when Cargo's `PROFILE` is not `debug`          |
| `cargo build --release` in the workspace          | `rustc`                                       | `-C prefer-dynamic` and `lto = "fat"` cannot be combined on Windows |
| a committed shipping bundle                       | the stub and `test_shipping_smoke.py`         | the stub does not compile; the test refuses a generated bundle |

The `build.rs` check relies on how Cargo reports custom profiles. `PROFILE` is `release` for any profile that inherits from `release`, and `debug` for any profile that inherits from `dev`. So `development-optimized`, which inherits from `dev`, passes, and `release-fast` and `release-with-debug` are refused.

A shipping build of `pill_standalone` must name the package (`--package pill_standalone`), never `--workspace`. The workspace also contains the editor, which depends on the development host, and Cargo would union that dependency back in and enable `development` again.

## How does the window axis work?

The `rendering` feature adds the window and the GPU renderer; everything else is the same in a headless run.

On `pill_standalone`, `rendering` links `winit` and `pill_input` and turns on rendering in `pill_player` and, in development mode, in `pill_development_host`. The renderer itself is split in two:

- The renderer's **data crate** (`pill_master_renderer_data`: components, assets, pipelines, shaders) is loaded first in every build, headless too. Projects depend on it, so their components exist in both postures.
- The renderer's **GPU module** (`pill_master_renderer`) is loaded only in a windowed build. It is the only renderer crate that links wgpu.

The project's `renderer:` key in `project_settings.yaml` picks which renderer is used, and `none` turns rendering off.

## How does the .NET configuration axis work?

The development host reads `PILL_CSHARP_CONFIGURATION` once at startup and builds the C# project and the C# runtime in that MSBuild configuration.

The value must be `Release` or `Debug`; `Release` is used when the variable is unset. `Debug` keeps local variables visible to a managed debugger, and `PILL_WAIT_FOR_MANAGED_DEBUGGER=1` pauses the runtime until one attaches. A shipping build ignores the variable and always builds C# in `Release`.

## Exceptions and limitations

**Optimized development builds need their own profile.** `release` cannot host hot reload, because its `lto = "fat"` refuses `-C prefer-dynamic`. `development-optimized` inherits from `dev` and only raises `opt-level` to 3. The host builds its modules in its own profile, so they follow automatically.

**The editor exists only in development mode.** `pill_editor` and `pill_web_editor` are development frontends. No shipping build compiles them, and a game build never builds an extension's `*_editor` crate.

**The C# runtime is not available in the browser.** The browser build supports Rust projects only.

**A host started by the dioxus CLI passes a target triple.** `dx` always builds with `--target <host triple>`, and Cargo folds the target into each crate's metadata hash. The host records the triple at compile time (`PILL_HOST_TARGET_TRIPLE`) and passes the same `--target` to its module builds, so the symbol names still match.

**Changing an axis rebuilds the engine.** The profile and the engine features are part of every crate's metadata hash, so switching between, for example, a `profiling` and a plain host, or between `debug` and `development-optimized`, compiles the engine again.

## Configuration

- `modules/.cargo/config.toml` - `-C prefer-dynamic` for every workspace build, and `rust-lld` on Windows.
- `modules/Cargo.toml` - the profiles: `release`, `release-fast`, `release-with-debug` and `development-optimized`.
- `modules/frontends/pill_standalone/Cargo.toml` - the `development`, `shipping`, `rendering`, `profiling` and `metrics` features.
- `modules/frontends/pill_standalone/src/main.rs` - the mode checks.
- `modules/frontends/pill_standalone/build.rs` - the profile check and, on Windows, the `std` DLL copy.
- `modules/build_support/stage_std_dylib.rs` - the shared `std` DLL copy, used by `pill_standalone` and `pill_editor`.
- `modules/hosting/pill_development_host/src/config.rs` - `host_cargo_command`, the recorded host profile and target triple, and `PILL_CSHARP_CONFIGURATION`.
- `modules/hosting/pill_development_host/src/build_runner.rs` - `apply_cargo_host_overrides` and the private module build folder.
- `devops/ci_cd/build_shipping.py` - the shipping build.
- `devops/tools/generate_shipping_bundle.py` - the shipping bundle and the web app crate.
- `devops/tools/build_web.py` - the browser build.
- [Build configurations (user guide)](../../user_guides/advanced/build_configurations.md) - how to pick and run a build configuration.
