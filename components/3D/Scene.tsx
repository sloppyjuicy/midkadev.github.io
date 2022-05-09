import { createStyles } from '@mantine/styles';
import { Canvas } from '@react-three/fiber';
import Floor from './Floor';

type Props = {};

const useStyles = createStyles({
  scene: {
    width: '100vw',
    height: '100vh',
  },
  canvas: {
    background: '#000',
  },
});

const Scene = (props: Props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.scene}>
      <Canvas
        shadows={true}
        className={classes.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color="white" intensity={0.3} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
};

export default Scene;
