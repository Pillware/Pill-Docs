<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4227"></a>

# Module `pill_development_host::watchers::asset`

Visibility: `{'restricted': {'parent': 4303, 'path': '::watchers'}}` · Source: `hosting\pill_development_host\src\watchers\asset.rs:1`

The project's asset directory: an edit there becomes an [`AssetChange`](enum.AssetChange.md#rustdoc-item-4235) the
main thread imports again.
Development asset reload: watch the project's `res` folder and report which
source assets an edit affects.

## Responsibilities

- Watch the project's asset directory recursively and group a burst of
  events into one batch (debounce), the same way source edits are grouped.
  Each edited file maps to the source asset it belongs to: an asset file is
  its own source, and a metadata file (`a.png.meta`) belongs to the source
  named before `.meta`.
- Queue each change as an [`AssetChange`](enum.AssetChange.md#rustdoc-item-4235) for the main thread, which
  imports or reimports it through the world's
  [`ImportRegistry`](pill_engine::ImportRegistry).

## Design

The worker thread runs only host code and never calls into a module. A
reload can therefore unload a module at any moment and never leave a thread
running inside code that is going away. The main thread applies the queue
at the frame boundary, after the reloads, using the import registrations
that are current at that moment. The shader watcher splits the work the
same way.

The watcher reports paths, not decisions. Whether a changed path is an
asset at all, whether it is loaded, and what to do about a deleted source
are all decided on the main thread, where the registry and the asset store
live.

Dot-files are ignored. A metadata write goes through a temporary sibling
named `.<file name>.<pid>-<n>.tmp`, and the file it produces is what
counts.

## Module contents

### Structs
- [`AssetWatcher`](struct.AssetWatcher.md#rustdoc-item-3913) — A running asset watcher. Dropping it makes the worker stop when it next

### Enums
- [`AssetChange`](enum.AssetChange.md#rustdoc-item-4235) — One source asset's change, worked out from the files on disk.

### Functions
- [`classify_touched_paths`](fn.classify_touched_paths.md#rustdoc-item-4300) — Turns the paths of one batch into one change per source, based on what is
- [`is_rename`](fn.is_rename.md#rustdoc-item-4298) — Returns whether the event is one side of a rename. Some backends report a
- [`relative_to`](fn.relative_to.md#rustdoc-item-4301) — Returns `path` relative to `asset_directory`, with `/` separators. Returns

### Constants
- [`METADATA_SUFFIX`](constant.METADATA_SUFFIX.md#rustdoc-item-4226) — The extension of a metadata file, appended to its source's name.
