<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-311"></a>

# Function `pill_engine::component_registry::run_artifact_entry`

```rust
pub fn run_artifact_entry<impl FnOnce(&mut Engine): FnOnce(&mut crate::Engine), impl FnOnce(&mut Engine) -> u32: FnOnce(&mut crate::Engine) -> u32>(engine: &mut crate::Engine, before_init: impl FnOnce(&mut crate::Engine), register: fn (_: &mut crate::Engine) -> u32, init: impl FnOnce(&mut crate::Engine) -> u32) -> u32;
```

Source: `engine\pill_engine\src\component_registry.rs:479`

Run one artifact entry point: the transaction every posture shares.

The order is the whole contract, and it lives here once so a DLL wrapper, a
linked project and anything added later cannot disagree about it:

1. this artifact's value types become the world's field-layout resolver;
2. every component the artifact declares is registered;
3. every system the artifact declares is registered, in `(order, name)`
   order;
4. every resource the artifact declares is declared, so a `register` half
   that stores a value finds the declaration already in place;
5. every asset type the artifact declares is declared, so the import
   registry points its entry points at this image;
6. `before_init` runs - a project loads the startup scene it queued here,
   because the component types exist and the project has not yet seeded its
   own entities over them;
7. the artifact's `register` runs - the half a later generation repeats, so
   the systems it registers belong to the image that is running;
8. the user's one-time `init` runs;
9. the registration-error slot is read once more, because `before_init`, the
   registration or the user's `init` can record an error after the drain in
   step 2 already looked at it.

The resolver is held for the whole entry point - a `struct:`-tagged field (a
value type, or an array of one) only expands into editable rows while one is
installed - and [`ValueTypeLayoutScope`](struct.ValueTypeLayoutScope.md#rustdoc-item-310) puts the previous one back on every
exit, including an unwind out of `init`.
