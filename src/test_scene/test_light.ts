import * as THREE from "three"

//* sample point light with an sphere showing the light's position
let TestLight = (color: THREE.ColorRepresentation) => {
    const Light = new THREE.PointLight(color, 1)
    Light.position.set(2, 0, 2)

    const Geometry = new THREE.SphereGeometry(0.1, 8, 8)
    const Material = new THREE.MeshBasicMaterial({ color: color })
    const Sphere = new THREE.Mesh(Geometry, Material)
    Light.add(Sphere)

    return Light
}

export default TestLight