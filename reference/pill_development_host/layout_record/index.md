<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2774"></a>

# Module `pill_development_host::layout_record`

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:1`

What a module's resources declared their layouts are made of, and whether
that changed since the last load.
What a module's resources said their layouts are made of, and whether that
changed since the last load.

## Responsibilities

- Reads the layout declaration of every resource a generation claimed, and
  fingerprints the declared files' contents and the declared crates'
  versions from the workspace lockfile.
- Writes that record after a successful load, beside the artifact stamps,
  and reads it back before the next load.
- Reports which declared resources now differ from what the record holds, so
  the reload boundary can drop exactly those and let the module rebuild
  them.

## Design

A resource value outlives the module that inserted it. A reload keeps it and
only re-points its function table at the new image, which is sound exactly
while the two images agree on the type's layout. Once a field is added,
removed or retyped the bytes stay the same size and mean something else, so
the value has to be dropped and rebuilt instead.

The module cannot stamp this itself: the wrapper crate the host generates is
a manifest and one `src/lib.rs`, with no build script. The host builds the
module, so the host is the one place that knows both the sources and the
binary, and it writes the record right after a load.

The fingerprint must compare across two separately built artifacts, so it is
FNV-1a over the file contents and the declared versions. `DefaultHasher` is
not stable across compilers, which is the same reason the engine's schema
hash is FNV.

A record declares the resource by the full path of its Rust type. A
reloaded generation gives the same type a new `TypeId`, so nothing else is
stable enough to match on.

## Module contents

### Structs
- [`DependencyVersion`](struct.DependencyVersion.md#rustdoc-item-2863) — One declared crate and the versions the lockfile resolved for it.
- [`LayoutChange`](struct.LayoutChange.md#rustdoc-item-2996) — One declared resource whose layout differs from what the record holds.
- [`LayoutRecord`](struct.LayoutRecord.md#rustdoc-item-2949) — Every declared resource one subject claimed when it loaded.
- [`LayoutRecordTarget`](struct.LayoutRecordTarget.md#rustdoc-item-2781) — Where a subject's record lives, and what its declared paths resolve against.
- [`LockfileVersions`](struct.LockfileVersions.md#rustdoc-item-3035) — The versions the workspace lockfile resolves for each package.
- [`ResourceLayoutRecord`](struct.ResourceLayoutRecord.md#rustdoc-item-2907) — One resource's declared layout, as one load saw it.
- [`SourceDigest`](struct.SourceDigest.md#rustdoc-item-2819) — One declared source file and the hash of its contents.

### Functions
- [`changed_dependency_names`](fn.changed_dependency_names.md#rustdoc-item-3072) — The declared crates whose resolved versions differ between two measurements.
- [`changed_layouts`](fn.changed_layouts.md#rustdoc-item-3070) — Compares each claimed resource's current layout with the record, reporting
- [`changed_source_paths`](fn.changed_source_paths.md#rustdoc-item-3071) — The declared sources whose hash differs between two measurements.
- [`fnv1a`](fn.fnv1a.md#rustdoc-item-3031) — Folds `bytes` into an FNV-1a hash.
- [`fold_layout`](fn.fold_layout.md#rustdoc-item-3033) — One hash over a layout's sources and dependencies.
- [`hash_source_file`](fn.hash_source_file.md#rustdoc-item-3032) — Hash of one file's contents, or [`MISSING_SOURCE_HASH`] when it cannot be
- [`measure_layout`](fn.measure_layout.md#rustdoc-item-3066) — Builds one resource's record from its declaration, reading the files now.
- [`read_record`](fn.read_record.md#rustdoc-item-3068) — Reads a subject's record.
- [`write_record`](fn.write_record.md#rustdoc-item-3069) — Writes a subject's record, describing every declared resource it claims now.

### Constants
- [`FNV_OFFSET_BASIS`](constant.FNV_OFFSET_BASIS.md#rustdoc-item-2776) — FNV-1a 64-bit offset basis.
- [`FNV_PRIME`](constant.FNV_PRIME.md#rustdoc-item-2777) — FNV-1a 64-bit prime.
- [`LAYOUT_RECORD_DIRECTORY`](constant.LAYOUT_RECORD_DIRECTORY.md#rustdoc-item-2773) — Directory under the workspace root that holds one record per subject.
- [`LAYOUT_RECORD_VERSION`](constant.LAYOUT_RECORD_VERSION.md#rustdoc-item-2775) — Version of the record format.
- [`MISSING_SOURCE_HASH`](constant.MISSING_SOURCE_HASH.md#rustdoc-item-2817) — Hash a file cannot be read at all.
