import * as THREE from 'three';

class PalacioStreet {
  constructor(scene, store_objects) {
    this.scene = scene;
    this.store_objects = store_objects;
  }

  create() {
    this.exteriorGarden();
    this.insideGarden();    
    this.exteriorRoad();
  }

  exteriorGarden() {
    const geometry = new THREE.BoxGeometry(floor_dim.width, floor_dim.height, floor_dim.depth);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.store_objects.push(geometry, material);

    const floor = new THREE.Mesh(geometry, material);
    floor.position.y = floor_dim.height / 2;
    this.scene.add(floor);
  }

  insideGarden() {}

  exteriorRoad() {} 

  
}

export default PalacioStreet;