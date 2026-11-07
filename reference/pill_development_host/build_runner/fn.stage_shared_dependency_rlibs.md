<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-775"></a>

# Function `pill_development_host::build_runner::stage_shared_dependency_rlibs`

```rust
pub(crate) fn stage_shared_dependency_rlibs(workspace_root: &std::path::Path) -> usize;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1852`

Copies every shared per-crate rlib out of cargo's `deps` directory.

Cargo gives a workspace crate's rlib an unhashed, per-crate path such as
`deps/libpill_dummy_color.rlib`, and overwrites it in place on every build.
Third-party crates get a metadata hash and are safe. A workspace crate shares
one slot per crate name across every feature configuration. The host builds
modules with `--features pill_engine/development`, while a plain `cargo build`
writes a differently-featured artifact to the same path. A generated patch
then links a module rlib built against one variant while its dependency's
`--extern` names the other, which fails as `error[E0463]: can't find crate`
and names the module rather than the dependency.

Copying them right after a host build produced a consistent set makes the
patch link closure immune to anything written afterwards. It is the protection
[`stage_artifact`](fn.stage_artifact.md#rustdoc-item-770) gives the module's own rlib, extended to what it links
against. Only out-of-date copies are made, and a failed copy is skipped rather
than treated as fatal.
