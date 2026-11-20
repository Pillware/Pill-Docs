<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4087"></a>

# Trait `pill_engine_core::systems::system::ReadOnlySystemParam`

```rust
pub trait ReadOnlySystemParam: SystemParam { ... }
```

Source: `engine\pill_engine_core\src\systems\system.rs:358`

A system parameter that only reads, so a
[`run_if`](../../engine/struct.SystemOptions.md#rustdoc-item-4214) condition may take it.

Read-only is decided by the parameter type, which is why this is a marker
trait rather than a runtime check: `Res<T>` reads a resource, a query of
shared references reads components, and a tuple reads whatever its members
do. `ResMut<T>`, `Commands` and a query containing `&mut T` change the
world, so none of them implements it, and a condition that asks for one
does not compile.
