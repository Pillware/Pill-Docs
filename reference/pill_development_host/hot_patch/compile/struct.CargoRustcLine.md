<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-593"></a>

# Struct `pill_development_host::hot_patch::compile::CargoRustcLine`

```rust
pub struct CargoRustcLine;
```

Source: `hosting\pill_development_host\src\hot_patch\compile.rs:114`

One captured `rustc` command line, ready to be replayed for a patch build.

## Fields

<a id="rustdoc-item-1918"></a>

### `program`

```rust
program: String
```

Absolute path to the `rustc` cargo actually used, so a toolchain switch
is followed rather than guessed.

<a id="rustdoc-item-1919"></a>

### `args`

```rust
args: Vec<String>
```

Every argument after the compiler, including the original source path.
A replay drops that path and appends the patch's own source file.

## Associated functions and methods

<a id="rustdoc-item-1920"></a>

### `capture`

```rust
pub fn capture(workspace_dir: &Path, package: &str, crate_root: &Path, build_command: &[String]) -> Result<Self, String>;
```

Asks cargo for the `rustc` line it uses to build `package`'s library.

Cargo prints the command only when it compiles the crate. So an
up-to-date crate root is touched to force one rebuild, and the build is
tried again. `build_command` MUST be the host's own command for this
crate, feature flags included: a bare `cargo build -p <package>` line
links a differently-configured `pill_engine`, which gives every patch
`TypeId` a different value.

#### Errors

Returns a message when cargo cannot run, the build fails, the crate root
cannot be touched, or no invocation for `package` appears after forcing
a rebuild.

<a id="rustdoc-item-1921"></a>

### `try_capture`

```rust
pub(in hot_patch::compile) fn try_capture(workspace_dir: &Path, package: &str, build_command: &[String]) -> Result<Option<Self>, String>;
```

Runs one verbose build and returns the invocation, if cargo printed one.

<a id="rustdoc-item-1922"></a>

### `try_capture_within`

```rust
pub(in hot_patch::compile) fn try_capture_within(workspace_dir: &Path, package: &str, build_command: &[String], timeout: Duration) -> Result<Option<Self>, String>;
```

[`Self::try_capture`](#rustdoc-item-1921) with an explicit deadline, so a test can watch one
expire without waiting two minutes for it.

<a id="rustdoc-item-1923"></a>

### `replay`

```rust
pub fn replay(self: &Self, input: &Path, output: &Path, crate_name: &str, extra_externs: &[String], staged_dependencies: Option<&Path>) -> Command;
```

Builds the `rustc` command that compiles `input` into a patch cdylib at
`output`, reusing every dependency flag cargo resolved.

The captured line's crate identity, diagnostics format, emit list and
output directory are replaced. Everything that describes the dependency
graph (`--extern`, `-L`, `--cfg`, `-C prefer-dynamic`) is carried over
unchanged; the linker value is the one exception, and
[`patch_linker_value`](fn.patch_linker_value.md#rustdoc-item-1916) explains why. Keeping the dependency graph
identical is what gives the patch the same view of every type - layout
AND `TypeId` - as the running host.

`extra_externs` are additional `name=path` entries appended as
`--extern`. A patch needs at least the patched crate's own rlib, so its
generated source can `use project::*` and get the identical types the
running module holds.

<a id="rustdoc-item-1925"></a>

### `replay_args`

```rust
pub fn replay_args(self: &Self, input: &Path, output: &Path, crate_name: &str, extra_externs: &[String], staged_dependencies: Option<&Path>) -> Vec<String>;
```

Returns the arguments `replay` passes to `rustc`. Tests use it, and it
can be logged to show the exact command line.

When `staged_dependencies` is given, every `--extern` entry that names a
shared per-crate slot is pointed at the copy staged there, when that
copy exists. Any build of the same crate name overwrites those shared
slots in place, whatever its feature set, so linking one directly can
make a patch fail with `error[E0463]` after an unrelated `cargo build`.
Hash-qualified paths already name one exact configuration and are left
alone. A `.rmeta` entry is first pointed at the `.rlib` beside it; see
[`redirect_extern`](fn.redirect_extern.md#rustdoc-item-1924).

<a id="rustdoc-item-1926"></a>

### `save`

```rust
pub fn save(self: &Self, path: &Path, build_command: &[String]) -> std::io::Result<()>;
```

Saves the captured line, so a later host process can skip the cargo
probe.

The file holds the format version on one line, the build command on the
next, the program on the next, and then one argument per line. No token
contains a newline (they are paths and flags), so nothing needs
escaping.

#### Errors

Returns the I/O error when the cache directory cannot be created or the
file cannot be written.

<a id="rustdoc-item-1928"></a>

### `load_if_fresh`

```rust
pub fn load_if_fresh(path: &Path, inputs: &[PathBuf], build_command: &[String]) -> Option<Self>;
```

Loads a line saved by [`Self::save`](#rustdoc-item-1926).

Returns `None` when the cache is missing, when any input that could
change the flags is newer than the cache or cannot be read, when the
file was written by a different tokenizer, or when `build_command`
differs from the one the cache was captured with.

The build command is part of the key because feature flags live there
and nowhere else. Changing them changes crate metadata and therefore
every `TypeId`, while `Cargo.toml`, `Cargo.lock` and the sources stay
untouched. Keying on modification times alone would happily replay flags
for an engine built with different features.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
