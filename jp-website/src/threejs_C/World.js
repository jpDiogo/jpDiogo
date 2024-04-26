//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './World.css';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

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
            renderer.setSize(width, height);
            worldRef.current.appendChild(renderer.domElement);

            // Add cube
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            camera.position.z = 5;

            // Animation loop
            const animate = function () {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            animate();

            // CLEANUP: Component is unmounted triggers this code (or if the dependency array could change)
            return () => {
                // Remove renderer dom element
                if (renderer.domElement.parentNode === worldRef.current) 
                    worldRef.current.removeChild(renderer.domElement);
                // Remove objects from scene
                while(scene.children.length > 0)
                    scene.remove(scene.children[0]); 
                
                // Dispose renderer, scene, geometry and material
                geometry.dispose(); material.dispose();
                // Dispose renderer
                renderer.dispose();
            };
    }, []);

    return (
        <div ref={worldRef} style={{ width: '100vw', height: '100vh' }}></div>
    );
}

export default World;