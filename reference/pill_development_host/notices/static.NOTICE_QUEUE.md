<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3297"></a>

# Static `pill_development_host::notices::NOTICE_QUEUE`

```rust
pub(in notices) static NOTICE_QUEUE: std::sync::Mutex<std::collections::VecDeque<HostNotice>> = _;
```

Visibility: `{'restricted': {'parent': 3294, 'path': '::notices'}}` · Source: `hosting\pill_development_host\src\notices.rs:47`

The queue [`push`](fn.push.md#rustdoc-item-3295) fills and [`take`](fn.take.md#rustdoc-item-3296) empties.
