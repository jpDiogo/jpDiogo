import * as THREE from 'three';

class MonsantoStreet {
  constructor(scene, store_objects) {
    this.scene = scene;
    this.store_objects = store_objects;
  }

  create() {
    this.mainRoad();
    this.roundabout();    
    this.finalRoad();
  }

  mainRoad() {

  }

  roundabout() {}

  finalRoad() {} 

  
}

export default MonsantoStreet;