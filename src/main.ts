import * as THREE from "three"
// @ts-ignore
import WebGL from "../node_modules/three/examples/jsm/capabilities/WebGL"
import TestScene from "./test_scene/test_scene"

//* webgl check
const required_webgl = 2
if ( required_webgl <= 1 && !WebGL.isWebGLAvailable() ) {
    document.body.appendChild(WebGL.getWebGLErrorMessage())
    throw new Error("WebGL not supported")
} 
if ( required_webgl <= 2 && !WebGL.isWebGL2Available() ) {
    document.body.appendChild(WebGL.getWebGL2ErrorMessage())
    throw new Error("WebGL2 not supported")
}

//* renderer
const Renderer = new THREE.WebGLRenderer()
Renderer.setSize(window.innerWidth, window.innerHeight)
Renderer.setClearColor("#123456")
document.body.appendChild(Renderer.domElement)

//* resize callback
window.addEventListener("resize", () => {
    Renderer.setSize(window.innerWidth, window.innerHeight)
    Camera.aspect = window.innerWidth / window.innerHeight
    Camera.updateProjectionMatrix()
})

//* scene
const Scene = new TestScene()

//* camera
const Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200)
Camera.position.set(0, 2, 5)
Camera.lookAt(0, 0, 0)

//* clock
const Clock = new THREE.Clock()

//* render loop
let animate = () => {
	requestAnimationFrame(animate)
    Scene.update(Clock)
    Renderer.render(Scene, Camera)
}

animate();