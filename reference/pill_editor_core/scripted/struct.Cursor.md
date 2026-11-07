<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7169"></a>

# Struct `pill_editor_core::scripted::Cursor`

```rust
pub(in scripted) struct Cursor<'a>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1529`

A position in one line, holding the text left after the words taken so
far.

## Fields

<a id="rustdoc-item-7184"></a>

### `rest`

```rust
rest: &'a str
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-7185"></a>

### `new`

```rust
pub(in scripted) fn new(line: &'a str) -> Self;
```

A cursor over `line`, with its outer whitespace trimmed.

<a id="rustdoc-item-7186"></a>

### `word`

```rust
pub(in scripted) fn word(self: &mut Self) -> Option<&'a str>;
```

The next whitespace-delimited word, or `None` when the line is spent.

<a id="rustdoc-item-7187"></a>

### `text`

```rust
pub(in scripted) fn text(self: &mut Self, reason: &str) -> Result<String, ParseError>;
```

Everything left, trimmed, with one surrounding `"..."` pair removed
and its escapes resolved.

#### Errors

Returns `reason` when the line has nothing left on it.

<a id="rustdoc-item-7188"></a>

### `path`

```rust
pub(in scripted) fn path(self: &mut Self, reason: &str) -> Result<String, ParseError>;
```

One path argument: a quoted path, which may hold spaces, or one word.

A path is not always the last argument, so it cannot take the rest of
the line the way [`Cursor::text`](#rustdoc-item-7187) does. The quoted form is how one in
the middle keeps a space, and the bare form stops at the first one.

#### Errors

Returns `reason` when no path is left, and its own sentence when a
quoted path is never closed.

<a id="rustdoc-item-7189"></a>

### `take`

```rust
pub(in scripted) fn take(self: &mut Self, length: usize);
```

Consumes the first `length` bytes of what is left, after its leading
whitespace.

<a id="rustdoc-item-7190"></a>

### `rest`

```rust
pub(in scripted) fn rest(self: &Self) -> &'a str;
```

What is left of the line, trimmed, without consuming it.

<a id="rustdoc-item-7191"></a>

### `finish`

```rust
pub(in scripted) fn finish(self: &Self, verb: &str) -> Result<(), ParseError>;
```

Refuses whatever is left after a verb took its arguments.

#### Errors

Returns an error naming `verb` and the leftover text when the line has
words the verb did not take.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
