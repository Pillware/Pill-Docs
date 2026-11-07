<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-409"></a>

# Procedural macro `pill_engine_macros::pill_hot`

```rust
proc_macro pill_hot
```

Source: `engine\pill_engine_macros\src\lib.rs:1947`

Marks a system function as hot-patchable, so the host can replace its
implementation without registering it again.

The function itself is emitted unchanged. The macro only adds a descriptor
that carries the function's fully-qualified path, its dispatch address and
its signature identity, and submits it into this artifact's compile-time
registry.

```ignore
#[pill_hot]
fn movement_system(mut query: Query<(&mut Position, &Velocity)>) {
    for (mut position, velocity) in query.iter_mut() {
        position.x += velocity.x;
    }
}
```

The host patches by `module_path!() + "::" + fn name`, the same shape
`PillComponent` uses for its type name. The address and the signature come
from the function value, not from its syntax: a function-item type
satisfies exactly one arity of `SystemParamFunction`, so the parameter tuple
is inferred instead of being rebuilt from tokens.

`#[pill_hot(name = "project::movement_system")]` overrides the derived name.
A generated patch library is its own crate, so `module_path!()` there would
report the patch's name instead of the original's. The host therefore passes
the name it is patching, so the two agree.
