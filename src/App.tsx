import React from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";
import Box from "./components/Box";
import CallToActionWithVideo from "./components/CTA";

const App: React.FC = () => (
  <Engine
    antialias={true}
    adaptToDeviceRatio={true}
    canvasId="sample-canvas"
  >
    <Scene>
      <arcRotateCamera
        name="camera1"
        alpha={Math.PI / 3}
        beta={Math.PI / 4.5}
        radius={9.0}
        target={Vector3.Zero()}
        minZ={0.001}
        position={Vector3.Zero()}
      />

      <hemisphericLight
        name="light1"
        intensity={0.8}
        direction={Vector3.Up()}
      />

      <Box
        name="simple-box"
        position={new Vector3(0, 0, 0)}
        color={Color3.FromHexString('#AAF4F9')}
      />
    </Scene>
    <CallToActionWithVideo />
  </Engine>
);

export default App;