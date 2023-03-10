export interface SceneProps {}

export const Scene = ({}: SceneProps) => {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  );
};
