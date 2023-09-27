import { Color3, Vector3 } from "@babylonjs/core";
import React, { useRef } from "react";

interface BoxProps {
  name: string;
  size?: number;
  scaling?: Vector3;
  position?: Vector3;
  specularColor?: Color3;
  color?: Color3;
}

const DefaultScale = new Vector3(1, 1, 1);
const DefaultPosition = new Vector3(2, 0, 0);

const Box: React.FC<BoxProps> = (props) => {
  const boxRef = useRef(null);

  return (
    <box
      name={props.name}
      ref={boxRef}
      size={props.size || 2}
      scaling={props.scaling || DefaultScale}
      position={props.position || DefaultPosition}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        diffuseColor={props.color || Color3.Black()}
        specularColor={props.specularColor || Color3.Black()}
      />
    </box>
  );
};

export default Box;