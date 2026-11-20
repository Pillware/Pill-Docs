<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1265"></a>

# Enum `pill_editor_core::commands::KeyName`

```rust
pub enum KeyName { ... }
```

Source: `editor\pill_editor_core\src\commands.rs:54`

The key vocabulary command bindings use.

Deliberately small: it holds only the keys a preset or a user binding can
name. The conversion to and from the engine's [`pill_engine::KeyCode`] sits
in the impl below, so the two lists cannot fall out of step quietly.

## Variants

<a id="rustdoc-item-1223"></a>

### `A`

```rust
A
```

_No documentation provided._

<a id="rustdoc-item-1224"></a>

### `B`

```rust
B
```

_No documentation provided._

<a id="rustdoc-item-1225"></a>

### `C`

```rust
C
```

_No documentation provided._

<a id="rustdoc-item-1226"></a>

### `D`

```rust
D
```

_No documentation provided._

<a id="rustdoc-item-1227"></a>

### `E`

```rust
E
```

_No documentation provided._

<a id="rustdoc-item-1228"></a>

### `F`

```rust
F
```

_No documentation provided._

<a id="rustdoc-item-1229"></a>

### `G`

```rust
G
```

_No documentation provided._

<a id="rustdoc-item-1230"></a>

### `H`

```rust
H
```

_No documentation provided._

<a id="rustdoc-item-1231"></a>

### `I`

```rust
I
```

_No documentation provided._

<a id="rustdoc-item-1232"></a>

### `J`

```rust
J
```

_No documentation provided._

<a id="rustdoc-item-1233"></a>

### `K`

```rust
K
```

_No documentation provided._

<a id="rustdoc-item-1234"></a>

### `L`

```rust
L
```

_No documentation provided._

<a id="rustdoc-item-1235"></a>

### `M`

```rust
M
```

_No documentation provided._

<a id="rustdoc-item-1236"></a>

### `N`

```rust
N
```

_No documentation provided._

<a id="rustdoc-item-1237"></a>

### `O`

```rust
O
```

_No documentation provided._

<a id="rustdoc-item-1238"></a>

### `P`

```rust
P
```

_No documentation provided._

<a id="rustdoc-item-1239"></a>

### `Q`

```rust
Q
```

_No documentation provided._

<a id="rustdoc-item-1240"></a>

### `R`

```rust
R
```

_No documentation provided._

<a id="rustdoc-item-1241"></a>

### `S`

```rust
S
```

_No documentation provided._

<a id="rustdoc-item-1242"></a>

### `T`

```rust
T
```

_No documentation provided._

<a id="rustdoc-item-1243"></a>

### `U`

```rust
U
```

_No documentation provided._

<a id="rustdoc-item-1244"></a>

### `V`

```rust
V
```

_No documentation provided._

<a id="rustdoc-item-1245"></a>

### `W`

```rust
W
```

_No documentation provided._

<a id="rustdoc-item-1246"></a>

### `X`

```rust
X
```

_No documentation provided._

<a id="rustdoc-item-1247"></a>

### `Y`

```rust
Y
```

_No documentation provided._

<a id="rustdoc-item-1248"></a>

### `Z`

```rust
Z
```

_No documentation provided._

<a id="rustdoc-item-1249"></a>

### `Space`

```rust
Space
```

_No documentation provided._

<a id="rustdoc-item-1250"></a>

### `Escape`

```rust
Escape
```

_No documentation provided._

<a id="rustdoc-item-1251"></a>

### `Enter`

```rust
Enter
```

_No documentation provided._

<a id="rustdoc-item-1252"></a>

### `Delete`

```rust
Delete
```

_No documentation provided._

<a id="rustdoc-item-1253"></a>

### `Left`

```rust
Left
```

_No documentation provided._

<a id="rustdoc-item-1254"></a>

### `Right`

```rust
Right
```

_No documentation provided._

<a id="rustdoc-item-1255"></a>

### `Up`

```rust
Up
```

_No documentation provided._

<a id="rustdoc-item-1256"></a>

### `Down`

```rust
Down
```

_No documentation provided._

<a id="rustdoc-item-1257"></a>

### `F3`

```rust
F3
```

_No documentation provided._

<a id="rustdoc-item-1258"></a>

### `F5`

```rust
F5
```

_No documentation provided._

<a id="rustdoc-item-1259"></a>

### `F6`

```rust
F6
```

_No documentation provided._

<a id="rustdoc-item-1260"></a>

### `F10`

```rust
F10
```

_No documentation provided._

<a id="rustdoc-item-1261"></a>

### `Numpad1`

```rust
Numpad1
```

_No documentation provided._

<a id="rustdoc-item-1262"></a>

### `Numpad3`

```rust
Numpad3
```

_No documentation provided._

<a id="rustdoc-item-1263"></a>

### `Numpad7`

```rust
Numpad7
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1266"></a>

### `engine_key`

```rust
pub fn engine_key(self: Self) -> Option<pill_engine::KeyCode>;
```

Returns the engine key this name stands for. Every name has one, so
the result is always `Some`.

<a id="rustdoc-item-1267"></a>

### `from_engine`

```rust
pub fn from_engine(key: pill_engine::KeyCode) -> Option<Self>;
```

Returns this vocabulary's name for an engine key, or `None` when it
names no such key. Input events are turned into chords through this.

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
- `ToString`
- `SerializableAny`
- `DeserializeOwned`
- `Equivalent<K>`
- `Comparable<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
- `Serialize`
- `Deserialize<'de>`
- `Display`
- `FromStr`
