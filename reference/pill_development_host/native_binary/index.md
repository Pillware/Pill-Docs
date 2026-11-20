<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3148"></a>

# Module `pill_development_host::native_binary`

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_binary.rs:1`

Reads a native image's dependencies, imports and exports from its bytes, so
a failed load can name the symbol and the dylib behind it.
Reading a native library's dependency, import and export names from its
bytes, without mapping it into the process.

## Responsibilities

- Report the shared libraries an image names as dependencies.
- Report the symbols it needs from other images and the symbols it exports.
- Read ELF itself, and hand a PE image to [`crate::analytics::inspect_pe`](../analytics/fn.inspect_pe.md#rustdoc-item-158)
  instead of reading the same tables twice.

## Design

This is the evidence a load failure is explained from. A module whose
engine dylib was built from a different dependency graph imports symbol
names the mapped copy does not export. No loader says that: Windows reports
`LoadLibrary` error 127, and a Unix loader reports
`undefined symbol: <one mangled name>`, naming one symbol and no cause. The
import and export tables are therefore read from the file, which works
whether or not the image is mapped and on every host platform. Comparing
the two tables is what turns the loader's message into a sentence that
names both builds.

Everything here is best effort, and it fails toward silence. An image that
is neither PE nor ELF, a class this reader does not know, or a header that
points outside the file answers `None`, and the caller then keeps the
loader's own error. A symbol table that cannot be read to its end answers
`None` as well rather than a shortened export list: a copy that appears to
lack a symbol it does have would be reported as the cause of a failure it
did not cause.

## Module contents

### Structs
- [`BinaryInspection`](struct.BinaryInspection.md#rustdoc-item-3198) — What a native image needs from, and offers to, the other images in the
- [`ByteReader`](struct.ByteReader.md#rustdoc-item-3285) — Bounds-checked field reads over an image in its own byte order.
- [`ElfImage`](struct.ElfImage.md#rustdoc-item-3225) — The parts of an ELF image this reader keeps.
- [`LibraryImport`](struct.LibraryImport.md#rustdoc-item-3170) — One dependency library and the symbols the image attributes to it.
- [`SectionHeader`](struct.SectionHeader.md#rustdoc-item-3254) — One entry of an ELF section table, reduced to the fields this reader uses.

### Functions
- [`dynamic_entry`](fn.dynamic_entry.md#rustdoc-item-3321) — One `(tag, value)` dynamic-table entry at `entry_offset`.
- [`elf_identity`](fn.elf_identity.md#rustdoc-item-3318) — `EI_CLASS` and `EI_DATA`: whether the image is 64-bit, and its byte order.
- [`inspect`](fn.inspect.md#rustdoc-item-3316) — Reads what `path` needs and exports, in whichever native format it is.
- [`parse_elf`](fn.parse_elf.md#rustdoc-item-3317) — Reads an ELF image's dependencies and dynamic symbols.
- [`resolved_entry_size`](fn.resolved_entry_size.md#rustdoc-item-3322) — The entry size a section actually uses.
- [`section_header_at`](fn.section_header_at.md#rustdoc-item-3320) — One section header at `index`, through `reader` whose byte 0 is the section
- [`section_table_location`](fn.section_table_location.md#rustdoc-item-3319) — `e_shoff`, `e_shentsize` and `e_shnum`, read from an image header.
- [`string_at`](fn.string_at.md#rustdoc-item-3323) — The NUL-terminated string at `string_offset` inside `string_table`.

### Constants
- [`DYNAMIC_ENTRY_SIZE_32`](constant.DYNAMIC_ENTRY_SIZE_32.md#rustdoc-item-3165) — Size of one 32-bit dynamic table entry.
- [`DYNAMIC_ENTRY_SIZE_64`](constant.DYNAMIC_ENTRY_SIZE_64.md#rustdoc-item-3164) — Size of one 64-bit dynamic table entry.
- [`DYNAMIC_TAG_NEEDED`](constant.DYNAMIC_TAG_NEEDED.md#rustdoc-item-3155) — `DT_NEEDED`: a string-table offset holding one dependency's name.
- [`DYNAMIC_TAG_NULL`](constant.DYNAMIC_TAG_NULL.md#rustdoc-item-3156) — `DT_NULL`: the end of the dynamic table.
- [`ELF_CLASS_32`](constant.ELF_CLASS_32.md#rustdoc-item-3149) — `EI_CLASS`, at byte 4 of the identification block: 32-bit ELF.
- [`ELF_CLASS_64`](constant.ELF_CLASS_64.md#rustdoc-item-3150) — `EI_CLASS`: 64-bit ELF.
- [`ELF_DATA_BIG_ENDIAN`](constant.ELF_DATA_BIG_ENDIAN.md#rustdoc-item-3152) — `EI_DATA`: big-endian fields.
- [`ELF_DATA_LITTLE_ENDIAN`](constant.ELF_DATA_LITTLE_ENDIAN.md#rustdoc-item-3151) — `EI_DATA`, at byte 5: little-endian fields.
- [`ELF_MAGIC`](constant.ELF_MAGIC.md#rustdoc-item-3147) — First four bytes of every ELF image: `0x7F` followed by `E`, `L`, `F`.
- [`SECTION_ENTRY_SIZE_32`](constant.SECTION_ENTRY_SIZE_32.md#rustdoc-item-3167) — Size of one 32-bit section header.
- [`SECTION_ENTRY_SIZE_64`](constant.SECTION_ENTRY_SIZE_64.md#rustdoc-item-3166) — Size of one 64-bit section header.
- [`SECTION_INDEX_UNDEFINED`](constant.SECTION_INDEX_UNDEFINED.md#rustdoc-item-3157) — `SHN_UNDEF`: the symbol needs a definition from another image.
- [`SECTION_TYPE_DYNAMIC`](constant.SECTION_TYPE_DYNAMIC.md#rustdoc-item-3153) — `SHT_DYNAMIC`: the `DT_*` entries, including the dependency names.
- [`SECTION_TYPE_DYNAMIC_SYMBOLS`](constant.SECTION_TYPE_DYNAMIC_SYMBOLS.md#rustdoc-item-3154) — `SHT_DYNSYM`: the dynamic symbol table.
- [`SYMBOL_BINDING_GLOBAL`](constant.SYMBOL_BINDING_GLOBAL.md#rustdoc-item-3158) — `STB_GLOBAL`: the binding another image resolves against.
- [`SYMBOL_BINDING_WEAK`](constant.SYMBOL_BINDING_WEAK.md#rustdoc-item-3159) — `STB_WEAK`: the binding a strong definition may replace.
- [`SYMBOL_ENTRY_SIZE_32`](constant.SYMBOL_ENTRY_SIZE_32.md#rustdoc-item-3163) — Size of one 32-bit symbol table entry.
- [`SYMBOL_ENTRY_SIZE_64`](constant.SYMBOL_ENTRY_SIZE_64.md#rustdoc-item-3162) — Size of one 64-bit symbol table entry.
- [`SYMBOL_VISIBILITY_DEFAULT`](constant.SYMBOL_VISIBILITY_DEFAULT.md#rustdoc-item-3160) — `STV_DEFAULT`: the visibility the loader resolves symbols through.
- [`SYMBOL_VISIBILITY_PROTECTED`](constant.SYMBOL_VISIBILITY_PROTECTED.md#rustdoc-item-3161) — `STV_PROTECTED`: defined here, and still exported.
