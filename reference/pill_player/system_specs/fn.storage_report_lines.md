<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-740"></a>

# Function `pill_player::system_specs::storage_report_lines`

```rust
pub(in system_specs) fn storage_report_lines(disks: &sysinfo::Disks) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 737, 'path': '::system_specs'}}` · Source: `hosting\pill_player\src\system_specs.rs:130`

Builds the `Storage` branch of the system report: one line per detected
storage device, or a single "no disks detected" line when the list is
empty.

Each device line shows the mount point, used and total space in GiB, the
usage percentage, and the disk kind: SSD, HDD, or `?` when the platform
does not say.
