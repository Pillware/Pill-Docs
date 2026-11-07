<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1247"></a>

# Struct `pill_core::profiling::enabled::TracyZone`

```rust
pub struct TracyZone;
```

Source: `engine\pill_core\src\profiling.rs:216`

Keeps a CPU zone open until it is dropped.

`profile_scope!` and `profile_scope_fine!` create one, and the zone
closes when the guard drops. The zone is opened through the Tracy
client itself, not as a `tracing` span. A span gets its name when it is
created, from its fixed name and the fields known then, so a name or
text recorded later could never reach Tracy.

## Fields

<a id="rustdoc-item-1246"></a>

### `zone`

```rust
zone: Option<DirectZone>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1248"></a>

### `open`

```rust
pub(in profiling::enabled) fn open(fine_lane: bool, name: &str, function: &str, file: &str, line: u32) -> Self;
```

Opens a zone called `name` on the given lane.

<a id="rustdoc-item-1249"></a>

### `open_lazy`

```rust
pub(in profiling::enabled) fn open_lazy<impl FnOnce() -> String: FnOnce() -> String>(fine_lane: bool, name: impl FnOnce() -> String, color: u32, function: &str, file: &str, line: u32) -> Self;
```

Opens a zone whose name is built only when the lane is wanted.

<a id="rustdoc-item-1251"></a>

### `text`

```rust
pub fn text(self: &Self, message_text: Arguments<'_>);
```

Adds a diagnostic message to this zone. Tracy shows it in the
zone's tooltip and detail view.

<a id="rustdoc-item-1253"></a>

### `text_lazy`

```rust
pub fn text_lazy<impl FnOnce() -> String: FnOnce() -> String>(self: &Self, build_message_text: impl FnOnce() -> String);
```

Adds a diagnostic message that is built only when the zone is
recorded.

Because the closure runs only then, work such as allocating a
`String` or formatting archetype details is skipped while the game
runs without a profiler.

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
