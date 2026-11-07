<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4377"></a>

# Module `pill_development_host::watchers::shared`

Visibility: `{'restricted': {'parent': 4303, 'path': '::watchers'}}` · Source: `hosting\pill_development_host\src\watchers\shared.rs:1`

The settled watcher every worker is built on, the event filter they share,
and the project's source-tree watcher.
Watch the configured source tree for file changes and tell the main
thread to reload.

## Responsibilities

- Spawn a worker thread that watches the source tree for changes.
- Decide which file events and paths count as a source edit, so only a
  real edit starts a reload.
- Bump a reload generation counter when a relevant event arrives;
  the main thread reloads when it sees a generation it has not handled.
- Record when each signal fired, so the frame loop can time a reload from
  the save that caused it.
- Report which files changed, so a reload can be traced back to a save.
- Let `notify` handle the differences between the platforms' file
  notifications.

## Design

The watcher runs on its own thread, so watching never blocks the main
loop. Several notifications for one save are joined into one signal: the
worker waits out the debounce window, collects the paths it saw and
reports them. The main thread compares the generation counter against the
last value it handled on every loop, so a save that arrives during a
reload is never lost.

## Module contents

### Structs
- [`SourceTrigger`](struct.SourceTrigger.md#rustdoc-item-1676) — What one debounce window produced: when its signal fired, and how long the
- [`TriggerLog`](struct.TriggerLog.md#rustdoc-item-3905) — The project watcher's most recent triggers.

### Functions
- [`canonicalize_through_existing_ancestor`](fn.canonicalize_through_existing_ancestor.md#rustdoc-item-4447) — Resolve a path that may no longer exist.
- [`debounce_duration`](fn.debounce_duration.md#rustdoc-item-4445) — Returns how long a burst of file events is joined into one signal, read
- [`is_relevant_event`](fn.is_relevant_event.md#rustdoc-item-4446) — Whether an event kind is a source change worth rebuilding for.
- [`is_relevant_path`](fn.is_relevant_path.md#rustdoc-item-4448) — Whether a changed absolute path should start a rebuild.
- [`is_relevant_relative_path`](fn.is_relevant_relative_path.md#rustdoc-item-4449) — Whether a path relative to the watch root should start a rebuild.
- [`spawn_settled_watcher`](fn.spawn_settled_watcher.md#rustdoc-item-4452) — Spawn the notify watcher and its debounce worker, the part the source,
- [`spawn_source_watcher`](fn.spawn_source_watcher.md#rustdoc-item-4454) — Watch the configured source tree and ask for a reload from a worker

### Constants
- [`DEBOUNCE_OVERRIDE_VARIABLE`](constant.DEBOUNCE_OVERRIDE_VARIABLE.md#rustdoc-item-4378) — Environment variable overriding the debounce window.
- [`DEFAULT_DEBOUNCE_MILLISECONDS`](constant.DEFAULT_DEBOUNCE_MILLISECONDS.md#rustdoc-item-4376) — File events that arrive within this window are joined into one reload.
- [`EDITOR_TEMPORARY_FILE_SUFFIXES`](constant.EDITOR_TEMPORARY_FILE_SUFFIXES.md#rustdoc-item-4380) — Suffixes editors use for temporary and swap files written around saves.
- [`HIDDEN_FILE_PREFIX`](constant.HIDDEN_FILE_PREFIX.md#rustdoc-item-4381) — A file whose name starts with this is hidden, and never holds source code.
- [`IGNORED_DIRECTORY_NAMES`](constant.IGNORED_DIRECTORY_NAMES.md#rustdoc-item-4379) — Directory names that never contain source code worth rebuilding for.
- [`REPORTED_PATH_LIMIT`](constant.REPORTED_PATH_LIMIT.md#rustdoc-item-4382) — Maximum number of changed paths printed per reload report.
- [`TRIGGER_LOG_CAPACITY`](constant.TRIGGER_LOG_CAPACITY.md#rustdoc-item-4383) — How many recent triggers [`TriggerLog`] keeps for the frame loop.
