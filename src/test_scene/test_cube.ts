import * as THREE from "three"

//* sample cube
const Geometry = new THREE.BoxGeometry(1, 1, 1)
const Material = new THREE.MeshPhongMaterial({ color: 0xffffff })
const TestCube = new THREE.Mesh(Geometry, Material)

export default TestCube