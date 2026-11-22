# Help

## Summary

Most problems before the first window opens come from a missing tool, a stale DLL, or Windows refusing to load a freshly built one. This page covers those, then says where to ask when none of them matches.

## The setup script stopped. Can I run it again?

Yes. Both scripts skip whatever is already installed, so run the same script again after you fix whatever made the step fail. [Setup](../introduction/setup.md) lists the six steps and what each one installs, which is usually enough to see which tool is missing.

## Why does the first build take so long?

The first build compiles the whole engine, so it takes several minutes. After that, a build only redoes what changed. The setup script also downloads every Rust dependency once, because a hot reload builds with `cargo build --offline` and must never wait on the network. If a reload fails because a dependency is missing, run the setup script again - on Linux, without `--no-fetch`.

## Why does nothing appear in the window?

- **The host has no renderer.** A window and the renderer are the `rendering` feature of the host, so a run without `--features rendering` is headless and draws nothing. [Build configurations](../advanced/build_configurations.md) explains the window axis.
- **The project turns rendering off.** A project that sets `renderer: "none"` in `project_settings.yaml` loads no GPU module, so it draws nothing even in a windowed host. The `headless` example does exactly that.
- **The shader compiler is missing.** The renderer does not build without the Slang shader compiler (`slangc`), which [Setup](../introduction/setup.md) installs.

## Why does the editor not start?

The editor shares the engine's DLLs with everything else in `modules/`. If you build something in between, such as `pill_standalone` or a test, the DLLs no longer match the editor and it fails to start. Build `pill_editor` again right before you start it; [Editor](../editor/editor.md) has the commands.

## Why does a hot reload do nothing on Windows?

Smart App Control can block Windows from loading the DLLs that Pill builds while your project runs, and the host then reports `os error 4551`. Run the setup script again: it checks Smart App Control and prints what to do about it. The Windows notes in [Setup](../introduction/setup.md) have the details.

## Why did my edit not reload?

- Hot reload watches each module's source folder and ignores files in `target/`, `bin/` and `obj/`, so a change there does nothing.
- One save can produce several file events, so the watcher waits 60 milliseconds before it acts. If your editor writes a file in steps, raise `PILL_WATCH_DEBOUNCE_MS`.
- The switches can turn parts of it off. `PILL_HOT_RELOADING` stops the source watcher, `PILL_ASSETS_HOT_RELOADING` stops the asset and shader watchers, and `PILL_FUNCTION_HOT_PATCHING` makes an edit to a function body rebuild its module instead of patching the function. [Environment variables](../../engine_guide/other/environment_variables.md) lists every switch and its default.

## How do I see more of the log?

A project decides what it prints in `project_settings.yaml` under `logging:`. Raise `level` to print everything, or name one target:

```yaml
logging:
  targets:
    project: debug
```

The [logging guidelines](../../engine_guide/coding_style/logging_guidelines.md) describe the levels and targets.

## Where do I ask for help?

Ask on [Discord](https://discord.gg/VUKNQrctms). Paste the lines the host printed around the problem - it logs every reload, patch and refusal - and say which operating system and command you used. A log line carries its level and target, which usually says what happened.
