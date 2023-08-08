import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Scene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6eedc);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
    const controls = new OrbitControls(camera, renderer.domElement);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    let model; // 存储加载的3D模型

    loader.load('/module/matilda/matilda.glb', function(gltf) {
      model = gltf.scene; // 将加载的模型存储到变量model中
      model.position.y -= 100;
      scene.add(model);
      // 设置摄像机的位置和朝向
      camera.position.set(100, 120, 125);
      camera.lookAt(model.position);
    }, undefined, function(error) {
      console.error(error);
    });

    const animate = function() {
      requestAnimationFrame(animate);

      // 让模型自动旋转
      if (model) {
        model.rotation.y += 0.01; // 控制旋转速度
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth * 0.7;
      const height = window.innerHeight * 0.7;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div ref={mountRef} style={{ backgroundColor: "0xf6eedc" }} />
    </div>
  );
};

export default Scene;
