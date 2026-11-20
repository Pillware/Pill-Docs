<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-463"></a>

# Procedural macro `pill_engine_macros::asset`

```rust
proc_macro asset
```

Source: `engine\pill_engine_macros\src\lib.rs:3580`

Declares an asset type, so the artifact declares it without a call.

`#[asset(..)]` expands to `#[derive(PillAsset)]`, the `#[pill(...)]`
argument that names the kind, and the `impl_trait_accessible!` line every
asset type needs to be reachable through the store's `dyn Asset` columns. A
type migrated to this attribute therefore drops its hand-written accessor
line.

The trait implementations themselves stay hand-written - which source
extensions a type imports, how it decodes them and its on-disk document
shape are decisions about the type.

```ignore
#[asset(imported)]
#[derive(Debug, Default)]
pub struct Sound { /* ... */ }

#[asset(standalone)]
#[derive(Debug, Default)]
pub struct Material { /* ... */ }
```

## Arguments

Exactly one of:

- `imported` - an `ImportedAsset`, declared so a source file with its
  extension imports as this type.
- `standalone` - a `StandaloneAsset`, declared so its own document files
  load by extension.
