<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2208"></a>

# Module `pill_development_host::hot_patch::source`

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:71`

The source scanner, shared with every crate's build script.

The implementation lives in `pill_hot_scan` because the host and the build
scripts must find exactly the same function start and read exactly the same
declaration. If the two scanners disagreed - for example, if one named a
method through its type and the other did not - every method they disagreed
about would quietly stop being patchable.

Re-exported under this name so `source::` call sites say they are asking
about source text, not about the scanning crate.

## Re-exports

- `pub use pill_hot_scan;`
