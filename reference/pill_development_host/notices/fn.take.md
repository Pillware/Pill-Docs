<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3296"></a>

# Function `pill_development_host::notices::take`

```rust
pub fn take() -> Vec<HostNotice>;
```

Source: `hosting\pill_development_host\src\notices.rs:145`

Takes every queued notice, oldest first.

The editor executable calls this once per frame and folds the result into
its notice resource. A host with no editor attached never calls it, so the
queue fills up to its cap and stays there.
