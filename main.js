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
const FrontLeftMaterial = new THREE.MeshBasicMaterial({ color: 0xfeeedb });
const FrontLeft = new THREE.Mesh(FrontLeftGeometry, FrontLeftMaterial);
FrontLeft.position.x = -1.5;
frontWall.add(FrontLeft);

// Create a wall
const FrontRightGeometry = new THREE.BoxGeometry(2, 3, 0.1);
const FrontRightMaterial = new THREE.MeshBasicMaterial({ color: 0xfeeedb });
const FrontRight = new THREE.Mesh(FrontRightGeometry, FrontRightMaterial);
FrontRight.position.x = 1.5;
frontWall.add(FrontRight);

// Create a wall
const FrontUpGeometry = new THREE.BoxGeometry(1, 1, 0.1);
const FrontUpMaterial = new THREE.MeshBasicMaterial({ color: 0xfeeedb });
const FrontUp = new THREE.Mesh(FrontUpGeometry, FrontUpMaterial);
FrontUp.position.x = 0;
FrontUp.position.y = 1;
frontWall.add(FrontUp);

//add frontWall to scene
scene.add(frontWall);

// Create the left wall
const LeftWallGeometry = new THREE.BoxGeometry(0.1, 3, 5);
const LeftWallMaterial = new THREE.MeshBasicMaterial({ color: 0xfeeedb });
const LeftWall = new THREE.Mesh(LeftWallGeometry, LeftWallMaterial);
LeftWall.position.x = -2.5;
LeftWall.position.z = -2.5;
scene.add(LeftWall);

// Create the right wall
const RightWallGeometry = new THREE.BoxGeometry(0.1, 3, 5);
const RightWallMaterial = new THREE.MeshBasicMaterial({ color: 0xfeeedb });
const RightWall = new THREE.Mesh(RightWallGeometry, RightWallMaterial);
RightWall.position.x = 2.5;
RightWall.position.z = -2.5;
scene.add(RightWall);

// Create the back wall
const BackWallGeometry = new THREE.BoxGeometry(5, 3, 0.1);
const BackWallMaterial = new THREE.MeshBasicMaterial({ color: 0xfeeedb });
const BackWall = new THREE.Mesh(BackWallGeometry, BackWallMaterial);
BackWall.position.z = -5;
scene.add(BackWall);

//create floor of the house using a plane
const FloorGeometry = new THREE.PlaneGeometry(5, 5);
const FloorMaterial = new THREE.MeshBasicMaterial({ color: 25516579 });
const Floor = new THREE.Mesh(FloorGeometry, FloorMaterial);
Floor.rotation.x = -Math.PI / 2;
Floor.position.y = -1.49;
Floor.position.z = -2.5;
scene.add(Floor);

//create a pyramid roof for the house
const RoofGeometry = new THREE.ConeGeometry(3.6, 2.5, 4);
const RoofMaterial = new THREE.MeshBasicMaterial({ color: 0xa44a4a });
const Roof = new THREE.Mesh(RoofGeometry, RoofMaterial);
Roof.rotation.y = Math.PI / 4;
Roof.position.y = 2.75;
Roof.position.z = -2.5;
scene.add(Roof);

//add grass around the house using a plane
const GrassGeometry = new THREE.PlaneGeometry(10, 10);
const GrassMaterial = new THREE.MeshBasicMaterial({ color: 0x136d15 });
const Grass = new THREE.Mesh(GrassGeometry, GrassMaterial);
Grass.rotation.x = -Math.PI / 2;
Grass.position.y = -1.5;
Grass.position.z = -2.5;
scene.add(Grass);

// Position the camera
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();