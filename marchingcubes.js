import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';




// CAMERA

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(-500, 500,1500);

// SCENE

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050505);

// LIGHTS

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(0.5, 0.5, 1);
scene.add(light);

const pointLight = new THREE.PointLight(0xff7c00, 3, 0, 0);
pointLight.position.set(0, 0, 100);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x323232, 3);
scene.add(ambientLight);


//materials
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff, roughness: 0.1, metalness: 1 });

// MARCHING CUBES

let resolution = 28;

const effect = new MarchingCubes(resolution, material, true, true, 100000);
effect.position.set(0, 0, 0);
effect.scale.set(700, 700, 700);

effect.enableUvs = false;
effect.enableColors = false;

scene.add(effect);

// RENDERER

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// CONTROLS

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 500;
controls.maxDistance = 5000;

tick();

function tick() {
    requestAnimationFrame(tick);
    effect.rotation.y += 0.01;
    renderer.render(scene, camera);
}

var axes = new THREE.AxesHelper(100);
scene.add(axes);