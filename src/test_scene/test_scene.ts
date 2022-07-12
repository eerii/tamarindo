import * as THREE from "three"

import TestCube from "./test_cube" // object
import TestLight from "./test_light" // object template
const TestLightBlue = TestLight(0x5555ff)

//* example of a test scene
class TestScene extends THREE.Scene {
    //: add to scene here
    constructor() {
        super()

        //: add objects to scene
        this.add(TestCube)
        this.add(TestLightBlue)

        //: add another object defined right here
        const SunLight = new THREE.DirectionalLight(0xffeecc, 1)
        SunLight.position.set(3, 0.5, 3)
        this.add(SunLight)
    }

    //: update function called from main
    update(clock: THREE.Clock) {
        TestCube.rotation.y += clock.getDelta()
        TestLightBlue.position.x = Math.sin(-clock.elapsedTime) * 2
        TestLightBlue.position.z = Math.cos(-clock.elapsedTime) * 2
    }
}

export default TestScene