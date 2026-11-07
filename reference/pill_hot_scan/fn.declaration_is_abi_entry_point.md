<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-206"></a>

# Function `pill_hot_scan::declaration_is_abi_entry_point`

```rust
pub fn declaration_is_abi_entry_point(source: &str, mask: &[bool], declaration_start: usize) -> bool;
```

Source: `hosting\pill_hot_scan\src\lib.rs:1053`

Whether a declaration carries an attribute that makes it the module ABI's
entry point.

A module is free to call its entry point anything. What makes it one is
`#[pill_module]` or `#[pill_project]`, the attribute that generates the
`#[no_mangle]` export the host calls at load time.

`mask` MUST be `code_mask(source)` for this exact `source`, since the
attribute block is found through it.
