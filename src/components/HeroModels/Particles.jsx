import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

const SPAWN_Y_MIN = 5;
const SPAWN_Y_RANGE = 10;
const INITIAL_Y_MIN = -2;
const INITIAL_Y_RANGE = 6;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduced(mq.matches);

    handleChange();
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return reduced;
};

const Particles = ({ count = 200 }) => {
  const mesh = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * SPAWN_Y_RANGE + SPAWN_Y_MIN,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (prefersReducedMotion || !mesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i].speed;
      if (y < INITIAL_Y_MIN) y = particles[i].position[1];
      positions[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      array[i * 3] = p.position[0];
      array[i * 3 + 1] = Math.random() * INITIAL_Y_RANGE + INITIAL_Y_MIN;
      array[i * 3 + 2] = p.position[2];
    });
    return array;
  }, [count, particles]);

  return (
    <points ref={mesh} key={count}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;