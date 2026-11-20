<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3322"></a>

# Function `pill_development_host::native_binary::resolved_entry_size`

```rust
pub(in native_binary) fn resolved_entry_size(declared_entry_size: usize, class_entry_size: usize) -> usize;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:728`

The entry size a section actually uses.

A section is allowed to declare `sh_entsize == 0`, which means "one entry";
for the tables read here the class's own entry size is the only sane
answer, and dividing by zero would otherwise end the parse.
