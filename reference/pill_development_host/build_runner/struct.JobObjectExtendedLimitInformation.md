<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-702"></a>

# Struct `pill_development_host::build_runner::JobObjectExtendedLimitInformation`

```rust
pub(in build_runner) struct JobObjectExtendedLimitInformation;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:975`

`JOBOBJECT_EXTENDED_LIMIT_INFORMATION`, the memory layout that the
extended-limit information class expects.

## Fields

<a id="rustdoc-item-696"></a>

### `basic_limit_information`

```rust
basic_limit_information: JobObjectBasicLimitInformation
```

_No documentation provided._

<a id="rustdoc-item-697"></a>

### `io_info`

```rust
io_info: [u64; 6]
```

`IO_COUNTERS`: six `ULONGLONG`s, always zeroed.

<a id="rustdoc-item-698"></a>

### `process_memory_limit`

```rust
process_memory_limit: usize
```

_No documentation provided._

<a id="rustdoc-item-699"></a>

### `job_memory_limit`

```rust
job_memory_limit: usize
```

_No documentation provided._

<a id="rustdoc-item-700"></a>

### `peak_process_memory_used`

```rust
peak_process_memory_used: usize
```

_No documentation provided._

<a id="rustdoc-item-701"></a>

### `peak_job_memory_used`

```rust
peak_job_memory_used: usize
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
