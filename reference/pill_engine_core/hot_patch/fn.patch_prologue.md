<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5240"></a>

# Function `pill_engine_core::hot_patch::patch_prologue`

```rust
pub unsafe fn patch_prologue(target: usize, replacement: usize) -> Result<Vec<u8>, String>;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:743`

Overwrites a function's first bytes with an absolute jump to `replacement`.

Returns the original bytes, so the patch can be undone by writing them back.

The function's length is checked against the exception directory first, so a
function too short for the jump is refused instead of being overwritten past
its end, which would corrupt whichever function the linker placed next.

## Errors

Returns a message naming the reason when:

- `target` or `replacement` is null, or both name the same address;
- the call comes from a thread other than the declared patching thread;
- `target` has no exception-directory entry, which is how Windows treats a
  leaf function small enough to omit its unwind data;
- `target` is not the first byte of its function;
- the function is shorter than `ABSOLUTE_JUMP_LENGTH`;
- `VirtualProtect` refuses to make the page writable.

## Safety

`replacement` must be a function with a signature compatible with the one at
`target`, and **no thread may be executing inside the overwritten bytes**.
The caller guarantees the second condition by patching at a frame boundary,
on the thread that runs the frame loop, while no other thread is inside the
function. `target` is validated here rather than assumed.
