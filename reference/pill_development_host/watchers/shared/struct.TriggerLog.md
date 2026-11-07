<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3905"></a>

# Struct `pill_development_host::watchers::shared::TriggerLog`

```rust
pub(crate) struct TriggerLog;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shared.rs:103`

The project watcher's most recent triggers.

This is what lets the frame loop measure a reload from the save that caused
it: the signal's instant marks the end of the wait, and the delay from the
file's modification time marks the start. Only the project watcher records
here; the module and renderer watchers pass `None`, because nothing times a
reload from their signals.

## Fields

<a id="rustdoc-item-4417"></a>

### `entries`

```rust
entries: std::sync::Mutex<Vec<SourceTrigger>>
```

Newest last. Guarded because the watcher thread writes while the frame
thread reads.

## Associated functions and methods

<a id="rustdoc-item-4418"></a>

### `new`

```rust
pub(crate) fn new() -> Self;
```

An empty log.

<a id="rustdoc-item-4419"></a>

### `record`

```rust
pub(in watchers::shared) fn record(self: &Self, trigger: SourceTrigger);
```

Record one fired trigger, evicting the oldest past the bound.

<a id="rustdoc-item-4420"></a>

### `take`

```rust
pub(crate) fn take(self: &Self, generation: u64) -> Option<SourceTrigger>;
```

Take the trigger that published `generation`, if it is still logged.

The entry is taken out rather than read, so one signal is counted
against exactly one reload: the reload that handled its generation.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
