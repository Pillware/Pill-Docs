<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1554"></a>

# Struct `pill_editor_core::commands::CommandRegistry`

```rust
pub struct CommandRegistry;
```

Source: `editor\pill_editor_core\src\commands.rs:488`

Every command every owner registered, plus the preset and the file
overrides that decide each command's chords.

A world resource (inserted by [`CommandRegistry::ensure`](#rustdoc-item-1553)); owners are
keyed by the module that registered them so a re-registration replaces
exactly that owner's set.

## Fields

<a id="rustdoc-item-1550"></a>

### `owners`

```rust
owners: std::collections::BTreeMap<String, Vec<CommandSpec>>
```

_No documentation provided._

<a id="rustdoc-item-1551"></a>

### `overrides`

```rust
overrides: std::collections::BTreeMap<String, Vec<Chord>>
```

_No documentation provided._

<a id="rustdoc-item-1552"></a>

### `preset`

```rust
preset: KeymapPreset
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1555"></a>

### `with_builtins`

```rust
pub fn with_builtins() -> Self;
```

Builds a registry holding only the built-in commands, under owner
`editor`.

<a id="rustdoc-item-1553"></a>

### `ensure`

```rust
pub fn ensure(world: &mut pill_engine::World);
```

Registers the registry resource in `world` and inserts the built-ins
when it is absent.

<a id="rustdoc-item-1557"></a>

### `register`

```rust
pub fn register(self: &mut Self, owner: &str, commands: Vec<CommandSpec>);
```

Replaces `owner`'s registrations with `commands`.

<a id="rustdoc-item-1558"></a>

### `commands`

```rust
pub fn commands(self: &Self) -> impl Iterator<Item = _>;
```

Iterates every command, owners in key order; the built-in commands
belong to owner `editor`.

<a id="rustdoc-item-1560"></a>

### `command`

```rust
pub fn command(self: &Self, id: &str) -> Option<&CommandSpec>;
```

Returns the command with this id, whichever owner registered it.

<a id="rustdoc-item-1561"></a>

### `preset`

```rust
pub fn preset(self: &Self) -> KeymapPreset;
```

Returns the active preset.

<a id="rustdoc-item-1562"></a>

### `override_count`

```rust
pub fn override_count(self: &Self) -> usize;
```

Returns how many commands the keybindings file's overrides name; the
`[editor] keybindings applied` log line prints it.

<a id="rustdoc-item-1563"></a>

### `effective_chords`

```rust
pub fn effective_chords(self: &Self, id: &str) -> Vec<Chord>;
```

Returns the chords a command currently answers to: the file's override
when it names this command (an empty list means unbound), or the
preset's defaults otherwise.

<a id="rustdoc-item-1564"></a>

### `apply_file`

```rust
pub fn apply_file(self: &mut Self, file: &KeybindingsFile) -> Vec<String>;
```

Applies a keybindings file: switches to its preset when it names one,
replaces the overrides with its own, and returns every problem found
for the caller to report.

An override for a command nothing has registered is kept, so it starts
working once that id exists.

<a id="rustdoc-item-1567"></a>

### `resolve`

```rust
pub fn resolve(self: &Self, key: pill_engine::KeyCode, modifiers: pill_engine::Modifiers) -> Option<&CommandSpec>;
```

Returns the command a key press runs, or `None` when no command is
bound to it.

The first command in the registry's order wins when two share a chord;
[`Self::conflicts`](#rustdoc-item-1566) reports the collision.

<a id="rustdoc-item-1566"></a>

### `conflicts`

```rust
pub fn conflicts(self: &Self) -> Vec<(Chord, Vec<String>)>;
```

Returns every chord bound to more than one command, with the ids
involved.

<a id="rustdoc-item-1568"></a>

### `views`

```rust
pub fn views(self: &Self) -> Vec<CommandView>;
```

Returns the commands as plain data, in the registry's order. The
frame's snapshot carries these rows, so the menus and the palette build
themselves without touching the world.

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
- `Default`
- `Resource`
