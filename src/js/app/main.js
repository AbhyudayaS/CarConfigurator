import * as THREE from 'three';
import {
  ARButton
} from 'three/examples/jsm/webxr/ARButton';

import Renderer from './components/renderer';
import Camera from './components/camera';
import Model from './model/model';
import Controls from './components/controls';
import Light from './components/light';
import CameraTween from './helpers/cameraTween';
import Texture from './model/texture';
import UIHelper from './helpers/uiHelper';

import Config from '../data/config';

export default class Main {
  constructor(container) {
    UIHelper.hideIntColors();
    UIHelper.showExtColors();
    UIHelper.updateText();

    this.container = container;

    // Start Three clock
    this.clock = new THREE.Clock();

    // Main scene creation
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFFFFFF);
    this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

    // Main renderer constructor
    this.renderer = new Renderer(this.scene, container);
    // Components instantiations
    this.camera = new Camera(this.renderer);

    this.light = new Light(this.scene);
    // Create and place lights in scene
    const lights = ['ambient','directional','point','hemi'];
    lights.forEach((light) => this.light.place(light));


    this.controls = new Controls(this.camera.threeCamera, this.renderer.threeRenderer);


    this.manager = new THREE.LoadingManager();
    this.texture = new Texture();
    this.texture.load(this.manager).then(() => {});

    this.modelManager = new THREE.LoadingManager();
    this.model = new Model(this.scene, this.modelManager);
    this.model.load(this.scene, this.model);
    this.modelManager.onLoad = () => {
      document.getElementById('loader').style.display = 'none';
    };

    this.cameraTween = new CameraTween(this.camera, this.controls);

    this.setupMenuControls();      

    this.animate();
  }

  setupMenuControls() {

    window.addEventListener("resize", () => {
      UIHelper.updateText();
    });

    document.getElementById('toExterior').addEventListener('click', () => {
      this.cameraTween.tweenCameraToExterior();
      console.log("To Exterior");
      
      UIHelper.hideIntColors();
      UIHelper.showExtColors();
    });

    document.getElementById('toInterior').addEventListener('click', () => {
      this.cameraTween.tweenCameraToSeat();
      UIHelper.hideExtColors();
      UIHelper.showIntColors();
    });

    document.getElementById('seatTexture1').addEventListener('click', () => {
      this.model.changeSeatMaterial(this.texture.textures[Config.texture.imageFiles[0]]);
      UIHelper.showBorderOnSelectionIntColor(0);
    });

    document.getElementById('seatTexture2').addEventListener('click', () => {
      this.model.changeSeatMaterial(this.texture.textures[Config.texture.imageFiles[1]]);
      UIHelper.showBorderOnSelectionIntColor(1);
    });

    document.getElementById('seatTexture3').addEventListener('click', () => {
      this.model.changeSeatMaterial(this.texture.textures[Config.texture.imageFiles[2]]);
      UIHelper.showBorderOnSelectionIntColor(2);
    });

    document.getElementById('toBlue').addEventListener('click', () => {
      this.model.toBlue();
      UIHelper.showBorderOnSelectionExtColor(0);
    });
    document.getElementById('toGreen').addEventListener('click', () => {      
      this.model.toGreen();
      UIHelper.showBorderOnSelectionExtColor(1);
    });
    document.getElementById('toYellow').addEventListener('click', () => {      
      this.model.toYellow();
      UIHelper.showBorderOnSelectionExtColor(2);
    });
    document.getElementById('toRed').addEventListener('click', () => {      
      this.model.toRed();
      UIHelper.showBorderOnSelectionExtColor(3);
    });
  }
  
  animate() {
    this.renderer.threeRenderer.setAnimationLoop(this.xrAnimate.bind(this));
  }

  xrAnimate(timestamp, frame) {   
    this.renderer.render(this.scene, this.camera.threeCamera);
    this.controls.threeControls.update();
    this.cameraTween.update();
  }
}
