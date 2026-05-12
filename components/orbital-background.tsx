"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function supportsWebGL(canvas: HTMLCanvasElement) {
  return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
}

export function OrbitalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !supportsWebGL(canvas)) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const ambientLight = new THREE.AmbientLight(0xcbe1cc, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xff7a59, 1.4);
    directionalLight.position.set(2, 3, 4);
    scene.add(ambientLight, directionalLight);

    const particleCount = 920;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 1.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xcbe1cc,
      size: 0.026,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const coreGeometry = new THREE.IcosahedronGeometry(1.12, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x5b635a,
      emissive: 0x112015,
      roughness: 0.68,
      metalness: 0.15,
      transparent: true,
      opacity: 0.38,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect() ?? canvas.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerRef.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    resize();

    let animationFrame = 0;
    const startedAt = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startedAt) / 1000;
      const pulse = 1 + Math.sin(elapsed * 0.7) * 0.03;
      const pointer = pointerRef.current;

      particles.rotation.y = elapsed * 0.045 + pointer.x * 0.04;
      particles.rotation.x = elapsed * 0.026 + pointer.y * 0.03;
      particles.scale.setScalar(pulse);

      core.rotation.x = elapsed * 0.08 + pointer.y * 0.06;
      core.rotation.y = elapsed * 0.11 + pointer.x * 0.08;

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(203,225,204,0.18),transparent_22rem),radial-gradient(circle_at_65%_55%,rgba(255,122,89,0.12),transparent_18rem)]" />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(203,225,204,0.42)_1px,transparent_1px)] [background-size:18px_18px]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-55" />
    </div>
  );
}
