<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1910"></a>

# Module `pill_development_host::hot_patch::compile`

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:1`

Patch compilation: the rustc invocation and its artifacts.
Capturing and replaying the exact `rustc` invocation cargo uses.

## Responsibilities

- Ask cargo once, in verbose mode, for the command it builds a crate with.
- Replay that command with a different input file and output path.
- Cache the result, invalidated by the build command and the inputs'
  modification times.

## Design

Working out `--extern` and `-L native` by hand is the most fragile part of
a patch pipeline. It means naming one rlib metadata hash and every registry
path, so it breaks whenever a dependency changes and cannot run on another
machine. Cargo already knows the right answer, so this asks it instead of
guessing. A patch then links exactly the artifacts the running module
linked, which is what keeps type layout AND `TypeId` identical across the
boundary.

```ignore
let line = CargoRustcLine::capture(&workspace, "project", &lib_rs, &build_command)?;
let output = line
    .replay(&patch_source, &patch_dll, "pill_hotpatch_7", &[project_rlib], None)
    .output()?;
```

## Module contents

### Structs
- [`CargoRustcLine`](struct.CargoRustcLine.md#rustdoc-item-593) — One captured `rustc` command line, ready to be replayed for a patch build.

### Functions
- [`compiler_token_index`](fn.compiler_token_index.md#rustdoc-item-1966) — Returns the index of the actual `rustc` binary in a captured invocation.
- [`extract_backticked`](fn.extract_backticked.md#rustdoc-item-1965) — Returns the command from cargo's ``Running `...` `` line.
- [`flags_cache_path`](fn.flags_cache_path.md#rustdoc-item-1962) — Returns where a package's captured flags are cached between processes.
- [`parse_rustc_line`](fn.parse_rustc_line.md#rustdoc-item-1963) — Returns the invocation for `crate_name` from one line of cargo's `-v`
- [`patch_linker_value`](fn.patch_linker_value.md#rustdoc-item-1916) — Returns the linker value the patch is built with, given the one cargo
- [`redirect_extern`](fn.redirect_extern.md#rustdoc-item-1924) — Points one `--extern name=path` entry at the artifact a patch can use.
- [`tokenize`](fn.tokenize.md#rustdoc-item-1908) — Splits a command line into tokens, following cargo's quote grouping.
- [`touch`](fn.touch.md#rustdoc-item-1964) — Updates a file's modification time without changing its contents.

### Constants
- [`CACHE_FORMAT_VERSION`](constant.CACHE_FORMAT_VERSION.md#rustdoc-item-1909) — The version of the tokenizer that wrote a cached compiler line.
- [`CAPTURE_POLL_INTERVAL`](constant.CAPTURE_POLL_INTERVAL.md#rustdoc-item-1912) — How often the capture checks whether its cargo has finished.
- [`CAPTURE_TIMEOUT`](constant.CAPTURE_TIMEOUT.md#rustdoc-item-1911) — The longest time one flag capture may take before it gives up.
- [`DROPPED_CODEGEN_VALUES`](constant.DROPPED_CODEGEN_VALUES.md#rustdoc-item-1914) — `-C` values that are dropped when a patch is built.
- [`DROPPED_FLAGS`](constant.DROPPED_FLAGS.md#rustdoc-item-1915) — Whole flags that are dropped when a patch is built, together with their
- [`PATCH_LINKER`](constant.PATCH_LINKER.md#rustdoc-item-1917) — The linker [`patch_linker_value`] uses in place of a recorded linker that
- [`TWO_TOKEN_FLAGS`](constant.TWO_TOKEN_FLAGS.md#rustdoc-item-1913) — Flags whose value is the next token (`-C` `opt-level=0`), so the parser must
