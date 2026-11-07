<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2228"></a>

# Module `pill_engine_core::asset_store`

Source: `engine\pill_engine_core\src\asset_store.rs:1`

Where an asset's bytes come from: mounted packs and the filesystem.
Where an asset path's bytes come from: mounted packs and the filesystem.

## Responsibilities

- Parse an asset pack ([`AssetPack`]). A pack holds the files of a
  project's `res` directory, plus the module resources a shipped build
  adds. `pill_assets` writes it at build time.
- Keep the places an [`AssetLoader::Path`](../asset/enum.AssetLoader.md#rustdoc-item-722) looks
  in: the packs ([`mount_pack`]), the project's asset directory
  ([`mount_directory`]) and the read-only directories extension modules
  declare ([`declare_module_root`]). A module resource is found by the same
  relative path as a project asset, and it is never written
  ([`is_module_asset`]).
- Read a path's bytes from the first place that has it ([`read`]).
- Write a file beside an asset on the filesystem ([`write_beside`]), which
  is how a development build records an asset's metadata, or write a file
  that must not exist yet ([`write_new`]). A pack is never written.

## Design

Loading code names a path relative to the project's `res` directory and
never the target it runs on. Only what is mounted differs per target:

- **development:** the filesystem - the project's asset directory, every
  module root, then the working directory, its `res`, `$PROJECT_PATH/res`
  and the executable's `res`;
- **native shipping:** the pack the shipping bundle embeds, mounted by the
  runtime before any module initializes;
- **web:** a pack the frontend fetched, mounted the same way.

Packs are searched before the filesystem, newest mount first. A shipped
game therefore reads the assets it was built with, not whatever file
happens to sit at a development path on the machine. The store's state is
a static in this crate, and `pill_engine_core` is a shared `dylib` (one
copy per process), so the host, every module and every project all resolve
against one set of mounts.

## Pack format (version 1)

Every number is little-endian. The pack starts with `PILLPACK`, a `u32`
format version and a `u32` entry count. Each entry then holds a `u32` path
length, the path itself (UTF-8, `/`-separated and relative), a `u64` offset
and a `u64` length. Both count from the start of the pack. The file bytes
follow the index. `pill_assets::write_asset_pack_with_roots` writes this
format, so the two change together.

## Module contents

### Structs
- [`AssetPack`](struct.AssetPack.md#rustdoc-item-1249) — A parsed asset pack: the pack's bytes, and where each file sits in them.
- [`ModuleAssetRoot`](struct.ModuleAssetRoot.md#rustdoc-item-2331) — A read-only directory an extension module contributes to the store.
- [`Mounts`](struct.Mounts.md#rustdoc-item-2332) — Everything the store can read from: the packs in search order, the
- [`PackReader`](struct.PackReader.md#rustdoc-item-2300) — A cursor over a pack's index.

### Enums
- [`AssetPackError`](enum.AssetPackError.md#rustdoc-item-2230) — Why bytes could not be read as an asset pack.
- [`Existing`](enum.Existing.md#rustdoc-item-2418) — How a file being placed treats a destination that already exists.

### Functions
- [`assert_module_root_complete`](fn.assert_module_root_complete.md#rustdoc-item-2404) — Panic unless `root`'s directory and files are all there.
- [`assert_roots_do_not_overlap`](fn.assert_roots_do_not_overlap.md#rustdoc-item-2402) — Panic when two roots of one module hold a file at the same relative path.
- [`declare_module_root`](fn.declare_module_root.md#rustdoc-item-2399) — Declare `directory` as one of `module`'s read-only asset roots.
- [`declare_module_root_hiding`](fn.declare_module_root_hiding.md#rustdoc-item-2400) — [`declare_module_root`], with file extensions the listing leaves out.
- [`forget_all_module_roots`](fn.forget_all_module_roots.md#rustdoc-item-2407) — Forget every declared root.
- [`forget_module_root`](fn.forget_module_root.md#rustdoc-item-2406) — Forget every root `module` declared, so its resources stop resolving and
- [`hard_link`](fn.hard_link.md#rustdoc-item-2463) — Creates a hard link, as the [`Link`] a real write passes to [`place_file`].
- [`is_module_asset`](fn.is_module_asset.md#rustdoc-item-2409) — Whether `path` is one of a module's resources.
- [`locate_file`](fn.locate_file.md#rustdoc-item-2415) — The filesystem path the asset at `path` resolves to, or `None` when the
- [`module_roots`](fn.module_roots.md#rustdoc-item-2405) — The roots modules have declared, in declaration order.
- [`mount_directory`](fn.mount_directory.md#rustdoc-item-727) — Mount `directory` as the project's asset directory, replacing the previous
- [`mount_pack`](fn.mount_pack.md#rustdoc-item-2360) — Mounts `pack`. Its files are found before the files of any pack mounted
- [`mounted_directory`](fn.mounted_directory.md#rustdoc-item-2361) — The project's asset directory, when one is mounted.
- [`mounts`](fn.mounts.md#rustdoc-item-2358) — The process-wide mounts, created on first use.
- [`pack_key`](fn.pack_key.md#rustdoc-item-2411) — The key `path` is packed under: its components joined with `/`.
- [`packs_only`](fn.packs_only.md#rustdoc-item-2414) — Whether [`restrict_to_packs`] has been called.
- [`place_file`](fn.place_file.md#rustdoc-item-2451) — Move the complete file `temporary` to `destination`, treating a
- [`read`](fn.read.md#rustdoc-item-730) — Read the bytes of the asset at `path` from the first place that has it.
- [`relative_files`](fn.relative_files.md#rustdoc-item-2403) — Every file below `directory`, relative and `/`-separated.
- [`resolve_file`](fn.resolve_file.md#rustdoc-item-2408) — Find `path` on the filesystem. An absolute path is used as it is. Otherwise
- [`restrict_to_packs`](fn.restrict_to_packs.md#rustdoc-item-2410) — Read only what the mounted packs hold, never a development fallback.
- [`temporary_name`](fn.temporary_name.md#rustdoc-item-2460) — A sibling name for `file_name` that no other writer in this or another
- [`verify_module_roots`](fn.verify_module_roots.md#rustdoc-item-2401) — Assert every declared module root still holds its resources.
- [`write_beside`](fn.write_beside.md#rustdoc-item-2454) — Write `bytes` to a file named like `target`, in the directory of the asset
- [`write_new`](fn.write_new.md#rustdoc-item-2456) — Write `bytes` as the new file `destination`, refusing when it exists.
- [`write_replacing`](fn.write_replacing.md#rustdoc-item-2457) — Write `bytes` as `destination`, replacing a file that is already there.
- [`write_then_place`](fn.write_then_place.md#rustdoc-item-2458) — Write `bytes` to a temporary sibling of `destination`, let `place` move it

### Type aliases
- [`Link`](type.Link.md#rustdoc-item-2452) — The link operation [`place_file`] tries first, so a test can stand in a

### Constants
- [`MIN_ENTRY_LEN`](constant.MIN_ENTRY_LEN.md#rustdoc-item-2297) — The fewest bytes one index entry can take. It holds a `u32` path length,

### Statics
- [`PACKS_ONLY`](static.PACKS_ONLY.md#rustdoc-item-2412) — Whether the store reads only what its packs hold.

## Re-exports

- `pub use pill_asset_format::ASSET_PACK_MAGIC;`
- `pub use pill_asset_format::ASSET_PACK_VERSION;`
