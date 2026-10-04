window.FREESPEED_PROJECT = {
  "title": "FreeSpeed: Training-Free Speed Control for Generative Robot Policies",
  "commands": [
    0.2,
    0.3,
    0.5,
    2,
    3,
    4,
    "variable"
  ],
  "defaultCommand": 4,
  "defaultTask": "tennis",
  "methods": {
    "reference": "Reference",
    "wocr": "w/o CR",
    "vanilla": "Vanilla resampling",
    "freespeed": "FreeSpeed"
  },
  "comparisonTasks": [
    {
      "id": "tennis",
      "name": "Tennis in Can",
      "label": "Tennis in Can",
      "comparisonClips": {
        "0.2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/tennis_1_reference.mp4",
              "poster": "static/videos/individual/tennis_1_reference.jpg",
              "duration": 42.06666666666667,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1262,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/tennis_0p2_wocr.mp4",
              "poster": "static/videos/individual/tennis_0p2_wocr.jpg",
              "duration": 58.63333333333333,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1759,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/tennis_0p2_freespeed.mp4",
              "poster": "static/videos/individual/tennis_0p2_freespeed.jpg",
              "duration": 35.3,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 1059,
              "starts_midway": false
            }
          }
        },
        "0.3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/tennis_1_reference.mp4",
              "poster": "static/videos/individual/tennis_1_reference.jpg",
              "duration": 42.06666666666667,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1262,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/tennis_0p3_wocr.mp4",
              "poster": "static/videos/individual/tennis_0p3_wocr.jpg",
              "duration": 65.73333333333333,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1972,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/tennis_0p3_freespeed.mp4",
              "poster": "static/videos/individual/tennis_0p3_freespeed.jpg",
              "duration": 59.8,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1794,
              "starts_midway": true
            }
          },
          "note": "FreeSpeed: this recording starts midway through the preceding 0.3× w/o CR attempt."
        },
        "0.5": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/tennis_1_reference.mp4",
              "poster": "static/videos/individual/tennis_1_reference.jpg",
              "duration": 42.06666666666667,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1262,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/tennis_0p5_wocr.mp4",
              "poster": "static/videos/individual/tennis_0p5_wocr.jpg",
              "duration": 41.2,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1236,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/tennis_0p5_freespeed.mp4",
              "poster": "static/videos/individual/tennis_0p5_freespeed.jpg",
              "duration": 44.8,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 1344,
              "starts_midway": false
            }
          }
        },
        "2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/tennis_1_reference.mp4",
              "poster": "static/videos/individual/tennis_1_reference.jpg",
              "duration": 42.06666666666667,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1262,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/tennis_2_wocr.mp4",
              "poster": "static/videos/individual/tennis_2_wocr.jpg",
              "duration": 30.866666666666667,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 926,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/tennis_2_vanilla.mp4",
              "poster": "static/videos/individual/tennis_2_vanilla.jpg",
              "duration": 31.066666666666666,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 932,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/tennis_2_freespeed.mp4",
              "poster": "static/videos/individual/tennis_2_freespeed.jpg",
              "duration": 28.933333333333334,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 868,
              "starts_midway": false
            }
          }
        },
        "3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/tennis_1_reference.mp4",
              "poster": "static/videos/individual/tennis_1_reference.jpg",
              "duration": 42.06666666666667,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1262,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/tennis_3_wocr.mp4",
              "poster": "static/videos/individual/tennis_3_wocr.jpg",
              "duration": 26.2,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 786,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/tennis_3_vanilla.mp4",
              "poster": "static/videos/individual/tennis_3_vanilla.jpg",
              "duration": 27.266666666666666,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 818,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/tennis_3_freespeed.mp4",
              "poster": "static/videos/individual/tennis_3_freespeed.jpg",
              "duration": 26.2,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 786,
              "starts_midway": false
            }
          }
        },
        "4": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/tennis_1_reference.mp4",
              "poster": "static/videos/individual/tennis_1_reference.jpg",
              "duration": 42.06666666666667,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1262,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/tennis_4_wocr.mp4",
              "poster": "static/videos/individual/tennis_4_wocr.jpg",
              "duration": 28.733333333333334,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 862,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/tennis_4_vanilla.mp4",
              "poster": "static/videos/individual/tennis_4_vanilla.jpg",
              "duration": 18.8,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 564,
              "starts_midway": false,
              "outcome": "failure"
            },
            "freespeed": {
              "src": "static/videos/individual/tennis_4_freespeed.mp4",
              "poster": "static/videos/individual/tennis_4_freespeed.jpg",
              "duration": 29.4,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 882,
              "starts_midway": false
            }
          }
        },
        "variable": {
          "panels": {
            "freespeed": {
              "src": "static/videos/individual/tennis_variable_freespeed.mp4",
              "poster": "static/videos/individual/tennis_variable_freespeed.jpg",
              "duration": 33.1,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 993,
              "starts_midway": false
            }
          },
          "note": "The speed command changes during this episode. The recording plays at its original speed."
        }
      }
    },
    {
      "id": "stack-cube",
      "name": "Stack Cube",
      "label": "Stack Cube",
      "comparisonClips": {
        "0.2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/stack-cube_1_reference.mp4",
              "poster": "static/videos/individual/stack-cube_1_reference.jpg",
              "duration": 22.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 660,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/stack-cube_0p2_wocr.mp4",
              "poster": "static/videos/individual/stack-cube_0p2_wocr.jpg",
              "duration": 80.1,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 2403,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/stack-cube_0p2_freespeed.mp4",
              "poster": "static/videos/individual/stack-cube_0p2_freespeed.jpg",
              "duration": 57.46666666666667,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1724,
              "starts_midway": false
            }
          }
        },
        "0.3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/stack-cube_1_reference.mp4",
              "poster": "static/videos/individual/stack-cube_1_reference.jpg",
              "duration": 22.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 660,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/stack-cube_0p3_wocr.mp4",
              "poster": "static/videos/individual/stack-cube_0p3_wocr.jpg",
              "duration": 51.06666666666667,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 1532,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/stack-cube_0p3_freespeed.mp4",
              "poster": "static/videos/individual/stack-cube_0p3_freespeed.jpg",
              "duration": 41.93333333333333,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 1258,
              "starts_midway": false
            }
          }
        },
        "0.5": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/stack-cube_1_reference.mp4",
              "poster": "static/videos/individual/stack-cube_1_reference.jpg",
              "duration": 22.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 660,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/stack-cube_0p5_wocr.mp4",
              "poster": "static/videos/individual/stack-cube_0p5_wocr.jpg",
              "duration": 33.6,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1008,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/stack-cube_0p5_freespeed.mp4",
              "poster": "static/videos/individual/stack-cube_0p5_freespeed.jpg",
              "duration": 25.766666666666666,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 773,
              "starts_midway": false
            }
          }
        },
        "2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/stack-cube_1_reference.mp4",
              "poster": "static/videos/individual/stack-cube_1_reference.jpg",
              "duration": 22.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 660,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/stack-cube_2_wocr.mp4",
              "poster": "static/videos/individual/stack-cube_2_wocr.jpg",
              "duration": 12.1,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 363,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/stack-cube_2_vanilla.mp4",
              "poster": "static/videos/individual/stack-cube_2_vanilla.jpg",
              "duration": 11.466666666666667,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 344,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/stack-cube_2_freespeed.mp4",
              "poster": "static/videos/individual/stack-cube_2_freespeed.jpg",
              "duration": 13.1,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 393,
              "starts_midway": false
            }
          }
        },
        "3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/stack-cube_1_reference.mp4",
              "poster": "static/videos/individual/stack-cube_1_reference.jpg",
              "duration": 22.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 660,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/stack-cube_3_wocr.mp4",
              "poster": "static/videos/individual/stack-cube_3_wocr.jpg",
              "duration": 10.2,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 306,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/stack-cube_3_vanilla.mp4",
              "poster": "static/videos/individual/stack-cube_3_vanilla.jpg",
              "duration": 9.7,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 291,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/stack-cube_3_freespeed.mp4",
              "poster": "static/videos/individual/stack-cube_3_freespeed.jpg",
              "duration": 12.1,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 363,
              "starts_midway": false
            }
          }
        },
        "4": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/stack-cube_1_reference.mp4",
              "poster": "static/videos/individual/stack-cube_1_reference.jpg",
              "duration": 22.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 660,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/stack-cube_4_wocr.mp4",
              "poster": "static/videos/individual/stack-cube_4_wocr.jpg",
              "duration": 9.1,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 273,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/stack-cube_4_vanilla.mp4",
              "poster": "static/videos/individual/stack-cube_4_vanilla.jpg",
              "duration": 10.8,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 324,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/stack-cube_4_freespeed.mp4",
              "poster": "static/videos/individual/stack-cube_4_freespeed.jpg",
              "duration": 13.7,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 411,
              "starts_midway": false
            }
          }
        },
        "variable": null
      }
    },
    {
      "id": "pour-almond",
      "name": "Pour Almond",
      "label": "Pour Almond",
      "comparisonClips": {
        "0.2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/pour-almond_1_reference.mp4",
              "poster": "static/videos/individual/pour-almond_1_reference.jpg",
              "duration": 30.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 900,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/pour-almond_0p2_wocr.mp4",
              "poster": "static/videos/individual/pour-almond_0p2_wocr.jpg",
              "duration": 171.6,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 5148,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/pour-almond_0p2_freespeed.mp4",
              "poster": "static/videos/individual/pour-almond_0p2_freespeed.jpg",
              "duration": 77.93333333333334,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 2338,
              "starts_midway": false
            }
          }
        },
        "0.3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/pour-almond_1_reference.mp4",
              "poster": "static/videos/individual/pour-almond_1_reference.jpg",
              "duration": 30.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 900,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/pour-almond_0p3_wocr.mp4",
              "poster": "static/videos/individual/pour-almond_0p3_wocr.jpg",
              "duration": 90.9,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 2727,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/pour-almond_0p3_freespeed.mp4",
              "poster": "static/videos/individual/pour-almond_0p3_freespeed.jpg",
              "duration": 126.33333333333333,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 3790,
              "starts_midway": false
            }
          }
        },
        "0.5": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/pour-almond_1_reference.mp4",
              "poster": "static/videos/individual/pour-almond_1_reference.jpg",
              "duration": 30.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 900,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/pour-almond_0p5_wocr.mp4",
              "poster": "static/videos/individual/pour-almond_0p5_wocr.jpg",
              "duration": 56.96666666666667,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1709,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/pour-almond_0p5_freespeed.mp4",
              "poster": "static/videos/individual/pour-almond_0p5_freespeed.jpg",
              "duration": 43.666666666666664,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1310,
              "starts_midway": false
            }
          }
        },
        "2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/pour-almond_1_reference.mp4",
              "poster": "static/videos/individual/pour-almond_1_reference.jpg",
              "duration": 30.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 900,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/pour-almond_2_wocr.mp4",
              "poster": "static/videos/individual/pour-almond_2_wocr.jpg",
              "duration": 21.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 630,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/pour-almond_2_vanilla.mp4",
              "poster": "static/videos/individual/pour-almond_2_vanilla.jpg",
              "duration": 27.033333333333335,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 811,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/pour-almond_2_freespeed.mp4",
              "poster": "static/videos/individual/pour-almond_2_freespeed.jpg",
              "duration": 25.033333333333335,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 751,
              "starts_midway": false
            }
          }
        },
        "3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/pour-almond_1_reference.mp4",
              "poster": "static/videos/individual/pour-almond_1_reference.jpg",
              "duration": 30.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 900,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/pour-almond_3_wocr.mp4",
              "poster": "static/videos/individual/pour-almond_3_wocr.jpg",
              "duration": 15.433333333333334,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 463,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/pour-almond_3_vanilla.mp4",
              "poster": "static/videos/individual/pour-almond_3_vanilla.jpg",
              "duration": 13.666666666666666,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 410,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/pour-almond_3_freespeed.mp4",
              "poster": "static/videos/individual/pour-almond_3_freespeed.jpg",
              "duration": 23.733333333333334,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 712,
              "starts_midway": false
            }
          }
        },
        "4": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/pour-almond_1_reference.mp4",
              "poster": "static/videos/individual/pour-almond_1_reference.jpg",
              "duration": 30.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 900,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/pour-almond_4_wocr.mp4",
              "poster": "static/videos/individual/pour-almond_4_wocr.jpg",
              "duration": 14.633333333333333,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 439,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/pour-almond_4_vanilla.mp4",
              "poster": "static/videos/individual/pour-almond_4_vanilla.jpg",
              "duration": 15.233333333333333,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 457,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/pour-almond_4_freespeed.mp4",
              "poster": "static/videos/individual/pour-almond_4_freespeed.jpg",
              "duration": 24.433333333333334,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 733,
              "starts_midway": false
            }
          }
        },
        "variable": null
      }
    },
    {
      "id": "peach",
      "name": "Peach on Plate",
      "label": "Peach on Plate",
      "comparisonClips": {
        "0.2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/peach_1_reference.mp4",
              "poster": "static/videos/individual/peach_1_reference.jpg",
              "duration": 23.666666666666668,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 710,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/peach_0p2_wocr.mp4",
              "poster": "static/videos/individual/peach_0p2_wocr.jpg",
              "duration": 71.1,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 2133,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/peach_0p2_freespeed.mp4",
              "poster": "static/videos/individual/peach_0p2_freespeed.jpg",
              "duration": 55.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1650,
              "starts_midway": false
            }
          }
        },
        "0.3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/peach_1_reference.mp4",
              "poster": "static/videos/individual/peach_1_reference.jpg",
              "duration": 23.666666666666668,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 710,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/peach_0p3_wocr.mp4",
              "poster": "static/videos/individual/peach_0p3_wocr.jpg",
              "duration": 53.0,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1590,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/peach_0p3_freespeed.mp4",
              "poster": "static/videos/individual/peach_0p3_freespeed.jpg",
              "duration": 38.666666666666664,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 1160,
              "starts_midway": false
            }
          }
        },
        "0.5": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/peach_1_reference.mp4",
              "poster": "static/videos/individual/peach_1_reference.jpg",
              "duration": 23.666666666666668,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 710,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/peach_0p5_wocr.mp4",
              "poster": "static/videos/individual/peach_0p5_wocr.jpg",
              "duration": 36.9,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 1107,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/peach_0p5_freespeed.mp4",
              "poster": "static/videos/individual/peach_0p5_freespeed.jpg",
              "duration": 29.833333333333332,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 895,
              "starts_midway": false
            }
          }
        },
        "2": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/peach_1_reference.mp4",
              "poster": "static/videos/individual/peach_1_reference.jpg",
              "duration": 23.666666666666668,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 710,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/peach_2_wocr.mp4",
              "poster": "static/videos/individual/peach_2_wocr.jpg",
              "duration": 16.9,
              "fps": 30.000000000000004,
              "width": 960,
              "height": 540,
              "frames": 507,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/peach_2_vanilla.mp4",
              "poster": "static/videos/individual/peach_2_vanilla.jpg",
              "duration": 16.533333333333335,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 496,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/peach_2_freespeed.mp4",
              "poster": "static/videos/individual/peach_2_freespeed.jpg",
              "duration": 15.4,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 462,
              "starts_midway": false
            }
          }
        },
        "3": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/peach_1_reference.mp4",
              "poster": "static/videos/individual/peach_1_reference.jpg",
              "duration": 23.666666666666668,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 710,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/peach_3_wocr.mp4",
              "poster": "static/videos/individual/peach_3_wocr.jpg",
              "duration": 12.6,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 378,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/peach_3_vanilla.mp4",
              "poster": "static/videos/individual/peach_3_vanilla.jpg",
              "duration": 11.8,
              "fps": 29.999999999999996,
              "width": 960,
              "height": 540,
              "frames": 354,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/peach_3_freespeed.mp4",
              "poster": "static/videos/individual/peach_3_freespeed.jpg",
              "duration": 16.633333333333333,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 499,
              "starts_midway": false
            }
          }
        },
        "4": {
          "panels": {
            "reference": {
              "src": "static/videos/individual/peach_1_reference.mp4",
              "poster": "static/videos/individual/peach_1_reference.jpg",
              "duration": 23.666666666666668,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 710,
              "starts_midway": false
            },
            "wocr": {
              "src": "static/videos/individual/peach_4_wocr.mp4",
              "poster": "static/videos/individual/peach_4_wocr.jpg",
              "duration": 24.733333333333334,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 742,
              "starts_midway": false
            },
            "vanilla": {
              "src": "static/videos/individual/peach_4_vanilla.mp4",
              "poster": "static/videos/individual/peach_4_vanilla.jpg",
              "duration": 11.866666666666667,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 356,
              "starts_midway": false
            },
            "freespeed": {
              "src": "static/videos/individual/peach_4_freespeed.mp4",
              "poster": "static/videos/individual/peach_4_freespeed.jpg",
              "duration": 18.066666666666666,
              "fps": 30.0,
              "width": 960,
              "height": 540,
              "frames": 542,
              "starts_midway": false
            }
          }
        },
        "variable": null
      }
    }
  ]
};
