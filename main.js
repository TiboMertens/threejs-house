//import css
import "./style.css";

import * as THREE from 'three';

//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );

//add frontWall group
const frontWall = new THREE.Group();

// Create a wall
const FrontLeftGeometry = new THREE.BoxGeometry(2, 3, 0.1);
const FrontLeftMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
const FrontLeft = new THREE.Mesh(FrontLeftGeometry, FrontLeftMaterial);
FrontLeft.position.x = -1.5;
frontWall.add(FrontLeft);

// Create a wall
const FrontRightGeometry = new THREE.BoxGeometry(2, 3, 0.1);
const FrontRightMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
const FrontRight = new THREE.Mesh(FrontRightGeometry, FrontRightMaterial);
FrontRight.position.x = 1.5;
frontWall.add(FrontRight);

// Create a wall
const FrontUpGeometry = new THREE.BoxGeometry(1, 1, 0.1);
const FrontUpMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
const FrontUp = new THREE.Mesh(FrontUpGeometry, FrontUpMaterial);
FrontUp.position.x = 0;
FrontUp.position.y = 1;
frontWall.add(FrontUp);

//add frontWall to scene
scene.add(frontWall);

// Position the camera
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();