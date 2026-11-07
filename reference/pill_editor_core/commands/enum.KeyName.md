<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1220"></a>

# Enum `pill_editor_core::commands::KeyName`

```rust
pub enum KeyName { ... }
```

Source: `editor\pill_editor_core\src\commands.rs:53`

The key vocabulary command bindings use.

Deliberately small: it holds only the keys a preset or a user binding can
name. The conversion to and from the engine's [`pill_engine::KeyCode`] sits
in the impl below, so the two lists cannot fall out of step quietly.

## Variants

<a id="rustdoc-item-1178"></a>

### `A`

```rust
A
```

_No documentation provided._

<a id="rustdoc-item-1179"></a>

### `B`

```rust
B
```

_No documentation provided._

<a id="rustdoc-item-1180"></a>

### `C`

```rust
C
```

_No documentation provided._

<a id="rustdoc-item-1181"></a>

### `D`

```rust
D
```

_No documentation provided._

<a id="rustdoc-item-1182"></a>

### `E`

```rust
E
```

_No documentation provided._

<a id="rustdoc-item-1183"></a>

### `F`

```rust
F
```

_No documentation provided._

<a id="rustdoc-item-1184"></a>

### `G`

```rust
G
```

_No documentation provided._

<a id="rustdoc-item-1185"></a>

### `H`

```rust
H
```

_No documentation provided._

<a id="rustdoc-item-1186"></a>

### `I`

```rust
I
```

_No documentation provided._

<a id="rustdoc-item-1187"></a>

### `J`

```rust
J
```

_No documentation provided._

<a id="rustdoc-item-1188"></a>

### `K`

```rust
K
```

_No documentation provided._

<a id="rustdoc-item-1189"></a>

### `L`

```rust
L
```

_No documentation provided._

<a id="rustdoc-item-1190"></a>

### `M`

```rust
M
```

_No documentation provided._

<a id="rustdoc-item-1191"></a>

### `N`

```rust
N
```

_No documentation provided._

<a id="rustdoc-item-1192"></a>

### `O`

```rust
O
```

_No documentation provided._

<a id="rustdoc-item-1193"></a>

### `P`

```rust
P
```

_No documentation provided._

<a id="rustdoc-item-1194"></a>

### `Q`

```rust
Q
```

_No documentation provided._

<a id="rustdoc-item-1195"></a>

### `R`

```rust
R
```

_No documentation provided._

<a id="rustdoc-item-1196"></a>

### `S`

```rust
S
```

_No documentation provided._

<a id="rustdoc-item-1197"></a>

### `T`

```rust
T
```

_No documentation provided._

<a id="rustdoc-item-1198"></a>

### `U`

```rust
U
```

_No documentation provided._

<a id="rustdoc-item-1199"></a>

### `V`

```rust
V
```

_No documentation provided._

<a id="rustdoc-item-1200"></a>

### `W`

```rust
W
```

_No documentation provided._

<a id="rustdoc-item-1201"></a>

### `X`

```rust
X
```

_No documentation provided._

<a id="rustdoc-item-1202"></a>

### `Y`

```rust
Y
```

_No documentation provided._

<a id="rustdoc-item-1203"></a>

### `Z`

```rust
Z
```

_No documentation provided._

<a id="rustdoc-item-1204"></a>

### `Space`

```rust
Space
```

_No documentation provided._

<a id="rustdoc-item-1205"></a>

### `Escape`

```rust
Escape
```

_No documentation provided._

<a id="rustdoc-item-1206"></a>

### `Enter`

```rust
Enter
```

_No documentation provided._

<a id="rustdoc-item-1207"></a>

### `Delete`

```rust
Delete
```

_No documentation provided._

<a id="rustdoc-item-1208"></a>

### `Left`

```rust
Left
```

_No documentation provided._

<a id="rustdoc-item-1209"></a>

### `Right`

```rust
Right
```

_No documentation provided._

<a id="rustdoc-item-1210"></a>

### `Up`

```rust
Up
```

_No documentation provided._

<a id="rustdoc-item-1211"></a>

### `Down`

```rust
Down
```

_No documentation provided._

<a id="rustdoc-item-1212"></a>

### `F3`

```rust
F3
```

_No documentation provided._

<a id="rustdoc-item-1213"></a>

### `F5`

```rust
F5
```

_No documentation provided._

<a id="rustdoc-item-1214"></a>

### `F6`

```rust
F6
```

_No documentation provided._

<a id="rustdoc-item-1215"></a>

### `F10`

```rust
F10
```

_No documentation provided._

<a id="rustdoc-item-1216"></a>

### `Numpad1`

```rust
Numpad1
```

_No documentation provided._

<a id="rustdoc-item-1217"></a>

### `Numpad3`

```rust
Numpad3
```

_No documentation provided._

<a id="rustdoc-item-1218"></a>

### `Numpad7`

```rust
Numpad7
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1221"></a>

### `engine_key`

```rust
pub fn engine_key(self: Self) -> Option<pill_engine::KeyCode>;
```

Returns the engine key this name stands for. Every name has one, so
the result is always `Some`.

<a id="rustdoc-item-1222"></a>

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
