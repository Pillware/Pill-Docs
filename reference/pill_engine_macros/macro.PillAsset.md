<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-464"></a>

# Procedural macro `pill_engine_macros::PillAsset`

```rust
proc_macro PillAsset
```

Source: `engine\pill_engine_macros\src\lib.rs:3075`

Declares an asset type, so the artifact declares it without a call.

A crate that owns an asset type writes [`asset`] rather than this derive;
the attribute expands to this derive, its `#[pill(...)]` argument and the
`impl_trait_accessible!` line the store needs, and this form stays available
for a generated file. The artifact entry point declares every declared type
before its own `register` and `init` run, for a first load, every reload and
a statically linked build alike. Loading (`import`, `load_asset`,
`import_standalone`) is unchanged: only the declaration call moves.

The trait implementations themselves stay hand-written - which source
extensions a type imports, how it decodes them, and its on-disk document
shape are decisions about the type, not something a derive can invent. This
derive only says how the world should declare it.

```ignore
#[asset(imported)]
pub struct Sound { /* ... */ }

#[asset(standalone)]
pub struct Material { /* ... */ }
```

## Arguments

- `imported` - the type is an `ImportedAsset`, declared with
  `World::register_imported_asset`, so it can be imported from a source
  file by extension.
- `standalone` - the type is a `StandaloneAsset`, declared with
  `World::register_standalone_asset`, so it is stored as its own document
  file.

Exactly one of the two is required: a type is one or the other.

[`asset`]: macro@asset
