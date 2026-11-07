<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-210"></a>

# Function `pill_hot_scan::generate_function_inventory`

```rust
pub fn generate_function_inventory();
```

Source: `hosting\pill_hot_scan\src\lib.rs:1149`

Generate this crate's function-address inventory into `OUT_DIR`.

The whole of a participating crate's build script:

```no_run
pill_hot_scan::generate_function_inventory();
```

and one line in the crate root:

```ignore
include!(concat!(env!("OUT_DIR"), "/function_inventory.rs"));
```

Every addressable function a patch can reach - module-level, an inherent
method, or a trait method whose trait the crate root can name - is registered
with its qualified path, its address, and the declaration it was built with,
so the host can redirect any of them with nothing in the source annotated.
The host decides what is patchable with the same scanner, and the two must
agree byte for byte.

## Panics

Panics when run outside a build script, which supplies `CARGO_MANIFEST_DIR`,
`OUT_DIR` and `CARGO_PKG_NAME`, and when the generated file cannot be
written; that would leave the crate compiling against a stale or absent
inventory.
