import { Box, Flex, IconButton } from '@chakra-ui/react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as React from 'react'
import { MdZoomOutMap } from 'react-icons/md'
import Horse from './components/Horse'

interface IRunGameProps {}

const RunGame: React.FunctionComponent<IRunGameProps> = (props) => {
  const [size, setSize] = React.useState({ width: '800px', height: '800px' })

  return (
    <Box p={2} border={'2px solid gray'} rounded={'10px'} w={size.width} h={size.height} mx={'auto'}>
      <Canvas shadows>
        <OrbitControls autoRotate={false} />
        <PerspectiveCamera makeDefault fov={75} aspect={1} near={0.1} far={5000} position={[0, 0, 4]} />
        <ambientLight intensity={1} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <directionalLight intensity={0.5} />
        <React.Suspense fallback={null}>
          <Horse modelUrl={'/model/thunder.gltf'} textureUrl="/body_normal.png" />
        </React.Suspense>
      </Canvas>

      {/* <Flex justify={"end"}>
        <IconButton
          aria-label="zoom"
          icon={<MdZoomOutMap />}
          onClick={() => {
            setSize({
              width: "100vw",
              height: "100vh",
            });
          }}
        />
      </Flex> */}
    </Box>
  )
}

export default RunGame
