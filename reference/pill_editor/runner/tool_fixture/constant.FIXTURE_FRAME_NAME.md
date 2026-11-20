<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1288"></a>

# Constant `pill_editor::runner::tool_fixture::FIXTURE_FRAME_NAME`

```rust
pub(in runner) const FIXTURE_FRAME_NAME: &str = "Fixture";
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:72`

The name of the one coordinate frame the fixture offers.

It is a quarter turn around X, so the frame's Y axis is the world's Z: a
drag along that handle moves the elements along world Z, while the same
handle without the frame moves them along world Y. A suite can tell the two
apart by one number, and the frame's own grab points sit clear of every
element the fixture reports.
