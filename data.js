var APP_DATA = {
  "scenes": [
    {
      "id": "0-garasi",
      "name": "Garasi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3933557391391478,
          "pitch": 0.3800175543043487,
          "rotation": 0,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ruang-tamu",
      "name": "Ruang Tamu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7258463693683925,
          "pitch": 0.164503431299714,
          "rotation": 0,
          "target": "2-kamar-bawah-1"
        },
        {
          "yaw": -1.1371142649739774,
          "pitch": 0.14782230944156183,
          "rotation": 10.995574287564278,
          "target": "0-garasi"
        },
        {
          "yaw": 0.18970342037445675,
          "pitch": 0.31652986862198595,
          "rotation": 0,
          "target": "4-toilet-bawah"
        },
        {
          "yaw": -0.17050065919726265,
          "pitch": -0.04069935808426095,
          "rotation": 0.7853981633974483,
          "target": "5-tangga"
        },
        {
          "yaw": 0.5079844979959596,
          "pitch": 0.14717291990706194,
          "rotation": 1.5707963267948966,
          "target": "3-kamar-bawah-2"
        },
        {
          "yaw": 2.365611840400293,
          "pitch": 0.12528612189533916,
          "rotation": 10.995574287564278,
          "target": "9-dapur"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.119068615455463,
          "pitch": -0.11053605755679641,
          "title": "Ruang Tamu",
          "text": ""
        }
      ]
    },
    {
      "id": "2-kamar-bawah-1",
      "name": "Kamar Bawah 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6711661021907496,
          "pitch": 0.329952317427221,
          "rotation": 0,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kamar-bawah-2",
      "name": "Kamar Bawah 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.354017787384473,
          "pitch": -0.12636013692290504,
          "rotation": 0,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-toilet-bawah",
      "name": "Toilet Bawah",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2800066351447335,
          "pitch": 0.06803634269251368,
          "rotation": 1.5707963267948966,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-tangga",
      "name": "Tangga",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5521249257160363,
          "pitch": 0.628843551411121,
          "rotation": 0,
          "target": "1-ruang-tamu"
        },
        {
          "yaw": -0.6431060999737639,
          "pitch": -0.4274972795508898,
          "rotation": 1.5707963267948966,
          "target": "6-lantai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lantai-2",
      "name": "Lantai 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6451464353265335,
          "pitch": 0.05949482726629185,
          "rotation": 3.141592653589793,
          "target": "5-tangga"
        },
        {
          "yaw": 0.4523528104391339,
          "pitch": 0.12152704284455851,
          "rotation": 7.853981633974483,
          "target": "7-toilet-atas"
        },
        {
          "yaw": 0.2449996400917822,
          "pitch": 0.34047106698785257,
          "rotation": 0,
          "target": "8-kamar-atas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-toilet-atas",
      "name": "Toilet Atas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7615579213768253,
          "pitch": -0.08551136660620173,
          "rotation": 4.71238898038469,
          "target": "6-lantai-2"
        },
        {
          "yaw": -2.21996310828553,
          "pitch": -0.15668191234763462,
          "rotation": 1.5707963267948966,
          "target": "8-kamar-atas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kamar-atas",
      "name": "Kamar Atas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1365516378104825,
          "pitch": 0.10553850248090768,
          "rotation": 4.71238898038469,
          "target": "7-toilet-atas"
        },
        {
          "yaw": -2.6754831331966695,
          "pitch": 0.029316418445501924,
          "rotation": 4.71238898038469,
          "target": "6-lantai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dapur",
      "name": "Dapur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1750043240785857,
          "pitch": 0.16787352941033973,
          "rotation": 0,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
