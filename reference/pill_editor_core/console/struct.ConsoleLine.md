<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2013"></a>

# Struct `pill_editor_core::console::ConsoleLine`

```rust
pub struct ConsoleLine;
```

Source: `editor\pill_editor_core\src\console.rs:96`

One console row, with owned strings.

## Fields

<a id="rustdoc-item-2008"></a>

### `seq`

```rust
seq: u64
```

The capture ring's sequence number. The feed asks for the lines newer
than the last one it folded in.

<a id="rustdoc-item-2009"></a>

### `level`

```rust
level: u8
```

How severe the line is: 1 trace through 5 error.

<a id="rustdoc-item-2010"></a>

### `target`

```rust
target: String
```

The tracing target the line came from.

<a id="rustdoc-item-2011"></a>

### `message`

```rust
message: String
```

The formatted message.

<a id="rustdoc-item-2012"></a>

### `channel`

```rust
channel: ConsoleChannel
```

Which channel the target put it in.

## Associated functions and methods

<a id="rustdoc-item-2014"></a>

### `level_name`

```rust
pub fn level_name(self: &Self) -> &'static str;
```

The level's short name, as the tab and the log print it (`info`,
`warn`, ...).

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
