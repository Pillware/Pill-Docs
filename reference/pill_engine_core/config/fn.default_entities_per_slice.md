<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3508"></a>

# Function `pill_engine_core::config::default_entities_per_slice`

```rust
pub fn default_entities_per_slice(bytes_per_entity: usize) -> usize;
```

Source: `engine\pill_engine_core\src\config.rs:173`

Returns the number of entities in one parallel work slice, scaled down for
components with large rows.

Without an override the result is between
`ParallelProcessingConfig::MINIMUM_SLICE_SIZE` (256) and
`ParallelProcessingConfig::DEFAULT_ITERATOR_SLICE_SIZE` (4096), and it
falls as `bytes_per_entity` grows, which keeps the per-slice overhead
small. A positive `ECS_SLICE_SIZE` environment variable overrides the
computed value.

## Examples

```
use pill_engine::config::default_entities_per_slice;

// Larger components yield smaller slices, keeping per-slice byte volume bounded.
let small_components = default_entities_per_slice(8);
let large_components = default_entities_per_slice(64);
assert!(large_components <= small_components);
```
