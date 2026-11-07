<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2045"></a>

# Struct `pill_development_host::hot_patch::imports::PatchScope`

```rust
pub(in hot_patch) struct PatchScope<'a>;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:38`

The module context one generated patch is rooted in.

## Fields

<a id="rustdoc-item-2041"></a>

### `package`

```rust
package: &'a str
```

The patched package, which takes the place of `crate`.

<a id="rustdoc-item-2042"></a>

### `source_root`

```rust
source_root: &'a std::path::Path
```

The patched crate's source directory, where its modules' files live.

<a id="rustdoc-item-2043"></a>

### `crate_root`

```rust
crate_root: &'a std::path::Path
```

The patched crate's root file, whose public names the generated
`use <package>::*` already reaches.

<a id="rustdoc-item-2044"></a>

### `module_path`

```rust
module_path: &'a [String]
```

The changed file's module path, the package first.

## Associated functions and methods

<a id="rustdoc-item-2046"></a>

### `imports_for`

```rust
pub(in hot_patch) fn imports_for(self: &Self, file_source: &str, statements: &[String], body: &str) -> Vec<String>;
```

The `use` statements a patch for one body needs: the changed file's own
public items the body names, then the file's imports the body can name.

A glob is kept whatever the body says, because the names it brings in
cannot be listed here.

<a id="rustdoc-item-2047"></a>

### `own_items_used_by`

```rust
pub(in hot_patch::imports) fn own_items_used_by(self: &Self, own_item_names: &[String], body: &str) -> Vec<String>;
```

Imports for the changed file's own public items that the body names and
the crate root does not provide.

The crate root contributes nothing here: the generated source already
imports the package, so its own public items are in scope.

<a id="rustdoc-item-2049"></a>

### `rooted`

```rust
pub(in hot_patch::imports) fn rooted(self: &Self, statement: &str, path: &str) -> String;
```

The statement with its first path segment rewritten so the patch crate
resolves it, or the statement unchanged when it already names a crate
the patch links.

<a id="rustdoc-item-2050"></a>

### `declares_module`

```rust
pub(in hot_patch::imports) fn declares_module(self: &Self, name: &str) -> bool;
```

Whether the changed file's module declares a child module called
`name`.

The answer is read from the module's folder, which is the only place
the scanner can see it: `src/<name>.rs` for a module of the crate root,
and `src/<module>/<name>.rs` below it.

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
