import * as THREE from 'three';

import {
  TWEEN
} from 'three/examples/jsm/libs/tween.module.min';
import Config from '../../data/config';

export default class CameraTween{ 
  constructor(camera, controls){
    this.camera = camera.threeCamera;
    this.controls = controls;
    this.tween = TWEEN;
  }

  tweenCameraToExterior() {        
    this.controls.disableControl();
    const tween = new TWEEN.Tween(this.camera.position)
      .to({
        x: Config.camera.posX,
        y: Config.camera.posY,
        z: Config.camera.posZ
      }, 2000)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  
    new TWEEN.Tween(this.camera.rotation)
      .to({
        x: Config.camera.rotX,
        y: Config.camera.rotY,
        z: Config.camera.rotZ
      }, 2000)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  
    tween.onComplete(() => {
      this.controls.init();
      this.controls.threeControls.enablePan = false;
      this.controls.enableControl();
    });
  
  }

  tweenCameraToSeat() {    
    this.controls.disableControl();
    const tween = new TWEEN.Tween(this.camera.position)
      .to({
        x: Config.seatcamera.posX,
        y: Config.seatcamera.posY,
        z: Config.seatcamera.posZ
      }, 2000)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  
    new TWEEN.Tween(this.camera.rotation)
      .to({
        x: Config.seatcamera.rotX,
        y: Config.seatcamera.rotY,
        z: Config.seatcamera.rotZ
      }, 2000)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  
    tween.onComplete( () => {
      this.setFirstPersonControl();
      this.controls.enableControl();
      this.controls.threeControls.enablePan = true;
    });
  }

  setFirstPersonControl(){
   this.controls.threeControls.target.set(Config.seatControls.target.x, Config.seatControls.target.y, Config.seatControls.target.z);
   this.controls.threeControls.minDistance = 0.01;
   this.controls.threeControls.maxDistance = 0.01;
  
  }

  update(){
    this.tween.update();
  }
}