<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-500"></a>

# Struct `pill_csharp_bridge::backend::SystemExports`

```rust
pub(in backend) struct SystemExports;
```

Visibility: `{'restricted': {'parent': 403, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:325`

The managed exports one system-registration pass needs.

Collected instead of passed one by one: the pass has two callers - the
startup and the reload that re-registers a changed system set - and both
read the same twelve function pointers.

## Fields

<a id="rustdoc-item-562"></a>

### `system_count`

```rust
system_count: extern "System" fn () -> u32
```

Reports how many systems the assembly registered.

<a id="rustdoc-item-563"></a>

### `access_count`

```rust
access_count: extern "System" fn (_: u32) -> u32
```

Reports how many accesses one system declared.

<a id="rustdoc-item-564"></a>

### `get_access`

```rust
get_access: extern "System" fn (_: u32, _: u32, _: *mut super::abi::NativeSystemAccess) -> u8
```

Copies one system's reflected accesses into a caller buffer.

<a id="rustdoc-item-565"></a>

### `system_uses_commands`

```rust
system_uses_commands: extern "System" fn (_: u32) -> u8
```

Reports whether one system declares a Commands parameter.

<a id="rustdoc-item-566"></a>

### `system_order`

```rust
system_order: extern "System" fn (_: u32) -> i32
```

Reports one system's declared order within its phase.

<a id="rustdoc-item-567"></a>

### `system_run_phase`

```rust
system_run_phase: extern "System" fn (_: u32) -> u8
```

Reports one system's declared frame phase (0, 1 or 2).

<a id="rustdoc-item-568"></a>

### `system_run_in_edit_mode`

```rust
system_run_in_edit_mode: extern "System" fn (_: u32) -> u8
```

Reports whether one system also runs in edit mode.

<a id="rustdoc-item-569"></a>

### `run_system`

```rust
run_system: extern "System" fn (_: u32) -> u8
```

Invokes one system for a frame.

<a id="rustdoc-item-570"></a>

### `system_name_length`

```rust
system_name_length: extern "System" fn (_: u32) -> u32
```

Byte length of one system's reflected name.

<a id="rustdoc-item-571"></a>

### `copy_system_name`

```rust
copy_system_name: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8
```

Copies that name into a caller buffer.

<a id="rustdoc-item-572"></a>

### `system_error_length`

```rust
system_error_length: extern "System" fn (_: u32) -> u32
```

Byte length of the message a failed system left.

<a id="rustdoc-item-573"></a>

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
