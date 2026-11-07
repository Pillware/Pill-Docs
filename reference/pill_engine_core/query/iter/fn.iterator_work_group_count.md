<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6938"></a>

# Function `pill_engine_core::query::iter::iterator_work_group_count`

```rust
pub(in query::iter) fn iterator_work_group_count(hint_nanoseconds: u64, pool_threads: usize, slice_count: usize) -> usize;
```

Visibility: `{'restricted': {'parent': 6787, 'path': '::query::iter'}}` · Source: `engine\pill_engine_core\src\query\iter.rs:873`

Returns how many Rayon tasks one parallel iteration is split into.

The count comes from the measured time of earlier runs: one task per
`TARGET_ITERATOR_WORK_GROUP_DURATION` of that time, so a short loop is not
cut into tasks that cost more to schedule than they save. The count never
passes `WORK_GROUPS_PER_THREAD` per pool thread, and never passes the number
of slices. With no measurement yet, it is one task per thread.

More tasks than threads keeps a long loop balanced on a CPU whose threads do
not all run equally fast, such as a hybrid CPU with efficiency cores or two
hyperthreads sharing one core. With exactly one task per thread, the loop
waits for whichever task landed on the slowest thread. With several tasks per
thread, the faster threads take the tasks the slower ones have not reached.
