import * as THREE from 'three';
import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
  DRACOLoader
} from 'three/examples/jsm/loaders/DRACOLoader';
import Config from '../../data/config';

export default class Model {
  constructor(scene, manager) {
    this.scene = scene;
    // this.textures = textures;

    // Manager is passed in to loader to determine when loading done in main
    // this.loader = new THREE.ObjectLoader(manager);
    this.loader = new GLTFLoader(manager).setPath(Config.model.dracoPath);
    this.dracoloader = new DRACOLoader();
    this.obj = null;
    this.mixer = null;
    this.defaultCarColor = null;
  }

  setObject(obj) {
    this.obj = obj;
    this.defaultCarColor = this.obj.getObjectByName("body_04_SUB0").children[0].material.color.getHex();
  }

  load(scene, model) {    
    this.dracoloader.setDecoderPath('./assets/decoder/draco/');     
    this.loader.setDRACOLoader(this.dracoloader);
    this.loader.load('scene.gltf', function (gltf) {
      const obj = gltf.scene.children[0];
      obj.traverse(function (child) {
        if (child.isMesh) {

          child.castShadow = true;
          child.receiveShadow = true;
        }

      });

      obj.getObjectByName("Dome", true).visible = false;
      gltf.scene.rotation.set(Config.model.rotation.x, Config.model.rotation.y, Config.model.rotation.z);
      gltf.scene.position.set(Config.model.position.x, Config.model.position.y, Config.model.position.z);
      model.setObject(obj);
      gltf.scene.scale.multiplyScalar(Config.model.scale);
      scene.add(gltf.scene);
    });
  }

  toGreen() {
    this.obj.getObjectByName("body_04_SUB0").children[0].material.color.setHex(0x006e05);
  }

  toYellow() {
    this.obj.getObjectByName("body_04_SUB0").children[0].material.color.setHex(0x9c9c00);
  }

  toBlue() {
    this.obj.getObjectByName("body_04_SUB0").children[0].material.color.setHex(this.defaultCarColor);
  }

  toRed() {
    this.obj.getObjectByName("body_04_SUB0").children[0].material.color.setHex(0x820000);
  }

  changeSeatMaterial(seatTexture) {
    // this.obj.getObjectByName("VIFS241").children[0].children[1].material.map = seatTexture;
    this.obj.getObjectByName("GEO_Seats_SUB1").children[0].material.map = seatTexture;
  }
}
