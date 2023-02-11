/* eslint-disable no-unused-vars */
import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react'

interface IModelProps {
  modelUrl: string
  textureUrl: string
}

export default function Model(props: IModelProps) {
  const { modelUrl, textureUrl } = props
  const group = useRef(null)
  const { nodes, materials, animations }: any = useGLTF(modelUrl)
  const { actions } = useAnimations(animations, group)

  // const map = useTexture({
  //   map: textureUrl,
  // })

  // Object.keys(materials).map((item) => (materials[item].map = map.map))

  useEffect(() => {
    const animationKeys = Object.keys(actions)
    const animation = animationKeys[0]
    actions[animation]?.play()
  }, [actions])

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
        <primitive object={nodes.CG_bone} />
        <skinnedMesh
          geometry={nodes.Mesh001.geometry}
          material={materials.M_metal_border}
          skeleton={nodes.Mesh001.skeleton}
        >
          <meshBasicMaterial color="red" />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh001_1.geometry}
          material={materials.M_metal}
          skeleton={nodes.Mesh001_1.skeleton}
        />
        <skinnedMesh geometry={nodes.Mesh004.geometry} material={materials.M_detail} skeleton={nodes.Mesh004.skeleton}>
          {' '}
          <meshBasicMaterial color="red" />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh004_1.geometry}
          material={materials.M_metal_border}
          skeleton={nodes.Mesh004_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh004_2.geometry}
          material={materials.M_metal}
          skeleton={nodes.Mesh004_2.skeleton}
        />
        <skinnedMesh geometry={nodes.Mesh006.geometry} material={materials.M_metal} skeleton={nodes.Mesh006.skeleton} />
        <skinnedMesh
          geometry={nodes.Mesh006_1.geometry}
          material={materials.M_metal_border}
          skeleton={nodes.Mesh006_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh002.geometry}
          material={materials.M_metal_border}
          skeleton={nodes.Mesh002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh002_1.geometry}
          material={materials.M_metal}
          skeleton={nodes.Mesh002_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh002_2.geometry}
          material={materials.M_detail}
          skeleton={nodes.Mesh002_2.skeleton}
        />
        <skinnedMesh geometry={nodes.Mesh.geometry} material={materials.M_body} skeleton={nodes.Mesh.skeleton} />
        <skinnedMesh geometry={nodes.Mesh_1.geometry} material={materials.M_detail} skeleton={nodes.Mesh_1.skeleton} />
        <skinnedMesh geometry={nodes.Mesh005.geometry} material={materials.M_metal} skeleton={nodes.Mesh005.skeleton} />
        <skinnedMesh
          geometry={nodes.Mesh005_1.geometry}
          material={materials.M_metal_border}
          skeleton={nodes.Mesh005_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh003.geometry}
          material={materials.M_metal_border}
          skeleton={nodes.Mesh003.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh003_1.geometry}
          material={materials.M_metal}
          skeleton={nodes.Mesh003_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh007.geometry}
          material={materials.M_metal_border}
          skeleton={nodes.Mesh007.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh007_1.geometry}
          material={materials.M_detail}
          skeleton={nodes.Mesh007_1.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/thunder.gltf')
