<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3070"></a>

# Function `pill_development_host::layout_record::changed_layouts`

```rust
pub(crate) fn changed_layouts(world: &pill_engine::World, target: &LayoutRecordTarget<'_>, recorded: &LayoutRecord, claimed: &[pill_engine::ResourceId]) -> Vec<LayoutChange>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:402`

Compares each claimed resource's current layout with the record, reporting
the ones that changed.

Only resources that declared a layout are compared. A resource with no
declaration, or one the record does not list, is not a change: it keeps
today's keep-on-re-register behaviour. A record that lists a resource the
current generation no longer registers is ignored for the same reason - the
retirement path owns that case.
