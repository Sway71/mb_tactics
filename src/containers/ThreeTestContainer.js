import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class ThreeTestContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(6, 2, 6);

    this.state = {
      cubeRotation: new THREE.Euler(Math.PI / 2, 0, 0),
      cubePosition: new THREE.Vector3(2, 0, 2),
      allies: [
        {
          'id': 1,
          'x': 2,
          'y': 1
        },
        {
          'id': 2,
          'x': 3,
          'y': 2
        },
        {
          'id': 1,
          'x': 1,
          'y': 2
        }
      ]
    };


    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      // this.setState({
      //   cubeRotation: new THREE.Euler(
      //     this.state.cubeRotation.x + 0.02,
      //     this.state.cubeRotation.y + 0.02,
      //     0
      //   )
      // });
    };
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <ambientLight/>
        <perspectiveCamera
          name="camera"
          fov={40}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
          lookAt={this.state.cubePosition}
        />
        {this.state.allies.map((ally, index) => {
          return (
            <mesh
              key={`${index}-ally`}
              position={new THREE.Vector3(ally.y, 0.5, ally.x)}
            >
              <sphereGeometry radius={.25} />
              <meshNormalMaterial />
            </mesh>
          );
        })}

        {/* <mesh
          position={new THREE.Vector3(0, 2, 0)}
        >
          <sphereGeometry radius={.25} />
          <meshNormalMaterial />
        </mesh> */}

        <mesh
          position={this.state.cubePosition}
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={5}
            height={5}
            depth={.25}
          />
          <meshNormalMaterial />
        </mesh>
      </scene>
    </React3>);
  }
}

export default ThreeTestContainer;
