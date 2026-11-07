<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2048"></a>

# Module `pill_development_host::hot_patch::imports`

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:1`

The changed file's imports, rooted where a generated patch resolves them.
The imports a generated patch carries, rooted where the patch resolves
them.

## Responsibilities

- Name the changed file's own public items that the copied body uses, so an
  item declared beside the patched function is in scope.
- Keep the file's top-level imports that the copied body can name, and
  leave out the rest.
- Root every kept import at a path the patch crate resolves: `crate`,
  `self`, `super` and a bare module name are rewritten to the patched
  crate's own paths.

## Design

A patch compiles as its own crate linked against the patched crate's rlib,
so a path in it resolves through `std`, an `--extern` crate, the prelude,
or a public item of the patched crate - nothing else. An item declared in
the changed file is therefore imported by its full path, but only when the
crate root does not already provide the name: `use <package>::*` in the
generated source reaches every name the crate root makes public, and an
extra path through a private module would fail where the crate-root one
resolves. For the same reason an import the patch cannot resolve is left
out when the body never names what it binds - an unused import fails the
whole compile, and that costs a full reload.

## Module contents

### Structs
- [`PatchScope`](struct.PatchScope.md#rustdoc-item-2045) — The module context one generated patch is rooted in.

### Functions
- [`bound_names`](fn.bound_names.md#rustdoc-item-2080) — Every name the path binds, so a caller can ask whether the body uses one.
- [`closing_brace`](fn.closing_brace.md#rustdoc-item-2082) — The offset of the `}` that closes the `{` at `open`.
- [`collect_bound_names`](fn.collect_bound_names.md#rustdoc-item-2081) — Adds the names one path binds, descending into its brace groups.
- [`declared_item_name`](fn.declared_item_name.md#rustdoc-item-2078) — The name a `pub <keyword> name` declaration introduces.
- [`imports_a_glob`](fn.imports_a_glob.md#rustdoc-item-2076) — Whether the path imports a glob, whose names cannot be listed.
- [`is_identifier_character`](fn.is_identifier_character.md#rustdoc-item-2085) — Whether `character` can be part of an identifier, so a match next to it is
- [`names_identifier`](fn.names_identifier.md#rustdoc-item-2084) — Whether `body` names `name` as a whole identifier of its code.
- [`public_item_names`](fn.public_item_names.md#rustdoc-item-2077) — Every name a file makes public at its top level: declared items and
- [`split_first_segment`](fn.split_first_segment.md#rustdoc-item-2079) — The first path segment, and the rest of the path starting at the `::` that
- [`split_top_level_items`](fn.split_top_level_items.md#rustdoc-item-2083) — The comma-separated items of a brace group, ignoring commas inside nested
- [`use_path`](fn.use_path.md#rustdoc-item-2075) — The path a `use` statement names, without the keyword and the semicolon.
