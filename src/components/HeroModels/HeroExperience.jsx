import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from './Room.jsx'
import HeroLights from "./HeroLights.jsx"
import Particles from "./Particles.jsx"
import { useEffect, useRef, useState } from "react"

const HeroExperience = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        frameloop={isVisible ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance", antialias: true }}
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
      >
        <OrbitControls
         enablePan={ false }
         enableZoom={!isTablet && !isMobile}
         maxDistance={20}
         minDistance={5}
         minPolarAngle={Math.PI / 5}
         maxPolarAngle={Math.PI / 2}
        />

        <HeroLights />

        <Particles count={isMobile ? 40 : 100} />

        <group
         scale={isMobile ? 0.7 : 1}
         position={[0, -3.5, 0]}
         rotation={[0, -Math.PI / 4, 0]}
        >
          <Room isMobile={isMobile || isTablet} />
        </group>
      </Canvas>
    </div>
  )
}

export default HeroExperience