<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-252"></a>

# Struct `pill_assets::PipelineStats`

```rust
pub struct PipelineStats;
```

Source: `assets\pill_assets\src\lib.rs:188`

The files one pass of [`Pipeline::run`](struct.Pipeline.md#rustdoc-item-250) or [`Pipeline::plan`](struct.Pipeline.md#rustdoc-item-251) found, and
what it did with them.

## Fields

<a id="rustdoc-item-245"></a>

### `discovered_inputs`

```rust
discovered_inputs: Vec<std::path::PathBuf>
```

Every input that any rule matched. Build scripts print these as
`cargo:rerun-if-changed` lines.

<a id="rustdoc-item-246"></a>

### `rebuilt_outputs`

```rust
rebuilt_outputs: Vec<std::path::PathBuf>
```

The outputs written by this pass.

<a id="rustdoc-item-247"></a>

### `skipped_outputs`

```rust
skipped_outputs: Vec<std::path::PathBuf>
```

The outputs that were already newer than their input and extra inputs.

<a id="rustdoc-item-248"></a>

### `cook_edges`

```rust
cook_edges: Vec<(std::path::PathBuf, std::path::PathBuf, &'static str)>
```

One `(input, output, rule)` per output a rule can produce, whether it
was planned, rebuilt or skipped.

<a id="rustdoc-item-249"></a>

### `cook_times`

```rust
cook_times: Vec<(std::path::PathBuf, std::time::Duration)>
```

How long each rebuilt output took.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Debug`
- `Default`
