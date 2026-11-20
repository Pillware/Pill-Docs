<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3549"></a>

# Module `pill_development_host::notices`

Visibility: `crate` · Source: `hosting\pill_development_host\src\notices.rs:1`

Reloads, patches, failures and rollbacks, queued as notices for an attached
editor.
Host activity notes for an attached editor frontend.

## Responsibilities

- Define [`HostNotice`](enum.HostNotice.md#rustdoc-item-3553): what happened, in editor-agnostic terms.
- Queue notices from anywhere in `pill_development_host`, dropping the
  oldest once the queue is full.
- Hand the queue to the frontend's per-frame drain ([`take`]).

## Design

The host already reports reloads, patches, failures and rollbacks as log
lines, but a log line is only text. An editor frontend needs the values
behind it - which module, how long the build took, which generation now
runs - to raise its own notices and fill its problems list, so the same
events are queued here as plain data as well.

The queue is process-global, like the analytics collector: the events are
raised from `&mut DevHost` paths, from reload reports and from places that
hold no host reference, and the editor wants them all in one list. A host
with no editor attached never drains the queue, so [`NOTICE_CAPACITY`]
keeps it bounded.

A notice carries owned strings only. Queues and drains run on the host's
main thread - the startup loads queue before the first frame - and the
build runner's reader thread never writes here, so the mutex alone is
enough.

## Module contents

### Enums
- [`HostNotice`](enum.HostNotice.md#rustdoc-item-3553) — One event the host reports to an attached editor frontend.

### Functions
- [`notice_kind_log_name`](fn.notice_kind_log_name.md#rustdoc-item-3599) — The name a notice's kind is logged under.
- [`push`](fn.push.md#rustdoc-item-3550) — Queues one notice for the frontend's next drain, dropping the oldest when
- [`take`](fn.take.md#rustdoc-item-3551) — Takes every queued notice, oldest first.

### Constants
- [`NOTICE_CAPACITY`](constant.NOTICE_CAPACITY.md#rustdoc-item-3548) — How many notices can wait for a drain; past this the oldest are dropped.

### Statics
- [`NOTICE_QUEUE`](static.NOTICE_QUEUE.md#rustdoc-item-3552) — The queue [`push`] fills and [`take`] empties.
