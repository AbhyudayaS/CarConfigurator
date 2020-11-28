import {
  TWEEN
} from 'three/examples/jsm/libs/tween.module.min';

// This object contains the state of the app
export default {
  isDev: false,
  isShowingStats: true,
  isLoaded: false,
  isTweening: false,
  isRotating: true,
  isMouseMoving: false,
  isMouseOver: false,
  maxAnisotropy: 1,
  windowWidth: window.innerWidth * 0.7,
  windowHeight: window.innerHeight,
  dpr: 1,
  easing: TWEEN.Easing.Quadratic.InOut,
  duration: 500,
  model: {
    path: './assets/mazda_mx-5_gltf/',
    dracoPath: './assets/mazda_draco-gltf/',
    scale: 30,
    rotation: {
      x: 0,
      y: 0,
      z: -0.2
    },
    position: {
      x: -28,
      y: 18,
      z: 0
    }
  },
  env: {
    path: ''
  },
  texture: {
    path: './assets/configurator_textures/car_leather/',
    imageFiles: ['leather_1.jpg', 'leather_2.jpg', 'leather_3.jpg']
  },
  mesh: {
    enableHelper: false,
    wireframe: false,
    translucent: false,
    material: {
      color: 0xffffff,
      emissive: 0xffffff
    }
  },
  fog: {
    color: 0xffffff,
    near: 0.0008
  },
  camera: {
    fov: 45,
    near: 0.25,
    far: 2000,
    aspect: 1,

    posX: 135.69390763455382,
    posY: 187.59458465903026,
    posZ: -5.291831164359271,

    rotX: -1.6066348054174673,
    rotY: 0.7430937835730766,
    rotZ: 1.6237403803946224
  },
  controls: {
    autoRotate: false,
    autoRotateSpeed: -0.5,
    rotateSpeed: 0.5,
    zoomSpeed: 0.8,
    minDistance: 40,
    maxDistance: 2000,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enableDamping: true,
    dampingFactor: 0.5,
    enableZoom: true,
    target: {
      x: 0,
      y: 40,
      z: 0
    }
  },

  seatcamera: {
    posX: 11,
    posY: 44,
    posZ: -20,
    rotX: -3.0349799691225416,
    rotY: -0.0007405858905620631,
    rotZ: 3.139350293921155

  },
  seatControls: {
    target: {
      x: 11,
      y: 43.95,
      z: -19.5
    }
  },
  ambientLight: {
    enabled: true,
    color: 0x141414
  },
  directionalLight: {
    enabled: true,
    color: 0xf0f0f0,
    intensity: 0.4,
    x: -75,
    y: 280,
    z: 150
  },
  shadow: {
    enabled: true,
    helperEnabled: false,
    bias: 0,
    mapWidth: 2048,
    mapHeight: 2048,
    near: 250,
    far: 400,
    top: 100,
    right: 100,
    bottom: -100,
    left: -100
  },
  pointLight: {
    enabled: true,
    color: 0xffffff,
    intensity: 0.34,
    distance: 115,
    x: 0,
    y: 0,
    z: 0
  },
  hemiLight: {
    enabled: true,
    color: 0xc8c8c8,
    groundColor: 0xffffff,
    intensity: 0.55,
    x: 0,
    y: 0,
    z: 0
  }
};
