<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7368"></a>

# Module `pill_engine_core::reflection::component_registry`

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:1`

Compile-time field layouts of components and value types, emitted by the
derive macros.
Compile-time field layouts of components and value types.

## Responsibilities

- Declare [`ComponentFieldDescriptor`], the description of one component or
  value-type field. The derive macros emit it, the world keeps it for the
  editor, and the host reads it to generate the C# mirror.
- Declare [`FieldDecorator`], the presentation metadata a field declares
  for the editor's Inspector.
- Declare the [`ComponentLayout`] trait the derives implement, and
  [`ValueTypeLayoutResolver`], the function the world calls to find the
  layout of a value type that a component field nests.
- Declare [`EnumLayout`] and [`EnumLayoutResolver`], which let a field of a
  declared enum type become an editable enum field.
- Declare [`DefaultValueProbe`] and its two traits, through which the
  component derive records a type's `Default` value when it has one.

## Design

The registries the derives submit into (`PillComponentDescriptor` and the
other descriptor types) live in `pill_engine`, the facade crate every
project and extension depends on, not here. The facade is compiled into
every DLL, so each DLL's registry holds exactly what that DLL declared.
This crate holds only the definitions that are the same for all of them.

## Module contents

### Structs
- [`CloneValueProbe`](struct.CloneValueProbe.md#rustdoc-item-4406) — Lets generated registration code record a component's row-cloning function
- [`ComponentFieldDescriptor`](struct.ComponentFieldDescriptor.md#rustdoc-item-2960) — One named field of a component or a value type: its name, its type tag and
- [`DefaultValueProbe`](struct.DefaultValueProbe.md#rustdoc-item-7465) — Lets generated registration code record a component's `Default` value
- [`EnumLayout`](struct.EnumLayout.md#rustdoc-item-7297) — The shape of a fieldless enum with an integer representation, as a

### Enums
- [`FieldDecorator`](enum.FieldDecorator.md#rustdoc-item-5510) — Presentation metadata a field declares for the editor's Inspector.

### Traits
- [`ComponentLayout`](trait.ComponentLayout.md#rustdoc-item-2999) — The compile-time field layout of a type, as the derive macros emit it.
- [`RecordCloneValue`](trait.RecordCloneValue.md#rustdoc-item-7500) — Records `T`'s row-cloning function for a component that implements `Clone`.
- [`RecordDefaultValue`](trait.RecordDefaultValue.md#rustdoc-item-7463) — Records `T::default()` for a component that implements `Default`.
- [`SkipCloneValue`](trait.SkipCloneValue.md#rustdoc-item-7501) — The fallback for a component without `Clone`: records nothing, so the type
- [`SkipDefaultValue`](trait.SkipDefaultValue.md#rustdoc-item-7464) — The fallback for a component without `Default`: records nothing, so the

### Functions
- [`resolve_unique_name`](fn.resolve_unique_name.md#rustdoc-item-7573) — Returns the candidate name a `struct:<path>` field tag refers to.

### Type aliases
- [`EnumLayoutResolver`](type.EnumLayoutResolver.md#rustdoc-item-5226) — A function that finds the declared shape of an enum a `struct:<path>` field
- [`ValueTypeLayoutResolver`](type.ValueTypeLayoutResolver.md#rustdoc-item-5224) — A function that finds the field layout of a `#[derive(PillMirror)]` value
