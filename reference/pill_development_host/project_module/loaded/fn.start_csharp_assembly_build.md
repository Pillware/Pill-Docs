<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3423"></a>

# Function `pill_development_host::project_module::loaded::start_csharp_assembly_build`

```rust
pub(in project_module::loaded) fn start_csharp_assembly_build(project: &mut crate::csharp::CSharpProject, workspace_root: &std::path::Path, config: &crate::ProjectModuleConfig, cancel_flag: Option<(std::sync::Arc<std::sync::atomic::AtomicU64>, u64)>) -> ManagedReloadStart;
```

Visibility: `{'restricted': {'parent': 3421, 'path': '::project_module::loaded'}}` · Source: `hosting\pill_development_host\src\project_module.rs:534`

Starts a C# assembly build on its own worker thread.

The worker owns everything the build needs and touches nothing that
belongs to the frame boundary. It runs the in-process compiler, or the
full `dotnet build` fallback when the captured command line cannot
answer the reload, and reports what it produced. Compiling the project
costs hundreds of milliseconds, so it happens here: the frame keeps
rendering and the report is collected at a later boundary.
