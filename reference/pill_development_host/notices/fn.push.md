<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3295"></a>

# Function `pill_development_host::notices::push`

```rust
pub(crate) fn push(notice: HostNotice);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\notices.rs:110`

Queues one notice for the frontend's next drain, dropping the oldest when
the queue is full.
