<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-674"></a>

# Struct `pill_development_host::build_runner::JobObjectBasicLimitInformation`

```rust
pub(in build_runner) struct JobObjectBasicLimitInformation;
```

Visibility: `{'restricted': {'parent': 546, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:960`

`JOBOBJECT_BASIC_LIMIT_INFORMATION`, the limits part of the job's extended
limit information.

Only `limit_flags` is ever set. The rest has to be there because the kernel
reads the whole structure through the pointer.

## Fields

<a id="rustdoc-item-665"></a>

### `per_process_user_time_limit`

```rust
per_process_user_time_limit: i64
```

_No documentation provided._

<a id="rustdoc-item-666"></a>

### `per_job_user_time_limit`

```rust
per_job_user_time_limit: i64
```

_No documentation provided._

<a id="rustdoc-item-667"></a>

### `limit_flags`

```rust
limit_flags: u32
```

_No documentation provided._

<a id="rustdoc-item-668"></a>

### `minimum_working_set_size`

```rust
minimum_working_set_size: usize
```

_No documentation provided._

<a id="rustdoc-item-669"></a>

### `maximum_working_set_size`

```rust
maximum_working_set_size: usize
```

_No documentation provided._

<a id="rustdoc-item-670"></a>

### `active_process_limit`

```rust
active_process_limit: u32
```

_No documentation provided._

<a id="rustdoc-item-671"></a>

### `affinity`

```rust
affinity: usize
```

_No documentation provided._

<a id="rustdoc-item-672"></a>

### `priority_class`

```rust
priority_class: u32
```

_No documentation provided._

<a id="rustdoc-item-673"></a>

### `scheduling_class`

```rust
scheduling_class: u32
```

_No documentation provided._

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
