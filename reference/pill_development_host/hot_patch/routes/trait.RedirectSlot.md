<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2130"></a>

# Trait `pill_development_host::hot_patch::routes::RedirectSlot`

```rust
pub(in hot_patch::routes) trait RedirectSlot { ... }
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:148`

The two operations applied to one copy of the function: install and reset.

The trait exists so the refusal handling below can be tested. In production
both the copy that accepts a replacement and the copy that refuses it are
loaded images, and a unit test can build neither. [`PatchCopy`](enum.PatchCopy.md#rustdoc-item-2098) is the only
implementation that ships.

## Required and provided items

<a id="rustdoc-item-2131"></a>

### `install`

```rust
fn install(self: &Self, qualified: &str, address: usize, signature: &str) -> Result<bool, String>;
```

Points this copy's redirect slot at `address`.

#### Errors

Fails when the image cannot be asked, or refuses the replacement.

<a id="rustdoc-item-2132"></a>

### `reset`

```rust
fn reset(self: &Self, qualified: &str) -> Result<bool, String>;
```

Empties this copy's redirect slot, so it runs its own body again.

#### Errors

Fails when the image cannot be asked, or refuses the reset.
