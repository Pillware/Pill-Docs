<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3069"></a>

# Function `pill_development_host::layout_record::write_record`

```rust
pub(crate) fn write_record(world: &pill_engine::World, target: &LayoutRecordTarget<'_>, claimed: &[pill_engine::ResourceId]);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:366`

Writes a subject's record, describing every declared resource it claims now.

Best effort, like the artifact stamp: a record that cannot be written leaves
the next load treating every declared resource as undeclared, which keeps
the values instead of dropping them.
