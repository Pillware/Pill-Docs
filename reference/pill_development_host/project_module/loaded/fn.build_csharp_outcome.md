<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3422"></a>

# Function `pill_development_host::project_module::loaded::build_csharp_outcome`

```rust
pub(in project_module::loaded) fn build_csharp_outcome(compiler: Option<std::sync::Arc<fast_compile::FastCompiler>>, workspace_root: &std::path::Path, config: &crate::ProjectModuleConfig, cancel_flag: Option<(std::sync::Arc<std::sync::atomic::AtomicU64>, u64)>) -> crate::csharp::BuildOutcome;
```

Visibility: `{'restricted': {'parent': 3421, 'path': '::project_module::loaded'}}` · Source: `hosting\pill_development_host\src\project_module.rs:494`

Produces one managed build outcome, using the compiler choice the build
worker and the synchronous fallback share.

The in-process compiler replays the compiler command line captured by
the project's last full build. That takes tens of milliseconds, where a
`dotnet build` of the same edit takes seconds. It cannot answer every
reload - adding or removing a source file changes the command line
itself - and it may not be loaded at all, so both cases fall back to
the full `dotnet build`. That build also refreshes the captured command
line, which is what makes the reload after it fast again.
