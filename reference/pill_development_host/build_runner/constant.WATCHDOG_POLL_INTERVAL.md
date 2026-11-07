<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-564"></a>

# Constant `pill_development_host::build_runner::WATCHDOG_POLL_INTERVAL`

```rust
pub(in build_runner) const WATCHDOG_POLL_INTERVAL: std::time::Duration = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:146`

How often the watchdog looks for build completion or cancellation.

The interval is short on purpose: a module that needs no work finishes in a
few hundred milliseconds, so a coarse interval adds dead time to every
module load. A hundred milliseconds here means a hundred milliseconds per
module, multiplied by the number of modules. One check is a `try_wait` and
one memory sample, which is cheap enough to run this often, and the shorter
interval also makes a cancellation during a reload arrive sooner.
