<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1219"></a>

# Struct `pill_core::profiling::enabled::DirectZone`

```rust
pub(in profiling::enabled) struct DirectZone;
```

Visibility: `{'restricted': {'parent': 1217, 'path': '::profiling::enabled'}}` · Source: `engine\pill_core\src\profiling.rs:147`

A Tracy zone opened through the client itself.

Every call into Tracy's C API (open, add text, close) is made from a
function in this crate marked `#[inline(never)]`. The C functions exist
only inside `pill_core.dll`, which exports Rust symbols alone. A call
the compiler inlined into an extension or project DLL would therefore
fail to link there with "undefined symbol ___tracy_emit_zone_*". The
span is wrapped in `ManuallyDrop` for the same reason. Its drop has to
run in [`Drop::drop`] below, not in drop code generated wherever the
zone ends.

## Fields

<a id="rustdoc-item-1214"></a>

### `span`

```rust
span: std::mem::ManuallyDrop<tracy_client::Span>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1220"></a>

### `open`

```rust
pub(in profiling::enabled) fn open(name: &str, color: u32, function: &str, file: &str, line: u32) -> Option<Self>;
```

Opens a zone called `name` drawn in `color` (`0xRRGGBB`, or `0` for
the viewer's own choice), or `None` when Tracy is not running.

<a id="rustdoc-item-1221"></a>

### `text`

```rust
pub(in profiling::enabled) fn text(self: &Self, text: &str);
```

Appends `text` to the zone, shown in Tracy's zone detail view.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Drop`
