import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';



const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(0, 0, 50);

const geometry = new THREE.OctahedronGeometry(5, 0);
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff, roughness: 0, metalness: 1 });

const Octahedron = new THREE.Mesh(geometry, material);
Octahedron.position.set(-15, 0,3)

scene.add(Octahedron);


tick();

function tick() {
	requestAnimationFrame(tick);
	Octahedron.rotation.y += 0.01;
	renderer.render(scene, camera);
}

RectAreaLightUniformsLib.init();
const rectLight1 = new THREE.RectAreaLight(0xff0000, 1, 10, 20);
rectLight1.position.set(-36, 0,-10);
rectLight1.lookAt(-36,0,0)
scene.add(rectLight1);

const rectLight2 = new THREE.RectAreaLight(0xffa500, 1, 10, 20);
rectLight2.position.set(-24, 0,-10);
rectLight2.lookAt(-24,0,0)
scene.add(rectLight2);

const rectLight3 = new THREE.RectAreaLight(0xffff00, 1, 10, 20);
rectLight3.position.set(-12, 0,-10);
rectLight3.lookAt(-12,0,0)
scene.add(rectLight3);

const rectLight4 = new THREE.RectAreaLight(0x00ff00, 1, 10, 20);
rectLight4.position.set(0, 0,-10);
rectLight4.lookAt(0,0,0)
scene.add(rectLight4);

const rectLight5 = new THREE.RectAreaLight(0x00bfff, 1, 10, 20);
rectLight5.position.set(12, 0,-10);
rectLight5.lookAt(12,0,0)
scene.add(rectLight5);

const rectLight6 = new THREE.RectAreaLight(0x0000ff, 1, 10, 20);
rectLight6.position.set(24, 0,-10);
rectLight6.lookAt(24,0,0)
scene.add(rectLight6)

const rectLight7 = new THREE.RectAreaLight(0x8a2be2, 1, 10, 20);
rectLight7.position.set(36, 0,-10);
rectLight7.lookAt(36,0,0)
scene.add(rectLight7)

scene.add(new RectAreaLightHelper(rectLight1));
scene.add(new RectAreaLightHelper(rectLight2));
scene.add(new RectAreaLightHelper(rectLight3));
scene.add(new RectAreaLightHelper(rectLight4));
scene.add(new RectAreaLightHelper(rectLight5));
scene.add(new RectAreaLightHelper(rectLight6));
scene.add(new RectAreaLightHelper(rectLight7));

//var axes = new THREE.AxesHelper(100);
//scene.add(axes);



const group = new THREE.Group();
scene.add(group);

const material2=new THREE.MeshStandardMaterial({color:0x00ffff, roughness:0, metalness:1})

const loader = new FontLoader();

loader.load( 'fonts/DM Serif Display_Regular.json', function ( font ) {

	const textgeometry = new TextGeometry( 'Ayumi', {
		font: font,
		size: 5,
		height: 3,
		curveSegments: 6,
		bevelEnabled: true,
		bevelThickness: 3,
		bevelSize: 0.5,
		bevelOffset: 0,
		bevelSegments: 3
	} );
    const textmesh= new THREE.Mesh(textgeometry,material2);
    textmesh.position.x=0
    textmesh.position.y=0
    group.add(textmesh);
} );

const geoFloor = new THREE.BoxGeometry( 2000, 0.1, 2000 );
const matStdFloor = new THREE.MeshStandardMaterial( { color: 0xbcbcbc, roughness: 0.1, metalness: 0 } );
const mshStdFloor = new THREE.Mesh( geoFloor, matStdFloor );
scene.add( mshStdFloor );
mshStdFloor.position.set(0,-10,-20)


 controls = new OrbitControls(camera, renderer.domElement);
//controls.target.copy( rectlight1.position );
//controls.update();