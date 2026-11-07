<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2343"></a>

# Module `pill_development_host::hot_patch::refusal_code`

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:159`

The change touched something a patch cannot express.

## Module contents

### Constants
- [`ASSOCIATED_WITHOUT_RECEIVER`](constant.ASSOCIATED_WITHOUT_RECEIVER.md#rustdoc-item-2341) — An associated function without a receiver was edited: the generated
- [`DUPLICATE_DECLARATION`](constant.DUPLICATE_DECLARATION.md#rustdoc-item-2342) — Two addressable declarations in one file share a bare name.
- [`EDITED_BEFORE_ARMING`](constant.EDITED_BEFORE_ARMING.md#rustdoc-item-2339) — The edit happened before this session took its baseline snapshot.
- [`MULTIPLE_FILES`](constant.MULTIPLE_FILES.md#rustdoc-item-2338) — More than one source file changed in the same edit.
- [`NEW_SOURCE_FILE`](constant.NEW_SOURCE_FILE.md#rustdoc-item-2335) — A source file appeared that was not in the baseline snapshot.
- [`NO_HOT_FUNCTION`](constant.NO_HOT_FUNCTION.md#rustdoc-item-2336) — The changed file declares no function the host can address.
- [`OUTSIDE_HOT_BODY`](constant.OUTSIDE_HOT_BODY.md#rustdoc-item-2337) — Something outside a hot body moved: a signature, type, constant, import
- [`UNRESOLVED_RECEIVER`](constant.UNRESOLVED_RECEIVER.md#rustdoc-item-2340) — A method was edited whose `impl` block names no simple receiver type.
