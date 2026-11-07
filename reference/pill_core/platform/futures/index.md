<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1192"></a>

# Module `pill_core::platform::futures`

Source: `engine\pill_core\src\platform\futures.rs:1`

Running futures: block on native, spawn on the web.
Running futures on every target.

## Responsibilities

- Run a future to completion on the calling thread on native
  ([`block_on`]).
- Start a future that returns nothing ([`spawn`]): it blocks until the
  future finishes on native, and runs on the browser's event loop on the
  web.

## Design

On the web, a future that waits for something from the browser (a timer,
a network fetch) only finishes after the browser's event loop gets control
back. Blocking on such a future stops that loop, so it would never finish;
that is why [`block_on`] exists only on native. Code that needs a future's
value on the web must `.await` it instead.

## Module contents

### Functions
- [`block_on`](fn.block_on.md#rustdoc-item-1190) — Runs `future` to completion on the calling thread and returns its output.
- [`spawn`](fn.spawn.md#rustdoc-item-1189) — Starts `future` and returns nothing.
