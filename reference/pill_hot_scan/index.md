<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-217"></a>

# pill_hot_scan API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Minimal source scanning for patch classification and generation.

## Responsibilities

- Locate one function's signature and body by name.
- Enumerate every addressable function, with the type and trait that own it.
- Produce the normalized declaration the host and the build scripts compare.
- Collect a file's top-level `use` statements.
- Strip named function bodies, so a body-only edit can be told from any other.

## Design

The host and each crate's build script must agree exactly on where a
function starts and what its declaration says. The host uses that answer to
decide whether an edit can be patched; the build script uses it to record
the addresses and signatures the host later asks for. Sharing one
implementation keeps the two answers identical.

The scanner reads bytes instead of building a syntax tree. Matching braces
over a mask of real-code bytes answers the only two questions asked: where
a function starts and ends, and what changed outside the bodies. A syntax
tree would add a full parse to every save-triggered classification and
would still need byte offsets to copy text unchanged.

When the scanner cannot identify something with confidence, classification
reports "not body-only" and pays a full module reload rather than risk a
wrong patch. The crate has no dependencies, because a build script runs
before everything else and every dependency would be paid on every clean
build.

## Module contents

### Structs
- [`FunctionText`](struct.FunctionText.md#rustdoc-item-11) — One function located in a source file.
- [`HotFunction`](struct.HotFunction.md#rustdoc-item-119) — One function a source file marks as hot-patchable.
- [`ImplBlock`](struct.ImplBlock.md#rustdoc-item-147) — One `impl` block whose methods can be attributed to a named type.

### Enums
- [`HotFunctionKind`](enum.HotFunctionKind.md#rustdoc-item-82) — Which hot-patching route a function's attribute selects.
- [`SkipStrategy`](enum.SkipStrategy.md#rustdoc-item-177) — Whether a scan continues inside a function it just matched.

### Functions
- [`all_functions`](fn.all_functions.md#rustdoc-item-162) — Every function in the file the host could address, annotated or not.
- [`code_mask`](fn.code_mask.md#rustdoc-item-1) — Marks which bytes of `source` are real code.
- [`crate_root_file`](fn.crate_root_file.md#rustdoc-item-207) — Absolute path of the file Cargo compiles as this crate's root.
- [`declaration_has_attribute`](fn.declaration_has_attribute.md#rustdoc-item-172) — Whether `attribute` appears in the block above this declaration.
- [`declaration_is_abi_entry_point`](fn.declaration_is_abi_entry_point.md#rustdoc-item-206) — Whether a declaration carries an attribute that makes it the module ABI's
- [`declaration_is_cfg_gated`](fn.declaration_is_cfg_gated.md#rustdoc-item-171) — Whether a `#[cfg(…)]` sits in the attribute block above this declaration.
- [`declaration_takes_receiver`](fn.declaration_takes_receiver.md#rustdoc-item-173) — Whether the declaration beginning at `fn` takes a receiver.
- [`declares_trait`](fn.declares_trait.md#rustdoc-item-214) — Whether this file declares a trait by that name.
- [`descriptor_at`](fn.descriptor_at.md#rustdoc-item-166) — Build one descriptor from a declaration byte offset.
- [`find_function`](fn.find_function.md#rustdoc-item-76) — Finds the first `fn <name>` declaration and returns its full text.
- [`find_function_in`](fn.find_function_in.md#rustdoc-item-78) — [`find_function`] against a code mask the caller already computed.
- [`find_method`](fn.find_method.md#rustdoc-item-77) — Finds one method's full text, scoped to the `impl` block that owns it.
- [`function_bodies`](fn.function_bodies.md#rustdoc-item-203) — The body text of each named function that this source declares.
- [`generate_function_inventory`](fn.generate_function_inventory.md#rustdoc-item-210) — Generate this crate's function-address inventory into `OUT_DIR`.
- [`hot_function_names`](fn.hot_function_names.md#rustdoc-item-163) — Names of the functions this file marks with `#[pill_hot]` or
- [`hot_functions`](fn.hot_functions.md#rustdoc-item-164) — Every hot function in this file, with the attribute that marked it and the
- [`hot_functions_in`](fn.hot_functions_in.md#rustdoc-item-165) — [`hot_functions`] against a code mask and impl blocks a caller already has.
- [`impl_blocks_for_concrete_types`](fn.impl_blocks_for_concrete_types.md#rustdoc-item-167) — Every `impl` block in the file that names one concrete type.
- [`impl_header_names`](fn.impl_header_names.md#rustdoc-item-168) — The trait and type an `impl` header names, if it names exactly one of each.
- [`inventory_name`](fn.inventory_name.md#rustdoc-item-211) — The name one function is registered and looked up under.
- [`is_identifier_byte`](fn.is_identifier_byte.md#rustdoc-item-174) — Whether a byte is an ASCII identifier character: a letter, a digit or `_`.
- [`matching_brace`](fn.matching_brace.md#rustdoc-item-3) — The matching `}` for the `{` at `open`, searching only real code.
- [`next_open_brace`](fn.next_open_brace.md#rustdoc-item-5) — The first real-code `{` at or after `from`.
- [`normalized_signature`](fn.normalized_signature.md#rustdoc-item-170) — The declaration from `fn` up to the body, with whitespace collapsed.
- [`receiver_path`](fn.receiver_path.md#rustdoc-item-212) — The trailing part of an inventory name: everything after the module path.
- [`rust_files`](fn.rust_files.md#rustdoc-item-215) — Every `.rs` file under `root`, in stable order so the generated file does not
- [`scan_named_functions`](fn.scan_named_functions.md#rustdoc-item-205) — Every declaration of a named function, in source order, in one pass.
- [`simple_path`](fn.simple_path.md#rustdoc-item-169) — One path with no type arguments, or `None`.
- [`strip_function_bodies`](fn.strip_function_bodies.md#rustdoc-item-201) — Replace the bodies of the named functions with a placeholder.
- [`top_level_use_statements`](fn.top_level_use_statements.md#rustdoc-item-79) — Collects the file's top-level `use` statements - the ones outside every
- [`trait_is_nameable_from_crate_root`](fn.trait_is_nameable_from_crate_root.md#rustdoc-item-213) — Whether a trait method's `impl` can be named from the crate root, where the
- [`write_inventory`](fn.write_inventory.md#rustdoc-item-216) — Write the generated inventory, failing loudly rather than leaving a stale one.

### Constants
- [`ABI_ENTRY_POINT_ATTRIBUTES`](constant.ABI_ENTRY_POINT_ATTRIBUTES.md#rustdoc-item-0) — Attributes that turn a function into the module ABI's entry point.
