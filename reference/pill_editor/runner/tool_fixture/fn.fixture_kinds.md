<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1509"></a>

# Function `pill_editor::runner::tool_fixture::fixture_kinds`

```rust
pub(in runner::tool_fixture) fn fixture_kinds(out: &mut Vec<tools::ElementKind>);
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:671`

The two kinds the fixture reports: selectable points and extendable
tangents.

The tangent kind allows multi-select but not box select, so a suite can
prove both that an extend works inside a kind and that a marquee never
takes a kind which forbids it.
