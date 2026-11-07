<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-352"></a>

# Function `pill_engine::component_registry::persistable_schema_fingerprint`

```rust
pub fn persistable_schema_fingerprint() -> u64;
```

Source: `engine\pill_engine\src\component_registry.rs:615`

Fingerprint of the set of persistable components this artifact declares.

The value is the hash of every persistable component's type name, taken in
sorted order, so two builds that declare the same set produce the same
fingerprint. The project entry-point macro exports it as
`project_schema_fingerprint`. Keeping it derived from the same registry that
drives registration means a new persistable component cannot be missing
from the fingerprint.
