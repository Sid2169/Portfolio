import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useMediaQuery } from "react-responsive"
import { Room } from './Room.jsx'
import HeroLights from "./HeroLights.jsx"
import Particles from "./Particles.jsx"
import { useCallback, useEffect, useRef, useState } from "react"

const ROOM_START_ROTATION_Y = -Math.PI / 4
const ROOM_SWING_ANGLE = Math.PI / 6
const ROOM_SWING_DURATION = 13

const HeroExperience = () => {
  const containerRef = useRef(null);
  const roomGroupRef = useRef(null);
  const roomTweenRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'});

  useEffect(() => {
    const node = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (roomTweenRef.current) {
          if (entry.isIntersecting) {
            roomTweenRef.current.play();
          } else {
            roomTweenRef.current.pause();
          }
        }
      },
      { threshold: 0.05 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useGSAP(() => {
    const group = roomGroupRef.current;
    if (!group) return;

    gsap.set(group.rotation, { y: ROOM_START_ROTATION_Y });

    roomTweenRef.current = gsap.to(group.rotation, {
      y: ROOM_START_ROTATION_Y - ROOM_SWING_ANGLE,
      duration: ROOM_SWING_DURATION,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }, []);

  const stopRoomRotation = useCallback(() => {
    if (roomTweenRef.current) {
      roomTweenRef.current.kill();
      roomTweenRef.current = null;
    }
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
         enabled={!isTablet && !isMobile}
         enablePan={ false }
         enableZoom={!isTablet && !isMobile}
         maxDistance={20}
         minDistance={5}
         minPolarAngle={Math.PI / 5}
         maxPolarAngle={Math.PI / 2}
         onStart={stopRoomRotation}
        />

        <HeroLights />

        <Particles count={isMobile ? 40 : 100} />

        <group
         ref={roomGroupRef}
         scale={isMobile ? 0.7 : 1}
         position={[0, -3.5, 0]}
         rotation={[0, ROOM_START_ROTATION_Y, 0]}
        >
          <Room isMobile={isMobile || isTablet} />
        </group>
      </Canvas>
    </div>
  )
}

export default HeroExperience