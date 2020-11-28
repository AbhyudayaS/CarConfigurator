import * as THREE from 'three';

import Config from '../../data/config';

export default class Camera {
  constructor(renderer) {      
    const {
      width
    } = renderer.threeRenderer.domElement.width;
    const {
      height
    } = renderer.threeRenderer.domElement.height;

    // Create and position a Perspective Camera
    this.threeCamera = new THREE.PerspectiveCamera(Config.camera.fov, width / height, Config.camera.near, Config.camera.far);
    this.threeCamera.position.set(Config.camera.posX, Config.camera.posY, Config.camera.posZ);

    this.updateSize(renderer);

    // Listeners
    window.addEventListener('resize', () => this.updateSize(renderer), false);    
    
  }

  updateSize(renderer) {
    // Update camera aspect ratio with window aspect ratio
    renderer.checkWidthHeight();
    this.threeCamera.aspect = renderer.threeRenderer.domElement.width / renderer.threeRenderer.domElement.height;  
    // Always call updateProjectionMatrix on camera change
    this.threeCamera.updateProjectionMatrix();
  }
}
