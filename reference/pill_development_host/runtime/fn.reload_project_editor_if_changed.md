<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4461"></a>

# Function `pill_development_host::runtime::reload_project_editor_if_changed`

```rust
pub(in runtime) fn reload_project_editor_if_changed(host: &mut DevHost);
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2848`

Everything a replaced managed assembly invalidates, whichever site saw the
swap. The recorded prologue addresses point into the retired image, the
patch classifier's baseline is stale, and the editor needs its toast and a
new revision to drop its caches.

Both sites call this: the build completion, which shortens the loader's
debounce and polls, and the frame-boundary poll that catches a swap whose
wait outlived Step 5.
Reloads the project's own editor crate when its sources moved, or when the
project it belongs to reloaded.

The crate is not an extension and does not live in `extensions`, so the
module pass cannot reach it; the transaction it runs is the same one, and
the peers it passes are every other subject, because a component type it
names is not this crate's to retire.
