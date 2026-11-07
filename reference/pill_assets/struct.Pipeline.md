<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-84"></a>

# Struct `pill_assets::Pipeline`

```rust
pub struct Pipeline;
```

Source: `assets\pill_assets\src\lib.rs:208`

A set of rules applied under one root directory.

## Fields

<a id="rustdoc-item-271"></a>

### `root`

```rust
root: std::path::PathBuf
```

Directory the rules' globs resolve against.

<a id="rustdoc-item-272"></a>

### `rules`

```rust
rules: Vec<Box<dyn Rule>>
```

Rules to apply, in order.

## Associated functions and methods

<a id="rustdoc-item-273"></a>

### `new`

```rust
pub fn new<impl Into<PathBuf>: Into<PathBuf>>(root: impl Into<PathBuf>) -> Self;
```

Create a pipeline over `root` with the rules every pipeline runs
([`default_rules`](rules/fn.default_rules.md#rustdoc-item-82)).

<a id="rustdoc-item-274"></a>

### `with_rules`

```rust
pub fn with_rules<impl Into<PathBuf>: Into<PathBuf>>(root: impl Into<PathBuf>, rules: Vec<Box<dyn Rule>>) -> Self;
```

Create a pipeline over `root` that runs `rules` instead of
[`default_rules`](rules/fn.default_rules.md#rustdoc-item-82).

Use this when a rule needs configuring first, for example the shader
rule's include path.

<a id="rustdoc-item-85"></a>

### `with_manifest`

```rust
pub fn with_manifest<impl Fn(&str) -> Option<Box<dyn Rule>>: Fn(&str) -> Option<Box<dyn Rule>>>(self: Self, manifest: &Path, resolve_rule: impl Fn(&str) -> Option<Box<dyn Rule>>) -> Result<Self, CookError>;
```

Add the optional rules that `manifest` names, looked up through
`resolve_rule`.

The manifest is plain text: one rule name per line, where `#` starts a
comment and blank lines are skipped. This is how a project opts into
cooking meshes and textures; without a manifest the optional rules stay
off. `resolve_rule` is the caller's registry, so this crate does not
carry the decoders.

#### Errors

Returns [`CookError::Io`](enum.CookError.md#rustdoc-item-157) when the manifest cannot be read. Returns
[`CookError::UnknownRule`](enum.CookError.md#rustdoc-item-217) when the manifest names a rule that
`resolve_rule` does not supply.

<a id="rustdoc-item-250"></a>

### `run`

```rust
pub fn run(self: &Self) -> Result<PipelineStats, CookError>;
```

Cook every stale output.

#### Errors

Returns the first failure and leaves the outputs this pass already wrote
in place. An output is only replaced by a successful build of its own
rule.

#### Examples

A build script reports every discovered input back to cargo:

```no_run
let stats = pill_assets::Pipeline::new("src").run()?;
for input in &stats.discovered_inputs {
    println!("cargo:rerun-if-changed={}", input.display());
}
# Ok::<(), pill_assets::CookError>(())
```

<a id="rustdoc-item-251"></a>

### `plan`

```rust
pub fn plan(self: &Self) -> Result<PipelineStats, CookError>;
```

List what a run would discover, without cooking anything.

`discovered_inputs` and `cook_edges` are filled in; `rebuilt_outputs`,
`skipped_outputs` and `cook_times` stay empty because nothing is built
or timed.

#### Errors

Returns [`CookError::BadGlob`](enum.CookError.md#rustdoc-item-210) or [`CookError::Io`](enum.CookError.md#rustdoc-item-157), the same failures
as [`Pipeline::run`](#rustdoc-item-250).

<a id="rustdoc-item-276"></a>

### `walk`

```rust
pub(crate) fn walk(self: &Self, should_cook: bool) -> Result<PipelineStats, CookError>;
```

Run one pass over every rule, cooking only when `should_cook` is set.

#### Errors

Returns the first failure, as [`Pipeline::run`](#rustdoc-item-250) does.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
