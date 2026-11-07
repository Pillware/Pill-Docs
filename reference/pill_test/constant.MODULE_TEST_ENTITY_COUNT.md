<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# Constant `pill_test::MODULE_TEST_ENTITY_COUNT`

```rust
pub(crate) const MODULE_TEST_ENTITY_COUNT: usize = 4;
```

Visibility: `crate` · Source: `extensions\pill_test\pill_test\src\pill_test.rs:39`

Number of entities the module keeps alive.

Hot reload keeps the entities the previous generation created, so
initialization fills the world up to this count instead of spawning a
fresh batch each time.
