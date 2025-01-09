import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { Color } from 'three';
import { useControls } from 'leva';

function UpdateSceneBackground() {
  const { scene } = useThree();

  const { color } = useControls({
    color: '#ffffff',
  });

  scene.background = new Color(color);

  return null;
}

function App() {
  return (
    <div id='canvas-container'>
      <Canvas camera={{ position: [0.5, 5, 6] }}>
        <UpdateSceneBackground />
        <axesHelper args={[10]} />
        <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} />
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
