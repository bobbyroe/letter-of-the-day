import React, { Component } from 'react';
import "./Quadrant.css";
import * as THREE from 'three';
import font_data from "./helvetiker_regular.typeface.json";

const scene = new THREE.Scene();
let camera;
const renderer = new THREE.WebGLRenderer({ antialias: true });
const font = new THREE.Font(font_data);
const geo_props = {
    font: font,
    size: 2,
    height: 0.35,
    curveSegments: 12,
    bevelEnabled: false,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 5
};
let geometry;
const material = new THREE.MeshNormalMaterial();
let mesh;

function init(width, height, el) {

    camera.position.z = 5;
    geometry.computeBoundingBox();
    scene.add(mesh);

    renderer.setSize(width, height);
    el.appendChild(renderer.domElement);
}

function animate() {

    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
}

class LetterQuad extends Component {

    constructor (props) {

        super(props);
        this.quad = React.createRef();
    }

    componentDidMount () {
        console.log("letter = ", this.props.letter);
        const { width, height } = this.quad.current.getBoundingClientRect();
        camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
        geometry = new THREE.TextGeometry(this.props.letter, geo_props);
        mesh = new THREE.Mesh(geometry, material);
        init(width, height, this.quad.current);
        animate();
    }

    render () {
        return (
            <div className="quadrant" id="letter-quad" ref={this.quad}></div>
        );
    }
}

export default LetterQuad;