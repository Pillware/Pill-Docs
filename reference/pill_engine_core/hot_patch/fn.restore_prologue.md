<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5241"></a>

# Function `pill_engine_core::hot_patch::restore_prologue`

```rust
pub unsafe fn restore_prologue(target: usize, original: &[u8]) -> Result<(), String>;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:856`

Writes saved prologue bytes back, undoing a patch.

## Errors

Returns a message naming the reason when:

- `target` is null;
- the call comes from a thread other than the declared patching thread;
- `target` has no exception-directory entry, or is not the first byte of
  its function;
- the function at `target` is shorter than the saved bytes, which usually
  means the image was replaced;
- the bytes at `target` do not begin with the jump `patch_prologue` writes;
- `VirtualProtect` refuses to make the page writable.

## Safety

The same contract as [`patch_prologue`](fn.patch_prologue.md#rustdoc-item-5240): `target` must be the address the
bytes came from, and no thread may be executing inside them.
