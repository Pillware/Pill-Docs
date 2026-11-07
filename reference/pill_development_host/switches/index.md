<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3716"></a>

# Module `pill_development_host::switches`

Visibility: `crate` · Source: `hosting\pill_development_host\src\switches.rs:1`

What this run's watchers are allowed to do, read from the `PILL_*` switches.
The development host's runtime switches: the three environment variables
that decide which file watchers a run starts.

## Responsibilities

- Reads `PILL_HOT_RELOADING`, `PILL_FUNCTION_HOT_PATCHING` and
  `PILL_ASSETS_HOT_RELOADING` once, at startup, and holds the three answers.
- States the one rule that turns a variable's text into a yes or a no.
- Writes the startup line that says which posture the run is in.

The switches only stop watchers. Nothing about the host is compiled out by
them: a run with every switch off still builds the project at startup, still
loads it as a module, and still answers an explicit reload.

## Module contents

### Structs
- [`HostSwitches`](struct.HostSwitches.md#rustdoc-item-3675) — Which watchers this run starts, read once when the host starts.

### Functions
- [`parse_switch`](fn.parse_switch.md#rustdoc-item-3715) — The rule behind every switch: absent, empty or any unrecognized text means
- [`switch_value`](fn.switch_value.md#rustdoc-item-3714) — One switch's answer, read from the environment.

### Constants
- [`ASSETS_HOT_RELOADING_VARIABLE`](constant.ASSETS_HOT_RELOADING_VARIABLE.md#rustdoc-item-3670) — The variable that turns the asset and shader watchers on or off.
- [`FUNCTION_HOT_PATCHING_VARIABLE`](constant.FUNCTION_HOT_PATCHING_VARIABLE.md#rustdoc-item-3669) — The variable that turns the per-function patch fast path on or off.
- [`HOT_RELOADING_VARIABLE`](constant.HOT_RELOADING_VARIABLE.md#rustdoc-item-3668) — The variable that turns the source watchers on or off.
- [`SWITCH_VARIABLES`](constant.SWITCH_VARIABLES.md#rustdoc-item-3671) — The three variable names as one line, for the startup log.
