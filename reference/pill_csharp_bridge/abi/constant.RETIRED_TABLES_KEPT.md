<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-16"></a>

# Constant `pill_csharp_bridge::abi::RETIRED_TABLES_KEPT`

```rust
pub(in abi) const RETIRED_TABLES_KEPT: usize = 16;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:83`

How many retired mirror-method tables stay alive after a republish.

The copy callback hands managed code pointers into the table's strings and
releases the lock before those pointers are read, so a republish must not
free the table it replaced. Keeping the most recent few is enough: pointers
from an older copy are long read by then, and holding every table a session
ever published would grow without bound.
