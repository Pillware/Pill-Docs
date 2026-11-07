<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-207"></a>

# Function `pill_hot_scan::crate_root_file`

```rust
pub fn crate_root_file(manifest_directory: &std::path::Path) -> std::path::PathBuf;
```

Source: `hosting\pill_hot_scan\src\lib.rs:1083`

Absolute path of the file Cargo compiles as this crate's root.

Defaults to `src/lib.rs`; a `[lib] path = "..."` in the manifest moves it
elsewhere. The crate root contributes no module segment while every other
file contributes one. Treating a renamed root as a module would prefix every
emitted path with a module that does not exist, and the generated inventory
would not compile.

A crate renames its root so the file has a name unique across the dependency
graph. A debugger that matches a breakpoint by file name - which it must for
a module the host loads at runtime, where the file is not mapped when the
breakpoint is set - would otherwise see hundreds of candidates.

The manifest is scanned by hand rather than parsed. This crate deliberately
has no dependencies, because the host links it as well as every build
script, and a TOML parser here would be pulled into both.

Public because the host derives the same module paths when it compiles a
patch. A patch registered under a path the inventory does not hold never
dispatches.
