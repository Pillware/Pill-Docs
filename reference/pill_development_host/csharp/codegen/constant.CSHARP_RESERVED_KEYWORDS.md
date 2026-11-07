<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1287"></a>

# Constant `pill_development_host::csharp::codegen::CSHARP_RESERVED_KEYWORDS`

```rust
pub(in csharp::codegen) const CSHARP_RESERVED_KEYWORDS: &[&str] = _;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:57`

C# reserved keywords that cannot name a parameter.

A Rust argument can legally carry one of these words (`event`, `string`,
`object`, ...), because Rust's keyword list is different. Emitting it
verbatim would stop the generated project from compiling, so such an
argument falls back to a positional `argN` name. That reads better in
generated code than `@`-escaping, and it keeps working when C# adds a
keyword.
