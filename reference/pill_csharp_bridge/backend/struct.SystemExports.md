<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-490"></a>

# Struct `pill_csharp_bridge::backend::SystemExports`

```rust
pub(in backend) struct SystemExports;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:306`

The managed exports one system-registration pass needs.

Collected instead of passed one by one: the pass has two callers - the
startup and the reload that re-registers a changed system set - and both
read the same nine function pointers.

## Fields

<a id="rustdoc-item-552"></a>

### `system_count`

```rust
system_count: extern "System" fn () -> u32
```

Reports how many systems the assembly registered.

<a id="rustdoc-item-553"></a>

### `access_count`

```rust
access_count: extern "System" fn (_: u32) -> u32
```

Reports how many accesses one system declared.

<a id="rustdoc-item-554"></a>

### `get_access`

```rust
get_access: extern "System" fn (_: u32, _: u32, _: *mut super::abi::NativeSystemAccess) -> u8
```

Copies one system's reflected accesses into a caller buffer.

<a id="rustdoc-item-555"></a>

### `system_uses_commands`

```rust
system_uses_commands: extern "System" fn (_: u32) -> u8
```

Reports whether one system declares a Commands parameter.

<a id="rustdoc-item-556"></a>

### `run_system`

```rust
run_system: extern "System" fn (_: u32) -> u8
```

Invokes one system for a frame.

<a id="rustdoc-item-557"></a>

### `system_name_length`

```rust
system_name_length: extern "System" fn (_: u32) -> u32
```

Byte length of one system's reflected name.

<a id="rustdoc-item-558"></a>

### `copy_system_name`

```rust
copy_system_name: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8
```

Copies that name into a caller buffer.

<a id="rustdoc-item-559"></a>

### `system_error_length`

```rust
system_error_length: extern "System" fn (_: u32) -> u32
```

Byte length of the message a failed system left.

<a id="rustdoc-item-560"></a>

### `copy_system_error`

```rust
copy_system_error: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8
```

Copies that message into a caller buffer.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Copy`
