//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './World.css';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import MyStreet from './MyStreet';

const store_objects = []; // Store objects to dispose later
const camera_position = { x: 0, y: 35, z: 75 };

// Our light will begin by being an ambient light
function createLight() { return new THREE.AmbientLight(0xffffff); }

function createGridHelper() { return new THREE.GridHelper(100, 100); }

const World = () => {
    const worldRef = useRef(null);

    useEffect(() => {
            // Scene setup
            const width = worldRef.current.clientWidth;
            const height = worldRef.current.clientHeight;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            scene.background = new THREE.Color('#f9f9f9');
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);
            worldRef.current.appendChild(renderer.domElement);
            store_objects.push(renderer);

            // Creating things for the scene
            const light = createLight();
            const gridHelper = createGridHelper();

            const myStreet = new MyStreet(scene, store_objects);
            myStreet.create();

            scene.add(light);
            scene.add(gridHelper);

            // Setting camera position
            camera.position.set(camera_position.x, camera_position.y, camera_position.z);

            // Controls
            const controls = new OrbitControls(camera, renderer.domElement);

            // Animation loop
            const animate = function () {
                requestAnimationFrame(animate);

                controls.update();

                renderer.render(scene, camera);
            };

            animate();

            // CLEANUP: Component is unmounted triggers this code (or if the dependency array could change)
            return () => {
                store_objects.forEach(obj => {
                    if (obj.dispose) obj.dispose();
                });
            };
    }, []);

    return (
        <div id="three_world" ref={worldRef} style={{ width: '100vw', height: '100vh' }}></div>
    );
}

export default World;