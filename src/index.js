import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import * as THREE from 'three'
import normalMapImg from './images/nrmMap.png'


ReactDOM.render(
    <App />,
  document.getElementById('root')
);






const textureLoader = new THREE.TextureLoader()
const normalTexture = textureLoader.load('./images/nrmMap.png')

// Canvas //
const canvas = document.querySelector('#bg')
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


// Scene //
const scene = new THREE.Scene()

// Camera //
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 10)
scene.add(camera)
// Renderer //
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// geometry //
const gPlane = new THREE.PlaneGeometry( 100, 100 )
const gCube = new THREE.BoxGeometry( 1, 1, 1 )

// lights //
const ambientLight = new THREE.AmbientLight( 0x404040 )
scene.add(ambientLight)
const pointLight = new THREE.PointLight( 0xf72585, 3, 100 )
pointLight.position.set(0, 0, -10)
scene.add(pointLight)
const pointLightBlue = new THREE.PointLight( 0x7209b7, 5, 100 )
pointLightBlue.position.set(0, 0, -25)
scene.add(pointLightBlue);
const pointLightRed = new THREE.PointLight( 0xffba08, 2, 100 )
pointLightRed.position.set(0, 0, 5)
scene.add(pointLightRed);
// scene.add(ambientLight)


// Materials //
const basicTestMat = new THREE.MeshStandardMaterial()
basicTestMat.color = new THREE.Color(0xFFFFFF)
const basicTestMat2 = new THREE.MeshStandardMaterial()
basicTestMat2.color = new THREE.Color(0x0012FF)
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.6
material.roughness = 0.9
material.normalMap = normalTexture;

// Objects //
const testPlane = new THREE.Mesh(gPlane, material)
testPlane.rotation.set(0, 0, 0)
testPlane.position.set(0, 0, 0)
scene.add(testPlane)
const box = new THREE.Mesh(gCube,basicTestMat2);
box.rotation.set(0, 0, 0)
box.position.set(0, 0, 0)





let radians1 = 0;
let radians2 = 0;
let radians3 = 0;
const clock = new THREE.Clock()
const tick = () => {
    radians1 += 0.005
    radians2 += 0.002
    radians3 += 0.006

    pointLight.position.x = Math.cos(radians1)
    pointLight.position.y = Math.sin(radians1)
    pointLightBlue.position.y = Math.sin(radians2)
    pointLightBlue.position.x = Math.cos(radians2)
    pointLightRed.position.x = Math.cos(radians2)
    pointLightRed.position.y = Math.sin(radians2)
    //  controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick();