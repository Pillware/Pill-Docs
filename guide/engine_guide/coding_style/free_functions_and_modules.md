# Free Functions, Modules and Types in Rust

## Summary

Rust can lay out the same logic in two ways.

- **A type** is a declaration of data plus the functions written inside its `impl` block. Those functions belong to the type and read or change the instance they are called on.
- **A free function** is declared on its own, outside any `impl`, and belongs to no type. Everything it works on is passed to it.

```rust
// The same calculation, laid out two ways.

// 1. The type owns the data, so the function reads it from the instance.
impl Batch {
    pub fn total_units(&self) -> u32 { /* sums self.units */ }
}
batch.total_units();

// 2. A free function owns nothing: the caller passes what it needs.
fn total_units(units: &[u32]) -> u32 { /* sums the slice */ }
total_units(&units);   // the same sum, from data the caller already holds
```

Both compute the same number. Which shape to write depends on where the data lives: a procedure that owns nothing belongs in a module as a free function, and a thing that owns something belongs on a type.

This document explains that split, shows how to choose between the two, and ends with the rules and the code shapes worth copying.

## At a glance

| Question                                 | Answer                                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| Where does a stateless procedure live?   | In a module, as a free function                                                      |
| What names its subject?                  | The module path: `mixing::run`                                                       |
| When does a type take over?              | When something must be owned across calls, or several operations share the same data |
| Does a type ever hold a single function? | It can, but the call reads as a namespace with extra steps                           |
| Is this peculiar to Rust?                | Only in spelling: Go, Python and TypeScript do the same; C# and Java cannot          |

The three shapes, in one picture:

```
   module::function      a procedure            mixing::run(options)
   Type::function        a constructor          Factory::new()
   Type::method          an operation on data   factory.replace_dispenser(dispenser)
```

## What words does this document use?

| Term                    | Meaning                                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type**                | A declaration of data, plus the functions an `impl` block adds to it: `struct Factory` declares the data, `impl Factory` adds the functions that belong to it.                          |
| **module**              | A namespace that holds items. Its path is how a caller reaches what is inside.                                                                                                          |
| **free function**       | A function declared outside any `impl`: `fn run(options: Options)`.                                                                                                                     |
| **associated function** | A function declared inside an `impl` that takes no `self`: `Factory::new()`.                                                                                                            |
| **method**              | A function declared inside an `impl` whose first parameter is `self`, `&self` or `&mut self`.                                                                                           |
| **constructor**         | This document's word for an associated function whose job is to produce a value of its type. Rust has no such keyword; the word is a convention shared by `new`, `from_*` and `with_*`. |
| **entry point**         | The function a program calls to do its work: `main`, or the `run` of the mode it selected.                                                                                              |

## Why does Rust put the subject in the path instead of a receiver?

Because Rust has modules, and a module is a namespace that can hold functions. A method is one way to tie a function to a subject; a module path is the other.

In C# or Java the choice does not exist. A method must belong to a type, so a stateless procedure is forced into a class and the class name becomes the receiver: `MixingRunner.Run(options)`. Rust lets the same information sit one position to the left.

| Language           | A stateless procedure becomes    | Why                                                  |
| ------------------ | -------------------------------- | ---------------------------------------------------- |
| Rust               | a free function in a module      | modules are namespaces                               |
| Go                 | a function in a package          | packages are namespaces                              |
| Python, TypeScript | a module-level function          | modules are namespaces                               |
| C#, Java           | a `static` method on a class     | a method must belong to a type                       |
| C++                | a free function, or a static one | namespaces exist, though class-heavy style is common |

So the shape that feels "normal" is usually the one the language forced on you.

> **Example:** in C# you write `MixingRunner.Run(options)` because `Run` has to live somewhere. In Rust the same sentence is `mixing::run(options)`. Nothing was lost in the move - the subject is still there, in front of the `::`.

## What does `mixing::run(options)` actually say?

It says "run the mixing mode", and every part of the path carries a word of that sentence.

The examples in this document come from one small program so they stay coherent: a pill-factory tool that either runs a mixing batch or opens an interactive packing session. It has a `Factory` type that owns the production lines, a `Recipe` type that describes what to make (`Tablet`, `Capsule`, `Vial`), and a `Dispenser` trait for the machine that fills them.

```rust
// src/main.rs - exactly one of the two mode modules exists in any build
#[cfg(feature = "packing")]
use crate::cli::packing as mode;
#[cfg(not(feature = "packing"))]
use crate::cli::mixing as mode;

fn main() -> Result<(), Error> {
    mode::run(cli::parse())
}
```

Each mode module holds the whole mode:

```rust
// src/cli/mixing.rs
pub fn run(options: Options) -> Result<(), Error> {
    let mut factory = Factory::from_options(options)?;
    loop {
        // Named through the trait on purpose: `Factory` also has an inherent
        // `step` that cannot fail, and on a concrete `Factory` method syntax
        // would pick that one and shadow this.
        Cycle::step(&mut factory)?;
    }
}
```

There is nothing to hold between calls: `factory` is a local, the loop never returns, and the function ends the process either with a failure or without one. A type around it would own nothing.

> **Example:** the module is the container, the file is the container's implementation, and `run` is the one thing that container does. Compare `std::fs::read`, `std::process::exit`, `std::thread::spawn`: a verb in a namespace, reached by path.

The two mode modules are deliberately symmetric. Both `run` functions take an `Options` and return `Result<(), Error>`, so `main` binds either one and reports the failure once, at a single boundary.

## How do I decide between a module and a type?

Ask what has to exist between one call and the next. If the answer is "nothing", the procedure belongs in a module as a free function. If a resource or a piece of state has to outlive the call, it belongs on a type.

```
   must anything outlive the call?
        |
        +-- no  --> free function, in a module whose path names the subject
        |
        +-- yes --> a type: an associated function to build it, methods to use it
```

Most arguments about this are really arguments about that one question.

### When is a module with a free function the right shape?

When the operation has no subject to carry between calls.

- Nothing to own: no production line, no batch, no dispense queue, no counter.
- One-shot: the caller runs it and gets a result, a value, or an exit.
- Its inputs are already values: a recipe, a line handle, a path.
- It is one of several alternatives chosen at build time, where the module path is what distinguishes them.

That is the shape of `mixing::run`, of `init_factory_log`, and of `line_for`.

### When is a type the right shape?

When data must survive between calls, or when several operations share it.

- It owns a resource whose lifetime matters: a heated vessel, a cleanroom, a sealed blister, a fill rota.
- It has more than one operation over the same state: `load`, `mix`, `dispatch`.
- Callers configure it before running it.
- A test wants to drive it step by step rather than all at once.
- Drop order is part of the contract.

| Typical type | Owns                                                 |
| ------------ | ---------------------------------------------------- |
| `Reactor`    | the vessel, its seal and the batch's temperature log |
| `Blister`    | the formed pockets and their foil                    |
| `Batch`      | its ingredients, dose count and assay record         |
| `Factory`    | the lines, the dispensers and the recipe             |
| `Tablet`     | its own shape, coating and release profile           |
| `Capsule`    | its shell, fill weight and lot id                    |
| `Vial`       | its glass, stopper and fill history                  |

The inverse holds too. A type whose only member is an associated function that never touches `self` is a namespace wearing a type name: it compiles, and it reads as if state existed where none does.

```rust
// Legal, but it buys nothing: the name repeats the module it could have lived in.
struct Mixer;
impl Mixer {
    pub fn run(recipe: &Recipe) -> Result<(), Error> { /* ... */ }
}
```

> **Example:** `Mixer::run(recipe)` and `mixer::run(recipe)` compile to the same thing and read almost the same. The difference appears the day a mixing run has to remember how far it got: the module version starts threading that state through its arguments, while the type already has a place to keep it.

### When does a module stop being enough?

When something has to survive between calls.

Move to a type when:

- state accumulates (a `recipe` module becomes a `Recipe` type the day it caches the parsed formula sheet);
- the module grows several procedures over the same data;
- callers need to set options before running;
- a test needs to observe the middle of a run.

The signal is not "the file got long". It is "the same values are being passed to every function in it".

Two naming smells sit beside this one, and neither calls for a type:

- **The module repeats the crate name.** `pill_tool::mixing_mode` reads `pill_tool::mixing_mode::run`; `mixing::run` says the same with less noise.
- **The module name is a noun where a verb is needed.** `modes::run` beats `mode_runner::do_run`.

## Which shape does mainstream Rust actually use?

Both, each where it fits: free functions for procedures and entry points, types for anything that owns state.

Free functions in the standard library and in widely used crates:

- `std::fs::read`, `std::fs::write`, `std::env::var`, `std::process::exit`, `std::thread::spawn`, `std::mem::swap`, `std::cmp::max`
- `axum::serve`, `clap::parse`, `env_logger::init`, `tracing_subscriber::fmt::init`, `serde_json::to_string`, `rand::random`

Types, because they own something:

- `tokio::runtime::Runtime` (a thread pool), `winit`'s `EventLoop` (platform state), `std::fs::File` (an open handle), `std::net::TcpStream` (a connection), `Vec` (a buffer).

The dividing line is the same in every one of them: **state and resources become a type; a one-shot procedure stays a free function.**

> **Example:** `std::process::Command` is a type, not a function, because a command is built up in steps (`new`, `arg`, `spawn`) and holds that state between them. `std::process::exit` is a function because it holds nothing and never returns.

## What makes a free function readable?

The path has to name the subject, because a bare verb carries no information on its own.

| Call site                     | Reads as             | Verdict                                                     |
| ----------------------------- | -------------------- | ----------------------------------------------------------- |
| `mixing::run(options)`        | run the mixing mode  | good - the module is the subject                            |
| `packing::run(options)`       | run the packing mode | good                                                        |
| `run::run(options)`           | run run              | bad - nothing names the subject                             |
| `cli::run(options)`           | run the CLI          | acceptable while `cli` holds the only entry point           |
| `crate::run(options)`         | run this crate       | acceptable only while the crate has exactly one entry point |
| `load_formulary(name, bytes)` | load the formulary   | good - the name carries its own object                      |

The table has a corollary. Once a module holds several procedures of one kind, each name has to distinguish them: `run` works in `mixing` because it is the only procedure there, while a module with three entry points needs `run_mixing`, `run_packing` and `run_qc`.

## What can a module express that a type cannot?

Two things, and both are reasons to prefer a module when they apply.

**Compile-time alternatives.** One private module can be defined twice under opposite `cfg`s and re-exported, so one name resolves to different code per build:

```rust
#[cfg(feature = "cleanroom")]
mod cleanroom { /* pub fn open(..) -> .. */ }

#[cfg(not(feature = "cleanroom"))]
mod cleanroom { /* pub fn open(..) -> .. */ }

pub use cleanroom::open;
```

That is polymorphism without a trait object. The branch that is not selected is never compiled, where a trait object would choose at run time.

**Visibility as the unit of publishing.** A private module with a `pub use` at the end publishes one name out of many files, which is how a directory of small free functions becomes a single entry point.

> **Example:** a `floor` directory holds `mix.rs`, `press.rs` and `coat.rs`, each with one free function. `floor/mod.rs` ends with `pub use coat::coat; pub use mix::mix; pub use press::press;`, so callers see `floor::mix` and `floor::coat` while the code stays split by concern.

## Should the loop be its own function?

Only when a second caller needs the same loop. With one loop per mode, splitting it adds a name and a generic bound for a single call site.

The split, if it ever earns its place:

```rust
pub fn run(options: Options) -> Result<(), Error> {
    run_to_exit(Factory::from_options(options)?)
}

/// Drive the given factory until it fails or exits. The call stays
/// trait-qualified: `Factory` also has an inherent `step` that returns `()`, and
/// on a concrete `Factory` method syntax would shadow this one.
fn run_to_exit<F: Cycle>(mut factory: F) -> Result<(), Error>
where
    Error: From<F::Error>,
{
    loop {
        Cycle::step(&mut factory)?;
    }
}
```

Naming the trait there is not decoration. An inherent method always wins over a trait method of the same name, so on a concrete `Factory` the method syntax would reach the infallible `step`, the `?` would stop compiling, and the two modes would no longer share a loop shape.

## Exceptions and limitations

- **No overloading.** Two constructors need two names: `Factory::new` and `Factory::from_recipe`, not `Factory::new(recipe)`.
- **The orphan rule.** No inherent methods on another crate's type, so helpers for a foreign type stay free functions. An extension trait is the alternative, and it costs an import at every call site.
- **Inherent impls live with their type.** A type's `impl` blocks can sit in any module of the crate that defines it, so "one type per file" and "one concern per file" can disagree; the type wins.
- **A module has no instance.** It has no `Drop`, no per-instance state and no way to be passed as a value, which is exactly why it suits something stateless.
- **An entry point is not a library API.** Renaming or deleting `mixing::run` breaks nobody outside the binary, while renaming a public constructor breaks every caller.

## How do I keep a codebase consistent?

Turn on the three clippy lints that catch the typical mistakes, then review new public functions against the checklist at the end of this document.

```rust
// src/lib.rs or src/main.rs, before any item
#![warn(clippy::new_without_default)]   // `new` paired with `Default`
#![warn(clippy::unused_self)]           // a method that never touches `self`
#![warn(clippy::wrong_self_convention)] // `into_` / `as_` / `from_` used against their meaning
```

The first and third are already in clippy's default `style` group, so naming them only documents the intent. `unused_self` is a `pedantic` lint and stays silent until it is named. None of the three can tell you whether a function should have been a method in the first place - that is what the checklist is for.

> **Example:** a reviewer sees `pub fn validate_recipe(recipe: &Recipe) -> bool` in the diff. The lints stay quiet, because nothing here is technically wrong. The checklist answers it in one step: the subject is a `Recipe` instance, so the function is `Recipe::validate(&self)`.

---

# Guidelines

These are the rules to apply, ordered by how often they decide the question.

## 1. The default is a method

A function whose subject is an instance goes on the type.

- `&self` reads the receiver;
- `&mut self` changes the receiver's state;
- `self` consumes it.

If the first thing a function needs is `&mut self`, and you wrote it free taking `&mut self` as an argument, it is a method that got misplaced. `Recipe::validate(&self)` is right; `validate_recipe(recipe)` would be wrong.

## 2. Anything that produces a `T` is `T`'s constructor

A function whose job is to produce a value of type `T` hangs on `T`. There is no `create_factory(...)` at the crate root.

| Shape                                               | Name               | Example                      |
| --------------------------------------------------- | ------------------ | ---------------------------- |
| simplest, no configuration, cannot fail             | `new`              | `Factory::new()`             |
| converts from an existing value, no I/O             | `from_*`           | `Batch::from_lot_record`     |
| same construction plus one extra piece              | `with_*`           | `Capsule::with_fill_weight`  |
| does real work (I/O, device creation, registration) | a descriptive verb | `Batch::start`, `File::open` |

`new` is reserved for the no-argument, infallible constructor; `clippy::new_without_default` enforces half of that. Fallible or configured constructors get their own descriptive names, because Rust has no overloading and pretending `new` covers them only hides the arguments.

## 3. Conversions between your own types go on the produced type

`Batch::start(recipe, dispenser)` - not `start_batch(recipe, dispenser)`, and not `Recipe::into_batch(recipe)`.

Use `From`/`TryFrom` only when the conversion is plain and cheap. A converter that opens lines, reads lot records, registers doses or builds a fill rota is a named constructor, because it has effects a reader must see in the signature.

## 4. Free functions are for the five remaining cases

| Case                                       | Why free                                            | Example                                                    |
| ------------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------- |
| operates on a **foreign type**             | the orphan rule forbids the inherent impl           | `register_compounds(catalog)` for `pharma_api::Catalog`    |
| operates on **process-global state**       | there is no receiver; the side effect is the point  | `init_factory_log`, `install_panic_hook`, `load_formulary` |
| must run **before** an instance exists     | an `&mut self` method cannot express the ordering   | reading the recipe before `Factory::from_recipe`           |
| a **pure helper** with no natural receiver | nothing to hang it on                               | `line_for(batch_id, line_count)`                           |
| an **entry point** a binary selects        | stateless, one-shot, and its path names the subject | `mixing::run`, `packing::run`                              |

In every one of the five, the name must carry its subject - `load_formulary`, not `load`; `register_compounds`, not `register`.

## 5. Borrow-driven free functions stay private

Sometimes a method would not compile because the body needs several fields borrowed disjointly (`run_stages` destructures `FactoryState`). That is a legitimate reason for a free function - but then it is an implementation detail: `pub(crate)` or private, with a comment saying why it is not a method. It must never appear on the public surface.

## 6. Public surface is a budget

Every `pub` free function is a name the crate root has to justify. Before adding one, ask whether a type could own it. After moving a constructor onto its type, the root should shrink - as it does when `open_factory`, `open_factory_with_lines` and `start_batch` become `Factory::from_recipe`, `Factory::from_recipe_with_lines` and `Batch::start`.

## 7. No aliases for symmetry

A one-line free function that only forwards to a method (`mix_once(factory)` -> `factory.mix()`) is not an API, it is a typo with a doc comment. Delete it. If two types must present the same facade, that is what a trait is for.

## 8. Naming addenda

- No `create_*`, `make_*`, `build_*` for constructors (builders aside); no `get_*` except fallible lookups returning `Option`/`Result`.
- No `*_impl`, `*_internal`, `*_inner` on anything public.
- A constructor's name says what it is made from: `from_recipe`, `from_recipe_with_lines`, `from_lot_record` - not `from_data`.
- A free function's name says what it acts on, unless its module path already does.

## The decision checklist

1. Does it produce a `T`? -> constructor on `T`.
2. Is its subject a `T` instance? -> method on `T`.
3. Is the subject a foreign type or global state? -> free function.
4. Is it a private helper forced free by borrowing? -> keep it private.
5. Is it an entry point selected by the build? -> free function in a module that names it.
6. Is it an alias? -> delete it.

---

# Preferred snippets

## 1. Simplest constructor - `new`, no config, no failure

```rust
impl Factory {
    pub fn new() -> Self { /* idle lines, default recipe */ }
}

// Clippy enforces the pairing; do not skip it.
impl Default for Factory {
    fn default() -> Self { Self::new() }
}
```

## 2. Constructor from a description - associated `from_*`

```rust
impl Factory {
    /// Warms the lines, then loads them from `recipe`.
    pub fn from_recipe(recipe: Recipe) -> Result<Self, Error> { /* ... */ }
}

// not: pub fn setup(recipe: Recipe) -> Result<Factory, Error>
```

The constructor is where the ordering invariant lives; callers cannot reorder it.

## 3. Same constructor plus one extra piece - `with_*`

```rust
impl Factory {
    pub fn from_recipe_with_lines(
        recipe: Recipe,
        lines: Option<Vec<Line>>,   // already built by the caller
    ) -> Result<Self, Error> { /* ... */ }
}
```

`with_` means "the same construction, one more input". Use `from_x_with_y` only when both inputs matter.

## 4. Constructor that does real work - descriptive verb, not `new`

```rust
impl Batch {
    /// Registers the lot id, then starts the batch on `dispenser`.
    pub async fn start(
        recipe: Recipe,
        dispenser: Box<dyn Dispenser>,
    ) -> Result<Self, Error> { /* ... */ }
}

// std precedent: File::open, TcpStream::connect.
// not: pub async fn start_batch(recipe: Recipe, ...) -> Result<Batch, Error>
```

It lives beside `Batch`, so the module's `#[cfg(feature = "...")]` stays in one place instead of adding cfg'd methods to the core type.

## 5. Conversion between your own types

```rust
// Plain, cheap, lossless-ish: a trait impl.
impl From<LineError> for Error {
    fn from(error: LineError) -> Self { Self::Line(error) }
}

// Has effects (warms a line, registers a lot): a named constructor.
impl Batch {
    pub async fn start(recipe: Recipe, dispenser: Box<dyn Dispenser>) -> Result<Self, Error> { /* ... */ }
}
```

The rule: `From`/`TryFrom` for data conversions; a verb when the constructor does I/O or mutates global state.

## 6. Method that changes the receiver

```rust
impl Factory {
    /// New dispenser on the same line; re-applies the previous dispenser's settings.
    pub fn replace_dispenser(&mut self, dispenser: Box<dyn Dispenser>) { /* ... */ }

    /// New dispenser and new lines.
    fn install_layout(&mut self, parts: LineParts) -> Result<(), Error> { /* ... */ }
}

// not: pub fn replace_dispenser(factory: &mut Factory, dispenser: ...)
```

If the first argument is `&mut self`, it is a method that got misplaced.

## 7. Accessors, the convention most Rust codebases share

```rust
impl Factory {
    pub fn recipe(&self) -> &Recipe { &self.recipe }
    pub fn recipe_mut(&mut self) -> &mut Recipe { &mut self.recipe }
}
```

`x()` for the shared borrow, `x_mut()` for the exclusive one. No `get_recipe()`; `get_` is reserved for fallible lookups.

## 8. Free function because the type is foreign

```rust
/// Cannot be an inherent method: `Catalog` belongs to another crate.
pub fn register_compounds(catalog: &mut pharma_api::Catalog) { /* ... */ }

pub fn set_expiry(dose: &mut pharma_api::Dose, expiry: Date) { /* ... */ }
```

The name carries its subject - `register_compounds`, never `register`.

## 9. Free function because the state is process-global

```rust
/// Installs the process-wide factory log; there is no receiver.
pub fn init_factory_log(
    log_directory: Option<PathBuf>,
) -> Result<LogGuard, LogError>;

/// Fills the process-wide formulary and returns its index. Must run before a
/// `Factory` exists, and the side effect is the point.
pub fn load_formulary(
    name: &str,
    source: FormularySource,
    bytes: impl Into<Cow<'static, [u8]>>,
) -> Result<FormularyIndex, Error>;
```

## 10. Free function as a pure helper

```rust
/// Which production line a batch goes to. No state, no I/O, trivially testable.
pub fn line_for(batch_id: &str, line_count: usize) -> LineId {
    // ...
}
```

## 11. Free function forced by borrows - private, with the reason

```rust
/// Destructures the state so the lines, the batches and the dispense queue are
/// borrowed as disjoint fields; a method could not compile here.
pub(crate) fn run_stages(state: &mut FactoryState) -> Vec<Stage> { /* ... */ }
```

Allowed, but it stays off the public surface and the comment says why it is not a method.

## 12. Entry point as a free function in a module that names it

```rust
// src/cli/mixing.rs
pub fn run(options: Options) -> Result<(), Error> {
    let mut factory = Factory::from_options(options)?;
    loop {
        // Named through the trait on purpose: `Factory` also has an inherent
        // `step` that cannot fail, and on a concrete `Factory` method syntax
        // would pick that one and shadow this.
        Cycle::step(&mut factory)?;
    }
}
```

No state crosses a call boundary, so there is nothing for a type to hold. The module path supplies the subject; `mixing::run` reads as one sentence.

## 13. Constructor naming at a glance

```rust
impl Batch {
    pub fn new() -> Self;                                                             // no config, infallible
    pub fn from_lot_record(record: &Record) -> Result<Self, E>;                       // from an existing value
    pub fn with_lot_id(lot_id: String) -> Self;                                       // new + one piece
    pub fn from_recipe_with_options(recipe: &Recipe, options: Options) -> Result<Self, E>; // both matter
    pub async fn start(recipe: Recipe, dispenser: Box<dyn Dispenser>) -> Result<Self, E>;  // does work
}
```

## The one-line rule

**Produces a `T` -> constructor on `T`. Subject is a `T` -> method. Foreign type, global state, pre-construction ordering, or a build-selected entry point -> free function. Forced free by borrows -> private. Alias -> delete.**

---

# Preferred versus anti

Same situations, preferred versus anti, one verdict each.

## 1. Simplest constructor

```rust
// preferred
impl Factory {
    pub fn new() -> Self { /* ... */ }
}
impl Default for Factory {
    fn default() -> Self { Self::new() }
}
```

```rust
// anti
pub fn create_factory() -> Factory { Factory::new() }
// and: impl Factory { pub fn new() -> Result<Self, Error> }
```

A factory free function hides the constructor from the type's docs; a `new` that can fail breaks the one convention clippy and readers both rely on.

## 2. Constructor from a description

```rust
// preferred
impl Factory {
    /// Warms the lines, then loads them from `recipe`.
    pub fn from_recipe(recipe: Recipe) -> Result<Self, Error> { /* ... */ }
}
```

```rust
// anti
pub fn setup(recipe: Recipe) -> Result<Factory, Error> { /* ... */ }
```

It produces a `Factory` and lives anywhere but on `Factory`; the ordering invariant is invisible from the type.

## 3. Constructor with one extra piece

```rust
// preferred
impl Factory {
    pub fn from_recipe_with_lines(
        recipe: Recipe,
        lines: Option<Vec<Line>>,
    ) -> Result<Self, Error> { /* ... */ }
}
```

```rust
// anti
pub fn setup_with_lines(recipe: Recipe, lines: Option<Vec<Line>>) -> Result<Factory, Error> { /* ... */ }
```

Same construction, one more input - `with_` says that; a second free `setup_*` name does not.

## 4. Constructor that does real work

```rust
// preferred
impl Batch {
    pub async fn start(recipe: Recipe, dispenser: Box<dyn Dispenser>) -> Result<Self, Error> { /* ... */ }
}
```

```rust
// anti
pub async fn start_batch(recipe: Recipe, dispenser: Box<dyn Dispenser>) -> Result<Batch, Error> { /* ... */ }
```

The result type is the subject; a descriptive verb (`File::open`, `TcpStream::connect`) is the right name, on the produced type.

## 5. Conversion between your own types

```rust
// preferred: plain data conversion
impl From<LineError> for Error {
    fn from(error: LineError) -> Self { Self::Line(error) }
}

// preferred: a conversion with effects is a named constructor
impl Batch {
    pub async fn start(recipe: Recipe, dispenser: Box<dyn Dispenser>) -> Result<Self, Error> { /* ... */ }
}
```

```rust
// anti
pub fn into_batch(recipe: Recipe, dispenser: Box<dyn Dispenser>) -> Result<Batch, Error> { /* ... */ }
```

`into_` promises a method on a receiver; as a free function it is a lie, and `From` would promise cheapness this conversion does not have.

## 6. Method that changes the receiver

```rust
// preferred
impl Factory {
    /// New dispenser on the same line; re-applies the previous dispenser's settings.
    pub fn replace_dispenser(&mut self, dispenser: Box<dyn Dispenser>) { /* ... */ }
}
```

```rust
// anti
pub fn replace_dispenser(factory: &mut Factory, dispenser: Box<dyn Dispenser>) { /* ... */ }
```

`&mut self` as the first argument and written free: the call site reads `replace_dispenser(&mut factory, ..)` and the method is simply misplaced.

## 7. Accessors

```rust
// preferred
impl Factory {
    pub fn recipe(&self) -> &Recipe { &self.recipe }
    pub fn recipe_mut(&mut self) -> &mut Recipe { &mut self.recipe }
}
```

```rust
// anti
impl Factory {
    pub fn get_recipe(&self) -> &Recipe { &self.recipe }
    pub fn get_recipe_mut(&mut self) -> &mut Recipe { &mut self.recipe }
}
```

`get_` belongs to fallible lookups returning `Option`; the community convention is `x()` / `x_mut()`.

## 8. Free function because the type is foreign

```rust
// preferred
pub fn register_compounds(catalog: &mut pharma_api::Catalog) { /* ... */ }
```

```rust
// anti
pub trait CatalogCompoundsExt {
    fn register_compounds(&mut self);
}
impl CatalogCompoundsExt for pharma_api::Catalog { /* ... */ }
```

A local extension trait to fake a method on another crate's type: every caller must import the trait, and the crate publishes a name for nothing. (`impl pharma_api::Catalog` would not compile - orphan rule.)

## 9. Free function because the state is global

```rust
// preferred
pub fn init_factory_log(log_directory: Option<PathBuf>) -> Result<LogGuard, LogError>;
```

```rust
// anti
pub struct FactoryLog;
impl FactoryLog {
    pub fn init(&mut self) -> Result<(), LogError> { /* installs the global log */ }
}
```

A manager object over process-global state: nothing stops a second instance, and the API pretends the state is per-value when it is not.

## 10. Free function as a pure helper

```rust
// preferred
pub fn line_for(batch_id: &str, line_count: usize) -> LineId { /* ... */ }
```

```rust
// anti
impl Factory {
    pub fn line_for(&self, batch_id: &str) -> LineId { /* touches no field */ }
}
```

A method that never uses `self` implies state it does not have (clippy's `unused_self` agrees), and it forces a whole factory to be built before an id can be hashed.

## 11. Free function forced by borrows

```rust
// preferred: private, with the reason
pub(crate) fn run_stages(state: &mut FactoryState) -> Vec<Stage> { /* destructures state */ }
```

```rust
// anti
pub fn run_stages(state: &mut FactoryState) -> Vec<Stage> { /* same body */ }
```

An implementation detail kept public because it could not be a method. It is not an API, so it must not be one - `pub(crate)` or private.

## 12. The alias

```rust
// preferred
factory.mix()?;
```

```rust
// anti
pub fn mix_once(factory: &mut Factory) -> Result<(), Error> {
    factory.mix()
}
```

One-line forwarding is not an API. If two types must look alike, that is what a trait is for.

## 13. Entry point - module versus namespace struct

```rust
// preferred: the module is the namespace
// src/cli/mixing.rs
pub fn run(options: Options) -> Result<(), Error> { /* ... */ }

// src/main.rs
mode::run(cli::parse())
```

```rust
// anti: a type that only renames the module path
pub struct MixingRunner;
impl MixingRunner {
    pub fn run(options: Options) -> Result<(), Error> { /* same body */ }
}

// src/main.rs
MixingRunner::run(cli::parse())
```

The same call with one more name to declare and one more concept to learn. The struct earns its place only when it starts holding something - a stage counter a test can advance, per-run configuration, a stop request.

## 14. Constructor names

| Preferred                                        | Anti                                                    |
| ------------------------------------------------ | ------------------------------------------------------- |
| `Factory::new()`                                 | `Factory::create()` / `make_factory()`                  |
| `Factory::from_recipe(recipe)`                   | `Factory::from_data(data)`                              |
| `Factory::from_recipe_with_lines(recipe, lines)` | `Factory::new_2(recipe, lines)`                         |
| `Batch::start(recipe, dispenser)`                | `Batch::new(recipe, dispenser)` when it registers a lot |
| `File::open`-style verb for I/O                  | `new` for anything that can block or fail               |

**Rule:** produces a `T` -> constructor on `T`; subject is a `T` -> method; foreign type, global state, pre-construction ordering, or a build-selected entry point -> free function; forced free by borrows -> private; alias -> delete.
