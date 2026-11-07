<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3520"></a>

# Function `pill_development_host::reload::build_load_and_commit`

```rust
pub(crate) fn build_load_and_commit<impl FnOnce(Option<(&AtomicU64, u64)>) -> Result<PathBuf, BuildError>: FnOnce(Option<(&std::sync::atomic::AtomicU64, u64)>) -> Result<std::path::PathBuf, pill_core::error::BuildError>>(engine: &mut pill_engine::Engine, engine_api: &pill_engine::EngineApi, workspace_root: &std::path::Path, build: impl FnOnce(Option<(&std::sync::atomic::AtomicU64, u64)>) -> Result<std::path::PathBuf, pill_core::error::BuildError>, cancel_flag: Option<(&std::sync::atomic::AtomicU64, u64)>, validation: LoadValidation, before_commit: &mut dyn FnMut(), transaction: ReloadTransaction<'_>) -> Option<ReloadCommit>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:1218`

Builds, loads and commits one native generation, for either subject.

Both subjects run the same three steps in the same order, and a failure
anywhere leaves the current generation running: compile (`build`), load a
private copy, then swap through [`ReloadTransaction`](struct.ReloadTransaction.md#rustdoc-item-3513). Their differences are
parameters, not a second lifecycle: which build function to call, whether
the ABI check applies, and the refusal text the suites wait for.

`before_commit` runs once the replacement has built, loaded and passed
validation, just before the swap. It does not run when an earlier step
refused the replacement. A subject uses it to release state that must be
dropped while the retiring image is still loaded: the renderer module
detaches its GPU backend there.

Returns the commit when the swap happened, and `None` when anything was
refused.
