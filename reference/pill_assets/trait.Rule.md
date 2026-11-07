<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-67"></a>

# Trait `pill_assets::Rule`

```rust
pub trait Rule { ... }
```

Source: `assets\pill_assets\src\lib.rs:136`

One transformation applied to every file its glob matches.

## Required and provided items

<a id="rustdoc-item-239"></a>

### `name`

```rust
fn name(self: &Self) -> &'static str;
```

The name reported in errors and matched against a manifest entry.

<a id="rustdoc-item-240"></a>

### `input_glob`

```rust
fn input_glob(self: &Self) -> &'static str;
```

The glob, relative to the pipeline root, that selects this rule's inputs.

Only two shapes are supported: `directory/*.extension`, or
`*.extension` for a root whose inputs sit directly under it. The rules
need nothing more, and a full glob engine would be a dependency every
build script pays for.

<a id="rustdoc-item-241"></a>

### `output_for`

```rust
fn output_for(self: &Self, input: &Path) -> PathBuf;
```

The output that `input` produces. Its timestamp decides staleness.

<a id="rustdoc-item-242"></a>

### `extra_outputs`

```rust
fn extra_outputs(self: &Self, _input: &Path) -> Vec<PathBuf>;
```

The side outputs written in addition to [`Rule::output_for`](#rustdoc-item-241).

<a id="rustdoc-item-243"></a>

### `extra_inputs`

```rust
fn extra_inputs(self: &Self, _input: &Path) -> Result<Vec<PathBuf>, CookError>;
```

The inputs besides `input` that the rule's build reads, if any.

These are used only for staleness: an output is stale when any of them
is newer than it. The shader rule needs this for the headers its
sources `#include`. A build script can also report those headers to
cargo, but without this list the per-file check would see the output as
fresh and keep a stale cook.

#### Errors

Returns [`CookError::Io`](enum.CookError.md#rustdoc-item-157) when the extra inputs cannot be listed.

<a id="rustdoc-item-244"></a>

### `build`

```rust
fn build(self: &Self, input: &Path, output: &Path) -> Result<(), CookError>;
```

Turn `input` into `output`. Called only while `output` is stale.

#### Errors

Returns [`CookError::Rule`](enum.CookError.md#rustdoc-item-78) when the underlying tool fails. `detail`
carries the tool's own output, so a build script's failure can be read
without rerunning the tool by hand.
