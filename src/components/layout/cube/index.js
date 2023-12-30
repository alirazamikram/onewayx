import React, { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
const CubeBox = () => {
  const navigate = useNavigate();
  const cubeRef = useRef();
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  const handleResize = () => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });

    if (window.innerWidth <= 760) {
      setCameraPosition([0, 0, 420]);
    } else {
      setCameraPosition([0, 0, 260]);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function Model(props) {
    const rotationDuration = 1;
    useEffect(() => {
      gsap.to(cubeRef.current.rotation, {
        y: Math.PI * -2,
        duration: rotationDuration,
        ease: "power2.inOut",
      });
    }, []);

    const { nodes, materials } = useGLTF("cube3d.glb");
    const originalColor1 = materials["3D_Box_Material_1"].color;
    const originalColor2 = materials["3D_Box_Material_2"].color;
    const originalColor3 = materials["3D_Box_Material_3"].color;
    const originalColor4 = materials["3D_Box_Material_4"].color;
    return (
      <group {...props} args={[1, 1, 1]} dispose={null} ref={cubeRef}>
        <group rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={materials["3D_Box_Material_1"]}
          />
          <meshStandardMaterial color={originalColor1} />
          <mesh
            geometry={nodes.mesh_0_1.geometry}
            material={materials["3D_Box_Material_3"]}
          />
          <meshStandardMaterial color={originalColor3} />
          <mesh
            geometry={nodes["3D_Box_Part_4"].geometry}
            material={materials["3D_Box_Material_1"]}
            position={[0, 0, 0.5]}
          />
          <meshStandardMaterial color={originalColor1} />
          <mesh
            geometry={nodes["3D_Box_Part_3"].geometry}
            material={materials["3D_Box_Material_1"]}
            onClick={() => navigate("/elevate-together")}
            position={[-0.5, 0, 0]}
          />
          <meshStandardMaterial color={originalColor1} />
          <mesh
            geometry={nodes["3D_Box_Part_2"].geometry}
            material={materials["3D_Box_Material_1"]}
            onClick={() => navigate("/")}
            position={[0, 0, -0.5]}
          />
          <meshStandardMaterial color={originalColor1} />
          <mesh
            geometry={nodes["3D_Box_Part_1"].geometry}
            material={materials["3D_Box_Material_1"]}
            onClick={() => navigate("/explore-the-magic")}
            position={[0.5, 0, 0]}
          />
          <meshStandardMaterial color={originalColor1} />
          <mesh
            geometry={nodes["3D_Box_Part_6"].geometry}
            material={materials["3D_Box_Material_1"]}
          />
          <meshStandardMaterial color={originalColor1} />
          <mesh
            geometry={nodes["3D_Box_Part_5"].geometry}
            material={materials["3D_Box_Material_1"]}
          />
          <meshStandardMaterial color={originalColor1} />
          <mesh
            geometry={nodes["3D_Box_corner_Lights"].geometry}
            material={materials["3D_Box_Material_2"]}
          />
          <meshStandardMaterial color={originalColor2} />
          <mesh
            geometry={nodes["3D_Box_Mirror"].geometry}
            material={materials["3D_Box_Material_4"]}
            onClick={() => navigate("/enter-our-world")}
          />
          <meshStandardMaterial color={originalColor4} />
        </group>
      </group>
    );
  }
  return (
    <Wrapper>
      <Canvas
        // camera={{ fov: 50, position: [0, 0, 260] }}
        pixelRatio={window.devicePixelRatio}
        camera={{ fov: 50, position: cameraPosition }}
        gl={{ antialias: true }}
        {...canvasSize}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Model />
          <OrbitControls enableRotate={true} enableZoom={false} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};
export default CubeBox;
