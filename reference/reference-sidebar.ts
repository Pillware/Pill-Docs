// This file is generated. Do not edit it directly.
import type { DefaultTheme } from 'vitepress'

export const codeReferenceSidebarItems: DefaultTheme.SidebarItem[] = [
  {
    "text": "Pill Asset Format",
    "link": "/reference/pill_asset_format/",
    "collapsed": true,
    "items": [
      {
        "text": "Constants",
        "collapsed": true,
        "items": [
          {
            "text": "ASSET_PACK_MAGIC",
            "link": "/reference/pill_asset_format/constant.ASSET_PACK_MAGIC"
          },
          {
            "text": "ASSET_PACK_VERSION",
            "link": "/reference/pill_asset_format/constant.ASSET_PACK_VERSION"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Assets",
    "link": "/reference/pill_assets/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "asset_move",
            "link": "/reference/pill_assets/asset_move/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "MoveAssetError",
                    "link": "/reference/pill_assets/asset_move/enum.MoveAssetError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "metadata_path_of",
                    "link": "/reference/pill_assets/asset_move/fn.metadata_path_of"
                  },
                  {
                    "text": "move_asset",
                    "link": "/reference/pill_assets/asset_move/fn.move_asset"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "METADATA_SUFFIX",
                    "link": "/reference/pill_assets/asset_move/constant.METADATA_SUFFIX"
                  }
                ]
              }
            ]
          },
          {
            "text": "rules",
            "link": "/reference/pill_assets/rules/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "hlsl_to_wgsl",
                    "link": "/reference/pill_assets/rules/hlsl_to_wgsl/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "HlslToWgsl",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/struct.HlslToWgsl"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "check_compiler_candidate",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/fn.check_compiler_candidate"
                          },
                          {
                            "text": "entry_and_stage_for",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/fn.entry_and_stage_for"
                          },
                          {
                            "text": "resolve_slangc",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/fn.resolve_slangc"
                          },
                          {
                            "text": "run_bounded_command",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/fn.run_bounded_command"
                          },
                          {
                            "text": "slangc_path",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/fn.slangc_path"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "SLANGC_ENV",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/constant.SLANGC_ENV"
                          },
                          {
                            "text": "SLANGC_EXECUTABLE",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/constant.SLANGC_EXECUTABLE"
                          },
                          {
                            "text": "SLANGC_POLL_INTERVAL",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/constant.SLANGC_POLL_INTERVAL"
                          },
                          {
                            "text": "SLANGC_TIMEOUT",
                            "link": "/reference/pill_assets/rules/hlsl_to_wgsl/constant.SLANGC_TIMEOUT"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "default_rules",
                    "link": "/reference/pill_assets/rules/fn.default_rules"
                  }
                ]
              }
            ]
          },
          {
            "text": "shader_tree",
            "link": "/reference/pill_assets/shader_tree/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ShaderTreeLayout",
                    "link": "/reference/pill_assets/shader_tree/struct.ShaderTreeLayout"
                  },
                  {
                    "text": "ShaderTreeReport",
                    "link": "/reference/pill_assets/shader_tree/struct.ShaderTreeReport"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "collect_layout",
                    "link": "/reference/pill_assets/shader_tree/fn.collect_layout"
                  },
                  {
                    "text": "cook_shader_tree",
                    "link": "/reference/pill_assets/shader_tree/fn.cook_shader_tree"
                  },
                  {
                    "text": "shader_tree_layout",
                    "link": "/reference/pill_assets/shader_tree/fn.shader_tree_layout"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "INCLUDE_DIRECTORY_NAME",
                    "link": "/reference/pill_assets/shader_tree/constant.INCLUDE_DIRECTORY_NAME"
                  },
                  {
                    "text": "SOURCE_EXTENSION",
                    "link": "/reference/pill_assets/shader_tree/constant.SOURCE_EXTENSION"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "Pipeline",
            "link": "/reference/pill_assets/struct.Pipeline"
          },
          {
            "text": "PipelineStats",
            "link": "/reference/pill_assets/struct.PipelineStats"
          }
        ]
      },
      {
        "text": "Enums",
        "collapsed": true,
        "items": [
          {
            "text": "CookError",
            "link": "/reference/pill_assets/enum.CookError"
          }
        ]
      },
      {
        "text": "Traits",
        "collapsed": true,
        "items": [
          {
            "text": "Rule",
            "link": "/reference/pill_assets/trait.Rule"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "expand",
            "link": "/reference/pill_assets/fn.expand"
          },
          {
            "text": "is_stale",
            "link": "/reference/pill_assets/fn.is_stale"
          },
          {
            "text": "pack_key",
            "link": "/reference/pill_assets/fn.pack_key"
          },
          {
            "text": "stamp_output",
            "link": "/reference/pill_assets/fn.stamp_output"
          },
          {
            "text": "walk_files",
            "link": "/reference/pill_assets/fn.walk_files"
          },
          {
            "text": "write_asset_pack",
            "link": "/reference/pill_assets/fn.write_asset_pack"
          },
          {
            "text": "write_asset_pack_with_roots",
            "link": "/reference/pill_assets/fn.write_asset_pack_with_roots"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Audio",
    "link": "/reference/pill_audio/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "audio_command",
            "link": "/reference/pill_audio/audio_command/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AudioCommand",
                    "link": "/reference/pill_audio/audio_command/enum.AudioCommand"
                  }
                ]
              }
            ]
          },
          {
            "text": "audio_listener_component",
            "link": "/reference/pill_audio/audio_listener_component/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AudioListenerComponent",
                    "link": "/reference/pill_audio/audio_listener_component/struct.AudioListenerComponent"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "__pill_register_AudioListenerComponent",
                    "link": "/reference/pill_audio/audio_listener_component/fn.__pill_register_AudioListenerComponent"
                  },
                  {
                    "text": "register",
                    "link": "/reference/pill_audio/audio_listener_component/fn.register"
                  }
                ]
              }
            ]
          },
          {
            "text": "audio_load_queue",
            "link": "/reference/pill_audio/audio_load_queue/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AudioLoadQueue",
                    "link": "/reference/pill_audio/audio_load_queue/struct.AudioLoadQueue"
                  }
                ]
              }
            ]
          },
          {
            "text": "audio_manager",
            "link": "/reference/pill_audio/audio_manager/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AudioManager",
                    "link": "/reference/pill_audio/audio_manager/struct.AudioManager"
                  },
                  {
                    "text": "AudioSettings",
                    "link": "/reference/pill_audio/audio_manager/struct.AudioSettings"
                  },
                  {
                    "text": "AudioSettingsAsset",
                    "link": "/reference/pill_audio/audio_manager/struct.AudioSettingsAsset"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEFAULT_AMBIENT_SINK_COUNT",
                    "link": "/reference/pill_audio/audio_manager/constant.DEFAULT_AMBIENT_SINK_COUNT"
                  },
                  {
                    "text": "DEFAULT_SPATIAL_SINK_COUNT",
                    "link": "/reference/pill_audio/audio_manager/constant.DEFAULT_SPATIAL_SINK_COUNT"
                  },
                  {
                    "text": "EAR_SEPARATION",
                    "link": "/reference/pill_audio/audio_manager/constant.EAR_SEPARATION"
                  }
                ]
              }
            ]
          },
          {
            "text": "audio_source_component",
            "link": "/reference/pill_audio/audio_source_component/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AudioSourceComponent",
                    "link": "/reference/pill_audio/audio_source_component/struct.AudioSourceComponent"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "__pill_register_AudioSourceComponent",
                    "link": "/reference/pill_audio/audio_source_component/fn.__pill_register_AudioSourceComponent"
                  },
                  {
                    "text": "register",
                    "link": "/reference/pill_audio/audio_source_component/fn.register"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "NO_SINK",
                    "link": "/reference/pill_audio/audio_source_component/constant.NO_SINK"
                  }
                ]
              }
            ]
          },
          {
            "text": "audio_system",
            "link": "/reference/pill_audio/audio_system/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "audio_system",
                    "link": "/reference/pill_audio/audio_system/fn.audio_system"
                  }
                ]
              }
            ]
          },
          {
            "text": "listener_geometry",
            "link": "/reference/pill_audio/listener_geometry/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "ear_positions",
                    "link": "/reference/pill_audio/listener_geometry/fn.ear_positions"
                  }
                ]
              }
            ]
          },
          {
            "text": "sound",
            "link": "/reference/pill_audio/sound/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ArcBytes",
                    "link": "/reference/pill_audio/sound/struct.ArcBytes"
                  },
                  {
                    "text": "Sound",
                    "link": "/reference/pill_audio/sound/struct.Sound"
                  },
                  {
                    "text": "SoundImportSettings",
                    "link": "/reference/pill_audio/sound/struct.SoundImportSettings"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "SoundLoadError",
                    "link": "/reference/pill_audio/sound/enum.SoundLoadError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "validate_format",
                    "link": "/reference/pill_audio/sound/fn.validate_format"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "SUPPORTED_AUDIO_FORMATS",
                    "link": "/reference/pill_audio/sound/constant.SUPPORTED_AUDIO_FORMATS"
                  }
                ]
              }
            ]
          },
          {
            "text": "sound_type",
            "link": "/reference/pill_audio/sound_type/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "SoundType",
                    "link": "/reference/pill_audio/sound_type/enum.SoundType"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "init",
            "link": "/reference/pill_audio/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_audio/fn.register"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Core",
    "link": "/reference/pill_core/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "color",
            "link": "/reference/pill_core/color/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "generate_color_palette",
                    "link": "/reference/pill_core/color/fn.generate_color_palette"
                  },
                  {
                    "text": "hsl_to_rgb",
                    "link": "/reference/pill_core/color/fn.hsl_to_rgb"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DISTINCT_COLOR_PALETTE",
                    "link": "/reference/pill_core/color/constant.DISTINCT_COLOR_PALETTE"
                  }
                ]
              }
            ]
          },
          {
            "text": "dynamic_buffer",
            "link": "/reference/pill_core/dynamic_buffer/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "DynamicBuffer",
                    "link": "/reference/pill_core/dynamic_buffer/struct.DynamicBuffer"
                  }
                ]
              }
            ]
          },
          {
            "text": "error",
            "link": "/reference/pill_core/error/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "host",
                    "link": "/reference/pill_core/error/host/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "BuildError",
                            "link": "/reference/pill_core/error/host/enum.BuildError"
                          },
                          {
                            "text": "ConfigError",
                            "link": "/reference/pill_core/error/host/enum.ConfigError"
                          },
                          {
                            "text": "CSharpError",
                            "link": "/reference/pill_core/error/host/enum.CSharpError"
                          },
                          {
                            "text": "HostError",
                            "link": "/reference/pill_core/error/host/enum.HostError"
                          },
                          {
                            "text": "LibraryError",
                            "link": "/reference/pill_core/error/host/enum.LibraryError"
                          },
                          {
                            "text": "ModuleError",
                            "link": "/reference/pill_core/error/host/enum.ModuleError"
                          },
                          {
                            "text": "WatcherError",
                            "link": "/reference/pill_core/error/host/enum.WatcherError"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "render",
                    "link": "/reference/pill_core/error/render/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PlainMessageRenderer",
                            "link": "/reference/pill_core/error/render/struct.PlainMessageRenderer"
                          },
                          {
                            "text": "TerminalMessageRenderer",
                            "link": "/reference/pill_core/error/render/struct.TerminalMessageRenderer"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "SemanticRole",
                            "link": "/reference/pill_core/error/render/enum.SemanticRole"
                          }
                        ]
                      },
                      {
                        "text": "Traits",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "EngineMessage",
                            "link": "/reference/pill_core/error/render/trait.EngineMessage"
                          },
                          {
                            "text": "MessageRenderer",
                            "link": "/reference/pill_core/error/render/trait.MessageRenderer"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "report",
                    "link": "/reference/pill_core/error/report/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "EngineReportHandler",
                            "link": "/reference/pill_core/error/report/struct.EngineReportHandler"
                          },
                          {
                            "text": "StyledDiagnosticProxy",
                            "link": "/reference/pill_core/error/report/struct.StyledDiagnosticProxy"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "engine_report",
                            "link": "/reference/pill_core/error/report/fn.engine_report"
                          },
                          {
                            "text": "install_engine_report_handler",
                            "link": "/reference/pill_core/error/report/fn.install_engine_report_handler"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "fixed_string",
            "link": "/reference/pill_core/fixed_string/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FixedString64",
                    "link": "/reference/pill_core/fixed_string/struct.FixedString64"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "FIXED_STRING_64_CAPACITY",
                    "link": "/reference/pill_core/fixed_string/constant.FIXED_STRING_64_CAPACITY"
                  }
                ]
              }
            ]
          },
          {
            "text": "math",
            "link": "/reference/pill_core/math/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "Direction",
                    "link": "/reference/pill_core/math/enum.Direction"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "Color",
                    "link": "/reference/pill_core/math/type.Color"
                  },
                  {
                    "text": "Matrix3f",
                    "link": "/reference/pill_core/math/type.Matrix3f"
                  },
                  {
                    "text": "Matrix3fA",
                    "link": "/reference/pill_core/math/type.Matrix3fA"
                  },
                  {
                    "text": "Matrix4f",
                    "link": "/reference/pill_core/math/type.Matrix4f"
                  },
                  {
                    "text": "Vector2f",
                    "link": "/reference/pill_core/math/type.Vector2f"
                  },
                  {
                    "text": "Vector2i",
                    "link": "/reference/pill_core/math/type.Vector2i"
                  },
                  {
                    "text": "Vector3f",
                    "link": "/reference/pill_core/math/type.Vector3f"
                  },
                  {
                    "text": "Vector4f",
                    "link": "/reference/pill_core/math/type.Vector4f"
                  }
                ]
              }
            ]
          },
          {
            "text": "metrics",
            "link": "/reference/pill_core/metrics/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EngineMetricsRecorder",
                    "link": "/reference/pill_core/metrics/struct.EngineMetricsRecorder"
                  },
                  {
                    "text": "NullHandle",
                    "link": "/reference/pill_core/metrics/struct.NullHandle"
                  },
                  {
                    "text": "TracyForwardingState",
                    "link": "/reference/pill_core/metrics/struct.TracyForwardingState"
                  },
                  {
                    "text": "TracyPlotGauge",
                    "link": "/reference/pill_core/metrics/struct.TracyPlotGauge"
                  },
                  {
                    "text": "TracyPlotHistogram",
                    "link": "/reference/pill_core/metrics/struct.TracyPlotHistogram"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "install_metrics",
                    "link": "/reference/pill_core/metrics/fn.install_metrics"
                  },
                  {
                    "text": "install_metrics_with",
                    "link": "/reference/pill_core/metrics/fn.install_metrics_with"
                  },
                  {
                    "text": "sanitize_plot_name",
                    "link": "/reference/pill_core/metrics/fn.sanitize_plot_name"
                  }
                ]
              }
            ]
          },
          {
            "text": "native_buffer",
            "link": "/reference/pill_core/native_buffer/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "allocate",
                    "link": "/reference/pill_core/native_buffer/fn.allocate"
                  },
                  {
                    "text": "header_size",
                    "link": "/reference/pill_core/native_buffer/fn.header_size"
                  },
                  {
                    "text": "live_blocks",
                    "link": "/reference/pill_core/native_buffer/fn.live_blocks"
                  },
                  {
                    "text": "live_bytes",
                    "link": "/reference/pill_core/native_buffer/fn.live_bytes"
                  },
                  {
                    "text": "reference_count",
                    "link": "/reference/pill_core/native_buffer/fn.reference_count"
                  },
                  {
                    "text": "release",
                    "link": "/reference/pill_core/native_buffer/fn.release"
                  },
                  {
                    "text": "retain",
                    "link": "/reference/pill_core/native_buffer/fn.retain"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "LIVE_BLOCKS",
                    "link": "/reference/pill_core/native_buffer/static.LIVE_BLOCKS"
                  },
                  {
                    "text": "LIVE_BYTES",
                    "link": "/reference/pill_core/native_buffer/static.LIVE_BYTES"
                  }
                ]
              }
            ]
          },
          {
            "text": "platform",
            "link": "/reference/pill_core/platform/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "clock",
                    "link": "/reference/pill_core/platform/clock/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Instant",
                            "link": "/reference/pill_core/platform/clock/struct.Instant"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "unix_time",
                            "link": "/reference/pill_core/platform/clock/fn.unix_time"
                          }
                        ]
                      },
                      {
                        "text": "Type aliases",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PlatformInstant",
                            "link": "/reference/pill_core/platform/clock/type.PlatformInstant"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "futures",
                    "link": "/reference/pill_core/platform/futures/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "block_on",
                            "link": "/reference/pill_core/platform/futures/fn.block_on"
                          },
                          {
                            "text": "spawn",
                            "link": "/reference/pill_core/platform/futures/fn.spawn"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "log_output",
                    "link": "/reference/pill_core/platform/log_output/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "open_file_output",
                            "link": "/reference/pill_core/platform/log_output/fn.open_file_output"
                          },
                          {
                            "text": "terminal_writer",
                            "link": "/reference/pill_core/platform/log_output/fn.terminal_writer"
                          }
                        ]
                      },
                      {
                        "text": "Type aliases",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "FileGuard",
                            "link": "/reference/pill_core/platform/log_output/type.FileGuard"
                          },
                          {
                            "text": "FileWriter",
                            "link": "/reference/pill_core/platform/log_output/type.FileWriter"
                          },
                          {
                            "text": "TerminalWriter",
                            "link": "/reference/pill_core/platform/log_output/type.TerminalWriter"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "styling",
                    "link": "/reference/pill_core/platform/styling/"
                  }
                ]
              }
            ]
          },
          {
            "text": "profiling",
            "link": "/reference/pill_core/profiling/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "enabled",
                    "link": "/reference/pill_core/profiling/enabled/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DirectZone",
                            "link": "/reference/pill_core/profiling/enabled/struct.DirectZone"
                          },
                          {
                            "text": "GpuTimeline",
                            "link": "/reference/pill_core/profiling/enabled/struct.GpuTimeline"
                          },
                          {
                            "text": "GpuTimelineSpan",
                            "link": "/reference/pill_core/profiling/enabled/struct.GpuTimelineSpan"
                          },
                          {
                            "text": "NonContinuousFrame",
                            "link": "/reference/pill_core/profiling/enabled/struct.NonContinuousFrame"
                          },
                          {
                            "text": "TracyZone",
                            "link": "/reference/pill_core/profiling/enabled/struct.TracyZone"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "client",
                            "link": "/reference/pill_core/profiling/enabled/fn.client"
                          },
                          {
                            "text": "frame_mark",
                            "link": "/reference/pill_core/profiling/enabled/fn.frame_mark"
                          },
                          {
                            "text": "init",
                            "link": "/reference/pill_core/profiling/enabled/fn.init"
                          },
                          {
                            "text": "lane_wanted",
                            "link": "/reference/pill_core/profiling/enabled/fn.lane_wanted"
                          },
                          {
                            "text": "non_continuous_frame_begin",
                            "link": "/reference/pill_core/profiling/enabled/fn.non_continuous_frame_begin"
                          },
                          {
                            "text": "plot_gpu_statistics",
                            "link": "/reference/pill_core/profiling/enabled/fn.plot_gpu_statistics"
                          },
                          {
                            "text": "profiler_connected",
                            "link": "/reference/pill_core/profiling/enabled/fn.profiler_connected"
                          },
                          {
                            "text": "secondary_frame_mark",
                            "link": "/reference/pill_core/profiling/enabled/fn.secondary_frame_mark"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "profiling_extras",
                    "link": "/reference/pill_core/profiling/profiling_extras/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "error",
                            "link": "/reference/pill_core/profiling/profiling_extras/fn.error"
                          },
                          {
                            "text": "message",
                            "link": "/reference/pill_core/profiling/profiling_extras/fn.message"
                          },
                          {
                            "text": "plot",
                            "link": "/reference/pill_core/profiling/profiling_extras/fn.plot"
                          },
                          {
                            "text": "plot_config",
                            "link": "/reference/pill_core/profiling/profiling_extras/fn.plot_config"
                          },
                          {
                            "text": "set_thread_name",
                            "link": "/reference/pill_core/profiling/profiling_extras/fn.set_thread_name"
                          },
                          {
                            "text": "warn",
                            "link": "/reference/pill_core/profiling/profiling_extras/fn.warn"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "GpuStatistics",
                    "link": "/reference/pill_core/profiling/struct.GpuStatistics"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "GpuApi",
                    "link": "/reference/pill_core/profiling/enum.GpuApi"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "compute_batch_packing_efficiency",
                    "link": "/reference/pill_core/profiling/fn.compute_batch_packing_efficiency"
                  },
                  {
                    "text": "compute_parallel_utilization",
                    "link": "/reference/pill_core/profiling/fn.compute_parallel_utilization"
                  },
                  {
                    "text": "emit_parallel_utilization_plots",
                    "link": "/reference/pill_core/profiling/fn.emit_parallel_utilization_plots"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEFAULT_ZONE_COLOR",
                    "link": "/reference/pill_core/profiling/constant.DEFAULT_ZONE_COLOR"
                  },
                  {
                    "text": "PROFILE_COARSE_TARGET",
                    "link": "/reference/pill_core/profiling/constant.PROFILE_COARSE_TARGET"
                  },
                  {
                    "text": "PROFILE_FINE_TARGET",
                    "link": "/reference/pill_core/profiling/constant.PROFILE_FINE_TARGET"
                  },
                  {
                    "text": "PROJECT_SYSTEM_ZONE_COLOR",
                    "link": "/reference/pill_core/profiling/constant.PROJECT_SYSTEM_ZONE_COLOR"
                  }
                ]
              }
            ]
          },
          {
            "text": "slot_map",
            "link": "/reference/pill_core/slot_map/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "KeyData",
                    "link": "/reference/pill_core/slot_map/struct.KeyData"
                  },
                  {
                    "text": "Slot",
                    "link": "/reference/pill_core/slot_map/struct.Slot"
                  },
                  {
                    "text": "SlotMap",
                    "link": "/reference/pill_core/slot_map/struct.SlotMap"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "SlotKey",
                    "link": "/reference/pill_core/slot_map/trait.SlotKey"
                  }
                ]
              }
            ]
          },
          {
            "text": "style",
            "link": "/reference/pill_core/style/",
            "collapsed": true,
            "items": [
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "PillStyle",
                    "link": "/reference/pill_core/style/trait.PillStyle"
                  }
                ]
              }
            ]
          },
          {
            "text": "system_ticks",
            "link": "/reference/pill_core/system_ticks/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "last_run_tick",
                    "link": "/reference/pill_core/system_ticks/fn.last_run_tick"
                  },
                  {
                    "text": "replace_last_run_tick",
                    "link": "/reference/pill_core/system_ticks/fn.replace_last_run_tick"
                  },
                  {
                    "text": "replace_this_run_tick",
                    "link": "/reference/pill_core/system_ticks/fn.replace_this_run_tick"
                  },
                  {
                    "text": "this_run_tick",
                    "link": "/reference/pill_core/system_ticks/fn.this_run_tick"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "LAST_RUN_TICK",
                    "link": "/reference/pill_core/system_ticks/constant.LAST_RUN_TICK"
                  },
                  {
                    "text": "THIS_RUN_TICK",
                    "link": "/reference/pill_core/system_ticks/constant.THIS_RUN_TICK"
                  }
                ]
              }
            ]
          },
          {
            "text": "telemetry",
            "link": "/reference/pill_core/telemetry/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "capture",
                    "link": "/reference/pill_core/telemetry/capture/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CaptureLayer",
                            "link": "/reference/pill_core/telemetry/capture/struct.CaptureLayer"
                          },
                          {
                            "text": "LogBuffer",
                            "link": "/reference/pill_core/telemetry/capture/struct.LogBuffer"
                          },
                          {
                            "text": "LogLine",
                            "link": "/reference/pill_core/telemetry/capture/struct.LogLine"
                          },
                          {
                            "text": "Ring",
                            "link": "/reference/pill_core/telemetry/capture/struct.Ring"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "level_value",
                            "link": "/reference/pill_core/telemetry/capture/fn.level_value"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DEFAULT_CAPTURE_CAPACITY",
                            "link": "/reference/pill_core/telemetry/capture/constant.DEFAULT_CAPTURE_CAPACITY"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "telemetry_target",
                    "link": "/reference/pill_core/telemetry/telemetry_target/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CSHARP",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.CSHARP"
                          },
                          {
                            "text": "ECS",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.ECS"
                          },
                          {
                            "text": "EDITOR",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.EDITOR"
                          },
                          {
                            "text": "ENGINE",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.ENGINE"
                          },
                          {
                            "text": "HOT_RELOAD",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.HOT_RELOAD"
                          },
                          {
                            "text": "INPUT",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.INPUT"
                          },
                          {
                            "text": "LINK",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.LINK"
                          },
                          {
                            "text": "PROFILE_COARSE",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.PROFILE_COARSE"
                          },
                          {
                            "text": "PROFILE_FINE",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.PROFILE_FINE"
                          },
                          {
                            "text": "RENDERING",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.RENDERING"
                          },
                          {
                            "text": "RESOURCES",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.RESOURCES"
                          },
                          {
                            "text": "SYSTEM",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.SYSTEM"
                          },
                          {
                            "text": "UI",
                            "link": "/reference/pill_core/telemetry/telemetry_target/constant.UI"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EngineTerminalFormatter",
                    "link": "/reference/pill_core/telemetry/struct.EngineTerminalFormatter"
                  },
                  {
                    "text": "LoggingConfig",
                    "link": "/reference/pill_core/telemetry/struct.LoggingConfig"
                  },
                  {
                    "text": "StyledFieldVisitor",
                    "link": "/reference/pill_core/telemetry/struct.StyledFieldVisitor"
                  },
                  {
                    "text": "TelemetryBuilder",
                    "link": "/reference/pill_core/telemetry/struct.TelemetryBuilder"
                  },
                  {
                    "text": "TelemetryHandles",
                    "link": "/reference/pill_core/telemetry/struct.TelemetryHandles"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "TelemetryError",
                    "link": "/reference/pill_core/telemetry/enum.TelemetryError"
                  },
                  {
                    "text": "TimestampFormat",
                    "link": "/reference/pill_core/telemetry/enum.TimestampFormat"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "log_block",
                    "link": "/reference/pill_core/telemetry/fn.log_block"
                  },
                  {
                    "text": "log_block_colored",
                    "link": "/reference/pill_core/telemetry/fn.log_block_colored"
                  },
                  {
                    "text": "paint",
                    "link": "/reference/pill_core/telemetry/fn.paint"
                  },
                  {
                    "text": "reload_filter",
                    "link": "/reference/pill_core/telemetry/fn.reload_filter"
                  },
                  {
                    "text": "set_show_source_location",
                    "link": "/reference/pill_core/telemetry/fn.set_show_source_location"
                  },
                  {
                    "text": "set_timestamp_format",
                    "link": "/reference/pill_core/telemetry/fn.set_timestamp_format"
                  },
                  {
                    "text": "show_source_location",
                    "link": "/reference/pill_core/telemetry/fn.show_source_location"
                  },
                  {
                    "text": "strip_color_codes",
                    "link": "/reference/pill_core/telemetry/fn.strip_color_codes"
                  },
                  {
                    "text": "styled_level",
                    "link": "/reference/pill_core/telemetry/fn.styled_level"
                  },
                  {
                    "text": "styled_target",
                    "link": "/reference/pill_core/telemetry/fn.styled_target"
                  },
                  {
                    "text": "timestamp_format",
                    "link": "/reference/pill_core/telemetry/fn.timestamp_format"
                  },
                  {
                    "text": "timestamp_format_from_discriminant",
                    "link": "/reference/pill_core/telemetry/fn.timestamp_format_from_discriminant"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "FileLayer",
                    "link": "/reference/pill_core/telemetry/type.FileLayer"
                  },
                  {
                    "text": "FileLayerArtifacts",
                    "link": "/reference/pill_core/telemetry/type.FileLayerArtifacts"
                  },
                  {
                    "text": "TerminalLayer",
                    "link": "/reference/pill_core/telemetry/type.TerminalLayer"
                  },
                  {
                    "text": "TerminalStack",
                    "link": "/reference/pill_core/telemetry/type.TerminalStack"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "BLOCK_GUTTER",
                    "link": "/reference/pill_core/telemetry/constant.BLOCK_GUTTER"
                  },
                  {
                    "text": "DEV_LOG_TARGET",
                    "link": "/reference/pill_core/telemetry/constant.DEV_LOG_TARGET"
                  },
                  {
                    "text": "FIELD_SEPARATOR",
                    "link": "/reference/pill_core/telemetry/constant.FIELD_SEPARATOR"
                  },
                  {
                    "text": "IGNORED_LOG_TARGETS",
                    "link": "/reference/pill_core/telemetry/constant.IGNORED_LOG_TARGETS"
                  },
                  {
                    "text": "LEVEL_WIDTH",
                    "link": "/reference/pill_core/telemetry/constant.LEVEL_WIDTH"
                  },
                  {
                    "text": "MODULE_FIELD_NAMES",
                    "link": "/reference/pill_core/telemetry/constant.MODULE_FIELD_NAMES"
                  },
                  {
                    "text": "PROFILE_COARSE_TARGET",
                    "link": "/reference/pill_core/telemetry/constant.PROFILE_COARSE_TARGET"
                  },
                  {
                    "text": "PROFILE_FINE_TARGET",
                    "link": "/reference/pill_core/telemetry/constant.PROFILE_FINE_TARGET"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "SHOW_SOURCE_LOCATION",
                    "link": "/reference/pill_core/telemetry/static.SHOW_SOURCE_LOCATION"
                  },
                  {
                    "text": "TIMESTAMP_FORMAT",
                    "link": "/reference/pill_core/telemetry/static.TIMESTAMP_FORMAT"
                  }
                ]
              }
            ]
          },
          {
            "text": "utils",
            "link": "/reference/pill_core/utils/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetPathError",
                    "link": "/reference/pill_core/utils/enum.AssetPathError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "create_bitmask_from_range",
                    "link": "/reference/pill_core/utils/fn.create_bitmask_from_range"
                  },
                  {
                    "text": "create_bitmask_with_one",
                    "link": "/reference/pill_core/utils/fn.create_bitmask_with_one"
                  },
                  {
                    "text": "enum_variant_eq",
                    "link": "/reference/pill_core/utils/fn.enum_variant_eq"
                  },
                  {
                    "text": "format_error_chain",
                    "link": "/reference/pill_core/utils/fn.format_error_chain"
                  },
                  {
                    "text": "get_enum_variant_type_name",
                    "link": "/reference/pill_core/utils/fn.get_enum_variant_type_name"
                  },
                  {
                    "text": "get_indices_of_set_elements",
                    "link": "/reference/pill_core/utils/fn.get_indices_of_set_elements"
                  },
                  {
                    "text": "get_project_error_message",
                    "link": "/reference/pill_core/utils/fn.get_project_error_message"
                  },
                  {
                    "text": "get_type_name",
                    "link": "/reference/pill_core/utils/fn.get_type_name"
                  },
                  {
                    "text": "get_value_type_name",
                    "link": "/reference/pill_core/utils/fn.get_value_type_name"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Macros",
        "collapsed": true,
        "items": [
          {
            "text": "define_slot_key",
            "link": "/reference/pill_core/macro.define_slot_key"
          },
          {
            "text": "dev_error",
            "link": "/reference/pill_core/macro.dev_error"
          },
          {
            "text": "dev_warn",
            "link": "/reference/pill_core/macro.dev_warn"
          },
          {
            "text": "log",
            "link": "/reference/pill_core/macro.log"
          },
          {
            "text": "profile_error",
            "link": "/reference/pill_core/macro.profile_error"
          },
          {
            "text": "profile_frame_mark",
            "link": "/reference/pill_core/macro.profile_frame_mark"
          },
          {
            "text": "profile_init",
            "link": "/reference/pill_core/macro.profile_init"
          },
          {
            "text": "profile_message",
            "link": "/reference/pill_core/macro.profile_message"
          },
          {
            "text": "profile_non_continuous_frame",
            "link": "/reference/pill_core/macro.profile_non_continuous_frame"
          },
          {
            "text": "profile_plot",
            "link": "/reference/pill_core/macro.profile_plot"
          },
          {
            "text": "profile_plot_config",
            "link": "/reference/pill_core/macro.profile_plot_config"
          },
          {
            "text": "profile_scope",
            "link": "/reference/pill_core/macro.profile_scope"
          },
          {
            "text": "profile_scope_fine",
            "link": "/reference/pill_core/macro.profile_scope_fine"
          },
          {
            "text": "profile_secondary_frame_mark",
            "link": "/reference/pill_core/macro.profile_secondary_frame_mark"
          },
          {
            "text": "profile_thread",
            "link": "/reference/pill_core/macro.profile_thread"
          },
          {
            "text": "profile_warn",
            "link": "/reference/pill_core/macro.profile_warn"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Core Macros",
    "link": "/reference/pill_core_macros/",
    "collapsed": true,
    "items": [
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "MacroArguments",
            "link": "/reference/pill_core_macros/struct.MacroArguments"
          },
          {
            "text": "VariantInfo",
            "link": "/reference/pill_core_macros/struct.VariantInfo"
          }
        ]
      },
      {
        "text": "Enums",
        "collapsed": true,
        "items": [
          {
            "text": "MessageNode",
            "link": "/reference/pill_core_macros/enum.MessageNode"
          },
          {
            "text": "SemanticRole",
            "link": "/reference/pill_core_macros/enum.SemanticRole"
          },
          {
            "text": "StyleArgument",
            "link": "/reference/pill_core_macros/enum.StyleArgument"
          },
          {
            "text": "ValueFormat",
            "link": "/reference/pill_core_macros/enum.ValueFormat"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "build_format_string",
            "link": "/reference/pill_core_macros/fn.build_format_string"
          },
          {
            "text": "build_message_arm",
            "link": "/reference/pill_core_macros/fn.build_message_arm"
          },
          {
            "text": "build_message_steps",
            "link": "/reference/pill_core_macros/fn.build_message_steps"
          },
          {
            "text": "build_transparent_arm",
            "link": "/reference/pill_core_macros/fn.build_transparent_arm"
          },
          {
            "text": "cfg_attributes",
            "link": "/reference/pill_core_macros/fn.cfg_attributes"
          },
          {
            "text": "classify_variant",
            "link": "/reference/pill_core_macros/fn.classify_variant"
          },
          {
            "text": "did_you_mean",
            "link": "/reference/pill_core_macros/fn.did_you_mean"
          },
          {
            "text": "edit_distance",
            "link": "/reference/pill_core_macros/fn.edit_distance"
          },
          {
            "text": "existing_derives",
            "link": "/reference/pill_core_macros/fn.existing_derives"
          },
          {
            "text": "expand_engine_error",
            "link": "/reference/pill_core_macros/fn.expand_engine_error"
          },
          {
            "text": "namespace_string",
            "link": "/reference/pill_core_macros/fn.namespace_string"
          },
          {
            "text": "plain_node",
            "link": "/reference/pill_core_macros/fn.plain_node"
          },
          {
            "text": "referenced_fields",
            "link": "/reference/pill_core_macros/fn.referenced_fields"
          },
          {
            "text": "styled_node",
            "link": "/reference/pill_core_macros/fn.styled_node"
          },
          {
            "text": "to_snake_case",
            "link": "/reference/pill_core_macros/fn.to_snake_case"
          }
        ]
      },
      {
        "text": "Procedural macros",
        "collapsed": true,
        "items": [
          {
            "text": "engine_error",
            "link": "/reference/pill_core_macros/macro.engine_error"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Csharp Bridge",
    "link": "/reference/pill_csharp_bridge/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "abi",
            "link": "/reference/pill_csharp_bridge/abi/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentChunk",
                    "link": "/reference/pill_csharp_bridge/abi/struct.ComponentChunk"
                  },
                  {
                    "text": "CsEngineApi",
                    "link": "/reference/pill_csharp_bridge/abi/struct.CsEngineApi"
                  },
                  {
                    "text": "MirrorMethodEntry",
                    "link": "/reference/pill_csharp_bridge/abi/struct.MirrorMethodEntry"
                  },
                  {
                    "text": "MirrorMethodRow",
                    "link": "/reference/pill_csharp_bridge/abi/struct.MirrorMethodRow"
                  },
                  {
                    "text": "MirrorMethodTable",
                    "link": "/reference/pill_csharp_bridge/abi/struct.MirrorMethodTable"
                  },
                  {
                    "text": "NativeComponentBlob",
                    "link": "/reference/pill_csharp_bridge/abi/struct.NativeComponentBlob"
                  },
                  {
                    "text": "NativeSystemAccess",
                    "link": "/reference/pill_csharp_bridge/abi/struct.NativeSystemAccess"
                  },
                  {
                    "text": "ResourceView",
                    "link": "/reference/pill_csharp_bridge/abi/struct.ResourceView"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "copy_managed_bytes",
                    "link": "/reference/pill_csharp_bridge/abi/fn.copy_managed_bytes"
                  },
                  {
                    "text": "end_unfinished_zones",
                    "link": "/reference/pill_csharp_bridge/abi/fn.end_unfinished_zones"
                  },
                  {
                    "text": "ffi_copy_mirror_methods",
                    "link": "/reference/pill_csharp_bridge/abi/fn.ffi_copy_mirror_methods"
                  },
                  {
                    "text": "ffi_csharp_log",
                    "link": "/reference/pill_csharp_bridge/abi/fn.ffi_csharp_log"
                  },
                  {
                    "text": "ffi_csharp_zone_begin",
                    "link": "/reference/pill_csharp_bridge/abi/fn.ffi_csharp_zone_begin"
                  },
                  {
                    "text": "ffi_csharp_zone_end",
                    "link": "/reference/pill_csharp_bridge/abi/fn.ffi_csharp_zone_end"
                  },
                  {
                    "text": "ffi_mirror_epoch",
                    "link": "/reference/pill_csharp_bridge/abi/fn.ffi_mirror_epoch"
                  },
                  {
                    "text": "ffi_mirror_method_count",
                    "link": "/reference/pill_csharp_bridge/abi/fn.ffi_mirror_method_count"
                  },
                  {
                    "text": "publish_mirror_methods",
                    "link": "/reference/pill_csharp_bridge/abi/fn.publish_mirror_methods"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CSHARP_ZONES",
                    "link": "/reference/pill_csharp_bridge/abi/constant.CSHARP_ZONES"
                  },
                  {
                    "text": "RETIRED_TABLES_KEPT",
                    "link": "/reference/pill_csharp_bridge/abi/constant.RETIRED_TABLES_KEPT"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "MIRROR_EPOCH",
                    "link": "/reference/pill_csharp_bridge/abi/static.MIRROR_EPOCH"
                  },
                  {
                    "text": "MIRROR_METHOD_GRAVEYARD",
                    "link": "/reference/pill_csharp_bridge/abi/static.MIRROR_METHOD_GRAVEYARD"
                  },
                  {
                    "text": "MIRROR_METHOD_TABLE",
                    "link": "/reference/pill_csharp_bridge/abi/static.MIRROR_METHOD_TABLE"
                  },
                  {
                    "text": "NEXT_CSHARP_ZONE_TOKEN",
                    "link": "/reference/pill_csharp_bridge/abi/static.NEXT_CSHARP_ZONE_TOKEN"
                  }
                ]
              }
            ]
          },
          {
            "text": "aot_runtime",
            "link": "/reference/pill_csharp_bridge/aot_runtime/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AotRuntimeContext",
                    "link": "/reference/pill_csharp_bridge/aot_runtime/struct.AotRuntimeContext"
                  }
                ]
              }
            ]
          },
          {
            "text": "backend",
            "link": "/reference/pill_csharp_bridge/backend/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CSharpRuntime",
                    "link": "/reference/pill_csharp_bridge/backend/struct.CSharpRuntime"
                  },
                  {
                    "text": "ManagedExports",
                    "link": "/reference/pill_csharp_bridge/backend/struct.ManagedExports"
                  },
                  {
                    "text": "ManagedSystemSnapshot",
                    "link": "/reference/pill_csharp_bridge/backend/struct.ManagedSystemSnapshot"
                  },
                  {
                    "text": "PreparedManagedSystem",
                    "link": "/reference/pill_csharp_bridge/backend/struct.PreparedManagedSystem"
                  },
                  {
                    "text": "SystemExports",
                    "link": "/reference/pill_csharp_bridge/backend/struct.SystemExports"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ManagedRuntimeContext",
                    "link": "/reference/pill_csharp_bridge/backend/enum.ManagedRuntimeContext"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "checked_access_count",
                    "link": "/reference/pill_csharp_bridge/backend/fn.checked_access_count"
                  },
                  {
                    "text": "checked_system_count",
                    "link": "/reference/pill_csharp_bridge/backend/fn.checked_system_count"
                  },
                  {
                    "text": "commit_managed_systems",
                    "link": "/reference/pill_csharp_bridge/backend/fn.commit_managed_systems"
                  },
                  {
                    "text": "derive_system_access",
                    "link": "/reference/pill_csharp_bridge/backend/fn.derive_system_access"
                  },
                  {
                    "text": "managed_system_error_message",
                    "link": "/reference/pill_csharp_bridge/backend/fn.managed_system_error_message"
                  },
                  {
                    "text": "managed_system_name",
                    "link": "/reference/pill_csharp_bridge/backend/fn.managed_system_name"
                  },
                  {
                    "text": "poll_status_is_known",
                    "link": "/reference/pill_csharp_bridge/backend/fn.poll_status_is_known"
                  },
                  {
                    "text": "prepare_managed_systems",
                    "link": "/reference/pill_csharp_bridge/backend/fn.prepare_managed_systems"
                  },
                  {
                    "text": "read_reported_manifest",
                    "link": "/reference/pill_csharp_bridge/backend/fn.read_reported_manifest"
                  },
                  {
                    "text": "register_managed_systems",
                    "link": "/reference/pill_csharp_bridge/backend/fn.register_managed_systems"
                  },
                  {
                    "text": "resolved_system_name",
                    "link": "/reference/pill_csharp_bridge/backend/fn.resolved_system_name"
                  },
                  {
                    "text": "shipped_or_baked",
                    "link": "/reference/pill_csharp_bridge/backend/fn.shipped_or_baked"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "AbortReloadFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.AbortReloadFn"
                  },
                  {
                    "text": "CommitReloadFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.CommitReloadFn"
                  },
                  {
                    "text": "ComponentManifestLengthFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.ComponentManifestLengthFn"
                  },
                  {
                    "text": "CopyComponentManifestFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.CopyComponentManifestFn"
                  },
                  {
                    "text": "CopyPendingManifestFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.CopyPendingManifestFn"
                  },
                  {
                    "text": "CopySystemErrorMessageFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.CopySystemErrorMessageFn"
                  },
                  {
                    "text": "CopySystemNameFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.CopySystemNameFn"
                  },
                  {
                    "text": "GetSystemAccessFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.GetSystemAccessFn"
                  },
                  {
                    "text": "InitFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.InitFn"
                  },
                  {
                    "text": "InteropVersionFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.InteropVersionFn"
                  },
                  {
                    "text": "NotifyAssemblyReplacedFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.NotifyAssemblyReplacedFn"
                  },
                  {
                    "text": "PendingManifestLengthFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.PendingManifestLengthFn"
                  },
                  {
                    "text": "PollReloadFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.PollReloadFn"
                  },
                  {
                    "text": "RunStartupFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.RunStartupFn"
                  },
                  {
                    "text": "RunSystemFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.RunSystemFn"
                  },
                  {
                    "text": "StartupCountFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.StartupCountFn"
                  },
                  {
                    "text": "SystemAccessCountFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.SystemAccessCountFn"
                  },
                  {
                    "text": "SystemCountFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.SystemCountFn"
                  },
                  {
                    "text": "SystemErrorMessageLengthFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.SystemErrorMessageLengthFn"
                  },
                  {
                    "text": "SystemNameLengthFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.SystemNameLengthFn"
                  },
                  {
                    "text": "SystemUsesCommandsFn",
                    "link": "/reference/pill_csharp_bridge/backend/type.SystemUsesCommandsFn"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "INTEROP_CONTRACT_VERSION",
                    "link": "/reference/pill_csharp_bridge/backend/constant.INTEROP_CONTRACT_VERSION"
                  },
                  {
                    "text": "MAX_ACCESSES_PER_SYSTEM",
                    "link": "/reference/pill_csharp_bridge/backend/constant.MAX_ACCESSES_PER_SYSTEM"
                  },
                  {
                    "text": "MAX_COMPONENT_MANIFEST_BYTES",
                    "link": "/reference/pill_csharp_bridge/backend/constant.MAX_COMPONENT_MANIFEST_BYTES"
                  },
                  {
                    "text": "MAX_SYSTEM_ERROR_BYTES",
                    "link": "/reference/pill_csharp_bridge/backend/constant.MAX_SYSTEM_ERROR_BYTES"
                  },
                  {
                    "text": "MAX_SYSTEM_NAME_BYTES",
                    "link": "/reference/pill_csharp_bridge/backend/constant.MAX_SYSTEM_NAME_BYTES"
                  },
                  {
                    "text": "MAX_SYSTEMS_PER_ASSEMBLY",
                    "link": "/reference/pill_csharp_bridge/backend/constant.MAX_SYSTEMS_PER_ASSEMBLY"
                  },
                  {
                    "text": "POLL_MANIFEST_PENDING",
                    "link": "/reference/pill_csharp_bridge/backend/constant.POLL_MANIFEST_PENDING"
                  },
                  {
                    "text": "POLL_NO_CHANGE",
                    "link": "/reference/pill_csharp_bridge/backend/constant.POLL_NO_CHANGE"
                  },
                  {
                    "text": "POLL_REJECTED",
                    "link": "/reference/pill_csharp_bridge/backend/constant.POLL_REJECTED"
                  },
                  {
                    "text": "POLL_RELOADED",
                    "link": "/reference/pill_csharp_bridge/backend/constant.POLL_RELOADED"
                  }
                ]
              }
            ]
          },
          {
            "text": "commands",
            "link": "/reference/pill_csharp_bridge/commands/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "DecodedCommandComponent",
                    "link": "/reference/pill_csharp_bridge/commands/enum.DecodedCommandComponent"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "command_scope_error",
                    "link": "/reference/pill_csharp_bridge/commands/fn.command_scope_error"
                  },
                  {
                    "text": "decode_command_component",
                    "link": "/reference/pill_csharp_bridge/commands/fn.decode_command_component"
                  },
                  {
                    "text": "ffi_queue_add_component",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_add_component"
                  },
                  {
                    "text": "ffi_queue_add_component_guarded",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_add_component_guarded"
                  },
                  {
                    "text": "ffi_queue_create",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_create"
                  },
                  {
                    "text": "ffi_queue_create_guarded",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_create_guarded"
                  },
                  {
                    "text": "ffi_queue_destroy",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_destroy"
                  },
                  {
                    "text": "ffi_queue_destroy_guarded",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_destroy_guarded"
                  },
                  {
                    "text": "ffi_queue_remove_component",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_remove_component"
                  },
                  {
                    "text": "ffi_queue_remove_component_guarded",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_queue_remove_component_guarded"
                  },
                  {
                    "text": "ffi_reserve_entity",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_reserve_entity"
                  },
                  {
                    "text": "ffi_reserve_entity_guarded",
                    "link": "/reference/pill_csharp_bridge/commands/fn.ffi_reserve_entity_guarded"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MAX_COMPONENTS_PER_CREATE",
                    "link": "/reference/pill_csharp_bridge/commands/constant.MAX_COMPONENTS_PER_CREATE"
                  }
                ]
              }
            ]
          },
          {
            "text": "components",
            "link": "/reference/pill_csharp_bridge/components/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "BindingStore",
                    "link": "/reference/pill_csharp_bridge/components/struct.BindingStore"
                  },
                  {
                    "text": "ManifestApplyReport",
                    "link": "/reference/pill_csharp_bridge/components/struct.ManifestApplyReport"
                  },
                  {
                    "text": "ModuleExposedComponent",
                    "link": "/reference/pill_csharp_bridge/components/struct.ModuleExposedComponent"
                  },
                  {
                    "text": "StableComponentId",
                    "link": "/reference/pill_csharp_bridge/components/struct.StableComponentId"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentBinding",
                    "link": "/reference/pill_csharp_bridge/components/enum.ComponentBinding"
                  },
                  {
                    "text": "ComponentUndo",
                    "link": "/reference/pill_csharp_bridge/components/enum.ComponentUndo"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_component_manifest_on_reload",
                    "link": "/reference/pill_csharp_bridge/components/fn.apply_component_manifest_on_reload"
                  },
                  {
                    "text": "check_binding_against_manifest",
                    "link": "/reference/pill_csharp_bridge/components/fn.check_binding_against_manifest"
                  },
                  {
                    "text": "component_binding_name",
                    "link": "/reference/pill_csharp_bridge/components/fn.component_binding_name"
                  },
                  {
                    "text": "exposed_components_from_names",
                    "link": "/reference/pill_csharp_bridge/components/fn.exposed_components_from_names"
                  },
                  {
                    "text": "managed_binding",
                    "link": "/reference/pill_csharp_bridge/components/fn.managed_binding"
                  },
                  {
                    "text": "managed_field_signature",
                    "link": "/reference/pill_csharp_bridge/components/fn.managed_field_signature"
                  },
                  {
                    "text": "module_native_bindings",
                    "link": "/reference/pill_csharp_bridge/components/fn.module_native_bindings"
                  },
                  {
                    "text": "record_managed_asset_fields",
                    "link": "/reference/pill_csharp_bridge/components/fn.record_managed_asset_fields"
                  },
                  {
                    "text": "register_component_entry",
                    "link": "/reference/pill_csharp_bridge/components/fn.register_component_entry"
                  },
                  {
                    "text": "register_component_manifest",
                    "link": "/reference/pill_csharp_bridge/components/fn.register_component_manifest"
                  },
                  {
                    "text": "register_managed_storage",
                    "link": "/reference/pill_csharp_bridge/components/fn.register_managed_storage"
                  },
                  {
                    "text": "rename_component_entry",
                    "link": "/reference/pill_csharp_bridge/components/fn.rename_component_entry"
                  },
                  {
                    "text": "report_retyped_fields",
                    "link": "/reference/pill_csharp_bridge/components/fn.report_retyped_fields"
                  },
                  {
                    "text": "reshape_component_entry",
                    "link": "/reference/pill_csharp_bridge/components/fn.reshape_component_entry"
                  },
                  {
                    "text": "resolve_component_alias",
                    "link": "/reference/pill_csharp_bridge/components/fn.resolve_component_alias"
                  },
                  {
                    "text": "resolve_exposed_component_id",
                    "link": "/reference/pill_csharp_bridge/components/fn.resolve_exposed_component_id"
                  },
                  {
                    "text": "rollback_field_plan",
                    "link": "/reference/pill_csharp_bridge/components/fn.rollback_field_plan"
                  },
                  {
                    "text": "settle_component",
                    "link": "/reference/pill_csharp_bridge/components/fn.settle_component"
                  },
                  {
                    "text": "stable_component_id",
                    "link": "/reference/pill_csharp_bridge/components/fn.stable_component_id"
                  },
                  {
                    "text": "undo_component_entry",
                    "link": "/reference/pill_csharp_bridge/components/fn.undo_component_entry"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentBindings",
                    "link": "/reference/pill_csharp_bridge/components/type.ComponentBindings"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "COMPONENT_SUBJECT",
                    "link": "/reference/pill_csharp_bridge/components/constant.COMPONENT_SUBJECT"
                  }
                ]
              }
            ]
          },
          {
            "text": "config",
            "link": "/reference/pill_csharp_bridge/config/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CSharpModuleConfig",
                    "link": "/reference/pill_csharp_bridge/config/struct.CSharpModuleConfig"
                  }
                ]
              }
            ]
          },
          {
            "text": "context",
            "link": "/reference/pill_csharp_bridge/context/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ActiveScopeData",
                    "link": "/reference/pill_csharp_bridge/context/struct.ActiveScopeData"
                  },
                  {
                    "text": "ActiveScopeGuard",
                    "link": "/reference/pill_csharp_bridge/context/struct.ActiveScopeGuard"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "access_is_authorized",
                    "link": "/reference/pill_csharp_bridge/context/fn.access_is_authorized"
                  },
                  {
                    "text": "active_scope_token",
                    "link": "/reference/pill_csharp_bridge/context/fn.active_scope_token"
                  },
                  {
                    "text": "active_world_exists",
                    "link": "/reference/pill_csharp_bridge/context/fn.active_world_exists"
                  },
                  {
                    "text": "archetype_was_observed",
                    "link": "/reference/pill_csharp_bridge/context/fn.archetype_was_observed"
                  },
                  {
                    "text": "declared_access_allows",
                    "link": "/reference/pill_csharp_bridge/context/fn.declared_access_allows"
                  },
                  {
                    "text": "ffi_current_scope_token",
                    "link": "/reference/pill_csharp_bridge/context/fn.ffi_current_scope_token"
                  },
                  {
                    "text": "guard_managed_callback",
                    "link": "/reference/pill_csharp_bridge/context/fn.guard_managed_callback"
                  },
                  {
                    "text": "native_resource_access_is_authorized",
                    "link": "/reference/pill_csharp_bridge/context/fn.native_resource_access_is_authorized"
                  },
                  {
                    "text": "record_observed_archetype",
                    "link": "/reference/pill_csharp_bridge/context/fn.record_observed_archetype"
                  },
                  {
                    "text": "resource_access_is_authorized",
                    "link": "/reference/pill_csharp_bridge/context/fn.resource_access_is_authorized"
                  },
                  {
                    "text": "with_active_command_context",
                    "link": "/reference/pill_csharp_bridge/context/fn.with_active_command_context"
                  },
                  {
                    "text": "with_active_context",
                    "link": "/reference/pill_csharp_bridge/context/fn.with_active_context"
                  },
                  {
                    "text": "with_active_world",
                    "link": "/reference/pill_csharp_bridge/context/fn.with_active_world"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ACCESS_KIND_COMPONENT",
                    "link": "/reference/pill_csharp_bridge/context/constant.ACCESS_KIND_COMPONENT"
                  },
                  {
                    "text": "ACCESS_KIND_NATIVE_RESOURCE",
                    "link": "/reference/pill_csharp_bridge/context/constant.ACCESS_KIND_NATIVE_RESOURCE"
                  },
                  {
                    "text": "ACCESS_KIND_RESOURCE",
                    "link": "/reference/pill_csharp_bridge/context/constant.ACCESS_KIND_RESOURCE"
                  },
                  {
                    "text": "ACTIVE_SCOPE",
                    "link": "/reference/pill_csharp_bridge/context/constant.ACTIVE_SCOPE"
                  },
                  {
                    "text": "OBSERVED_ARCHETYPES",
                    "link": "/reference/pill_csharp_bridge/context/constant.OBSERVED_ARCHETYPES"
                  },
                  {
                    "text": "RESERVED_ENTITIES",
                    "link": "/reference/pill_csharp_bridge/context/constant.RESERVED_ENTITIES"
                  },
                  {
                    "text": "SCOPE_TOKEN",
                    "link": "/reference/pill_csharp_bridge/context/constant.SCOPE_TOKEN"
                  }
                ]
              }
            ]
          },
          {
            "text": "csharp_runtime",
            "link": "/reference/pill_csharp_bridge/csharp_runtime/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "DotnetRuntimeContext",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/struct.DotnetRuntimeContext"
                  },
                  {
                    "text": "HostfxrVersion",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/struct.HostfxrVersion"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "collect_hostfxr_versions",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/fn.collect_hostfxr_versions"
                  },
                  {
                    "text": "dotnet_roots",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/fn.dotnet_roots"
                  },
                  {
                    "text": "find_hostfxr_library_path",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/fn.find_hostfxr_library_path"
                  },
                  {
                    "text": "host_string",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/fn.host_string"
                  },
                  {
                    "text": "parse_hostfxr_version",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/fn.parse_hostfxr_version"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "CloseFn",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/type.CloseFn"
                  },
                  {
                    "text": "GetDelegateFn",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/type.GetDelegateFn"
                  },
                  {
                    "text": "HostChar",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/type.HostChar"
                  },
                  {
                    "text": "InitializeFn",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/type.InitializeFn"
                  },
                  {
                    "text": "LoadAssemblyFn",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/type.LoadAssemblyFn"
                  },
                  {
                    "text": "RuntimeHandle",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/type.RuntimeHandle"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "LOAD_ASSEMBLY_AND_GET_FUNCTION_POINTER",
                    "link": "/reference/pill_csharp_bridge/csharp_runtime/constant.LOAD_ASSEMBLY_AND_GET_FUNCTION_POINTER"
                  }
                ]
              }
            ]
          },
          {
            "text": "frame_state",
            "link": "/reference/pill_csharp_bridge/frame_state/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "ffi_input_key_held",
                    "link": "/reference/pill_csharp_bridge/frame_state/fn.ffi_input_key_held"
                  },
                  {
                    "text": "ffi_input_mouse_button_held",
                    "link": "/reference/pill_csharp_bridge/frame_state/fn.ffi_input_mouse_button_held"
                  },
                  {
                    "text": "ffi_input_mouse_delta",
                    "link": "/reference/pill_csharp_bridge/frame_state/fn.ffi_input_mouse_delta"
                  },
                  {
                    "text": "ffi_time_delta_seconds",
                    "link": "/reference/pill_csharp_bridge/frame_state/fn.ffi_time_delta_seconds"
                  },
                  {
                    "text": "ffi_time_elapsed_seconds",
                    "link": "/reference/pill_csharp_bridge/frame_state/fn.ffi_time_elapsed_seconds"
                  }
                ]
              }
            ]
          },
          {
            "text": "managed_buffer",
            "link": "/reference/pill_csharp_bridge/managed_buffer/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ManagedBufferError",
                    "link": "/reference/pill_csharp_bridge/managed_buffer/enum.ManagedBufferError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "fetch_managed_buffer",
                    "link": "/reference/pill_csharp_bridge/managed_buffer/fn.fetch_managed_buffer"
                  },
                  {
                    "text": "manifest_fetch_error",
                    "link": "/reference/pill_csharp_bridge/managed_buffer/fn.manifest_fetch_error"
                  }
                ]
              }
            ]
          },
          {
            "text": "manifest",
            "link": "/reference/pill_csharp_bridge/manifest/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "BlittableLeaf",
                    "link": "/reference/pill_csharp_bridge/manifest/struct.BlittableLeaf"
                  },
                  {
                    "text": "ManagedFieldManifest",
                    "link": "/reference/pill_csharp_bridge/manifest/struct.ManagedFieldManifest"
                  },
                  {
                    "text": "ManagedManifestEntry",
                    "link": "/reference/pill_csharp_bridge/manifest/struct.ManagedManifestEntry"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "DefaultLiteral",
                    "link": "/reference/pill_csharp_bridge/manifest/enum.DefaultLiteral"
                  },
                  {
                    "text": "ManagedFieldDecorator",
                    "link": "/reference/pill_csharp_bridge/manifest/enum.ManagedFieldDecorator"
                  },
                  {
                    "text": "ManifestEntryKind",
                    "link": "/reference/pill_csharp_bridge/manifest/enum.ManifestEntryKind"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "blittable_leaf",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.blittable_leaf"
                  },
                  {
                    "text": "build_field_plan",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.build_field_plan"
                  },
                  {
                    "text": "field_decorations",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.field_decorations"
                  },
                  {
                    "text": "format_field_layout_line",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.format_field_layout_line"
                  },
                  {
                    "text": "handle_asset_path",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.handle_asset_path"
                  },
                  {
                    "text": "handle_tag",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.handle_tag"
                  },
                  {
                    "text": "intern",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.intern"
                  },
                  {
                    "text": "is_blittable",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.is_blittable"
                  },
                  {
                    "text": "managed_field_layout",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.managed_field_layout"
                  },
                  {
                    "text": "manifest_field_tag",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.manifest_field_tag"
                  },
                  {
                    "text": "parse_and_validate_manifest",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.parse_and_validate_manifest"
                  },
                  {
                    "text": "parse_default_bytes",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.parse_default_bytes"
                  },
                  {
                    "text": "plan_tag",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.plan_tag"
                  },
                  {
                    "text": "split_manifest_kinds",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.split_manifest_kinds"
                  },
                  {
                    "text": "validate_decorations",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.validate_decorations"
                  },
                  {
                    "text": "validate_field_manifest",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.validate_field_manifest"
                  },
                  {
                    "text": "validate_sibling_non_overlap",
                    "link": "/reference/pill_csharp_bridge/manifest/fn.validate_sibling_non_overlap"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "BLITTABLE_LEAVES",
                    "link": "/reference/pill_csharp_bridge/manifest/constant.BLITTABLE_LEAVES"
                  },
                  {
                    "text": "HANDLE_ALIGNMENT",
                    "link": "/reference/pill_csharp_bridge/manifest/constant.HANDLE_ALIGNMENT"
                  },
                  {
                    "text": "HANDLE_PREFIX",
                    "link": "/reference/pill_csharp_bridge/manifest/constant.HANDLE_PREFIX"
                  },
                  {
                    "text": "HANDLE_SIZE",
                    "link": "/reference/pill_csharp_bridge/manifest/constant.HANDLE_SIZE"
                  },
                  {
                    "text": "MAX_FIELD_NESTING_DEPTH",
                    "link": "/reference/pill_csharp_bridge/manifest/constant.MAX_FIELD_NESTING_DEPTH"
                  },
                  {
                    "text": "STRUCT_TYPE",
                    "link": "/reference/pill_csharp_bridge/manifest/constant.STRUCT_TYPE"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "INTERNED_FIELD_STRINGS",
                    "link": "/reference/pill_csharp_bridge/manifest/static.INTERNED_FIELD_STRINGS"
                  }
                ]
              }
            ]
          },
          {
            "text": "manifest_apply",
            "link": "/reference/pill_csharp_bridge/manifest_apply/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "JournalEntry",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/struct.JournalEntry"
                  },
                  {
                    "text": "ManifestOutcome",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/struct.ManifestOutcome"
                  },
                  {
                    "text": "ManifestSubject",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/struct.ManifestSubject"
                  },
                  {
                    "text": "PreparedManifest",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/struct.PreparedManifest"
                  },
                  {
                    "text": "RenamePredecessor",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/struct.RenamePredecessor"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "Resolution",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/enum.Resolution"
                  },
                  {
                    "text": "Settlement",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/enum.Settlement"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_resolution",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/fn.apply_resolution"
                  },
                  {
                    "text": "execute_manifest",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/fn.execute_manifest"
                  },
                  {
                    "text": "prepare_manifest",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/fn.prepare_manifest"
                  },
                  {
                    "text": "resolve_entries",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/fn.resolve_entries"
                  },
                  {
                    "text": "resolve_renames",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/fn.resolve_renames"
                  },
                  {
                    "text": "roll_back",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/fn.roll_back"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "Applied",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/type.Applied"
                  },
                  {
                    "text": "BindingTable",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/type.BindingTable"
                  },
                  {
                    "text": "Register",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/type.Register"
                  },
                  {
                    "text": "Rename",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/type.Rename"
                  },
                  {
                    "text": "Reshape",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/type.Reshape"
                  },
                  {
                    "text": "ResolveAlias",
                    "link": "/reference/pill_csharp_bridge/manifest_apply/type.ResolveAlias"
                  }
                ]
              }
            ]
          },
          {
            "text": "mirror_calls",
            "link": "/reference/pill_csharp_bridge/mirror_calls/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "ffi_asset_loader_read",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/fn.ffi_asset_loader_read"
                  },
                  {
                    "text": "ffi_get_native_resource",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/fn.ffi_get_native_resource"
                  },
                  {
                    "text": "ffi_take_mirror_text",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/fn.ffi_take_mirror_text"
                  },
                  {
                    "text": "is_callable_by_managed_code",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/fn.is_callable_by_managed_code"
                  },
                  {
                    "text": "statically_linked_mirror_methods",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/fn.statically_linked_mirror_methods"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "HELD_ASSET_BYTES",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.HELD_ASSET_BYTES"
                  },
                  {
                    "text": "HELD_MIRROR_TEXT",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.HELD_MIRROR_TEXT"
                  },
                  {
                    "text": "STATUS_ACCESS_NOT_DECLARED",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.STATUS_ACCESS_NOT_DECLARED"
                  },
                  {
                    "text": "STATUS_MISSING",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.STATUS_MISSING"
                  },
                  {
                    "text": "STATUS_NO_ACTIVE_SCOPE",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.STATUS_NO_ACTIVE_SCOPE"
                  },
                  {
                    "text": "STATUS_NULL_OUTPUT",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.STATUS_NULL_OUTPUT"
                  },
                  {
                    "text": "STATUS_OK",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.STATUS_OK"
                  },
                  {
                    "text": "STATUS_PANICKED",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.STATUS_PANICKED"
                  },
                  {
                    "text": "TEXT_LAST_ERROR",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.TEXT_LAST_ERROR"
                  },
                  {
                    "text": "TEXT_RETURN_STRING",
                    "link": "/reference/pill_csharp_bridge/mirror_calls/constant.TEXT_RETURN_STRING"
                  }
                ]
              }
            ]
          },
          {
            "text": "mirror_naming",
            "link": "/reference/pill_csharp_bridge/mirror_naming/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "field_signature_text",
                    "link": "/reference/pill_csharp_bridge/mirror_naming/fn.field_signature_text"
                  },
                  {
                    "text": "generated_field_signature",
                    "link": "/reference/pill_csharp_bridge/mirror_naming/fn.generated_field_signature"
                  },
                  {
                    "text": "is_heap_owned_tag",
                    "link": "/reference/pill_csharp_bridge/mirror_naming/fn.is_heap_owned_tag"
                  },
                  {
                    "text": "is_opaque_container_tag",
                    "link": "/reference/pill_csharp_bridge/mirror_naming/fn.is_opaque_container_tag"
                  },
                  {
                    "text": "snake_to_pascal",
                    "link": "/reference/pill_csharp_bridge/mirror_naming/fn.snake_to_pascal"
                  },
                  {
                    "text": "split_array_tag",
                    "link": "/reference/pill_csharp_bridge/mirror_naming/fn.split_array_tag"
                  }
                ]
              }
            ]
          },
          {
            "text": "parallel",
            "link": "/reference/pill_csharp_bridge/parallel/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ManagedStatePointer",
                    "link": "/reference/pill_csharp_bridge/parallel/struct.ManagedStatePointer"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "ffi_parallel_for",
                    "link": "/reference/pill_csharp_bridge/parallel/fn.ffi_parallel_for"
                  },
                  {
                    "text": "parallel_for",
                    "link": "/reference/pill_csharp_bridge/parallel/fn.parallel_for"
                  },
                  {
                    "text": "with_callback_flag",
                    "link": "/reference/pill_csharp_bridge/parallel/fn.with_callback_flag"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "ParallelCallback",
                    "link": "/reference/pill_csharp_bridge/parallel/type.ParallelCallback"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "IN_PARALLEL_CALLBACK",
                    "link": "/reference/pill_csharp_bridge/parallel/constant.IN_PARALLEL_CALLBACK"
                  },
                  {
                    "text": "PARALLEL_INTERNAL_FAILURE",
                    "link": "/reference/pill_csharp_bridge/parallel/constant.PARALLEL_INTERNAL_FAILURE"
                  },
                  {
                    "text": "PARALLEL_NESTED",
                    "link": "/reference/pill_csharp_bridge/parallel/constant.PARALLEL_NESTED"
                  },
                  {
                    "text": "PARALLEL_NO_SCOPE",
                    "link": "/reference/pill_csharp_bridge/parallel/constant.PARALLEL_NO_SCOPE"
                  },
                  {
                    "text": "PARALLEL_OK",
                    "link": "/reference/pill_csharp_bridge/parallel/constant.PARALLEL_OK"
                  }
                ]
              }
            ]
          },
          {
            "text": "project_backend",
            "link": "/reference/pill_csharp_bridge/project_backend/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CSharpBackend",
                    "link": "/reference/pill_csharp_bridge/project_backend/struct.CSharpBackend"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "Posture",
                    "link": "/reference/pill_csharp_bridge/project_backend/enum.Posture"
                  }
                ]
              }
            ]
          },
          {
            "text": "queries",
            "link": "/reference/pill_csharp_bridge/queries/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "ffi_entity_count",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_entity_count"
                  },
                  {
                    "text": "ffi_entity_count_guarded",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_entity_count_guarded"
                  },
                  {
                    "text": "ffi_entity_stable_id",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_entity_stable_id"
                  },
                  {
                    "text": "ffi_entity_stable_id_guarded",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_entity_stable_id_guarded"
                  },
                  {
                    "text": "ffi_get_archetype_chunk",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_get_archetype_chunk"
                  },
                  {
                    "text": "ffi_get_archetype_chunk_guarded",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_get_archetype_chunk_guarded"
                  },
                  {
                    "text": "ffi_get_component_chunk",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_get_component_chunk"
                  },
                  {
                    "text": "ffi_get_component_chunk_guarded",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_get_component_chunk_guarded"
                  },
                  {
                    "text": "ffi_get_entity_chunk",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_get_entity_chunk"
                  },
                  {
                    "text": "ffi_get_entity_chunk_guarded",
                    "link": "/reference/pill_csharp_bridge/queries/fn.ffi_get_entity_chunk_guarded"
                  },
                  {
                    "text": "module_binding_matches_live_column",
                    "link": "/reference/pill_csharp_bridge/queries/fn.module_binding_matches_live_column"
                  },
                  {
                    "text": "record_served_archetype",
                    "link": "/reference/pill_csharp_bridge/queries/fn.record_served_archetype"
                  },
                  {
                    "text": "write_component_chunk",
                    "link": "/reference/pill_csharp_bridge/queries/fn.write_component_chunk"
                  },
                  {
                    "text": "write_entity_chunk",
                    "link": "/reference/pill_csharp_bridge/queries/fn.write_entity_chunk"
                  }
                ]
              }
            ]
          },
          {
            "text": "resources",
            "link": "/reference/pill_csharp_bridge/resources/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ManagedResourceDeclaration",
                    "link": "/reference/pill_csharp_bridge/resources/struct.ManagedResourceDeclaration"
                  },
                  {
                    "text": "ResourceBinding",
                    "link": "/reference/pill_csharp_bridge/resources/struct.ResourceBinding"
                  },
                  {
                    "text": "ResourceFieldLayout",
                    "link": "/reference/pill_csharp_bridge/resources/struct.ResourceFieldLayout"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ResourceUndo",
                    "link": "/reference/pill_csharp_bridge/resources/enum.ResourceUndo"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "as_layout_field",
                    "link": "/reference/pill_csharp_bridge/resources/fn.as_layout_field"
                  },
                  {
                    "text": "binding_for_declaration",
                    "link": "/reference/pill_csharp_bridge/resources/fn.binding_for_declaration"
                  },
                  {
                    "text": "bound_resource_id_and_width",
                    "link": "/reference/pill_csharp_bridge/resources/fn.bound_resource_id_and_width"
                  },
                  {
                    "text": "execute_resource_manifest",
                    "link": "/reference/pill_csharp_bridge/resources/fn.execute_resource_manifest"
                  },
                  {
                    "text": "ffi_get_resource_view",
                    "link": "/reference/pill_csharp_bridge/resources/fn.ffi_get_resource_view"
                  },
                  {
                    "text": "ffi_get_resource_view_guarded",
                    "link": "/reference/pill_csharp_bridge/resources/fn.ffi_get_resource_view_guarded"
                  },
                  {
                    "text": "fill_resource_view",
                    "link": "/reference/pill_csharp_bridge/resources/fn.fill_resource_view"
                  },
                  {
                    "text": "prepare_resource_manifest",
                    "link": "/reference/pill_csharp_bridge/resources/fn.prepare_resource_manifest"
                  },
                  {
                    "text": "publish_bindings",
                    "link": "/reference/pill_csharp_bridge/resources/fn.publish_bindings"
                  },
                  {
                    "text": "publish_field_layout",
                    "link": "/reference/pill_csharp_bridge/resources/fn.publish_field_layout"
                  },
                  {
                    "text": "register_declared_resource",
                    "link": "/reference/pill_csharp_bridge/resources/fn.register_declared_resource"
                  },
                  {
                    "text": "register_resource_manifest",
                    "link": "/reference/pill_csharp_bridge/resources/fn.register_resource_manifest"
                  },
                  {
                    "text": "relayout_declared_resource",
                    "link": "/reference/pill_csharp_bridge/resources/fn.relayout_declared_resource"
                  },
                  {
                    "text": "rename_resource_entry",
                    "link": "/reference/pill_csharp_bridge/resources/fn.rename_resource_entry"
                  },
                  {
                    "text": "resolve_resource_access",
                    "link": "/reference/pill_csharp_bridge/resources/fn.resolve_resource_access"
                  },
                  {
                    "text": "resource_field_plan",
                    "link": "/reference/pill_csharp_bridge/resources/fn.resource_field_plan"
                  },
                  {
                    "text": "retire_resources",
                    "link": "/reference/pill_csharp_bridge/resources/fn.retire_resources"
                  },
                  {
                    "text": "undo_resource_entry",
                    "link": "/reference/pill_csharp_bridge/resources/fn.undo_resource_entry"
                  },
                  {
                    "text": "with_bindings",
                    "link": "/reference/pill_csharp_bridge/resources/fn.with_bindings"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "ResourceBindings",
                    "link": "/reference/pill_csharp_bridge/resources/type.ResourceBindings"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "RESOURCE_ACCESS_KIND",
                    "link": "/reference/pill_csharp_bridge/resources/constant.RESOURCE_ACCESS_KIND"
                  },
                  {
                    "text": "RESOURCE_SUBJECT",
                    "link": "/reference/pill_csharp_bridge/resources/constant.RESOURCE_SUBJECT"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "RESOURCE_BINDINGS",
                    "link": "/reference/pill_csharp_bridge/resources/static.RESOURCE_BINDINGS"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "ResolvedFieldAccessor",
            "link": "/reference/pill_csharp_bridge/struct.ResolvedFieldAccessor"
          },
          {
            "text": "ResolvedMirrorMethod",
            "link": "/reference/pill_csharp_bridge/struct.ResolvedMirrorMethod"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "accessor_operation_name",
            "link": "/reference/pill_csharp_bridge/fn.accessor_operation_name"
          },
          {
            "text": "accessor_rows",
            "link": "/reference/pill_csharp_bridge/fn.accessor_rows"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Development Host",
    "link": "/reference/pill_development_host/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "analytics",
            "link": "/reference/pill_development_host/analytics/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Analytics",
                    "link": "/reference/pill_development_host/analytics/struct.Analytics"
                  },
                  {
                    "text": "CargoTiming",
                    "link": "/reference/pill_development_host/analytics/struct.CargoTiming"
                  },
                  {
                    "text": "ModuleAnalytics",
                    "link": "/reference/pill_development_host/analytics/struct.ModuleAnalytics"
                  },
                  {
                    "text": "PatchFallback",
                    "link": "/reference/pill_development_host/analytics/struct.PatchFallback"
                  },
                  {
                    "text": "PeImport",
                    "link": "/reference/pill_development_host/analytics/struct.PeImport"
                  },
                  {
                    "text": "PeInspection",
                    "link": "/reference/pill_development_host/analytics/struct.PeInspection"
                  },
                  {
                    "text": "ReloadEvent",
                    "link": "/reference/pill_development_host/analytics/struct.ReloadEvent"
                  },
                  {
                    "text": "ReportColumn",
                    "link": "/reference/pill_development_host/analytics/struct.ReportColumn"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "EventKind",
                    "link": "/reference/pill_development_host/analytics/enum.EventKind"
                  },
                  {
                    "text": "ModuleKind",
                    "link": "/reference/pill_development_host/analytics/enum.ModuleKind"
                  },
                  {
                    "text": "PatchRoute",
                    "link": "/reference/pill_development_host/analytics/enum.PatchRoute"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "analytics",
                    "link": "/reference/pill_development_host/analytics/fn.analytics"
                  },
                  {
                    "text": "cargo_fingerprint_directory",
                    "link": "/reference/pill_development_host/analytics/fn.cargo_fingerprint_directory"
                  },
                  {
                    "text": "cargo_timings_directory",
                    "link": "/reference/pill_development_host/analytics/fn.cargo_timings_directory"
                  },
                  {
                    "text": "drain_reload_events",
                    "link": "/reference/pill_development_host/analytics/fn.drain_reload_events"
                  },
                  {
                    "text": "find_or_create",
                    "link": "/reference/pill_development_host/analytics/fn.find_or_create"
                  },
                  {
                    "text": "format_bytes",
                    "link": "/reference/pill_development_host/analytics/fn.format_bytes"
                  },
                  {
                    "text": "format_ms",
                    "link": "/reference/pill_development_host/analytics/fn.format_ms"
                  },
                  {
                    "text": "inspect_pe",
                    "link": "/reference/pill_development_host/analytics/fn.inspect_pe"
                  },
                  {
                    "text": "linked_libraries",
                    "link": "/reference/pill_development_host/analytics/fn.linked_libraries"
                  },
                  {
                    "text": "module_build_ms",
                    "link": "/reference/pill_development_host/analytics/fn.module_build_ms"
                  },
                  {
                    "text": "parse_latest_cargo_timings",
                    "link": "/reference/pill_development_host/analytics/fn.parse_latest_cargo_timings"
                  },
                  {
                    "text": "patch_tally_lines",
                    "link": "/reference/pill_development_host/analytics/fn.patch_tally_lines"
                  },
                  {
                    "text": "print_reload_events",
                    "link": "/reference/pill_development_host/analytics/fn.print_reload_events"
                  },
                  {
                    "text": "print_startup_report",
                    "link": "/reference/pill_development_host/analytics/fn.print_startup_report"
                  },
                  {
                    "text": "process_memory",
                    "link": "/reference/pill_development_host/analytics/fn.process_memory"
                  },
                  {
                    "text": "read_cargo_deps",
                    "link": "/reference/pill_development_host/analytics/fn.read_cargo_deps"
                  },
                  {
                    "text": "record_build_command",
                    "link": "/reference/pill_development_host/analytics/fn.record_build_command"
                  },
                  {
                    "text": "record_host_memory",
                    "link": "/reference/pill_development_host/analytics/fn.record_host_memory"
                  },
                  {
                    "text": "record_init",
                    "link": "/reference/pill_development_host/analytics/fn.record_init"
                  },
                  {
                    "text": "record_load",
                    "link": "/reference/pill_development_host/analytics/fn.record_load"
                  },
                  {
                    "text": "record_migrate",
                    "link": "/reference/pill_development_host/analytics/fn.record_migrate"
                  },
                  {
                    "text": "record_module_artifact",
                    "link": "/reference/pill_development_host/analytics/fn.record_module_artifact"
                  },
                  {
                    "text": "record_patch",
                    "link": "/reference/pill_development_host/analytics/fn.record_patch"
                  },
                  {
                    "text": "record_patch_failure",
                    "link": "/reference/pill_development_host/analytics/fn.record_patch_failure"
                  },
                  {
                    "text": "record_patch_refusal",
                    "link": "/reference/pill_development_host/analytics/fn.record_patch_refusal"
                  },
                  {
                    "text": "record_reload",
                    "link": "/reference/pill_development_host/analytics/fn.record_reload"
                  },
                  {
                    "text": "remember_fallback",
                    "link": "/reference/pill_development_host/analytics/fn.remember_fallback"
                  },
                  {
                    "text": "render_startup_report",
                    "link": "/reference/pill_development_host/analytics/fn.render_startup_report"
                  },
                  {
                    "text": "wrap_list",
                    "link": "/reference/pill_development_host/analytics/fn.wrap_list"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MAX_FALLBACK_DETAIL_CHARS",
                    "link": "/reference/pill_development_host/analytics/constant.MAX_FALLBACK_DETAIL_CHARS"
                  },
                  {
                    "text": "MAX_TRACKED_FALLBACK_REASONS",
                    "link": "/reference/pill_development_host/analytics/constant.MAX_TRACKED_FALLBACK_REASONS"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_browser",
            "link": "/reference/pill_development_host/asset_browser/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetEntry",
                    "link": "/reference/pill_development_host/asset_browser/struct.AssetEntry"
                  },
                  {
                    "text": "StandaloneType",
                    "link": "/reference/pill_development_host/asset_browser/struct.StandaloneType"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "append_root",
                    "link": "/reference/pill_development_host/asset_browser/fn.append_root"
                  },
                  {
                    "text": "asset_settings",
                    "link": "/reference/pill_development_host/asset_browser/fn.asset_settings"
                  },
                  {
                    "text": "create_standalone_asset",
                    "link": "/reference/pill_development_host/asset_browser/fn.create_standalone_asset"
                  },
                  {
                    "text": "list_assets",
                    "link": "/reference/pill_development_host/asset_browser/fn.list_assets"
                  },
                  {
                    "text": "move_asset",
                    "link": "/reference/pill_development_host/asset_browser/fn.move_asset"
                  },
                  {
                    "text": "read_guid",
                    "link": "/reference/pill_development_host/asset_browser/fn.read_guid"
                  },
                  {
                    "text": "replace_atomically",
                    "link": "/reference/pill_development_host/asset_browser/fn.replace_atomically"
                  },
                  {
                    "text": "save_asset_settings",
                    "link": "/reference/pill_development_host/asset_browser/fn.save_asset_settings"
                  },
                  {
                    "text": "slash_path",
                    "link": "/reference/pill_development_host/asset_browser/fn.slash_path"
                  },
                  {
                    "text": "standalone_types",
                    "link": "/reference/pill_development_host/asset_browser/fn.standalone_types"
                  },
                  {
                    "text": "visit",
                    "link": "/reference/pill_development_host/asset_browser/fn.visit"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "METADATA_SUFFIX",
                    "link": "/reference/pill_development_host/asset_browser/constant.METADATA_SUFFIX"
                  }
                ]
              }
            ]
          },
          {
            "text": "build_progress",
            "link": "/reference/pill_development_host/build_progress/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "BuildPlan",
                    "link": "/reference/pill_development_host/build_progress/struct.BuildPlan"
                  },
                  {
                    "text": "PlannedBuild",
                    "link": "/reference/pill_development_host/build_progress/struct.PlannedBuild"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "announce_build",
                    "link": "/reference/pill_development_host/build_progress/fn.announce_build"
                  },
                  {
                    "text": "announce_plan",
                    "link": "/reference/pill_development_host/build_progress/fn.announce_plan"
                  },
                  {
                    "text": "render_plan",
                    "link": "/reference/pill_development_host/build_progress/fn.render_plan"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "STARTUP_BUILD_PLAN",
                    "link": "/reference/pill_development_host/build_progress/static.STARTUP_BUILD_PLAN"
                  }
                ]
              }
            ]
          },
          {
            "text": "build_runner",
            "link": "/reference/pill_development_host/build_runner/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "BatchValidation",
                    "link": "/reference/pill_development_host/build_runner/struct.BatchValidation"
                  },
                  {
                    "text": "BuildProcessTree",
                    "link": "/reference/pill_development_host/build_runner/struct.BuildProcessTree"
                  },
                  {
                    "text": "JobObjectBasicAccountingInformation",
                    "link": "/reference/pill_development_host/build_runner/struct.JobObjectBasicAccountingInformation"
                  },
                  {
                    "text": "JobObjectBasicLimitInformation",
                    "link": "/reference/pill_development_host/build_runner/struct.JobObjectBasicLimitInformation"
                  },
                  {
                    "text": "JobObjectExtendedLimitInformation",
                    "link": "/reference/pill_development_host/build_runner/struct.JobObjectExtendedLimitInformation"
                  },
                  {
                    "text": "VerboseCapture",
                    "link": "/reference/pill_development_host/build_runner/struct.VerboseCapture"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_cargo_host_overrides",
                    "link": "/reference/pill_development_host/build_runner/fn.apply_cargo_host_overrides"
                  },
                  {
                    "text": "artifact_stamp",
                    "link": "/reference/pill_development_host/build_runner/fn.artifact_stamp"
                  },
                  {
                    "text": "artifact_stamp_path",
                    "link": "/reference/pill_development_host/build_runner/fn.artifact_stamp_path"
                  },
                  {
                    "text": "artifacts_are_host_built",
                    "link": "/reference/pill_development_host/build_runner/fn.artifacts_are_host_built"
                  },
                  {
                    "text": "AssignProcessToJobObject",
                    "link": "/reference/pill_development_host/build_runner/fn.AssignProcessToJobObject"
                  },
                  {
                    "text": "begin_build_output",
                    "link": "/reference/pill_development_host/build_runner/fn.begin_build_output"
                  },
                  {
                    "text": "build_csharp_compiler",
                    "link": "/reference/pill_development_host/build_runner/fn.build_csharp_compiler"
                  },
                  {
                    "text": "build_extension",
                    "link": "/reference/pill_development_host/build_runner/fn.build_extension"
                  },
                  {
                    "text": "build_extension_batch",
                    "link": "/reference/pill_development_host/build_runner/fn.build_extension_batch"
                  },
                  {
                    "text": "build_project_module",
                    "link": "/reference/pill_development_host/build_runner/fn.build_project_module"
                  },
                  {
                    "text": "cargo_module_output_subdirectory",
                    "link": "/reference/pill_development_host/build_runner/fn.cargo_module_output_subdirectory"
                  },
                  {
                    "text": "CloseHandle",
                    "link": "/reference/pill_development_host/build_runner/fn.CloseHandle"
                  },
                  {
                    "text": "collect_member_manifests",
                    "link": "/reference/pill_development_host/build_runner/fn.collect_member_manifests"
                  },
                  {
                    "text": "confirm_staged_artifacts",
                    "link": "/reference/pill_development_host/build_runner/fn.confirm_staged_artifacts"
                  },
                  {
                    "text": "create_process_tree",
                    "link": "/reference/pill_development_host/build_runner/fn.create_process_tree"
                  },
                  {
                    "text": "CreateJobObjectW",
                    "link": "/reference/pill_development_host/build_runner/fn.CreateJobObjectW"
                  },
                  {
                    "text": "current_build_info",
                    "link": "/reference/pill_development_host/build_runner/fn.current_build_info"
                  },
                  {
                    "text": "declared_features",
                    "link": "/reference/pill_development_host/build_runner/fn.declared_features"
                  },
                  {
                    "text": "forget_batch_validation",
                    "link": "/reference/pill_development_host/build_runner/fn.forget_batch_validation"
                  },
                  {
                    "text": "host_anchor_package",
                    "link": "/reference/pill_development_host/build_runner/fn.host_anchor_package"
                  },
                  {
                    "text": "host_build_identity",
                    "link": "/reference/pill_development_host/build_runner/fn.host_build_identity"
                  },
                  {
                    "text": "host_engine_features",
                    "link": "/reference/pill_development_host/build_runner/fn.host_engine_features"
                  },
                  {
                    "text": "host_posture_features",
                    "link": "/reference/pill_development_host/build_runner/fn.host_posture_features"
                  },
                  {
                    "text": "is_editor_anchor",
                    "link": "/reference/pill_development_host/build_runner/fn.is_editor_anchor"
                  },
                  {
                    "text": "is_generated_member_rlib",
                    "link": "/reference/pill_development_host/build_runner/fn.is_generated_member_rlib"
                  },
                  {
                    "text": "is_shared_slot_rlib",
                    "link": "/reference/pill_development_host/build_runner/fn.is_shared_slot_rlib"
                  },
                  {
                    "text": "is_verbose_only_line",
                    "link": "/reference/pill_development_host/build_runner/fn.is_verbose_only_line"
                  },
                  {
                    "text": "join_process_tree",
                    "link": "/reference/pill_development_host/build_runner/fn.join_process_tree"
                  },
                  {
                    "text": "native_library_filename",
                    "link": "/reference/pill_development_host/build_runner/fn.native_library_filename"
                  },
                  {
                    "text": "newest_extension_rlib",
                    "link": "/reference/pill_development_host/build_runner/fn.newest_extension_rlib"
                  },
                  {
                    "text": "OpenProcess",
                    "link": "/reference/pill_development_host/build_runner/fn.OpenProcess"
                  },
                  {
                    "text": "push_build_output",
                    "link": "/reference/pill_development_host/build_runner/fn.push_build_output"
                  },
                  {
                    "text": "QueryInformationJobObject",
                    "link": "/reference/pill_development_host/build_runner/fn.QueryInformationJobObject"
                  },
                  {
                    "text": "read_declared_features",
                    "link": "/reference/pill_development_host/build_runner/fn.read_declared_features"
                  },
                  {
                    "text": "recent_build_output",
                    "link": "/reference/pill_development_host/build_runner/fn.recent_build_output"
                  },
                  {
                    "text": "record_artifact_stamp",
                    "link": "/reference/pill_development_host/build_runner/fn.record_artifact_stamp"
                  },
                  {
                    "text": "run_build_command",
                    "link": "/reference/pill_development_host/build_runner/fn.run_build_command"
                  },
                  {
                    "text": "SetInformationJobObject",
                    "link": "/reference/pill_development_host/build_runner/fn.SetInformationJobObject"
                  },
                  {
                    "text": "source_newer_than",
                    "link": "/reference/pill_development_host/build_runner/fn.source_newer_than"
                  },
                  {
                    "text": "stage_artifact",
                    "link": "/reference/pill_development_host/build_runner/fn.stage_artifact"
                  },
                  {
                    "text": "stage_build_outputs",
                    "link": "/reference/pill_development_host/build_runner/fn.stage_build_outputs"
                  },
                  {
                    "text": "stage_engine_dylib",
                    "link": "/reference/pill_development_host/build_runner/fn.stage_engine_dylib"
                  },
                  {
                    "text": "stage_shared_dependency_rlibs",
                    "link": "/reference/pill_development_host/build_runner/fn.stage_shared_dependency_rlibs"
                  },
                  {
                    "text": "staged_copy_is_current",
                    "link": "/reference/pill_development_host/build_runner/fn.staged_copy_is_current"
                  },
                  {
                    "text": "stop_process_tree",
                    "link": "/reference/pill_development_host/build_runner/fn.stop_process_tree"
                  },
                  {
                    "text": "take_batch_validation",
                    "link": "/reference/pill_development_host/build_runner/fn.take_batch_validation"
                  },
                  {
                    "text": "tee_stderr",
                    "link": "/reference/pill_development_host/build_runner/fn.tee_stderr"
                  },
                  {
                    "text": "TerminateJobObject",
                    "link": "/reference/pill_development_host/build_runner/fn.TerminateJobObject"
                  },
                  {
                    "text": "with_batch_validation",
                    "link": "/reference/pill_development_host/build_runner/fn.with_batch_validation"
                  },
                  {
                    "text": "with_compiler_argument_capture",
                    "link": "/reference/pill_development_host/build_runner/fn.with_compiler_argument_capture"
                  },
                  {
                    "text": "without_ansi",
                    "link": "/reference/pill_development_host/build_runner/fn.without_ansi"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ARTIFACT_STAMP_DIRECTORY",
                    "link": "/reference/pill_development_host/build_runner/constant.ARTIFACT_STAMP_DIRECTORY"
                  },
                  {
                    "text": "BUILD_OUTPUT_LINES",
                    "link": "/reference/pill_development_host/build_runner/constant.BUILD_OUTPUT_LINES"
                  },
                  {
                    "text": "BUILD_TIMEOUT",
                    "link": "/reference/pill_development_host/build_runner/constant.BUILD_TIMEOUT"
                  },
                  {
                    "text": "HOST_MODULE_FEATURE_SET",
                    "link": "/reference/pill_development_host/build_runner/constant.HOST_MODULE_FEATURE_SET"
                  },
                  {
                    "text": "HOST_PROFILING_FEATURE_SET",
                    "link": "/reference/pill_development_host/build_runner/constant.HOST_PROFILING_FEATURE_SET"
                  },
                  {
                    "text": "JOB_OBJECT_BASIC_ACCOUNTING_INFORMATION",
                    "link": "/reference/pill_development_host/build_runner/constant.JOB_OBJECT_BASIC_ACCOUNTING_INFORMATION"
                  },
                  {
                    "text": "JOB_OBJECT_EXTENDED_LIMIT_INFORMATION",
                    "link": "/reference/pill_development_host/build_runner/constant.JOB_OBJECT_EXTENDED_LIMIT_INFORMATION"
                  },
                  {
                    "text": "JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE",
                    "link": "/reference/pill_development_host/build_runner/constant.JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE"
                  },
                  {
                    "text": "MEMBER_SEARCH_DEPTH",
                    "link": "/reference/pill_development_host/build_runner/constant.MEMBER_SEARCH_DEPTH"
                  },
                  {
                    "text": "PROJECT_HOT_OUTPUT_SUBDIRECTORY",
                    "link": "/reference/pill_development_host/build_runner/constant.PROJECT_HOT_OUTPUT_SUBDIRECTORY"
                  },
                  {
                    "text": "STAGED_DEPENDENCY_SUBDIRECTORY",
                    "link": "/reference/pill_development_host/build_runner/constant.STAGED_DEPENDENCY_SUBDIRECTORY"
                  },
                  {
                    "text": "STARTUP_BATCH_TIMEOUT",
                    "link": "/reference/pill_development_host/build_runner/constant.STARTUP_BATCH_TIMEOUT"
                  },
                  {
                    "text": "TREE_DRAIN_TIMEOUT",
                    "link": "/reference/pill_development_host/build_runner/constant.TREE_DRAIN_TIMEOUT"
                  },
                  {
                    "text": "WATCHDOG_POLL_INTERVAL",
                    "link": "/reference/pill_development_host/build_runner/constant.WATCHDOG_POLL_INTERVAL"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "BATCH_VALIDATION",
                    "link": "/reference/pill_development_host/build_runner/static.BATCH_VALIDATION"
                  },
                  {
                    "text": "BUILD_OUTPUT",
                    "link": "/reference/pill_development_host/build_runner/static.BUILD_OUTPUT"
                  }
                ]
              }
            ]
          },
          {
            "text": "config",
            "link": "/reference/pill_development_host/config/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EditorSettings",
                    "link": "/reference/pill_development_host/config/struct.EditorSettings"
                  },
                  {
                    "text": "EditorSettingsFile",
                    "link": "/reference/pill_development_host/config/struct.EditorSettingsFile"
                  },
                  {
                    "text": "ExtensionConfig",
                    "link": "/reference/pill_development_host/config/struct.ExtensionConfig"
                  },
                  {
                    "text": "HostConfig",
                    "link": "/reference/pill_development_host/config/struct.HostConfig"
                  },
                  {
                    "text": "ProjectAssetSettings",
                    "link": "/reference/pill_development_host/config/struct.ProjectAssetSettings"
                  },
                  {
                    "text": "ProjectLoggingSettings",
                    "link": "/reference/pill_development_host/config/struct.ProjectLoggingSettings"
                  },
                  {
                    "text": "ProjectModuleConfig",
                    "link": "/reference/pill_development_host/config/struct.ProjectModuleConfig"
                  },
                  {
                    "text": "ProjectSettingsFile",
                    "link": "/reference/pill_development_host/config/struct.ProjectSettingsFile"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ProjectModuleBackend",
                    "link": "/reference/pill_development_host/config/enum.ProjectModuleBackend"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "absolute_manifest_path",
                    "link": "/reference/pill_development_host/config/fn.absolute_manifest_path"
                  },
                  {
                    "text": "canonicalize_plain",
                    "link": "/reference/pill_development_host/config/fn.canonicalize_plain"
                  },
                  {
                    "text": "cargo_timings_enabled",
                    "link": "/reference/pill_development_host/config/fn.cargo_timings_enabled"
                  },
                  {
                    "text": "csharp_build_configuration",
                    "link": "/reference/pill_development_host/config/fn.csharp_build_configuration"
                  },
                  {
                    "text": "declares_dependency",
                    "link": "/reference/pill_development_host/config/fn.declares_dependency"
                  },
                  {
                    "text": "dioxus_executable_path",
                    "link": "/reference/pill_development_host/config/fn.dioxus_executable_path"
                  },
                  {
                    "text": "dioxus_wrapper_args_directory",
                    "link": "/reference/pill_development_host/config/fn.dioxus_wrapper_args_directory"
                  },
                  {
                    "text": "engine_workspace_root",
                    "link": "/reference/pill_development_host/config/fn.engine_workspace_root"
                  },
                  {
                    "text": "extension_crate_directory",
                    "link": "/reference/pill_development_host/config/fn.extension_crate_directory"
                  },
                  {
                    "text": "find_csproj_manifest",
                    "link": "/reference/pill_development_host/config/fn.find_csproj_manifest"
                  },
                  {
                    "text": "for_each_dependency_table_mut",
                    "link": "/reference/pill_development_host/config/fn.for_each_dependency_table_mut"
                  },
                  {
                    "text": "host_cargo_command",
                    "link": "/reference/pill_development_host/config/fn.host_cargo_command"
                  },
                  {
                    "text": "host_profile_name",
                    "link": "/reference/pill_development_host/config/fn.host_profile_name"
                  },
                  {
                    "text": "host_target_directory",
                    "link": "/reference/pill_development_host/config/fn.host_target_directory"
                  },
                  {
                    "text": "host_target_triple",
                    "link": "/reference/pill_development_host/config/fn.host_target_triple"
                  },
                  {
                    "text": "is_valid_build_binary_name",
                    "link": "/reference/pill_development_host/config/fn.is_valid_build_binary_name"
                  },
                  {
                    "text": "is_valid_module_directory_name",
                    "link": "/reference/pill_development_host/config/fn.is_valid_module_directory_name"
                  },
                  {
                    "text": "linking_dependency_tables",
                    "link": "/reference/pill_development_host/config/fn.linking_dependency_tables"
                  },
                  {
                    "text": "locate_extension_folder",
                    "link": "/reference/pill_development_host/config/fn.locate_extension_folder"
                  },
                  {
                    "text": "manifest_depends_on_crate",
                    "link": "/reference/pill_development_host/config/fn.manifest_depends_on_crate"
                  },
                  {
                    "text": "manifest_string_value",
                    "link": "/reference/pill_development_host/config/fn.manifest_string_value"
                  },
                  {
                    "text": "materialize_host_module_wrapper",
                    "link": "/reference/pill_development_host/config/fn.materialize_host_module_wrapper"
                  },
                  {
                    "text": "materialize_host_project_member",
                    "link": "/reference/pill_development_host/config/fn.materialize_host_project_member"
                  },
                  {
                    "text": "module_build_artifact_directory",
                    "link": "/reference/pill_development_host/config/fn.module_build_artifact_directory"
                  },
                  {
                    "text": "profile_name_for_directory",
                    "link": "/reference/pill_development_host/config/fn.profile_name_for_directory"
                  },
                  {
                    "text": "profile_uses_lto",
                    "link": "/reference/pill_development_host/config/fn.profile_uses_lto"
                  },
                  {
                    "text": "project_depends_on_crate",
                    "link": "/reference/pill_development_host/config/fn.project_depends_on_crate"
                  },
                  {
                    "text": "prune_stale_host_module_wrappers",
                    "link": "/reference/pill_development_host/config/fn.prune_stale_host_module_wrappers"
                  },
                  {
                    "text": "prune_stale_host_project_members",
                    "link": "/reference/pill_development_host/config/fn.prune_stale_host_project_members"
                  },
                  {
                    "text": "read_editor_settings",
                    "link": "/reference/pill_development_host/config/fn.read_editor_settings"
                  },
                  {
                    "text": "read_project_settings_file",
                    "link": "/reference/pill_development_host/config/fn.read_project_settings_file"
                  },
                  {
                    "text": "render_manifest_path",
                    "link": "/reference/pill_development_host/config/fn.render_manifest_path"
                  },
                  {
                    "text": "required_environment",
                    "link": "/reference/pill_development_host/config/fn.required_environment"
                  },
                  {
                    "text": "resolve_dependency_path",
                    "link": "/reference/pill_development_host/config/fn.resolve_dependency_path"
                  },
                  {
                    "text": "resolve_editor_theme",
                    "link": "/reference/pill_development_host/config/fn.resolve_editor_theme"
                  },
                  {
                    "text": "running_under_dioxus_cli",
                    "link": "/reference/pill_development_host/config/fn.running_under_dioxus_cli"
                  },
                  {
                    "text": "spawned_build_environment",
                    "link": "/reference/pill_development_host/config/fn.spawned_build_environment"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CARGO_TIMINGS_ENVIRONMENT_VARIABLE",
                    "link": "/reference/pill_development_host/config/constant.CARGO_TIMINGS_ENVIRONMENT_VARIABLE"
                  },
                  {
                    "text": "CSHARP_COMPILER_ARGUMENTS_FILE",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_COMPILER_ARGUMENTS_FILE"
                  },
                  {
                    "text": "CSHARP_COMPILER_ARGUMENTS_TARGETS",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_COMPILER_ARGUMENTS_TARGETS"
                  },
                  {
                    "text": "CSHARP_COMPILER_ASSEMBLY_NAME",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_COMPILER_ASSEMBLY_NAME"
                  },
                  {
                    "text": "CSHARP_COMPILER_MANIFEST",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_COMPILER_MANIFEST"
                  },
                  {
                    "text": "CSHARP_COMPILER_OUTPUT_SUBDIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_COMPILER_OUTPUT_SUBDIRECTORY"
                  },
                  {
                    "text": "CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE"
                  },
                  {
                    "text": "CSHARP_CONFIGURATIONS",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_CONFIGURATIONS"
                  },
                  {
                    "text": "CSHARP_RUNTIME_ASSEMBLY_NAME",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_RUNTIME_ASSEMBLY_NAME"
                  },
                  {
                    "text": "CSHARP_RUNTIME_PROJECT_SUBDIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_RUNTIME_PROJECT_SUBDIRECTORY"
                  },
                  {
                    "text": "CSHARP_TARGET_FRAMEWORK",
                    "link": "/reference/pill_development_host/config/constant.CSHARP_TARGET_FRAMEWORK"
                  },
                  {
                    "text": "DEFAULT_EDITOR_FRONTEND",
                    "link": "/reference/pill_development_host/config/constant.DEFAULT_EDITOR_FRONTEND"
                  },
                  {
                    "text": "DEFAULT_EDITOR_THEME",
                    "link": "/reference/pill_development_host/config/constant.DEFAULT_EDITOR_THEME"
                  },
                  {
                    "text": "DEFAULT_RENDERER",
                    "link": "/reference/pill_development_host/config/constant.DEFAULT_RENDERER"
                  },
                  {
                    "text": "DIOXUS_CLI_ENABLED_ENVIRONMENT",
                    "link": "/reference/pill_development_host/config/constant.DIOXUS_CLI_ENABLED_ENVIRONMENT"
                  },
                  {
                    "text": "DX_RUSTC_WRAPPER_ENVIRONMENT",
                    "link": "/reference/pill_development_host/config/constant.DX_RUSTC_WRAPPER_ENVIRONMENT"
                  },
                  {
                    "text": "EDITOR_CRATE_SUFFIX",
                    "link": "/reference/pill_development_host/config/constant.EDITOR_CRATE_SUFFIX"
                  },
                  {
                    "text": "EDITOR_SETTINGS_FILE",
                    "link": "/reference/pill_development_host/config/constant.EDITOR_SETTINGS_FILE"
                  },
                  {
                    "text": "EXTENSION_DIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.EXTENSION_DIRECTORY"
                  },
                  {
                    "text": "GENERATED_DIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.GENERATED_DIRECTORY"
                  },
                  {
                    "text": "HOST_MODULE_MEMBER_PREFIX",
                    "link": "/reference/pill_development_host/config/constant.HOST_MODULE_MEMBER_PREFIX"
                  },
                  {
                    "text": "HOST_PROFILE_DIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.HOST_PROFILE_DIRECTORY"
                  },
                  {
                    "text": "HOST_PROJECT_MEMBER_PREFIX",
                    "link": "/reference/pill_development_host/config/constant.HOST_PROJECT_MEMBER_PREFIX"
                  },
                  {
                    "text": "HOST_TARGET_TRIPLE",
                    "link": "/reference/pill_development_host/config/constant.HOST_TARGET_TRIPLE"
                  },
                  {
                    "text": "LINKING_DEPENDENCY_TABLES",
                    "link": "/reference/pill_development_host/config/constant.LINKING_DEPENDENCY_TABLES"
                  },
                  {
                    "text": "MODULE_BUILD_TARGET_DIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.MODULE_BUILD_TARGET_DIRECTORY"
                  },
                  {
                    "text": "NO_RENDERER",
                    "link": "/reference/pill_development_host/config/constant.NO_RENDERER"
                  },
                  {
                    "text": "PROJECT_ASSET_DIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.PROJECT_ASSET_DIRECTORY"
                  },
                  {
                    "text": "PROJECT_MEMBER_DIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.PROJECT_MEMBER_DIRECTORY"
                  },
                  {
                    "text": "PROJECT_PATH_ENVIRONMENT_VARIABLE",
                    "link": "/reference/pill_development_host/config/constant.PROJECT_PATH_ENVIRONMENT_VARIABLE"
                  },
                  {
                    "text": "PROJECT_SETTINGS_FILE",
                    "link": "/reference/pill_development_host/config/constant.PROJECT_SETTINGS_FILE"
                  },
                  {
                    "text": "RENDERER_DATA_SUFFIX",
                    "link": "/reference/pill_development_host/config/constant.RENDERER_DATA_SUFFIX"
                  },
                  {
                    "text": "RENDERER_SHADER_SOURCES_DIRECTORY",
                    "link": "/reference/pill_development_host/config/constant.RENDERER_SHADER_SOURCES_DIRECTORY"
                  },
                  {
                    "text": "RETIRED_EDITOR_FRONTEND",
                    "link": "/reference/pill_development_host/config/constant.RETIRED_EDITOR_FRONTEND"
                  },
                  {
                    "text": "RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT",
                    "link": "/reference/pill_development_host/config/constant.RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT"
                  }
                ]
              }
            ]
          },
          {
            "text": "csharp",
            "link": "/reference/pill_development_host/csharp/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "codegen",
                    "link": "/reference/pill_development_host/csharp/codegen/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "EmittedStruct",
                            "link": "/reference/pill_development_host/csharp/codegen/struct.EmittedStruct"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "alignment_primitive",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.alignment_primitive"
                          },
                          {
                            "text": "cs_primitive",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.cs_primitive"
                          },
                          {
                            "text": "csharp_parameter_name",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.csharp_parameter_name"
                          },
                          {
                            "text": "default_value_namespace",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.default_value_namespace"
                          },
                          {
                            "text": "emit_blob_component",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.emit_blob_component"
                          },
                          {
                            "text": "emit_heap_field_accessors",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.emit_heap_field_accessors"
                          },
                          {
                            "text": "emit_nested_struct",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.emit_nested_struct"
                          },
                          {
                            "text": "emit_opaque_struct",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.emit_opaque_struct"
                          },
                          {
                            "text": "emit_typed_struct",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.emit_typed_struct"
                          },
                          {
                            "text": "emit_value_type_methods",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.emit_value_type_methods"
                          },
                          {
                            "text": "generate_components_csharp",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.generate_components_csharp"
                          },
                          {
                            "text": "generate_module_components_csharp",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.generate_module_components_csharp"
                          },
                          {
                            "text": "last_path_segment",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.last_path_segment"
                          },
                          {
                            "text": "opaque_namespaces",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.opaque_namespaces"
                          },
                          {
                            "text": "path_namespace",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.path_namespace"
                          },
                          {
                            "text": "resolve_span_element_type",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.resolve_span_element_type"
                          },
                          {
                            "text": "snake_to_camel",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.snake_to_camel"
                          },
                          {
                            "text": "split_csharp_name",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.split_csharp_name"
                          },
                          {
                            "text": "value_type_namespaces",
                            "link": "/reference/pill_development_host/csharp/codegen/fn.value_type_namespaces"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CSHARP_RESERVED_KEYWORDS",
                            "link": "/reference/pill_development_host/csharp/codegen/constant.CSHARP_RESERVED_KEYWORDS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "fast_compile",
                    "link": "/reference/pill_development_host/csharp/fast_compile/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "FastCompiler",
                            "link": "/reference/pill_development_host/csharp/fast_compile/struct.FastCompiler"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "FastCompileOutcome",
                            "link": "/reference/pill_development_host/csharp/fast_compile/enum.FastCompileOutcome"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "collect_csharp_sources",
                            "link": "/reference/pill_development_host/csharp/fast_compile/fn.collect_csharp_sources"
                          },
                          {
                            "text": "compiler_arguments_file",
                            "link": "/reference/pill_development_host/csharp/fast_compile/fn.compiler_arguments_file"
                          },
                          {
                            "text": "encode_path",
                            "link": "/reference/pill_development_host/csharp/fast_compile/fn.encode_path"
                          },
                          {
                            "text": "sources_changed_since_capture",
                            "link": "/reference/pill_development_host/csharp/fast_compile/fn.sources_changed_since_capture"
                          }
                        ]
                      },
                      {
                        "text": "Type aliases",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CompileFn",
                            "link": "/reference/pill_development_host/csharp/fast_compile/type.CompileFn"
                          },
                          {
                            "text": "CompilerAbiVersionFn",
                            "link": "/reference/pill_development_host/csharp/fast_compile/type.CompilerAbiVersionFn"
                          },
                          {
                            "text": "CopyDiagnosticsFn",
                            "link": "/reference/pill_development_host/csharp/fast_compile/type.CopyDiagnosticsFn"
                          },
                          {
                            "text": "DiagnosticsLengthFn",
                            "link": "/reference/pill_development_host/csharp/fast_compile/type.DiagnosticsLengthFn"
                          },
                          {
                            "text": "WarmupFn",
                            "link": "/reference/pill_development_host/csharp/fast_compile/type.WarmupFn"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "COMPILE_STATUS_COMPILED",
                            "link": "/reference/pill_development_host/csharp/fast_compile/constant.COMPILE_STATUS_COMPILED"
                          },
                          {
                            "text": "COMPILE_STATUS_FAILED",
                            "link": "/reference/pill_development_host/csharp/fast_compile/constant.COMPILE_STATUS_FAILED"
                          },
                          {
                            "text": "COMPILER_ABI_VERSION",
                            "link": "/reference/pill_development_host/csharp/fast_compile/constant.COMPILER_ABI_VERSION"
                          },
                          {
                            "text": "COMPILER_INTEROP_TYPE",
                            "link": "/reference/pill_development_host/csharp/fast_compile/constant.COMPILER_INTEROP_TYPE"
                          },
                          {
                            "text": "MAX_DIAGNOSTICS_BYTES",
                            "link": "/reference/pill_development_host/csharp/fast_compile/constant.MAX_DIAGNOSTICS_BYTES"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "mirror_codegen",
                    "link": "/reference/pill_development_host/csharp/mirror_codegen/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CsArgument",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/struct.CsArgument"
                          },
                          {
                            "text": "CsResult",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/struct.CsResult"
                          },
                          {
                            "text": "DeclaredType",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/struct.DeclaredType"
                          },
                          {
                            "text": "MirrorScope",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/struct.MirrorScope"
                          },
                          {
                            "text": "MirrorType",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/struct.MirrorType"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "MemberHost",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/enum.MemberHost"
                          },
                          {
                            "text": "MirrorKind",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/enum.MirrorKind"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "array_type",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.array_type"
                          },
                          {
                            "text": "crate_namespace",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.crate_namespace"
                          },
                          {
                            "text": "emit_declared_type",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.emit_declared_type"
                          },
                          {
                            "text": "emit_free_function_class",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.emit_free_function_class"
                          },
                          {
                            "text": "emit_member",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.emit_member"
                          },
                          {
                            "text": "last_segment",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.last_segment"
                          },
                          {
                            "text": "lower_argument",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.lower_argument"
                          },
                          {
                            "text": "lower_result",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.lower_result"
                          },
                          {
                            "text": "members_of",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.members_of"
                          },
                          {
                            "text": "parameter_name",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.parameter_name"
                          },
                          {
                            "text": "primitive",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.primitive"
                          },
                          {
                            "text": "tuple_layout",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/fn.tuple_layout"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ASSET_MANAGER",
                            "link": "/reference/pill_development_host/csharp/mirror_codegen/constant.ASSET_MANAGER"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "BuildReport",
                    "link": "/reference/pill_development_host/csharp/struct.BuildReport"
                  },
                  {
                    "text": "CSharpProject",
                    "link": "/reference/pill_development_host/csharp/struct.CSharpProject"
                  },
                  {
                    "text": "InFlightAssemblyBuild",
                    "link": "/reference/pill_development_host/csharp/struct.InFlightAssemblyBuild"
                  },
                  {
                    "text": "ManagedReloadSummary",
                    "link": "/reference/pill_development_host/csharp/struct.ManagedReloadSummary"
                  },
                  {
                    "text": "ManagedReloadTiming",
                    "link": "/reference/pill_development_host/csharp/struct.ManagedReloadTiming"
                  },
                  {
                    "text": "RebuiltAssembly",
                    "link": "/reference/pill_development_host/csharp/struct.RebuiltAssembly"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "BuildCollection",
                    "link": "/reference/pill_development_host/csharp/enum.BuildCollection"
                  },
                  {
                    "text": "BuildOutcome",
                    "link": "/reference/pill_development_host/csharp/enum.BuildOutcome"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "milliseconds",
                    "link": "/reference/pill_development_host/csharp/fn.milliseconds"
                  }
                ]
              }
            ]
          },
          {
            "text": "extension",
            "link": "/reference/pill_development_host/extension/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "slot",
                    "link": "/reference/pill_development_host/extension/slot/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ExtensionSlot",
                            "link": "/reference/pill_development_host/extension/slot/struct.ExtensionSlot"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ReloadOutcome",
                            "link": "/reference/pill_development_host/extension/slot/enum.ReloadOutcome"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "hot_patch",
            "link": "/reference/pill_development_host/hot_patch/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "compile",
                    "link": "/reference/pill_development_host/hot_patch/compile/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CargoRustcLine",
                            "link": "/reference/pill_development_host/hot_patch/compile/struct.CargoRustcLine"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "compiler_token_index",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.compiler_token_index"
                          },
                          {
                            "text": "extract_backticked",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.extract_backticked"
                          },
                          {
                            "text": "flags_cache_path",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.flags_cache_path"
                          },
                          {
                            "text": "parse_rustc_line",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.parse_rustc_line"
                          },
                          {
                            "text": "patch_linker_value",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.patch_linker_value"
                          },
                          {
                            "text": "redirect_extern",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.redirect_extern"
                          },
                          {
                            "text": "tokenize",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.tokenize"
                          },
                          {
                            "text": "touch",
                            "link": "/reference/pill_development_host/hot_patch/compile/fn.touch"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CACHE_FORMAT_VERSION",
                            "link": "/reference/pill_development_host/hot_patch/compile/constant.CACHE_FORMAT_VERSION"
                          },
                          {
                            "text": "CAPTURE_POLL_INTERVAL",
                            "link": "/reference/pill_development_host/hot_patch/compile/constant.CAPTURE_POLL_INTERVAL"
                          },
                          {
                            "text": "CAPTURE_TIMEOUT",
                            "link": "/reference/pill_development_host/hot_patch/compile/constant.CAPTURE_TIMEOUT"
                          },
                          {
                            "text": "DROPPED_CODEGEN_VALUES",
                            "link": "/reference/pill_development_host/hot_patch/compile/constant.DROPPED_CODEGEN_VALUES"
                          },
                          {
                            "text": "DROPPED_FLAGS",
                            "link": "/reference/pill_development_host/hot_patch/compile/constant.DROPPED_FLAGS"
                          },
                          {
                            "text": "PATCH_LINKER",
                            "link": "/reference/pill_development_host/hot_patch/compile/constant.PATCH_LINKER"
                          },
                          {
                            "text": "TWO_TOKEN_FLAGS",
                            "link": "/reference/pill_development_host/hot_patch/compile/constant.TWO_TOKEN_FLAGS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "failure_code",
                    "link": "/reference/pill_development_host/hot_patch/failure_code/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "COMPILE",
                            "link": "/reference/pill_development_host/hot_patch/failure_code/constant.COMPILE"
                          },
                          {
                            "text": "GENERATE",
                            "link": "/reference/pill_development_host/hot_patch/failure_code/constant.GENERATE"
                          },
                          {
                            "text": "INSTALL",
                            "link": "/reference/pill_development_host/hot_patch/failure_code/constant.INSTALL"
                          },
                          {
                            "text": "LOAD",
                            "link": "/reference/pill_development_host/hot_patch/failure_code/constant.LOAD"
                          },
                          {
                            "text": "PREPARE",
                            "link": "/reference/pill_development_host/hot_patch/failure_code/constant.PREPARE"
                          },
                          {
                            "text": "RESOLVE",
                            "link": "/reference/pill_development_host/hot_patch/failure_code/constant.RESOLVE"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "generations",
                    "link": "/reference/pill_development_host/hot_patch/generations/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Generation",
                            "link": "/reference/pill_development_host/hot_patch/generations/struct.Generation"
                          },
                          {
                            "text": "PatchGeneration",
                            "link": "/reference/pill_development_host/hot_patch/generations/struct.PatchGeneration"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "imports",
                    "link": "/reference/pill_development_host/hot_patch/imports/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PatchScope",
                            "link": "/reference/pill_development_host/hot_patch/imports/struct.PatchScope"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "bound_names",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.bound_names"
                          },
                          {
                            "text": "closing_brace",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.closing_brace"
                          },
                          {
                            "text": "collect_bound_names",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.collect_bound_names"
                          },
                          {
                            "text": "declared_item_name",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.declared_item_name"
                          },
                          {
                            "text": "imports_a_glob",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.imports_a_glob"
                          },
                          {
                            "text": "is_identifier_character",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.is_identifier_character"
                          },
                          {
                            "text": "names_identifier",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.names_identifier"
                          },
                          {
                            "text": "public_item_names",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.public_item_names"
                          },
                          {
                            "text": "split_first_segment",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.split_first_segment"
                          },
                          {
                            "text": "split_top_level_items",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.split_top_level_items"
                          },
                          {
                            "text": "use_path",
                            "link": "/reference/pill_development_host/hot_patch/imports/fn.use_path"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "refusal_code",
                    "link": "/reference/pill_development_host/hot_patch/refusal_code/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ASSOCIATED_WITHOUT_RECEIVER",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.ASSOCIATED_WITHOUT_RECEIVER"
                          },
                          {
                            "text": "DUPLICATE_DECLARATION",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.DUPLICATE_DECLARATION"
                          },
                          {
                            "text": "EDITED_BEFORE_ARMING",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.EDITED_BEFORE_ARMING"
                          },
                          {
                            "text": "MULTIPLE_FILES",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.MULTIPLE_FILES"
                          },
                          {
                            "text": "NEW_SOURCE_FILE",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.NEW_SOURCE_FILE"
                          },
                          {
                            "text": "NO_HOT_FUNCTION",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.NO_HOT_FUNCTION"
                          },
                          {
                            "text": "OUTSIDE_HOT_BODY",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.OUTSIDE_HOT_BODY"
                          },
                          {
                            "text": "UNRESOLVED_RECEIVER",
                            "link": "/reference/pill_development_host/hot_patch/refusal_code/constant.UNRESOLVED_RECEIVER"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "routes",
                    "link": "/reference/pill_development_host/hot_patch/routes/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "LoadedPatch",
                            "link": "/reference/pill_development_host/hot_patch/routes/struct.LoadedPatch"
                          },
                          {
                            "text": "PrologueRestore",
                            "link": "/reference/pill_development_host/hot_patch/routes/struct.PrologueRestore"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PatchCopy",
                            "link": "/reference/pill_development_host/hot_patch/routes/enum.PatchCopy"
                          }
                        ]
                      },
                      {
                        "text": "Traits",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RedirectSlot",
                            "link": "/reference/pill_development_host/hot_patch/routes/trait.RedirectSlot"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "check_recorded_declaration",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.check_recorded_declaration"
                          },
                          {
                            "text": "every_loaded_copy",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.every_loaded_copy"
                          },
                          {
                            "text": "install_across",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.install_across"
                          },
                          {
                            "text": "install_everywhere",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.install_everywhere"
                          },
                          {
                            "text": "prologue_patch_everywhere",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.prologue_patch_everywhere"
                          },
                          {
                            "text": "report_reached_copies",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.report_reached_copies"
                          },
                          {
                            "text": "reset_everywhere",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.reset_everywhere"
                          },
                          {
                            "text": "resolve_in",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.resolve_in"
                          },
                          {
                            "text": "resolve_patch_address",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.resolve_patch_address"
                          },
                          {
                            "text": "resolve_plain_in",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.resolve_plain_in"
                          },
                          {
                            "text": "restore_previous_install",
                            "link": "/reference/pill_development_host/hot_patch/routes/fn.restore_previous_install"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PATCH_ADDRESS_EXPORT",
                            "link": "/reference/pill_development_host/hot_patch/routes/constant.PATCH_ADDRESS_EXPORT"
                          },
                          {
                            "text": "PATCH_ADDRESS_RESOLVER",
                            "link": "/reference/pill_development_host/hot_patch/routes/constant.PATCH_ADDRESS_RESOLVER"
                          },
                          {
                            "text": "PATCH_INSTALL_RESOLVER",
                            "link": "/reference/pill_development_host/hot_patch/routes/constant.PATCH_INSTALL_RESOLVER"
                          },
                          {
                            "text": "PATCH_RESET_RESOLVER",
                            "link": "/reference/pill_development_host/hot_patch/routes/constant.PATCH_RESET_RESOLVER"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "source",
                    "link": "/reference/pill_development_host/hot_patch/source/"
                  },
                  {
                    "text": "worker",
                    "link": "/reference/pill_development_host/hot_patch/worker/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "BuiltBody",
                            "link": "/reference/pill_development_host/hot_patch/worker/struct.BuiltBody"
                          },
                          {
                            "text": "PatchAttempt",
                            "link": "/reference/pill_development_host/hot_patch/worker/struct.PatchAttempt"
                          },
                          {
                            "text": "PreparedBody",
                            "link": "/reference/pill_development_host/hot_patch/worker/struct.PreparedBody"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "BodyOutcome",
                            "link": "/reference/pill_development_host/hot_patch/worker/enum.BodyOutcome"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "build_attempt",
                            "link": "/reference/pill_development_host/hot_patch/worker/fn.build_attempt"
                          },
                          {
                            "text": "build_body",
                            "link": "/reference/pill_development_host/hot_patch/worker/fn.build_body"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ApplyResult",
                    "link": "/reference/pill_development_host/hot_patch/struct.ApplyResult"
                  },
                  {
                    "text": "ClassifiedEdit",
                    "link": "/reference/pill_development_host/hot_patch/struct.ClassifiedEdit"
                  },
                  {
                    "text": "HotPatchSession",
                    "link": "/reference/pill_development_host/hot_patch/struct.HotPatchSession"
                  },
                  {
                    "text": "PatchRefusal",
                    "link": "/reference/pill_development_host/hot_patch/struct.PatchRefusal"
                  },
                  {
                    "text": "PatchStages",
                    "link": "/reference/pill_development_host/hot_patch/struct.PatchStages"
                  },
                  {
                    "text": "Snapshot",
                    "link": "/reference/pill_development_host/hot_patch/struct.Snapshot"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "BeginOutcome",
                    "link": "/reference/pill_development_host/hot_patch/enum.BeginOutcome"
                  },
                  {
                    "text": "PatchOutcome",
                    "link": "/reference/pill_development_host/hot_patch/enum.PatchOutcome"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "file_label",
                    "link": "/reference/pill_development_host/hot_patch/fn.file_label"
                  },
                  {
                    "text": "rust_sources",
                    "link": "/reference/pill_development_host/hot_patch/fn.rust_sources"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PATCH_NAME_PREFIX",
                    "link": "/reference/pill_development_host/hot_patch/constant.PATCH_NAME_PREFIX"
                  },
                  {
                    "text": "PATCH_PLAIN_EXPORT",
                    "link": "/reference/pill_development_host/hot_patch/constant.PATCH_PLAIN_EXPORT"
                  },
                  {
                    "text": "PATCH_RESOLVER_EXPORT",
                    "link": "/reference/pill_development_host/hot_patch/constant.PATCH_RESOLVER_EXPORT"
                  }
                ]
              }
            ]
          },
          {
            "text": "layout_record",
            "link": "/reference/pill_development_host/layout_record/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "DependencyVersion",
                    "link": "/reference/pill_development_host/layout_record/struct.DependencyVersion"
                  },
                  {
                    "text": "LayoutChange",
                    "link": "/reference/pill_development_host/layout_record/struct.LayoutChange"
                  },
                  {
                    "text": "LayoutRecord",
                    "link": "/reference/pill_development_host/layout_record/struct.LayoutRecord"
                  },
                  {
                    "text": "LayoutRecordTarget",
                    "link": "/reference/pill_development_host/layout_record/struct.LayoutRecordTarget"
                  },
                  {
                    "text": "LockfileVersions",
                    "link": "/reference/pill_development_host/layout_record/struct.LockfileVersions"
                  },
                  {
                    "text": "ResourceLayoutRecord",
                    "link": "/reference/pill_development_host/layout_record/struct.ResourceLayoutRecord"
                  },
                  {
                    "text": "SourceDigest",
                    "link": "/reference/pill_development_host/layout_record/struct.SourceDigest"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "changed_dependency_names",
                    "link": "/reference/pill_development_host/layout_record/fn.changed_dependency_names"
                  },
                  {
                    "text": "changed_layouts",
                    "link": "/reference/pill_development_host/layout_record/fn.changed_layouts"
                  },
                  {
                    "text": "changed_source_paths",
                    "link": "/reference/pill_development_host/layout_record/fn.changed_source_paths"
                  },
                  {
                    "text": "fnv1a",
                    "link": "/reference/pill_development_host/layout_record/fn.fnv1a"
                  },
                  {
                    "text": "fold_layout",
                    "link": "/reference/pill_development_host/layout_record/fn.fold_layout"
                  },
                  {
                    "text": "hash_source_file",
                    "link": "/reference/pill_development_host/layout_record/fn.hash_source_file"
                  },
                  {
                    "text": "measure_layout",
                    "link": "/reference/pill_development_host/layout_record/fn.measure_layout"
                  },
                  {
                    "text": "read_record",
                    "link": "/reference/pill_development_host/layout_record/fn.read_record"
                  },
                  {
                    "text": "write_record",
                    "link": "/reference/pill_development_host/layout_record/fn.write_record"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "FNV_OFFSET_BASIS",
                    "link": "/reference/pill_development_host/layout_record/constant.FNV_OFFSET_BASIS"
                  },
                  {
                    "text": "FNV_PRIME",
                    "link": "/reference/pill_development_host/layout_record/constant.FNV_PRIME"
                  },
                  {
                    "text": "LAYOUT_RECORD_DIRECTORY",
                    "link": "/reference/pill_development_host/layout_record/constant.LAYOUT_RECORD_DIRECTORY"
                  },
                  {
                    "text": "LAYOUT_RECORD_VERSION",
                    "link": "/reference/pill_development_host/layout_record/constant.LAYOUT_RECORD_VERSION"
                  },
                  {
                    "text": "MISSING_SOURCE_HASH",
                    "link": "/reference/pill_development_host/layout_record/constant.MISSING_SOURCE_HASH"
                  }
                ]
              }
            ]
          },
          {
            "text": "native_library",
            "link": "/reference/pill_development_host/native_library/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "NativeLibrary",
                    "link": "/reference/pill_development_host/native_library/struct.NativeLibrary"
                  },
                  {
                    "text": "TemporaryCopy",
                    "link": "/reference/pill_development_host/native_library/struct.TemporaryCopy"
                  },
                  {
                    "text": "UnresolvedImport",
                    "link": "/reference/pill_development_host/native_library/struct.UnresolvedImport"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "LoadFailureExplanation",
                    "link": "/reference/pill_development_host/native_library/enum.LoadFailureExplanation"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "choose_explanation",
                    "link": "/reference/pill_development_host/native_library/fn.choose_explanation"
                  },
                  {
                    "text": "cleanup_temporary_files",
                    "link": "/reference/pill_development_host/native_library/fn.cleanup_temporary_files"
                  },
                  {
                    "text": "diagnose_load_failure",
                    "link": "/reference/pill_development_host/native_library/fn.diagnose_load_failure"
                  },
                  {
                    "text": "engine_dylib_needs_isolation",
                    "link": "/reference/pill_development_host/native_library/fn.engine_dylib_needs_isolation"
                  },
                  {
                    "text": "explanation_error",
                    "link": "/reference/pill_development_host/native_library/fn.explanation_error"
                  },
                  {
                    "text": "files_equal",
                    "link": "/reference/pill_development_host/native_library/fn.files_equal"
                  },
                  {
                    "text": "files_equal_streaming",
                    "link": "/reference/pill_development_host/native_library/fn.files_equal_streaming"
                  },
                  {
                    "text": "first_engine_dylib_mismatch",
                    "link": "/reference/pill_development_host/native_library/fn.first_engine_dylib_mismatch"
                  },
                  {
                    "text": "first_unresolved_import",
                    "link": "/reference/pill_development_host/native_library/fn.first_unresolved_import"
                  },
                  {
                    "text": "import_candidate_copies",
                    "link": "/reference/pill_development_host/native_library/fn.import_candidate_copies"
                  },
                  {
                    "text": "module_world_engine_dylib",
                    "link": "/reference/pill_development_host/native_library/fn.module_world_engine_dylib"
                  },
                  {
                    "text": "process_is_alive",
                    "link": "/reference/pill_development_host/native_library/fn.process_is_alive"
                  },
                  {
                    "text": "process_temporary_directory",
                    "link": "/reference/pill_development_host/native_library/fn.process_temporary_directory"
                  },
                  {
                    "text": "remove_generation_directory",
                    "link": "/reference/pill_development_host/native_library/fn.remove_generation_directory"
                  },
                  {
                    "text": "remove_staging_directory",
                    "link": "/reference/pill_development_host/native_library/fn.remove_staging_directory"
                  },
                  {
                    "text": "remove_temporary_file",
                    "link": "/reference/pill_development_host/native_library/fn.remove_temporary_file"
                  },
                  {
                    "text": "stage_module_engine_dylib",
                    "link": "/reference/pill_development_host/native_library/fn.stage_module_engine_dylib"
                  },
                  {
                    "text": "staging_directories_to_evict",
                    "link": "/reference/pill_development_host/native_library/fn.staging_directories_to_evict"
                  },
                  {
                    "text": "staging_last_write",
                    "link": "/reference/pill_development_host/native_library/fn.staging_last_write"
                  },
                  {
                    "text": "unresolved_engine_mismatch",
                    "link": "/reference/pill_development_host/native_library/fn.unresolved_engine_mismatch"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "CopyFieldAccessorsFn",
                    "link": "/reference/pill_development_host/native_library/type.CopyFieldAccessorsFn"
                  },
                  {
                    "text": "CopyMirrorMethodsFn",
                    "link": "/reference/pill_development_host/native_library/type.CopyMirrorMethodsFn"
                  },
                  {
                    "text": "CopyValueTypesFn",
                    "link": "/reference/pill_development_host/native_library/type.CopyValueTypesFn"
                  },
                  {
                    "text": "ExtentCoverageFn",
                    "link": "/reference/pill_development_host/native_library/type.ExtentCoverageFn"
                  },
                  {
                    "text": "FieldAccessorCountFn",
                    "link": "/reference/pill_development_host/native_library/type.FieldAccessorCountFn"
                  },
                  {
                    "text": "FunctionAddressFn",
                    "link": "/reference/pill_development_host/native_library/type.FunctionAddressFn"
                  },
                  {
                    "text": "MirrorMethodCountFn",
                    "link": "/reference/pill_development_host/native_library/type.MirrorMethodCountFn"
                  },
                  {
                    "text": "ModuleAbiVersionFn",
                    "link": "/reference/pill_development_host/native_library/type.ModuleAbiVersionFn"
                  },
                  {
                    "text": "ModuleInitFn",
                    "link": "/reference/pill_development_host/native_library/type.ModuleInitFn"
                  },
                  {
                    "text": "PlainFunctionInstallFn",
                    "link": "/reference/pill_development_host/native_library/type.PlainFunctionInstallFn"
                  },
                  {
                    "text": "PlainFunctionResetFn",
                    "link": "/reference/pill_development_host/native_library/type.PlainFunctionResetFn"
                  },
                  {
                    "text": "ValueTypeCountFn",
                    "link": "/reference/pill_development_host/native_library/type.ValueTypeCountFn"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ENGINE_DYLIB_STEMS",
                    "link": "/reference/pill_development_host/native_library/constant.ENGINE_DYLIB_STEMS"
                  },
                  {
                    "text": "EXTENT_COVERAGE_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.EXTENT_COVERAGE_SYMBOL"
                  },
                  {
                    "text": "FIELD_ACCESSOR_COPY_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.FIELD_ACCESSOR_COPY_SYMBOL"
                  },
                  {
                    "text": "FIELD_ACCESSOR_COUNT_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.FIELD_ACCESSOR_COUNT_SYMBOL"
                  },
                  {
                    "text": "FUNCTION_ADDRESS_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.FUNCTION_ADDRESS_SYMBOL"
                  },
                  {
                    "text": "LOAD_WITH_ALTERED_SEARCH_PATH",
                    "link": "/reference/pill_development_host/native_library/constant.LOAD_WITH_ALTERED_SEARCH_PATH"
                  },
                  {
                    "text": "MAX_RETAINED_STAGING_DIRECTORIES",
                    "link": "/reference/pill_development_host/native_library/constant.MAX_RETAINED_STAGING_DIRECTORIES"
                  },
                  {
                    "text": "MIRROR_METHOD_COPY_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.MIRROR_METHOD_COPY_SYMBOL"
                  },
                  {
                    "text": "MIRROR_METHOD_COUNT_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.MIRROR_METHOD_COUNT_SYMBOL"
                  },
                  {
                    "text": "MODULE_ABI_VERSION_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.MODULE_ABI_VERSION_SYMBOL"
                  },
                  {
                    "text": "MODULE_INIT_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.MODULE_INIT_SYMBOL"
                  },
                  {
                    "text": "MODULE_REGISTER_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.MODULE_REGISTER_SYMBOL"
                  },
                  {
                    "text": "PLAIN_FUNCTION_INSTALL_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.PLAIN_FUNCTION_INSTALL_SYMBOL"
                  },
                  {
                    "text": "PLAIN_FUNCTION_RESET_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.PLAIN_FUNCTION_RESET_SYMBOL"
                  },
                  {
                    "text": "STAGING_GRACE_PERIOD",
                    "link": "/reference/pill_development_host/native_library/constant.STAGING_GRACE_PERIOD"
                  },
                  {
                    "text": "TEMPORARY_DIRECTORY",
                    "link": "/reference/pill_development_host/native_library/constant.TEMPORARY_DIRECTORY"
                  },
                  {
                    "text": "VALUE_TYPE_COPY_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.VALUE_TYPE_COPY_SYMBOL"
                  },
                  {
                    "text": "VALUE_TYPE_COUNT_SYMBOL",
                    "link": "/reference/pill_development_host/native_library/constant.VALUE_TYPE_COUNT_SYMBOL"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "TEMPORARY_COPY_COUNTER",
                    "link": "/reference/pill_development_host/native_library/static.TEMPORARY_COPY_COUNTER"
                  }
                ]
              }
            ]
          },
          {
            "text": "notices",
            "link": "/reference/pill_development_host/notices/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "HostNotice",
                    "link": "/reference/pill_development_host/notices/enum.HostNotice"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "notice_kind_log_name",
                    "link": "/reference/pill_development_host/notices/fn.notice_kind_log_name"
                  },
                  {
                    "text": "push",
                    "link": "/reference/pill_development_host/notices/fn.push"
                  },
                  {
                    "text": "take",
                    "link": "/reference/pill_development_host/notices/fn.take"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "NOTICE_CAPACITY",
                    "link": "/reference/pill_development_host/notices/constant.NOTICE_CAPACITY"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "NOTICE_QUEUE",
                    "link": "/reference/pill_development_host/notices/static.NOTICE_QUEUE"
                  }
                ]
              }
            ]
          },
          {
            "text": "project_module",
            "link": "/reference/pill_development_host/project_module/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "loaded",
                    "link": "/reference/pill_development_host/project_module/loaded/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "LoadedProject",
                            "link": "/reference/pill_development_host/project_module/loaded/enum.LoadedProject"
                          },
                          {
                            "text": "ManagedReloadStart",
                            "link": "/reference/pill_development_host/project_module/loaded/enum.ManagedReloadStart"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "build_csharp_outcome",
                            "link": "/reference/pill_development_host/project_module/loaded/fn.build_csharp_outcome"
                          },
                          {
                            "text": "poll_managed_assembly_swap",
                            "link": "/reference/pill_development_host/project_module/loaded/fn.poll_managed_assembly_swap"
                          },
                          {
                            "text": "reload_native",
                            "link": "/reference/pill_development_host/project_module/loaded/fn.reload_native"
                          },
                          {
                            "text": "run_full_project_build",
                            "link": "/reference/pill_development_host/project_module/loaded/fn.run_full_project_build"
                          },
                          {
                            "text": "start_csharp_assembly_build",
                            "link": "/reference/pill_development_host/project_module/loaded/fn.start_csharp_assembly_build"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "reload",
            "link": "/reference/pill_development_host/reload/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "GenerationInit",
                    "link": "/reference/pill_development_host/reload/struct.GenerationInit"
                  },
                  {
                    "text": "ReloadCommit",
                    "link": "/reference/pill_development_host/reload/struct.ReloadCommit"
                  },
                  {
                    "text": "ReloadTransaction",
                    "link": "/reference/pill_development_host/reload/struct.ReloadTransaction"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FirstLoadFailure",
                    "link": "/reference/pill_development_host/reload/enum.FirstLoadFailure"
                  },
                  {
                    "text": "GraveyardPolicy",
                    "link": "/reference/pill_development_host/reload/enum.GraveyardPolicy"
                  },
                  {
                    "text": "LoadValidation",
                    "link": "/reference/pill_development_host/reload/enum.LoadValidation"
                  },
                  {
                    "text": "ReloadSubjectKind",
                    "link": "/reference/pill_development_host/reload/enum.ReloadSubjectKind"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "build_load_and_commit",
                    "link": "/reference/pill_development_host/reload/fn.build_load_and_commit"
                  },
                  {
                    "text": "clear_failed_generation",
                    "link": "/reference/pill_development_host/reload/fn.clear_failed_generation"
                  },
                  {
                    "text": "initialize_generation",
                    "link": "/reference/pill_development_host/reload/fn.initialize_generation"
                  },
                  {
                    "text": "registered_schemas",
                    "link": "/reference/pill_development_host/reload/fn.registered_schemas"
                  },
                  {
                    "text": "stale_components",
                    "link": "/reference/pill_development_host/reload/fn.stale_components"
                  },
                  {
                    "text": "unclaimed_type_names",
                    "link": "/reference/pill_development_host/reload/fn.unclaimed_type_names"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MAX_DEFERRED_EVICTIONS",
                    "link": "/reference/pill_development_host/reload/constant.MAX_DEFERRED_EVICTIONS"
                  },
                  {
                    "text": "MAX_GRAVEYARD_GENERATIONS",
                    "link": "/reference/pill_development_host/reload/constant.MAX_GRAVEYARD_GENERATIONS"
                  },
                  {
                    "text": "MODULE_FORGOTTEN_TYPES",
                    "link": "/reference/pill_development_host/reload/constant.MODULE_FORGOTTEN_TYPES"
                  },
                  {
                    "text": "MODULE_RELOAD_COMPLETE",
                    "link": "/reference/pill_development_host/reload/constant.MODULE_RELOAD_COMPLETE"
                  },
                  {
                    "text": "PROJECT_FORGOTTEN_TYPES",
                    "link": "/reference/pill_development_host/reload/constant.PROJECT_FORGOTTEN_TYPES"
                  },
                  {
                    "text": "PROJECT_RELOAD_COMPLETE",
                    "link": "/reference/pill_development_host/reload/constant.PROJECT_RELOAD_COMPLETE"
                  }
                ]
              }
            ]
          },
          {
            "text": "renderer_module",
            "link": "/reference/pill_development_host/renderer_module/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ModuleRenderer",
                    "link": "/reference/pill_development_host/renderer_module/struct.ModuleRenderer"
                  },
                  {
                    "text": "RendererModule",
                    "link": "/reference/pill_development_host/renderer_module/struct.RendererModule"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "RendererModuleChange",
                    "link": "/reference/pill_development_host/renderer_module/enum.RendererModuleChange"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "attach_module_renderer",
                    "link": "/reference/pill_development_host/renderer_module/fn.attach_module_renderer"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "AttachFn",
                    "link": "/reference/pill_development_host/renderer_module/type.AttachFn"
                  },
                  {
                    "text": "DetachFn",
                    "link": "/reference/pill_development_host/renderer_module/type.DetachFn"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ATTACH_SYMBOL",
                    "link": "/reference/pill_development_host/renderer_module/constant.ATTACH_SYMBOL"
                  },
                  {
                    "text": "DETACH_SYMBOL",
                    "link": "/reference/pill_development_host/renderer_module/constant.DETACH_SYMBOL"
                  }
                ]
              }
            ]
          },
          {
            "text": "runtime",
            "link": "/reference/pill_development_host/runtime/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "DevHost",
                    "link": "/reference/pill_development_host/runtime/struct.DevHost"
                  },
                  {
                    "text": "InFlightPatch",
                    "link": "/reference/pill_development_host/runtime/struct.InFlightPatch"
                  },
                  {
                    "text": "PendingModule",
                    "link": "/reference/pill_development_host/runtime/struct.PendingModule"
                  },
                  {
                    "text": "RenderingHost",
                    "link": "/reference/pill_development_host/runtime/struct.RenderingHost"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "PatchSubject",
                    "link": "/reference/pill_development_host/runtime/enum.PatchSubject"
                  },
                  {
                    "text": "PauseReason",
                    "link": "/reference/pill_development_host/runtime/enum.PauseReason"
                  },
                  {
                    "text": "RendererStep",
                    "link": "/reference/pill_development_host/runtime/enum.RendererStep"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "advance_managed_build",
                    "link": "/reference/pill_development_host/runtime/fn.advance_managed_build"
                  },
                  {
                    "text": "advance_patch_attempt",
                    "link": "/reference/pill_development_host/runtime/fn.advance_patch_attempt"
                  },
                  {
                    "text": "apply_asset_changes",
                    "link": "/reference/pill_development_host/runtime/fn.apply_asset_changes"
                  },
                  {
                    "text": "apply_manager_settings_at_startup",
                    "link": "/reference/pill_development_host/runtime/fn.apply_manager_settings_at_startup"
                  },
                  {
                    "text": "apply_manager_settings_changes",
                    "link": "/reference/pill_development_host/runtime/fn.apply_manager_settings_changes"
                  },
                  {
                    "text": "arm_patching_thread",
                    "link": "/reference/pill_development_host/runtime/fn.arm_patching_thread"
                  },
                  {
                    "text": "assert_unique_owners",
                    "link": "/reference/pill_development_host/runtime/fn.assert_unique_owners"
                  },
                  {
                    "text": "attach_backend",
                    "link": "/reference/pill_development_host/runtime/fn.attach_backend"
                  },
                  {
                    "text": "attach_renderer",
                    "link": "/reference/pill_development_host/runtime/fn.attach_renderer"
                  },
                  {
                    "text": "attach_renderer_module",
                    "link": "/reference/pill_development_host/runtime/fn.attach_renderer_module"
                  },
                  {
                    "text": "component_schemas_of",
                    "link": "/reference/pill_development_host/runtime/fn.component_schemas_of"
                  },
                  {
                    "text": "cook_project_shader_sources",
                    "link": "/reference/pill_development_host/runtime/fn.cook_project_shader_sources"
                  },
                  {
                    "text": "fail_setup",
                    "link": "/reference/pill_development_host/runtime/fn.fail_setup"
                  },
                  {
                    "text": "fast_patching_allowed",
                    "link": "/reference/pill_development_host/runtime/fn.fast_patching_allowed"
                  },
                  {
                    "text": "finish_managed_build",
                    "link": "/reference/pill_development_host/runtime/fn.finish_managed_build"
                  },
                  {
                    "text": "forget_prologue_records",
                    "link": "/reference/pill_development_host/runtime/fn.forget_prologue_records"
                  },
                  {
                    "text": "guid_text",
                    "link": "/reference/pill_development_host/runtime/fn.guid_text"
                  },
                  {
                    "text": "index_project_assets",
                    "link": "/reference/pill_development_host/runtime/fn.index_project_assets"
                  },
                  {
                    "text": "log_manager_settings_applied",
                    "link": "/reference/pill_development_host/runtime/fn.log_manager_settings_applied"
                  },
                  {
                    "text": "log_manager_settings_failure",
                    "link": "/reference/pill_development_host/runtime/fn.log_manager_settings_failure"
                  },
                  {
                    "text": "module_mirror_ownership",
                    "link": "/reference/pill_development_host/runtime/fn.module_mirror_ownership"
                  },
                  {
                    "text": "note_managed_swap",
                    "link": "/reference/pill_development_host/runtime/fn.note_managed_swap"
                  },
                  {
                    "text": "optional_failure_output",
                    "link": "/reference/pill_development_host/runtime/fn.optional_failure_output"
                  },
                  {
                    "text": "patch_attempt_in_flight",
                    "link": "/reference/pill_development_host/runtime/fn.patch_attempt_in_flight"
                  },
                  {
                    "text": "patch_targets",
                    "link": "/reference/pill_development_host/runtime/fn.patch_targets"
                  },
                  {
                    "text": "pause_after_boundary",
                    "link": "/reference/pill_development_host/runtime/fn.pause_after_boundary"
                  },
                  {
                    "text": "peer_component_names",
                    "link": "/reference/pill_development_host/runtime/fn.peer_component_names"
                  },
                  {
                    "text": "previous_patch_generation",
                    "link": "/reference/pill_development_host/runtime/fn.previous_patch_generation"
                  },
                  {
                    "text": "print_patch_generations",
                    "link": "/reference/pill_development_host/runtime/fn.print_patch_generations"
                  },
                  {
                    "text": "print_startup_configuration",
                    "link": "/reference/pill_development_host/runtime/fn.print_startup_configuration"
                  },
                  {
                    "text": "process_patch_faults",
                    "link": "/reference/pill_development_host/runtime/fn.process_patch_faults"
                  },
                  {
                    "text": "process_rollback_request",
                    "link": "/reference/pill_development_host/runtime/fn.process_rollback_request"
                  },
                  {
                    "text": "regenerate_module_csharp_mirror",
                    "link": "/reference/pill_development_host/runtime/fn.regenerate_module_csharp_mirror"
                  },
                  {
                    "text": "report_patch_outcome",
                    "link": "/reference/pill_development_host/runtime/fn.report_patch_outcome"
                  },
                  {
                    "text": "report_setup_failure",
                    "link": "/reference/pill_development_host/runtime/fn.report_setup_failure"
                  },
                  {
                    "text": "resync_patch_baselines",
                    "link": "/reference/pill_development_host/runtime/fn.resync_patch_baselines"
                  },
                  {
                    "text": "run_frame",
                    "link": "/reference/pill_development_host/runtime/fn.run_frame"
                  },
                  {
                    "text": "run_frame_phase",
                    "link": "/reference/pill_development_host/runtime/fn.run_frame_phase"
                  },
                  {
                    "text": "run_reload_phase",
                    "link": "/reference/pill_development_host/runtime/fn.run_reload_phase"
                  },
                  {
                    "text": "run_reload_steps",
                    "link": "/reference/pill_development_host/runtime/fn.run_reload_steps"
                  },
                  {
                    "text": "scan_project_assets",
                    "link": "/reference/pill_development_host/runtime/fn.scan_project_assets"
                  },
                  {
                    "text": "setup",
                    "link": "/reference/pill_development_host/runtime/fn.setup"
                  },
                  {
                    "text": "setup_rendering",
                    "link": "/reference/pill_development_host/runtime/fn.setup_rendering"
                  },
                  {
                    "text": "start_asset_watcher",
                    "link": "/reference/pill_development_host/runtime/fn.start_asset_watcher"
                  },
                  {
                    "text": "start_patch_build",
                    "link": "/reference/pill_development_host/runtime/fn.start_patch_build"
                  },
                  {
                    "text": "start_project_shader_watcher",
                    "link": "/reference/pill_development_host/runtime/fn.start_project_shader_watcher"
                  },
                  {
                    "text": "start_shader_watcher",
                    "link": "/reference/pill_development_host/runtime/fn.start_shader_watcher"
                  },
                  {
                    "text": "suspend_stale_subjects",
                    "link": "/reference/pill_development_host/runtime/fn.suspend_stale_subjects"
                  },
                  {
                    "text": "try_module_fast_path",
                    "link": "/reference/pill_development_host/runtime/fn.try_module_fast_path"
                  },
                  {
                    "text": "try_project_fast_path",
                    "link": "/reference/pill_development_host/runtime/fn.try_project_fast_path"
                  },
                  {
                    "text": "unsupported_render_components",
                    "link": "/reference/pill_development_host/runtime/fn.unsupported_render_components"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "RegeneratedMirror",
                    "link": "/reference/pill_development_host/runtime/type.RegeneratedMirror"
                  },
                  {
                    "text": "RendererModule",
                    "link": "/reference/pill_development_host/runtime/type.RendererModule"
                  },
                  {
                    "text": "ShaderChangedFunction",
                    "link": "/reference/pill_development_host/runtime/type.ShaderChangedFunction"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ROLLBACK_REQUEST_FILE",
                    "link": "/reference/pill_development_host/runtime/constant.ROLLBACK_REQUEST_FILE"
                  },
                  {
                    "text": "SHADER_CHANGE_REFUSED",
                    "link": "/reference/pill_development_host/runtime/constant.SHADER_CHANGE_REFUSED"
                  },
                  {
                    "text": "SHADER_CHANGED_EXPORT",
                    "link": "/reference/pill_development_host/runtime/constant.SHADER_CHANGED_EXPORT"
                  }
                ]
              }
            ]
          },
          {
            "text": "switches",
            "link": "/reference/pill_development_host/switches/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "HostSwitches",
                    "link": "/reference/pill_development_host/switches/struct.HostSwitches"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "parse_switch",
                    "link": "/reference/pill_development_host/switches/fn.parse_switch"
                  },
                  {
                    "text": "switch_value",
                    "link": "/reference/pill_development_host/switches/fn.switch_value"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ASSETS_HOT_RELOADING_VARIABLE",
                    "link": "/reference/pill_development_host/switches/constant.ASSETS_HOT_RELOADING_VARIABLE"
                  },
                  {
                    "text": "FUNCTION_HOT_PATCHING_VARIABLE",
                    "link": "/reference/pill_development_host/switches/constant.FUNCTION_HOT_PATCHING_VARIABLE"
                  },
                  {
                    "text": "HOT_RELOADING_VARIABLE",
                    "link": "/reference/pill_development_host/switches/constant.HOT_RELOADING_VARIABLE"
                  },
                  {
                    "text": "SWITCH_VARIABLES",
                    "link": "/reference/pill_development_host/switches/constant.SWITCH_VARIABLES"
                  }
                ]
              }
            ]
          },
          {
            "text": "watchers",
            "link": "/reference/pill_development_host/watchers/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset",
                    "link": "/reference/pill_development_host/watchers/asset/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "AssetWatcher",
                            "link": "/reference/pill_development_host/watchers/asset/struct.AssetWatcher"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "AssetChange",
                            "link": "/reference/pill_development_host/watchers/asset/enum.AssetChange"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "classify_touched_paths",
                            "link": "/reference/pill_development_host/watchers/asset/fn.classify_touched_paths"
                          },
                          {
                            "text": "is_rename",
                            "link": "/reference/pill_development_host/watchers/asset/fn.is_rename"
                          },
                          {
                            "text": "relative_to",
                            "link": "/reference/pill_development_host/watchers/asset/fn.relative_to"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "METADATA_SUFFIX",
                            "link": "/reference/pill_development_host/watchers/asset/constant.METADATA_SUFFIX"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "shader",
                    "link": "/reference/pill_development_host/watchers/shader/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CookedShader",
                            "link": "/reference/pill_development_host/watchers/shader/struct.CookedShader"
                          },
                          {
                            "text": "ShaderWatcher",
                            "link": "/reference/pill_development_host/watchers/shader/struct.ShaderWatcher"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "cook_edited_shaders",
                            "link": "/reference/pill_development_host/watchers/shader/fn.cook_edited_shaders"
                          },
                          {
                            "text": "is_shader_source",
                            "link": "/reference/pill_development_host/watchers/shader/fn.is_shader_source"
                          },
                          {
                            "text": "read_output_texts",
                            "link": "/reference/pill_development_host/watchers/shader/fn.read_output_texts"
                          },
                          {
                            "text": "relative_path_from_root",
                            "link": "/reference/pill_development_host/watchers/shader/fn.relative_path_from_root"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "SOURCE_EXTENSION",
                            "link": "/reference/pill_development_host/watchers/shader/constant.SOURCE_EXTENSION"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "shared",
                    "link": "/reference/pill_development_host/watchers/shared/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "SourceTrigger",
                            "link": "/reference/pill_development_host/watchers/shared/struct.SourceTrigger"
                          },
                          {
                            "text": "TriggerLog",
                            "link": "/reference/pill_development_host/watchers/shared/struct.TriggerLog"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "canonicalize_through_existing_ancestor",
                            "link": "/reference/pill_development_host/watchers/shared/fn.canonicalize_through_existing_ancestor"
                          },
                          {
                            "text": "debounce_duration",
                            "link": "/reference/pill_development_host/watchers/shared/fn.debounce_duration"
                          },
                          {
                            "text": "is_relevant_event",
                            "link": "/reference/pill_development_host/watchers/shared/fn.is_relevant_event"
                          },
                          {
                            "text": "is_relevant_path",
                            "link": "/reference/pill_development_host/watchers/shared/fn.is_relevant_path"
                          },
                          {
                            "text": "is_relevant_relative_path",
                            "link": "/reference/pill_development_host/watchers/shared/fn.is_relevant_relative_path"
                          },
                          {
                            "text": "spawn_settled_watcher",
                            "link": "/reference/pill_development_host/watchers/shared/fn.spawn_settled_watcher"
                          },
                          {
                            "text": "spawn_source_watcher",
                            "link": "/reference/pill_development_host/watchers/shared/fn.spawn_source_watcher"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DEBOUNCE_OVERRIDE_VARIABLE",
                            "link": "/reference/pill_development_host/watchers/shared/constant.DEBOUNCE_OVERRIDE_VARIABLE"
                          },
                          {
                            "text": "DEFAULT_DEBOUNCE_MILLISECONDS",
                            "link": "/reference/pill_development_host/watchers/shared/constant.DEFAULT_DEBOUNCE_MILLISECONDS"
                          },
                          {
                            "text": "EDITOR_TEMPORARY_FILE_SUFFIXES",
                            "link": "/reference/pill_development_host/watchers/shared/constant.EDITOR_TEMPORARY_FILE_SUFFIXES"
                          },
                          {
                            "text": "HIDDEN_FILE_PREFIX",
                            "link": "/reference/pill_development_host/watchers/shared/constant.HIDDEN_FILE_PREFIX"
                          },
                          {
                            "text": "IGNORED_DIRECTORY_NAMES",
                            "link": "/reference/pill_development_host/watchers/shared/constant.IGNORED_DIRECTORY_NAMES"
                          },
                          {
                            "text": "REPORTED_PATH_LIMIT",
                            "link": "/reference/pill_development_host/watchers/shared/constant.REPORTED_PATH_LIMIT"
                          },
                          {
                            "text": "TRIGGER_LOG_CAPACITY",
                            "link": "/reference/pill_development_host/watchers/shared/constant.TRIGGER_LOG_CAPACITY"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Dummy Color",
    "link": "/reference/pill_dummy_color/",
    "collapsed": true,
    "items": [
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "TestStruct",
            "link": "/reference/pill_dummy_color/struct.TestStruct"
          },
          {
            "text": "Tint",
            "link": "/reference/pill_dummy_color/struct.Tint"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "get_color_a",
            "link": "/reference/pill_dummy_color/fn.get_color_a"
          },
          {
            "text": "grayscale",
            "link": "/reference/pill_dummy_color/fn.grayscale"
          },
          {
            "text": "init",
            "link": "/reference/pill_dummy_color/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_dummy_color/fn.register"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Dummy Math",
    "link": "/reference/pill_dummy_math/",
    "collapsed": true,
    "items": [
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "Adder",
            "link": "/reference/pill_dummy_math/struct.Adder"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "double",
            "link": "/reference/pill_dummy_math/fn.double"
          },
          {
            "text": "init",
            "link": "/reference/pill_dummy_math/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_dummy_math/fn.register"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Dummy Random",
    "link": "/reference/pill_dummy_random/",
    "collapsed": true,
    "items": [
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "LcgRandom",
            "link": "/reference/pill_dummy_random/struct.LcgRandom"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "init",
            "link": "/reference/pill_dummy_random/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_dummy_random/fn.register"
          },
          {
            "text": "seed_from_u32",
            "link": "/reference/pill_dummy_random/fn.seed_from_u32"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Editor",
    "link": "/reference/pill_editor/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "clipboard",
            "link": "/reference/pill_editor/clipboard/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "payload_format_id",
                    "link": "/reference/pill_editor/clipboard/fn.payload_format_id"
                  },
                  {
                    "text": "process_id",
                    "link": "/reference/pill_editor/clipboard/fn.process_id"
                  },
                  {
                    "text": "read",
                    "link": "/reference/pill_editor/clipboard/fn.read"
                  },
                  {
                    "text": "read_open",
                    "link": "/reference/pill_editor/clipboard/fn.read_open"
                  },
                  {
                    "text": "set_one",
                    "link": "/reference/pill_editor/clipboard/fn.set_one"
                  },
                  {
                    "text": "write",
                    "link": "/reference/pill_editor/clipboard/fn.write"
                  },
                  {
                    "text": "write_open",
                    "link": "/reference/pill_editor/clipboard/fn.write_open"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CF_UNICODETEXT",
                    "link": "/reference/pill_editor/clipboard/constant.CF_UNICODETEXT"
                  },
                  {
                    "text": "READ_ATTEMPTS",
                    "link": "/reference/pill_editor/clipboard/constant.READ_ATTEMPTS"
                  },
                  {
                    "text": "READ_RETRY_DELAY",
                    "link": "/reference/pill_editor/clipboard/constant.READ_RETRY_DELAY"
                  }
                ]
              }
            ]
          },
          {
            "text": "drag_out",
            "link": "/reference/pill_editor/drag_out/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EditorDropSource",
                    "link": "/reference/pill_editor/drag_out/struct.EditorDropSource"
                  },
                  {
                    "text": "EditorDropSource_Impl",
                    "link": "/reference/pill_editor/drag_out/struct.EditorDropSource_Impl"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "DragOutOutcome",
                    "link": "/reference/pill_editor/drag_out/enum.DragOutOutcome"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "initialize_ole",
                    "link": "/reference/pill_editor/drag_out/fn.initialize_ole"
                  },
                  {
                    "text": "left_button_held",
                    "link": "/reference/pill_editor/drag_out/fn.left_button_held"
                  },
                  {
                    "text": "run_modal_drag",
                    "link": "/reference/pill_editor/drag_out/fn.run_modal_drag"
                  },
                  {
                    "text": "start",
                    "link": "/reference/pill_editor/drag_out/fn.start"
                  }
                ]
              }
            ]
          },
          {
            "text": "frontend",
            "link": "/reference/pill_editor/frontend/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "EditorError",
                    "link": "/reference/pill_editor/frontend/enum.EditorError"
                  }
                ]
              }
            ]
          },
          {
            "text": "overlay",
            "link": "/reference/pill_editor/overlay/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "composition",
                    "link": "/reference/pill_editor/overlay/composition/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Tree",
                            "link": "/reference/pill_editor/overlay/composition/struct.Tree"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "OverlaySurface",
                    "link": "/reference/pill_editor/overlay/struct.OverlaySurface"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "OverlayMode",
                    "link": "/reference/pill_editor/overlay/enum.OverlayMode"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "hwnd_of",
                    "link": "/reference/pill_editor/overlay/fn.hwnd_of"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "OverlayError",
                    "link": "/reference/pill_editor/overlay/type.OverlayError"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "WINDOW_CLEAR",
                    "link": "/reference/pill_editor/overlay/constant.WINDOW_CLEAR"
                  }
                ]
              }
            ]
          },
          {
            "text": "runner",
            "link": "/reference/pill_editor/runner/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "assets_pipeline",
                    "link": "/reference/pill_editor/runner/assets_pipeline/"
                  },
                  {
                    "text": "editor_window",
                    "link": "/reference/pill_editor/runner/editor_window/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "EditorWindow",
                            "link": "/reference/pill_editor/runner/editor_window/struct.EditorWindow"
                          },
                          {
                            "text": "ScriptedDrag",
                            "link": "/reference/pill_editor/runner/editor_window/struct.ScriptedDrag"
                          },
                          {
                            "text": "ThemeWatch",
                            "link": "/reference/pill_editor/runner/editor_window/struct.ThemeWatch"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "FontSource",
                            "link": "/reference/pill_editor/runner/editor_window/enum.FontSource"
                          },
                          {
                            "text": "ScriptedDragStage",
                            "link": "/reference/pill_editor/runner/editor_window/enum.ScriptedDragStage"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "frame",
                    "link": "/reference/pill_editor/runner/frame/"
                  },
                  {
                    "text": "scripted_channel",
                    "link": "/reference/pill_editor/runner/scripted_channel/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "reject_on_failure",
                            "link": "/reference/pill_editor/runner/scripted_channel/fn.reject_on_failure"
                          },
                          {
                            "text": "reject_scripted_command",
                            "link": "/reference/pill_editor/runner/scripted_channel/fn.reject_scripted_command"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "transform_gizmo",
                    "link": "/reference/pill_editor/runner/transform_gizmo/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ScreenProjection",
                            "link": "/reference/pill_editor/runner/transform_gizmo/struct.ScreenProjection"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "windows",
                    "link": "/reference/pill_editor/runner/windows/"
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CameraDrag",
                    "link": "/reference/pill_editor/runner/struct.CameraDrag"
                  },
                  {
                    "text": "EditorApplication",
                    "link": "/reference/pill_editor/runner/struct.EditorApplication"
                  },
                  {
                    "text": "GizmoDrag",
                    "link": "/reference/pill_editor/runner/struct.GizmoDrag"
                  },
                  {
                    "text": "PopoutWindow",
                    "link": "/reference/pill_editor/runner/struct.PopoutWindow"
                  },
                  {
                    "text": "PressPick",
                    "link": "/reference/pill_editor/runner/struct.PressPick"
                  },
                  {
                    "text": "SceneView",
                    "link": "/reference/pill_editor/runner/struct.SceneView"
                  },
                  {
                    "text": "SurfaceWindow",
                    "link": "/reference/pill_editor/runner/struct.SurfaceWindow"
                  },
                  {
                    "text": "WakeTimer",
                    "link": "/reference/pill_editor/runner/struct.WakeTimer"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "CommandAction",
                    "link": "/reference/pill_editor/runner/enum.CommandAction"
                  },
                  {
                    "text": "EventRoute",
                    "link": "/reference/pill_editor/runner/enum.EventRoute"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "camera_binding",
                    "link": "/reference/pill_editor/runner/fn.camera_binding"
                  },
                  {
                    "text": "camera_navigation_name",
                    "link": "/reference/pill_editor/runner/fn.camera_navigation_name"
                  },
                  {
                    "text": "command_action",
                    "link": "/reference/pill_editor/runner/fn.command_action"
                  },
                  {
                    "text": "create_overlay",
                    "link": "/reference/pill_editor/runner/fn.create_overlay"
                  },
                  {
                    "text": "create_window_overlay",
                    "link": "/reference/pill_editor/runner/fn.create_window_overlay"
                  },
                  {
                    "text": "draw_gizmo_guides",
                    "link": "/reference/pill_editor/runner/fn.draw_gizmo_guides"
                  },
                  {
                    "text": "editor_default_keybindings",
                    "link": "/reference/pill_editor/runner/fn.editor_default_keybindings"
                  },
                  {
                    "text": "engine_asset_rows",
                    "link": "/reference/pill_editor/runner/fn.engine_asset_rows"
                  },
                  {
                    "text": "gizmo_axis_name",
                    "link": "/reference/pill_editor/runner/fn.gizmo_axis_name"
                  },
                  {
                    "text": "gizmo_basis",
                    "link": "/reference/pill_editor/runner/fn.gizmo_basis"
                  },
                  {
                    "text": "gizmo_drag_mode",
                    "link": "/reference/pill_editor/runner/fn.gizmo_drag_mode"
                  },
                  {
                    "text": "gizmo_mode_name",
                    "link": "/reference/pill_editor/runner/fn.gizmo_mode_name"
                  },
                  {
                    "text": "gizmo_plane_name",
                    "link": "/reference/pill_editor/runner/fn.gizmo_plane_name"
                  },
                  {
                    "text": "gizmo_space_name",
                    "link": "/reference/pill_editor/runner/fn.gizmo_space_name"
                  },
                  {
                    "text": "listing_shows_asset",
                    "link": "/reference/pill_editor/runner/fn.listing_shows_asset"
                  },
                  {
                    "text": "native_path",
                    "link": "/reference/pill_editor/runner/fn.native_path"
                  },
                  {
                    "text": "no_overlay_requested",
                    "link": "/reference/pill_editor/runner/fn.no_overlay_requested"
                  },
                  {
                    "text": "notice_toast",
                    "link": "/reference/pill_editor/runner/fn.notice_toast"
                  },
                  {
                    "text": "offset_pointer",
                    "link": "/reference/pill_editor/runner/fn.offset_pointer"
                  },
                  {
                    "text": "open_in_file_manager",
                    "link": "/reference/pill_editor/runner/fn.open_in_file_manager"
                  },
                  {
                    "text": "owe_frame",
                    "link": "/reference/pill_editor/runner/fn.owe_frame"
                  },
                  {
                    "text": "parse_gizmo_axis",
                    "link": "/reference/pill_editor/runner/fn.parse_gizmo_axis"
                  },
                  {
                    "text": "paste_chord",
                    "link": "/reference/pill_editor/runner/fn.paste_chord"
                  },
                  {
                    "text": "problems_from_build_output",
                    "link": "/reference/pill_editor/runner/fn.problems_from_build_output"
                  },
                  {
                    "text": "projection_terms",
                    "link": "/reference/pill_editor/runner/fn.projection_terms"
                  },
                  {
                    "text": "quaternion_product",
                    "link": "/reference/pill_editor/runner/fn.quaternion_product"
                  },
                  {
                    "text": "read_transform",
                    "link": "/reference/pill_editor/runner/fn.read_transform"
                  },
                  {
                    "text": "reference_guid",
                    "link": "/reference/pill_editor/runner/fn.reference_guid"
                  },
                  {
                    "text": "resolve_component_name",
                    "link": "/reference/pill_editor/runner/fn.resolve_component_name"
                  },
                  {
                    "text": "resolve_display_entity",
                    "link": "/reference/pill_editor/runner/fn.resolve_display_entity"
                  },
                  {
                    "text": "route_event",
                    "link": "/reference/pill_editor/runner/fn.route_event"
                  },
                  {
                    "text": "run",
                    "link": "/reference/pill_editor/runner/fn.run"
                  },
                  {
                    "text": "scaled_view_rect",
                    "link": "/reference/pill_editor/runner/fn.scaled_view_rect"
                  },
                  {
                    "text": "scene_surface",
                    "link": "/reference/pill_editor/runner/fn.scene_surface"
                  },
                  {
                    "text": "split_command",
                    "link": "/reference/pill_editor/runner/fn.split_command"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "FileStamp",
                    "link": "/reference/pill_editor/runner/type.FileStamp"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ASSET_REFRESH_FRAMES",
                    "link": "/reference/pill_editor/runner/constant.ASSET_REFRESH_FRAMES"
                  },
                  {
                    "text": "ASSET_ROWS_MAX",
                    "link": "/reference/pill_editor/runner/constant.ASSET_ROWS_MAX"
                  },
                  {
                    "text": "EDITOR_FORMAT",
                    "link": "/reference/pill_editor/runner/constant.EDITOR_FORMAT"
                  },
                  {
                    "text": "FPS_SMOOTHING",
                    "link": "/reference/pill_editor/runner/constant.FPS_SMOOTHING"
                  },
                  {
                    "text": "FRAME_HEARTBEAT_FRAMES",
                    "link": "/reference/pill_editor/runner/constant.FRAME_HEARTBEAT_FRAMES"
                  },
                  {
                    "text": "FRAME_HEARTBEAT_SECONDS",
                    "link": "/reference/pill_editor/runner/constant.FRAME_HEARTBEAT_SECONDS"
                  },
                  {
                    "text": "GIZMO_DASH",
                    "link": "/reference/pill_editor/runner/constant.GIZMO_DASH"
                  },
                  {
                    "text": "GIZMO_GUIDE_SPAN",
                    "link": "/reference/pill_editor/runner/constant.GIZMO_GUIDE_SPAN"
                  },
                  {
                    "text": "GIZMO_HEARTBEAT_FRAMES",
                    "link": "/reference/pill_editor/runner/constant.GIZMO_HEARTBEAT_FRAMES"
                  },
                  {
                    "text": "GIZMO_HIT_RADIUS_DEFAULT",
                    "link": "/reference/pill_editor/runner/constant.GIZMO_HIT_RADIUS_DEFAULT"
                  },
                  {
                    "text": "GIZMO_PRESS_FRACTION",
                    "link": "/reference/pill_editor/runner/constant.GIZMO_PRESS_FRACTION"
                  },
                  {
                    "text": "GIZMO_SCREEN_FRACTION",
                    "link": "/reference/pill_editor/runner/constant.GIZMO_SCREEN_FRACTION"
                  },
                  {
                    "text": "INITIAL_SCENE_SIZE",
                    "link": "/reference/pill_editor/runner/constant.INITIAL_SCENE_SIZE"
                  },
                  {
                    "text": "INITIAL_WINDOW_SIZE",
                    "link": "/reference/pill_editor/runner/constant.INITIAL_WINDOW_SIZE"
                  },
                  {
                    "text": "MINIMUM_WINDOW_SIZE",
                    "link": "/reference/pill_editor/runner/constant.MINIMUM_WINDOW_SIZE"
                  },
                  {
                    "text": "NO_OVERLAY_ENV",
                    "link": "/reference/pill_editor/runner/constant.NO_OVERLAY_ENV"
                  },
                  {
                    "text": "POPOUT_INITIAL_SIZE",
                    "link": "/reference/pill_editor/runner/constant.POPOUT_INITIAL_SIZE"
                  },
                  {
                    "text": "RECOVERY_AUTOSAVE_FRAMES",
                    "link": "/reference/pill_editor/runner/constant.RECOVERY_AUTOSAVE_FRAMES"
                  },
                  {
                    "text": "SCENE_DEFAULT_MARGIN",
                    "link": "/reference/pill_editor/runner/constant.SCENE_DEFAULT_MARGIN"
                  },
                  {
                    "text": "SCENE_DEFAULT_TOP_MARGIN",
                    "link": "/reference/pill_editor/runner/constant.SCENE_DEFAULT_TOP_MARGIN"
                  },
                  {
                    "text": "SHELL_MODULE_NAME",
                    "link": "/reference/pill_editor/runner/constant.SHELL_MODULE_NAME"
                  },
                  {
                    "text": "STATE_FILE_POLL_FRAMES",
                    "link": "/reference/pill_editor/runner/constant.STATE_FILE_POLL_FRAMES"
                  }
                ]
              }
            ]
          },
          {
            "text": "test_channel",
            "link": "/reference/pill_editor/test_channel/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "TestChannel",
                    "link": "/reference/pill_editor/test_channel/struct.TestChannel"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "seconds_from_environment",
                    "link": "/reference/pill_editor/test_channel/fn.seconds_from_environment"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "init_telemetry",
            "link": "/reference/pill_editor/fn.init_telemetry"
          },
          {
            "text": "main",
            "link": "/reference/pill_editor/fn.main"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Editor Core",
    "link": "/reference/pill_editor_core/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "assets",
            "link": "/reference/pill_editor_core/assets/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetDialog",
                    "link": "/reference/pill_editor_core/assets/enum.AssetDialog"
                  },
                  {
                    "text": "CreateKind",
                    "link": "/reference/pill_editor_core/assets/enum.CreateKind"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "can_delete",
                    "link": "/reference/pill_editor_core/assets/fn.can_delete"
                  },
                  {
                    "text": "can_write_meta",
                    "link": "/reference/pill_editor_core/assets/fn.can_write_meta"
                  },
                  {
                    "text": "cancel",
                    "link": "/reference/pill_editor_core/assets/fn.cancel"
                  },
                  {
                    "text": "close_dialog",
                    "link": "/reference/pill_editor_core/assets/fn.close_dialog"
                  },
                  {
                    "text": "create_collision",
                    "link": "/reference/pill_editor_core/assets/fn.create_collision"
                  },
                  {
                    "text": "delete_selection",
                    "link": "/reference/pill_editor_core/assets/fn.delete_selection"
                  },
                  {
                    "text": "drop_destination",
                    "link": "/reference/pill_editor_core/assets/fn.drop_destination"
                  },
                  {
                    "text": "is_read_only_key",
                    "link": "/reference/pill_editor_core/assets/fn.is_read_only_key"
                  },
                  {
                    "text": "open_create",
                    "link": "/reference/pill_editor_core/assets/fn.open_create"
                  },
                  {
                    "text": "open_create_scene",
                    "link": "/reference/pill_editor_core/assets/fn.open_create_scene"
                  },
                  {
                    "text": "open_rename",
                    "link": "/reference/pill_editor_core/assets/fn.open_rename"
                  },
                  {
                    "text": "queue_delete",
                    "link": "/reference/pill_editor_core/assets/fn.queue_delete"
                  },
                  {
                    "text": "queue_move",
                    "link": "/reference/pill_editor_core/assets/fn.queue_move"
                  },
                  {
                    "text": "queue_write_meta",
                    "link": "/reference/pill_editor_core/assets/fn.queue_write_meta"
                  },
                  {
                    "text": "reveal_target",
                    "link": "/reference/pill_editor_core/assets/fn.reveal_target"
                  },
                  {
                    "text": "reveal_target_in",
                    "link": "/reference/pill_editor_core/assets/fn.reveal_target_in"
                  },
                  {
                    "text": "scene_path",
                    "link": "/reference/pill_editor_core/assets/fn.scene_path"
                  },
                  {
                    "text": "selected_row",
                    "link": "/reference/pill_editor_core/assets/fn.selected_row"
                  },
                  {
                    "text": "submit_create",
                    "link": "/reference/pill_editor_core/assets/fn.submit_create"
                  },
                  {
                    "text": "submit_rename",
                    "link": "/reference/pill_editor_core/assets/fn.submit_rename"
                  },
                  {
                    "text": "takes_meta_write",
                    "link": "/reference/pill_editor_core/assets/fn.takes_meta_write"
                  },
                  {
                    "text": "write_meta_selection",
                    "link": "/reference/pill_editor_core/assets/fn.write_meta_selection"
                  }
                ]
              }
            ]
          },
          {
            "text": "boundary",
            "link": "/reference/pill_editor_core/boundary/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EguiPopoutInputs",
                    "link": "/reference/pill_editor_core/boundary/struct.EguiPopoutInputs"
                  },
                  {
                    "text": "EguiShellFrame",
                    "link": "/reference/pill_editor_core/boundary/struct.EguiShellFrame"
                  },
                  {
                    "text": "EguiShellInput",
                    "link": "/reference/pill_editor_core/boundary/struct.EguiShellInput"
                  },
                  {
                    "text": "PopoutFrame",
                    "link": "/reference/pill_editor_core/boundary/struct.PopoutFrame"
                  },
                  {
                    "text": "ShellBadge",
                    "link": "/reference/pill_editor_core/boundary/struct.ShellBadge"
                  },
                  {
                    "text": "ShellRect",
                    "link": "/reference/pill_editor_core/boundary/struct.ShellRect"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "frame_from_output",
                    "link": "/reference/pill_editor_core/boundary/fn.frame_from_output"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "BADGES_PER_VIEW_MAX",
                    "link": "/reference/pill_editor_core/boundary/constant.BADGES_PER_VIEW_MAX"
                  },
                  {
                    "text": "DEFAULT_SCENE_VIEWS",
                    "link": "/reference/pill_editor_core/boundary/constant.DEFAULT_SCENE_VIEWS"
                  },
                  {
                    "text": "SCENE_VIEWS_MAX",
                    "link": "/reference/pill_editor_core/boundary/constant.SCENE_VIEWS_MAX"
                  }
                ]
              }
            ]
          },
          {
            "text": "brand",
            "link": "/reference/pill_editor_core/brand/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "mark_color_image",
                    "link": "/reference/pill_editor_core/brand/fn.mark_color_image"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MARK_ALPHA",
                    "link": "/reference/pill_editor_core/brand/constant.MARK_ALPHA"
                  },
                  {
                    "text": "MARK_SIDE",
                    "link": "/reference/pill_editor_core/brand/constant.MARK_SIDE"
                  }
                ]
              }
            ]
          },
          {
            "text": "browser",
            "link": "/reference/pill_editor_core/browser/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetRoot",
                    "link": "/reference/pill_editor_core/browser/struct.AssetRoot"
                  },
                  {
                    "text": "ProjectBrowser",
                    "link": "/reference/pill_editor_core/browser/struct.ProjectBrowser"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "breadcrumb",
                    "link": "/reference/pill_editor_core/browser/fn.breadcrumb"
                  },
                  {
                    "text": "child_folders",
                    "link": "/reference/pill_editor_core/browser/fn.child_folders"
                  },
                  {
                    "text": "children",
                    "link": "/reference/pill_editor_core/browser/fn.children"
                  },
                  {
                    "text": "drop_folder_relative",
                    "link": "/reference/pill_editor_core/browser/fn.drop_folder_relative"
                  },
                  {
                    "text": "file_name",
                    "link": "/reference/pill_editor_core/browser/fn.file_name"
                  },
                  {
                    "text": "is_direct_child",
                    "link": "/reference/pill_editor_core/browser/fn.is_direct_child"
                  },
                  {
                    "text": "is_folder",
                    "link": "/reference/pill_editor_core/browser/fn.is_folder"
                  },
                  {
                    "text": "is_root",
                    "link": "/reference/pill_editor_core/browser/fn.is_root"
                  },
                  {
                    "text": "parent_folder",
                    "link": "/reference/pill_editor_core/browser/fn.parent_folder"
                  },
                  {
                    "text": "root_of",
                    "link": "/reference/pill_editor_core/browser/fn.root_of"
                  },
                  {
                    "text": "sort_rows",
                    "link": "/reference/pill_editor_core/browser/fn.sort_rows"
                  },
                  {
                    "text": "tile_columns",
                    "link": "/reference/pill_editor_core/browser/fn.tile_columns"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEFAULT_TILE_SIZE",
                    "link": "/reference/pill_editor_core/browser/constant.DEFAULT_TILE_SIZE"
                  },
                  {
                    "text": "ROOT_LABEL",
                    "link": "/reference/pill_editor_core/browser/constant.ROOT_LABEL"
                  },
                  {
                    "text": "ROOTS",
                    "link": "/reference/pill_editor_core/browser/constant.ROOTS"
                  },
                  {
                    "text": "TILE_SIZE_RANGE",
                    "link": "/reference/pill_editor_core/browser/constant.TILE_SIZE_RANGE"
                  }
                ]
              }
            ]
          },
          {
            "text": "cadence",
            "link": "/reference/pill_editor_core/cadence/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Cadence",
                    "link": "/reference/pill_editor_core/cadence/struct.Cadence"
                  },
                  {
                    "text": "FrameDemand",
                    "link": "/reference/pill_editor_core/cadence/struct.FrameDemand"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FrameWake",
                    "link": "/reference/pill_editor_core/cadence/enum.FrameWake"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CONTINUOUS_REDRAW_ENV",
                    "link": "/reference/pill_editor_core/cadence/constant.CONTINUOUS_REDRAW_ENV"
                  },
                  {
                    "text": "IDLE_POLL",
                    "link": "/reference/pill_editor_core/cadence/constant.IDLE_POLL"
                  }
                ]
              }
            ]
          },
          {
            "text": "camera",
            "link": "/reference/pill_editor_core/camera/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Modifiers",
                    "link": "/reference/pill_editor_core/camera/struct.Modifiers"
                  },
                  {
                    "text": "OrbitCamera",
                    "link": "/reference/pill_editor_core/camera/struct.OrbitCamera"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "CameraButton",
                    "link": "/reference/pill_editor_core/camera/enum.CameraButton"
                  },
                  {
                    "text": "CameraNavigation",
                    "link": "/reference/pill_editor_core/camera/enum.CameraNavigation"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "middle_button_table",
                    "link": "/reference/pill_editor_core/camera/fn.middle_button_table"
                  },
                  {
                    "text": "navigation_binding",
                    "link": "/reference/pill_editor_core/camera/fn.navigation_binding"
                  },
                  {
                    "text": "quaternion_product",
                    "link": "/reference/pill_editor_core/camera/fn.quaternion_product"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEFAULT_DISTANCE",
                    "link": "/reference/pill_editor_core/camera/constant.DEFAULT_DISTANCE"
                  },
                  {
                    "text": "DEFAULT_PITCH",
                    "link": "/reference/pill_editor_core/camera/constant.DEFAULT_PITCH"
                  },
                  {
                    "text": "DOLLY_EXPONENT_PER_PIXEL",
                    "link": "/reference/pill_editor_core/camera/constant.DOLLY_EXPONENT_PER_PIXEL"
                  },
                  {
                    "text": "MAX_DISTANCE",
                    "link": "/reference/pill_editor_core/camera/constant.MAX_DISTANCE"
                  },
                  {
                    "text": "MAX_PITCH",
                    "link": "/reference/pill_editor_core/camera/constant.MAX_PITCH"
                  },
                  {
                    "text": "MIN_DISTANCE",
                    "link": "/reference/pill_editor_core/camera/constant.MIN_DISTANCE"
                  },
                  {
                    "text": "ORBIT_RADIANS_PER_PIXEL",
                    "link": "/reference/pill_editor_core/camera/constant.ORBIT_RADIANS_PER_PIXEL"
                  },
                  {
                    "text": "ZOOM_RATIO_PER_LINE",
                    "link": "/reference/pill_editor_core/camera/constant.ZOOM_RATIO_PER_LINE"
                  }
                ]
              }
            ]
          },
          {
            "text": "clipboard",
            "link": "/reference/pill_editor_core/clipboard/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EditorClipboard",
                    "link": "/reference/pill_editor_core/clipboard/struct.EditorClipboard"
                  },
                  {
                    "text": "PastePlan",
                    "link": "/reference/pill_editor_core/clipboard/struct.PastePlan"
                  },
                  {
                    "text": "SeededComponent",
                    "link": "/reference/pill_editor_core/clipboard/struct.SeededComponent"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ClipboardAction",
                    "link": "/reference/pill_editor_core/clipboard/enum.ClipboardAction"
                  },
                  {
                    "text": "ClipboardRequest",
                    "link": "/reference/pill_editor_core/clipboard/enum.ClipboardRequest"
                  },
                  {
                    "text": "Payload",
                    "link": "/reference/pill_editor_core/clipboard/enum.Payload"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "can_copy",
                    "link": "/reference/pill_editor_core/clipboard/fn.can_copy"
                  },
                  {
                    "text": "component_document",
                    "link": "/reference/pill_editor_core/clipboard/fn.component_document"
                  },
                  {
                    "text": "component_field_pairs",
                    "link": "/reference/pill_editor_core/clipboard/fn.component_field_pairs"
                  },
                  {
                    "text": "cut_commands",
                    "link": "/reference/pill_editor_core/clipboard/fn.cut_commands"
                  },
                  {
                    "text": "decode",
                    "link": "/reference/pill_editor_core/clipboard/fn.decode"
                  },
                  {
                    "text": "decode_component",
                    "link": "/reference/pill_editor_core/clipboard/fn.decode_component"
                  },
                  {
                    "text": "encode_asset",
                    "link": "/reference/pill_editor_core/clipboard/fn.encode_asset"
                  },
                  {
                    "text": "encode_component",
                    "link": "/reference/pill_editor_core/clipboard/fn.encode_component"
                  },
                  {
                    "text": "encode_entity",
                    "link": "/reference/pill_editor_core/clipboard/fn.encode_entity"
                  },
                  {
                    "text": "encode_field",
                    "link": "/reference/pill_editor_core/clipboard/fn.encode_field"
                  },
                  {
                    "text": "format_value",
                    "link": "/reference/pill_editor_core/clipboard/fn.format_value"
                  },
                  {
                    "text": "parse_value",
                    "link": "/reference/pill_editor_core/clipboard/fn.parse_value"
                  },
                  {
                    "text": "paste_plan",
                    "link": "/reference/pill_editor_core/clipboard/fn.paste_plan"
                  },
                  {
                    "text": "queue_action",
                    "link": "/reference/pill_editor_core/clipboard/fn.queue_action"
                  },
                  {
                    "text": "queue_request",
                    "link": "/reference/pill_editor_core/clipboard/fn.queue_request"
                  },
                  {
                    "text": "seeded_component",
                    "link": "/reference/pill_editor_core/clipboard/fn.seeded_component"
                  },
                  {
                    "text": "selection_payload",
                    "link": "/reference/pill_editor_core/clipboard/fn.selection_payload"
                  },
                  {
                    "text": "string_field",
                    "link": "/reference/pill_editor_core/clipboard/fn.string_field"
                  },
                  {
                    "text": "summarize",
                    "link": "/reference/pill_editor_core/clipboard/fn.summarize"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "SuffixDigitsParser",
                    "link": "/reference/pill_editor_core/clipboard/type.SuffixDigitsParser"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "FORMAT_NAME",
                    "link": "/reference/pill_editor_core/clipboard/constant.FORMAT_NAME"
                  },
                  {
                    "text": "VERSION",
                    "link": "/reference/pill_editor_core/clipboard/constant.VERSION"
                  }
                ]
              }
            ]
          },
          {
            "text": "commands",
            "link": "/reference/pill_editor_core/commands/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Chord",
                    "link": "/reference/pill_editor_core/commands/struct.Chord"
                  },
                  {
                    "text": "ChordParseError",
                    "link": "/reference/pill_editor_core/commands/struct.ChordParseError"
                  },
                  {
                    "text": "CommandInbox",
                    "link": "/reference/pill_editor_core/commands/struct.CommandInbox"
                  },
                  {
                    "text": "CommandRegistry",
                    "link": "/reference/pill_editor_core/commands/struct.CommandRegistry"
                  },
                  {
                    "text": "CommandSpec",
                    "link": "/reference/pill_editor_core/commands/struct.CommandSpec"
                  },
                  {
                    "text": "CommandView",
                    "link": "/reference/pill_editor_core/commands/struct.CommandView"
                  },
                  {
                    "text": "EditorPreferences",
                    "link": "/reference/pill_editor_core/commands/struct.EditorPreferences"
                  },
                  {
                    "text": "GizmoPreferences",
                    "link": "/reference/pill_editor_core/commands/struct.GizmoPreferences"
                  },
                  {
                    "text": "GizmoProjectPreferences",
                    "link": "/reference/pill_editor_core/commands/struct.GizmoProjectPreferences"
                  },
                  {
                    "text": "KeybindingsFile",
                    "link": "/reference/pill_editor_core/commands/struct.KeybindingsFile"
                  },
                  {
                    "text": "PendingCommandBatch",
                    "link": "/reference/pill_editor_core/commands/struct.PendingCommandBatch"
                  },
                  {
                    "text": "PendingEditorCommands",
                    "link": "/reference/pill_editor_core/commands/struct.PendingEditorCommands"
                  },
                  {
                    "text": "SnappingSteps",
                    "link": "/reference/pill_editor_core/commands/struct.SnappingSteps"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "KeymapPreset",
                    "link": "/reference/pill_editor_core/commands/enum.KeymapPreset"
                  },
                  {
                    "text": "KeyName",
                    "link": "/reference/pill_editor_core/commands/enum.KeyName"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "builtin_commands",
                    "link": "/reference/pill_editor_core/commands/fn.builtin_commands"
                  },
                  {
                    "text": "default_scale_step",
                    "link": "/reference/pill_editor_core/commands/fn.default_scale_step"
                  },
                  {
                    "text": "ensure_command_resources",
                    "link": "/reference/pill_editor_core/commands/fn.ensure_command_resources"
                  },
                  {
                    "text": "menu_tree",
                    "link": "/reference/pill_editor_core/commands/fn.menu_tree"
                  },
                  {
                    "text": "read_gizmo_settings",
                    "link": "/reference/pill_editor_core/commands/fn.read_gizmo_settings"
                  },
                  {
                    "text": "write_gizmo_preferences",
                    "link": "/reference/pill_editor_core/commands/fn.write_gizmo_preferences"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "KEYBINDINGS_FILE",
                    "link": "/reference/pill_editor_core/commands/constant.KEYBINDINGS_FILE"
                  },
                  {
                    "text": "LETTERS",
                    "link": "/reference/pill_editor_core/commands/constant.LETTERS"
                  },
                  {
                    "text": "PREFERENCES_FILE",
                    "link": "/reference/pill_editor_core/commands/constant.PREFERENCES_FILE"
                  }
                ]
              }
            ]
          },
          {
            "text": "console",
            "link": "/reference/pill_editor_core/console/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ConsoleFilterSettings",
                    "link": "/reference/pill_editor_core/console/struct.ConsoleFilterSettings"
                  },
                  {
                    "text": "ConsoleLine",
                    "link": "/reference/pill_editor_core/console/struct.ConsoleLine"
                  },
                  {
                    "text": "ConsoleState",
                    "link": "/reference/pill_editor_core/console/struct.ConsoleState"
                  },
                  {
                    "text": "ConsoleView",
                    "link": "/reference/pill_editor_core/console/struct.ConsoleView"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ConsoleChannel",
                    "link": "/reference/pill_editor_core/console/enum.ConsoleChannel"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "level_from_name",
                    "link": "/reference/pill_editor_core/console/fn.level_from_name"
                  },
                  {
                    "text": "level_name",
                    "link": "/reference/pill_editor_core/console/fn.level_name"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CONSOLE_LINES_MAX",
                    "link": "/reference/pill_editor_core/console/constant.CONSOLE_LINES_MAX"
                  },
                  {
                    "text": "CONSOLE_VIEW_ROWS",
                    "link": "/reference/pill_editor_core/console/constant.CONSOLE_VIEW_ROWS"
                  },
                  {
                    "text": "ENGINE_PREFIXES",
                    "link": "/reference/pill_editor_core/console/constant.ENGINE_PREFIXES"
                  }
                ]
              }
            ]
          },
          {
            "text": "drain",
            "link": "/reference/pill_editor_core/drain/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "DrainOutcome",
                    "link": "/reference/pill_editor_core/drain/struct.DrainOutcome"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "HistoryDirection",
                    "link": "/reference/pill_editor_core/drain/enum.HistoryDirection"
                  },
                  {
                    "text": "HistoryOutcome",
                    "link": "/reference/pill_editor_core/drain/enum.HistoryOutcome"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_pending",
                    "link": "/reference/pill_editor_core/drain/fn.apply_pending"
                  },
                  {
                    "text": "command_touches_files",
                    "link": "/reference/pill_editor_core/drain/fn.command_touches_files"
                  },
                  {
                    "text": "follow_selection",
                    "link": "/reference/pill_editor_core/drain/fn.follow_selection"
                  },
                  {
                    "text": "prune_history",
                    "link": "/reference/pill_editor_core/drain/fn.prune_history"
                  },
                  {
                    "text": "registry_stamp",
                    "link": "/reference/pill_editor_core/drain/fn.registry_stamp"
                  },
                  {
                    "text": "resolvable_identifiers",
                    "link": "/reference/pill_editor_core/drain/fn.resolvable_identifiers"
                  },
                  {
                    "text": "step_history",
                    "link": "/reference/pill_editor_core/drain/fn.step_history"
                  }
                ]
              }
            ]
          },
          {
            "text": "editor_files",
            "link": "/reference/pill_editor_core/editor_files/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FileError",
                    "link": "/reference/pill_editor_core/editor_files/enum.FileError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "read_json",
                    "link": "/reference/pill_editor_core/editor_files/fn.read_json"
                  },
                  {
                    "text": "remove",
                    "link": "/reference/pill_editor_core/editor_files/fn.remove"
                  },
                  {
                    "text": "write_bytes",
                    "link": "/reference/pill_editor_core/editor_files/fn.write_bytes"
                  },
                  {
                    "text": "write_json",
                    "link": "/reference/pill_editor_core/editor_files/fn.write_json"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "TEMPORARY_FILE_EXTENSION",
                    "link": "/reference/pill_editor_core/editor_files/constant.TEMPORARY_FILE_EXTENSION"
                  }
                ]
              }
            ]
          },
          {
            "text": "editor_state",
            "link": "/reference/pill_editor_core/editor_state/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply",
                    "link": "/reference/pill_editor_core/editor_state/apply/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Modules",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "asset",
                            "link": "/reference/pill_editor_core/editor_state/apply/asset/",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "Functions",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "apply",
                                    "link": "/reference/pill_editor_core/editor_state/apply/asset/fn.apply"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "text": "document",
                            "link": "/reference/pill_editor_core/editor_state/apply/document/",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "Functions",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "apply",
                                    "link": "/reference/pill_editor_core/editor_state/apply/document/fn.apply"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "text": "engine",
                            "link": "/reference/pill_editor_core/editor_state/apply/engine/",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "Functions",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "apply",
                                    "link": "/reference/pill_editor_core/editor_state/apply/engine/fn.apply"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "text": "selection",
                            "link": "/reference/pill_editor_core/editor_state/apply/selection/",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "Functions",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "apply",
                                    "link": "/reference/pill_editor_core/editor_state/apply/selection/fn.apply"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "text": "world",
                            "link": "/reference/pill_editor_core/editor_state/apply/world/",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "Functions",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "apply",
                                    "link": "/reference/pill_editor_core/editor_state/apply/world/fn.apply"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "command",
                    "link": "/reference/pill_editor_core/editor_state/command/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CommandOutcome",
                            "link": "/reference/pill_editor_core/editor_state/command/struct.CommandOutcome"
                          },
                          {
                            "text": "RecordedApply",
                            "link": "/reference/pill_editor_core/editor_state/command/struct.RecordedApply"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CommandFamily",
                            "link": "/reference/pill_editor_core/editor_state/command/enum.CommandFamily"
                          },
                          {
                            "text": "EditorCommand",
                            "link": "/reference/pill_editor_core/editor_state/command/enum.EditorCommand"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetDetail",
                    "link": "/reference/pill_editor_core/editor_state/struct.AssetDetail"
                  },
                  {
                    "text": "AssetFieldDecorator",
                    "link": "/reference/pill_editor_core/editor_state/struct.AssetFieldDecorator"
                  },
                  {
                    "text": "AssetListing",
                    "link": "/reference/pill_editor_core/editor_state/struct.AssetListing"
                  },
                  {
                    "text": "AssetReferenceField",
                    "link": "/reference/pill_editor_core/editor_state/struct.AssetReferenceField"
                  },
                  {
                    "text": "ComponentFieldView",
                    "link": "/reference/pill_editor_core/editor_state/struct.ComponentFieldView"
                  },
                  {
                    "text": "ComponentSeed",
                    "link": "/reference/pill_editor_core/editor_state/struct.ComponentSeed"
                  },
                  {
                    "text": "ComponentView",
                    "link": "/reference/pill_editor_core/editor_state/struct.ComponentView"
                  },
                  {
                    "text": "EditorSelection",
                    "link": "/reference/pill_editor_core/editor_state/struct.EditorSelection"
                  },
                  {
                    "text": "EditorSnapshot",
                    "link": "/reference/pill_editor_core/editor_state/struct.EditorSnapshot"
                  },
                  {
                    "text": "EngineAsset",
                    "link": "/reference/pill_editor_core/editor_state/struct.EngineAsset"
                  },
                  {
                    "text": "EntityDetail",
                    "link": "/reference/pill_editor_core/editor_state/struct.EntityDetail"
                  },
                  {
                    "text": "EntityListEntry",
                    "link": "/reference/pill_editor_core/editor_state/struct.EntityListEntry"
                  },
                  {
                    "text": "EntityPickRequest",
                    "link": "/reference/pill_editor_core/editor_state/struct.EntityPickRequest"
                  },
                  {
                    "text": "EntityPickTarget",
                    "link": "/reference/pill_editor_core/editor_state/struct.EntityPickTarget"
                  },
                  {
                    "text": "RegisteredComponent",
                    "link": "/reference/pill_editor_core/editor_state/struct.RegisteredComponent"
                  },
                  {
                    "text": "ResourceFieldView",
                    "link": "/reference/pill_editor_core/editor_state/struct.ResourceFieldView"
                  },
                  {
                    "text": "ResourceView",
                    "link": "/reference/pill_editor_core/editor_state/struct.ResourceView"
                  },
                  {
                    "text": "StandaloneTypeInfo",
                    "link": "/reference/pill_editor_core/editor_state/struct.StandaloneTypeInfo"
                  },
                  {
                    "text": "SystemSummary",
                    "link": "/reference/pill_editor_core/editor_state/struct.SystemSummary"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetKind",
                    "link": "/reference/pill_editor_core/editor_state/enum.AssetKind"
                  },
                  {
                    "text": "AssetReferenceLabel",
                    "link": "/reference/pill_editor_core/editor_state/enum.AssetReferenceLabel"
                  },
                  {
                    "text": "EntityReferenceLabel",
                    "link": "/reference/pill_editor_core/editor_state/enum.EntityReferenceLabel"
                  },
                  {
                    "text": "SelectionClick",
                    "link": "/reference/pill_editor_core/editor_state/enum.SelectionClick"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset_authoring_root",
                    "link": "/reference/pill_editor_core/editor_state/fn.asset_authoring_root"
                  },
                  {
                    "text": "asset_slash",
                    "link": "/reference/pill_editor_core/editor_state/fn.asset_slash"
                  },
                  {
                    "text": "document_guid",
                    "link": "/reference/pill_editor_core/editor_state/fn.document_guid"
                  },
                  {
                    "text": "refuse_module_resource",
                    "link": "/reference/pill_editor_core/editor_state/fn.refuse_module_resource"
                  },
                  {
                    "text": "registered_components",
                    "link": "/reference/pill_editor_core/editor_state/fn.registered_components"
                  },
                  {
                    "text": "resolve_asset_reference",
                    "link": "/reference/pill_editor_core/editor_state/fn.resolve_asset_reference"
                  },
                  {
                    "text": "roll_back_files",
                    "link": "/reference/pill_editor_core/editor_state/fn.roll_back_files"
                  },
                  {
                    "text": "roll_back_files_with",
                    "link": "/reference/pill_editor_core/editor_state/fn.roll_back_files_with"
                  },
                  {
                    "text": "system_owner_label",
                    "link": "/reference/pill_editor_core/editor_state/fn.system_owner_label"
                  },
                  {
                    "text": "warn_left_behind",
                    "link": "/reference/pill_editor_core/editor_state/fn.warn_left_behind"
                  },
                  {
                    "text": "with_rollback_paths",
                    "link": "/reference/pill_editor_core/editor_state/fn.with_rollback_paths"
                  },
                  {
                    "text": "write_asset_bytes",
                    "link": "/reference/pill_editor_core/editor_state/fn.write_asset_bytes"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "EXTENSIONS_ROOT",
                    "link": "/reference/pill_editor_core/editor_state/constant.EXTENSIONS_ROOT"
                  },
                  {
                    "text": "FOLDER_KIND",
                    "link": "/reference/pill_editor_core/editor_state/constant.FOLDER_KIND"
                  },
                  {
                    "text": "SELECTED_DETAILS_MAX",
                    "link": "/reference/pill_editor_core/editor_state/constant.SELECTED_DETAILS_MAX"
                  }
                ]
              }
            ]
          },
          {
            "text": "entities",
            "link": "/reference/pill_editor_core/entities/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "entity_create",
                    "link": "/reference/pill_editor_core/entities/fn.entity_create"
                  },
                  {
                    "text": "entity_delete",
                    "link": "/reference/pill_editor_core/entities/fn.entity_delete"
                  }
                ]
              }
            ]
          },
          {
            "text": "error",
            "link": "/reference/pill_editor_core/error/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "LayoutPersistenceError",
                    "link": "/reference/pill_editor_core/error/enum.LayoutPersistenceError"
                  }
                ]
              }
            ]
          },
          {
            "text": "gizmo",
            "link": "/reference/pill_editor_core/gizmo/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "GizmoGeometry",
                    "link": "/reference/pill_editor_core/gizmo/struct.GizmoGeometry"
                  },
                  {
                    "text": "GizmoSettings",
                    "link": "/reference/pill_editor_core/gizmo/struct.GizmoSettings"
                  },
                  {
                    "text": "GizmoState",
                    "link": "/reference/pill_editor_core/gizmo/struct.GizmoState"
                  },
                  {
                    "text": "HandleStates",
                    "link": "/reference/pill_editor_core/gizmo/struct.HandleStates"
                  },
                  {
                    "text": "ResourceField",
                    "link": "/reference/pill_editor_core/gizmo/struct.ResourceField"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "GizmoMode",
                    "link": "/reference/pill_editor_core/gizmo/enum.GizmoMode"
                  },
                  {
                    "text": "GizmoSpace",
                    "link": "/reference/pill_editor_core/gizmo/enum.GizmoSpace"
                  },
                  {
                    "text": "HandleKind",
                    "link": "/reference/pill_editor_core/gizmo/enum.HandleKind"
                  },
                  {
                    "text": "HandleState",
                    "link": "/reference/pill_editor_core/gizmo/enum.HandleState"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "add",
                    "link": "/reference/pill_editor_core/gizmo/fn.add"
                  },
                  {
                    "text": "axis_angle_quaternion",
                    "link": "/reference/pill_editor_core/gizmo/fn.axis_angle_quaternion"
                  },
                  {
                    "text": "axis_guide",
                    "link": "/reference/pill_editor_core/gizmo/fn.axis_guide"
                  },
                  {
                    "text": "axis_handle",
                    "link": "/reference/pill_editor_core/gizmo/fn.axis_handle"
                  },
                  {
                    "text": "build_geometry",
                    "link": "/reference/pill_editor_core/gizmo/fn.build_geometry"
                  },
                  {
                    "text": "build_geometry_styled",
                    "link": "/reference/pill_editor_core/gizmo/fn.build_geometry_styled"
                  },
                  {
                    "text": "check_resource",
                    "link": "/reference/pill_editor_core/gizmo/fn.check_resource"
                  },
                  {
                    "text": "closest_axis_point",
                    "link": "/reference/pill_editor_core/gizmo/fn.closest_axis_point"
                  },
                  {
                    "text": "cross",
                    "link": "/reference/pill_editor_core/gizmo/fn.cross"
                  },
                  {
                    "text": "cube_triangles",
                    "link": "/reference/pill_editor_core/gizmo/fn.cube_triangles"
                  },
                  {
                    "text": "default_mode",
                    "link": "/reference/pill_editor_core/gizmo/fn.default_mode"
                  },
                  {
                    "text": "default_rotate_step",
                    "link": "/reference/pill_editor_core/gizmo/fn.default_rotate_step"
                  },
                  {
                    "text": "default_scale_step",
                    "link": "/reference/pill_editor_core/gizmo/fn.default_scale_step"
                  },
                  {
                    "text": "default_space",
                    "link": "/reference/pill_editor_core/gizmo/fn.default_space"
                  },
                  {
                    "text": "default_translate_step",
                    "link": "/reference/pill_editor_core/gizmo/fn.default_translate_step"
                  },
                  {
                    "text": "distance",
                    "link": "/reference/pill_editor_core/gizmo/fn.distance"
                  },
                  {
                    "text": "dot",
                    "link": "/reference/pill_editor_core/gizmo/fn.dot"
                  },
                  {
                    "text": "dotted_segments",
                    "link": "/reference/pill_editor_core/gizmo/fn.dotted_segments"
                  },
                  {
                    "text": "field_u32",
                    "link": "/reference/pill_editor_core/gizmo/fn.field_u32"
                  },
                  {
                    "text": "handle_axis",
                    "link": "/reference/pill_editor_core/gizmo/fn.handle_axis"
                  },
                  {
                    "text": "handle_kind",
                    "link": "/reference/pill_editor_core/gizmo/fn.handle_kind"
                  },
                  {
                    "text": "head_triangles",
                    "link": "/reference/pill_editor_core/gizmo/fn.head_triangles"
                  },
                  {
                    "text": "hit_test",
                    "link": "/reference/pill_editor_core/gizmo/fn.hit_test"
                  },
                  {
                    "text": "mode_discriminant",
                    "link": "/reference/pill_editor_core/gizmo/fn.mode_discriminant"
                  },
                  {
                    "text": "mode_from_discriminant",
                    "link": "/reference/pill_editor_core/gizmo/fn.mode_from_discriminant"
                  },
                  {
                    "text": "normalize",
                    "link": "/reference/pill_editor_core/gizmo/fn.normalize"
                  },
                  {
                    "text": "plane_angle",
                    "link": "/reference/pill_editor_core/gizmo/fn.plane_angle"
                  },
                  {
                    "text": "plane_axes",
                    "link": "/reference/pill_editor_core/gizmo/fn.plane_axes"
                  },
                  {
                    "text": "plane_color",
                    "link": "/reference/pill_editor_core/gizmo/fn.plane_color"
                  },
                  {
                    "text": "plane_coordinates",
                    "link": "/reference/pill_editor_core/gizmo/fn.plane_coordinates"
                  },
                  {
                    "text": "plane_handle",
                    "link": "/reference/pill_editor_core/gizmo/fn.plane_handle"
                  },
                  {
                    "text": "plane_square",
                    "link": "/reference/pill_editor_core/gizmo/fn.plane_square"
                  },
                  {
                    "text": "ray_plane_point",
                    "link": "/reference/pill_editor_core/gizmo/fn.ray_plane_point"
                  },
                  {
                    "text": "ray_segment_distance",
                    "link": "/reference/pill_editor_core/gizmo/fn.ray_segment_distance"
                  },
                  {
                    "text": "ray_triangle_intersection",
                    "link": "/reference/pill_editor_core/gizmo/fn.ray_triangle_intersection"
                  },
                  {
                    "text": "release_edits",
                    "link": "/reference/pill_editor_core/gizmo/fn.release_edits"
                  },
                  {
                    "text": "resource_field",
                    "link": "/reference/pill_editor_core/gizmo/fn.resource_field"
                  },
                  {
                    "text": "resource_field_value",
                    "link": "/reference/pill_editor_core/gizmo/fn.resource_field_value"
                  },
                  {
                    "text": "ring_point",
                    "link": "/reference/pill_editor_core/gizmo/fn.ring_point"
                  },
                  {
                    "text": "rotate_vector",
                    "link": "/reference/pill_editor_core/gizmo/fn.rotate_vector"
                  },
                  {
                    "text": "scale",
                    "link": "/reference/pill_editor_core/gizmo/fn.scale"
                  },
                  {
                    "text": "scale_handle_lengths",
                    "link": "/reference/pill_editor_core/gizmo/fn.scale_handle_lengths"
                  },
                  {
                    "text": "set_resource_field",
                    "link": "/reference/pill_editor_core/gizmo/fn.set_resource_field"
                  },
                  {
                    "text": "snap_value",
                    "link": "/reference/pill_editor_core/gizmo/fn.snap_value"
                  },
                  {
                    "text": "space_discriminant",
                    "link": "/reference/pill_editor_core/gizmo/fn.space_discriminant"
                  },
                  {
                    "text": "space_from_discriminant",
                    "link": "/reference/pill_editor_core/gizmo/fn.space_from_discriminant"
                  },
                  {
                    "text": "styled_color",
                    "link": "/reference/pill_editor_core/gizmo/fn.styled_color"
                  },
                  {
                    "text": "sub",
                    "link": "/reference/pill_editor_core/gizmo/fn.sub"
                  },
                  {
                    "text": "swap_f32",
                    "link": "/reference/pill_editor_core/gizmo/fn.swap_f32"
                  },
                  {
                    "text": "wrap_angle",
                    "link": "/reference/pill_editor_core/gizmo/fn.wrap_angle"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "GizmoLine",
                    "link": "/reference/pill_editor_core/gizmo/type.GizmoLine"
                  },
                  {
                    "text": "GizmoTriangle",
                    "link": "/reference/pill_editor_core/gizmo/type.GizmoTriangle"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ACTIVE_DIM",
                    "link": "/reference/pill_editor_core/gizmo/constant.ACTIVE_DIM"
                  },
                  {
                    "text": "AXES",
                    "link": "/reference/pill_editor_core/gizmo/constant.AXES"
                  },
                  {
                    "text": "AXIS_COLORS",
                    "link": "/reference/pill_editor_core/gizmo/constant.AXIS_COLORS"
                  },
                  {
                    "text": "DOTTED_SEGMENTS_MAX",
                    "link": "/reference/pill_editor_core/gizmo/constant.DOTTED_SEGMENTS_MAX"
                  },
                  {
                    "text": "HOVER_BRIGHTEN",
                    "link": "/reference/pill_editor_core/gizmo/constant.HOVER_BRIGHTEN"
                  },
                  {
                    "text": "PLANE_ALPHA",
                    "link": "/reference/pill_editor_core/gizmo/constant.PLANE_ALPHA"
                  },
                  {
                    "text": "PLANE_HALF",
                    "link": "/reference/pill_editor_core/gizmo/constant.PLANE_HALF"
                  },
                  {
                    "text": "PLANE_OFFSET",
                    "link": "/reference/pill_editor_core/gizmo/constant.PLANE_OFFSET"
                  },
                  {
                    "text": "PLANE_PAIRS",
                    "link": "/reference/pill_editor_core/gizmo/constant.PLANE_PAIRS"
                  },
                  {
                    "text": "RESOURCE_FIELDS",
                    "link": "/reference/pill_editor_core/gizmo/constant.RESOURCE_FIELDS"
                  },
                  {
                    "text": "RESOURCE_NAME",
                    "link": "/reference/pill_editor_core/gizmo/constant.RESOURCE_NAME"
                  },
                  {
                    "text": "SCALE_HANDLE_MAX_RATIO",
                    "link": "/reference/pill_editor_core/gizmo/constant.SCALE_HANDLE_MAX_RATIO"
                  },
                  {
                    "text": "SCALE_HANDLE_MIN_RATIO",
                    "link": "/reference/pill_editor_core/gizmo/constant.SCALE_HANDLE_MIN_RATIO"
                  }
                ]
              }
            ]
          },
          {
            "text": "history",
            "link": "/reference/pill_editor_core/history/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CommandHistory",
                    "link": "/reference/pill_editor_core/history/struct.CommandHistory"
                  },
                  {
                    "text": "HistoryEntry",
                    "link": "/reference/pill_editor_core/history/struct.HistoryEntry"
                  },
                  {
                    "text": "PushOutcome",
                    "link": "/reference/pill_editor_core/history/struct.PushOutcome"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "HistoryEntryKind",
                    "link": "/reference/pill_editor_core/history/enum.HistoryEntryKind"
                  },
                  {
                    "text": "TrimReason",
                    "link": "/reference/pill_editor_core/history/enum.TrimReason"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "estimate_bytes",
                    "link": "/reference/pill_editor_core/history/fn.estimate_bytes"
                  },
                  {
                    "text": "field_value_bytes",
                    "link": "/reference/pill_editor_core/history/fn.field_value_bytes"
                  }
                ]
              }
            ]
          },
          {
            "text": "icons",
            "link": "/reference/pill_editor_core/icons/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "IconButton",
                    "link": "/reference/pill_editor_core/icons/struct.IconButton"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "Icon",
                    "link": "/reference/pill_editor_core/icons/enum.Icon"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "append_font_definitions",
                    "link": "/reference/pill_editor_core/icons/fn.append_font_definitions"
                  },
                  {
                    "text": "brighten",
                    "link": "/reference/pill_editor_core/icons/fn.brighten"
                  },
                  {
                    "text": "glyph",
                    "link": "/reference/pill_editor_core/icons/fn.glyph"
                  },
                  {
                    "text": "paint_duotone",
                    "link": "/reference/pill_editor_core/icons/fn.paint_duotone"
                  },
                  {
                    "text": "rich",
                    "link": "/reference/pill_editor_core/icons/fn.rich"
                  },
                  {
                    "text": "with_alpha",
                    "link": "/reference/pill_editor_core/icons/fn.with_alpha"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DUOTONE_FAMILY",
                    "link": "/reference/pill_editor_core/icons/constant.DUOTONE_FAMILY"
                  },
                  {
                    "text": "DUOTONE_FILL_ALPHA",
                    "link": "/reference/pill_editor_core/icons/constant.DUOTONE_FILL_ALPHA"
                  },
                  {
                    "text": "DUOTONE_FONT",
                    "link": "/reference/pill_editor_core/icons/constant.DUOTONE_FONT"
                  },
                  {
                    "text": "DUOTONE_KEY",
                    "link": "/reference/pill_editor_core/icons/constant.DUOTONE_KEY"
                  },
                  {
                    "text": "FAMILY",
                    "link": "/reference/pill_editor_core/icons/constant.FAMILY"
                  },
                  {
                    "text": "HOVER_BRIGHTEN_AMOUNT",
                    "link": "/reference/pill_editor_core/icons/constant.HOVER_BRIGHTEN_AMOUNT"
                  },
                  {
                    "text": "ICON_LABEL_GAP",
                    "link": "/reference/pill_editor_core/icons/constant.ICON_LABEL_GAP"
                  },
                  {
                    "text": "ICON_TEXT_RATIO",
                    "link": "/reference/pill_editor_core/icons/constant.ICON_TEXT_RATIO"
                  },
                  {
                    "text": "REGULAR_FONT",
                    "link": "/reference/pill_editor_core/icons/constant.REGULAR_FONT"
                  },
                  {
                    "text": "REGULAR_KEY",
                    "link": "/reference/pill_editor_core/icons/constant.REGULAR_KEY"
                  }
                ]
              }
            ]
          },
          {
            "text": "input",
            "link": "/reference/pill_editor_core/input/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EventReplayState",
                    "link": "/reference/pill_editor_core/input/struct.EventReplayState"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "map_key",
                    "link": "/reference/pill_editor_core/input/fn.map_key"
                  },
                  {
                    "text": "modifiers",
                    "link": "/reference/pill_editor_core/input/fn.modifiers"
                  },
                  {
                    "text": "pointer_button",
                    "link": "/reference/pill_editor_core/input/fn.pointer_button"
                  },
                  {
                    "text": "raw_input",
                    "link": "/reference/pill_editor_core/input/fn.raw_input"
                  }
                ]
              }
            ]
          },
          {
            "text": "inspector",
            "link": "/reference/pill_editor_core/inspector/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CachedRow",
                    "link": "/reference/pill_editor_core/inspector/struct.CachedRow"
                  },
                  {
                    "text": "CachedRows",
                    "link": "/reference/pill_editor_core/inspector/struct.CachedRows"
                  },
                  {
                    "text": "RecordedEdit",
                    "link": "/reference/pill_editor_core/inspector/struct.RecordedEdit"
                  },
                  {
                    "text": "RowLayout",
                    "link": "/reference/pill_editor_core/inspector/struct.RowLayout"
                  },
                  {
                    "text": "RowLeaf",
                    "link": "/reference/pill_editor_core/inspector/struct.RowLeaf"
                  },
                  {
                    "text": "RowLogged",
                    "link": "/reference/pill_editor_core/inspector/struct.RowLogged"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FieldRow",
                    "link": "/reference/pill_editor_core/inspector/enum.FieldRow"
                  },
                  {
                    "text": "FieldWidget",
                    "link": "/reference/pill_editor_core/inspector/enum.FieldWidget"
                  },
                  {
                    "text": "ReferenceWrite",
                    "link": "/reference/pill_editor_core/inspector/enum.ReferenceWrite"
                  },
                  {
                    "text": "SettingsKey",
                    "link": "/reference/pill_editor_core/inspector/enum.SettingsKey"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset_candidates",
                    "link": "/reference/pill_editor_core/inspector/fn.asset_candidates"
                  },
                  {
                    "text": "asset_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.asset_edit"
                  },
                  {
                    "text": "axis_color",
                    "link": "/reference/pill_editor_core/inspector/fn.axis_color"
                  },
                  {
                    "text": "axis_label",
                    "link": "/reference/pill_editor_core/inspector/fn.axis_label"
                  },
                  {
                    "text": "badge_icon",
                    "link": "/reference/pill_editor_core/inspector/fn.badge_icon"
                  },
                  {
                    "text": "batch",
                    "link": "/reference/pill_editor_core/inspector/fn.batch"
                  },
                  {
                    "text": "channel_run",
                    "link": "/reference/pill_editor_core/inspector/fn.channel_run"
                  },
                  {
                    "text": "component_add",
                    "link": "/reference/pill_editor_core/inspector/fn.component_add"
                  },
                  {
                    "text": "component_icon",
                    "link": "/reference/pill_editor_core/inspector/fn.component_icon"
                  },
                  {
                    "text": "component_label",
                    "link": "/reference/pill_editor_core/inspector/fn.component_label"
                  },
                  {
                    "text": "component_remove",
                    "link": "/reference/pill_editor_core/inspector/fn.component_remove"
                  },
                  {
                    "text": "element_coalesce_field",
                    "link": "/reference/pill_editor_core/inspector/fn.element_coalesce_field"
                  },
                  {
                    "text": "element_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.element_edit"
                  },
                  {
                    "text": "element_field",
                    "link": "/reference/pill_editor_core/inspector/fn.element_field"
                  },
                  {
                    "text": "element_label",
                    "link": "/reference/pill_editor_core/inspector/fn.element_label"
                  },
                  {
                    "text": "element_write",
                    "link": "/reference/pill_editor_core/inspector/fn.element_write"
                  },
                  {
                    "text": "entity_candidates",
                    "link": "/reference/pill_editor_core/inspector/fn.entity_candidates"
                  },
                  {
                    "text": "entity_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.entity_edit"
                  },
                  {
                    "text": "field_coalesce_key",
                    "link": "/reference/pill_editor_core/inspector/fn.field_coalesce_key"
                  },
                  {
                    "text": "field_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.field_edit"
                  },
                  {
                    "text": "field_write",
                    "link": "/reference/pill_editor_core/inspector/fn.field_write"
                  },
                  {
                    "text": "grouped_label",
                    "link": "/reference/pill_editor_core/inspector/fn.grouped_label"
                  },
                  {
                    "text": "grouped_row",
                    "link": "/reference/pill_editor_core/inspector/fn.grouped_row"
                  },
                  {
                    "text": "hash_decorator",
                    "link": "/reference/pill_editor_core/inspector/fn.hash_decorator"
                  },
                  {
                    "text": "hash_value_kind",
                    "link": "/reference/pill_editor_core/inspector/fn.hash_value_kind"
                  },
                  {
                    "text": "is_cleared_reference",
                    "link": "/reference/pill_editor_core/inspector/fn.is_cleared_reference"
                  },
                  {
                    "text": "leaf_parts",
                    "link": "/reference/pill_editor_core/inspector/fn.leaf_parts"
                  },
                  {
                    "text": "names_type",
                    "link": "/reference/pill_editor_core/inspector/fn.names_type"
                  },
                  {
                    "text": "parse_entity_reference",
                    "link": "/reference/pill_editor_core/inspector/fn.parse_entity_reference"
                  },
                  {
                    "text": "parse_field_value",
                    "link": "/reference/pill_editor_core/inspector/fn.parse_field_value"
                  },
                  {
                    "text": "parse_settings_key_path",
                    "link": "/reference/pill_editor_core/inspector/fn.parse_settings_key_path"
                  },
                  {
                    "text": "parse_settings_value",
                    "link": "/reference/pill_editor_core/inspector/fn.parse_settings_value"
                  },
                  {
                    "text": "patch_settings",
                    "link": "/reference/pill_editor_core/inspector/fn.patch_settings"
                  },
                  {
                    "text": "patch_settings_inserting",
                    "link": "/reference/pill_editor_core/inspector/fn.patch_settings_inserting"
                  },
                  {
                    "text": "picker_candidates",
                    "link": "/reference/pill_editor_core/inspector/fn.picker_candidates"
                  },
                  {
                    "text": "reference_write",
                    "link": "/reference/pill_editor_core/inspector/fn.reference_write"
                  },
                  {
                    "text": "resource_coalesce_key",
                    "link": "/reference/pill_editor_core/inspector/fn.resource_coalesce_key"
                  },
                  {
                    "text": "resource_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.resource_edit"
                  },
                  {
                    "text": "row_layout",
                    "link": "/reference/pill_editor_core/inspector/fn.row_layout"
                  },
                  {
                    "text": "rows",
                    "link": "/reference/pill_editor_core/inspector/fn.rows"
                  },
                  {
                    "text": "selection_asset_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_asset_edit"
                  },
                  {
                    "text": "selection_element_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_element_edit"
                  },
                  {
                    "text": "selection_entity_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_entity_edit"
                  },
                  {
                    "text": "selection_field_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_field_edit"
                  },
                  {
                    "text": "selection_leaf_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_leaf_edit"
                  },
                  {
                    "text": "selection_stamp",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_stamp"
                  },
                  {
                    "text": "selection_targets",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_targets"
                  },
                  {
                    "text": "selection_targets_into",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_targets_into"
                  },
                  {
                    "text": "selection_write",
                    "link": "/reference/pill_editor_core/inspector/fn.selection_write"
                  },
                  {
                    "text": "settings_coalesce_key",
                    "link": "/reference/pill_editor_core/inspector/fn.settings_coalesce_key"
                  },
                  {
                    "text": "settings_edit",
                    "link": "/reference/pill_editor_core/inspector/fn.settings_edit"
                  },
                  {
                    "text": "settings_field",
                    "link": "/reference/pill_editor_core/inspector/fn.settings_field"
                  },
                  {
                    "text": "settings_key_text",
                    "link": "/reference/pill_editor_core/inspector/fn.settings_key_text"
                  },
                  {
                    "text": "short_component_name",
                    "link": "/reference/pill_editor_core/inspector/fn.short_component_name"
                  },
                  {
                    "text": "store_component_rows",
                    "link": "/reference/pill_editor_core/inspector/fn.store_component_rows"
                  },
                  {
                    "text": "take_component_rows",
                    "link": "/reference/pill_editor_core/inspector/fn.take_component_rows"
                  },
                  {
                    "text": "value_text",
                    "link": "/reference/pill_editor_core/inspector/fn.value_text"
                  },
                  {
                    "text": "widget_for",
                    "link": "/reference/pill_editor_core/inspector/fn.widget_for"
                  },
                  {
                    "text": "widget_for_decorated",
                    "link": "/reference/pill_editor_core/inspector/fn.widget_for_decorated"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "COLOR_CHANNELS",
                    "link": "/reference/pill_editor_core/inspector/constant.COLOR_CHANNELS"
                  },
                  {
                    "text": "COLOR_CHANNELS_MIN",
                    "link": "/reference/pill_editor_core/inspector/constant.COLOR_CHANNELS_MIN"
                  },
                  {
                    "text": "VECTOR_AXES",
                    "link": "/reference/pill_editor_core/inspector/constant.VECTOR_AXES"
                  },
                  {
                    "text": "VECTOR_AXES_MAX",
                    "link": "/reference/pill_editor_core/inspector/constant.VECTOR_AXES_MAX"
                  },
                  {
                    "text": "VECTOR_AXES_MIN",
                    "link": "/reference/pill_editor_core/inspector/constant.VECTOR_AXES_MIN"
                  }
                ]
              }
            ]
          },
          {
            "text": "layout",
            "link": "/reference/pill_editor_core/layout/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "dock",
                    "link": "/reference/pill_editor_core/layout/dock/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "EditorDock",
                            "link": "/reference/pill_editor_core/layout/dock/struct.EditorDock"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "EditorTab",
                            "link": "/reference/pill_editor_core/layout/dock/enum.EditorTab"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "activate_tab",
                            "link": "/reference/pill_editor_core/layout/dock/fn.activate_tab"
                          },
                          {
                            "text": "finite_rect",
                            "link": "/reference/pill_editor_core/layout/dock/fn.finite_rect"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "BOTTOM_ROW_FRACTION",
                            "link": "/reference/pill_editor_core/layout/dock/constant.BOTTOM_ROW_FRACTION"
                          },
                          {
                            "text": "INSPECTOR_COLUMN_FRACTION",
                            "link": "/reference/pill_editor_core/layout/dock/constant.INSPECTOR_COLUMN_FRACTION"
                          },
                          {
                            "text": "SIDE_COLUMN_FRACTION",
                            "link": "/reference/pill_editor_core/layout/dock/constant.SIDE_COLUMN_FRACTION"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "persistence",
                    "link": "/reference/pill_editor_core/layout/persistence/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "LayoutError",
                            "link": "/reference/pill_editor_core/layout/persistence/enum.LayoutError"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "append_beside",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.append_beside"
                          },
                          {
                            "text": "editor_state_directory",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.editor_state_directory"
                          },
                          {
                            "text": "layout_directory",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.layout_directory"
                          },
                          {
                            "text": "load_from_path",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.load_from_path"
                          },
                          {
                            "text": "load_or_default",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.load_or_default"
                          },
                          {
                            "text": "migrate",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.migrate"
                          },
                          {
                            "text": "reset_layout",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.reset_layout"
                          },
                          {
                            "text": "save",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.save"
                          },
                          {
                            "text": "save_to_path",
                            "link": "/reference/pill_editor_core/layout/persistence/fn.save_to_path"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "APPLICATION_DIRECTORY",
                            "link": "/reference/pill_editor_core/layout/persistence/constant.APPLICATION_DIRECTORY"
                          },
                          {
                            "text": "LAYOUT_FILE",
                            "link": "/reference/pill_editor_core/layout/persistence/constant.LAYOUT_FILE"
                          },
                          {
                            "text": "LAYOUT_SCHEMA_VERSION",
                            "link": "/reference/pill_editor_core/layout/persistence/constant.LAYOUT_SCHEMA_VERSION"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "recovery",
                    "link": "/reference/pill_editor_core/layout/recovery/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RecoveryDocument",
                            "link": "/reference/pill_editor_core/layout/recovery/struct.RecoveryDocument"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "read",
                            "link": "/reference/pill_editor_core/layout/recovery/fn.read"
                          },
                          {
                            "text": "recovery_path",
                            "link": "/reference/pill_editor_core/layout/recovery/fn.recovery_path"
                          },
                          {
                            "text": "remove",
                            "link": "/reference/pill_editor_core/layout/recovery/fn.remove"
                          },
                          {
                            "text": "write",
                            "link": "/reference/pill_editor_core/layout/recovery/fn.write"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RECOVERY_FILE",
                            "link": "/reference/pill_editor_core/layout/recovery/constant.RECOVERY_FILE"
                          },
                          {
                            "text": "RECOVERY_VERSION",
                            "link": "/reference/pill_editor_core/layout/recovery/constant.RECOVERY_VERSION"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "menubar",
            "link": "/reference/pill_editor_core/menubar/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "MenuView",
                    "link": "/reference/pill_editor_core/menubar/struct.MenuView"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "Menu",
                    "link": "/reference/pill_editor_core/menubar/enum.Menu"
                  },
                  {
                    "text": "MenuAction",
                    "link": "/reference/pill_editor_core/menubar/enum.MenuAction"
                  },
                  {
                    "text": "MenuEntry",
                    "link": "/reference/pill_editor_core/menubar/enum.MenuEntry"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "action_for",
                    "link": "/reference/pill_editor_core/menubar/fn.action_for"
                  },
                  {
                    "text": "entries",
                    "link": "/reference/pill_editor_core/menubar/fn.entries"
                  },
                  {
                    "text": "mark_rect",
                    "link": "/reference/pill_editor_core/menubar/fn.mark_rect"
                  },
                  {
                    "text": "menu_entry_for_command",
                    "link": "/reference/pill_editor_core/menubar/fn.menu_entry_for_command"
                  },
                  {
                    "text": "menu_row_for_toolbox_item",
                    "link": "/reference/pill_editor_core/menubar/fn.menu_row_for_toolbox_item"
                  },
                  {
                    "text": "selected_scene_path",
                    "link": "/reference/pill_editor_core/menubar/fn.selected_scene_path"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MENU_BAR_HEIGHT",
                    "link": "/reference/pill_editor_core/menubar/constant.MENU_BAR_HEIGHT"
                  },
                  {
                    "text": "MENU_MARK_GAP",
                    "link": "/reference/pill_editor_core/menubar/constant.MENU_MARK_GAP"
                  },
                  {
                    "text": "MENU_MARK_LEFT",
                    "link": "/reference/pill_editor_core/menubar/constant.MENU_MARK_LEFT"
                  },
                  {
                    "text": "MENU_MARK_SIDE",
                    "link": "/reference/pill_editor_core/menubar/constant.MENU_MARK_SIDE"
                  },
                  {
                    "text": "MENU_TITLE_COUNT",
                    "link": "/reference/pill_editor_core/menubar/constant.MENU_TITLE_COUNT"
                  }
                ]
              }
            ]
          },
          {
            "text": "notices",
            "link": "/reference/pill_editor_core/notices/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EditorNotices",
                    "link": "/reference/pill_editor_core/notices/struct.EditorNotices"
                  },
                  {
                    "text": "Notice",
                    "link": "/reference/pill_editor_core/notices/struct.Notice"
                  },
                  {
                    "text": "ProblemRow",
                    "link": "/reference/pill_editor_core/notices/struct.ProblemRow"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "NoticeLevel",
                    "link": "/reference/pill_editor_core/notices/enum.NoticeLevel"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "level_name",
                    "link": "/reference/pill_editor_core/notices/fn.level_name"
                  }
                ]
              }
            ]
          },
          {
            "text": "panels",
            "link": "/reference/pill_editor_core/panels/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ModuleLiveness",
                    "link": "/reference/pill_editor_core/panels/struct.ModuleLiveness"
                  },
                  {
                    "text": "PanelAnswer",
                    "link": "/reference/pill_editor_core/panels/struct.PanelAnswer"
                  },
                  {
                    "text": "PanelCommands",
                    "link": "/reference/pill_editor_core/panels/struct.PanelCommands"
                  },
                  {
                    "text": "PanelComponentValues",
                    "link": "/reference/pill_editor_core/panels/struct.PanelComponentValues"
                  },
                  {
                    "text": "PanelContext",
                    "link": "/reference/pill_editor_core/panels/struct.PanelContext"
                  },
                  {
                    "text": "PanelEntityDetail",
                    "link": "/reference/pill_editor_core/panels/struct.PanelEntityDetail"
                  },
                  {
                    "text": "PanelEntityRow",
                    "link": "/reference/pill_editor_core/panels/struct.PanelEntityRow"
                  },
                  {
                    "text": "PanelFieldValue",
                    "link": "/reference/pill_editor_core/panels/struct.PanelFieldValue"
                  },
                  {
                    "text": "PanelRegistration",
                    "link": "/reference/pill_editor_core/panels/struct.PanelRegistration"
                  },
                  {
                    "text": "PanelRegistrations",
                    "link": "/reference/pill_editor_core/panels/struct.PanelRegistrations"
                  },
                  {
                    "text": "PanelRegistry",
                    "link": "/reference/pill_editor_core/panels/struct.PanelRegistry"
                  },
                  {
                    "text": "PanelRequest",
                    "link": "/reference/pill_editor_core/panels/struct.PanelRequest"
                  },
                  {
                    "text": "PanelWindowRequest",
                    "link": "/reference/pill_editor_core/panels/struct.PanelWindowRequest"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "PanelCommand",
                    "link": "/reference/pill_editor_core/panels/enum.PanelCommand"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "PanelDrawFn",
                    "link": "/reference/pill_editor_core/panels/type.PanelDrawFn"
                  }
                ]
              }
            ]
          },
          {
            "text": "preferences",
            "link": "/reference/pill_editor_core/preferences/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "PreferenceField",
                    "link": "/reference/pill_editor_core/preferences/struct.PreferenceField"
                  },
                  {
                    "text": "PreferencesView",
                    "link": "/reference/pill_editor_core/preferences/struct.PreferencesView"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "display_value",
                    "link": "/reference/pill_editor_core/preferences/fn.display_value"
                  },
                  {
                    "text": "gizmo_hit_radius",
                    "link": "/reference/pill_editor_core/preferences/fn.gizmo_hit_radius"
                  },
                  {
                    "text": "gizmo_icon_size",
                    "link": "/reference/pill_editor_core/preferences/fn.gizmo_icon_size"
                  },
                  {
                    "text": "keymap_preset",
                    "link": "/reference/pill_editor_core/preferences/fn.keymap_preset"
                  },
                  {
                    "text": "lookup",
                    "link": "/reference/pill_editor_core/preferences/fn.lookup"
                  },
                  {
                    "text": "parse_document",
                    "link": "/reference/pill_editor_core/preferences/fn.parse_document"
                  },
                  {
                    "text": "parse_value",
                    "link": "/reference/pill_editor_core/preferences/fn.parse_value"
                  },
                  {
                    "text": "read_document",
                    "link": "/reference/pill_editor_core/preferences/fn.read_document"
                  },
                  {
                    "text": "set_key",
                    "link": "/reference/pill_editor_core/preferences/fn.set_key"
                  },
                  {
                    "text": "update",
                    "link": "/reference/pill_editor_core/preferences/fn.update"
                  },
                  {
                    "text": "write_document",
                    "link": "/reference/pill_editor_core/preferences/fn.write_document"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "PreferencesDraft",
                    "link": "/reference/pill_editor_core/preferences/type.PreferencesDraft"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "GIZMO_HIT_RADIUS_DEFAULT",
                    "link": "/reference/pill_editor_core/preferences/constant.GIZMO_HIT_RADIUS_DEFAULT"
                  },
                  {
                    "text": "GIZMO_HIT_RADIUS_KEY",
                    "link": "/reference/pill_editor_core/preferences/constant.GIZMO_HIT_RADIUS_KEY"
                  },
                  {
                    "text": "GIZMO_HIT_RADIUS_RANGE",
                    "link": "/reference/pill_editor_core/preferences/constant.GIZMO_HIT_RADIUS_RANGE"
                  },
                  {
                    "text": "GIZMO_ICON_SIZE_DEFAULT",
                    "link": "/reference/pill_editor_core/preferences/constant.GIZMO_ICON_SIZE_DEFAULT"
                  },
                  {
                    "text": "GIZMO_ICON_SIZE_KEY",
                    "link": "/reference/pill_editor_core/preferences/constant.GIZMO_ICON_SIZE_KEY"
                  },
                  {
                    "text": "GIZMO_ICON_SIZE_RANGE",
                    "link": "/reference/pill_editor_core/preferences/constant.GIZMO_ICON_SIZE_RANGE"
                  },
                  {
                    "text": "KEYMAP_PRESET_KEY",
                    "link": "/reference/pill_editor_core/preferences/constant.KEYMAP_PRESET_KEY"
                  },
                  {
                    "text": "PREFERENCE_FIELDS",
                    "link": "/reference/pill_editor_core/preferences/constant.PREFERENCE_FIELDS"
                  },
                  {
                    "text": "THEME_PREFERENCE_KEY",
                    "link": "/reference/pill_editor_core/preferences/constant.THEME_PREFERENCE_KEY"
                  }
                ]
              }
            ]
          },
          {
            "text": "previews",
            "link": "/reference/pill_editor_core/previews/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "preview_asset",
                    "link": "/reference/pill_editor_core/previews/fn.preview_asset"
                  },
                  {
                    "text": "preview_asset_for",
                    "link": "/reference/pill_editor_core/previews/fn.preview_asset_for"
                  },
                  {
                    "text": "preview_file_path",
                    "link": "/reference/pill_editor_core/previews/fn.preview_file_path"
                  },
                  {
                    "text": "render_previews",
                    "link": "/reference/pill_editor_core/previews/fn.render_previews"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "RENDER_PREVIEWS_KEY",
                    "link": "/reference/pill_editor_core/previews/constant.RENDER_PREVIEWS_KEY"
                  }
                ]
              }
            ]
          },
          {
            "text": "problems",
            "link": "/reference/pill_editor_core/problems/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Problem",
                    "link": "/reference/pill_editor_core/problems/struct.Problem"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "Severity",
                    "link": "/reference/pill_editor_core/problems/enum.Severity"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "parse_build_output",
                    "link": "/reference/pill_editor_core/problems/fn.parse_build_output"
                  },
                  {
                    "text": "parse_header",
                    "link": "/reference/pill_editor_core/problems/fn.parse_header"
                  },
                  {
                    "text": "parse_span",
                    "link": "/reference/pill_editor_core/problems/fn.parse_span"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "SPAN_LOOKAHEAD",
                    "link": "/reference/pill_editor_core/problems/constant.SPAN_LOOKAHEAD"
                  }
                ]
              }
            ]
          },
          {
            "text": "requests",
            "link": "/reference/pill_editor_core/requests/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ShellRequests",
                    "link": "/reference/pill_editor_core/requests/struct.ShellRequests"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "HistoryRequest",
                    "link": "/reference/pill_editor_core/requests/enum.HistoryRequest"
                  }
                ]
              }
            ]
          },
          {
            "text": "resources",
            "link": "/reference/pill_editor_core/resources/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ResourceEntry",
                    "link": "/reference/pill_editor_core/resources/struct.ResourceEntry"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "entry",
                    "link": "/reference/pill_editor_core/resources/fn.entry"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "EDITABLE_RESOURCES",
                    "link": "/reference/pill_editor_core/resources/constant.EDITABLE_RESOURCES"
                  }
                ]
              }
            ]
          },
          {
            "text": "scene_workflow",
            "link": "/reference/pill_editor_core/scene_workflow/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "OpenScene",
                    "link": "/reference/pill_editor_core/scene_workflow/struct.OpenScene"
                  },
                  {
                    "text": "SceneSession",
                    "link": "/reference/pill_editor_core/scene_workflow/struct.SceneSession"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "clear_world",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.clear_world"
                  },
                  {
                    "text": "default_save_path",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.default_save_path"
                  },
                  {
                    "text": "existing_guid",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.existing_guid"
                  },
                  {
                    "text": "fresh_guid",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.fresh_guid"
                  },
                  {
                    "text": "is_document_command",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.is_document_command"
                  },
                  {
                    "text": "mark_dirty",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.mark_dirty"
                  },
                  {
                    "text": "new_scene",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.new_scene"
                  },
                  {
                    "text": "open_scene",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.open_scene"
                  },
                  {
                    "text": "reset_document_state",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.reset_document_state"
                  },
                  {
                    "text": "scene_file_name",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.scene_file_name"
                  },
                  {
                    "text": "write_scene",
                    "link": "/reference/pill_editor_core/scene_workflow/fn.write_scene"
                  }
                ]
              }
            ]
          },
          {
            "text": "scripted",
            "link": "/reference/pill_editor_core/scripted/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Cursor",
                    "link": "/reference/pill_editor_core/scripted/struct.Cursor"
                  },
                  {
                    "text": "KeyChord",
                    "link": "/reference/pill_editor_core/scripted/struct.KeyChord"
                  },
                  {
                    "text": "ParseError",
                    "link": "/reference/pill_editor_core/scripted/struct.ParseError"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetEdit",
                    "link": "/reference/pill_editor_core/scripted/enum.AssetEdit"
                  },
                  {
                    "text": "Dump",
                    "link": "/reference/pill_editor_core/scripted/enum.Dump"
                  },
                  {
                    "text": "PaletteRequest",
                    "link": "/reference/pill_editor_core/scripted/enum.PaletteRequest"
                  },
                  {
                    "text": "ScriptedCommand",
                    "link": "/reference/pill_editor_core/scripted/enum.ScriptedCommand"
                  },
                  {
                    "text": "ToolbarAction",
                    "link": "/reference/pill_editor_core/scripted/enum.ToolbarAction"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset_edit",
                    "link": "/reference/pill_editor_core/scripted/fn.asset_edit"
                  },
                  {
                    "text": "camera",
                    "link": "/reference/pill_editor_core/scripted/fn.camera"
                  },
                  {
                    "text": "chord",
                    "link": "/reference/pill_editor_core/scripted/fn.chord"
                  },
                  {
                    "text": "command",
                    "link": "/reference/pill_editor_core/scripted/fn.command"
                  },
                  {
                    "text": "dialog",
                    "link": "/reference/pill_editor_core/scripted/fn.dialog"
                  },
                  {
                    "text": "digit_key",
                    "link": "/reference/pill_editor_core/scripted/fn.digit_key"
                  },
                  {
                    "text": "dump",
                    "link": "/reference/pill_editor_core/scripted/fn.dump"
                  },
                  {
                    "text": "edit",
                    "link": "/reference/pill_editor_core/scripted/fn.edit"
                  },
                  {
                    "text": "gizmo",
                    "link": "/reference/pill_editor_core/scripted/fn.gizmo"
                  },
                  {
                    "text": "gizmo_mode",
                    "link": "/reference/pill_editor_core/scripted/fn.gizmo_mode"
                  },
                  {
                    "text": "key_code",
                    "link": "/reference/pill_editor_core/scripted/fn.key_code"
                  },
                  {
                    "text": "key_code_name",
                    "link": "/reference/pill_editor_core/scripted/fn.key_code_name"
                  },
                  {
                    "text": "letter_key",
                    "link": "/reference/pill_editor_core/scripted/fn.letter_key"
                  },
                  {
                    "text": "number",
                    "link": "/reference/pill_editor_core/scripted/fn.number"
                  },
                  {
                    "text": "pick",
                    "link": "/reference/pill_editor_core/scripted/fn.pick"
                  },
                  {
                    "text": "point",
                    "link": "/reference/pill_editor_core/scripted/fn.point"
                  },
                  {
                    "text": "scene_action",
                    "link": "/reference/pill_editor_core/scripted/fn.scene_action"
                  },
                  {
                    "text": "tab",
                    "link": "/reference/pill_editor_core/scripted/fn.tab"
                  },
                  {
                    "text": "tab_by_name",
                    "link": "/reference/pill_editor_core/scripted/fn.tab_by_name"
                  },
                  {
                    "text": "toolbar_action",
                    "link": "/reference/pill_editor_core/scripted/fn.toolbar_action"
                  },
                  {
                    "text": "unquote",
                    "link": "/reference/pill_editor_core/scripted/fn.unquote"
                  }
                ]
              }
            ]
          },
          {
            "text": "session",
            "link": "/reference/pill_editor_core/session/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ContextClaim",
                    "link": "/reference/pill_editor_core/session/struct.ContextClaim"
                  },
                  {
                    "text": "EguiShellState",
                    "link": "/reference/pill_editor_core/session/struct.EguiShellState"
                  },
                  {
                    "text": "InspectorSession",
                    "link": "/reference/pill_editor_core/session/struct.InspectorSession"
                  },
                  {
                    "text": "LoggedRects",
                    "link": "/reference/pill_editor_core/session/struct.LoggedRects"
                  },
                  {
                    "text": "LoggedTexts",
                    "link": "/reference/pill_editor_core/session/struct.LoggedTexts"
                  },
                  {
                    "text": "MenubarSession",
                    "link": "/reference/pill_editor_core/session/struct.MenubarSession"
                  },
                  {
                    "text": "PaletteState",
                    "link": "/reference/pill_editor_core/session/struct.PaletteState"
                  },
                  {
                    "text": "PanelBudget",
                    "link": "/reference/pill_editor_core/session/struct.PanelBudget"
                  },
                  {
                    "text": "PanelTiming",
                    "link": "/reference/pill_editor_core/session/struct.PanelTiming"
                  },
                  {
                    "text": "PanelWindowAnswer",
                    "link": "/reference/pill_editor_core/session/struct.PanelWindowAnswer"
                  },
                  {
                    "text": "PanelWindowSession",
                    "link": "/reference/pill_editor_core/session/struct.PanelWindowSession"
                  },
                  {
                    "text": "PanelWindowState",
                    "link": "/reference/pill_editor_core/session/struct.PanelWindowState"
                  },
                  {
                    "text": "PreviewStates",
                    "link": "/reference/pill_editor_core/session/struct.PreviewStates"
                  },
                  {
                    "text": "StatisticsSession",
                    "link": "/reference/pill_editor_core/session/struct.StatisticsSession"
                  },
                  {
                    "text": "TabTiming",
                    "link": "/reference/pill_editor_core/session/struct.TabTiming"
                  },
                  {
                    "text": "Toast",
                    "link": "/reference/pill_editor_core/session/struct.Toast"
                  },
                  {
                    "text": "ToastSession",
                    "link": "/reference/pill_editor_core/session/struct.ToastSession"
                  },
                  {
                    "text": "ToolboxSession",
                    "link": "/reference/pill_editor_core/session/struct.ToolboxSession"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "MenubarSlot",
                    "link": "/reference/pill_editor_core/session/enum.MenubarSlot"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "smooth_sample",
                    "link": "/reference/pill_editor_core/session/fn.smooth_sample"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PANEL_BUDGET_FRAMES",
                    "link": "/reference/pill_editor_core/session/constant.PANEL_BUDGET_FRAMES"
                  },
                  {
                    "text": "PANEL_BUDGET_MICROS",
                    "link": "/reference/pill_editor_core/session/constant.PANEL_BUDGET_MICROS"
                  },
                  {
                    "text": "PANEL_WINDOWS_MAX",
                    "link": "/reference/pill_editor_core/session/constant.PANEL_WINDOWS_MAX"
                  },
                  {
                    "text": "TOAST_FRAMES",
                    "link": "/reference/pill_editor_core/session/constant.TOAST_FRAMES"
                  },
                  {
                    "text": "TOASTS_MAX",
                    "link": "/reference/pill_editor_core/session/constant.TOASTS_MAX"
                  }
                ]
              }
            ]
          },
          {
            "text": "state_watch",
            "link": "/reference/pill_editor_core/state_watch/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FileStamp",
                    "link": "/reference/pill_editor_core/state_watch/struct.FileStamp"
                  },
                  {
                    "text": "StateFileWatch",
                    "link": "/reference/pill_editor_core/state_watch/struct.StateFileWatch"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "STATE_FILE_POLL_FRAMES",
                    "link": "/reference/pill_editor_core/state_watch/constant.STATE_FILE_POLL_FRAMES"
                  }
                ]
              }
            ]
          },
          {
            "text": "style",
            "link": "/reference/pill_editor_core/style/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Palette",
                    "link": "/reference/pill_editor_core/style/struct.Palette"
                  },
                  {
                    "text": "ResolvedTheme",
                    "link": "/reference/pill_editor_core/style/struct.ResolvedTheme"
                  },
                  {
                    "text": "ThemeLayerInfo",
                    "link": "/reference/pill_editor_core/style/struct.ThemeLayerInfo"
                  },
                  {
                    "text": "ThemeMerge",
                    "link": "/reference/pill_editor_core/style/struct.ThemeMerge"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ThemeLayer",
                    "link": "/reference/pill_editor_core/style/enum.ThemeLayer"
                  },
                  {
                    "text": "UserThemeSelection",
                    "link": "/reference/pill_editor_core/style/enum.UserThemeSelection"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "accent",
                    "link": "/reference/pill_editor_core/style/fn.accent"
                  },
                  {
                    "text": "accent_hot",
                    "link": "/reference/pill_editor_core/style/fn.accent_hot"
                  },
                  {
                    "text": "append_fonts",
                    "link": "/reference/pill_editor_core/style/fn.append_fonts"
                  },
                  {
                    "text": "apply",
                    "link": "/reference/pill_editor_core/style/fn.apply"
                  },
                  {
                    "text": "apply_theme",
                    "link": "/reference/pill_editor_core/style/fn.apply_theme"
                  },
                  {
                    "text": "control",
                    "link": "/reference/pill_editor_core/style/fn.control"
                  },
                  {
                    "text": "current_layers",
                    "link": "/reference/pill_editor_core/style/fn.current_layers"
                  },
                  {
                    "text": "current_theme",
                    "link": "/reference/pill_editor_core/style/fn.current_theme"
                  },
                  {
                    "text": "danger",
                    "link": "/reference/pill_editor_core/style/fn.danger"
                  },
                  {
                    "text": "default_theme",
                    "link": "/reference/pill_editor_core/style/fn.default_theme"
                  },
                  {
                    "text": "dock_style",
                    "link": "/reference/pill_editor_core/style/fn.dock_style"
                  },
                  {
                    "text": "frame",
                    "link": "/reference/pill_editor_core/style/fn.frame"
                  },
                  {
                    "text": "generation",
                    "link": "/reference/pill_editor_core/style/fn.generation"
                  },
                  {
                    "text": "layers_text",
                    "link": "/reference/pill_editor_core/style/fn.layers_text"
                  },
                  {
                    "text": "line",
                    "link": "/reference/pill_editor_core/style/fn.line"
                  },
                  {
                    "text": "log_debug",
                    "link": "/reference/pill_editor_core/style/fn.log_debug"
                  },
                  {
                    "text": "log_error",
                    "link": "/reference/pill_editor_core/style/fn.log_error"
                  },
                  {
                    "text": "log_info",
                    "link": "/reference/pill_editor_core/style/fn.log_info"
                  },
                  {
                    "text": "log_warn",
                    "link": "/reference/pill_editor_core/style/fn.log_warn"
                  },
                  {
                    "text": "merge_layers",
                    "link": "/reference/pill_editor_core/style/fn.merge_layers"
                  },
                  {
                    "text": "overlay",
                    "link": "/reference/pill_editor_core/style/fn.overlay"
                  },
                  {
                    "text": "overlay_border",
                    "link": "/reference/pill_editor_core/style/fn.overlay_border"
                  },
                  {
                    "text": "palette",
                    "link": "/reference/pill_editor_core/style/fn.palette"
                  },
                  {
                    "text": "panel",
                    "link": "/reference/pill_editor_core/style/fn.panel"
                  },
                  {
                    "text": "panel_raised",
                    "link": "/reference/pill_editor_core/style/fn.panel_raised"
                  },
                  {
                    "text": "read_resolved_theme",
                    "link": "/reference/pill_editor_core/style/fn.read_resolved_theme"
                  },
                  {
                    "text": "resolved_theme",
                    "link": "/reference/pill_editor_core/style/fn.resolved_theme"
                  },
                  {
                    "text": "selected_row",
                    "link": "/reference/pill_editor_core/style/fn.selected_row"
                  },
                  {
                    "text": "selected_row_bar",
                    "link": "/reference/pill_editor_core/style/fn.selected_row_bar"
                  },
                  {
                    "text": "selection",
                    "link": "/reference/pill_editor_core/style/fn.selection"
                  },
                  {
                    "text": "selection_bar",
                    "link": "/reference/pill_editor_core/style/fn.selection_bar"
                  },
                  {
                    "text": "shadow",
                    "link": "/reference/pill_editor_core/style/fn.shadow"
                  },
                  {
                    "text": "success",
                    "link": "/reference/pill_editor_core/style/fn.success"
                  },
                  {
                    "text": "tab_face",
                    "link": "/reference/pill_editor_core/style/fn.tab_face"
                  },
                  {
                    "text": "text",
                    "link": "/reference/pill_editor_core/style/fn.text"
                  },
                  {
                    "text": "text_muted",
                    "link": "/reference/pill_editor_core/style/fn.text_muted"
                  },
                  {
                    "text": "text_strong",
                    "link": "/reference/pill_editor_core/style/fn.text_strong"
                  },
                  {
                    "text": "to_egui_color",
                    "link": "/reference/pill_editor_core/style/fn.to_egui_color"
                  },
                  {
                    "text": "warning",
                    "link": "/reference/pill_editor_core/style/fn.warning"
                  },
                  {
                    "text": "well",
                    "link": "/reference/pill_editor_core/style/fn.well"
                  },
                  {
                    "text": "widget_style",
                    "link": "/reference/pill_editor_core/style/fn.widget_style"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "BODY_FONT_BYTES",
                    "link": "/reference/pill_editor_core/style/constant.BODY_FONT_BYTES"
                  },
                  {
                    "text": "BODY_FONT_KEY",
                    "link": "/reference/pill_editor_core/style/constant.BODY_FONT_KEY"
                  },
                  {
                    "text": "MONOSPACE_FONT_BYTES",
                    "link": "/reference/pill_editor_core/style/constant.MONOSPACE_FONT_BYTES"
                  },
                  {
                    "text": "MONOSPACE_FONT_KEY",
                    "link": "/reference/pill_editor_core/style/constant.MONOSPACE_FONT_KEY"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "RESOLVED_THEME",
                    "link": "/reference/pill_editor_core/style/static.RESOLVED_THEME"
                  }
                ]
              }
            ]
          },
          {
            "text": "systems",
            "link": "/reference/pill_editor_core/systems/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "pause_button_label",
                    "link": "/reference/pill_editor_core/systems/fn.pause_button_label"
                  },
                  {
                    "text": "pause_toggle_command",
                    "link": "/reference/pill_editor_core/systems/fn.pause_toggle_command"
                  },
                  {
                    "text": "system_row_label",
                    "link": "/reference/pill_editor_core/systems/fn.system_row_label"
                  },
                  {
                    "text": "system_state_label",
                    "link": "/reference/pill_editor_core/systems/fn.system_state_label"
                  },
                  {
                    "text": "system_toggle",
                    "link": "/reference/pill_editor_core/systems/fn.system_toggle"
                  }
                ]
              }
            ]
          },
          {
            "text": "toolbox",
            "link": "/reference/pill_editor_core/toolbox/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "SpaceRow",
                    "link": "/reference/pill_editor_core/toolbox/struct.SpaceRow"
                  },
                  {
                    "text": "ToolboxState",
                    "link": "/reference/pill_editor_core/toolbox/struct.ToolboxState"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ToolboxItem",
                    "link": "/reference/pill_editor_core/toolbox/enum.ToolboxItem"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "clamped_origin",
                    "link": "/reference/pill_editor_core/toolbox/fn.clamped_origin"
                  },
                  {
                    "text": "default_origin",
                    "link": "/reference/pill_editor_core/toolbox/fn.default_origin"
                  },
                  {
                    "text": "handle_rect",
                    "link": "/reference/pill_editor_core/toolbox/fn.handle_rect"
                  },
                  {
                    "text": "item_rect",
                    "link": "/reference/pill_editor_core/toolbox/fn.item_rect"
                  },
                  {
                    "text": "mode_command",
                    "link": "/reference/pill_editor_core/toolbox/fn.mode_command"
                  },
                  {
                    "text": "panel_rect",
                    "link": "/reference/pill_editor_core/toolbox/fn.panel_rect"
                  },
                  {
                    "text": "panel_size",
                    "link": "/reference/pill_editor_core/toolbox/fn.panel_size"
                  },
                  {
                    "text": "space_command",
                    "link": "/reference/pill_editor_core/toolbox/fn.space_command"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "SPACE_ROWS",
                    "link": "/reference/pill_editor_core/toolbox/constant.SPACE_ROWS"
                  },
                  {
                    "text": "TOOL_ROWS",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOL_ROWS"
                  },
                  {
                    "text": "TOOLBOX_HANDLE_HEIGHT",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOLBOX_HANDLE_HEIGHT"
                  },
                  {
                    "text": "TOOLBOX_ITEM_GAP",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOLBOX_ITEM_GAP"
                  },
                  {
                    "text": "TOOLBOX_ITEM_HEIGHT",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOLBOX_ITEM_HEIGHT"
                  },
                  {
                    "text": "TOOLBOX_ITEMS",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOLBOX_ITEMS"
                  },
                  {
                    "text": "TOOLBOX_MARGIN",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOLBOX_MARGIN"
                  },
                  {
                    "text": "TOOLBOX_PADDING",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOLBOX_PADDING"
                  },
                  {
                    "text": "TOOLBOX_WIDTH",
                    "link": "/reference/pill_editor_core/toolbox/constant.TOOLBOX_WIDTH"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Editor Shell Egui Editor",
    "link": "/reference/pill_editor_shell_egui_editor/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "shell",
            "link": "/reference/pill_editor_shell_egui_editor/shell/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "assets_tiles",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "AssetTileWrites",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/struct.AssetTileWrites"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "asset_container_menu",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.asset_container_menu"
                          },
                          {
                            "text": "asset_dialog_window",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.asset_dialog_window"
                          },
                          {
                            "text": "asset_icon",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.asset_icon"
                          },
                          {
                            "text": "asset_menu_items",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.asset_menu_items"
                          },
                          {
                            "text": "asset_tile",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.asset_tile"
                          },
                          {
                            "text": "asset_type_icon",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.asset_type_icon"
                          },
                          {
                            "text": "remember_pane_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.remember_pane_rect"
                          },
                          {
                            "text": "remember_tile_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.remember_tile_rect"
                          },
                          {
                            "text": "remember_tree_row_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.remember_tree_row_rect"
                          },
                          {
                            "text": "tile_name_job",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/fn.tile_name_job"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ASSETS_TILE_BADGE_SIZE",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/constant.ASSETS_TILE_BADGE_SIZE"
                          },
                          {
                            "text": "ASSETS_TILE_CORNER_RADIUS",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/constant.ASSETS_TILE_CORNER_RADIUS"
                          },
                          {
                            "text": "ASSETS_TILE_GAP",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/constant.ASSETS_TILE_GAP"
                          },
                          {
                            "text": "ASSETS_TILE_ICON_INSET",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/constant.ASSETS_TILE_ICON_INSET"
                          },
                          {
                            "text": "ASSETS_TILE_LABEL_GAP",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/constant.ASSETS_TILE_LABEL_GAP"
                          },
                          {
                            "text": "ASSETS_TILE_LABEL_HEIGHT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/constant.ASSETS_TILE_LABEL_HEIGHT"
                          },
                          {
                            "text": "ASSETS_TILE_LABEL_ROWS",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/assets_tiles/constant.ASSETS_TILE_LABEL_ROWS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "bar",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/bar/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "about_window",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/bar/fn.about_window"
                          },
                          {
                            "text": "menu_bar",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/bar/fn.menu_bar"
                          },
                          {
                            "text": "menu_body",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/bar/fn.menu_body"
                          },
                          {
                            "text": "run_menu_action",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/bar/fn.run_menu_action"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "MENU_TITLE_GAP",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/bar/constant.MENU_TITLE_GAP"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "chrome",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "FloatingPopup",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/struct.FloatingPopup"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "apply_tab_redock",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.apply_tab_redock"
                          },
                          {
                            "text": "claim_pointer",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.claim_pointer"
                          },
                          {
                            "text": "click_from_modifiers",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.click_from_modifiers"
                          },
                          {
                            "text": "context_menu",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.context_menu"
                          },
                          {
                            "text": "empty_area",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.empty_area"
                          },
                          {
                            "text": "engine_badge",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.engine_badge"
                          },
                          {
                            "text": "floating_popup",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.floating_popup"
                          },
                          {
                            "text": "gizmo_mode_label",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.gizmo_mode_label"
                          },
                          {
                            "text": "gizmo_space_label",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.gizmo_space_label"
                          },
                          {
                            "text": "log_context_menu",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.log_context_menu"
                          },
                          {
                            "text": "mark_menu_region",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.mark_menu_region"
                          },
                          {
                            "text": "paint_active_tab_underline",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.paint_active_tab_underline"
                          },
                          {
                            "text": "remember_moved_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.remember_moved_rect"
                          },
                          {
                            "text": "report_selection_change",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.report_selection_change"
                          },
                          {
                            "text": "select_asset",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.select_asset"
                          },
                          {
                            "text": "select_entity",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.select_entity"
                          },
                          {
                            "text": "select_entity_click",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.select_entity_click"
                          },
                          {
                            "text": "tab_icon",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/chrome/fn.tab_icon"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "claim",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/claim/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "claim_context_once",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/claim/fn.claim_context_once"
                          },
                          {
                            "text": "claim_shell_context",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/claim/fn.claim_shell_context"
                          }
                        ]
                      },
                      {
                        "text": "Statics",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CONTEXT_CLAIMED",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/claim/static.CONTEXT_CLAIMED"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "inspector_fields",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "AssetRowInput",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/struct.AssetRowInput"
                          },
                          {
                            "text": "EntityRowInput",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/struct.EntityRowInput"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "color_channels",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.color_channels"
                          },
                          {
                            "text": "field_widget_name",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.field_widget_name"
                          },
                          {
                            "text": "inspector_asset_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.inspector_asset_row"
                          },
                          {
                            "text": "inspector_entity_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.inspector_entity_row"
                          },
                          {
                            "text": "inspector_field_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.inspector_field_row"
                          },
                          {
                            "text": "inspector_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.inspector_row"
                          },
                          {
                            "text": "is_scalar_field",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.is_scalar_field"
                          },
                          {
                            "text": "leaf_values",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.leaf_values"
                          },
                          {
                            "text": "queue_element_edit",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.queue_element_edit"
                          },
                          {
                            "text": "queue_field_edit",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.queue_field_edit"
                          },
                          {
                            "text": "record_row_placement",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.record_row_placement"
                          },
                          {
                            "text": "remember_asset_row_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.remember_asset_row_rect"
                          },
                          {
                            "text": "remember_asset_row_text",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.remember_asset_row_text"
                          },
                          {
                            "text": "remember_entity_row_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.remember_entity_row_rect"
                          },
                          {
                            "text": "remember_entity_row_text",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.remember_entity_row_text"
                          },
                          {
                            "text": "row_is_mixed",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.row_is_mixed"
                          },
                          {
                            "text": "row_label",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/fn.row_label"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ASSET_PICKER_HEIGHT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/constant.ASSET_PICKER_HEIGHT"
                          },
                          {
                            "text": "ASSET_ROW_CLEAR_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/constant.ASSET_ROW_CLEAR_WIDTH"
                          }
                        ]
                      },
                      {
                        "text": "Macros",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "log_row_once",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_fields/macro.log_row_once"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "inspector_settings",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ListEntryDrag",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/struct.ListEntryDrag"
                          },
                          {
                            "text": "SettingsWalk",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/struct.SettingsWalk"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "asset_settings_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.asset_settings_row"
                          },
                          {
                            "text": "asset_settings_rows",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.asset_settings_rows"
                          },
                          {
                            "text": "colour_parameter",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.colour_parameter"
                          },
                          {
                            "text": "colour_parameter_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.colour_parameter_row"
                          },
                          {
                            "text": "dropped_asset_path",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.dropped_asset_path"
                          },
                          {
                            "text": "insertion_index",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.insertion_index"
                          },
                          {
                            "text": "list_append_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.list_append_row"
                          },
                          {
                            "text": "list_drag_update",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.list_drag_update"
                          },
                          {
                            "text": "list_entry_field",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.list_entry_field"
                          },
                          {
                            "text": "list_picker_width",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.list_picker_width"
                          },
                          {
                            "text": "moved_entry",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.moved_entry"
                          },
                          {
                            "text": "reference_candidates",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_candidates"
                          },
                          {
                            "text": "reference_entries",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_entries"
                          },
                          {
                            "text": "reference_family",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_family"
                          },
                          {
                            "text": "reference_guid",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_guid"
                          },
                          {
                            "text": "reference_list_entry_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_list_entry_row"
                          },
                          {
                            "text": "reference_list_rows",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_list_rows"
                          },
                          {
                            "text": "reference_path",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_path"
                          },
                          {
                            "text": "reference_picker",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_picker"
                          },
                          {
                            "text": "reference_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_row"
                          },
                          {
                            "text": "reference_text",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.reference_text"
                          },
                          {
                            "text": "remember_list_row_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.remember_list_row_rect"
                          },
                          {
                            "text": "settings_commit",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.settings_commit"
                          },
                          {
                            "text": "settings_heading",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.settings_heading"
                          },
                          {
                            "text": "settings_level",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.settings_level"
                          },
                          {
                            "text": "settings_row_label",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.settings_row_label"
                          },
                          {
                            "text": "settings_row_range",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.settings_row_range"
                          },
                          {
                            "text": "settings_row_tooltip",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.settings_row_tooltip"
                          },
                          {
                            "text": "texture_guid_for",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/fn.texture_guid_for"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "LIST_REMOVE_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/constant.LIST_REMOVE_WIDTH"
                          },
                          {
                            "text": "SETTINGS_ROW_INDENT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_settings/constant.SETTINGS_ROW_INDENT"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "inspector_widgets",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Number",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/struct.Number"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ascending",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.ascending"
                          },
                          {
                            "text": "axis_slot",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.axis_slot"
                          },
                          {
                            "text": "component_rows",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.component_rows"
                          },
                          {
                            "text": "fixed_width_field",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.fixed_width_field"
                          },
                          {
                            "text": "format_field_value",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.format_field_value"
                          },
                          {
                            "text": "integer_edit",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.integer_edit"
                          },
                          {
                            "text": "read_only_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.read_only_row"
                          },
                          {
                            "text": "scalar_edit",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.scalar_edit"
                          },
                          {
                            "text": "scalar_edit_decorated",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/inspector_widgets/fn.scalar_edit_decorated"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "menus",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/menus/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "component_menu_items",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/menus/fn.component_menu_items"
                          },
                          {
                            "text": "scene_context_menu",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/menus/fn.scene_context_menu"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "palette",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/palette/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "matches",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/palette/fn.matches"
                          },
                          {
                            "text": "palette_window",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/palette/fn.palette_window"
                          },
                          {
                            "text": "run_selected",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/palette/fn.run_selected"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PALETTE_ROWS",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/palette/constant.PALETTE_ROWS"
                          },
                          {
                            "text": "PALETTE_TOP",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/palette/constant.PALETTE_TOP"
                          },
                          {
                            "text": "PALETTE_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/palette/constant.PALETTE_WIDTH"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "panel_windows",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/panel_windows/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PanelFeed",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/panel_windows/struct.PanelFeed"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "panel_windows",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/panel_windows/fn.panel_windows"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "prelude",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/prelude/"
                  },
                  {
                    "text": "resource_section",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/resource_section/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "queue_edit",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/resource_section/fn.queue_edit"
                          },
                          {
                            "text": "resource_section",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/resource_section/fn.resource_section"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "rows",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/rows/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "label_cell",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/fn.label_cell"
                          },
                          {
                            "text": "label_cell_in",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/fn.label_cell_in"
                          },
                          {
                            "text": "label_gap",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/fn.label_gap"
                          },
                          {
                            "text": "row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/fn.row"
                          },
                          {
                            "text": "row_in",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/fn.row_in"
                          },
                          {
                            "text": "value_row",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/fn.value_row"
                          },
                          {
                            "text": "value_row_in",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/fn.value_row_in"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ROW_HEIGHT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/constant.ROW_HEIGHT"
                          },
                          {
                            "text": "ROW_LABEL_GAP",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/constant.ROW_LABEL_GAP"
                          },
                          {
                            "text": "ROW_LABEL_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/constant.ROW_LABEL_WIDTH"
                          },
                          {
                            "text": "WIDE_ROW_LABEL_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/rows/constant.WIDE_ROW_LABEL_WIDTH"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "settle",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/settle/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "FrameRequests",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/settle/struct.FrameRequests"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "settle_pass",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/settle/fn.settle_pass"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "spline_tool",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Reseed",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/struct.Reseed"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "field_element_index",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.field_element_index"
                          },
                          {
                            "text": "point_leaf",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.point_leaf"
                          },
                          {
                            "text": "point_write",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.point_write"
                          },
                          {
                            "text": "reseed_body",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.reseed_body"
                          },
                          {
                            "text": "reseed_command",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.reseed_command"
                          },
                          {
                            "text": "reseed_window",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.reseed_window"
                          },
                          {
                            "text": "spline_point_count",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.spline_point_count"
                          },
                          {
                            "text": "spline_tool_panel",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/fn.spline_tool_panel"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "POINTS_SHOWN",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/constant.POINTS_SHOWN"
                          },
                          {
                            "text": "RESEED_POINTS",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/constant.RESEED_POINTS"
                          },
                          {
                            "text": "RESEED_WINDOW",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/constant.RESEED_WINDOW"
                          },
                          {
                            "text": "SPLINE_COMPONENT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/constant.SPLINE_COMPONENT"
                          },
                          {
                            "text": "SPLINE_PANEL_ID",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/constant.SPLINE_PANEL_ID"
                          },
                          {
                            "text": "SPLINE_POINTS_FIELD",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/spline_tool/constant.SPLINE_POINTS_FIELD"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_assets",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "assets_grid",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/fn.assets_grid"
                          },
                          {
                            "text": "assets_path_bar",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/fn.assets_path_bar"
                          },
                          {
                            "text": "assets_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/fn.assets_tab"
                          },
                          {
                            "text": "assets_tree",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/fn.assets_tree"
                          },
                          {
                            "text": "assets_zoom_bar",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/fn.assets_zoom_bar"
                          },
                          {
                            "text": "folder_tree_rows",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/fn.folder_tree_rows"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ASSETS_TREE_CARET_SIZE",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/constant.ASSETS_TREE_CARET_SIZE"
                          },
                          {
                            "text": "ASSETS_TREE_CARET_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/constant.ASSETS_TREE_CARET_WIDTH"
                          },
                          {
                            "text": "ASSETS_TREE_INDENT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/constant.ASSETS_TREE_INDENT"
                          },
                          {
                            "text": "ASSETS_TREE_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/constant.ASSETS_TREE_WIDTH"
                          },
                          {
                            "text": "ASSETS_TREE_WIDTH_RANGE",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_assets/constant.ASSETS_TREE_WIDTH_RANGE"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_console",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_console/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "console_level_colour",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_console/fn.console_level_colour"
                          },
                          {
                            "text": "console_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_console/fn.console_tab"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CONSOLE_LEVELS",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_console/constant.CONSOLE_LEVELS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_demo",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "burn_micros",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/fn.burn_micros"
                          },
                          {
                            "text": "demo_confirm_window",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/fn.demo_confirm_window"
                          },
                          {
                            "text": "demo_panel",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/fn.demo_panel"
                          },
                          {
                            "text": "slow_requested",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/fn.slow_requested"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DEMO_CONFIRM_WINDOW",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/constant.DEMO_CONFIRM_WINDOW"
                          },
                          {
                            "text": "PANEL_SLOW_ENV",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/constant.PANEL_SLOW_ENV"
                          },
                          {
                            "text": "SLOW_MULTIPLE",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_demo/constant.SLOW_MULTIPLE"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_entities",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DraggedEntity",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/struct.DraggedEntity"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "entities_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/fn.entities_tab"
                          },
                          {
                            "text": "entity_menu_items",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/fn.entity_menu_items"
                          },
                          {
                            "text": "entity_row_height",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/fn.entity_row_height"
                          },
                          {
                            "text": "entity_row_label",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/fn.entity_row_label"
                          },
                          {
                            "text": "entity_rows",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/fn.entity_rows"
                          },
                          {
                            "text": "remember_hierarchy_row_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_entities/fn.remember_hierarchy_row_rect"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_inspector",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "addable_components",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/fn.addable_components"
                          },
                          {
                            "text": "entity_inspector",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/fn.entity_inspector"
                          },
                          {
                            "text": "inspector_add_popup",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/fn.inspector_add_popup"
                          },
                          {
                            "text": "inspector_header",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/fn.inspector_header"
                          },
                          {
                            "text": "inspector_section_header",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/fn.inspector_section_header"
                          },
                          {
                            "text": "inspector_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/fn.inspector_tab"
                          },
                          {
                            "text": "inspector_targets",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/fn.inspector_targets"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "INSPECTOR_VECTOR_FIELD_HEIGHT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/constant.INSPECTOR_VECTOR_FIELD_HEIGHT"
                          },
                          {
                            "text": "INSPECTOR_VECTOR_FIELD_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/constant.INSPECTOR_VECTOR_FIELD_WIDTH"
                          },
                          {
                            "text": "INSPECTOR_VECTOR_LABEL_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_inspector/constant.INSPECTOR_VECTOR_LABEL_WIDTH"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_preferences",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_preferences/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "preferences_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_preferences/fn.preferences_tab"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_problems",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_problems/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "problems_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_problems/fn.problems_tab"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_statistics",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_statistics/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "statistics_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_statistics/fn.statistics_tab"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "tab_systems",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/tab_systems/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "systems_tab",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/tab_systems/fn.systems_tab"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "toasts",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "draw_toasts",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/fn.draw_toasts"
                          },
                          {
                            "text": "level_colour",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/fn.level_colour"
                          },
                          {
                            "text": "push_notices",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/fn.push_notices"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "TOAST_GAP",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/constant.TOAST_GAP"
                          },
                          {
                            "text": "TOAST_HEIGHT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/constant.TOAST_HEIGHT"
                          },
                          {
                            "text": "TOAST_LEFT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/constant.TOAST_LEFT"
                          },
                          {
                            "text": "TOAST_TOP",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/constant.TOAST_TOP"
                          },
                          {
                            "text": "TOAST_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toasts/constant.TOAST_WIDTH"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "toolbox_panel",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/toolbox_panel/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "toolbox_overlay",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/toolbox_panel/fn.toolbox_overlay"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "views",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/views/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "badge_shadow_centres",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/fn.badge_shadow_centres"
                          },
                          {
                            "text": "frame_counter_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/fn.frame_counter_rect"
                          },
                          {
                            "text": "scene_badges",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/fn.scene_badges"
                          },
                          {
                            "text": "scene_body_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/fn.scene_body_rect"
                          },
                          {
                            "text": "scene_overlay",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/fn.scene_overlay"
                          },
                          {
                            "text": "shell_rect",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/fn.shell_rect"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "SCENE_BADGE_PADDING",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_BADGE_PADDING"
                          },
                          {
                            "text": "SCENE_BADGE_SHADOW_ALPHA",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_BADGE_SHADOW_ALPHA"
                          },
                          {
                            "text": "SCENE_BADGE_SHADOW_BLUR",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_BADGE_SHADOW_BLUR"
                          },
                          {
                            "text": "SCENE_BADGE_SHADOW_DISTANCE",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_BADGE_SHADOW_DISTANCE"
                          },
                          {
                            "text": "SCENE_BADGE_SHADOW_SAMPLES",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_BADGE_SHADOW_SAMPLES"
                          },
                          {
                            "text": "SCENE_COUNTER_HEIGHT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_COUNTER_HEIGHT"
                          },
                          {
                            "text": "SCENE_COUNTER_MARGIN",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_COUNTER_MARGIN"
                          },
                          {
                            "text": "SCENE_COUNTER_WIDTH",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_COUNTER_WIDTH"
                          },
                          {
                            "text": "SCENE_RECT_OVERSHOOT",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SCENE_RECT_OVERSHOOT"
                          },
                          {
                            "text": "SLOW_UPDATE_MICROS",
                            "link": "/reference/pill_editor_shell_egui_editor/shell/views/constant.SLOW_UPDATE_MICROS"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EditorTabViewer",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/struct.EditorTabViewer"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "draw_module_panel",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.draw_module_panel"
                  },
                  {
                    "text": "panel_feed",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.panel_feed"
                  },
                  {
                    "text": "run_frame",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.run_frame"
                  },
                  {
                    "text": "run_popout_passes",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.run_popout_passes"
                  },
                  {
                    "text": "tab_body",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.tab_body"
                  },
                  {
                    "text": "tab_button",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.tab_button"
                  },
                  {
                    "text": "tab_context_menu",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.tab_context_menu"
                  },
                  {
                    "text": "tab_title",
                    "link": "/reference/pill_editor_shell_egui_editor/shell/fn.tab_title"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "__pill_hot_descriptor_egui_shell_update",
            "link": "/reference/pill_editor_shell_egui_editor/fn.__pill_hot_descriptor_egui_shell_update"
          },
          {
            "text": "egui_shell_update",
            "link": "/reference/pill_editor_shell_egui_editor/fn.egui_shell_update"
          },
          {
            "text": "init",
            "link": "/reference/pill_editor_shell_egui_editor/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_editor_shell_egui_editor/fn.register"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Engine",
    "link": "/reference/pill_engine/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "component_registry",
            "link": "/reference/pill_engine/component_registry/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ExportAddress",
                    "link": "/reference/pill_engine/component_registry/struct.ExportAddress"
                  },
                  {
                    "text": "PillComponentDescriptor",
                    "link": "/reference/pill_engine/component_registry/struct.PillComponentDescriptor"
                  },
                  {
                    "text": "PillExportDescriptor",
                    "link": "/reference/pill_engine/component_registry/struct.PillExportDescriptor"
                  },
                  {
                    "text": "PillFieldAccessorDescriptor",
                    "link": "/reference/pill_engine/component_registry/struct.PillFieldAccessorDescriptor"
                  },
                  {
                    "text": "PillMethodDescriptor",
                    "link": "/reference/pill_engine/component_registry/struct.PillMethodDescriptor"
                  },
                  {
                    "text": "PillValueTypeDescriptor",
                    "link": "/reference/pill_engine/component_registry/struct.PillValueTypeDescriptor"
                  },
                  {
                    "text": "ValueTypeLayoutScope",
                    "link": "/reference/pill_engine/component_registry/struct.ValueTypeLayoutScope"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "copy_descriptors",
                    "link": "/reference/pill_engine/component_registry/fn.copy_descriptors"
                  },
                  {
                    "text": "field_accessor_descriptors",
                    "link": "/reference/pill_engine/component_registry/fn.field_accessor_descriptors"
                  },
                  {
                    "text": "find_export",
                    "link": "/reference/pill_engine/component_registry/fn.find_export"
                  },
                  {
                    "text": "install_value_type_layouts",
                    "link": "/reference/pill_engine/component_registry/fn.install_value_type_layouts"
                  },
                  {
                    "text": "mirror_method_descriptors",
                    "link": "/reference/pill_engine/component_registry/fn.mirror_method_descriptors"
                  },
                  {
                    "text": "no_registration",
                    "link": "/reference/pill_engine/component_registry/fn.no_registration"
                  },
                  {
                    "text": "persistable_schema_fingerprint",
                    "link": "/reference/pill_engine/component_registry/fn.persistable_schema_fingerprint"
                  },
                  {
                    "text": "register_all_components",
                    "link": "/reference/pill_engine/component_registry/fn.register_all_components"
                  },
                  {
                    "text": "resolve_value_type_layout",
                    "link": "/reference/pill_engine/component_registry/fn.resolve_value_type_layout"
                  },
                  {
                    "text": "restore_value_type_layouts",
                    "link": "/reference/pill_engine/component_registry/fn.restore_value_type_layouts"
                  },
                  {
                    "text": "run_artifact_entry",
                    "link": "/reference/pill_engine/component_registry/fn.run_artifact_entry"
                  },
                  {
                    "text": "run_artifact_init",
                    "link": "/reference/pill_engine/component_registry/fn.run_artifact_init"
                  },
                  {
                    "text": "run_artifact_registration",
                    "link": "/reference/pill_engine/component_registry/fn.run_artifact_registration"
                  },
                  {
                    "text": "run_project_init",
                    "link": "/reference/pill_engine/component_registry/fn.run_project_init"
                  },
                  {
                    "text": "value_type_descriptors",
                    "link": "/reference/pill_engine/component_registry/fn.value_type_descriptors"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MIRROR_TYPE_ROW",
                    "link": "/reference/pill_engine/component_registry/constant.MIRROR_TYPE_ROW"
                  },
                  {
                    "text": "OWNER_KIND_ENUM",
                    "link": "/reference/pill_engine/component_registry/constant.OWNER_KIND_ENUM"
                  },
                  {
                    "text": "OWNER_KIND_MODULE",
                    "link": "/reference/pill_engine/component_registry/constant.OWNER_KIND_MODULE"
                  },
                  {
                    "text": "OWNER_KIND_OBJECT",
                    "link": "/reference/pill_engine/component_registry/constant.OWNER_KIND_OBJECT"
                  },
                  {
                    "text": "OWNER_KIND_RESOURCE",
                    "link": "/reference/pill_engine/component_registry/constant.OWNER_KIND_RESOURCE"
                  },
                  {
                    "text": "OWNER_KIND_UNKNOWN",
                    "link": "/reference/pill_engine/component_registry/constant.OWNER_KIND_UNKNOWN"
                  }
                ]
              }
            ]
          },
          {
            "text": "declarations",
            "link": "/reference/pill_engine/declarations/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "DeclarationBaseline",
                    "link": "/reference/pill_engine/declarations/struct.DeclarationBaseline"
                  },
                  {
                    "text": "PillAssetDescriptor",
                    "link": "/reference/pill_engine/declarations/struct.PillAssetDescriptor"
                  },
                  {
                    "text": "PillResourceDescriptor",
                    "link": "/reference/pill_engine/declarations/struct.PillResourceDescriptor"
                  },
                  {
                    "text": "PillSystemDescriptor",
                    "link": "/reference/pill_engine/declarations/struct.PillSystemDescriptor"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "declaration_baseline",
                    "link": "/reference/pill_engine/declarations/fn.declaration_baseline"
                  },
                  {
                    "text": "register_all_assets",
                    "link": "/reference/pill_engine/declarations/fn.register_all_assets"
                  },
                  {
                    "text": "register_all_resources",
                    "link": "/reference/pill_engine/declarations/fn.register_all_resources"
                  },
                  {
                    "text": "register_all_systems",
                    "link": "/reference/pill_engine/declarations/fn.register_all_systems"
                  },
                  {
                    "text": "with_declaration_baseline",
                    "link": "/reference/pill_engine/declarations/fn.with_declaration_baseline"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DECLARATION_BASELINE",
                    "link": "/reference/pill_engine/declarations/constant.DECLARATION_BASELINE"
                  }
                ]
              }
            ]
          },
          {
            "text": "hot_patch",
            "link": "/reference/pill_engine/hot_patch/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "PillFunctionAddress",
                    "link": "/reference/pill_engine/hot_patch/struct.PillFunctionAddress"
                  },
                  {
                    "text": "PillHotFunctionDescriptor",
                    "link": "/reference/pill_engine/hot_patch/struct.PillHotFunctionDescriptor"
                  },
                  {
                    "text": "PillHotSlotDescriptor",
                    "link": "/reference/pill_engine/hot_patch/struct.PillHotSlotDescriptor"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "function_addresses",
                    "link": "/reference/pill_engine/hot_patch/fn.function_addresses"
                  },
                  {
                    "text": "functions_with_known_extent",
                    "link": "/reference/pill_engine/hot_patch/fn.functions_with_known_extent"
                  },
                  {
                    "text": "hot_function_names",
                    "link": "/reference/pill_engine/hot_patch/fn.hot_function_names"
                  },
                  {
                    "text": "install_plain_function",
                    "link": "/reference/pill_engine/hot_patch/fn.install_plain_function"
                  },
                  {
                    "text": "plain_function_entry",
                    "link": "/reference/pill_engine/hot_patch/fn.plain_function_entry"
                  },
                  {
                    "text": "plain_function_names",
                    "link": "/reference/pill_engine/hot_patch/fn.plain_function_names"
                  },
                  {
                    "text": "plain_function_signature",
                    "link": "/reference/pill_engine/hot_patch/fn.plain_function_signature"
                  },
                  {
                    "text": "reset_plain_function",
                    "link": "/reference/pill_engine/hot_patch/fn.reset_plain_function"
                  },
                  {
                    "text": "resolve_hot_function",
                    "link": "/reference/pill_engine/hot_patch/fn.resolve_hot_function"
                  },
                  {
                    "text": "scanned_function_address",
                    "link": "/reference/pill_engine/hot_patch/fn.scanned_function_address"
                  },
                  {
                    "text": "scanned_function_signature",
                    "link": "/reference/pill_engine/hot_patch/fn.scanned_function_signature"
                  },
                  {
                    "text": "text_hash",
                    "link": "/reference/pill_engine/hot_patch/fn.text_hash"
                  },
                  {
                    "text": "with_qualified_name",
                    "link": "/reference/pill_engine/hot_patch/fn.with_qualified_name"
                  },
                  {
                    "text": "write_signature_out",
                    "link": "/reference/pill_engine/hot_patch/fn.write_signature_out"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Engine Core",
    "link": "/reference/pill_engine_core/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "api",
            "link": "/reference/pill_engine_core/api/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EngineApi",
                    "link": "/reference/pill_engine_core/api/struct.EngineApi"
                  }
                ]
              }
            ]
          },
          {
            "text": "archetype",
            "link": "/reference/pill_engine_core/archetype/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Archetype",
                    "link": "/reference/pill_engine_core/archetype/struct.Archetype"
                  },
                  {
                    "text": "ArchetypeId",
                    "link": "/reference/pill_engine_core/archetype/struct.ArchetypeId"
                  },
                  {
                    "text": "Blittability",
                    "link": "/reference/pill_engine_core/archetype/struct.Blittability"
                  },
                  {
                    "text": "ColumnLayout",
                    "link": "/reference/pill_engine_core/archetype/struct.ColumnLayout"
                  },
                  {
                    "text": "ColumnOps",
                    "link": "/reference/pill_engine_core/archetype/struct.ColumnOps"
                  },
                  {
                    "text": "ComponentColumn",
                    "link": "/reference/pill_engine_core/archetype/struct.ComponentColumn"
                  },
                  {
                    "text": "ComponentColumns",
                    "link": "/reference/pill_engine_core/archetype/struct.ComponentColumns"
                  },
                  {
                    "text": "FieldPlan",
                    "link": "/reference/pill_engine_core/archetype/struct.FieldPlan"
                  },
                  {
                    "text": "LayoutField",
                    "link": "/reference/pill_engine_core/archetype/struct.LayoutField"
                  },
                  {
                    "text": "NativeColumnInfo",
                    "link": "/reference/pill_engine_core/archetype/struct.NativeColumnInfo"
                  },
                  {
                    "text": "PlannedField",
                    "link": "/reference/pill_engine_core/archetype/struct.PlannedField"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ColumnIdentity",
                    "link": "/reference/pill_engine_core/archetype/enum.ColumnIdentity"
                  },
                  {
                    "text": "FieldSource",
                    "link": "/reference/pill_engine_core/archetype/enum.FieldSource"
                  },
                  {
                    "text": "StorageFactory",
                    "link": "/reference/pill_engine_core/archetype/enum.StorageFactory"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "drop_range_of",
                    "link": "/reference/pill_engine_core/archetype/fn.drop_range_of"
                  },
                  {
                    "text": "drop_range_of_nothing",
                    "link": "/reference/pill_engine_core/archetype/fn.drop_range_of_nothing"
                  },
                  {
                    "text": "missing_column",
                    "link": "/reference/pill_engine_core/archetype/fn.missing_column"
                  },
                  {
                    "text": "out_of_bounds",
                    "link": "/reference/pill_engine_core/archetype/fn.out_of_bounds"
                  },
                  {
                    "text": "unallocated_pointer",
                    "link": "/reference/pill_engine_core/archetype/fn.unallocated_pointer"
                  },
                  {
                    "text": "validate_component_layout",
                    "link": "/reference/pill_engine_core/archetype/fn.validate_component_layout"
                  },
                  {
                    "text": "validate_native_component_layout",
                    "link": "/reference/pill_engine_core/archetype/fn.validate_native_component_layout"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset",
            "link": "/reference/pill_engine_core/asset/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetColumn",
                    "link": "/reference/pill_engine_core/asset/struct.AssetColumn"
                  },
                  {
                    "text": "AssetGuid",
                    "link": "/reference/pill_engine_core/asset/struct.AssetGuid"
                  },
                  {
                    "text": "AssetManager",
                    "link": "/reference/pill_engine_core/asset/struct.AssetManager"
                  },
                  {
                    "text": "Handle",
                    "link": "/reference/pill_engine_core/asset/struct.Handle"
                  },
                  {
                    "text": "KeyIndex",
                    "link": "/reference/pill_engine_core/asset/struct.KeyIndex"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetBindingError",
                    "link": "/reference/pill_engine_core/asset/enum.AssetBindingError"
                  },
                  {
                    "text": "AssetLoader",
                    "link": "/reference/pill_engine_core/asset/enum.AssetLoader"
                  },
                  {
                    "text": "AssetLoadError",
                    "link": "/reference/pill_engine_core/asset/enum.AssetLoadError"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "Asset",
                    "link": "/reference/pill_engine_core/asset/trait.Asset"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "refresh_column_ops",
                    "link": "/reference/pill_engine_core/asset/fn.refresh_column_ops"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetBindingResult",
                    "link": "/reference/pill_engine_core/asset/type.AssetBindingResult"
                  },
                  {
                    "text": "AssetLoadResult",
                    "link": "/reference/pill_engine_core/asset/type.AssetLoadResult"
                  },
                  {
                    "text": "AssetOpsRefresher",
                    "link": "/reference/pill_engine_core/asset/type.AssetOpsRefresher"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ASSET_MANAGER_SHARED_NAME",
                    "link": "/reference/pill_engine_core/asset/constant.ASSET_MANAGER_SHARED_NAME"
                  },
                  {
                    "text": "INVALID_ASSET_GENERATION",
                    "link": "/reference/pill_engine_core/asset/constant.INVALID_ASSET_GENERATION"
                  },
                  {
                    "text": "INVALID_ASSET_INDEX",
                    "link": "/reference/pill_engine_core/asset/constant.INVALID_ASSET_INDEX"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_database",
            "link": "/reference/pill_engine_core/asset_database/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetDatabase",
                    "link": "/reference/pill_engine_core/asset_database/struct.AssetDatabase"
                  },
                  {
                    "text": "AssetRecord",
                    "link": "/reference/pill_engine_core/asset_database/struct.AssetRecord"
                  },
                  {
                    "text": "GuidConflict",
                    "link": "/reference/pill_engine_core/asset_database/struct.GuidConflict"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "files_under",
                    "link": "/reference/pill_engine_core/asset_database/fn.files_under"
                  },
                  {
                    "text": "is_hidden_path",
                    "link": "/reference/pill_engine_core/asset_database/fn.is_hidden_path"
                  },
                  {
                    "text": "is_metadata_path",
                    "link": "/reference/pill_engine_core/asset_database/fn.is_metadata_path"
                  },
                  {
                    "text": "is_standalone",
                    "link": "/reference/pill_engine_core/asset_database/fn.is_standalone"
                  },
                  {
                    "text": "read_identity",
                    "link": "/reference/pill_engine_core/asset_database/fn.read_identity"
                  },
                  {
                    "text": "read_record",
                    "link": "/reference/pill_engine_core/asset_database/fn.read_record"
                  },
                  {
                    "text": "to_slash_path",
                    "link": "/reference/pill_engine_core/asset_database/fn.to_slash_path"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_import_registry",
            "link": "/reference/pill_engine_core/asset_import_registry/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetIdentity",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.AssetIdentity"
                  },
                  {
                    "text": "ErasedImportOutcome",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.ErasedImportOutcome"
                  },
                  {
                    "text": "ImportedTypeEntry",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.ImportedTypeEntry"
                  },
                  {
                    "text": "ImportFunctions",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.ImportFunctions"
                  },
                  {
                    "text": "ImportRegistrationMarker",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.ImportRegistrationMarker"
                  },
                  {
                    "text": "ImportRegistry",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.ImportRegistry"
                  },
                  {
                    "text": "Registration",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.Registration"
                  },
                  {
                    "text": "ScanReport",
                    "link": "/reference/pill_engine_core/asset_import_registry/struct.ScanReport"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ErasedImportError",
                    "link": "/reference/pill_engine_core/asset_import_registry/enum.ErasedImportError"
                  },
                  {
                    "text": "FieldDecorator",
                    "link": "/reference/pill_engine_core/asset_import_registry/enum.FieldDecorator"
                  },
                  {
                    "text": "ImportChange",
                    "link": "/reference/pill_engine_core/asset_import_registry/enum.ImportChange"
                  },
                  {
                    "text": "ImportRegistrationError",
                    "link": "/reference/pill_engine_core/asset_import_registry/enum.ImportRegistrationError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset_identity_of",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.asset_identity_of"
                  },
                  {
                    "text": "guid_by_path",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.guid_by_path"
                  },
                  {
                    "text": "guid_clause",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.guid_clause"
                  },
                  {
                    "text": "handle_by_name_of",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.handle_by_name_of"
                  },
                  {
                    "text": "import_erased",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.import_erased"
                  },
                  {
                    "text": "import_standalone_erased",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.import_standalone_erased"
                  },
                  {
                    "text": "is_loaded",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.is_loaded"
                  },
                  {
                    "text": "loaded_assets_of",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.loaded_assets_of"
                  },
                  {
                    "text": "loaded_by_guid_of",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.loaded_by_guid_of"
                  },
                  {
                    "text": "reimport_erased",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.reimport_erased"
                  },
                  {
                    "text": "reimport_standalone_erased",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.reimport_standalone_erased"
                  },
                  {
                    "text": "remove_loaded",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.remove_loaded"
                  },
                  {
                    "text": "source_files",
                    "link": "/reference/pill_engine_core/asset_import_registry/fn.source_files"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "DefaultDocumentFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.DefaultDocumentFunction"
                  },
                  {
                    "text": "EnsureMetadataFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.EnsureMetadataFunction"
                  },
                  {
                    "text": "ErasedImportResult",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.ErasedImportResult"
                  },
                  {
                    "text": "FollowMoveFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.FollowMoveFunction"
                  },
                  {
                    "text": "GuidByPathFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.GuidByPathFunction"
                  },
                  {
                    "text": "IdentityFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.IdentityFunction"
                  },
                  {
                    "text": "ImportFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.ImportFunction"
                  },
                  {
                    "text": "IsLoadedFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.IsLoadedFunction"
                  },
                  {
                    "text": "LoadedByGuidFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.LoadedByGuidFunction"
                  },
                  {
                    "text": "LoadedByNameFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.LoadedByNameFunction"
                  },
                  {
                    "text": "LoadedFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.LoadedFunction"
                  },
                  {
                    "text": "NormalizeSettingsFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.NormalizeSettingsFunction"
                  },
                  {
                    "text": "ReimportFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.ReimportFunction"
                  },
                  {
                    "text": "RemoveLoadedFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.RemoveLoadedFunction"
                  },
                  {
                    "text": "SettingsJsonFunction",
                    "link": "/reference/pill_engine_core/asset_import_registry/type.SettingsJsonFunction"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_loading",
            "link": "/reference/pill_engine_core/asset_loading/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "extension_of",
                    "link": "/reference/pill_engine_core/asset_loading/fn.extension_of"
                  },
                  {
                    "text": "import_scene_document",
                    "link": "/reference/pill_engine_core/asset_loading/fn.import_scene_document"
                  },
                  {
                    "text": "load_scene_asset",
                    "link": "/reference/pill_engine_core/asset_loading/fn.load_scene_asset"
                  },
                  {
                    "text": "scene_database",
                    "link": "/reference/pill_engine_core/asset_loading/fn.scene_database"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_metadata",
            "link": "/reference/pill_engine_core/asset_metadata/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetImport",
                    "link": "/reference/pill_engine_core/asset_metadata/struct.AssetImport"
                  },
                  {
                    "text": "ImportOutcome",
                    "link": "/reference/pill_engine_core/asset_metadata/struct.ImportOutcome"
                  },
                  {
                    "text": "MetadataDocument",
                    "link": "/reference/pill_engine_core/asset_metadata/struct.MetadataDocument"
                  },
                  {
                    "text": "RawHeader",
                    "link": "/reference/pill_engine_core/asset_metadata/struct.RawHeader"
                  },
                  {
                    "text": "ReimportOutcome",
                    "link": "/reference/pill_engine_core/asset_metadata/struct.ReimportOutcome"
                  },
                  {
                    "text": "StoredMetadata",
                    "link": "/reference/pill_engine_core/asset_metadata/struct.StoredMetadata"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetImportError",
                    "link": "/reference/pill_engine_core/asset_metadata/enum.AssetImportError"
                  },
                  {
                    "text": "MetadataPolicy",
                    "link": "/reference/pill_engine_core/asset_metadata/enum.MetadataPolicy"
                  },
                  {
                    "text": "MetadataSource",
                    "link": "/reference/pill_engine_core/asset_metadata/enum.MetadataSource"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "ImportedAsset",
                    "link": "/reference/pill_engine_core/asset_metadata/trait.ImportedAsset"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "checked_relative",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.checked_relative"
                  },
                  {
                    "text": "display_guid",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.display_guid"
                  },
                  {
                    "text": "is_metadata_file",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.is_metadata_file"
                  },
                  {
                    "text": "metadata_path_for",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.metadata_path_for"
                  },
                  {
                    "text": "normalize_settings_json",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.normalize_settings_json"
                  },
                  {
                    "text": "parse_header",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.parse_header"
                  },
                  {
                    "text": "parse_metadata",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.parse_metadata"
                  },
                  {
                    "text": "read_header",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.read_header"
                  },
                  {
                    "text": "render_metadata",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.render_metadata"
                  },
                  {
                    "text": "same_settings",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.same_settings"
                  },
                  {
                    "text": "settings_json_for",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.settings_json_for"
                  },
                  {
                    "text": "settings_to_json",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.settings_to_json"
                  },
                  {
                    "text": "standalone_file_name",
                    "link": "/reference/pill_engine_core/asset_metadata/fn.standalone_file_name"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "INVALID_CHARACTERS",
                    "link": "/reference/pill_engine_core/asset_metadata/constant.INVALID_CHARACTERS"
                  },
                  {
                    "text": "METADATA_EXTENSION",
                    "link": "/reference/pill_engine_core/asset_metadata/constant.METADATA_EXTENSION"
                  },
                  {
                    "text": "METADATA_FORMAT_VERSION",
                    "link": "/reference/pill_engine_core/asset_metadata/constant.METADATA_FORMAT_VERSION"
                  },
                  {
                    "text": "RESERVED_NAMES",
                    "link": "/reference/pill_engine_core/asset_metadata/constant.RESERVED_NAMES"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_reference",
            "link": "/reference/pill_engine_core/asset_reference/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetReference",
                    "link": "/reference/pill_engine_core/asset_reference/struct.AssetReference"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_standalone",
            "link": "/reference/pill_engine_core/asset_standalone/",
            "collapsed": true,
            "items": [
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "StandaloneAsset",
                    "link": "/reference/pill_engine_core/asset_standalone/trait.StandaloneAsset"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset_name_of",
                    "link": "/reference/pill_engine_core/asset_standalone/fn.asset_name_of"
                  },
                  {
                    "text": "default_standalone_document",
                    "link": "/reference/pill_engine_core/asset_standalone/fn.default_standalone_document"
                  },
                  {
                    "text": "document_to_json",
                    "link": "/reference/pill_engine_core/asset_standalone/fn.document_to_json"
                  },
                  {
                    "text": "normalize_standalone_document",
                    "link": "/reference/pill_engine_core/asset_standalone/fn.normalize_standalone_document"
                  },
                  {
                    "text": "read_standalone",
                    "link": "/reference/pill_engine_core/asset_standalone/fn.read_standalone"
                  },
                  {
                    "text": "render_standalone",
                    "link": "/reference/pill_engine_core/asset_standalone/fn.render_standalone"
                  },
                  {
                    "text": "standalone_document_json",
                    "link": "/reference/pill_engine_core/asset_standalone/fn.standalone_document_json"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "STANDALONE_BODY_FIELD",
                    "link": "/reference/pill_engine_core/asset_standalone/constant.STANDALONE_BODY_FIELD"
                  }
                ]
              }
            ]
          },
          {
            "text": "asset_store",
            "link": "/reference/pill_engine_core/asset_store/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetPack",
                    "link": "/reference/pill_engine_core/asset_store/struct.AssetPack"
                  },
                  {
                    "text": "ModuleAssetRoot",
                    "link": "/reference/pill_engine_core/asset_store/struct.ModuleAssetRoot"
                  },
                  {
                    "text": "Mounts",
                    "link": "/reference/pill_engine_core/asset_store/struct.Mounts"
                  },
                  {
                    "text": "PackReader",
                    "link": "/reference/pill_engine_core/asset_store/struct.PackReader"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetPackError",
                    "link": "/reference/pill_engine_core/asset_store/enum.AssetPackError"
                  },
                  {
                    "text": "Existing",
                    "link": "/reference/pill_engine_core/asset_store/enum.Existing"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "assert_module_root_complete",
                    "link": "/reference/pill_engine_core/asset_store/fn.assert_module_root_complete"
                  },
                  {
                    "text": "assert_roots_do_not_overlap",
                    "link": "/reference/pill_engine_core/asset_store/fn.assert_roots_do_not_overlap"
                  },
                  {
                    "text": "declare_module_root",
                    "link": "/reference/pill_engine_core/asset_store/fn.declare_module_root"
                  },
                  {
                    "text": "declare_module_root_hiding",
                    "link": "/reference/pill_engine_core/asset_store/fn.declare_module_root_hiding"
                  },
                  {
                    "text": "forget_all_module_roots",
                    "link": "/reference/pill_engine_core/asset_store/fn.forget_all_module_roots"
                  },
                  {
                    "text": "forget_module_root",
                    "link": "/reference/pill_engine_core/asset_store/fn.forget_module_root"
                  },
                  {
                    "text": "hard_link",
                    "link": "/reference/pill_engine_core/asset_store/fn.hard_link"
                  },
                  {
                    "text": "is_module_asset",
                    "link": "/reference/pill_engine_core/asset_store/fn.is_module_asset"
                  },
                  {
                    "text": "locate_file",
                    "link": "/reference/pill_engine_core/asset_store/fn.locate_file"
                  },
                  {
                    "text": "module_roots",
                    "link": "/reference/pill_engine_core/asset_store/fn.module_roots"
                  },
                  {
                    "text": "mount_directory",
                    "link": "/reference/pill_engine_core/asset_store/fn.mount_directory"
                  },
                  {
                    "text": "mount_pack",
                    "link": "/reference/pill_engine_core/asset_store/fn.mount_pack"
                  },
                  {
                    "text": "mounted_directory",
                    "link": "/reference/pill_engine_core/asset_store/fn.mounted_directory"
                  },
                  {
                    "text": "mounts",
                    "link": "/reference/pill_engine_core/asset_store/fn.mounts"
                  },
                  {
                    "text": "pack_key",
                    "link": "/reference/pill_engine_core/asset_store/fn.pack_key"
                  },
                  {
                    "text": "packs_only",
                    "link": "/reference/pill_engine_core/asset_store/fn.packs_only"
                  },
                  {
                    "text": "place_file",
                    "link": "/reference/pill_engine_core/asset_store/fn.place_file"
                  },
                  {
                    "text": "read",
                    "link": "/reference/pill_engine_core/asset_store/fn.read"
                  },
                  {
                    "text": "relative_files",
                    "link": "/reference/pill_engine_core/asset_store/fn.relative_files"
                  },
                  {
                    "text": "resolve_file",
                    "link": "/reference/pill_engine_core/asset_store/fn.resolve_file"
                  },
                  {
                    "text": "restrict_to_packs",
                    "link": "/reference/pill_engine_core/asset_store/fn.restrict_to_packs"
                  },
                  {
                    "text": "temporary_name",
                    "link": "/reference/pill_engine_core/asset_store/fn.temporary_name"
                  },
                  {
                    "text": "verify_module_roots",
                    "link": "/reference/pill_engine_core/asset_store/fn.verify_module_roots"
                  },
                  {
                    "text": "write_beside",
                    "link": "/reference/pill_engine_core/asset_store/fn.write_beside"
                  },
                  {
                    "text": "write_new",
                    "link": "/reference/pill_engine_core/asset_store/fn.write_new"
                  },
                  {
                    "text": "write_replacing",
                    "link": "/reference/pill_engine_core/asset_store/fn.write_replacing"
                  },
                  {
                    "text": "write_then_place",
                    "link": "/reference/pill_engine_core/asset_store/fn.write_then_place"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "Link",
                    "link": "/reference/pill_engine_core/asset_store/type.Link"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MIN_ENTRY_LEN",
                    "link": "/reference/pill_engine_core/asset_store/constant.MIN_ENTRY_LEN"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "PACKS_ONLY",
                    "link": "/reference/pill_engine_core/asset_store/static.PACKS_ONLY"
                  }
                ]
              }
            ]
          },
          {
            "text": "commands",
            "link": "/reference/pill_engine_core/commands/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ByteComponentAdder",
                    "link": "/reference/pill_engine_core/commands/struct.ByteComponentAdder"
                  },
                  {
                    "text": "CommandQueue",
                    "link": "/reference/pill_engine_core/commands/struct.CommandQueue"
                  },
                  {
                    "text": "Commands",
                    "link": "/reference/pill_engine_core/commands/struct.Commands"
                  },
                  {
                    "text": "DeferredEntityBuilder",
                    "link": "/reference/pill_engine_core/commands/struct.DeferredEntityBuilder"
                  },
                  {
                    "text": "TypedComponentAdder",
                    "link": "/reference/pill_engine_core/commands/struct.TypedComponentAdder"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "DeferredCommand",
                    "link": "/reference/pill_engine_core/commands/enum.DeferredCommand"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentAdder",
                    "link": "/reference/pill_engine_core/commands/trait.ComponentAdder"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "boxed_component_adder",
                    "link": "/reference/pill_engine_core/commands/fn.boxed_component_adder"
                  }
                ]
              }
            ]
          },
          {
            "text": "common_components",
            "link": "/reference/pill_engine_core/common_components/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "TransformComponent",
                    "link": "/reference/pill_engine_core/common_components/struct.TransformComponent"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "register_transform_component",
                    "link": "/reference/pill_engine_core/common_components/fn.register_transform_component"
                  },
                  {
                    "text": "rotation_or_identity",
                    "link": "/reference/pill_engine_core/common_components/fn.rotation_or_identity"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ROTATION_IDENTITY_EPSILON",
                    "link": "/reference/pill_engine_core/common_components/constant.ROTATION_IDENTITY_EPSILON"
                  },
                  {
                    "text": "TRANSFORM_SHARED_NAME",
                    "link": "/reference/pill_engine_core/common_components/constant.TRANSFORM_SHARED_NAME"
                  }
                ]
              }
            ]
          },
          {
            "text": "component",
            "link": "/reference/pill_engine_core/component/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentMask",
                    "link": "/reference/pill_engine_core/component/struct.ComponentMask"
                  },
                  {
                    "text": "ComponentRegistration",
                    "link": "/reference/pill_engine_core/component/struct.ComponentRegistration"
                  },
                  {
                    "text": "ComponentRegistry",
                    "link": "/reference/pill_engine_core/component/struct.ComponentRegistry"
                  },
                  {
                    "text": "ComponentTicks",
                    "link": "/reference/pill_engine_core/component/struct.ComponentTicks"
                  },
                  {
                    "text": "Tick",
                    "link": "/reference/pill_engine_core/component/struct.Tick"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentId",
                    "link": "/reference/pill_engine_core/component/enum.ComponentId"
                  },
                  {
                    "text": "Registration",
                    "link": "/reference/pill_engine_core/component/enum.Registration"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "Component",
                    "link": "/reference/pill_engine_core/component/trait.Component"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "component_name_hash",
                    "link": "/reference/pill_engine_core/component/fn.component_name_hash"
                  },
                  {
                    "text": "component_schema_hash",
                    "link": "/reference/pill_engine_core/component/fn.component_schema_hash"
                  },
                  {
                    "text": "shared_component_identity",
                    "link": "/reference/pill_engine_core/component/fn.shared_component_identity"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DESCRIPTOR_HASH_SALT",
                    "link": "/reference/pill_engine_core/component/constant.DESCRIPTOR_HASH_SALT"
                  },
                  {
                    "text": "SHARED_HASH_SALT",
                    "link": "/reference/pill_engine_core/component/constant.SHARED_HASH_SALT"
                  },
                  {
                    "text": "TICK_WRAP_HALF_RANGE",
                    "link": "/reference/pill_engine_core/component/constant.TICK_WRAP_HALF_RANGE"
                  }
                ]
              }
            ]
          },
          {
            "text": "component_field",
            "link": "/reference/pill_engine_core/component_field/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "codec",
                    "link": "/reference/pill_engine_core/component_field/codec/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ScalarKind",
                            "link": "/reference/pill_engine_core/component_field/codec/enum.ScalarKind"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "array_element_size",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.array_element_size"
                          },
                          {
                            "text": "container_header",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.container_header"
                          },
                          {
                            "text": "decode_field",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.decode_field"
                          },
                          {
                            "text": "decode_scalar",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.decode_scalar"
                          },
                          {
                            "text": "decode_tagged",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.decode_tagged"
                          },
                          {
                            "text": "encode_field_write",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.encode_field_write"
                          },
                          {
                            "text": "encode_scalar",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.encode_scalar"
                          },
                          {
                            "text": "header_word",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.header_word"
                          },
                          {
                            "text": "header_words_of",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.header_words_of"
                          },
                          {
                            "text": "is_scalar_tag",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.is_scalar_tag"
                          },
                          {
                            "text": "native_buffer_header",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.native_buffer_header"
                          },
                          {
                            "text": "scalar_size",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.scalar_size"
                          },
                          {
                            "text": "std_container_offsets",
                            "link": "/reference/pill_engine_core/component_field/codec/fn.std_container_offsets"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ENTITY_REFERENCE_SIZE",
                            "link": "/reference/pill_engine_core/component_field/codec/constant.ENTITY_REFERENCE_SIZE"
                          },
                          {
                            "text": "HANDLE_SIZE",
                            "link": "/reference/pill_engine_core/component_field/codec/constant.HANDLE_SIZE"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "expand",
                    "link": "/reference/pill_engine_core/component_field/expand/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "grouping_decorators",
                            "link": "/reference/pill_engine_core/component_field/expand/fn.grouping_decorators"
                          },
                          {
                            "text": "intern_nested_field_name",
                            "link": "/reference/pill_engine_core/component_field/expand/fn.intern_nested_field_name"
                          },
                          {
                            "text": "leaf_decorators",
                            "link": "/reference/pill_engine_core/component_field/expand/fn.leaf_decorators"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "MAX_EXPANDED_ELEMENTS",
                            "link": "/reference/pill_engine_core/component_field/expand/constant.MAX_EXPANDED_ELEMENTS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "row",
                    "link": "/reference/pill_engine_core/component_field/row/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "FieldWrite",
                            "link": "/reference/pill_engine_core/component_field/row/struct.FieldWrite"
                          },
                          {
                            "text": "ResolvedField",
                            "link": "/reference/pill_engine_core/component_field/row/struct.ResolvedField"
                          },
                          {
                            "text": "RowWriteTarget",
                            "link": "/reference/pill_engine_core/component_field/row/struct.RowWriteTarget"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "format_component_debug",
                            "link": "/reference/pill_engine_core/component_field/row/fn.format_component_debug"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentFieldError",
                    "link": "/reference/pill_engine_core/component_field/enum.ComponentFieldError"
                  },
                  {
                    "text": "FieldValue",
                    "link": "/reference/pill_engine_core/component_field/enum.FieldValue"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "is_container_tag",
                    "link": "/reference/pill_engine_core/component_field/fn.is_container_tag"
                  },
                  {
                    "text": "is_entity_tag",
                    "link": "/reference/pill_engine_core/component_field/fn.is_entity_tag"
                  },
                  {
                    "text": "is_handle_tag",
                    "link": "/reference/pill_engine_core/component_field/fn.is_handle_tag"
                  }
                ]
              }
            ]
          },
          {
            "text": "component_registry",
            "link": "/reference/pill_engine_core/component_registry/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentFieldDescriptor",
                    "link": "/reference/pill_engine_core/component_registry/struct.ComponentFieldDescriptor"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FieldDecorator",
                    "link": "/reference/pill_engine_core/component_registry/enum.FieldDecorator"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentLayout",
                    "link": "/reference/pill_engine_core/component_registry/trait.ComponentLayout"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "resolve_unique_name",
                    "link": "/reference/pill_engine_core/component_registry/fn.resolve_unique_name"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "ValueTypeLayoutResolver",
                    "link": "/reference/pill_engine_core/component_registry/type.ValueTypeLayoutResolver"
                  }
                ]
              }
            ]
          },
          {
            "text": "config",
            "link": "/reference/pill_engine_core/config/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "EntityBuilderConfig",
                    "link": "/reference/pill_engine_core/config/struct.EntityBuilderConfig"
                  },
                  {
                    "text": "ParallelProcessingConfig",
                    "link": "/reference/pill_engine_core/config/struct.ParallelProcessingConfig"
                  },
                  {
                    "text": "QueryConfig",
                    "link": "/reference/pill_engine_core/config/struct.QueryConfig"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "default_entities_per_slice",
                    "link": "/reference/pill_engine_core/config/fn.default_entities_per_slice"
                  },
                  {
                    "text": "print_parallel_config",
                    "link": "/reference/pill_engine_core/config/fn.print_parallel_config"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY",
                    "link": "/reference/pill_engine_core/config/constant.PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY"
                  }
                ]
              }
            ]
          },
          {
            "text": "debug_draw",
            "link": "/reference/pill_engine_core/debug_draw/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "DebugDraw",
                    "link": "/reference/pill_engine_core/debug_draw/struct.DebugDraw"
                  },
                  {
                    "text": "DebugFrame",
                    "link": "/reference/pill_engine_core/debug_draw/struct.DebugFrame"
                  },
                  {
                    "text": "DebugLabel",
                    "link": "/reference/pill_engine_core/debug_draw/struct.DebugLabel"
                  },
                  {
                    "text": "DebugLine",
                    "link": "/reference/pill_engine_core/debug_draw/struct.DebugLine"
                  },
                  {
                    "text": "DebugStyle",
                    "link": "/reference/pill_engine_core/debug_draw/struct.DebugStyle"
                  },
                  {
                    "text": "GizmoLine",
                    "link": "/reference/pill_engine_core/debug_draw/struct.GizmoLine"
                  },
                  {
                    "text": "GizmoTriangle",
                    "link": "/reference/pill_engine_core/debug_draw/struct.GizmoTriangle"
                  },
                  {
                    "text": "Timed",
                    "link": "/reference/pill_engine_core/debug_draw/struct.Timed"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "DebugLifetime",
                    "link": "/reference/pill_engine_core/debug_draw/enum.DebugLifetime"
                  },
                  {
                    "text": "LabelAnchor",
                    "link": "/reference/pill_engine_core/debug_draw/enum.LabelAnchor"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "add_vectors",
                    "link": "/reference/pill_engine_core/debug_draw/fn.add_vectors"
                  },
                  {
                    "text": "age_timed_items",
                    "link": "/reference/pill_engine_core/debug_draw/fn.age_timed_items"
                  },
                  {
                    "text": "cross_vectors",
                    "link": "/reference/pill_engine_core/debug_draw/fn.cross_vectors"
                  },
                  {
                    "text": "normalize_vector",
                    "link": "/reference/pill_engine_core/debug_draw/fn.normalize_vector"
                  },
                  {
                    "text": "plane_axes",
                    "link": "/reference/pill_engine_core/debug_draw/fn.plane_axes"
                  },
                  {
                    "text": "scale_vector",
                    "link": "/reference/pill_engine_core/debug_draw/fn.scale_vector"
                  },
                  {
                    "text": "subtract_vectors",
                    "link": "/reference/pill_engine_core/debug_draw/fn.subtract_vectors"
                  },
                  {
                    "text": "vector_length",
                    "link": "/reference/pill_engine_core/debug_draw/fn.vector_length"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "DebugColor",
                    "link": "/reference/pill_engine_core/debug_draw/type.DebugColor"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CIRCLE_SEGMENTS",
                    "link": "/reference/pill_engine_core/debug_draw/constant.CIRCLE_SEGMENTS"
                  }
                ]
              }
            ]
          },
          {
            "text": "diagnostics",
            "link": "/reference/pill_engine_core/diagnostics/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ArchetypeReport",
                    "link": "/reference/pill_engine_core/diagnostics/struct.ArchetypeReport"
                  },
                  {
                    "text": "ColumnReport",
                    "link": "/reference/pill_engine_core/diagnostics/struct.ColumnReport"
                  },
                  {
                    "text": "EcsSnapshot",
                    "link": "/reference/pill_engine_core/diagnostics/struct.EcsSnapshot"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "format_bytes",
                    "link": "/reference/pill_engine_core/diagnostics/fn.format_bytes"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEFAULT_REPORT_INTERVAL",
                    "link": "/reference/pill_engine_core/diagnostics/constant.DEFAULT_REPORT_INTERVAL"
                  },
                  {
                    "text": "SYSTEM_NAME",
                    "link": "/reference/pill_engine_core/diagnostics/constant.SYSTEM_NAME"
                  }
                ]
              }
            ]
          },
          {
            "text": "dynamic_buffer",
            "link": "/reference/pill_engine_core/dynamic_buffer/"
          },
          {
            "text": "engine",
            "link": "/reference/pill_engine_core/engine/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "BatchMember",
                    "link": "/reference/pill_engine_core/engine/struct.BatchMember"
                  },
                  {
                    "text": "Engine",
                    "link": "/reference/pill_engine_core/engine/struct.Engine"
                  },
                  {
                    "text": "RegisteredSystem",
                    "link": "/reference/pill_engine_core/engine/struct.RegisteredSystem"
                  },
                  {
                    "text": "SystemOwner",
                    "link": "/reference/pill_engine_core/engine/struct.SystemOwner"
                  },
                  {
                    "text": "SystemSnapshot",
                    "link": "/reference/pill_engine_core/engine/struct.SystemSnapshot"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "record_system_run",
                    "link": "/reference/pill_engine_core/engine/fn.record_system_run"
                  },
                  {
                    "text": "run_registered_system",
                    "link": "/reference/pill_engine_core/engine/fn.run_registered_system"
                  },
                  {
                    "text": "system_zone_color",
                    "link": "/reference/pill_engine_core/engine/fn.system_zone_color"
                  }
                ]
              }
            ]
          },
          {
            "text": "entity",
            "link": "/reference/pill_engine_core/entity/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Entity",
                    "link": "/reference/pill_engine_core/entity/struct.Entity"
                  },
                  {
                    "text": "EntityId",
                    "link": "/reference/pill_engine_core/entity/struct.EntityId"
                  }
                ]
              }
            ]
          },
          {
            "text": "error",
            "link": "/reference/pill_engine_core/error/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "SystemFailure",
                    "link": "/reference/pill_engine_core/error/struct.SystemFailure"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AddComponentError",
                    "link": "/reference/pill_engine_core/error/enum.AddComponentError"
                  },
                  {
                    "text": "BuildError",
                    "link": "/reference/pill_engine_core/error/enum.BuildError"
                  },
                  {
                    "text": "CommandError",
                    "link": "/reference/pill_engine_core/error/enum.CommandError"
                  },
                  {
                    "text": "EngineError",
                    "link": "/reference/pill_engine_core/error/enum.EngineError"
                  },
                  {
                    "text": "PersistenceError",
                    "link": "/reference/pill_engine_core/error/enum.PersistenceError"
                  },
                  {
                    "text": "RemoveComponentError",
                    "link": "/reference/pill_engine_core/error/enum.RemoveComponentError"
                  },
                  {
                    "text": "SystemError",
                    "link": "/reference/pill_engine_core/error/enum.SystemError"
                  },
                  {
                    "text": "WorldError",
                    "link": "/reference/pill_engine_core/error/enum.WorldError"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "COMPONENT_LAYOUT_CHANGED_REFUSAL",
                    "link": "/reference/pill_engine_core/error/constant.COMPONENT_LAYOUT_CHANGED_REFUSAL"
                  },
                  {
                    "text": "COMPONENT_NAME_COLLISION_REFUSAL",
                    "link": "/reference/pill_engine_core/error/constant.COMPONENT_NAME_COLLISION_REFUSAL"
                  }
                ]
              }
            ]
          },
          {
            "text": "hot_patch",
            "link": "/reference/pill_engine_core/hot_patch/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FaultReport",
                    "link": "/reference/pill_engine_core/hot_patch/struct.FaultReport"
                  },
                  {
                    "text": "HotPatchRegistry",
                    "link": "/reference/pill_engine_core/hot_patch/struct.HotPatchRegistry"
                  },
                  {
                    "text": "HotSlot",
                    "link": "/reference/pill_engine_core/hot_patch/struct.HotSlot"
                  },
                  {
                    "text": "PlainSlot",
                    "link": "/reference/pill_engine_core/hot_patch/struct.PlainSlot"
                  },
                  {
                    "text": "RuntimeFunction",
                    "link": "/reference/pill_engine_core/hot_patch/struct.RuntimeFunction"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "HotPatchError",
                    "link": "/reference/pill_engine_core/hot_patch/enum.HotPatchError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "check_patching_thread",
                    "link": "/reference/pill_engine_core/hot_patch/fn.check_patching_thread"
                  },
                  {
                    "text": "current_thread_token",
                    "link": "/reference/pill_engine_core/hot_patch/fn.current_thread_token"
                  },
                  {
                    "text": "declare_patching_thread",
                    "link": "/reference/pill_engine_core/hot_patch/fn.declare_patching_thread"
                  },
                  {
                    "text": "FlushInstructionCache",
                    "link": "/reference/pill_engine_core/hot_patch/fn.FlushInstructionCache"
                  },
                  {
                    "text": "function_extent",
                    "link": "/reference/pill_engine_core/hot_patch/fn.function_extent"
                  },
                  {
                    "text": "function_path",
                    "link": "/reference/pill_engine_core/hot_patch/fn.function_path"
                  },
                  {
                    "text": "GetCurrentProcess",
                    "link": "/reference/pill_engine_core/hot_patch/fn.GetCurrentProcess"
                  },
                  {
                    "text": "local_implementation_address",
                    "link": "/reference/pill_engine_core/hot_patch/fn.local_implementation_address"
                  },
                  {
                    "text": "panic_into_failure",
                    "link": "/reference/pill_engine_core/hot_patch/fn.panic_into_failure"
                  },
                  {
                    "text": "patch_prologue",
                    "link": "/reference/pill_engine_core/hot_patch/fn.patch_prologue"
                  },
                  {
                    "text": "record_panic",
                    "link": "/reference/pill_engine_core/hot_patch/fn.record_panic"
                  },
                  {
                    "text": "record_success",
                    "link": "/reference/pill_engine_core/hot_patch/fn.record_success"
                  },
                  {
                    "text": "restore_prologue",
                    "link": "/reference/pill_engine_core/hot_patch/fn.restore_prologue"
                  },
                  {
                    "text": "RtlLookupFunctionEntry",
                    "link": "/reference/pill_engine_core/hot_patch/fn.RtlLookupFunctionEntry"
                  },
                  {
                    "text": "signature_hash",
                    "link": "/reference/pill_engine_core/hot_patch/fn.signature_hash"
                  },
                  {
                    "text": "signature_hash_of",
                    "link": "/reference/pill_engine_core/hot_patch/fn.signature_hash_of"
                  },
                  {
                    "text": "take_fault_reports",
                    "link": "/reference/pill_engine_core/hot_patch/fn.take_fault_reports"
                  },
                  {
                    "text": "verify_abi",
                    "link": "/reference/pill_engine_core/hot_patch/fn.verify_abi"
                  },
                  {
                    "text": "VirtualProtect",
                    "link": "/reference/pill_engine_core/hot_patch/fn.VirtualProtect"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "ABSOLUTE_JUMP_LENGTH",
                    "link": "/reference/pill_engine_core/hot_patch/constant.ABSOLUTE_JUMP_LENGTH"
                  },
                  {
                    "text": "PAGE_EXECUTE_READWRITE",
                    "link": "/reference/pill_engine_core/hot_patch/constant.PAGE_EXECUTE_READWRITE"
                  },
                  {
                    "text": "PANIC_ROLLBACK_FRAMES",
                    "link": "/reference/pill_engine_core/hot_patch/constant.PANIC_ROLLBACK_FRAMES"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "FAULT_REPORTS",
                    "link": "/reference/pill_engine_core/hot_patch/static.FAULT_REPORTS"
                  },
                  {
                    "text": "FLAKY_FUNCTION_COUNT",
                    "link": "/reference/pill_engine_core/hot_patch/static.FLAKY_FUNCTION_COUNT"
                  },
                  {
                    "text": "PANIC_STREAKS",
                    "link": "/reference/pill_engine_core/hot_patch/static.PANIC_STREAKS"
                  },
                  {
                    "text": "PATCHING_THREAD_TOKEN",
                    "link": "/reference/pill_engine_core/hot_patch/static.PATCHING_THREAD_TOKEN"
                  }
                ]
              }
            ]
          },
          {
            "text": "input",
            "link": "/reference/pill_engine_core/input/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "GamepadState",
                    "link": "/reference/pill_engine_core/input/struct.GamepadState"
                  },
                  {
                    "text": "Input",
                    "link": "/reference/pill_engine_core/input/struct.Input"
                  },
                  {
                    "text": "KeySet",
                    "link": "/reference/pill_engine_core/input/struct.KeySet"
                  },
                  {
                    "text": "Modifiers",
                    "link": "/reference/pill_engine_core/input/struct.Modifiers"
                  },
                  {
                    "text": "RumbleRequest",
                    "link": "/reference/pill_engine_core/input/struct.RumbleRequest"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ButtonState",
                    "link": "/reference/pill_engine_core/input/enum.ButtonState"
                  },
                  {
                    "text": "GamepadAxis",
                    "link": "/reference/pill_engine_core/input/enum.GamepadAxis"
                  },
                  {
                    "text": "GamepadButton",
                    "link": "/reference/pill_engine_core/input/enum.GamepadButton"
                  },
                  {
                    "text": "InputEvent",
                    "link": "/reference/pill_engine_core/input/enum.InputEvent"
                  },
                  {
                    "text": "KeyCode",
                    "link": "/reference/pill_engine_core/input/enum.KeyCode"
                  },
                  {
                    "text": "MouseButton",
                    "link": "/reference/pill_engine_core/input/enum.MouseButton"
                  },
                  {
                    "text": "PlayerId",
                    "link": "/reference/pill_engine_core/input/enum.PlayerId"
                  },
                  {
                    "text": "ScrollDelta",
                    "link": "/reference/pill_engine_core/input/enum.ScrollDelta"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "EdgeBits",
                    "link": "/reference/pill_engine_core/input/trait.EdgeBits"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_edge",
                    "link": "/reference/pill_engine_core/input/fn.apply_edge"
                  },
                  {
                    "text": "release_edges",
                    "link": "/reference/pill_engine_core/input/fn.release_edges"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "GAMEPAD_AXIS_DEADZONE",
                    "link": "/reference/pill_engine_core/input/constant.GAMEPAD_AXIS_DEADZONE"
                  },
                  {
                    "text": "GAMEPAD_SLOT_COUNT",
                    "link": "/reference/pill_engine_core/input/constant.GAMEPAD_SLOT_COUNT"
                  },
                  {
                    "text": "KEY_SET_WORD_COUNT",
                    "link": "/reference/pill_engine_core/input/constant.KEY_SET_WORD_COUNT"
                  }
                ]
              },
              {
                "text": "Macros",
                "collapsed": true,
                "items": [
                  {
                    "text": "key_codes",
                    "link": "/reference/pill_engine_core/input/macro.key_codes"
                  }
                ]
              }
            ]
          },
          {
            "text": "manager_settings",
            "link": "/reference/pill_engine_core/manager_settings/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ManagerSettingsApplied",
                    "link": "/reference/pill_engine_core/manager_settings/struct.ManagerSettingsApplied"
                  },
                  {
                    "text": "ManagerSettingsBinding",
                    "link": "/reference/pill_engine_core/manager_settings/struct.ManagerSettingsBinding"
                  },
                  {
                    "text": "ManagerSettingsBindings",
                    "link": "/reference/pill_engine_core/manager_settings/struct.ManagerSettingsBindings"
                  },
                  {
                    "text": "ManagerSettingsFailure",
                    "link": "/reference/pill_engine_core/manager_settings/struct.ManagerSettingsFailure"
                  },
                  {
                    "text": "ManagerSettingsReport",
                    "link": "/reference/pill_engine_core/manager_settings/struct.ManagerSettingsReport"
                  },
                  {
                    "text": "ManagerSettingsSurface",
                    "link": "/reference/pill_engine_core/manager_settings/struct.ManagerSettingsSurface"
                  },
                  {
                    "text": "MissingManagerSettings",
                    "link": "/reference/pill_engine_core/manager_settings/struct.MissingManagerSettings"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "conventional_path",
                    "link": "/reference/pill_engine_core/manager_settings/fn.conventional_path"
                  },
                  {
                    "text": "fingerprint_of",
                    "link": "/reference/pill_engine_core/manager_settings/fn.fingerprint_of"
                  }
                ]
              }
            ]
          },
          {
            "text": "mirror",
            "link": "/reference/pill_engine_core/mirror/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "assets",
                    "link": "/reference/pill_engine_core/mirror/assets/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "add",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.add"
                          },
                          {
                            "text": "add_named",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.add_named"
                          },
                          {
                            "text": "add_named_with_guid",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.add_named_with_guid"
                          },
                          {
                            "text": "asset_manager_from_slot",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.asset_manager_from_slot"
                          },
                          {
                            "text": "contains",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.contains"
                          },
                          {
                            "text": "guid_of",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.guid_of"
                          },
                          {
                            "text": "guid_text",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.guid_text"
                          },
                          {
                            "text": "handle_by_guid",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.handle_by_guid"
                          },
                          {
                            "text": "handle_by_name",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.handle_by_name"
                          },
                          {
                            "text": "import",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.import"
                          },
                          {
                            "text": "import_standalone",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.import_standalone"
                          },
                          {
                            "text": "metadata_source_code",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.metadata_source_code"
                          },
                          {
                            "text": "parse_guid",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.parse_guid"
                          },
                          {
                            "text": "remove",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.remove"
                          },
                          {
                            "text": "write_import_outcome",
                            "link": "/reference/pill_engine_core/mirror/assets/fn.write_import_outcome"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "MirrorObject",
                    "link": "/reference/pill_engine_core/mirror/trait.MirrorObject"
                  },
                  {
                    "text": "MirrorReturn",
                    "link": "/reference/pill_engine_core/mirror/trait.MirrorReturn"
                  },
                  {
                    "text": "MirrorValue",
                    "link": "/reference/pill_engine_core/mirror/trait.MirrorValue"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "drop_object",
                    "link": "/reference/pill_engine_core/mirror/fn.drop_object"
                  },
                  {
                    "text": "error_message",
                    "link": "/reference/pill_engine_core/mirror/fn.error_message"
                  },
                  {
                    "text": "invoke",
                    "link": "/reference/pill_engine_core/mirror/fn.invoke"
                  },
                  {
                    "text": "object_from_raw",
                    "link": "/reference/pill_engine_core/mirror/fn.object_from_raw"
                  },
                  {
                    "text": "object_into_raw",
                    "link": "/reference/pill_engine_core/mirror/fn.object_into_raw"
                  },
                  {
                    "text": "read",
                    "link": "/reference/pill_engine_core/mirror/fn.read"
                  },
                  {
                    "text": "read_bool",
                    "link": "/reference/pill_engine_core/mirror/fn.read_bool"
                  },
                  {
                    "text": "read_mut",
                    "link": "/reference/pill_engine_core/mirror/fn.read_mut"
                  },
                  {
                    "text": "read_option",
                    "link": "/reference/pill_engine_core/mirror/fn.read_option"
                  },
                  {
                    "text": "read_plain_vec",
                    "link": "/reference/pill_engine_core/mirror/fn.read_plain_vec"
                  },
                  {
                    "text": "read_pointer",
                    "link": "/reference/pill_engine_core/mirror/fn.read_pointer"
                  },
                  {
                    "text": "read_ref",
                    "link": "/reference/pill_engine_core/mirror/fn.read_ref"
                  },
                  {
                    "text": "read_span",
                    "link": "/reference/pill_engine_core/mirror/fn.read_span"
                  },
                  {
                    "text": "read_str",
                    "link": "/reference/pill_engine_core/mirror/fn.read_str"
                  },
                  {
                    "text": "read_string_vec",
                    "link": "/reference/pill_engine_core/mirror/fn.read_string_vec"
                  },
                  {
                    "text": "read_value_vec",
                    "link": "/reference/pill_engine_core/mirror/fn.read_value_vec"
                  },
                  {
                    "text": "set_last_error",
                    "link": "/reference/pill_engine_core/mirror/fn.set_last_error"
                  },
                  {
                    "text": "set_return_string",
                    "link": "/reference/pill_engine_core/mirror/fn.set_return_string"
                  },
                  {
                    "text": "slot",
                    "link": "/reference/pill_engine_core/mirror/fn.slot"
                  },
                  {
                    "text": "take_last_error",
                    "link": "/reference/pill_engine_core/mirror/fn.take_last_error"
                  },
                  {
                    "text": "take_return_string",
                    "link": "/reference/pill_engine_core/mirror/fn.take_return_string"
                  },
                  {
                    "text": "write",
                    "link": "/reference/pill_engine_core/mirror/fn.write"
                  },
                  {
                    "text": "write_option",
                    "link": "/reference/pill_engine_core/mirror/fn.write_option"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "MirrorResult",
                    "link": "/reference/pill_engine_core/mirror/type.MirrorResult"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "IMPORT_ALREADY_LOADED_OFFSET",
                    "link": "/reference/pill_engine_core/mirror/constant.IMPORT_ALREADY_LOADED_OFFSET"
                  },
                  {
                    "text": "IMPORT_METADATA_SOURCE_OFFSET",
                    "link": "/reference/pill_engine_core/mirror/constant.IMPORT_METADATA_SOURCE_OFFSET"
                  },
                  {
                    "text": "LAST_ERROR",
                    "link": "/reference/pill_engine_core/mirror/constant.LAST_ERROR"
                  },
                  {
                    "text": "OPTION_ARGUMENT_FLAG_OFFSET",
                    "link": "/reference/pill_engine_core/mirror/constant.OPTION_ARGUMENT_FLAG_OFFSET"
                  },
                  {
                    "text": "OPTION_RETURN_VALUE_OFFSET",
                    "link": "/reference/pill_engine_core/mirror/constant.OPTION_RETURN_VALUE_OFFSET"
                  },
                  {
                    "text": "RETURN_STRING",
                    "link": "/reference/pill_engine_core/mirror/constant.RETURN_STRING"
                  },
                  {
                    "text": "SLOT_SIZE",
                    "link": "/reference/pill_engine_core/mirror/constant.SLOT_SIZE"
                  },
                  {
                    "text": "STATUS_ERROR",
                    "link": "/reference/pill_engine_core/mirror/constant.STATUS_ERROR"
                  },
                  {
                    "text": "STATUS_OK",
                    "link": "/reference/pill_engine_core/mirror/constant.STATUS_OK"
                  }
                ]
              },
              {
                "text": "Macros",
                "collapsed": true,
                "items": [
                  {
                    "text": "plain_mirror_value",
                    "link": "/reference/pill_engine_core/mirror/macro.plain_mirror_value"
                  }
                ]
              }
            ]
          },
          {
            "text": "module_abi",
            "link": "/reference/pill_engine_core/module_abi/",
            "collapsed": true,
            "items": [
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MODULE_ABI_VERSION",
                    "link": "/reference/pill_engine_core/module_abi/constant.MODULE_ABI_VERSION"
                  }
                ]
              }
            ]
          },
          {
            "text": "persistence",
            "link": "/reference/pill_engine_core/persistence/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "components",
                    "link": "/reference/pill_engine_core/persistence/components/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PersistTypeManifestEntry",
                            "link": "/reference/pill_engine_core/persistence/components/struct.PersistTypeManifestEntry"
                          },
                          {
                            "text": "PersistTypeMetadata",
                            "link": "/reference/pill_engine_core/persistence/components/struct.PersistTypeMetadata"
                          },
                          {
                            "text": "SelectiveMigrationReport",
                            "link": "/reference/pill_engine_core/persistence/components/struct.SelectiveMigrationReport"
                          },
                          {
                            "text": "SkippedType",
                            "link": "/reference/pill_engine_core/persistence/components/struct.SkippedType"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "deserialize_component",
                            "link": "/reference/pill_engine_core/persistence/components/fn.deserialize_component"
                          },
                          {
                            "text": "insert_boxed_component",
                            "link": "/reference/pill_engine_core/persistence/components/fn.insert_boxed_component"
                          },
                          {
                            "text": "serialize_component",
                            "link": "/reference/pill_engine_core/persistence/components/fn.serialize_component"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "migration",
                    "link": "/reference/pill_engine_core/persistence/migration/"
                  },
                  {
                    "text": "registry",
                    "link": "/reference/pill_engine_core/persistence/registry/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "calculate_schema_hash",
                            "link": "/reference/pill_engine_core/persistence/registry/fn.calculate_schema_hash"
                          },
                          {
                            "text": "merge_json",
                            "link": "/reference/pill_engine_core/persistence/registry/fn.merge_json"
                          },
                          {
                            "text": "normalize_schema_shape",
                            "link": "/reference/pill_engine_core/persistence/registry/fn.normalize_schema_shape"
                          }
                        ]
                      },
                      {
                        "text": "Type aliases",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DeserializeComponentFn",
                            "link": "/reference/pill_engine_core/persistence/registry/type.DeserializeComponentFn"
                          },
                          {
                            "text": "InsertComponentFn",
                            "link": "/reference/pill_engine_core/persistence/registry/type.InsertComponentFn"
                          },
                          {
                            "text": "RestoreResourceFn",
                            "link": "/reference/pill_engine_core/persistence/registry/type.RestoreResourceFn"
                          },
                          {
                            "text": "SerializeComponentFn",
                            "link": "/reference/pill_engine_core/persistence/registry/type.SerializeComponentFn"
                          },
                          {
                            "text": "SerializeResourceFn",
                            "link": "/reference/pill_engine_core/persistence/registry/type.SerializeResourceFn"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "resources",
                    "link": "/reference/pill_engine_core/persistence/resources/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PersistResourceManifestEntry",
                            "link": "/reference/pill_engine_core/persistence/resources/struct.PersistResourceManifestEntry"
                          },
                          {
                            "text": "ResourceSnapshot",
                            "link": "/reference/pill_engine_core/persistence/resources/struct.ResourceSnapshot"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "calculate_resource_schema_hash",
                            "link": "/reference/pill_engine_core/persistence/resources/fn.calculate_resource_schema_hash"
                          },
                          {
                            "text": "decode_foreign_resource_payload",
                            "link": "/reference/pill_engine_core/persistence/resources/fn.decode_foreign_resource_payload"
                          },
                          {
                            "text": "restore_resource",
                            "link": "/reference/pill_engine_core/persistence/resources/fn.restore_resource"
                          },
                          {
                            "text": "serialize_foreign_resource",
                            "link": "/reference/pill_engine_core/persistence/resources/fn.serialize_foreign_resource"
                          },
                          {
                            "text": "serialize_resource",
                            "link": "/reference/pill_engine_core/persistence/resources/fn.serialize_resource"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "profiling",
            "link": "/reference/pill_engine_core/profiling/"
          },
          {
            "text": "query",
            "link": "/reference/pill_engine_core/query/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "change_detection",
                    "link": "/reference/pill_engine_core/query/change_detection/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Mut",
                            "link": "/reference/pill_engine_core/query/change_detection/struct.Mut"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "filter",
                    "link": "/reference/pill_engine_core/query/filter/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Added",
                            "link": "/reference/pill_engine_core/query/filter/struct.Added"
                          },
                          {
                            "text": "Changed",
                            "link": "/reference/pill_engine_core/query/filter/struct.Changed"
                          },
                          {
                            "text": "Or",
                            "link": "/reference/pill_engine_core/query/filter/struct.Or"
                          },
                          {
                            "text": "TickFilterState",
                            "link": "/reference/pill_engine_core/query/filter/struct.TickFilterState"
                          },
                          {
                            "text": "With",
                            "link": "/reference/pill_engine_core/query/filter/struct.With"
                          },
                          {
                            "text": "Without",
                            "link": "/reference/pill_engine_core/query/filter/struct.Without"
                          }
                        ]
                      },
                      {
                        "text": "Traits",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "QueryFilter",
                            "link": "/reference/pill_engine_core/query/filter/trait.QueryFilter"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "and_filter_pairs",
                            "link": "/reference/pill_engine_core/query/filter/fn.and_filter_pairs"
                          }
                        ]
                      },
                      {
                        "text": "Macros",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "impl_query_filter_or",
                            "link": "/reference/pill_engine_core/query/filter/macro.impl_query_filter_or"
                          },
                          {
                            "text": "impl_query_filter_tuple",
                            "link": "/reference/pill_engine_core/query/filter/macro.impl_query_filter_tuple"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "iter",
                    "link": "/reference/pill_engine_core/query/iter/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "BatchStats",
                            "link": "/reference/pill_engine_core/query/iter/struct.BatchStats"
                          },
                          {
                            "text": "ParallelPlan",
                            "link": "/reference/pill_engine_core/query/iter/struct.ParallelPlan"
                          },
                          {
                            "text": "ParQueryIter",
                            "link": "/reference/pill_engine_core/query/iter/struct.ParQueryIter"
                          },
                          {
                            "text": "QueryIterMut",
                            "link": "/reference/pill_engine_core/query/iter/struct.QueryIterMut"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "WorkPlan",
                            "link": "/reference/pill_engine_core/query/iter/enum.WorkPlan"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "iterator_work_group_count",
                            "link": "/reference/pill_engine_core/query/iter/fn.iterator_work_group_count"
                          },
                          {
                            "text": "run_group",
                            "link": "/reference/pill_engine_core/query/iter/fn.run_group"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "ptr",
                    "link": "/reference/pill_engine_core/query/ptr/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "SendPtr",
                            "link": "/reference/pill_engine_core/query/ptr/struct.SendPtr"
                          },
                          {
                            "text": "SendPtrMut",
                            "link": "/reference/pill_engine_core/query/ptr/struct.SendPtrMut"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "query",
                    "link": "/reference/pill_engine_core/query/query/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Query",
                            "link": "/reference/pill_engine_core/query/query/struct.Query"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "resource",
                    "link": "/reference/pill_engine_core/query/resource/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Res",
                            "link": "/reference/pill_engine_core/query/resource/struct.Res"
                          },
                          {
                            "text": "ResMut",
                            "link": "/reference/pill_engine_core/query/resource/struct.ResMut"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "target",
                    "link": "/reference/pill_engine_core/query/target/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "MutFetchState",
                            "link": "/reference/pill_engine_core/query/target/struct.MutFetchState"
                          }
                        ]
                      },
                      {
                        "text": "Traits",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "QueryTarget",
                            "link": "/reference/pill_engine_core/query/target/trait.QueryTarget"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "declared_shared_schema",
                            "link": "/reference/pill_engine_core/query/target/fn.declared_shared_schema"
                          },
                          {
                            "text": "find_aliasing_component",
                            "link": "/reference/pill_engine_core/query/target/fn.find_aliasing_component"
                          }
                        ]
                      },
                      {
                        "text": "Macros",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "impl_query_target_tuple",
                            "link": "/reference/pill_engine_core/query/target/macro.impl_query_target_tuple"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FilteredArchetypeRange",
                    "link": "/reference/pill_engine_core/query/struct.FilteredArchetypeRange"
                  }
                ]
              }
            ]
          },
          {
            "text": "resource",
            "link": "/reference/pill_engine_core/resource/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ErasedResource",
                    "link": "/reference/pill_engine_core/resource/struct.ErasedResource"
                  },
                  {
                    "text": "ErasedResourceOps",
                    "link": "/reference/pill_engine_core/resource/struct.ErasedResourceOps"
                  },
                  {
                    "text": "KeptLayoutDeclaration",
                    "link": "/reference/pill_engine_core/resource/struct.KeptLayoutDeclaration"
                  },
                  {
                    "text": "ResHandle",
                    "link": "/reference/pill_engine_core/resource/struct.ResHandle"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ResourceId",
                    "link": "/reference/pill_engine_core/resource/enum.ResourceId"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "Resource",
                    "link": "/reference/pill_engine_core/resource/trait.Resource"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "drop_in_place_of",
                    "link": "/reference/pill_engine_core/resource/fn.drop_in_place_of"
                  },
                  {
                    "text": "drop_nothing",
                    "link": "/reference/pill_engine_core/resource/fn.drop_nothing"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "SHARED_RESOURCE_HASH_SALT",
                    "link": "/reference/pill_engine_core/resource/constant.SHARED_RESOURCE_HASH_SALT"
                  }
                ]
              }
            ]
          },
          {
            "text": "saved_references",
            "link": "/reference/pill_engine_core/saved_references/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "SavedAssetReference",
                    "link": "/reference/pill_engine_core/saved_references/struct.SavedAssetReference"
                  },
                  {
                    "text": "SavedAssetReferenceFields",
                    "link": "/reference/pill_engine_core/saved_references/struct.SavedAssetReferenceFields"
                  },
                  {
                    "text": "SavedEntityLink",
                    "link": "/reference/pill_engine_core/saved_references/struct.SavedEntityLink"
                  },
                  {
                    "text": "SavedEntityLinks",
                    "link": "/reference/pill_engine_core/saved_references/struct.SavedEntityLinks"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "SavedReference",
                    "link": "/reference/pill_engine_core/saved_references/enum.SavedReference"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset_field_value_from_outcome",
                    "link": "/reference/pill_engine_core/saved_references/fn.asset_field_value_from_outcome"
                  },
                  {
                    "text": "first_report_of",
                    "link": "/reference/pill_engine_core/saved_references/fn.first_report_of"
                  },
                  {
                    "text": "restore_asset_reference",
                    "link": "/reference/pill_engine_core/saved_references/fn.restore_asset_reference"
                  },
                  {
                    "text": "saved_reference",
                    "link": "/reference/pill_engine_core/saved_references/fn.saved_reference"
                  }
                ]
              }
            ]
          },
          {
            "text": "scene",
            "link": "/reference/pill_engine_core/scene/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Scene",
                    "link": "/reference/pill_engine_core/scene/struct.Scene"
                  },
                  {
                    "text": "SceneDocument",
                    "link": "/reference/pill_engine_core/scene/struct.SceneDocument"
                  },
                  {
                    "text": "SceneEntity",
                    "link": "/reference/pill_engine_core/scene/struct.SceneEntity"
                  },
                  {
                    "text": "SceneLoad",
                    "link": "/reference/pill_engine_core/scene/struct.SceneLoad"
                  },
                  {
                    "text": "SceneSave",
                    "link": "/reference/pill_engine_core/scene/struct.SceneSave"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "AttachError",
                    "link": "/reference/pill_engine_core/scene/enum.AttachError"
                  },
                  {
                    "text": "DecodedField",
                    "link": "/reference/pill_engine_core/scene/enum.DecodedField"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "attach_component",
                    "link": "/reference/pill_engine_core/scene/fn.attach_component"
                  },
                  {
                    "text": "bytes_of",
                    "link": "/reference/pill_engine_core/scene/fn.bytes_of"
                  },
                  {
                    "text": "cleared_reference_value",
                    "link": "/reference/pill_engine_core/scene/fn.cleared_reference_value"
                  },
                  {
                    "text": "decode_opaque_field",
                    "link": "/reference/pill_engine_core/scene/fn.decode_opaque_field"
                  },
                  {
                    "text": "decoded_field",
                    "link": "/reference/pill_engine_core/scene/fn.decoded_field"
                  },
                  {
                    "text": "encode_field_value",
                    "link": "/reference/pill_engine_core/scene/fn.encode_field_value"
                  },
                  {
                    "text": "hex_of",
                    "link": "/reference/pill_engine_core/scene/fn.hex_of"
                  },
                  {
                    "text": "is_set_reference",
                    "link": "/reference/pill_engine_core/scene/fn.is_set_reference"
                  },
                  {
                    "text": "join_command_errors",
                    "link": "/reference/pill_engine_core/scene/fn.join_command_errors"
                  },
                  {
                    "text": "load_scene",
                    "link": "/reference/pill_engine_core/scene/fn.load_scene"
                  },
                  {
                    "text": "narrow_to_f32",
                    "link": "/reference/pill_engine_core/scene/fn.narrow_to_f32"
                  },
                  {
                    "text": "narrow_to_signed",
                    "link": "/reference/pill_engine_core/scene/fn.narrow_to_signed"
                  },
                  {
                    "text": "narrow_to_unsigned",
                    "link": "/reference/pill_engine_core/scene/fn.narrow_to_unsigned"
                  },
                  {
                    "text": "save_scene",
                    "link": "/reference/pill_engine_core/scene/fn.save_scene"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "SCENE_SHARED_NAME",
                    "link": "/reference/pill_engine_core/scene/constant.SCENE_SHARED_NAME"
                  }
                ]
              }
            ]
          },
          {
            "text": "scheduler",
            "link": "/reference/pill_engine_core/scheduler/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "SystemAccess",
                    "link": "/reference/pill_engine_core/scheduler/struct.SystemAccess"
                  },
                  {
                    "text": "SystemScheduler",
                    "link": "/reference/pill_engine_core/scheduler/struct.SystemScheduler"
                  },
                  {
                    "text": "TypeKey",
                    "link": "/reference/pill_engine_core/scheduler/struct.TypeKey"
                  }
                ]
              }
            ]
          },
          {
            "text": "scripting",
            "link": "/reference/pill_engine_core/scripting/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ScriptContext",
                    "link": "/reference/pill_engine_core/scripting/struct.ScriptContext"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "ScriptComponent",
                    "link": "/reference/pill_engine_core/scripting/trait.ScriptComponent"
                  }
                ]
              }
            ]
          },
          {
            "text": "settings",
            "link": "/reference/pill_engine_core/settings/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "SettingsAssetOps",
                    "link": "/reference/pill_engine_core/settings/struct.SettingsAssetOps"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "SettingsOutcome",
                    "link": "/reference/pill_engine_core/settings/enum.SettingsOutcome"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "SettingsAssetManager",
                    "link": "/reference/pill_engine_core/settings/trait.SettingsAssetManager"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_settings_bytes_of",
                    "link": "/reference/pill_engine_core/settings/fn.apply_settings_bytes_of"
                  },
                  {
                    "text": "render_settings_default_of",
                    "link": "/reference/pill_engine_core/settings/fn.render_settings_default_of"
                  }
                ]
              }
            ]
          },
          {
            "text": "startup_scene",
            "link": "/reference/pill_engine_core/startup_scene/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "StartupScene",
                    "link": "/reference/pill_engine_core/startup_scene/struct.StartupScene"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_startup_scene",
                    "link": "/reference/pill_engine_core/startup_scene/fn.apply_startup_scene"
                  },
                  {
                    "text": "load_startup_scene",
                    "link": "/reference/pill_engine_core/startup_scene/fn.load_startup_scene"
                  },
                  {
                    "text": "queue_startup_scene",
                    "link": "/reference/pill_engine_core/startup_scene/fn.queue_startup_scene"
                  }
                ]
              }
            ]
          },
          {
            "text": "system",
            "link": "/reference/pill_engine_core/system/",
            "collapsed": true,
            "items": [
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "IntoSystem",
                    "link": "/reference/pill_engine_core/system/trait.IntoSystem"
                  },
                  {
                    "text": "System",
                    "link": "/reference/pill_engine_core/system/trait.System"
                  },
                  {
                    "text": "SystemOutput",
                    "link": "/reference/pill_engine_core/system/trait.SystemOutput"
                  },
                  {
                    "text": "SystemParam",
                    "link": "/reference/pill_engine_core/system/trait.SystemParam"
                  },
                  {
                    "text": "SystemParamFunction",
                    "link": "/reference/pill_engine_core/system/trait.SystemParamFunction"
                  }
                ]
              },
              {
                "text": "Macros",
                "collapsed": true,
                "items": [
                  {
                    "text": "impl_system_param_function",
                    "link": "/reference/pill_engine_core/system/macro.impl_system_param_function"
                  },
                  {
                    "text": "impl_system_param_tuple",
                    "link": "/reference/pill_engine_core/system/macro.impl_system_param_tuple"
                  }
                ]
              }
            ]
          },
          {
            "text": "time",
            "link": "/reference/pill_engine_core/time/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Time",
                    "link": "/reference/pill_engine_core/time/struct.Time"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MAXIMUM_DELTA_SECONDS",
                    "link": "/reference/pill_engine_core/time/constant.MAXIMUM_DELTA_SECONDS"
                  }
                ]
              }
            ]
          },
          {
            "text": "type_names",
            "link": "/reference/pill_engine_core/type_names/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "rewritten_type_name",
                    "link": "/reference/pill_engine_core/type_names/fn.rewritten_type_name"
                  },
                  {
                    "text": "stable_type_name",
                    "link": "/reference/pill_engine_core/type_names/fn.stable_type_name"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CORE_CRATE_PREFIX",
                    "link": "/reference/pill_engine_core/type_names/constant.CORE_CRATE_PREFIX"
                  },
                  {
                    "text": "PUBLIC_CRATE_PREFIX",
                    "link": "/reference/pill_engine_core/type_names/constant.PUBLIC_CRATE_PREFIX"
                  }
                ]
              }
            ]
          },
          {
            "text": "world",
            "link": "/reference/pill_engine_core/world/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "components",
                    "link": "/reference/pill_engine_core/world/components/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ColumnChunk",
                            "link": "/reference/pill_engine_core/world/components/struct.ColumnChunk"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "reflection",
                    "link": "/reference/pill_engine_core/world/reflection/"
                  },
                  {
                    "text": "resources",
                    "link": "/reference/pill_engine_core/world/resources/"
                  },
                  {
                    "text": "scripting",
                    "link": "/reference/pill_engine_core/world/scripting/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Type aliases",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ScriptUpdater",
                            "link": "/reference/pill_engine_core/world/scripting/type.ScriptUpdater"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "ticks",
                    "link": "/reference/pill_engine_core/world/ticks/"
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentFieldLayout",
                    "link": "/reference/pill_engine_core/world/struct.ComponentFieldLayout"
                  },
                  {
                    "text": "EntityBuilder",
                    "link": "/reference/pill_engine_core/world/struct.EntityBuilder"
                  },
                  {
                    "text": "EntityLocation",
                    "link": "/reference/pill_engine_core/world/struct.EntityLocation"
                  },
                  {
                    "text": "EntityRow",
                    "link": "/reference/pill_engine_core/world/struct.EntityRow"
                  },
                  {
                    "text": "IteratorTimings",
                    "link": "/reference/pill_engine_core/world/struct.IteratorTimings"
                  },
                  {
                    "text": "SharedResourceClaim",
                    "link": "/reference/pill_engine_core/world/struct.SharedResourceClaim"
                  },
                  {
                    "text": "TypedComponentInserter",
                    "link": "/reference/pill_engine_core/world/struct.TypedComponentInserter"
                  },
                  {
                    "text": "World",
                    "link": "/reference/pill_engine_core/world/struct.World"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "ComponentInserter",
                    "link": "/reference/pill_engine_core/world/trait.ComponentInserter"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "is_valid_foreign_layout",
                    "link": "/reference/pill_engine_core/world/fn.is_valid_foreign_layout"
                  },
                  {
                    "text": "per_thread_last_run_tick",
                    "link": "/reference/pill_engine_core/world/fn.per_thread_last_run_tick"
                  },
                  {
                    "text": "per_thread_this_run_tick",
                    "link": "/reference/pill_engine_core/world/fn.per_thread_this_run_tick"
                  },
                  {
                    "text": "set_per_thread_last_run_tick",
                    "link": "/reference/pill_engine_core/world/fn.set_per_thread_last_run_tick"
                  },
                  {
                    "text": "set_per_thread_this_run_tick",
                    "link": "/reference/pill_engine_core/world/fn.set_per_thread_this_run_tick"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "REGISTRATION_HEADROOM_WARNING_THRESHOLD",
                    "link": "/reference/pill_engine_core/world/constant.REGISTRATION_HEADROOM_WARNING_THRESHOLD"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Statics",
        "collapsed": true,
        "items": [
          {
            "text": "PROFILED_ALLOCATOR",
            "link": "/reference/pill_engine_core/static.PROFILED_ALLOCATOR"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Engine Macros",
    "link": "/reference/pill_engine_macros/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "mirror",
            "link": "/reference/pill_engine_macros/mirror/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "LoweredParameter",
                    "link": "/reference/pill_engine_macros/mirror/struct.LoweredParameter"
                  },
                  {
                    "text": "LoweredReturn",
                    "link": "/reference/pill_engine_macros/mirror/struct.LoweredReturn"
                  },
                  {
                    "text": "MirroredFunction",
                    "link": "/reference/pill_engine_macros/mirror/struct.MirroredFunction"
                  },
                  {
                    "text": "ObjectFlags",
                    "link": "/reference/pill_engine_macros/mirror/struct.ObjectFlags"
                  },
                  {
                    "text": "Owner",
                    "link": "/reference/pill_engine_macros/mirror/struct.Owner"
                  },
                  {
                    "text": "TypeRow",
                    "link": "/reference/pill_engine_macros/mirror/struct.TypeRow"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "Receiver",
                    "link": "/reference/pill_engine_macros/mirror/enum.Receiver"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "array_shape",
                    "link": "/reference/pill_engine_macros/mirror/fn.array_shape"
                  },
                  {
                    "text": "concrete_type",
                    "link": "/reference/pill_engine_macros/mirror/fn.concrete_type"
                  },
                  {
                    "text": "discriminant_value",
                    "link": "/reference/pill_engine_macros/mirror/fn.discriminant_value"
                  },
                  {
                    "text": "emit_function",
                    "link": "/reference/pill_engine_macros/mirror/fn.emit_function"
                  },
                  {
                    "text": "generic_argument",
                    "link": "/reference/pill_engine_macros/mirror/fn.generic_argument"
                  },
                  {
                    "text": "into_iterator_item",
                    "link": "/reference/pill_engine_macros/mirror/fn.into_iterator_item"
                  },
                  {
                    "text": "is_named",
                    "link": "/reference/pill_engine_macros/mirror/fn.is_named"
                  },
                  {
                    "text": "is_str",
                    "link": "/reference/pill_engine_macros/mirror/fn.is_str"
                  },
                  {
                    "text": "last_segment",
                    "link": "/reference/pill_engine_macros/mirror/fn.last_segment"
                  },
                  {
                    "text": "lower_element",
                    "link": "/reference/pill_engine_macros/mirror/fn.lower_element"
                  },
                  {
                    "text": "lower_parameter",
                    "link": "/reference/pill_engine_macros/mirror/fn.lower_parameter"
                  },
                  {
                    "text": "lower_plain_return",
                    "link": "/reference/pill_engine_macros/mirror/fn.lower_plain_return"
                  },
                  {
                    "text": "lower_return",
                    "link": "/reference/pill_engine_macros/mirror/fn.lower_return"
                  },
                  {
                    "text": "mirror_enum",
                    "link": "/reference/pill_engine_macros/mirror/fn.mirror_enum"
                  },
                  {
                    "text": "mirror_fn",
                    "link": "/reference/pill_engine_macros/mirror/fn.mirror_fn"
                  },
                  {
                    "text": "mirror_impl",
                    "link": "/reference/pill_engine_macros/mirror/fn.mirror_impl"
                  },
                  {
                    "text": "mirror_object",
                    "link": "/reference/pill_engine_macros/mirror/fn.mirror_object"
                  },
                  {
                    "text": "mirror_resource",
                    "link": "/reference/pill_engine_macros/mirror/fn.mirror_resource"
                  },
                  {
                    "text": "object_flags",
                    "link": "/reference/pill_engine_macros/mirror/fn.object_flags"
                  },
                  {
                    "text": "primitive_name",
                    "link": "/reference/pill_engine_macros/mirror/fn.primitive_name"
                  },
                  {
                    "text": "primitive_width",
                    "link": "/reference/pill_engine_macros/mirror/fn.primitive_width"
                  },
                  {
                    "text": "qualified_name",
                    "link": "/reference/pill_engine_macros/mirror/fn.qualified_name"
                  },
                  {
                    "text": "tuple_layout",
                    "link": "/reference/pill_engine_macros/mirror/fn.tuple_layout"
                  },
                  {
                    "text": "type_name",
                    "link": "/reference/pill_engine_macros/mirror/fn.type_name"
                  },
                  {
                    "text": "type_row",
                    "link": "/reference/pill_engine_macros/mirror/fn.type_row"
                  },
                  {
                    "text": "unsupported",
                    "link": "/reference/pill_engine_macros/mirror/fn.unsupported"
                  },
                  {
                    "text": "value_tag",
                    "link": "/reference/pill_engine_macros/mirror/fn.value_tag"
                  },
                  {
                    "text": "value_type_encodings",
                    "link": "/reference/pill_engine_macros/mirror/fn.value_type_encodings"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PRIMITIVE_WIDTHS",
                    "link": "/reference/pill_engine_macros/mirror/constant.PRIMITIVE_WIDTHS"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "AccessorEmission",
            "link": "/reference/pill_engine_macros/struct.AccessorEmission"
          },
          {
            "text": "FieldTag",
            "link": "/reference/pill_engine_macros/struct.FieldTag"
          },
          {
            "text": "PatchArguments",
            "link": "/reference/pill_engine_macros/struct.PatchArguments"
          },
          {
            "text": "ValueTypeDeclaration",
            "link": "/reference/pill_engine_macros/struct.ValueTypeDeclaration"
          },
          {
            "text": "ValueTypeField",
            "link": "/reference/pill_engine_macros/struct.ValueTypeField"
          }
        ]
      },
      {
        "text": "Enums",
        "collapsed": true,
        "items": [
          {
            "text": "HeapFieldKind",
            "link": "/reference/pill_engine_macros/enum.HeapFieldKind"
          },
          {
            "text": "LayoutSubject",
            "link": "/reference/pill_engine_macros/enum.LayoutSubject"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "add_field_decorator",
            "link": "/reference/pill_engine_macros/fn.add_field_decorator"
          },
          {
            "text": "arguments_of_two",
            "link": "/reference/pill_engine_macros/fn.arguments_of_two"
          },
          {
            "text": "component_field_descriptors",
            "link": "/reference/pill_engine_macros/fn.component_field_descriptors"
          },
          {
            "text": "container_element_type",
            "link": "/reference/pill_engine_macros/fn.container_element_type"
          },
          {
            "text": "decorator_arguments",
            "link": "/reference/pill_engine_macros/fn.decorator_arguments"
          },
          {
            "text": "emit_heap_field_accessor",
            "link": "/reference/pill_engine_macros/fn.emit_heap_field_accessor"
          },
          {
            "text": "emit_resize_trampoline",
            "link": "/reference/pill_engine_macros/fn.emit_resize_trampoline"
          },
          {
            "text": "empty_field_layout",
            "link": "/reference/pill_engine_macros/fn.empty_field_layout"
          },
          {
            "text": "field_decorator_list",
            "link": "/reference/pill_engine_macros/fn.field_decorator_list"
          },
          {
            "text": "field_type_tag",
            "link": "/reference/pill_engine_macros/fn.field_type_tag"
          },
          {
            "text": "flattened_path",
            "link": "/reference/pill_engine_macros/fn.flattened_path"
          },
          {
            "text": "handle_field_records",
            "link": "/reference/pill_engine_macros/fn.handle_field_records"
          },
          {
            "text": "handle_type_argument",
            "link": "/reference/pill_engine_macros/fn.handle_type_argument"
          },
          {
            "text": "heap_owned_rejection",
            "link": "/reference/pill_engine_macros/fn.heap_owned_rejection"
          },
          {
            "text": "hot_patch_resolver_export",
            "link": "/reference/pill_engine_macros/fn.hot_patch_resolver_export"
          },
          {
            "text": "is_primitive_tag",
            "link": "/reference/pill_engine_macros/fn.is_primitive_tag"
          },
          {
            "text": "layout_emission",
            "link": "/reference/pill_engine_macros/fn.layout_emission"
          },
          {
            "text": "layout_field_impl",
            "link": "/reference/pill_engine_macros/fn.layout_field_impl"
          },
          {
            "text": "literal_as_f32",
            "link": "/reference/pill_engine_macros/fn.literal_as_f32"
          },
          {
            "text": "literal_as_usize",
            "link": "/reference/pill_engine_macros/fn.literal_as_usize"
          },
          {
            "text": "module_abi_version_export",
            "link": "/reference/pill_engine_macros/fn.module_abi_version_export"
          },
          {
            "text": "module_init_export_with",
            "link": "/reference/pill_engine_macros/fn.module_init_export_with"
          },
          {
            "text": "module_register_export",
            "link": "/reference/pill_engine_macros/fn.module_register_export"
          },
          {
            "text": "parse_field_decorators",
            "link": "/reference/pill_engine_macros/fn.parse_field_decorators"
          },
          {
            "text": "parse_patch_arguments",
            "link": "/reference/pill_engine_macros/fn.parse_patch_arguments"
          },
          {
            "text": "parse_string_list",
            "link": "/reference/pill_engine_macros/fn.parse_string_list"
          },
          {
            "text": "single_argument",
            "link": "/reference/pill_engine_macros/fn.single_argument"
          }
        ]
      },
      {
        "text": "Type aliases",
        "collapsed": true,
        "items": [
          {
            "text": "DecoratorArguments",
            "link": "/reference/pill_engine_macros/type.DecoratorArguments"
          }
        ]
      },
      {
        "text": "Constants",
        "collapsed": true,
        "items": [
          {
            "text": "FIELD_DECORATOR_USAGE",
            "link": "/reference/pill_engine_macros/constant.FIELD_DECORATOR_USAGE"
          }
        ]
      },
      {
        "text": "Procedural macros",
        "collapsed": true,
        "items": [
          {
            "text": "pill_hot",
            "link": "/reference/pill_engine_macros/macro.pill_hot"
          },
          {
            "text": "pill_hot_fn",
            "link": "/reference/pill_engine_macros/macro.pill_hot_fn"
          },
          {
            "text": "pill_hot_resolver",
            "link": "/reference/pill_engine_macros/macro.pill_hot_resolver"
          },
          {
            "text": "pill_mirror_fn",
            "link": "/reference/pill_engine_macros/macro.pill_mirror_fn"
          },
          {
            "text": "pill_mirror_impl",
            "link": "/reference/pill_engine_macros/macro.pill_mirror_impl"
          },
          {
            "text": "pill_mirror_method",
            "link": "/reference/pill_engine_macros/macro.pill_mirror_method"
          },
          {
            "text": "pill_mirror_object",
            "link": "/reference/pill_engine_macros/macro.pill_mirror_object"
          },
          {
            "text": "pill_mirror_resource",
            "link": "/reference/pill_engine_macros/macro.pill_mirror_resource"
          },
          {
            "text": "pill_module",
            "link": "/reference/pill_engine_macros/macro.pill_module"
          },
          {
            "text": "pill_project",
            "link": "/reference/pill_engine_macros/macro.pill_project"
          },
          {
            "text": "pill_value_type",
            "link": "/reference/pill_engine_macros/macro.pill_value_type"
          },
          {
            "text": "PillAsset",
            "link": "/reference/pill_engine_macros/macro.PillAsset"
          },
          {
            "text": "PillComponent",
            "link": "/reference/pill_engine_macros/macro.PillComponent"
          },
          {
            "text": "PillLayout",
            "link": "/reference/pill_engine_macros/macro.PillLayout"
          },
          {
            "text": "PillMirror",
            "link": "/reference/pill_engine_macros/macro.PillMirror"
          },
          {
            "text": "PillResource",
            "link": "/reference/pill_engine_macros/macro.PillResource"
          },
          {
            "text": "system",
            "link": "/reference/pill_engine_macros/macro.system"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Hot Scan",
    "link": "/reference/pill_hot_scan/",
    "collapsed": true,
    "items": [
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "FunctionText",
            "link": "/reference/pill_hot_scan/struct.FunctionText"
          },
          {
            "text": "HotFunction",
            "link": "/reference/pill_hot_scan/struct.HotFunction"
          },
          {
            "text": "ImplBlock",
            "link": "/reference/pill_hot_scan/struct.ImplBlock"
          }
        ]
      },
      {
        "text": "Enums",
        "collapsed": true,
        "items": [
          {
            "text": "HotFunctionKind",
            "link": "/reference/pill_hot_scan/enum.HotFunctionKind"
          },
          {
            "text": "SkipStrategy",
            "link": "/reference/pill_hot_scan/enum.SkipStrategy"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "all_functions",
            "link": "/reference/pill_hot_scan/fn.all_functions"
          },
          {
            "text": "code_mask",
            "link": "/reference/pill_hot_scan/fn.code_mask"
          },
          {
            "text": "crate_root_file",
            "link": "/reference/pill_hot_scan/fn.crate_root_file"
          },
          {
            "text": "declaration_has_attribute",
            "link": "/reference/pill_hot_scan/fn.declaration_has_attribute"
          },
          {
            "text": "declaration_is_abi_entry_point",
            "link": "/reference/pill_hot_scan/fn.declaration_is_abi_entry_point"
          },
          {
            "text": "declaration_is_cfg_gated",
            "link": "/reference/pill_hot_scan/fn.declaration_is_cfg_gated"
          },
          {
            "text": "declaration_takes_receiver",
            "link": "/reference/pill_hot_scan/fn.declaration_takes_receiver"
          },
          {
            "text": "declares_trait",
            "link": "/reference/pill_hot_scan/fn.declares_trait"
          },
          {
            "text": "descriptor_at",
            "link": "/reference/pill_hot_scan/fn.descriptor_at"
          },
          {
            "text": "find_function",
            "link": "/reference/pill_hot_scan/fn.find_function"
          },
          {
            "text": "find_function_in",
            "link": "/reference/pill_hot_scan/fn.find_function_in"
          },
          {
            "text": "find_method",
            "link": "/reference/pill_hot_scan/fn.find_method"
          },
          {
            "text": "function_bodies",
            "link": "/reference/pill_hot_scan/fn.function_bodies"
          },
          {
            "text": "generate_function_inventory",
            "link": "/reference/pill_hot_scan/fn.generate_function_inventory"
          },
          {
            "text": "hot_function_names",
            "link": "/reference/pill_hot_scan/fn.hot_function_names"
          },
          {
            "text": "hot_functions",
            "link": "/reference/pill_hot_scan/fn.hot_functions"
          },
          {
            "text": "hot_functions_in",
            "link": "/reference/pill_hot_scan/fn.hot_functions_in"
          },
          {
            "text": "impl_blocks_for_concrete_types",
            "link": "/reference/pill_hot_scan/fn.impl_blocks_for_concrete_types"
          },
          {
            "text": "impl_header_names",
            "link": "/reference/pill_hot_scan/fn.impl_header_names"
          },
          {
            "text": "inventory_name",
            "link": "/reference/pill_hot_scan/fn.inventory_name"
          },
          {
            "text": "is_identifier_byte",
            "link": "/reference/pill_hot_scan/fn.is_identifier_byte"
          },
          {
            "text": "matching_brace",
            "link": "/reference/pill_hot_scan/fn.matching_brace"
          },
          {
            "text": "next_open_brace",
            "link": "/reference/pill_hot_scan/fn.next_open_brace"
          },
          {
            "text": "normalized_signature",
            "link": "/reference/pill_hot_scan/fn.normalized_signature"
          },
          {
            "text": "receiver_path",
            "link": "/reference/pill_hot_scan/fn.receiver_path"
          },
          {
            "text": "rust_files",
            "link": "/reference/pill_hot_scan/fn.rust_files"
          },
          {
            "text": "scan_named_functions",
            "link": "/reference/pill_hot_scan/fn.scan_named_functions"
          },
          {
            "text": "simple_path",
            "link": "/reference/pill_hot_scan/fn.simple_path"
          },
          {
            "text": "strip_function_bodies",
            "link": "/reference/pill_hot_scan/fn.strip_function_bodies"
          },
          {
            "text": "top_level_use_statements",
            "link": "/reference/pill_hot_scan/fn.top_level_use_statements"
          },
          {
            "text": "trait_is_nameable_from_crate_root",
            "link": "/reference/pill_hot_scan/fn.trait_is_nameable_from_crate_root"
          },
          {
            "text": "write_inventory",
            "link": "/reference/pill_hot_scan/fn.write_inventory"
          }
        ]
      },
      {
        "text": "Constants",
        "collapsed": true,
        "items": [
          {
            "text": "ABI_ENTRY_POINT_ATTRIBUTES",
            "link": "/reference/pill_hot_scan/constant.ABI_ENTRY_POINT_ATTRIBUTES"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Input",
    "link": "/reference/pill_input/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "gamepads",
            "link": "/reference/pill_input/gamepads/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ActiveRumble",
                    "link": "/reference/pill_input/gamepads/struct.ActiveRumble"
                  },
                  {
                    "text": "Gamepads",
                    "link": "/reference/pill_input/gamepads/struct.Gamepads"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "gamepad_axis",
                    "link": "/reference/pill_input/gamepads/fn.gamepad_axis"
                  },
                  {
                    "text": "gamepad_button",
                    "link": "/reference/pill_input/gamepads/fn.gamepad_button"
                  },
                  {
                    "text": "rumble_effect",
                    "link": "/reference/pill_input/gamepads/fn.rumble_effect"
                  }
                ]
              }
            ]
          },
          {
            "text": "winit_events",
            "link": "/reference/pill_input/winit_events/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "button_state",
                    "link": "/reference/pill_input/winit_events/fn.button_state"
                  },
                  {
                    "text": "ime_event",
                    "link": "/reference/pill_input/winit_events/fn.ime_event"
                  },
                  {
                    "text": "key_code",
                    "link": "/reference/pill_input/winit_events/fn.key_code"
                  },
                  {
                    "text": "key_events",
                    "link": "/reference/pill_input/winit_events/fn.key_events"
                  },
                  {
                    "text": "modifier_state",
                    "link": "/reference/pill_input/winit_events/fn.modifier_state"
                  },
                  {
                    "text": "mouse_button",
                    "link": "/reference/pill_input/winit_events/fn.mouse_button"
                  },
                  {
                    "text": "translate_device_event",
                    "link": "/reference/pill_input/winit_events/fn.translate_device_event"
                  },
                  {
                    "text": "translate_window_event",
                    "link": "/reference/pill_input/winit_events/fn.translate_window_event"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MAPPED_KEY_COUNT",
                    "link": "/reference/pill_input/winit_events/constant.MAPPED_KEY_COUNT"
                  }
                ]
              },
              {
                "text": "Macros",
                "collapsed": true,
                "items": [
                  {
                    "text": "shared_key_codes",
                    "link": "/reference/pill_input/winit_events/macro.shared_key_codes"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Master Renderer",
    "link": "/reference/pill_master_renderer/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "chain",
            "link": "/reference/pill_master_renderer/chain/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ChainContext",
                    "link": "/reference/pill_master_renderer/chain/struct.ChainContext"
                  },
                  {
                    "text": "DrawRange",
                    "link": "/reference/pill_master_renderer/chain/struct.DrawRange"
                  },
                  {
                    "text": "GpuChain",
                    "link": "/reference/pill_master_renderer/chain/struct.GpuChain"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "PassOutput",
                    "link": "/reference/pill_master_renderer/chain/enum.PassOutput"
                  },
                  {
                    "text": "PassPlan",
                    "link": "/reference/pill_master_renderer/chain/enum.PassPlan"
                  },
                  {
                    "text": "PassSlot",
                    "link": "/reference/pill_master_renderer/chain/enum.PassSlot"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "build_pass",
                    "link": "/reference/pill_master_renderer/chain/fn.build_pass"
                  },
                  {
                    "text": "ensure_offscreen_targets",
                    "link": "/reference/pill_master_renderer/chain/fn.ensure_offscreen_targets"
                  },
                  {
                    "text": "offscreen_layout",
                    "link": "/reference/pill_master_renderer/chain/fn.offscreen_layout"
                  },
                  {
                    "text": "scaled_target_refusal",
                    "link": "/reference/pill_master_renderer/chain/fn.scaled_target_refusal"
                  },
                  {
                    "text": "shader_ranges",
                    "link": "/reference/pill_master_renderer/chain/fn.shader_ranges"
                  },
                  {
                    "text": "shaderless_target_refusal",
                    "link": "/reference/pill_master_renderer/chain/fn.shaderless_target_refusal"
                  },
                  {
                    "text": "unclaimed_ranges",
                    "link": "/reference/pill_master_renderer/chain/fn.unclaimed_ranges"
                  },
                  {
                    "text": "whole_queue",
                    "link": "/reference/pill_master_renderer/chain/fn.whole_queue"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "OffscreenLayoutKey",
                    "link": "/reference/pill_master_renderer/chain/type.OffscreenLayoutKey"
                  }
                ]
              }
            ]
          },
          {
            "text": "drawers",
            "link": "/reference/pill_master_renderer/drawers/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "mesh_drawer",
                    "link": "/reference/pill_master_renderer/drawers/mesh_drawer/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DrawingContext",
                            "link": "/reference/pill_master_renderer/drawers/mesh_drawer/struct.DrawingContext"
                          },
                          {
                            "text": "MeshDrawer",
                            "link": "/reference/pill_master_renderer/drawers/mesh_drawer/struct.MeshDrawer"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "error",
            "link": "/reference/pill_master_renderer/error/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CapturedErrors",
                    "link": "/reference/pill_master_renderer/error/struct.CapturedErrors"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "captured",
                    "link": "/reference/pill_master_renderer/error/fn.captured"
                  },
                  {
                    "text": "captured_now",
                    "link": "/reference/pill_master_renderer/error/fn.captured_now"
                  },
                  {
                    "text": "capturing_validation",
                    "link": "/reference/pill_master_renderer/error/fn.capturing_validation"
                  },
                  {
                    "text": "device_loss",
                    "link": "/reference/pill_master_renderer/error/fn.device_loss"
                  },
                  {
                    "text": "latch_device_loss",
                    "link": "/reference/pill_master_renderer/error/fn.latch_device_loss"
                  },
                  {
                    "text": "latched_device_loss",
                    "link": "/reference/pill_master_renderer/error/fn.latched_device_loss"
                  },
                  {
                    "text": "report_uncaptured_errors",
                    "link": "/reference/pill_master_renderer/error/fn.report_uncaptured_errors"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEVICE_LOSS",
                    "link": "/reference/pill_master_renderer/error/static.DEVICE_LOSS"
                  }
                ]
              }
            ]
          },
          {
            "text": "frame",
            "link": "/reference/pill_master_renderer/frame/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "consumed_component_names",
                    "link": "/reference/pill_master_renderer/frame/fn.consumed_component_names"
                  },
                  {
                    "text": "frame_asset_key",
                    "link": "/reference/pill_master_renderer/frame/fn.frame_asset_key"
                  },
                  {
                    "text": "note_ui_producer",
                    "link": "/reference/pill_master_renderer/frame/fn.note_ui_producer"
                  },
                  {
                    "text": "pick_camera",
                    "link": "/reference/pill_master_renderer/frame/fn.pick_camera"
                  },
                  {
                    "text": "rendering_system",
                    "link": "/reference/pill_master_renderer/frame/fn.rendering_system"
                  },
                  {
                    "text": "resolve_passes",
                    "link": "/reference/pill_master_renderer/frame/fn.resolve_passes"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "RenderingExtras",
                    "link": "/reference/pill_master_renderer/frame/type.RenderingExtras"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PRODUCER_GAME",
                    "link": "/reference/pill_master_renderer/frame/constant.PRODUCER_GAME"
                  },
                  {
                    "text": "PRODUCER_NONE",
                    "link": "/reference/pill_master_renderer/frame/constant.PRODUCER_NONE"
                  },
                  {
                    "text": "PRODUCER_UNSET",
                    "link": "/reference/pill_master_renderer/frame/constant.PRODUCER_UNSET"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "UI_PRODUCER",
                    "link": "/reference/pill_master_renderer/frame/static.UI_PRODUCER"
                  },
                  {
                    "text": "UI_TEXTURES_REQUESTED",
                    "link": "/reference/pill_master_renderer/frame/static.UI_TEXTURES_REQUESTED"
                  }
                ]
              }
            ]
          },
          {
            "text": "instance",
            "link": "/reference/pill_master_renderer/instance/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Instance",
                    "link": "/reference/pill_master_renderer/instance/struct.Instance"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "build_queued_instances",
                    "link": "/reference/pill_master_renderer/instance/fn.build_queued_instances"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "INSTANCES_PER_CHUNK",
                    "link": "/reference/pill_master_renderer/instance/constant.INSTANCES_PER_CHUNK"
                  }
                ]
              }
            ]
          },
          {
            "text": "module_entry",
            "link": "/reference/pill_master_renderer/module_entry/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "attach_to_window",
                    "link": "/reference/pill_master_renderer/module_entry/fn.attach_to_window"
                  },
                  {
                    "text": "detach_backend",
                    "link": "/reference/pill_master_renderer/module_entry/fn.detach_backend"
                  }
                ]
              }
            ]
          },
          {
            "text": "overlay",
            "link": "/reference/pill_master_renderer/overlay/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "font",
                    "link": "/reference/pill_master_renderer/overlay/font/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Atlas",
                            "link": "/reference/pill_master_renderer/overlay/font/struct.Atlas"
                          },
                          {
                            "text": "GlyphQuad",
                            "link": "/reference/pill_master_renderer/overlay/font/struct.GlyphQuad"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "atlas_size",
                            "link": "/reference/pill_master_renderer/overlay/font/fn.atlas_size"
                          },
                          {
                            "text": "build_atlas",
                            "link": "/reference/pill_master_renderer/overlay/font/fn.build_atlas"
                          },
                          {
                            "text": "cell_origin",
                            "link": "/reference/pill_master_renderer/overlay/font/fn.cell_origin"
                          },
                          {
                            "text": "glyph_index",
                            "link": "/reference/pill_master_renderer/overlay/font/fn.glyph_index"
                          },
                          {
                            "text": "layout_text",
                            "link": "/reference/pill_master_renderer/overlay/font/fn.layout_text"
                          },
                          {
                            "text": "texture_set",
                            "link": "/reference/pill_master_renderer/overlay/font/fn.texture_set"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ATLAS_COLUMNS",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.ATLAS_COLUMNS"
                          },
                          {
                            "text": "CELL_HEIGHT",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.CELL_HEIGHT"
                          },
                          {
                            "text": "CELL_WIDTH",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.CELL_WIDTH"
                          },
                          {
                            "text": "FONT_TEXTURE",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.FONT_TEXTURE"
                          },
                          {
                            "text": "GLYPH_HEIGHT",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.GLYPH_HEIGHT"
                          },
                          {
                            "text": "GLYPH_SCALE",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.GLYPH_SCALE"
                          },
                          {
                            "text": "GLYPH_WIDTH",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.GLYPH_WIDTH"
                          },
                          {
                            "text": "GLYPHS",
                            "link": "/reference/pill_master_renderer/overlay/font/constant.GLYPHS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "picking",
                    "link": "/reference/pill_master_renderer/overlay/picking/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PendingReadback",
                            "link": "/reference/pill_master_renderer/overlay/picking/struct.PendingReadback"
                          },
                          {
                            "text": "PickReadback",
                            "link": "/reference/pill_master_renderer/overlay/picking/struct.PickReadback"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "answer_every_request_with_nothing",
                            "link": "/reference/pill_master_renderer/overlay/picking/fn.answer_every_request_with_nothing"
                          },
                          {
                            "text": "decode_slot",
                            "link": "/reference/pill_master_renderer/overlay/picking/fn.decode_slot"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "BYTES_PER_SLOT",
                            "link": "/reference/pill_master_renderer/overlay/picking/constant.BYTES_PER_SLOT"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "GridParameters",
                    "link": "/reference/pill_master_renderer/overlay/struct.GridParameters"
                  },
                  {
                    "text": "HandleLineVertex",
                    "link": "/reference/pill_master_renderer/overlay/struct.HandleLineVertex"
                  },
                  {
                    "text": "HandleVertex",
                    "link": "/reference/pill_master_renderer/overlay/struct.HandleVertex"
                  },
                  {
                    "text": "LineVertex",
                    "link": "/reference/pill_master_renderer/overlay/struct.LineVertex"
                  },
                  {
                    "text": "OutlineParameters",
                    "link": "/reference/pill_master_renderer/overlay/struct.OutlineParameters"
                  },
                  {
                    "text": "Overlay",
                    "link": "/reference/pill_master_renderer/overlay/struct.Overlay"
                  },
                  {
                    "text": "OverlayFrame",
                    "link": "/reference/pill_master_renderer/overlay/struct.OverlayFrame"
                  },
                  {
                    "text": "OverlayTargets",
                    "link": "/reference/pill_master_renderer/overlay/struct.OverlayTargets"
                  },
                  {
                    "text": "PipelineDescription",
                    "link": "/reference/pill_master_renderer/overlay/struct.PipelineDescription"
                  },
                  {
                    "text": "TriangleVertex",
                    "link": "/reference/pill_master_renderer/overlay/struct.TriangleVertex"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "clip_polygon_to_near",
                    "link": "/reference/pill_master_renderer/overlay/fn.clip_polygon_to_near"
                  },
                  {
                    "text": "clip_segment_to_near",
                    "link": "/reference/pill_master_renderer/overlay/fn.clip_segment_to_near"
                  },
                  {
                    "text": "create_target_texture",
                    "link": "/reference/pill_master_renderer/overlay/fn.create_target_texture"
                  },
                  {
                    "text": "depth_state",
                    "link": "/reference/pill_master_renderer/overlay/fn.depth_state"
                  },
                  {
                    "text": "draw_queue_positions",
                    "link": "/reference/pill_master_renderer/overlay/fn.draw_queue_positions"
                  },
                  {
                    "text": "expand_polygon",
                    "link": "/reference/pill_master_renderer/overlay/fn.expand_polygon"
                  },
                  {
                    "text": "from_pixels",
                    "link": "/reference/pill_master_renderer/overlay/fn.from_pixels"
                  },
                  {
                    "text": "handle_line_vertices",
                    "link": "/reference/pill_master_renderer/overlay/fn.handle_line_vertices"
                  },
                  {
                    "text": "handle_triangle_vertices",
                    "link": "/reference/pill_master_renderer/overlay/fn.handle_triangle_vertices"
                  },
                  {
                    "text": "label_list",
                    "link": "/reference/pill_master_renderer/overlay/fn.label_list"
                  },
                  {
                    "text": "label_origin",
                    "link": "/reference/pill_master_renderer/overlay/fn.label_origin"
                  },
                  {
                    "text": "lerp3",
                    "link": "/reference/pill_master_renderer/overlay/fn.lerp3"
                  },
                  {
                    "text": "lerp4",
                    "link": "/reference/pill_master_renderer/overlay/fn.lerp4"
                  },
                  {
                    "text": "line_quad",
                    "link": "/reference/pill_master_renderer/overlay/fn.line_quad"
                  },
                  {
                    "text": "line_vertices",
                    "link": "/reference/pill_master_renderer/overlay/fn.line_vertices"
                  },
                  {
                    "text": "near_side_crossing",
                    "link": "/reference/pill_master_renderer/overlay/fn.near_side_crossing"
                  },
                  {
                    "text": "outlined_queue_positions",
                    "link": "/reference/pill_master_renderer/overlay/fn.outlined_queue_positions"
                  },
                  {
                    "text": "set_viewport",
                    "link": "/reference/pill_master_renderer/overlay/fn.set_viewport"
                  },
                  {
                    "text": "to_pixels",
                    "link": "/reference/pill_master_renderer/overlay/fn.to_pixels"
                  },
                  {
                    "text": "triangle_vertices",
                    "link": "/reference/pill_master_renderer/overlay/fn.triangle_vertices"
                  },
                  {
                    "text": "unit_direction",
                    "link": "/reference/pill_master_renderer/overlay/fn.unit_direction"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "ClipVertex",
                    "link": "/reference/pill_master_renderer/overlay/type.ClipVertex"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "LABEL_SHADOW_COLOR",
                    "link": "/reference/pill_master_renderer/overlay/constant.LABEL_SHADOW_COLOR"
                  },
                  {
                    "text": "LINE_FEATHER",
                    "link": "/reference/pill_master_renderer/overlay/constant.LINE_FEATHER"
                  },
                  {
                    "text": "LINE_HALF_WIDTH",
                    "link": "/reference/pill_master_renderer/overlay/constant.LINE_HALF_WIDTH"
                  },
                  {
                    "text": "LINE_QUAD_SIDES",
                    "link": "/reference/pill_master_renderer/overlay/constant.LINE_QUAD_SIDES"
                  },
                  {
                    "text": "MINIMUM_MITER_SINE",
                    "link": "/reference/pill_master_renderer/overlay/constant.MINIMUM_MITER_SINE"
                  },
                  {
                    "text": "NEAR_CLIP_DEPTH",
                    "link": "/reference/pill_master_renderer/overlay/constant.NEAR_CLIP_DEPTH"
                  },
                  {
                    "text": "OUTLINE_MASK_FORMAT",
                    "link": "/reference/pill_master_renderer/overlay/constant.OUTLINE_MASK_FORMAT"
                  },
                  {
                    "text": "OUTLINE_WIDTH",
                    "link": "/reference/pill_master_renderer/overlay/constant.OUTLINE_WIDTH"
                  },
                  {
                    "text": "PICK_BUFFER_DEPTH_FORMAT",
                    "link": "/reference/pill_master_renderer/overlay/constant.PICK_BUFFER_DEPTH_FORMAT"
                  },
                  {
                    "text": "PICK_BUFFER_FORMAT",
                    "link": "/reference/pill_master_renderer/overlay/constant.PICK_BUFFER_FORMAT"
                  },
                  {
                    "text": "PICK_LINE_HALF_WIDTH",
                    "link": "/reference/pill_master_renderer/overlay/constant.PICK_LINE_HALF_WIDTH"
                  },
                  {
                    "text": "TRIANGLE_FEATHER",
                    "link": "/reference/pill_master_renderer/overlay/constant.TRIANGLE_FEATHER"
                  }
                ]
              },
              {
                "text": "Macros",
                "collapsed": true,
                "items": [
                  {
                    "text": "attributes",
                    "link": "/reference/pill_master_renderer/overlay/macro.attributes"
                  }
                ]
              }
            ]
          },
          {
            "text": "preview",
            "link": "/reference/pill_master_renderer/preview/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "BudgetedCache",
                    "link": "/reference/pill_master_renderer/preview/struct.BudgetedCache"
                  },
                  {
                    "text": "MeshParameters",
                    "link": "/reference/pill_master_renderer/preview/struct.MeshParameters"
                  },
                  {
                    "text": "MeshSource",
                    "link": "/reference/pill_master_renderer/preview/struct.MeshSource"
                  },
                  {
                    "text": "PreviewParameters",
                    "link": "/reference/pill_master_renderer/preview/struct.PreviewParameters"
                  },
                  {
                    "text": "PreviewRenderer",
                    "link": "/reference/pill_master_renderer/preview/struct.PreviewRenderer"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "PreviewMode",
                    "link": "/reference/pill_master_renderer/preview/enum.PreviewMode"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "mesh_framing_transform",
                    "link": "/reference/pill_master_renderer/preview/fn.mesh_framing_transform"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MESH_ATTRIBUTES",
                    "link": "/reference/pill_master_renderer/preview/constant.MESH_ATTRIBUTES"
                  },
                  {
                    "text": "MESH_BUDGET_BYTES",
                    "link": "/reference/pill_master_renderer/preview/constant.MESH_BUDGET_BYTES"
                  },
                  {
                    "text": "PREVIEW_BYTES",
                    "link": "/reference/pill_master_renderer/preview/constant.PREVIEW_BYTES"
                  },
                  {
                    "text": "PREVIEW_SIZE",
                    "link": "/reference/pill_master_renderer/preview/constant.PREVIEW_SIZE"
                  },
                  {
                    "text": "TEXTURE_BUDGET_BYTES",
                    "link": "/reference/pill_master_renderer/preview/constant.TEXTURE_BUDGET_BYTES"
                  }
                ]
              }
            ]
          },
          {
            "text": "profiler",
            "link": "/reference/pill_master_renderer/profiler/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FrameRecord",
                    "link": "/reference/pill_master_renderer/profiler/struct.FrameRecord"
                  },
                  {
                    "text": "Profiler",
                    "link": "/reference/pill_master_renderer/profiler/struct.Profiler"
                  },
                  {
                    "text": "ResolveSlot",
                    "link": "/reference/pill_master_renderer/profiler/struct.ResolveSlot"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "ensure_buffer_slot",
                    "link": "/reference/pill_master_renderer/profiler/fn.ensure_buffer_slot"
                  },
                  {
                    "text": "first_u64_values",
                    "link": "/reference/pill_master_renderer/profiler/fn.first_u64_values"
                  },
                  {
                    "text": "gpu_profiling_requested",
                    "link": "/reference/pill_master_renderer/profiler/fn.gpu_profiling_requested"
                  },
                  {
                    "text": "read_current_timestamp",
                    "link": "/reference/pill_master_renderer/profiler/fn.read_current_timestamp"
                  },
                  {
                    "text": "statistics_of",
                    "link": "/reference/pill_master_renderer/profiler/fn.statistics_of"
                  },
                  {
                    "text": "warn_readback",
                    "link": "/reference/pill_master_renderer/profiler/fn.warn_readback"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "FRAMES_IN_FLIGHT",
                    "link": "/reference/pill_master_renderer/profiler/constant.FRAMES_IN_FLIGHT"
                  },
                  {
                    "text": "GPU_PROFILE_ENVIRONMENT_VARIABLE",
                    "link": "/reference/pill_master_renderer/profiler/constant.GPU_PROFILE_ENVIRONMENT_VARIABLE"
                  },
                  {
                    "text": "GPU_PROFILE_FEATURES",
                    "link": "/reference/pill_master_renderer/profiler/constant.GPU_PROFILE_FEATURES"
                  }
                ]
              }
            ]
          },
          {
            "text": "readback",
            "link": "/reference/pill_master_renderer/readback/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "MappedReadback",
                    "link": "/reference/pill_master_renderer/readback/struct.MappedReadback"
                  },
                  {
                    "text": "MapState",
                    "link": "/reference/pill_master_renderer/readback/struct.MapState"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "MapOutcome",
                    "link": "/reference/pill_master_renderer/readback/enum.MapOutcome"
                  },
                  {
                    "text": "Readback",
                    "link": "/reference/pill_master_renderer/readback/enum.Readback"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "read_mapped",
                    "link": "/reference/pill_master_renderer/readback/fn.read_mapped"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MAPPING_DONE",
                    "link": "/reference/pill_master_renderer/readback/constant.MAPPING_DONE"
                  },
                  {
                    "text": "MAPPING_FAILED",
                    "link": "/reference/pill_master_renderer/readback/constant.MAPPING_FAILED"
                  },
                  {
                    "text": "MAPPING_PENDING",
                    "link": "/reference/pill_master_renderer/readback/constant.MAPPING_PENDING"
                  }
                ]
              }
            ]
          },
          {
            "text": "render_queue",
            "link": "/reference/pill_master_renderer/render_queue/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "RenderQueueItem",
                    "link": "/reference/pill_master_renderer/render_queue/struct.RenderQueueItem"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "compose_render_queue_key",
                    "link": "/reference/pill_master_renderer/render_queue/fn.compose_render_queue_key"
                  }
                ]
              }
            ]
          },
          {
            "text": "renderer",
            "link": "/reference/pill_master_renderer/renderer/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Renderer",
                    "link": "/reference/pill_master_renderer/renderer/struct.Renderer"
                  },
                  {
                    "text": "State",
                    "link": "/reference/pill_master_renderer/renderer/struct.State"
                  },
                  {
                    "text": "SurfaceDraw",
                    "link": "/reference/pill_master_renderer/renderer/struct.SurfaceDraw"
                  },
                  {
                    "text": "SurfaceTarget",
                    "link": "/reference/pill_master_renderer/renderer/struct.SurfaceTarget"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "color_load",
                    "link": "/reference/pill_master_renderer/renderer/fn.color_load"
                  },
                  {
                    "text": "covers_target",
                    "link": "/reference/pill_master_renderer/renderer/fn.covers_target"
                  },
                  {
                    "text": "create_gpu_profiler",
                    "link": "/reference/pill_master_renderer/renderer/fn.create_gpu_profiler"
                  },
                  {
                    "text": "depth_attachment",
                    "link": "/reference/pill_master_renderer/renderer/fn.depth_attachment"
                  },
                  {
                    "text": "draw_preview",
                    "link": "/reference/pill_master_renderer/renderer/fn.draw_preview"
                  },
                  {
                    "text": "record_preview",
                    "link": "/reference/pill_master_renderer/renderer/fn.record_preview"
                  },
                  {
                    "text": "viewport_in_target",
                    "link": "/reference/pill_master_renderer/renderer/fn.viewport_in_target"
                  },
                  {
                    "text": "write_gpu_timestamp",
                    "link": "/reference/pill_master_renderer/renderer/fn.write_gpu_timestamp"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CLEAR_COLOR",
                    "link": "/reference/pill_master_renderer/renderer/constant.CLEAR_COLOR"
                  },
                  {
                    "text": "CLEAR_TRANSPARENT",
                    "link": "/reference/pill_master_renderer/renderer/constant.CLEAR_TRANSPARENT"
                  },
                  {
                    "text": "GPU_REPORT_INTERVAL",
                    "link": "/reference/pill_master_renderer/renderer/constant.GPU_REPORT_INTERVAL"
                  },
                  {
                    "text": "NO_FOG_COLOR",
                    "link": "/reference/pill_master_renderer/renderer/constant.NO_FOG_COLOR"
                  },
                  {
                    "text": "NO_FOG_DENSITY",
                    "link": "/reference/pill_master_renderer/renderer/constant.NO_FOG_DENSITY"
                  },
                  {
                    "text": "OFFSCREEN_FORMAT",
                    "link": "/reference/pill_master_renderer/renderer/constant.OFFSCREEN_FORMAT"
                  }
                ]
              }
            ]
          },
          {
            "text": "rendering_resources_manager",
            "link": "/reference/pill_master_renderer/rendering_resources_manager/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "GpuColumn",
                    "link": "/reference/pill_master_renderer/rendering_resources_manager/struct.GpuColumn"
                  },
                  {
                    "text": "RenderingResourcesManager",
                    "link": "/reference/pill_master_renderer/rendering_resources_manager/struct.RenderingResourcesManager"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "install_default_material",
                    "link": "/reference/pill_master_renderer/rendering_resources_manager/fn.install_default_material"
                  }
                ]
              }
            ]
          },
          {
            "text": "resources",
            "link": "/reference/pill_master_renderer/resources/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "engine_parameters",
                    "link": "/reference/pill_master_renderer/resources/engine_parameters/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "EngineParameters",
                            "link": "/reference/pill_master_renderer/resources/engine_parameters/struct.EngineParameters"
                          },
                          {
                            "text": "EngineParametersData",
                            "link": "/reference/pill_master_renderer/resources/engine_parameters/struct.EngineParametersData"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "renderer_camera",
                    "link": "/reference/pill_master_renderer/resources/renderer_camera/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CameraParametersData",
                            "link": "/reference/pill_master_renderer/resources/renderer_camera/struct.CameraParametersData"
                          },
                          {
                            "text": "RendererCamera",
                            "link": "/reference/pill_master_renderer/resources/renderer_camera/struct.RendererCamera"
                          },
                          {
                            "text": "RendererCameraHandle",
                            "link": "/reference/pill_master_renderer/resources/renderer_camera/struct.RendererCameraHandle"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "sanitize_projection",
                            "link": "/reference/pill_master_renderer/resources/renderer_camera/fn.sanitize_projection"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "renderer_material",
                    "link": "/reference/pill_master_renderer/resources/renderer_material/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RendererMaterial",
                            "link": "/reference/pill_master_renderer/resources/renderer_material/struct.RendererMaterial"
                          },
                          {
                            "text": "RendererMaterialHandle",
                            "link": "/reference/pill_master_renderer/resources/renderer_material/struct.RendererMaterialHandle"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "renderer_mesh",
                    "link": "/reference/pill_master_renderer/resources/renderer_mesh/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RendererMesh",
                            "link": "/reference/pill_master_renderer/resources/renderer_mesh/struct.RendererMesh"
                          },
                          {
                            "text": "RendererMeshHandle",
                            "link": "/reference/pill_master_renderer/resources/renderer_mesh/struct.RendererMeshHandle"
                          }
                        ]
                      },
                      {
                        "text": "Traits",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Vertex",
                            "link": "/reference/pill_master_renderer/resources/renderer_mesh/trait.Vertex"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "renderer_pass",
                    "link": "/reference/pill_master_renderer/resources/renderer_pass/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RendererPass",
                            "link": "/reference/pill_master_renderer/resources/renderer_pass/struct.RendererPass"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DEPTH_INPUT",
                            "link": "/reference/pill_master_renderer/resources/renderer_pass/constant.DEPTH_INPUT"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "renderer_resource_storage",
                    "link": "/reference/pill_master_renderer/resources/renderer_resource_storage/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RendererResourceStorage",
                            "link": "/reference/pill_master_renderer/resources/renderer_resource_storage/struct.RendererResourceStorage"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "INITIAL_CAMERA_CAPACITY",
                            "link": "/reference/pill_master_renderer/resources/renderer_resource_storage/constant.INITIAL_CAMERA_CAPACITY"
                          },
                          {
                            "text": "INITIAL_MATERIAL_CAPACITY",
                            "link": "/reference/pill_master_renderer/resources/renderer_resource_storage/constant.INITIAL_MATERIAL_CAPACITY"
                          },
                          {
                            "text": "INITIAL_MESH_CAPACITY",
                            "link": "/reference/pill_master_renderer/resources/renderer_resource_storage/constant.INITIAL_MESH_CAPACITY"
                          },
                          {
                            "text": "INITIAL_SHADER_CAPACITY",
                            "link": "/reference/pill_master_renderer/resources/renderer_resource_storage/constant.INITIAL_SHADER_CAPACITY"
                          },
                          {
                            "text": "INITIAL_TEXTURE_CAPACITY",
                            "link": "/reference/pill_master_renderer/resources/renderer_resource_storage/constant.INITIAL_TEXTURE_CAPACITY"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "renderer_shader",
                    "link": "/reference/pill_master_renderer/resources/renderer_shader/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RendererShader",
                            "link": "/reference/pill_master_renderer/resources/renderer_shader/struct.RendererShader"
                          },
                          {
                            "text": "RendererShaderHandle",
                            "link": "/reference/pill_master_renderer/resources/renderer_shader/struct.RendererShaderHandle"
                          },
                          {
                            "text": "UniformGroups",
                            "link": "/reference/pill_master_renderer/resources/renderer_shader/struct.UniformGroups"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "check_slot_shape",
                            "link": "/reference/pill_master_renderer/resources/renderer_shader/fn.check_slot_shape"
                          },
                          {
                            "text": "slot_view_dimension",
                            "link": "/reference/pill_master_renderer/resources/renderer_shader/fn.slot_view_dimension"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "renderer_texture",
                    "link": "/reference/pill_master_renderer/resources/renderer_texture/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RendererTexture",
                            "link": "/reference/pill_master_renderer/resources/renderer_texture/struct.RendererTexture"
                          },
                          {
                            "text": "RendererTextureHandle",
                            "link": "/reference/pill_master_renderer/resources/renderer_texture/struct.RendererTextureHandle"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "texture_failure",
                            "link": "/reference/pill_master_renderer/resources/renderer_texture/fn.texture_failure"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "shader_bindings",
                    "link": "/reference/pill_master_renderer/resources/shader_bindings/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "shader_bind_groups",
                            "link": "/reference/pill_master_renderer/resources/shader_bindings/fn.shader_bind_groups"
                          },
                          {
                            "text": "uniform_size",
                            "link": "/reference/pill_master_renderer/resources/shader_bindings/fn.uniform_size"
                          },
                          {
                            "text": "write_parameters",
                            "link": "/reference/pill_master_renderer/resources/shader_bindings/fn.write_parameters"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "stream_buffer",
            "link": "/reference/pill_master_renderer/stream_buffer/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "StreamBuffer",
                    "link": "/reference/pill_master_renderer/stream_buffer/struct.StreamBuffer"
                  }
                ]
              }
            ]
          },
          {
            "text": "surface",
            "link": "/reference/pill_master_renderer/surface/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Surface",
                    "link": "/reference/pill_master_renderer/surface/struct.Surface"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "alpha_mode_candidates",
                    "link": "/reference/pill_master_renderer/surface/fn.alpha_mode_candidates"
                  },
                  {
                    "text": "apply_and_probe",
                    "link": "/reference/pill_master_renderer/surface/fn.apply_and_probe"
                  },
                  {
                    "text": "configuration_attempt_failure",
                    "link": "/reference/pill_master_renderer/surface/fn.configuration_attempt_failure"
                  },
                  {
                    "text": "configure",
                    "link": "/reference/pill_master_renderer/surface/fn.configure"
                  },
                  {
                    "text": "configure_first",
                    "link": "/reference/pill_master_renderer/surface/fn.configure_first"
                  },
                  {
                    "text": "pick_alpha_mode",
                    "link": "/reference/pill_master_renderer/surface/fn.pick_alpha_mode"
                  },
                  {
                    "text": "pick_color_format",
                    "link": "/reference/pill_master_renderer/surface/fn.pick_color_format"
                  },
                  {
                    "text": "preferred_present_mode",
                    "link": "/reference/pill_master_renderer/surface/fn.preferred_present_mode"
                  },
                  {
                    "text": "requested_present_mode",
                    "link": "/reference/pill_master_renderer/surface/fn.requested_present_mode"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PRESENT_MODE_VARIABLE",
                    "link": "/reference/pill_master_renderer/surface/constant.PRESENT_MODE_VARIABLE"
                  }
                ]
              }
            ]
          },
          {
            "text": "ui",
            "link": "/reference/pill_master_renderer/ui/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "renderer",
                    "link": "/reference/pill_master_renderer/ui/renderer/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "GpuVertex",
                            "link": "/reference/pill_master_renderer/ui/renderer/struct.GpuVertex"
                          },
                          {
                            "text": "HeldTexture",
                            "link": "/reference/pill_master_renderer/ui/renderer/struct.HeldTexture"
                          },
                          {
                            "text": "UiRenderer",
                            "link": "/reference/pill_master_renderer/ui/renderer/struct.UiRenderer"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "create_srgb_texture",
                            "link": "/reference/pill_master_renderer/ui/renderer/fn.create_srgb_texture"
                          },
                          {
                            "text": "physical_scissor",
                            "link": "/reference/pill_master_renderer/ui/renderer/fn.physical_scissor"
                          },
                          {
                            "text": "upload_whole_texture",
                            "link": "/reference/pill_master_renderer/ui/renderer/fn.upload_whole_texture"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "UI_SHADER",
                            "link": "/reference/pill_master_renderer/ui/renderer/constant.UI_SHADER"
                          },
                          {
                            "text": "VERTEX_ATTRIBUTES",
                            "link": "/reference/pill_master_renderer/ui/renderer/constant.VERTEX_ATTRIBUTES"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "attach",
            "link": "/reference/pill_master_renderer/fn.attach"
          },
          {
            "text": "init",
            "link": "/reference/pill_master_renderer/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_master_renderer/fn.register"
          }
        ]
      },
      {
        "text": "Macros",
        "collapsed": true,
        "items": [
          {
            "text": "__pill_renderer_entry_points",
            "link": "/reference/pill_master_renderer/macro.__pill_renderer_entry_points"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Master Renderer Data",
    "link": "/reference/pill_master_renderer_data/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "assets",
            "link": "/reference/pill_master_renderer_data/assets/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "material",
                    "link": "/reference/pill_master_renderer_data/assets/material/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Material",
                            "link": "/reference/pill_master_renderer_data/assets/material/struct.Material"
                          },
                          {
                            "text": "MaterialBuilder",
                            "link": "/reference/pill_master_renderer_data/assets/material/struct.MaterialBuilder"
                          },
                          {
                            "text": "MaterialDocument",
                            "link": "/reference/pill_master_renderer_data/assets/material/struct.MaterialDocument"
                          },
                          {
                            "text": "MaterialTexture",
                            "link": "/reference/pill_master_renderer_data/assets/material/struct.MaterialTexture"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "mesh",
                    "link": "/reference/pill_master_renderer_data/assets/mesh/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Mesh",
                            "link": "/reference/pill_master_renderer_data/assets/mesh/struct.Mesh"
                          },
                          {
                            "text": "MeshImportSettings",
                            "link": "/reference/pill_master_renderer_data/assets/mesh/struct.MeshImportSettings"
                          },
                          {
                            "text": "MeshVertex",
                            "link": "/reference/pill_master_renderer_data/assets/mesh/struct.MeshVertex"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "calculate_tangent_space",
                            "link": "/reference/pill_master_renderer_data/assets/mesh/fn.calculate_tangent_space"
                          },
                          {
                            "text": "normalize_or_fallback",
                            "link": "/reference/pill_master_renderer_data/assets/mesh/fn.normalize_or_fallback"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "render_pass",
                    "link": "/reference/pill_master_renderer_data/assets/render_pass/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RenderPass",
                            "link": "/reference/pill_master_renderer_data/assets/render_pass/struct.RenderPass"
                          },
                          {
                            "text": "RenderPassDocument",
                            "link": "/reference/pill_master_renderer_data/assets/render_pass/struct.RenderPassDocument"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "rendering_pipeline",
                    "link": "/reference/pill_master_renderer_data/assets/rendering_pipeline/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "PipelinePass",
                            "link": "/reference/pill_master_renderer_data/assets/rendering_pipeline/struct.PipelinePass"
                          },
                          {
                            "text": "PipelinePassDocument",
                            "link": "/reference/pill_master_renderer_data/assets/rendering_pipeline/struct.PipelinePassDocument"
                          },
                          {
                            "text": "RenderingPipeline",
                            "link": "/reference/pill_master_renderer_data/assets/rendering_pipeline/struct.RenderingPipeline"
                          },
                          {
                            "text": "RenderingPipelineDocument",
                            "link": "/reference/pill_master_renderer_data/assets/rendering_pipeline/struct.RenderingPipelineDocument"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "enabled_by_default",
                            "link": "/reference/pill_master_renderer_data/assets/rendering_pipeline/fn.enabled_by_default"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "shader",
                    "link": "/reference/pill_master_renderer_data/assets/shader/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Shader",
                            "link": "/reference/pill_master_renderer_data/assets/shader/struct.Shader"
                          },
                          {
                            "text": "ShaderBuilder",
                            "link": "/reference/pill_master_renderer_data/assets/shader/struct.ShaderBuilder"
                          },
                          {
                            "text": "ShaderImportSettings",
                            "link": "/reference/pill_master_renderer_data/assets/shader/struct.ShaderImportSettings"
                          },
                          {
                            "text": "ShaderParameterSlot",
                            "link": "/reference/pill_master_renderer_data/assets/shader/struct.ShaderParameterSlot"
                          },
                          {
                            "text": "ShaderTextureSlot",
                            "link": "/reference/pill_master_renderer_data/assets/shader/struct.ShaderTextureSlot"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "ShaderParameterType",
                            "link": "/reference/pill_master_renderer_data/assets/shader/enum.ShaderParameterType"
                          },
                          {
                            "text": "ShaderTextureKind",
                            "link": "/reference/pill_master_renderer_data/assets/shader/enum.ShaderTextureKind"
                          }
                        ]
                      },
                      {
                        "text": "Traits",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "SlotName",
                            "link": "/reference/pill_master_renderer_data/assets/shader/trait.SlotName"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "cooked_wgsl_beside",
                            "link": "/reference/pill_master_renderer_data/assets/shader/fn.cooked_wgsl_beside"
                          },
                          {
                            "text": "slots_by_name",
                            "link": "/reference/pill_master_renderer_data/assets/shader/fn.slots_by_name"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "texture",
                    "link": "/reference/pill_master_renderer_data/assets/texture/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "Texture",
                            "link": "/reference/pill_master_renderer_data/assets/texture/struct.Texture"
                          },
                          {
                            "text": "TextureImportSettings",
                            "link": "/reference/pill_master_renderer_data/assets/texture/struct.TextureImportSettings"
                          }
                        ]
                      },
                      {
                        "text": "Enums",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "TextureType",
                            "link": "/reference/pill_master_renderer_data/assets/texture/enum.TextureType"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "cube_face_direction",
                            "link": "/reference/pill_master_renderer_data/assets/texture/fn.cube_face_direction"
                          },
                          {
                            "text": "equirect_uv",
                            "link": "/reference/pill_master_renderer_data/assets/texture/fn.equirect_uv"
                          },
                          {
                            "text": "expected_byte_count",
                            "link": "/reference/pill_master_renderer_data/assets/texture/fn.expected_byte_count"
                          },
                          {
                            "text": "load_shipped_texture",
                            "link": "/reference/pill_master_renderer_data/assets/texture/fn.load_shipped_texture"
                          },
                          {
                            "text": "project_equirect_to_cubemap",
                            "link": "/reference/pill_master_renderer_data/assets/texture/fn.project_equirect_to_cubemap"
                          },
                          {
                            "text": "sample_bilinear",
                            "link": "/reference/pill_master_renderer_data/assets/texture/fn.sample_bilinear"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DEFAULT_COLOR_TEXTURE",
                            "link": "/reference/pill_master_renderer_data/assets/texture/constant.DEFAULT_COLOR_TEXTURE"
                          },
                          {
                            "text": "DEFAULT_NORMAL_TEXTURE",
                            "link": "/reference/pill_master_renderer_data/assets/texture/constant.DEFAULT_NORMAL_TEXTURE"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "asset_key",
                    "link": "/reference/pill_master_renderer_data/assets/fn.asset_key"
                  }
                ]
              }
            ]
          },
          {
            "text": "color_space",
            "link": "/reference/pill_master_renderer_data/color_space/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "linear_to_srgb",
                    "link": "/reference/pill_master_renderer_data/color_space/fn.linear_to_srgb"
                  },
                  {
                    "text": "srgb_to_linear",
                    "link": "/reference/pill_master_renderer_data/color_space/fn.srgb_to_linear"
                  }
                ]
              }
            ]
          },
          {
            "text": "components",
            "link": "/reference/pill_master_renderer_data/components/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "directional_light",
                    "link": "/reference/pill_master_renderer_data/components/directional_light/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DirectionalLightComponent",
                            "link": "/reference/pill_master_renderer_data/components/directional_light/struct.DirectionalLightComponent"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "__pill_register_DirectionalLightComponent",
                            "link": "/reference/pill_master_renderer_data/components/directional_light/fn.__pill_register_DirectionalLightComponent"
                          },
                          {
                            "text": "register",
                            "link": "/reference/pill_master_renderer_data/components/directional_light/fn.register"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "mesh_renderer",
                    "link": "/reference/pill_master_renderer_data/components/mesh_renderer/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "MeshRendererComponent",
                            "link": "/reference/pill_master_renderer_data/components/mesh_renderer/struct.MeshRendererComponent"
                          },
                          {
                            "text": "MeshRendererComponentBuilder",
                            "link": "/reference/pill_master_renderer_data/components/mesh_renderer/struct.MeshRendererComponentBuilder"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "__pill_register_MeshRendererComponent",
                            "link": "/reference/pill_master_renderer_data/components/mesh_renderer/fn.__pill_register_MeshRendererComponent"
                          },
                          {
                            "text": "register",
                            "link": "/reference/pill_master_renderer_data/components/mesh_renderer/fn.register"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "register_components",
                    "link": "/reference/pill_master_renderer_data/components/fn.register_components"
                  }
                ]
              }
            ]
          },
          {
            "text": "config",
            "link": "/reference/pill_master_renderer_data/config/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "pbr_pipeline",
                    "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "default_sky_pass",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/fn.default_sky_pass"
                          },
                          {
                            "text": "install",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/fn.install"
                          },
                          {
                            "text": "install_pbr_shader",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/fn.install_pbr_shader"
                          },
                          {
                            "text": "neutral_parameters",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/fn.neutral_parameters"
                          },
                          {
                            "text": "set_skybox",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/fn.set_skybox"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DEFAULT_MATERIAL_PATH",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.DEFAULT_MATERIAL_PATH"
                          },
                          {
                            "text": "OPAQUE_PASS",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.OPAQUE_PASS"
                          },
                          {
                            "text": "PBR_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.PBR_FRAGMENT"
                          },
                          {
                            "text": "PIPELINE_NAME",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.PIPELINE_NAME"
                          },
                          {
                            "text": "SHADER_GUID",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.SHADER_GUID"
                          },
                          {
                            "text": "SHADER_GUID_NAME",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.SHADER_GUID_NAME"
                          },
                          {
                            "text": "SHADER_PATH",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.SHADER_PATH"
                          },
                          {
                            "text": "SHADER_SOURCES",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.SHADER_SOURCES"
                          },
                          {
                            "text": "SKYBOX_PASS",
                            "link": "/reference/pill_master_renderer_data/config/pbr_pipeline/constant.SKYBOX_PASS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "post_processing",
                    "link": "/reference/pill_master_renderer_data/config/post_processing/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "grain_texture",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/fn.grain_texture"
                          },
                          {
                            "text": "install",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/fn.install"
                          },
                          {
                            "text": "lottes_bc",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/fn.lottes_bc"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "BLOOM_KNEE",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.BLOOM_KNEE"
                          },
                          {
                            "text": "BLOOM_PASS",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.BLOOM_PASS"
                          },
                          {
                            "text": "BLOOM_STRENGTH",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.BLOOM_STRENGTH"
                          },
                          {
                            "text": "BLOOM_TARGET",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.BLOOM_TARGET"
                          },
                          {
                            "text": "BLOOM_THRESHOLD",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.BLOOM_THRESHOLD"
                          },
                          {
                            "text": "COMPOSITE_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.COMPOSITE_FRAGMENT"
                          },
                          {
                            "text": "COMPOSITE_GUID",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.COMPOSITE_GUID"
                          },
                          {
                            "text": "COMPOSITE_PASS",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.COMPOSITE_PASS"
                          },
                          {
                            "text": "COMPOSITE_SHADER",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.COMPOSITE_SHADER"
                          },
                          {
                            "text": "FULLSCREEN_VERTEX",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.FULLSCREEN_VERTEX"
                          },
                          {
                            "text": "GRAIN_PIXELS_PER_TEXEL",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.GRAIN_PIXELS_PER_TEXEL"
                          },
                          {
                            "text": "GRAIN_TEXTURE_NAME",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.GRAIN_TEXTURE_NAME"
                          },
                          {
                            "text": "GRAIN_TILE_SIZE",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.GRAIN_TILE_SIZE"
                          },
                          {
                            "text": "HDR_MAX",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.HDR_MAX"
                          },
                          {
                            "text": "HDR_TARGET",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.HDR_TARGET"
                          },
                          {
                            "text": "LDR_TARGET",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LDR_TARGET"
                          },
                          {
                            "text": "LENS_BARREL_K1",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_BARREL_K1"
                          },
                          {
                            "text": "LENS_CHROMATIC_ABERRATION",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_CHROMATIC_ABERRATION"
                          },
                          {
                            "text": "LENS_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_FRAGMENT"
                          },
                          {
                            "text": "LENS_GAMMA",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_GAMMA"
                          },
                          {
                            "text": "LENS_GRADE",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_GRADE"
                          },
                          {
                            "text": "LENS_GRAIN_AMPLITUDE",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_GRAIN_AMPLITUDE"
                          },
                          {
                            "text": "LENS_GUID",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_GUID"
                          },
                          {
                            "text": "LENS_PASS",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_PASS"
                          },
                          {
                            "text": "LENS_SHADER",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_SHADER"
                          },
                          {
                            "text": "LENS_VIGNETTE_STRENGTH",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LENS_VIGNETTE_STRENGTH"
                          },
                          {
                            "text": "LIT_TARGET",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.LIT_TARGET"
                          },
                          {
                            "text": "MID_GREY_IN",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.MID_GREY_IN"
                          },
                          {
                            "text": "MID_GREY_OUT",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.MID_GREY_OUT"
                          },
                          {
                            "text": "PREFILTER_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.PREFILTER_FRAGMENT"
                          },
                          {
                            "text": "PREFILTER_GUID",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.PREFILTER_GUID"
                          },
                          {
                            "text": "PREFILTER_SHADER",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.PREFILTER_SHADER"
                          },
                          {
                            "text": "SHADER_SOURCES",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.SHADER_SOURCES"
                          },
                          {
                            "text": "TONEMAP_CONTRAST",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.TONEMAP_CONTRAST"
                          },
                          {
                            "text": "TONEMAP_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.TONEMAP_FRAGMENT"
                          },
                          {
                            "text": "TONEMAP_GUID",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.TONEMAP_GUID"
                          },
                          {
                            "text": "TONEMAP_PASS",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.TONEMAP_PASS"
                          },
                          {
                            "text": "TONEMAP_SHADER",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.TONEMAP_SHADER"
                          },
                          {
                            "text": "TONEMAP_SHOULDER",
                            "link": "/reference/pill_master_renderer_data/config/post_processing/constant.TONEMAP_SHOULDER"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "simple_pipeline",
                    "link": "/reference/pill_master_renderer_data/config/simple_pipeline/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "install",
                            "link": "/reference/pill_master_renderer_data/config/simple_pipeline/fn.install"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "DEFAULT_LIT_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/simple_pipeline/constant.DEFAULT_LIT_FRAGMENT"
                          },
                          {
                            "text": "PASS_NAME",
                            "link": "/reference/pill_master_renderer_data/config/simple_pipeline/constant.PASS_NAME"
                          },
                          {
                            "text": "PIPELINE_NAME",
                            "link": "/reference/pill_master_renderer_data/config/simple_pipeline/constant.PIPELINE_NAME"
                          },
                          {
                            "text": "SHADER_GUID",
                            "link": "/reference/pill_master_renderer_data/config/simple_pipeline/constant.SHADER_GUID"
                          },
                          {
                            "text": "SHADER_PATH",
                            "link": "/reference/pill_master_renderer_data/config/simple_pipeline/constant.SHADER_PATH"
                          },
                          {
                            "text": "SHADER_SOURCES",
                            "link": "/reference/pill_master_renderer_data/config/simple_pipeline/constant.SHADER_SOURCES"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "skybox",
                    "link": "/reference/pill_master_renderer_data/config/skybox/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "default_parameters",
                            "link": "/reference/pill_master_renderer_data/config/skybox/fn.default_parameters"
                          },
                          {
                            "text": "install_shaders",
                            "link": "/reference/pill_master_renderer_data/config/skybox/fn.install_shaders"
                          },
                          {
                            "text": "skybox_pass",
                            "link": "/reference/pill_master_renderer_data/config/skybox/fn.skybox_pass"
                          }
                        ]
                      },
                      {
                        "text": "Constants",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CUBEMAP_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.CUBEMAP_FRAGMENT"
                          },
                          {
                            "text": "CUBEMAP_SHADER_GUID",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.CUBEMAP_SHADER_GUID"
                          },
                          {
                            "text": "CUBEMAP_SHADER_PATH",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.CUBEMAP_SHADER_PATH"
                          },
                          {
                            "text": "EQUIRECT_FRAGMENT",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.EQUIRECT_FRAGMENT"
                          },
                          {
                            "text": "EQUIRECT_SHADER_GUID",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.EQUIRECT_SHADER_GUID"
                          },
                          {
                            "text": "EQUIRECT_SHADER_PATH",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.EQUIRECT_SHADER_PATH"
                          },
                          {
                            "text": "SHADER_SOURCES",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.SHADER_SOURCES"
                          },
                          {
                            "text": "SKY_SLOT",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.SKY_SLOT"
                          },
                          {
                            "text": "SKYBOX_VERTEX",
                            "link": "/reference/pill_master_renderer_data/config/skybox/constant.SKYBOX_VERTEX"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ConfigShaderFile",
                    "link": "/reference/pill_master_renderer_data/config/struct.ConfigShaderFile"
                  },
                  {
                    "text": "ShaderSourceRecord",
                    "link": "/reference/pill_master_renderer_data/config/struct.ShaderSourceRecord"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "all_shader_sources",
                    "link": "/reference/pill_master_renderer_data/config/fn.all_shader_sources"
                  },
                  {
                    "text": "import_shader",
                    "link": "/reference/pill_master_renderer_data/config/fn.import_shader"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "CAMERA_PARAMETERS_BIND_GROUP_LAYOUT_INDEX",
                    "link": "/reference/pill_master_renderer_data/config/constant.CAMERA_PARAMETERS_BIND_GROUP_LAYOUT_INDEX"
                  },
                  {
                    "text": "DEFAULT_VERTEX",
                    "link": "/reference/pill_master_renderer_data/config/constant.DEFAULT_VERTEX"
                  },
                  {
                    "text": "ENGINE_PARAMETERS_BIND_GROUP_LAYOUT_INDEX",
                    "link": "/reference/pill_master_renderer_data/config/constant.ENGINE_PARAMETERS_BIND_GROUP_LAYOUT_INDEX"
                  },
                  {
                    "text": "INITIAL_INSTANCE_VECTOR_CAPACITY",
                    "link": "/reference/pill_master_renderer_data/config/constant.INITIAL_INSTANCE_VECTOR_CAPACITY"
                  },
                  {
                    "text": "INSTANCE_BATCH_SIZE",
                    "link": "/reference/pill_master_renderer_data/config/constant.INSTANCE_BATCH_SIZE"
                  },
                  {
                    "text": "MATERIAL_PARAMETERS_BIND_GROUP_LAYOUT_INDEX",
                    "link": "/reference/pill_master_renderer_data/config/constant.MATERIAL_PARAMETERS_BIND_GROUP_LAYOUT_INDEX"
                  },
                  {
                    "text": "MATERIAL_TEXTURES_BIND_GROUP_LAYOUT_INDEX",
                    "link": "/reference/pill_master_renderer_data/config/constant.MATERIAL_TEXTURES_BIND_GROUP_LAYOUT_INDEX"
                  }
                ]
              },
              {
                "text": "Macros",
                "collapsed": true,
                "items": [
                  {
                    "text": "config_shader_file",
                    "link": "/reference/pill_master_renderer_data/config/macro.config_shader_file"
                  }
                ]
              }
            ]
          },
          {
            "text": "rendering_manager",
            "link": "/reference/pill_master_renderer_data/rendering_manager/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "RenderingManager",
                    "link": "/reference/pill_master_renderer_data/rendering_manager/struct.RenderingManager"
                  }
                ]
              }
            ]
          },
          {
            "text": "shader_hot_reload",
            "link": "/reference/pill_master_renderer_data/shader_hot_reload/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_shader_source",
                    "link": "/reference/pill_master_renderer_data/shader_hot_reload/fn.apply_shader_source"
                  },
                  {
                    "text": "pill_render_data_shader_changed",
                    "link": "/reference/pill_master_renderer_data/shader_hot_reload/fn.pill_render_data_shader_changed"
                  },
                  {
                    "text": "read_text",
                    "link": "/reference/pill_master_renderer_data/shader_hot_reload/fn.read_text"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "SHADER_CHANGE_REFUSED",
                    "link": "/reference/pill_master_renderer_data/shader_hot_reload/constant.SHADER_CHANGE_REFUSED"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "declare_crate_roots",
            "link": "/reference/pill_master_renderer_data/fn.declare_crate_roots"
          },
          {
            "text": "init",
            "link": "/reference/pill_master_renderer_data/fn.init"
          },
          {
            "text": "install_default_pbr_pipeline",
            "link": "/reference/pill_master_renderer_data/fn.install_default_pbr_pipeline"
          },
          {
            "text": "register",
            "link": "/reference/pill_master_renderer_data/fn.register"
          }
        ]
      },
      {
        "text": "Constants",
        "collapsed": true,
        "items": [
          {
            "text": "MODULE_NAME",
            "link": "/reference/pill_master_renderer_data/constant.MODULE_NAME"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Physics",
    "link": "/reference/pill_physics/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "components",
            "link": "/reference/pill_physics/components/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ColliderComponent",
                    "link": "/reference/pill_physics/components/struct.ColliderComponent"
                  },
                  {
                    "text": "RigidBodyComponent",
                    "link": "/reference/pill_physics/components/struct.RigidBodyComponent"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "BodyKind",
                    "link": "/reference/pill_physics/components/enum.BodyKind"
                  },
                  {
                    "text": "ColliderShape",
                    "link": "/reference/pill_physics/components/enum.ColliderShape"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "__pill_register_ColliderComponent",
                    "link": "/reference/pill_physics/components/fn.__pill_register_ColliderComponent"
                  },
                  {
                    "text": "__pill_register_RigidBodyComponent",
                    "link": "/reference/pill_physics/components/fn.__pill_register_RigidBodyComponent"
                  },
                  {
                    "text": "register",
                    "link": "/reference/pill_physics/components/fn.register"
                  }
                ]
              }
            ]
          },
          {
            "text": "debug_draw",
            "link": "/reference/pill_physics/debug_draw/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "draw_box",
                    "link": "/reference/pill_physics/debug_draw/fn.draw_box"
                  },
                  {
                    "text": "physics_debug_draw",
                    "link": "/reference/pill_physics/debug_draw/fn.physics_debug_draw"
                  },
                  {
                    "text": "rotation_of",
                    "link": "/reference/pill_physics/debug_draw/fn.rotation_of"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "OUTLINE_COLOR",
                    "link": "/reference/pill_physics/debug_draw/constant.OUTLINE_COLOR"
                  }
                ]
              }
            ]
          },
          {
            "text": "events",
            "link": "/reference/pill_physics/events/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "CollisionStarted",
                    "link": "/reference/pill_physics/events/struct.CollisionStarted"
                  },
                  {
                    "text": "CollisionStopped",
                    "link": "/reference/pill_physics/events/struct.CollisionStopped"
                  },
                  {
                    "text": "ContactForce",
                    "link": "/reference/pill_physics/events/struct.ContactForce"
                  },
                  {
                    "text": "PhysicsEvents",
                    "link": "/reference/pill_physics/events/struct.PhysicsEvents"
                  }
                ]
              }
            ]
          },
          {
            "text": "manager",
            "link": "/reference/pill_physics/manager/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "PhysicsManager",
                    "link": "/reference/pill_physics/manager/struct.PhysicsManager"
                  },
                  {
                    "text": "PhysicsStatistics",
                    "link": "/reference/pill_physics/manager/struct.PhysicsStatistics"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "array_from_quaternion",
                    "link": "/reference/pill_physics/manager/fn.array_from_quaternion"
                  },
                  {
                    "text": "array_from_vector",
                    "link": "/reference/pill_physics/manager/fn.array_from_vector"
                  },
                  {
                    "text": "build_collider",
                    "link": "/reference/pill_physics/manager/fn.build_collider"
                  },
                  {
                    "text": "build_rigid_body",
                    "link": "/reference/pill_physics/manager/fn.build_rigid_body"
                  },
                  {
                    "text": "rotation_from_array",
                    "link": "/reference/pill_physics/manager/fn.rotation_from_array"
                  },
                  {
                    "text": "vector_from_array",
                    "link": "/reference/pill_physics/manager/fn.vector_from_array"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEFAULT_FIXED_TIMESTEP_SECONDS",
                    "link": "/reference/pill_physics/manager/constant.DEFAULT_FIXED_TIMESTEP_SECONDS"
                  },
                  {
                    "text": "DEFAULT_GRAVITY",
                    "link": "/reference/pill_physics/manager/constant.DEFAULT_GRAVITY"
                  },
                  {
                    "text": "MAXIMUM_ACCUMULATED_SECONDS",
                    "link": "/reference/pill_physics/manager/constant.MAXIMUM_ACCUMULATED_SECONDS"
                  },
                  {
                    "text": "MAXIMUM_SUBSTEPS_PER_FRAME",
                    "link": "/reference/pill_physics/manager/constant.MAXIMUM_SUBSTEPS_PER_FRAME"
                  }
                ]
              }
            ]
          },
          {
            "text": "queries",
            "link": "/reference/pill_physics/queries/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "RayHit",
                    "link": "/reference/pill_physics/queries/struct.RayHit"
                  }
                ]
              }
            ]
          },
          {
            "text": "settings",
            "link": "/reference/pill_physics/settings/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "PhysicsSettings",
                    "link": "/reference/pill_physics/settings/struct.PhysicsSettings"
                  },
                  {
                    "text": "PhysicsSettingsAsset",
                    "link": "/reference/pill_physics/settings/struct.PhysicsSettingsAsset"
                  }
                ]
              }
            ]
          },
          {
            "text": "sync",
            "link": "/reference/pill_physics/sync/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "physics_sync",
                    "link": "/reference/pill_physics/sync/fn.physics_sync"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "init",
            "link": "/reference/pill_physics/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_physics/fn.register"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Player",
    "link": "/reference/pill_player/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "error",
            "link": "/reference/pill_player/error/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "RenderingError",
                    "link": "/reference/pill_player/error/enum.RenderingError"
                  }
                ]
              }
            ]
          },
          {
            "text": "registration",
            "link": "/reference/pill_player/registration/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "extension_owner",
                    "link": "/reference/pill_player/registration/fn.extension_owner"
                  },
                  {
                    "text": "register_module",
                    "link": "/reference/pill_player/registration/fn.register_module"
                  },
                  {
                    "text": "renderer_owner",
                    "link": "/reference/pill_player/registration/fn.renderer_owner"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PROJECT_SCOPE",
                    "link": "/reference/pill_player/registration/constant.PROJECT_SCOPE"
                  }
                ]
              }
            ]
          },
          {
            "text": "render_window",
            "link": "/reference/pill_player/render_window/",
            "collapsed": true,
            "items": [
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "RendererWindow",
                    "link": "/reference/pill_player/render_window/trait.RendererWindow"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "attach_renderer_to_window",
                    "link": "/reference/pill_player/render_window/fn.attach_renderer_to_window"
                  },
                  {
                    "text": "attach_renderer_to_window_async",
                    "link": "/reference/pill_player/render_window/fn.attach_renderer_to_window_async"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "AttachedWindow",
                    "link": "/reference/pill_player/render_window/type.AttachedWindow"
                  }
                ]
              }
            ]
          },
          {
            "text": "rendering",
            "link": "/reference/pill_player/rendering/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AttachedRenderer",
                    "link": "/reference/pill_player/rendering/struct.AttachedRenderer"
                  },
                  {
                    "text": "RenderingRuntime",
                    "link": "/reference/pill_player/rendering/struct.RenderingRuntime"
                  },
                  {
                    "text": "SurfaceRecord",
                    "link": "/reference/pill_player/rendering/struct.SurfaceRecord"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "attach_linked_renderer",
                    "link": "/reference/pill_player/rendering/fn.attach_linked_renderer"
                  },
                  {
                    "text": "attach_renderer",
                    "link": "/reference/pill_player/rendering/fn.attach_renderer"
                  },
                  {
                    "text": "setup_rendering",
                    "link": "/reference/pill_player/rendering/fn.setup_rendering"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "NO_LINKED_RENDERER",
                    "link": "/reference/pill_player/rendering/constant.NO_LINKED_RENDERER"
                  }
                ]
              }
            ]
          },
          {
            "text": "runtime",
            "link": "/reference/pill_player/runtime/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FrameErrorEntry",
                    "link": "/reference/pill_player/runtime/struct.FrameErrorEntry"
                  },
                  {
                    "text": "FrameErrorLine",
                    "link": "/reference/pill_player/runtime/struct.FrameErrorLine"
                  },
                  {
                    "text": "FrameErrorReporter",
                    "link": "/reference/pill_player/runtime/struct.FrameErrorReporter"
                  },
                  {
                    "text": "FrameMetricHandles",
                    "link": "/reference/pill_player/runtime/struct.FrameMetricHandles"
                  },
                  {
                    "text": "FrameStatistics",
                    "link": "/reference/pill_player/runtime/struct.FrameStatistics"
                  },
                  {
                    "text": "Runtime",
                    "link": "/reference/pill_player/runtime/struct.Runtime"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "PackSource",
                    "link": "/reference/pill_player/runtime/enum.PackSource"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "FrameDriver",
                    "link": "/reference/pill_player/runtime/trait.FrameDriver"
                  },
                  {
                    "text": "WindowedFrameDriver",
                    "link": "/reference/pill_player/runtime/trait.WindowedFrameDriver"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "insert_debug_resources",
                    "link": "/reference/pill_player/runtime/fn.insert_debug_resources"
                  },
                  {
                    "text": "mount_asset_pack",
                    "link": "/reference/pill_player/runtime/fn.mount_asset_pack"
                  },
                  {
                    "text": "set_surface_camera",
                    "link": "/reference/pill_player/runtime/fn.set_surface_camera"
                  },
                  {
                    "text": "setup",
                    "link": "/reference/pill_player/runtime/fn.setup"
                  },
                  {
                    "text": "setup_with_asset_database",
                    "link": "/reference/pill_player/runtime/fn.setup_with_asset_database"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "FRAME_ERROR_REPORT_INTERVAL",
                    "link": "/reference/pill_player/runtime/constant.FRAME_ERROR_REPORT_INTERVAL"
                  },
                  {
                    "text": "FRAME_REPORT_INTERVAL_SECONDS",
                    "link": "/reference/pill_player/runtime/constant.FRAME_REPORT_INTERVAL_SECONDS"
                  }
                ]
              }
            ]
          },
          {
            "text": "static_project",
            "link": "/reference/pill_player/static_project/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "StaticLogging",
                    "link": "/reference/pill_player/static_project/struct.StaticLogging"
                  },
                  {
                    "text": "StaticModule",
                    "link": "/reference/pill_player/static_project/struct.StaticModule"
                  },
                  {
                    "text": "StaticProject",
                    "link": "/reference/pill_player/static_project/struct.StaticProject"
                  },
                  {
                    "text": "StaticRenderer",
                    "link": "/reference/pill_player/static_project/struct.StaticRenderer"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "StaticProjectBackend",
                    "link": "/reference/pill_player/static_project/enum.StaticProjectBackend"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "ProjectBackend",
                    "link": "/reference/pill_player/static_project/trait.ProjectBackend"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_manager_settings",
                    "link": "/reference/pill_player/static_project/fn.apply_manager_settings"
                  },
                  {
                    "text": "apply_project_startup_scene",
                    "link": "/reference/pill_player/static_project/fn.apply_project_startup_scene"
                  },
                  {
                    "text": "run_linked_entry_point",
                    "link": "/reference/pill_player/static_project/fn.run_linked_entry_point"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "StaticRendererAttachFn",
                    "link": "/reference/pill_player/static_project/type.StaticRendererAttachFn"
                  }
                ]
              }
            ]
          },
          {
            "text": "system_specs",
            "link": "/reference/pill_player/system_specs/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "format_uptime",
                    "link": "/reference/pill_player/system_specs/fn.format_uptime"
                  },
                  {
                    "text": "os_pretty_name",
                    "link": "/reference/pill_player/system_specs/fn.os_pretty_name"
                  },
                  {
                    "text": "percent",
                    "link": "/reference/pill_player/system_specs/fn.percent"
                  },
                  {
                    "text": "report_machine_specs",
                    "link": "/reference/pill_player/system_specs/fn.report_machine_specs"
                  },
                  {
                    "text": "storage_report_lines",
                    "link": "/reference/pill_player/system_specs/fn.storage_report_lines"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "BYTES_PER_GIBIBYTE",
                    "link": "/reference/pill_player/system_specs/constant.BYTES_PER_GIBIBYTE"
                  }
                ]
              }
            ]
          },
          {
            "text": "telemetry",
            "link": "/reference/pill_player/telemetry/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "LoggingSettings",
                    "link": "/reference/pill_player/telemetry/struct.LoggingSettings"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "apply_logging_settings",
                    "link": "/reference/pill_player/telemetry/fn.apply_logging_settings"
                  },
                  {
                    "text": "file_defaults",
                    "link": "/reference/pill_player/telemetry/fn.file_defaults"
                  },
                  {
                    "text": "init_telemetry",
                    "link": "/reference/pill_player/telemetry/fn.init_telemetry"
                  },
                  {
                    "text": "init_telemetry_with_capture",
                    "link": "/reference/pill_player/telemetry/fn.init_telemetry_with_capture"
                  },
                  {
                    "text": "report_failure",
                    "link": "/reference/pill_player/telemetry/fn.report_failure"
                  },
                  {
                    "text": "terminal_defaults",
                    "link": "/reference/pill_player/telemetry/fn.terminal_defaults"
                  }
                ]
              },
              {
                "text": "Statics",
                "collapsed": true,
                "items": [
                  {
                    "text": "TELEMETRY_HANDLES",
                    "link": "/reference/pill_player/telemetry/static.TELEMETRY_HANDLES"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Project Ui",
    "link": "/reference/pill_project_ui/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "convert",
            "link": "/reference/pill_project_ui/convert/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "convert",
                    "link": "/reference/pill_project_ui/convert/fn.convert"
                  },
                  {
                    "text": "external_id",
                    "link": "/reference/pill_project_ui/convert/fn.external_id"
                  },
                  {
                    "text": "straight_color",
                    "link": "/reference/pill_project_ui/convert/fn.straight_color"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "MANAGED_TEXTURE_ID_BIT",
                    "link": "/reference/pill_project_ui/convert/constant.MANAGED_TEXTURE_ID_BIT"
                  }
                ]
              }
            ]
          },
          {
            "text": "input",
            "link": "/reference/pill_project_ui/input/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "InputFrame",
                    "link": "/reference/pill_project_ui/input/struct.InputFrame"
                  },
                  {
                    "text": "InputMemory",
                    "link": "/reference/pill_project_ui/input/struct.InputMemory"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "map_key",
                    "link": "/reference/pill_project_ui/input/fn.map_key"
                  },
                  {
                    "text": "modifiers",
                    "link": "/reference/pill_project_ui/input/fn.modifiers"
                  },
                  {
                    "text": "pointer_button",
                    "link": "/reference/pill_project_ui/input/fn.pointer_button"
                  },
                  {
                    "text": "raw_input",
                    "link": "/reference/pill_project_ui/input/fn.raw_input"
                  }
                ]
              }
            ]
          },
          {
            "text": "textures",
            "link": "/reference/pill_project_ui/textures/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "MirroredTexture",
                    "link": "/reference/pill_project_ui/textures/struct.MirroredTexture"
                  },
                  {
                    "text": "TextureMirror",
                    "link": "/reference/pill_project_ui/textures/struct.TextureMirror"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "to_ui_texture_filter",
                    "link": "/reference/pill_project_ui/textures/fn.to_ui_texture_filter"
                  },
                  {
                    "text": "to_unpremultiplied_rgba8",
                    "link": "/reference/pill_project_ui/textures/fn.to_unpremultiplied_rgba8"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "GameUi",
            "link": "/reference/pill_project_ui/struct.GameUi"
          },
          {
            "text": "ResolvedFonts",
            "link": "/reference/pill_project_ui/struct.ResolvedFonts"
          },
          {
            "text": "ThemeInstall",
            "link": "/reference/pill_project_ui/struct.ThemeInstall"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "install",
            "link": "/reference/pill_project_ui/fn.install"
          },
          {
            "text": "install_with_theme",
            "link": "/reference/pill_project_ui/fn.install_with_theme"
          },
          {
            "text": "register_reload_system",
            "link": "/reference/pill_project_ui/fn.register_reload_system"
          },
          {
            "text": "resolve_fonts",
            "link": "/reference/pill_project_ui/fn.resolve_fonts"
          },
          {
            "text": "set_font_family",
            "link": "/reference/pill_project_ui/fn.set_font_family"
          },
          {
            "text": "theme_reload_system",
            "link": "/reference/pill_project_ui/fn.theme_reload_system"
          }
        ]
      },
      {
        "text": "Constants",
        "collapsed": true,
        "items": [
          {
            "text": "FONT_FAMILIES",
            "link": "/reference/pill_project_ui/constant.FONT_FAMILIES"
          },
          {
            "text": "PRIMARY_SURFACE",
            "link": "/reference/pill_project_ui/constant.PRIMARY_SURFACE"
          },
          {
            "text": "THEME_SYSTEM_NAME",
            "link": "/reference/pill_project_ui/constant.THEME_SYSTEM_NAME"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Renderer Api",
    "link": "/reference/pill_renderer_api/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "api",
            "link": "/reference/pill_renderer_api/api/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "HeadlessRenderer",
                    "link": "/reference/pill_renderer_api/api/struct.HeadlessRenderer"
                  },
                  {
                    "text": "RenderCapabilities",
                    "link": "/reference/pill_renderer_api/api/struct.RenderCapabilities"
                  },
                  {
                    "text": "RenderMetrics",
                    "link": "/reference/pill_renderer_api/api/struct.RenderMetrics"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FrameOutcome",
                    "link": "/reference/pill_renderer_api/api/enum.FrameOutcome"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "PillRenderer",
                    "link": "/reference/pill_renderer_api/api/trait.PillRenderer"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "AttachFuture",
                    "link": "/reference/pill_renderer_api/api/type.AttachFuture"
                  }
                ]
              }
            ]
          },
          {
            "text": "components",
            "link": "/reference/pill_renderer_api/components/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "camera",
                    "link": "/reference/pill_renderer_api/components/camera/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "CameraComponent",
                            "link": "/reference/pill_renderer_api/components/camera/struct.CameraComponent"
                          }
                        ]
                      },
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "__pill_register_CameraComponent",
                            "link": "/reference/pill_renderer_api/components/camera/fn.__pill_register_CameraComponent"
                          },
                          {
                            "text": "register",
                            "link": "/reference/pill_renderer_api/components/camera/fn.register"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "viewport",
                    "link": "/reference/pill_renderer_api/components/viewport/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Structs",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "RenderViewport",
                            "link": "/reference/pill_renderer_api/components/viewport/struct.RenderViewport"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "register_contract_components",
                    "link": "/reference/pill_renderer_api/components/fn.register_contract_components"
                  }
                ]
              }
            ]
          },
          {
            "text": "error",
            "link": "/reference/pill_renderer_api/error/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "RendererError",
                    "link": "/reference/pill_renderer_api/error/enum.RendererError"
                  }
                ]
              },
              {
                "text": "Traits",
                "collapsed": true,
                "items": [
                  {
                    "text": "ErrorContext",
                    "link": "/reference/pill_renderer_api/error/trait.ErrorContext"
                  }
                ]
              },
              {
                "text": "Type aliases",
                "collapsed": true,
                "items": [
                  {
                    "text": "Result",
                    "link": "/reference/pill_renderer_api/error/type.Result"
                  }
                ]
              }
            ]
          },
          {
            "text": "frame",
            "link": "/reference/pill_renderer_api/frame/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "AssetKey",
                    "link": "/reference/pill_renderer_api/frame/struct.AssetKey"
                  },
                  {
                    "text": "ChainSource",
                    "link": "/reference/pill_renderer_api/frame/struct.ChainSource"
                  },
                  {
                    "text": "PassSettings",
                    "link": "/reference/pill_renderer_api/frame/struct.PassSettings"
                  },
                  {
                    "text": "RenderFrame",
                    "link": "/reference/pill_renderer_api/frame/struct.RenderFrame"
                  },
                  {
                    "text": "RenderInstance",
                    "link": "/reference/pill_renderer_api/frame/struct.RenderInstance"
                  },
                  {
                    "text": "ResolvedPass",
                    "link": "/reference/pill_renderer_api/frame/struct.ResolvedPass"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "CullMode",
                    "link": "/reference/pill_renderer_api/frame/enum.CullMode"
                  },
                  {
                    "text": "MaterialParameter",
                    "link": "/reference/pill_renderer_api/frame/enum.MaterialParameter"
                  },
                  {
                    "text": "PassKind",
                    "link": "/reference/pill_renderer_api/frame/enum.PassKind"
                  },
                  {
                    "text": "PassTarget",
                    "link": "/reference/pill_renderer_api/frame/enum.PassTarget"
                  }
                ]
              }
            ]
          },
          {
            "text": "grid",
            "link": "/reference/pill_renderer_api/grid/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "SceneGrid",
                    "link": "/reference/pill_renderer_api/grid/struct.SceneGrid"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "editor_view_surfaces",
                    "link": "/reference/pill_renderer_api/grid/fn.editor_view_surfaces"
                  },
                  {
                    "text": "frame_grid",
                    "link": "/reference/pill_renderer_api/grid/fn.frame_grid"
                  },
                  {
                    "text": "view_bound_surfaces",
                    "link": "/reference/pill_renderer_api/grid/fn.view_bound_surfaces"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DEFAULT_CELL_SIZE",
                    "link": "/reference/pill_renderer_api/grid/constant.DEFAULT_CELL_SIZE"
                  }
                ]
              }
            ]
          },
          {
            "text": "picking",
            "link": "/reference/pill_renderer_api/picking/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "PickRequest",
                    "link": "/reference/pill_renderer_api/picking/struct.PickRequest"
                  },
                  {
                    "text": "PickRequests",
                    "link": "/reference/pill_renderer_api/picking/struct.PickRequests"
                  },
                  {
                    "text": "PickResult",
                    "link": "/reference/pill_renderer_api/picking/struct.PickResult"
                  },
                  {
                    "text": "PickResults",
                    "link": "/reference/pill_renderer_api/picking/struct.PickResults"
                  },
                  {
                    "text": "SelectionOutlines",
                    "link": "/reference/pill_renderer_api/picking/struct.SelectionOutlines"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "PickHit",
                    "link": "/reference/pill_renderer_api/picking/enum.PickHit"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "decode_pick_value",
                    "link": "/reference/pill_renderer_api/picking/fn.decode_pick_value"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PICK_HANDLE_BIT",
                    "link": "/reference/pill_renderer_api/picking/constant.PICK_HANDLE_BIT"
                  }
                ]
              }
            ]
          },
          {
            "text": "preview",
            "link": "/reference/pill_renderer_api/preview/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "PreviewImage",
                    "link": "/reference/pill_renderer_api/preview/struct.PreviewImage"
                  },
                  {
                    "text": "PreviewRequest",
                    "link": "/reference/pill_renderer_api/preview/struct.PreviewRequest"
                  },
                  {
                    "text": "PreviewRequests",
                    "link": "/reference/pill_renderer_api/preview/struct.PreviewRequests"
                  },
                  {
                    "text": "PreviewResults",
                    "link": "/reference/pill_renderer_api/preview/struct.PreviewResults"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "PreviewAsset",
                    "link": "/reference/pill_renderer_api/preview/enum.PreviewAsset"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "ensure_preview_resources",
                    "link": "/reference/pill_renderer_api/preview/fn.ensure_preview_resources"
                  }
                ]
              }
            ]
          },
          {
            "text": "raw_window",
            "link": "/reference/pill_renderer_api/raw_window/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "RawWindowData",
                    "link": "/reference/pill_renderer_api/raw_window/struct.RawWindowData"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "RawWindowKind",
                    "link": "/reference/pill_renderer_api/raw_window/enum.RawWindowKind"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "surface_failure_from_handle_error",
                    "link": "/reference/pill_renderer_api/raw_window/fn.surface_failure_from_handle_error"
                  }
                ]
              }
            ]
          },
          {
            "text": "surface",
            "link": "/reference/pill_renderer_api/surface/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "SurfaceCameras",
                    "link": "/reference/pill_renderer_api/surface/struct.SurfaceCameras"
                  },
                  {
                    "text": "SurfaceId",
                    "link": "/reference/pill_renderer_api/surface/struct.SurfaceId"
                  },
                  {
                    "text": "SurfaceOptions",
                    "link": "/reference/pill_renderer_api/surface/struct.SurfaceOptions"
                  },
                  {
                    "text": "SurfaceView",
                    "link": "/reference/pill_renderer_api/surface/struct.SurfaceView"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "CameraBinding",
                    "link": "/reference/pill_renderer_api/surface/enum.CameraBinding"
                  },
                  {
                    "text": "PresentPreference",
                    "link": "/reference/pill_renderer_api/surface/enum.PresentPreference"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "resolve_camera_binding",
                    "link": "/reference/pill_renderer_api/surface/fn.resolve_camera_binding"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Spline",
    "link": "/reference/pill_spline/",
    "collapsed": true,
    "items": [
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "OmoMO",
            "link": "/reference/pill_spline/struct.OmoMO"
          },
          {
            "text": "Spline",
            "link": "/reference/pill_spline/struct.Spline"
          },
          {
            "text": "TooManyControlPoints",
            "link": "/reference/pill_spline/struct.TooManyControlPoints"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "__pill_register_Spline",
            "link": "/reference/pill_spline/fn.__pill_register_Spline"
          },
          {
            "text": "catmull_rom",
            "link": "/reference/pill_spline/fn.catmull_rom"
          },
          {
            "text": "demo_spline",
            "link": "/reference/pill_spline/fn.demo_spline"
          },
          {
            "text": "init",
            "link": "/reference/pill_spline/fn.init"
          },
          {
            "text": "register",
            "link": "/reference/pill_spline/fn.register"
          }
        ]
      },
      {
        "text": "Constants",
        "collapsed": true,
        "items": [
          {
            "text": "DEMO_SPLINE_COUNT",
            "link": "/reference/pill_spline/constant.DEMO_SPLINE_COUNT"
          },
          {
            "text": "MAX_CONTROL_POINTS",
            "link": "/reference/pill_spline/constant.MAX_CONTROL_POINTS"
          },
          {
            "text": "SAMPLE_VERTICAL_OFFSET",
            "link": "/reference/pill_spline/constant.SAMPLE_VERTICAL_OFFSET"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Standalone",
    "link": "/reference/pill_standalone/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "error",
            "link": "/reference/pill_standalone/error/",
            "collapsed": true,
            "items": [
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FrontendError",
                    "link": "/reference/pill_standalone/error/enum.FrontendError"
                  },
                  {
                    "text": "RunError",
                    "link": "/reference/pill_standalone/error/enum.RunError"
                  }
                ]
              }
            ]
          },
          {
            "text": "posture",
            "link": "/reference/pill_standalone/posture/",
            "collapsed": true,
            "items": [
              {
                "text": "Modules",
                "collapsed": true,
                "items": [
                  {
                    "text": "compiled_posture",
                    "link": "/reference/pill_standalone/posture/compiled_posture/",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "Functions",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "attach_renderer",
                            "link": "/reference/pill_standalone/posture/compiled_posture/fn.attach_renderer"
                          },
                          {
                            "text": "setup_driver",
                            "link": "/reference/pill_standalone/posture/compiled_posture/fn.setup_driver"
                          }
                        ]
                      },
                      {
                        "text": "Type aliases",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "HeadlessDriver",
                            "link": "/reference/pill_standalone/posture/compiled_posture/type.HeadlessDriver"
                          },
                          {
                            "text": "ProjectSource",
                            "link": "/reference/pill_standalone/posture/compiled_posture/type.ProjectSource"
                          },
                          {
                            "text": "WindowedDriver",
                            "link": "/reference/pill_standalone/posture/compiled_posture/type.WindowedDriver"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "windowed_standalone",
            "link": "/reference/pill_standalone/windowed_standalone/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "PickTest",
                    "link": "/reference/pill_standalone/windowed_standalone/struct.PickTest"
                  },
                  {
                    "text": "SecondView",
                    "link": "/reference/pill_standalone/windowed_standalone/struct.SecondView"
                  },
                  {
                    "text": "WindowedApplication",
                    "link": "/reference/pill_standalone/windowed_standalone/struct.WindowedApplication"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "close_second_view",
                    "link": "/reference/pill_standalone/windowed_standalone/fn.close_second_view"
                  },
                  {
                    "text": "run",
                    "link": "/reference/pill_standalone/windowed_standalone/fn.run"
                  },
                  {
                    "text": "teardown_frontend_state",
                    "link": "/reference/pill_standalone/windowed_standalone/fn.teardown_frontend_state"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "PICK_TEST_ENVIRONMENT_VARIABLE",
                    "link": "/reference/pill_standalone/windowed_standalone/constant.PICK_TEST_ENVIRONMENT_VARIABLE"
                  },
                  {
                    "text": "PICK_TEST_WAIT_FRAMES",
                    "link": "/reference/pill_standalone/windowed_standalone/constant.PICK_TEST_WAIT_FRAMES"
                  },
                  {
                    "text": "SECOND_VIEW_ENVIRONMENT_VARIABLE",
                    "link": "/reference/pill_standalone/windowed_standalone/constant.SECOND_VIEW_ENVIRONMENT_VARIABLE"
                  },
                  {
                    "text": "SECOND_VIEW_SECONDS_ENVIRONMENT_VARIABLE",
                    "link": "/reference/pill_standalone/windowed_standalone/constant.SECOND_VIEW_SECONDS_ENVIRONMENT_VARIABLE"
                  },
                  {
                    "text": "SECOND_VIEW_SURFACE",
                    "link": "/reference/pill_standalone/windowed_standalone/constant.SECOND_VIEW_SURFACE"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "init_telemetry",
            "link": "/reference/pill_standalone/fn.init_telemetry"
          },
          {
            "text": "main",
            "link": "/reference/pill_standalone/fn.main"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Test",
    "link": "/reference/pill_test/",
    "collapsed": true,
    "items": [
      {
        "text": "Structs",
        "collapsed": true,
        "items": [
          {
            "text": "ModuleTest",
            "link": "/reference/pill_test/struct.ModuleTest"
          }
        ]
      },
      {
        "text": "Functions",
        "collapsed": true,
        "items": [
          {
            "text": "__pill_register_ModuleTest",
            "link": "/reference/pill_test/fn.__pill_register_ModuleTest"
          },
          {
            "text": "init",
            "link": "/reference/pill_test/fn.init"
          },
          {
            "text": "module_test_processor",
            "link": "/reference/pill_test/fn.module_test_processor"
          },
          {
            "text": "register",
            "link": "/reference/pill_test/fn.register"
          }
        ]
      },
      {
        "text": "Constants",
        "collapsed": true,
        "items": [
          {
            "text": "FIXED_DELTA_TIME",
            "link": "/reference/pill_test/constant.FIXED_DELTA_TIME"
          },
          {
            "text": "MODULE_TEST_ENTITY_COUNT",
            "link": "/reference/pill_test/constant.MODULE_TEST_ENTITY_COUNT"
          },
          {
            "text": "REPORT_INTERVAL_FRAMES",
            "link": "/reference/pill_test/constant.REPORT_INTERVAL_FRAMES"
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Ui Frame",
    "link": "/reference/pill_ui_frame/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "draw",
            "link": "/reference/pill_ui_frame/draw/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Color",
                    "link": "/reference/pill_ui_frame/draw/struct.Color"
                  },
                  {
                    "text": "DrawList",
                    "link": "/reference/pill_ui_frame/draw/struct.DrawList"
                  },
                  {
                    "text": "Rect",
                    "link": "/reference/pill_ui_frame/draw/struct.Rect"
                  },
                  {
                    "text": "TextureId",
                    "link": "/reference/pill_ui_frame/draw/struct.TextureId"
                  },
                  {
                    "text": "UiVertex",
                    "link": "/reference/pill_ui_frame/draw/struct.UiVertex"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "DrawCommand",
                    "link": "/reference/pill_ui_frame/draw/enum.DrawCommand"
                  }
                ]
              }
            ]
          },
          {
            "text": "frame",
            "link": "/reference/pill_ui_frame/frame/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "UiDraw",
                    "link": "/reference/pill_ui_frame/frame/struct.UiDraw"
                  },
                  {
                    "text": "UiFrame",
                    "link": "/reference/pill_ui_frame/frame/struct.UiFrame"
                  }
                ]
              }
            ]
          },
          {
            "text": "slot",
            "link": "/reference/pill_ui_frame/slot/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "UiFrameSlot",
                    "link": "/reference/pill_ui_frame/slot/struct.UiFrameSlot"
                  }
                ]
              }
            ]
          },
          {
            "text": "texture",
            "link": "/reference/pill_ui_frame/texture/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "UiTexture",
                    "link": "/reference/pill_ui_frame/texture/struct.UiTexture"
                  },
                  {
                    "text": "UiTextureSet",
                    "link": "/reference/pill_ui_frame/texture/struct.UiTextureSet"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "UiTextureFilter",
                    "link": "/reference/pill_ui_frame/texture/enum.UiTextureFilter"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Ui Kit",
    "link": "/reference/pill_ui_kit/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "style",
            "link": "/reference/pill_ui_kit/style/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FontSignature",
                    "link": "/reference/pill_ui_kit/style/struct.FontSignature"
                  },
                  {
                    "text": "ThemeFonts",
                    "link": "/reference/pill_ui_kit/style/struct.ThemeFonts"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "build_style",
                    "link": "/reference/pill_ui_kit/style/fn.build_style"
                  },
                  {
                    "text": "color",
                    "link": "/reference/pill_ui_kit/style/fn.color"
                  },
                  {
                    "text": "font_definitions",
                    "link": "/reference/pill_ui_kit/style/fn.font_definitions"
                  },
                  {
                    "text": "install",
                    "link": "/reference/pill_ui_kit/style/fn.install"
                  },
                  {
                    "text": "is_theme_font",
                    "link": "/reference/pill_ui_kit/style/fn.is_theme_font"
                  },
                  {
                    "text": "margin",
                    "link": "/reference/pill_ui_kit/style/fn.margin"
                  },
                  {
                    "text": "shadow",
                    "link": "/reference/pill_ui_kit/style/fn.shadow"
                  },
                  {
                    "text": "stroke",
                    "link": "/reference/pill_ui_kit/style/fn.stroke"
                  },
                  {
                    "text": "text_style_family",
                    "link": "/reference/pill_ui_kit/style/fn.text_style_family"
                  },
                  {
                    "text": "text_style_key",
                    "link": "/reference/pill_ui_kit/style/fn.text_style_key"
                  },
                  {
                    "text": "vec2",
                    "link": "/reference/pill_ui_kit/style/fn.vec2"
                  },
                  {
                    "text": "widget_visuals",
                    "link": "/reference/pill_ui_kit/style/fn.widget_visuals"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "DISPLAY_FAMILY",
                    "link": "/reference/pill_ui_kit/style/constant.DISPLAY_FAMILY"
                  },
                  {
                    "text": "THEME_BODY_KEY",
                    "link": "/reference/pill_ui_kit/style/constant.THEME_BODY_KEY"
                  },
                  {
                    "text": "THEME_DISPLAY_KEY",
                    "link": "/reference/pill_ui_kit/style/constant.THEME_DISPLAY_KEY"
                  },
                  {
                    "text": "THEME_MONOSPACE_KEY",
                    "link": "/reference/pill_ui_kit/style/constant.THEME_MONOSPACE_KEY"
                  }
                ]
              }
            ]
          },
          {
            "text": "variants",
            "link": "/reference/pill_ui_kit/variants/",
            "collapsed": true,
            "items": [
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "danger",
                    "link": "/reference/pill_ui_kit/variants/fn.danger"
                  },
                  {
                    "text": "primary",
                    "link": "/reference/pill_ui_kit/variants/fn.primary"
                  },
                  {
                    "text": "secondary",
                    "link": "/reference/pill_ui_kit/variants/fn.secondary"
                  },
                  {
                    "text": "set_state_fills_and_padding",
                    "link": "/reference/pill_ui_kit/variants/fn.set_state_fills_and_padding"
                  },
                  {
                    "text": "to_egui_color",
                    "link": "/reference/pill_ui_kit/variants/fn.to_egui_color"
                  }
                ]
              }
            ]
          },
          {
            "text": "widgets",
            "link": "/reference/pill_ui_kit/widgets/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "ChunkyButton",
                    "link": "/reference/pill_ui_kit/widgets/struct.ChunkyButton"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "to_egui_color",
                    "link": "/reference/pill_ui_kit/widgets/fn.to_egui_color"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "OUTLINE_WIDTH_POINTS",
                    "link": "/reference/pill_ui_kit/widgets/constant.OUTLINE_WIDTH_POINTS"
                  },
                  {
                    "text": "SELECTION_BAR_WIDTH_POINTS",
                    "link": "/reference/pill_ui_kit/widgets/constant.SELECTION_BAR_WIDTH_POINTS"
                  },
                  {
                    "text": "SHADOW_OFFSET",
                    "link": "/reference/pill_ui_kit/widgets/constant.SHADOW_OFFSET"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Ui Theme",
    "link": "/reference/pill_ui_theme/",
    "collapsed": true,
    "items": [
      {
        "text": "Modules",
        "collapsed": true,
        "items": [
          {
            "text": "asset",
            "link": "/reference/pill_ui_theme/asset/",
            "collapsed": true,
            "items": [
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "THEME_SHARED_NAME",
                    "link": "/reference/pill_ui_theme/asset/constant.THEME_SHARED_NAME"
                  }
                ]
              }
            ]
          },
          {
            "text": "font",
            "link": "/reference/pill_ui_theme/font/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FontAsset",
                    "link": "/reference/pill_ui_theme/font/struct.FontAsset"
                  },
                  {
                    "text": "FontImportSettings",
                    "link": "/reference/pill_ui_theme/font/struct.FontImportSettings"
                  }
                ]
              },
              {
                "text": "Constants",
                "collapsed": true,
                "items": [
                  {
                    "text": "FONT_SHARED_NAME",
                    "link": "/reference/pill_ui_theme/font/constant.FONT_SHARED_NAME"
                  }
                ]
              }
            ]
          },
          {
            "text": "overrides",
            "link": "/reference/pill_ui_theme/overrides/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "FontsOverrides",
                    "link": "/reference/pill_ui_theme/overrides/struct.FontsOverrides"
                  },
                  {
                    "text": "PaletteOverrides",
                    "link": "/reference/pill_ui_theme/overrides/struct.PaletteOverrides"
                  },
                  {
                    "text": "ShadowOverride",
                    "link": "/reference/pill_ui_theme/overrides/struct.ShadowOverride"
                  },
                  {
                    "text": "ShapeOverrides",
                    "link": "/reference/pill_ui_theme/overrides/struct.ShapeOverrides"
                  },
                  {
                    "text": "SpacingOverrides",
                    "link": "/reference/pill_ui_theme/overrides/struct.SpacingOverrides"
                  },
                  {
                    "text": "StrokeOverride",
                    "link": "/reference/pill_ui_theme/overrides/struct.StrokeOverride"
                  },
                  {
                    "text": "TextStyleOverride",
                    "link": "/reference/pill_ui_theme/overrides/struct.TextStyleOverride"
                  },
                  {
                    "text": "ThemeOverrides",
                    "link": "/reference/pill_ui_theme/overrides/struct.ThemeOverrides"
                  },
                  {
                    "text": "WidgetsOverrides",
                    "link": "/reference/pill_ui_theme/overrides/struct.WidgetsOverrides"
                  },
                  {
                    "text": "WidgetStyleOverride",
                    "link": "/reference/pill_ui_theme/overrides/struct.WidgetStyleOverride"
                  }
                ]
              }
            ]
          },
          {
            "text": "register",
            "link": "/reference/pill_ui_theme/register/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "LoadedFont",
                    "link": "/reference/pill_ui_theme/register/struct.LoadedFont"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "ThemePathScope",
                    "link": "/reference/pill_ui_theme/register/enum.ThemePathScope"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "load_font",
                    "link": "/reference/pill_ui_theme/register/fn.load_font"
                  },
                  {
                    "text": "load_overrides",
                    "link": "/reference/pill_ui_theme/register/fn.load_overrides"
                  },
                  {
                    "text": "register",
                    "link": "/reference/pill_ui_theme/register/fn.register"
                  }
                ]
              }
            ]
          },
          {
            "text": "theme",
            "link": "/reference/pill_ui_theme/theme/",
            "collapsed": true,
            "items": [
              {
                "text": "Structs",
                "collapsed": true,
                "items": [
                  {
                    "text": "Palette",
                    "link": "/reference/pill_ui_theme/theme/struct.Palette"
                  },
                  {
                    "text": "Rgba",
                    "link": "/reference/pill_ui_theme/theme/struct.Rgba"
                  },
                  {
                    "text": "Shadow",
                    "link": "/reference/pill_ui_theme/theme/struct.Shadow"
                  },
                  {
                    "text": "Shape",
                    "link": "/reference/pill_ui_theme/theme/struct.Shape"
                  },
                  {
                    "text": "Spacing",
                    "link": "/reference/pill_ui_theme/theme/struct.Spacing"
                  },
                  {
                    "text": "Stroke",
                    "link": "/reference/pill_ui_theme/theme/struct.Stroke"
                  },
                  {
                    "text": "TextStyle",
                    "link": "/reference/pill_ui_theme/theme/struct.TextStyle"
                  },
                  {
                    "text": "Theme",
                    "link": "/reference/pill_ui_theme/theme/struct.Theme"
                  },
                  {
                    "text": "ThemeFontPaths",
                    "link": "/reference/pill_ui_theme/theme/struct.ThemeFontPaths"
                  },
                  {
                    "text": "WidgetStates",
                    "link": "/reference/pill_ui_theme/theme/struct.WidgetStates"
                  },
                  {
                    "text": "WidgetStyle",
                    "link": "/reference/pill_ui_theme/theme/struct.WidgetStyle"
                  }
                ]
              },
              {
                "text": "Enums",
                "collapsed": true,
                "items": [
                  {
                    "text": "FontFamilyName",
                    "link": "/reference/pill_ui_theme/theme/enum.FontFamilyName"
                  },
                  {
                    "text": "ThemeError",
                    "link": "/reference/pill_ui_theme/theme/enum.ThemeError"
                  }
                ]
              },
              {
                "text": "Functions",
                "collapsed": true,
                "items": [
                  {
                    "text": "check_number",
                    "link": "/reference/pill_ui_theme/theme/fn.check_number"
                  },
                  {
                    "text": "fallback_text_styles",
                    "link": "/reference/pill_ui_theme/theme/fn.fallback_text_styles"
                  },
                  {
                    "text": "merge_fonts",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_fonts"
                  },
                  {
                    "text": "merge_palette",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_palette"
                  },
                  {
                    "text": "merge_shadow",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_shadow"
                  },
                  {
                    "text": "merge_shape",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_shape"
                  },
                  {
                    "text": "merge_spacing",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_spacing"
                  },
                  {
                    "text": "merge_stroke",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_stroke"
                  },
                  {
                    "text": "merge_text_styles",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_text_styles"
                  },
                  {
                    "text": "merge_widget",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_widget"
                  },
                  {
                    "text": "merge_widgets",
                    "link": "/reference/pill_ui_theme/theme/fn.merge_widgets"
                  },
                  {
                    "text": "parse_color",
                    "link": "/reference/pill_ui_theme/theme/fn.parse_color"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "text": "Pill Web",
    "link": "/reference/pill_web/"
  },
  {
    "text": "Pill Web Editor",
    "link": "/reference/pill_web_editor/"
  }
]
