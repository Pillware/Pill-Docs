<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1717"></a>

# Function `pill_master_renderer_data::declare_crate_roots`

```rust
pub(crate) fn declare_crate_roots();
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\pill_master_renderer_data.rs:219`

Declares the read-only roots this crate ships, from its own directory.

Under `res` sits the default material; under `shader_sources` sit the
sources the chain's shaders are cooked from. The `.wgsl` beside each source
is this crate's build product: the store answers it because a shader's
stages are read from it by path, and the editor's tree leaves it out so a
person sees only what they author.

Declaring the same roots again is what a reload does, and it changes
nothing. It is also what lets this crate's own tests read the same files a
running module reads.

## Panics

Panics when `res` or `shader_sources` exists but one of the files this
function names below it is missing; the message names the module and the
path.
