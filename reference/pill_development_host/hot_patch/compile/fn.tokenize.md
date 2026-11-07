<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1908"></a>

# Function `pill_development_host::hot_patch::compile::tokenize`

```rust
pub(in hot_patch::compile) fn tokenize(command_line: &str) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:688`

Splits a command line into tokens, following cargo's quote grouping.

Cargo quotes any argument that contains a space or a backslash, which on
Windows means most paths. Single quotes only group: cargo escapes nothing
inside them, and paths cannot contain a single quote. Double quotes carry
backslash escapes, which cargo uses for a value that itself contains a
double quote.
