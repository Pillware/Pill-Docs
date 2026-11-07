<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3293"></a>

# Constant `pill_development_host::notices::NOTICE_CAPACITY`

```rust
pub(in notices) const NOTICE_CAPACITY: usize = 256;
```

Visibility: `{'restricted': {'parent': 3294, 'path': '::notices'}}` · Source: `hosting\pill_development_host\src\notices.rs:44`

How many notices can wait for a drain; past this the oldest are dropped.

Large enough that a burst (a reload plus its patches) arrives whole, small
enough that a host nobody drains stays cheap.
