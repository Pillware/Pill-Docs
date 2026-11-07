<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3170"></a>

# Function `pill_engine_core::component_field::expand::intern_nested_field_name`

```rust
pub(in component_field::expand) fn intern_nested_field_name(name: String) -> &'static str;
```

Visibility: `{'restricted': {'parent': 3168, 'path': '::component_field::expand'}}` · Source: `engine\pill_engine_core\src\component_field\expand.rs:262`

Returns one shared `&'static str` for a synthesized nested field name such
as "color.r" or "inner.a.b".

A descriptor stores its name as `&'static str`, and expansion builds dotted
names at registration. Each distinct name is therefore copied once into
memory that is never freed (leaked on purpose) and reused for the rest of
the process. The set only grows with the distinct field paths a process
registers, so a hot reload of the same components adds nothing to it.
