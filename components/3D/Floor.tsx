import { MeshProps } from '@react-three/fiber';

type Props = MeshProps;

const Floor = (props: Props) => {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default Floor;
