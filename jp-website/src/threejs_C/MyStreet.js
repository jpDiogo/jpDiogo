import * as THREE from 'three';

const floor_dim = { width: 50, height: 1, depth: 100 };

class MyStreet {
  constructor(scene, store_objects) {
    this.scene = scene;
    this.store_objects = store_objects;
  }

  create() {
    this.myRoad();
    //this.connectingRoad();
    //this.createHouse();
    //this.createRoad();
  }

  myRoad() {
    const geometry = new THREE.BoxGeometry(floor_dim.width, floor_dim.height, floor_dim.depth);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.store_objects.push(geometry, material);

    const floor = new THREE.Mesh(geometry, material);
    floor.position.y = floor_dim.height / 2;
    this.scene.add(floor);
  }

  connectingRoad() {

  }

  createHouse() {
    const house = // ... create the house
    this.scene.add(house);
  }

}

export default MyStreet;