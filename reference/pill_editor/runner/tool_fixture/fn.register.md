<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1414"></a>

# Function `pill_editor::runner::tool_fixture::register`

```rust
pub(in runner) fn register(world: &mut pill_engine_core::World);
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:228`

Registers the fixture tool, with its reporting hooks, in the world's
registry.

A reload of any shell module re-runs nothing here: the fixture lives in
this executable, which is never reloaded, and its hooks are the
executable's own functions.

The two extensions are registered by [`set_extensions`](fn.set_extensions.md#rustdoc-item-1413) instead, so every
other suite area drives the plain tool: an extension's extra menu rows would
otherwise change what those areas read.
