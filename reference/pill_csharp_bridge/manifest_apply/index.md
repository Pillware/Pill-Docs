<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-970"></a>

# Module `pill_csharp_bridge::manifest_apply`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:1`

The single pipeline that applies every kind of manifest.
The apply pipeline that every managed manifest kind runs through.

## Responsibilities

- Decide what each arriving declaration means for the live binding table:
  nothing changed, a new entry, a rename through an alias, or a reshape.
- Apply the entries in manifest order, recording what would undo each
  applied entry so a later refusal can unwind them.
- Retire the entries the manifest stopped naming, after everything else.

## Design

Every manifest kind needs the same stages in the same order. What one kind
contributes arrives as a [`ManifestSubject`]: a plain struct of function
pointers, in the same style as the `ColumnOps` and `StorageFactory` tables
that carry per-kind behaviour elsewhere in the engine. Everything else
lives here, once.

- **Aliases are resolved before vanished entries are collected**, so when
  an alias reaches a predecessor that is still live, that predecessor counts
  as renamed instead of as gone.
- **Every entry is resolved before any of them is applied**, so the refusals
  that the manifest's own validation cannot find leave the world and the
  table as they were.
- **Retirement runs last**, because it drops bytes and cannot be undone.

### What rollback can and cannot promise

The table is all-or-nothing: the pipeline works on a copy, and the caller
publishes whatever comes back. A component's reshape comes with an undo that
moves the rows back. A resource's reshape cannot do that, because reversing
it would have to invent the bytes it dropped. That reshape therefore stays
applied with its new binding: the table has to keep describing the layout
the engine holds, because the resource view callback checks the live byte
length against it.

## Module contents

### Structs
- [`JournalEntry`](struct.JournalEntry.md#rustdoc-item-1669) — One applied entry, recorded so a later refusal can undo it.
- [`ManifestOutcome`](struct.ManifestOutcome.md#rustdoc-item-1605) — What one applied manifest changed.
- [`ManifestSubject`](struct.ManifestSubject.md#rustdoc-item-971) — What one manifest kind contributes to the shared pipeline.
- [`PreparedManifest`](struct.PreparedManifest.md#rustdoc-item-1697) — One kind's declarations, resolved against the live table and ready to
- [`RenamePredecessor`](struct.RenamePredecessor.md#rustdoc-item-980) — The live entry that an arriving declaration's alias reached.

### Enums
- [`Resolution`](enum.Resolution.md#rustdoc-item-1642) — One arriving declaration, resolved against the live table.
- [`Settlement`](enum.Settlement.md#rustdoc-item-975) — What an arriving declaration means for a live binding.

### Functions
- [`apply_resolution`](fn.apply_resolution.md#rustdoc-item-1724) — Apply one resolved entry, recording what it wrote.
- [`execute_manifest`](fn.execute_manifest.md#rustdoc-item-1721) — The half of the pipeline that changes things: applies what
- [`prepare_manifest`](fn.prepare_manifest.md#rustdoc-item-1696) — The half of the pipeline that decides what a manifest means, without
- [`resolve_entries`](fn.resolve_entries.md#rustdoc-item-1723) — Resolve every declaration against the live table, refusing before anything is
- [`resolve_renames`](fn.resolve_renames.md#rustdoc-item-1722) — Resolve every declaration's aliases to the live entries they name.
- [`roll_back`](fn.roll_back.md#rustdoc-item-1725) — Undo every applied entry, newest first.

### Type aliases
- [`Applied`](type.Applied.md#rustdoc-item-1508) — What a subject action reports: the binding it produced, and how to reverse
- [`BindingTable`](type.BindingTable.md#rustdoc-item-1507) — The live table one manifest kind keeps, keyed by stable identity.
- [`Register`](type.Register.md#rustdoc-item-1510) — Register a declaration the table has no entry for.
- [`Rename`](type.Rename.md#rustdoc-item-1512) — Register a successor and move a predecessor's data onto it.
- [`Reshape`](type.Reshape.md#rustdoc-item-1511) — Migrate a live entry's stored data into the arriving shape.
- [`ResolveAlias`](type.ResolveAlias.md#rustdoc-item-1509) — Resolve one alias to the live table entry it names, if any.
