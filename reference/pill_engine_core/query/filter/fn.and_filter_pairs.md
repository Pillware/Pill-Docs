<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6742"></a>

# Function `pill_engine_core::query::filter::and_filter_pairs`

```rust
pub(in query::filter) fn and_filter_pairs(pairs_per_filter: &[Vec<(Vec<crate::component::ComponentId>, Vec<crate::component::ComponentId>)>]) -> Vec<(Vec<crate::component::ComponentId>, Vec<crate::component::ComponentId>)>;
```

Visibility: `{'restricted': {'parent': 6588, 'path': '::query::filter'}}` · Source: `engine\pill_engine_core\src\query\filter.rs:506`

Combines the filter pairs of several filters with AND.

Each inner slice holds the pairs of one filter. The result holds every
combination of one pair per filter, with the include and exclude lists
merged. For two filters that is the Cartesian product of their pairs.

A filter with no pairs restricts nothing, so it is skipped and adds no
combination of its own.
