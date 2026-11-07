<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1426"></a>

# Module `pill_development_host::csharp::mirror_codegen`

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:1`

The C# members, object classes, enums and resource markers generated from
a module's mirror descriptors.
Builds the C# text that mirrors a module's Rust types into the generated
project: the classes, enums, resource markers and their members.

## Responsibilities

- Find the C# type behind a tag's name (`val:Mesh`, `mut:AssetManager`)
  through [`MirrorScope`]: an object class, an enum, a resource marker,
  a value-type struct, or one of the runtime's own types.
- Write one C# member for each mirrored function with [`emit_member`],
  wherever the function lives: on a value type, an object class, a
  resource (as extension methods on `Res<T>` / `ResMut<T>`), or a module
  (as a static class).
- Write the object classes, enums and resource markers the type rows
  declare, through [`emit_declared_type`].

## Design

Every generated member has the same shape. It starts a
`TracyLive.MirrorCall` for the function, pushes the receiver and each
argument as the tag says, invokes the call, then reads the result as the
result tag says. All pointers stay inside the C# runtime, so the
generated code is plain safe C# and the project assembly that gets
reloaded needs no `AllowUnsafeBlocks`. One function-pointer type serves
every trampoline, so NativeAOT generates nothing per signature. The byte
layout that `Push*` and `Result*` calls write is the contract with
`pill_engine::mirror` on the Rust side.

## Module contents

### Structs
- [`CsArgument`](struct.CsArgument.md#rustdoc-item-1567) — One function argument, translated to C#.
- [`CsResult`](struct.CsResult.md#rustdoc-item-1594) — One function result, translated to C#.
- [`DeclaredType`](struct.DeclaredType.md#rustdoc-item-1503) — One object type, enum or resource a module declares through a type row.
- [`MirrorScope`](struct.MirrorScope.md#rustdoc-item-1327) — Every type a module's signatures can name.
- [`MirrorType`](struct.MirrorType.md#rustdoc-item-1468) — One type a module's signatures can name, with the C# declaration it maps

### Enums
- [`MemberHost`](enum.MemberHost.md#rustdoc-item-1624) — The place a generated member belongs to.
- [`MirrorKind`](enum.MirrorKind.md#rustdoc-item-1431) — What a mirrored Rust type becomes on the C# side.

### Functions
- [`array_type`](fn.array_type.md#rustdoc-item-1652) — The C# type for an `array:<element>:<length>` tag.
- [`crate_namespace`](fn.crate_namespace.md#rustdoc-item-1648) — The namespace a declared type is written into: the root of its crate, so
- [`emit_declared_type`](fn.emit_declared_type.md#rustdoc-item-1659) — Writes one declared type and wraps it in its namespace: an object class,
- [`emit_free_function_class`](fn.emit_free_function_class.md#rustdoc-item-1660) — Writes the static class that mirrors a module's free functions.
- [`emit_member`](fn.emit_member.md#rustdoc-item-1656) — Writes the C# member, or members, for one mirrored function.
- [`last_segment`](fn.last_segment.md#rustdoc-item-1649) — The last `::` segment of a Rust path.
- [`lower_argument`](fn.lower_argument.md#rustdoc-item-1653) — Turns one argument tag into its C# parameter declaration, push statement
- [`lower_result`](fn.lower_result.md#rustdoc-item-1654) — Turns one result tag into the C# return type, buffer size and read
- [`members_of`](fn.members_of.md#rustdoc-item-1657) — The functions mirrored onto one owner, skipping the `__`-named rows: the
- [`parameter_name`](fn.parameter_name.md#rustdoc-item-1655) — The C# parameter name for one argument: the Rust name, or the positional
- [`primitive`](fn.primitive.md#rustdoc-item-1650) — The C# type and width of a primitive tag.
- [`tuple_layout`](fn.tuple_layout.md#rustdoc-item-1651) — The byte offset and C# type of each element in a tuple of primitives,

### Constants
- [`ASSET_MANAGER`](constant.ASSET_MANAGER.md#rustdoc-item-1425) — The runtime's own resource marker for the engine's asset store.
