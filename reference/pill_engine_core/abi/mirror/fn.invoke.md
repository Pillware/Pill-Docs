<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-106"></a>

# Function `pill_engine_core::abi::mirror::invoke`

```rust
pub fn invoke<impl FnOnce() -> MirrorResult<()>: FnOnce() -> MirrorResult<()>>(trampoline_body: impl FnOnce() -> MirrorResult<()>) -> u8;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:133`

Run one trampoline body and turn its outcome into a status byte.

An `Err` is recorded in the last-error channel. A panic is caught and
recorded the same way, because a panic that unwinds out of an `extern "C"`
function aborts the process, and a message lets the managed caller raise its
own exception instead.
