import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

// Function to initialize and start Three.js scene
export function initThreeJS(canvas: HTMLCanvasElement) {
    // Scene
    const scene = new THREE.Scene();

    // Create our sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
        color: '#00ff83',
        roughness: 0.25,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    // Light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    light.intensity = 100; // Adjusted intensity
    scene.add(light);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 10;

    // Resize handler
    const handleResize = () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
        renderer.render(scene, camera);
        controls.update(); // Update controls
        requestAnimationFrame(animate);
    };
    animate();

    // Timeline Magic
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
    tl.fromTo('nav', { y: '-100%' }, { y: '0%' });
    tl.fromTo('.title', { opacity: 0 }, { opacity: 1 });

    // Mouse Animation Color
    let mouseDown = false;
    let rgb: number[] = [];
    window.addEventListener('mousedown', () => (mouseDown = true));
    window.addEventListener('mouseup', () => (mouseDown = false));

    window.addEventListener('mousemove', (e) => {
        if (mouseDown) {
            rgb = [
                Math.round((e.pageX / sizes.width) * 255),
                Math.round((e.pageY / sizes.height) * 255),
                150,
            ];
            // Animate
            const newColor = new THREE.Color(`rgb(${rgb.join(',')})`);
            gsap.to(mesh.material.color, {
                r: newColor.r,
                g: newColor.g,
                b: newColor.b,
            });
        }
    });

    // Cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}
