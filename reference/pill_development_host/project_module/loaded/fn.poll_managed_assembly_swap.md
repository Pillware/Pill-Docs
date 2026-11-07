<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3420"></a>

# Function `pill_development_host::project_module::loaded::poll_managed_assembly_swap`

```rust
pub(in project_module::loaded) fn poll_managed_assembly_swap(project: &mut crate::csharp::CSharpProject, engine: &mut pill_engine::Engine) -> bool;
```

Visibility: `{'restricted': {'parent': 3421, 'path': '::project_module::loaded'}}` · Source: `hosting\pill_development_host\src\project_module.rs:444`

Polls the managed loader and returns whether it swapped the assembly.

The function exists so a poll error is reported instead of dropped.
`poll_reload` logs the statuses it understands, but a `CSharpError`
returned through `?` reaches the caller as a plain `Err`, which its
callers would otherwise discard. The one that matters is
re-registration refusing the arriving assembly's systems: a project
left with no systems and nothing on the console is the worst outcome
available here, so the error is logged loudly.
