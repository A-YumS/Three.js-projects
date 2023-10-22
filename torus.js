import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera= new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight);
camera.position.set(0,0,50);

const geometry = new THREE.TorusGeometry(11.8,2.5,15,100);
const material= new THREE.MeshNormalMaterial();

const torus = new THREE.Mesh(geometry,material);

scene.add(torus);


tick();

function tick() {
    requestAnimationFrame(tick);
    torus.rotation.y +=0.01;
    renderer.render(scene,camera);
}



//

const group = new THREE.Group();
scene.add(group);


const loader = new FontLoader();

loader.load( 'fonts/DM Serif Display_Regular.json', function ( font ) {

	const textgeometry = new TextGeometry( 'Ayumi', {
		font: font,
		size: 5,
		height: 3,
		curveSegments: 6,
		bevelEnabled: true,
		bevelThickness: 5,
		bevelSize: 0.5,
		bevelOffset: 0,
		bevelSegments: 3
	} );
    const textmesh= new THREE.Mesh(textgeometry,material);
    textmesh.position.x=-10
    textmesh.position.y=-1.5
    group.add(textmesh);
} );

var axes = new THREE.AxesHelper(100);
scene.add(axes);