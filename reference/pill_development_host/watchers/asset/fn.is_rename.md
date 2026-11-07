<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4298"></a>

# Function `pill_development_host::watchers::asset::is_rename`

```rust
pub(in watchers::asset) fn is_rename(kind: &notify::event::EventKind) -> bool;
```

Visibility: `{'restricted': {'parent': 4227, 'path': '::watchers::asset'}}` · Source: `hosting\pill_development_host\src\watchers\asset.rs:148`

Returns whether the event is one side of a rename. Some backends report a
rename this way instead of as a create and a remove.
