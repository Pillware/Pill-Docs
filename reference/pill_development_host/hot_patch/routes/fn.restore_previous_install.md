<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2201"></a>

# Function `pill_development_host::hot_patch::routes::restore_previous_install`

```rust
pub(in hot_patch::routes) fn restore_previous_install<C: RedirectSlot>(redirected_copies: &[&C], qualified: &str, previous: Option<(usize, &str)>) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:593`

Puts the copies a refused install already redirected back on what they were
running.

Generation zero - the body each artifact was built with - is only the right
answer when nothing was installed before. A copy that was already running an
earlier generation has to be pointed at that generation again; otherwise the
refusal undoes a working patch while the session still records it as live.

## Errors

Fails when a copy cannot be redirected again: it no longer exports the
installer, or its own shape changed.
