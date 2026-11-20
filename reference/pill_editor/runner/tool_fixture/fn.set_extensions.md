<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1413"></a>

# Function `pill_editor::runner::tool_fixture::set_extensions`

```rust
pub(in runner) fn set_extensions(world: &mut pill_engine_core::World, enabled: bool);
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:255`

Registers or drops the fixture's two extensions.

The component-tools steps switch them on: until then the fixture tool is
exactly the tool every other area drives, with two menu rows and no chords,
so an area that reads the element menu elsewhere sees what it always saw.
