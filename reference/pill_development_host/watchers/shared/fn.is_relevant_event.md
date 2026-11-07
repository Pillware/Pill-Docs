<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4446"></a>

# Function `pill_development_host::watchers::shared::is_relevant_event`

```rust
pub(crate) fn is_relevant_event(kind: &notify::event::EventKind) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shared.rs:169`

Whether an event kind is a source change worth rebuilding for.

Content changes, file creations and file deletions all matter. A rename
arrives as a remove/create pair or as a name modification, depending on the
platform, so the same three kinds cover it. Every `Modify` kind counts,
metadata-only included, because an editor's save can arrive as one. Access
notifications never do.
