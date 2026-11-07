<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3426"></a>

# Constant `pill_development_host::reload::MAX_GRAVEYARD_GENERATIONS`

```rust
pub(crate) const MAX_GRAVEYARD_GENERATIONS: usize = 2;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:58`

Maximum number of retired images kept loaded for one subject.

The previous generation has to stay loaded because the engine may still hold
pointers into its code. Older generations can be released once the
forgotten-type drop and the column re-home have re-pointed everything that
could still reach them.
