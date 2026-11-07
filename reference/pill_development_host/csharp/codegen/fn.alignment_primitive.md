<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1315"></a>

# Function `pill_development_host::csharp::codegen::alignment_primitive`

```rust
pub(in csharp::codegen) fn alignment_primitive(align: usize) -> Option<&'static str>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:159`

The C# primitive used as a pad field to force a struct's alignment.

A C# struct with no fields has 1-byte alignment, whatever its `Size` says.
The generator therefore adds one private pad field of the primitive that
matches the module's alignment, so the runtime's layout check, which reads
alignment off the fields, reports the registered value.
