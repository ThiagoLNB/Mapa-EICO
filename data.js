var APP_DATA = {
  "scenes": [
    {
      "id": "0-sector-n1",
      "name": "Sector N°1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.9564471178575076,
        "pitch": 0.07646071659337039,
        "fov": 1.1024769957869067
      },
      "linkHotspots": [
        {
          "yaw": -0.9960160446095969,
          "pitch": 0.03492765620217142,
          "rotation": 0,
          "target": "1-sector-n2"
        },
        {
          "yaw": 2.1145328212919257,
          "pitch": 0.0684354284524229,
          "rotation": 7.853981633974483,
          "target": "2-sector-n3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6236419242969635,
          "pitch": -0.02038063342008911,
          "title": "Vista inicial",
          "text": "Este es el punto desde el cual empiezas a ver el panorama"
        },
        {
          "yaw": 2.1143264727778526,
          "pitch": -0.07803802442679064,
          "title": "Link hotspot",
          "text": "Estas flechas te permiten desplazarte por el lugar"
        }
      ]
    },
    {
      "id": "1-sector-n2",
      "name": "Sector N°2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8032076455606614,
        "pitch": 0.08694354500419976,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": 2.2906414038258394,
          "pitch": 0.1404681436108426,
          "rotation": 0,
          "target": "0-sector-n1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sector-n3",
      "name": "Sector N°3",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5973356768477345,
        "pitch": 0.19386246613974123,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": 1.0430359868013817,
          "pitch": 0.10625152114714709,
          "rotation": 4.71238898038469,
          "target": "0-sector-n1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Taller Mecanico",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
