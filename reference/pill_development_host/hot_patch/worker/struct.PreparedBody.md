<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2213"></a>

# Struct `pill_development_host::hot_patch::worker::PreparedBody`

```rust
pub(crate) struct PreparedBody;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\worker.rs:66`

A changed body, ready to compile.

## Fields

<a id="rustdoc-item-2241"></a>

### `declaration`

```rust
declaration: source::HotFunction
```

The declaration as the scanner reported it.

<a id="rustdoc-item-2243"></a>

### `qualified`

```rust
qualified: String
```

The name the engine registry and the prologue route are keyed by.

<a id="rustdoc-item-2244"></a>

### `slot_name`

```rust
slot_name: String
```

The name a dispatch slot is keyed by, which leaves out the receiver
type. It is kept here from preparation because activation files the
slot route under it.

<a id="rustdoc-item-2245"></a>

### `crate_name`

```rust
crate_name: String
```

The patch crate's name, unique within the process.

<a id="rustdoc-item-2246"></a>

### `source_path`

```rust
source_path: std::path::PathBuf
```

The generated source on disk.

<a id="rustdoc-item-2247"></a>

### `artifact_path`

```rust
artifact_path: std::path::PathBuf
```

Where the compiled library is written.

<a id="rustdoc-item-2248"></a>

### `extra_externs`

```rust
extra_externs: Vec<String>
```

`--extern` entries beyond the ones the replayed line carries.

<a id="rustdoc-item-2249"></a>

### `staged_dependencies`

```rust
staged_dependencies: std::path::PathBuf
```

The directory holding the dependency rlibs the replayed line names.

<a id="rustdoc-item-2250"></a>

### `line`

```rust
line: super::compile::CargoRustcLine
```

The captured compiler invocation to replay.

<a id="rustdoc-item-2251"></a>

### `package`

```rust
package: String
```

The package name, for the "can't find crate" hint.

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
