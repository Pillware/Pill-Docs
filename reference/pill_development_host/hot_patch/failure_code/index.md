<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2350"></a>

# Module `pill_development_host::hot_patch::failure_code`

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:181`

The change was in scope, but the attempt to deliver it did not complete.

## Module contents

### Constants
- [`COMPILE`](constant.COMPILE.md#rustdoc-item-2346) — `rustc` rejected the generated patch.
- [`GENERATE`](constant.GENERATE.md#rustdoc-item-2344) — The patch source for the edited function could not be produced.
- [`INSTALL`](constant.INSTALL.md#rustdoc-item-2349) — A running artifact refused the replacement, typically because the
- [`LOAD`](constant.LOAD.md#rustdoc-item-2347) — The compiled patch could not be mapped into the process.
- [`PREPARE`](constant.PREPARE.md#rustdoc-item-2345) — The scratch directory, the generated source, the staged rlib or the
- [`RESOLVE`](constant.RESOLVE.md#rustdoc-item-2348) — The patch did not report the replacement the host asked for.
