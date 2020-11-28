import * as THREE from 'three';
import {
  RGBELoader
} from 'three/examples/jsm/loaders/RGBELoader';

import Config from '../../data/config';

export default class Renderer {
  constructor(scene, container) {
    this.scene = scene;
    this.container = container;
    this.threeRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.threeRenderer.setPixelRatio(window.devicePixelRatio);
    this.threeRenderer.xr.enabled = true;
    this.threeRenderer.setClearColor(0x444444);
    this.threeRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.threeRenderer.toneMappingExposure = 0.8;
    this.threeRenderer.outputEncoding = THREE.sRGBEncoding;

    const pmremGenerator = new THREE.PMREMGenerator(this.threeRenderer);
    pmremGenerator.compileEquirectangularShader();
    new RGBELoader()
      .setDataType(THREE.UnsignedByteType)
      .setPath('./assets/equirectangular/')
      .load('photo_studio_01_1k.hdr', function (texture) {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        // scene.background = envMap;
        scene.environment = envMap;
        texture.dispose();
        pmremGenerator.dispose();
      });

    this.container.appendChild(this.threeRenderer.domElement);

    this.threeRenderer.shadowMap.enabled = true;
    this.threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Get anisotropy for textures
    Config.maxAnisotropy = this.threeRenderer.getMaxAnisotropy();

    this.widthMultiplyer = 0.8;
    this.heightMultiplyer = 1;

    this.checkWidthHeight();

    // Initial size update set to canvas container
    this.updateSize();

    // Listeners
    document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);
    window.addEventListener('resize', () => this.updateSize(), false);    

  }

  updateSize() {
    this.threeRenderer.setSize(window.innerWidth * this.widthMultiplyer, window.innerHeight * this.heightMultiplyer);
  }

  render(scene, camera) {
    // Renders scene to canvas target
    this.threeRenderer.render(scene, camera);
  }

  setWidthMultiplyer(i){
    this.widthMultiplyer = i;
    this.updateSize();
  }
    
  setHeightMultiplyer(i){
    this.heightMultiplyer = i;
    this.updateSize();
  }

  checkWidthHeight(){
    if(window.innerWidth<600){       
      this.setHeightMultiplyer(0.7);
      this.setWidthMultiplyer(1);
    }

    if(window.innerWidth>=600){          
      this.setHeightMultiplyer(1);
      this.setWidthMultiplyer(0.8);
    }
  }

}
